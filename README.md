# Animate Number

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
