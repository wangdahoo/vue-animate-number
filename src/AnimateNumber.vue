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
        typeof this.from === 'string'
          ? this.num = this.formatter(parseFloat(this.from))
          : this.num = this.formatter(this.from)
      }
    },

    methods: {
      updateNumber (state) {
        this.num = this.formatter
          ? this.formatter(state.x)
          : state.x
      },

      makeOptions () {
        let _from = typeof this.from === 'string'
        ? { x: parseFloat(this.from) }
        : { x: this.from }

        let _to = typeof this.to === 'string'
          ? { x: parseFloat(this.to) }
          : { x: this.to }

        let _dur = typeof this.duration === 'string'
          ? parseFloat(this.duration)
          : this.duration

        this.options = {
          from: _from,
          to: _to,
          duration: _dur,
          easing: this.easing,
          step: this.updateNumber
        }
      },

      start () {
        if (this.state > 0) return
        this.state = 1
        shifty.tween(this.options).then(this.updateNumber)
      }
    }
  }
</script>
