<template>
  <span v-if="num != undefined" v-text="num"
    :style="numColor"></span>
</template>
<script>
  import shifty from './shifty'
  const MANUAL = 'manual'
  const AUTO = 'auto'

  const RE_FLOAT = /^\d+(\.\d+)?$/
  const RE_INT = /^\[1-9][0-9]*$/
  const RE_COLOR = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/

  const isNumber = (v) => {
    return typeof v === 'number' || (
      typeof v === 'string' && (RE_FLOAT.test(v) || RE_INT.test(v))
    )
  }

  const isColor = (v) => {
    return RE_COLOR.test(v)
  }

  const hexToRGB = (hex) => {
    hex = hex.replace('#', '')
    if (hex.length === 3) {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
    }

    return {
      r: parseInt(hex.substr(0, 2), 16),
      g: parseInt(hex.substr(2, 2), 16),
      b: parseInt(hex.substr(4, 2), 16)
    }
  }

  const extend = (target, source) => {
    for (let k in source) {
      target[k] = source[k]
    }
  }

  export default {
    props: {
      from: {
        type: [Number, String],
        required: true,
        validator: isNumber
      },
      to: {
        type: [Number, String],
        required: true,
        validator: isNumber
      },
      duration: {
        type: [Number, String],
        default: 1000,
        validator: isNumber
      },
      easing: {
        type: String,
        default: 'easeOutQuad'
      },
      formatter: {
        type: Function,
        default: parseInt
      },
      mode: {
        type: String,
        validator: function (v) {
          return v === AUTO || v === MANUAL
        },
        default: AUTO
      },
      animateEnd: Function,
      fromColor: {
        type: String,
        validator: isColor
      },
      toColor: {
        type: String,
        validator: isColor
      }
    },

    computed: {
      _from: function () {
        return this.from
      },

      _to: function () {
        return this.to
      },

      _fromColor: function () {
        return this.fromColor
      },

      _toColor: function () {
        return this.toColor
      }
    },

    data () {
      return {
        num: undefined,
        options: undefined,
        state: 0, // 0: stop, 1: animation started
        numColor: {}
      }
    },

    mounted () {
      this.makeOptions()
      if (this.mode === AUTO) this.start()
      if (this.mode === MANUAL) {
        typeof this._from === 'string'
          ? this.num = this.formatter(parseFloat(this._from))
          : this.num = this.formatter(this._from)

        if (this._fromColor && this._toColor) {
          let {r, g, b} = hexToRGB(this._fromColor)
          this.numColor = { color: `rgb(${parseInt(r)}, ${parseInt(g)}, ${parseInt(b)})` }
        }
      }
    },

    methods: {
      updateNumber (state) {
        this.num = this.formatter
          ? this.formatter(state.x)
          : state.x

        this.numColor = { color: `rgb(${parseInt(state.r)}, ${parseInt(state.g)}, ${parseInt(state.b)})` }
      },

      makeOptions () {
        let from = typeof this._from === 'string'
          ? { x: parseFloat(this._from) }
          : { x: this._from }

        let to = typeof this._to === 'string'
          ? { x: parseFloat(this._to) }
          : { x: this._to }

        if (this._fromColor && this._toColor) {
          let fromRGB = hexToRGB(this._fromColor)
          extend(from, fromRGB)
          let toRGB = hexToRGB(this._toColor)
          extend(to, toRGB)
        }

        let duration = typeof this.duration === 'string'
          ? parseFloat(this.duration)
          : this.duration

        this.options = {
          from: from,
          to: to,
          duration: duration,
          easing: this.easing,
          step: this.updateNumber
        }
      },

      start (options) {
        if (this.state > 0) return
        this.state = 1

        if (options) extend(this.options, options)
        if (this.options.duration === 0) this.options.duration = 1

        shifty.tween(this.options).then(this.updateNumber).then(() => {
          this.state = 0
          if (this.animateEnd) this.animateEnd(parseFloat(this.num))
        })
      },

      reset (from, to, fromColor, toColor) {
        this.options.from = typeof from === 'string'
          ? { x: parseFloat(from) }
          : { x: from }

        this.options.to = typeof to === 'string'
          ? { x: parseFloat(to) }
          : { x: to }

        if (fromColor && isColor(fromColor) && toColor && isColor(toColor)) {
          let fromRGB = hexToRGB(fromColor)
          extend(this.options.from, fromRGB)
          let toRGB = hexToRGB(toColor)
          extend(this.options.to, toRGB)
        }
      }
    }
  }
</script>
