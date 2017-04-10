<template>
  <span v-if="num != undefined" v-text="num"></span>
</template>
<script>
  import shifty from './shifty'

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
      formatter: Function
    },

    data () {
      return {
        num: undefined
      }
    },

    mounted () {
      let _from = typeof this.from === 'string'
        ? { x: parseFloat(this.from) }
        : { x: this.from }

      let _to = typeof this.to === 'string'
        ? { x: parseFloat(this.to) }
        : { x: this.to }

      let _dur = typeof this.duration === 'string'
        ? parseFloat(this.duration)
        : this.duration

      shifty.tween({
        from: _from,
        to: _to,
        duration: _dur,
        easing: this.easing,
        step: this.updateNumber
      }).then(this.updateNumber)
    },

    methods: {
      updateNumber (state) {
        this.num = this.formatter
          ? this.formatter(state.x)
          : state.x
      }
    }
  }
</script>
