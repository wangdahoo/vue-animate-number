(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueAnimateNumber = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var shifty$1 = createCommonjsModule(function (module, exports) {
/*! 2.0.1 */
!function(t,e){module.exports=e();}(commonjsGlobal,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/assets/",e(0)}([function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.unsetBezierFunction=e.setBezierFunction=e.interpolate=e.tween=e.Tweenable=void 0;var i=n(1),u=n(3),o=n(4),a=n(5),s=r(a);i.Tweenable.filters.token=s,e.Tweenable=i.Tweenable,e.tween=i.tween,e.interpolate=u.interpolate,e.setBezierFunction=o.setBezierFunction,e.unsetBezierFunction=o.unsetBezierFunction;},function(t,e,n){(function(t){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=new M,n=e.tween(t);return n.tweenable=e,n}Object.defineProperty(e,"__esModule",{value:!0}),e.Tweenable=e.composeEasingObject=e.tweenProps=e.clone=e.each=void 0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.tween=u;var s=n(2),c=r(s),f="linear",h=500,l=1e3/60,p="undefined"!=typeof window?window:t,_=p.requestAnimationFrame||p.webkitRequestAnimationFrame||p.oRequestAnimationFrame||p.msRequestAnimationFrame||p.mozCancelRequestAnimationFrame&&p.mozRequestAnimationFrame||setTimeout,d=function(){},m=e.each=function(t,e){Object.keys(t).forEach(e);},v=e.clone=function(t){return Object.assign({},t)},w=v(c),g=function(t,e,n,r){return t+(e-t)*n(r)},y=e.tweenProps=function(t,e,n,r,i,u,o){var a=t<u?0:(t-u)/i;return m(e,function(t){var i=o[t],u="function"==typeof i?i:w[i];e[t]=g(n[t],r[t],u,a);}),e},b=e.composeEasingObject=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f,n={},r="undefined"==typeof e?"undefined":a(e);return"string"===r||"function"===r?m(t,function(t){return n[t]=e}):m(t,function(t){return n[t]=n[t]||e[t]||f}),n},M=e.Tweenable=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;i(this,t),this._currentState=e,this._configured=!1,this._scheduleFunction=_,void 0!==n&&this.setConfig(n);}return o(t,[{key:"_applyFilter",value:function(e){var n=this,r=t.filters,i=this._filterArgs;m(r,function(t){var u=r[t][e];"undefined"!=typeof u&&u.apply(n,i);});}},{key:"_timeoutHandler",value:function(e){var n=this,r=arguments,i=this._delay,u=this._currentState,o=this._timestamp,a=this._duration,s=this._targetState,c=this._step,f=o+i+a,h=Math.min(e||t.now(),f),_=h>=f,d=a-(f-h);this.isPlaying()&&(_?(c(s,this._attachment,d),this.stop(!0)):(this._scheduleId=this._scheduleFunction.call(p,function(){return n._timeoutHandler.apply(n,r)},l),this._applyFilter("beforeTween"),h<o+i?(h=1,a=1,o=1):o+=i,y(h,u,this._originalState,s,a,o,this._easing),this._applyFilter("afterTween"),c(u,this._attachment,d)));}},{key:"tween",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return this._isTweening?this:(void 0===e&&this._configured||this.setConfig(e),this._timestamp=t.now(),this._start(this.get(),this._attachment),this.resume())}},{key:"setConfig",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._configured=!0,this._attachment=e.attachment,Object.assign(this,{_pausedAtTime:null,_scheduleId:null,_delay:e.delay||0,_start:e.start||d,_step:e.step||d,_duration:e.duration||h,_currentState:v(e.from||this.get())}),Object.assign(this,{_originalState:this.get(),_targetState:v(e.to||this.get())});var n=this._currentState;return this._targetState=Object.assign({},n,this._targetState),this._easing=b(n,e.easing),this._filterArgs=[n,this._originalState,this._targetState,this._easing],this._applyFilter("tweenCreated"),this._promise=new Promise(function(e,n){t._resolve=e,t._reject=n;}),this._promise.catch(d),this}},{key:"get",value:function(){return v(this._currentState)}},{key:"set",value:function(t){this._currentState=t;}},{key:"pause",value:function(){return this._pausedAtTime=t.now(),this._isPaused=!0,this}},{key:"resume",value:function(){return this._isPaused&&(this._timestamp+=t.now()-this._pausedAtTime),this._isPaused=!1,this._isTweening=!0,this._timeoutHandler(),this._promise}},{key:"seek",value:function(e){e=Math.max(e,0);var n=t.now();return this._timestamp+e===0?this:(this._timestamp=n-e,this.isPlaying()||(this._isTweening=!0,this._isPaused=!1,this._timeoutHandler(n),this.pause()),this)}},{key:"stop",value:function(t){return this._isTweening=!1,this._isPaused=!1,(p.cancelAnimationFrame||p.webkitCancelAnimationFrame||p.oCancelAnimationFrame||p.msCancelAnimationFrame||p.mozCancelRequestAnimationFrame||p.clearTimeout)(this._scheduleId),t?(this._applyFilter("beforeTween"),y(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),this._applyFilter("afterTween"),this._applyFilter("afterTweenEnd"),this._resolve(this._currentState,this._attachment)):this._reject(this._currentState,this._attachment),this}},{key:"isPlaying",value:function(){return this._isTweening&&!this._isPaused}},{key:"setScheduleFunction",value:function(t){this._scheduleFunction=t;}},{key:"dispose",value:function(){var t=this;m(this,function(e){return delete t[e]});}}]),t}();Object.assign(M,{formulas:w,filters:{},now:Date.now||function(t){return+new Date}});}).call(e,function(){return this}());},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.linear=function(t){return t},e.easeInQuad=function(t){return Math.pow(t,2)},e.easeOutQuad=function(t){return-(Math.pow(t-1,2)-1)},e.easeInOutQuad=function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},e.easeInCubic=function(t){return Math.pow(t,3)},e.easeOutCubic=function(t){return Math.pow(t-1,3)+1},e.easeInOutCubic=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},e.easeInQuart=function(t){return Math.pow(t,4)},e.easeOutQuart=function(t){return-(Math.pow(t-1,4)-1)},e.easeInOutQuart=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},e.easeInQuint=function(t){return Math.pow(t,5)},e.easeOutQuint=function(t){return Math.pow(t-1,5)+1},e.easeInOutQuint=function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},e.easeInSine=function(t){return-Math.cos(t*(Math.PI/2))+1},e.easeOutSine=function(t){return Math.sin(t*(Math.PI/2))},e.easeInOutSine=function(t){return-.5*(Math.cos(Math.PI*t)-1)},e.easeInExpo=function(t){return 0===t?0:Math.pow(2,10*(t-1))},e.easeOutExpo=function(t){return 1===t?1:-Math.pow(2,-10*t)+1},e.easeInOutExpo=function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},e.easeInCirc=function(t){return-(Math.sqrt(1-t*t)-1)},e.easeOutCirc=function(t){return Math.sqrt(1-Math.pow(t-1,2))},e.easeInOutCirc=function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},e.easeOutBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.easeInBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.easeOutBack=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},e.easeInOutBack=function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},e.elastic=function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},e.swingFromTo=function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},e.swingFrom=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.swingTo=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},e.bounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.bouncePast=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},e.easeFromTo=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},e.easeFrom=function(t){return Math.pow(t,4)},e.easeTo=function(t){return Math.pow(t,.25)};},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.interpolate=void 0;var r=n(1),i=new r.Tweenable;i._filterArgs=[];e.interpolate=function(t,e,n,u){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=(0,r.clone)(t),s=(0,r.composeEasingObject)(t,u);i.set({}),i._filterArgs=[a,t,e,s],i._applyFilter("tweenCreated"),i._applyFilter("beforeTween");var c=(0,r.tweenProps)(n,a,t,e,1,o,s);return i._applyFilter("afterTween"),c};},function(t,e,n){"use strict";function r(t,e,n,r,i,u){var o=0,a=0,s=0,c=0,f=0,h=0,l=function(t){return((o*t+a)*t+s)*t},p=function(t){return((c*t+f)*t+h)*t},_=function(t){return(3*o*t+2*a)*t+s},d=function(t){return 1/(200*t)},m=function(t){return t>=0?t:0-t},v=function(t,e){var n=void 0,r=void 0,i=void 0,u=void 0,o=void 0,a=void 0;for(i=t,a=0;a<8;a++){if(u=l(i)-t,m(u)<e)return i;if(o=_(i),m(o)<1e-6)break;i-=u/o;}if(n=0,r=1,i=t,i<n)return n;if(i>r)return r;for(;n<r;){if(u=l(i),m(u-t)<e)return i;t>u?n=i:r=i,i=.5*(r-n)+n;}return i},w=function(t,e){return p(v(t,e))};return s=3*e,a=3*(r-e)-s,o=1-s-a,h=3*n,f=3*(i-n)-h,c=1-h-f,w(t,d(u))}Object.defineProperty(e,"__esModule",{value:!0}),e.unsetBezierFunction=e.setBezierFunction=void 0;var i=n(1),u=function(t,e,n,i){return function(u){return r(u,t,e,n,i,1)}};e.setBezierFunction=function(t,e,n,r,o){return i.Tweenable.formulas[t]=Object.assign(u(e,n,r,o),{displayName:t,x1:e,y1:n,x2:r,y2:o})},e.unsetBezierFunction=function(t){return delete i.Tweenable.formulas[t]};},function(t,e,n){"use strict";function r(t){return parseInt(t,16)}function i(t,e,n){[t,e,n].forEach(b),this._tokenData=T(t);}function u(t,e,n,r){var i=this._tokenData;A(r,i),[t,e,n].forEach(function(t){return k(t,i)});}function o(t,e,n,r){var i=this._tokenData;[t,e,n].forEach(function(t){return I(t,i)}),E(r,i);}Object.defineProperty(e,"__esModule",{value:!0}),e.tweenCreated=i,e.beforeTween=u,e.afterTween=o;var a=n(1),s=/(\d|\-|\.)/,c=/([^\-0-9\.]+)/g,f=/[0-9.\-]+/g,h=function(){var t=f.source,e=/,\s*/.source;return new RegExp("rgb\\("+t+e+t+e+t+"\\)","g")}(),l=/^.*\(/,p=/#([0-9]|[a-f]){3,6}/gi,_="VAL",d=function(t,e){return t.map(function(t,n){return"_"+e+"_"+n})},m=function(t){var e=t.match(c);return e?(1===e.length||t.charAt(0).match(s))&&e.unshift(""):e=["",""],e.join(_)},v=function(t){return t=t.replace(/#/,""),3===t.length&&(t=t.split(""),t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),[r(t.substr(0,2)),r(t.substr(2,2)),r(t.substr(4,2))]},w=function(t){return"rgb("+v(t).join(",")+")"},g=function(t,e,n){var r=e.match(t),i=e.replace(t,_);return r&&r.forEach(function(t){return i=i.replace(_,n(t))}),i},y=function(t){return g(p,t,w)},b=function(t){(0,a.each)(t,function(e){var n=t[e];"string"==typeof n&&n.match(p)&&(t[e]=y(n));});},M=function(t){var e=t.match(f).map(Math.floor),n=t.match(l)[0];return""+n+e.join(",")+")"},F=function(t){return g(h,t,M)},O=function(t){return t.match(f)},T=function(t){var e={};return(0,a.each)(t,function(n){var r=t[n];"string"==typeof r&&(e[n]={formatString:m(r),chunkNames:d(O(r),n)});}),e},k=function(t,e){(0,a.each)(e,function(n){O(t[n]).forEach(function(r,i){return t[e[n].chunkNames[i]]=+r}),delete t[n];});},S=function(t,e){var n={};return e.forEach(function(e){n[e]=t[e],delete t[e];}),n},j=function(t,e){return e.map(function(e){return t[e]})},P=function(t,e){return e.forEach(function(e){return t=t.replace(_,+e.toFixed(4))}),t},I=function(t,e){(0,a.each)(e,function(n){var r=e[n],i=r.chunkNames,u=r.formatString,o=P(u,j(S(t,i),i));t[n]=F(o);});},A=function(t,e){(0,a.each)(e,function(n){var r=e[n].chunkNames,i=t[n];"string"==typeof i?!function(){var e=i.split(" "),n=e[e.length-1];r.forEach(function(r,i){return t[r]=e[i]||n});}():r.forEach(function(e){return t[e]=i}),delete t[n];});},E=function(t,e){(0,a.each)(e,function(n){var r=e[n].chunkNames,i=(r.length,t[r[0]]);"string"==typeof i?t[n]=r.map(function(e){var n=t[e];return delete t[e],n}).join(" "):t[n]=i;});};}])});

});

var shifty_1 = shifty$1;

var MANUAL = 'manual';
var AUTO = 'auto';

var RE_FLOAT = /^\d+(\.\d+)?$/;
var RE_INT = /^\[1-9][0-9]*$/;
var RE_COLOR = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;

var isNumber = function isNumber(v) {
  return typeof v === 'number' || typeof v === 'string' && (RE_FLOAT.test(v) || RE_INT.test(v));
};

var isColor = function isColor(v) {
  return RE_COLOR.test(v);
};

var hexToRGB = function hexToRGB(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = '' + hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  return {
    r: parseInt(hex.substr(0, 2), 16),
    g: parseInt(hex.substr(2, 2), 16),
    b: parseInt(hex.substr(4, 2), 16)
  };
};

var extend = function extend(target, source) {
  for (var k in source) {
    target[k] = source[k];
  }
};

var AnimateNumber = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm.num != undefined ? _c('span', { style: _vm.numColor, domProps: { "textContent": _vm._s(_vm.num) } }) : _vm._e();
  }, staticRenderFns: [],
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
      validator: function validator(v) {
        return v === AUTO || v === MANUAL;
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
    _from: function _from() {
      return this.from;
    },

    _to: function _to() {
      return this.to;
    },

    _fromColor: function _fromColor() {
      return this.fromColor;
    },

    _toColor: function _toColor() {
      return this.toColor;
    }
  },

  data: function data() {
    return {
      num: undefined,
      options: undefined,
      state: 0, // 0: stop, 1: animation started
      numColor: {}
    };
  },
  mounted: function mounted() {
    this.makeOptions();
    if (this.mode === AUTO) this.start();
    if (this.mode === MANUAL) {
      typeof this._from === 'string' ? this.num = this.formatter(parseFloat(this._from)) : this.num = this.formatter(this._from);

      if (this._fromColor && this._toColor) {
        var _hexToRGB = hexToRGB(this._fromColor),
            r = _hexToRGB.r,
            g = _hexToRGB.g,
            b = _hexToRGB.b;

        this.numColor = { color: 'rgb(' + parseInt(r) + ', ' + parseInt(g) + ', ' + parseInt(b) + ')' };
      }
    }
  },


  methods: {
    updateNumber: function updateNumber(state) {
      this.num = this.formatter ? this.formatter(state.x) : state.x;

      this.numColor = { color: 'rgb(' + parseInt(state.r) + ', ' + parseInt(state.g) + ', ' + parseInt(state.b) + ')' };
    },
    makeOptions: function makeOptions() {
      var from = typeof this._from === 'string' ? { x: parseFloat(this._from) } : { x: this._from };

      var to = typeof this._to === 'string' ? { x: parseFloat(this._to) } : { x: this._to };

      if (this._fromColor && this._toColor) {
        var fromRGB = hexToRGB(this._fromColor);
        extend(from, fromRGB);
        var toRGB = hexToRGB(this._toColor);
        extend(to, toRGB);
      }

      var duration = typeof this.duration === 'string' ? parseFloat(this.duration) : this.duration;

      this.options = {
        from: from,
        to: to,
        duration: duration,
        easing: this.easing,
        step: this.updateNumber
      };
    },
    start: function start() {
      var _this = this;

      if (this.state > 0) return;
      this.state = 1;
      shifty_1.tween(this.options).then(this.updateNumber).then(function () {
        _this.state = 0;
        if (_this.animateEnd) _this.animateEnd(parseFloat(_this.num));
      });
    },
    reset: function reset(from, to, fromColor, toColor) {
      this.options.from = typeof from === 'string' ? { x: parseFloat(from) } : { x: from };

      this.options.to = typeof to === 'string' ? { x: parseFloat(to) } : { x: to };

      if (fromColor && isColor(fromColor) && toColor && isColor(toColor)) {
        var fromRGB = hexToRGB(fromColor);
        extend(this.options.from, fromRGB);
        var toRGB = hexToRGB(toColor);
        extend(this.options.to, toRGB);
      }
    }
  }
};

var VueAnimateNumber = {
  install: function install(Vue, options) {
    Vue.component('animate-number', AnimateNumber);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueAnimateNumber);
}

return VueAnimateNumber;

})));
