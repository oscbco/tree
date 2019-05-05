!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports.TriplePane=t(require("react"),require("prop-types")):e.TriplePane=t(e.React,e.PropTypes)}(window,function(n,r){return function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./",o(o.s=1)}([function(e,t){e.exports=n},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}}(n(0)),a=r(n(3)),u=r(n(6)),s="/home/darkcode/Projects/libraries/triple-pane/source/TriplePane/TriplePane.js";function r(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(e){function o(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),n=this,r=p(o).call(this,e),m(f(t=!r||"object"!==l(r)&&"function"!=typeof r?f(n):r),"size",function(e){return e&&t.setState(e),{width:t.state.width,height:t.state.height}}),m(f(t),"getGrid",function(){return{gridTemplateColumns:"[start]"+t.state.width+"px [a] auto [end]",gridTemplateRows:"[start]"+t.state.height+"px [a] auto [end]"}}),m(f(t),"handlers",{m1:{a:[]},m2:{a:["e"],b:[]},m3:{a:["s"],b:[]},m4:{a:["e","s","se"],b:["s"],c:[]},m5:{a:["e"],b:["s","sw"],c:[]},m6:{a:["s"],b:[],c:["e","ne"]},m7:{a:["s","se"],b:["w"],c:[]}}),t.state={width:t.props.width,height:t.props.height},t}var t,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(o,i.PureComponent),t=o,(n=[{key:"render",value:function(){var e=this.props,t=e.mode,n=e.areaa,r=e.areab,o=e.areac;return i.default.createElement("div",{id:u.default.appcontent,className:u.default[t],style:this.getGrid(),__source:{fileName:s,lineNumber:70}},i.default.createElement(a.default,{className:u.default[n],handlers:this.handlers[t][n],size:this.size,parentId:u.default.appcontent,debouncingFunction:this.props.debouncingFunction,__source:{fileName:s,lineNumber:71}},this.props.panea),"m1"!==t?i.default.createElement(a.default,{className:u.default[r],handlers:this.handlers[t][r],size:this.size,parentId:u.default.appcontent,debouncingFunction:this.props.debouncingFunction,__source:{fileName:s,lineNumber:74}},this.props.paneb):null,"m1"!==t&&"m2"!==t&&"m3"!==t?i.default.createElement(a.default,{className:u.default[o],handlers:this.handlers[t][o],size:this.size,parentId:u.default.appcontent,debouncingFunction:this.props.debouncingFunction,__source:{fileName:s,lineNumber:77}},this.props.panec):null)}}])&&c(t.prototype,n),r&&c(t,r),o}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}}(n(0)),r=o(n(4)),i=o(n(5)),u="/home/darkcode/Projects/libraries/triple-pane/source/TriplePane/Resizable/Resizable.js";function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function r(e){var i,t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t=this,n=c(r).call(this,e),d(p(i=!n||"object"!==s(n)&&"function"!=typeof n?p(t):n),"minSize",{minWidth:70,minHeight:70}),d(p(i),"mouseDown",function(e,t){t.preventDefault();var n={x:t.clientX,y:t.clientY},r={width:i.props.size().width,height:i.props.size().height},o={width:document.getElementById(i.props.parentId).offsetWidth,height:document.getElementById(i.props.parentId).offsetHeight};i.bindedMouseMove=i.mouseMove.bind(p(i),e,n,r,o),document.addEventListener("mousemove",i.bindedMouseMove),document.addEventListener("mouseup",i.mouseUp)}),d(p(i),"mouseUp",function(){document.removeEventListener("mousemove",i.bindedMouseMove),document.removeEventListener("mouseup",i.mouseUp),document.body.classList.remove("notransition"),i.props.debouncingFunction(i.props.size().width,i.props.size().height)}),i.resizableRef=a.default.createRef(),i}var t,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(r,a.PureComponent),t=r,(n=[{key:"moveHandleE",value:function(e,t,n,r){var o=n.width+(e.clientX-t.x);o>=this.minSize.minWidth&&o<=r.width-this.minSize.minWidth&&this.props.size({width:o})}},{key:"moveHandleW",value:function(e,t,n,r){var o=n.width+(e.clientX-t.x);o>=this.minSize.minWidth&&o<=r.width-this.minSize.minWidth&&this.props.size({width:o})}},{key:"moveHandleS",value:function(e,t,n,r){var o=n.height+(e.clientY-t.y);o>=this.minSize.minHeight&&o<=r.height-this.minSize.minHeight&&this.props.size({height:o})}},{key:"moveHandleN",value:function(e,t,n,r){var o=n.height+(e.clientY-t.y);o>=this.minSize.minHeight&&o<=r.height-this.minSize.minHeight&&this.props.size({height:o})}},{key:"moveHandleSE",value:function(e,t,n,r){this.moveHandleE(e,t,n,r),this.moveHandleS(e,t,n,r)}},{key:"mouseMove",value:function(e,t,n,r,o){switch(e){case"e":this.moveHandleE(o,t,n,r);break;case"s":this.moveHandleS(o,t,n,r);break;case"w":this.moveHandleW(o,t,n,r);break;case"n":this.moveHandleN(o,t,n,r);break;case"nw":this.moveHandleN(o,t,n,r),this.moveHandleW(o,t,n,r);break;case"ne":this.moveHandleN(o,t,n,r),this.moveHandleE(o,t,n,r);break;case"sw":this.moveHandleS(o,t,n,r),this.moveHandleW(o,t,n,r);break;case"se":this.moveHandleS(o,t,n,r),this.moveHandleE(o,t,n,r)}}},{key:"render",value:function(){var t=this,e=this.props.handlers.map(function(e){return a.default.createElement("div",{key:e,className:i.default[e],onMouseDown:t.mouseDown.bind(t,e),__source:{fileName:u,lineNumber:138}})});return a.default.createElement("div",{ref:this.resizableRef,className:this.props.className+" "+i.default.resizable,__source:{fileName:u,lineNumber:142}},e,this.props.children)}}])&&l(t.prototype,n),o&&l(t,o),r}();d(t.default=m,"propTypes",{className:r.default.string.isRequired,handlers:r.default.array.isRequired,size:r.default.func.isRequired,parentId:r.default.string.isRequired}),d(m,"defaultProps",{handlers:[]})},function(e,t){e.exports=r},function(e,t,n){e.exports={resizable:"_29d_hTYfGIxQO2tFty-G7s",e:"_3BWlqmGMEyxATFm32f-kFm",s:"_1MrPYgvVlhOY46di1yLekJ",w:"_1U2_nD59opSnUocSyF0z9s",n:"_2RkmWrbH7KoATckPeCOjnC",nw:"nO2mVKV3dmibf0YttvUfD",ne:"_25NvDRapUOK164ia-m4hSl",sw:"_2ElzUyWzBTcC_javS9a4G2",se:"_1cY6XotodKKnf11TRI8URg"}},function(e,t,n){e.exports={appcontent:"_19kZefHg9KBPz5MSDl6NuD",panea:"_3satAEmEQbHydfGq4qKQ0K",paneb:"_2shpLEB33VydMrSVQvdPsG",a:"_8uWKWgTHvYhrPfO-jl_1n",b:"_3aKZUJSGVdhM9sp3XID_Y-",c:"_3znO92E_1LAnUqukOxj6N3",m1:"_2mOzJAiwGDw4mZpGjHpMTT",m2:"_2oqh7uwcMN3gOedsaQesVP",m5:"_1hCCAs8NdZCC8s7gog7xI-",m7:"JH_VB4l7THfahd41wsmyV",m3:"oMAa5OLsMyhebvZpyst2X",m6:"_33eH6q9uY7IDFSH_m54qR-",m4:"_19KbSb_7lW4ZSFyZe6v4Hg"}}])});