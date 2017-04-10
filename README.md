# Animate Number

## [Demo](https://wangdahoo.github.io/vue-animate-number/)

## How to Use

#### install

```bash
$ npm install vue-animate-number
```

#### as a vue plugin

```js
import Vue from 'vue'
import VueAnimateNumber from 'vue-animate-number'
Vue.use(VueAnimateNumber)
```

#### examples

```html
<template>
  <div>
    <animate-number
      from="1" 
      to="10" 
      duration="1000" 
      easing="easeOutQuad"
      :formatter="formatter"
    ></animate-number>

    <!-- parseInt as default formatter -->
    <animate-number from="1" to="10"></animate-number>
    
    <!-- manually start animation by click -->
    <animate-number ref="myNum" from="0" to="10" mode="manual" :formatter="formatter"></animate-number><br>
    
    <button type="button" @click="startAnimate()"> animate! </button>
  </div>
</template>

<script>
  export default {
    methods: {
      formatter: function (num) {
        return num.toFixed(2)
      },

      startAnimate: function () {
        this.$refs.myNum.start()
      }
    }
  }
</script>
```

> more `easing` effects: https://github.com/jeremyckahn/shifty/blob/master/src/easing-functions.js

> more examples: https://github.com/wangdahoo/vue-animate-number/blob/master/index.html


## API
```html
<animate-number 
  mode="auto"
  duration="1000"
  :from="from" 
  :to="to"
  from-color="#44CC00" 
  to-color="#ec4949"
  :formatter="formatter" 
  :animate-end="animateEnd">
</animate-number>
```
| prop name | type | description | default | required |
|-----|-----|-----|-----|-----|
| mode | string | `auto` or `manual`, trigger animation immediately or not | `auto` | N |
| from | number | value, at which animate starts | - | Y |
| to | number | value, at which animate ends | - | Y |
| fromColor | string | start color for gradient, in hex format | - | N |
| toColor | string | end color for gradient, in hex format | - | N |
| formatter | Function | value formatter for number in every step during the animation  | `parseInt` | N |
| animateEnd | Function | callback after animation | - | N |
