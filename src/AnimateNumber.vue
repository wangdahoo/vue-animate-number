<template>
  <span v-if="num != undefined" v-text="num"></span>
</template>
<script>
  import shifty from './shifty'
  const MANUAL = 'manual'
  const AUTO = 'auto'

  const RE_FLOAT = /^\d+(\.\d+)?$/
  const RE_INT = /^\[1-9][0-9]*$/

  const isNumber = (v) => {
    return typeof v === 'number' || (
      typeof v === 'string' && (RE_FLOAT.test(v) || RE_INT.test(v))
    )
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

      animateEnd: Function
    },

    computed: {
      _from: function () {
        return this.from
      },

      _to: function () {
        return this.to
      }
    },

    data () {
      return {
        num: undefined,
        options: undefined,
        state: 0 // 0: stop, 1: animation started
      }
    },

    mounted () {
      this.makeOptions()
      if (this.mode === AUTO) this.start()
      if (this.mode === MANUAL) {
        typeof this._from === 'string'
          ? this.num = this.formatter(parseFloat(this._from))
          : this.num = this.formatter(this._from)
      }
    },

    methods: {
      updateNumber (state) {
        this.num = this.formatter
          ? this.formatter(state.x)
          : state.x
      },

      makeOptions () {
        let from = typeof this._from === 'string'
          ? { x: parseFloat(this._from) }
          : { x: this._from }

        let to = typeof this._to === 'string'
          ? { x: parseFloat(this._to) }
          : { x: this._to }

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

      start () {
        if (this.state > 0) return
        this.state = 1
        shifty.tween(this.options).then(this.updateNumber).then(() => {
          this.state = 0
          if (this.animateEnd) this.animateEnd(parseFloat(this.num))
        })
      },

      reset (from, to) {
        this.options.from = typeof from === 'string'
          ? { x: parseFloat(from) }
          : { x: from }

        this.options.to = typeof to === 'string'
          ? { x: parseFloat(to) }
          : { x: to }
      }
    }
  }
</script>
