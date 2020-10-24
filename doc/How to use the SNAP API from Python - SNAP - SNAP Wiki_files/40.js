/*! License: Y539EYKk3y.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"/mAS":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("ERkP"),o=n.n(r),i=n("cYO7"),c=n("L3DF"),u=n("kEG5");const a=(t,e)=>{const n=Object(i.b)({iconGradientStart:e});return`<canvas height="32" width="32" aria-hidden="true"></canvas>\n  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">\n    <defs>\n      <linearGradient x1="94.092%" x2="56.535%" y1="6.033%" y2="43.087%" id="${n}">\n        <stop stop-color="${t}" ${"inherit"===t?'stop-opacity="0.4"':""} offset="18%"></stop>\n        <stop stop-color="${e}" offset="100%"></stop>\n      </linearGradient>\n    </defs>\n    <g stroke="none" stroke-width="1" fill-rule="nonzero">\n      <path d="M26.0406546,5 L14.9983562,5 C14.9983562,6.32163748 15.5233746,7.58914413 16.4579134,8.52368295 C17.3924523,9.45822178 18.6599589,9.98324022 19.9815964,9.98324022 L22.0151159,9.98324022 L22.0151159,11.9465283 C22.0168782,14.6974491 24.2474348,16.9265768 26.9983562,16.9265762 L26.9983562,5.95770152 C26.9983562,5.42877757 26.5695786,5 26.0406546,5 Z" fill="currentColor"></path>\n      <path d="M20.0420436,11 L9,11 C9.00176139,13.7504065 11.2309666,15.9796117 13.9813731,15.9813731 L16.0154337,15.9813731 L16.0154337,17.9451836 C16.0154337,19.2671728 16.5405919,20.5350167 17.4753794,21.4698042 C18.4101669,22.4045917 19.6780108,22.9297499 21,22.9297499 L21,11.9579564 C21,11.4288917 20.5711083,11 20.0420436,11 Z" fill="url(#${n})"></path>\n      <path d="M14.0420436,17 L3,17 C3.00176275,19.7516528 5.23291286,21.9813736 7.98456626,21.9813731 L10.0250133,21.9813731 L10.0250133,23.9451836 C10.0250082,26.6943468 12.2508419,28.9244664 15,28.9297499 L15,17.9579564 C15,17.4288917 14.5711083,17 14.0420436,17 Z" fill="url(#${n})"></path>\n    </g>\n  </svg>`};class s extends r.Component{render(){return o.a.createElement(u.a,Object.assign({},this.props,{svg:a}))}}s.defaultProps=c.a},"6rIb":function(t,e,n){"use strict";n.d(e,"b",(function(){return i}));var r=n("Czhu"),o=n("ehfC");const i=new o.PluginKey("contextPanelPluginKey");e.a=()=>({name:"contextPanel",pmPlugins:(t=[])=>[{name:"contextPanel",plugin:({dispatch:e})=>function(t,e){return new o.Plugin({key:i,state:{init:(e,n)=>({handlers:t,contents:t.map(t=>t(n))}),apply(t,n,o,c){let u=n;const a=t.getMeta(i);if(t.docChanged||t.selectionSet||a&&a.changed){const t=n.handlers.map(t=>t(c));(t.length!==u.contents.length||t.some(t=>u.contents.indexOf(t)<0))&&(u=Object(r.a)(Object(r.a)({},u),{},{contents:t}))}return u!==n&&e(i,u),u}}})}(t.filter(Boolean),e)}]})},"72zh":function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},"9dFV":function(t,e,n){"use strict";function r(t){return"function"==typeof t}function o(t,e,n={}){const{mapping:o,onDocChanged:i,onSelectionChanged:c}=n;return{createPluginState:(n,u)=>({init:(t,e)=>r(u)?u(e):u,apply:(r,u)=>{const a=o?o(r,u):u;let s=a;const l=r.getMeta(t);return l&&(s=e(a,l)),i&&r.docChanged?s=i(r,s):c&&r.selectionSet&&(s=c(r,s)),s!==a&&n(t,s),s}}),createCommand:(e,n)=>(o,i)=>{if(i){const c=n?n(o.tr,o):o.tr,u=r(e)?e(o):e;if(!c||!u)return!1;i(c.setMeta(t,u))}return!0},getPluginState:e=>t.getState(e)}}n.d(e,"a",(function(){return o}))},CMsp:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return a}));var r,o=n("ehfC"),i=n("I9T1"),c=n("prz2");!function(t){t.LEFT="left",t.RIGHT="right"}(r||(r={}));const u="gapcursor";class a extends o.Selection{constructor(t,e=r.LEFT){super(t,t),this.side=e,this.visible=!1}static valid(t){const{parent:e,nodeBefore:n,nodeAfter:r}=t;if(!(Object(c.a)(n)?n:Object(c.a)(r)?r:null)||e.isTextblock)return!1;const o=e.contentMatchAt(t.index()).defaultType;return o&&o.isTextblock}static findFrom(t,e,n=!1){const o=1===e?r.RIGHT:r.LEFT;if(!n&&a.valid(t))return new a(t,o);let i=t.pos,c=null;for(let u=t.depth;;u--){const n=t.node(u);if(o===r.RIGHT?t.indexAfter(u)<n.childCount:t.index(u)>0){c=n.maybeChild(o===r.RIGHT?t.indexAfter(u):t.index(u)-1);break}if(0===u)return null;i+=e;const s=t.doc.resolve(i);if(a.valid(s))return new a(s,o)}for(;c=o===r.RIGHT?c.firstChild:c.lastChild,null!==c;){i+=e;const n=t.doc.resolve(i);if(a.valid(n))return new a(n,o)}return null}static fromJSON(t,e){return new a(t.resolve(e.pos),e.side)}map(t,e){const n=t.resolve(e.map(this.head));return a.valid(n)?new a(n,this.side):o.Selection.near(n)}eq(t){return t instanceof a&&t.head===this.head}content(){return i.Slice.empty}getBookmark(){return new s(this.anchor)}toJSON(){return{pos:this.head,type:u,side:this.side}}}o.Selection.jsonID(u,a);class s{constructor(t){this.pos=t}map(t){return new s(t.map(this.pos))}resolve(t){const e=t.resolve(this.pos);return a.valid(e)?new a(e):o.Selection.near(e)}}},DBvH:function(t,e,n){"use strict";function r(t,e){let n=t;for(;n&&n.parentElement&&!e(n);)n=n.parentElement;return n}function o(t,e){const n=document.createDocumentFragment();Array.from(e.children).forEach(t=>{n.appendChild(t)}),t.replaceChild(n,e)}function i(t){for(;t.parentElement&&0===t.childElementCount&&""===t.textContent;){const e=t.parentElement;e.removeChild(t),t=e}}n.d(e,"h",(function(){return r})),n.d(e,"g",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return a})),n.d(e,"e",(function(){return s})),n.d(e,"d",(function(){return l}));const c=(t,e)=>{if(!t)return!1;if(t.classList&&t.classList.contains)return t.classList.contains(e);if(!t.className)return!1;return-1!==("string"==typeof t.className.baseVal?t.className.baseVal:t.className).split(" ").indexOf(e)};function u(t,e){if(!t)return null;let n=t;if(!document.documentElement||!document.documentElement.contains(n))return null;if(n.closest)return n.closest(e);do{const t=n.matches?n.matches:n.msMatchesSelector;if(t&&t.call(n,e))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null}function a(t,e){return u(t,e)}function s(t){if(!t.endsWith("px"))return;const e=parseInt(t,10);return Number.isNaN(e)?void 0:e}function l(t,e){return function(t,e){const n=[];for(let r=0;r<t.childElementCount;r++)n.push(e(t.children[r],r,t));return n}(t,e)}},DPCN:function(t,e,n){"use strict";(function(e){function r(t,e){if(t===e)return 0;for(var n=t.length,r=e.length,o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0}function o(t){return e.Buffer&&"function"==typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var i=n("XLvf"),c=Object.prototype.hasOwnProperty,u=Array.prototype.slice,a="foo"===function(){}.name;function s(t){return Object.prototype.toString.call(t)}function l(t){return!o(t)&&("function"==typeof e.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}var f=t.exports=g,d=/\s*function\s+([^\(\s]*)\s*/;function p(t){if(i.isFunction(t)){if(a)return t.name;var e=t.toString().match(d);return e&&e[1]}}function h(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function y(t){if(a||!i.isFunction(t))return i.inspect(t);var e=p(t);return"[Function"+(e?": "+e:"")+"]"}function m(t,e,n,r,o){throw new f.AssertionError({message:n,actual:t,expected:e,operator:r,stackStartFunction:o})}function g(t,e){t||m(t,!0,e,"==",f.ok)}function b(t,e,n,c){if(t===e)return!0;if(o(t)&&o(e))return 0===r(t,e);if(i.isDate(t)&&i.isDate(e))return t.getTime()===e.getTime();if(i.isRegExp(t)&&i.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(l(t)&&l(e)&&s(t)===s(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===r(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(o(t)!==o(e))return!1;var a=(c=c||{actual:[],expected:[]}).actual.indexOf(t);return-1!==a&&a===c.expected.indexOf(e)||(c.actual.push(t),c.expected.push(e),function(t,e,n,r){if(null==t||null==e)return!1;if(i.isPrimitive(t)||i.isPrimitive(e))return t===e;if(n&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var o=v(t),c=v(e);if(o&&!c||!o&&c)return!1;if(o)return t=u.call(t),e=u.call(e),b(t,e,n);var a,s,l=E(t),f=E(e);if(l.length!==f.length)return!1;for(l.sort(),f.sort(),s=l.length-1;s>=0;s--)if(l[s]!==f[s])return!1;for(s=l.length-1;s>=0;s--)if(a=l[s],!b(t[a],e[a],n,r))return!1;return!0}(t,e,n,c))}return n?t===e:t==e}function v(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function O(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(n){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function w(t,e,n,r){var o;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),o=function(t){var e;try{t()}catch(n){e=n}return e}(e),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),t&&!o&&m(o,n,"Missing expected exception"+r);var c="string"==typeof r,u=!t&&o&&!n;if((!t&&i.isError(o)&&c&&O(o,n)||u)&&m(o,n,"Got unwanted exception"+r),t&&o&&n&&!O(o,n)||!t&&o)throw o}f.AssertionError=function(t){var e;this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=h(y((e=this).actual),128)+" "+e.operator+" "+h(y(e.expected),128),this.generatedMessage=!0);var n=t.stackStartFunction||m;if(Error.captureStackTrace)Error.captureStackTrace(this,n);else{var r=new Error;if(r.stack){var o=r.stack,i=p(n),c=o.indexOf("\n"+i);if(c>=0){var u=o.indexOf("\n",c+1);o=o.substring(u+1)}this.stack=o}}},i.inherits(f.AssertionError,Error),f.fail=m,f.ok=g,f.equal=function(t,e,n){t!=e&&m(t,e,n,"==",f.equal)},f.notEqual=function(t,e,n){t==e&&m(t,e,n,"!=",f.notEqual)},f.deepEqual=function(t,e,n){b(t,e,!1)||m(t,e,n,"deepEqual",f.deepEqual)},f.deepStrictEqual=function(t,e,n){b(t,e,!0)||m(t,e,n,"deepStrictEqual",f.deepStrictEqual)},f.notDeepEqual=function(t,e,n){b(t,e,!1)&&m(t,e,n,"notDeepEqual",f.notDeepEqual)},f.notDeepStrictEqual=function t(e,n,r){b(e,n,!0)&&m(e,n,r,"notDeepStrictEqual",t)},f.strictEqual=function(t,e,n){t!==e&&m(t,e,n,"===",f.strictEqual)},f.notStrictEqual=function(t,e,n){t===e&&m(t,e,n,"!==",f.notStrictEqual)},f.throws=function(t,e,n){w(!0,t,e,n)},f.doesNotThrow=function(t,e,n){w(!1,t,e,n)},f.ifError=function(t){if(t)throw t};var E=Object.keys||function(t){var e=[];for(var n in t)c.call(t,n)&&e.push(n);return e}}).call(this,n("fRV1"))},GlNo:function(t,e,n){"use strict";var r=n("tCDL");e.a=t=>{const{invokeSingle:e,invokeList:n}=Object(r.a)(t);return{getExtensions:()=>n("getExtensions"),getExtension:(t,n)=>e("getExtension",[t,n]),search:t=>n("search",[t]),getAutoConverter:()=>n("getAutoConverter")}}},JAZo:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const r=["paragraph","bulletList","orderedList","listItem","taskItem","decisionItem","heading","blockquote","layoutColumn"],o=t=>!!t&&-1!==r.indexOf(t.type.name)},L3DF:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));const r={iconColor:"inherit",textColor:"currentColor",iconGradientStart:"inherit",iconGradientStop:"inherit",size:"medium",label:""},o={xsmall:16,small:24,medium:32,large:40,xlarge:48}},MWcs:function(t,e,n){"use strict";n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"e",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"d",(function(){return d}));var r=n("Czhu"),o=(n("0Hbo"),n("ehfC")),i=n("5lAk");n("CMsp");const c=(t,e)=>{const{state:n,dispatch:r}=t;if(!isFinite(e))return;r(n.tr.setSelection(o.NodeSelection.create(n.doc,e)))};function u(t,e,n){const{state:r,dispatch:i}=t;i(r.tr.setSelection(o.TextSelection.create(r.doc,e,n)))}const a=(t,e)=>{if(t.selection.$from.depth>1){if(e.attrs.layout&&"default"!==e.attrs.layout)return e.type.createChecked(Object(r.a)(Object(r.a)({},e.attrs),{},{layout:"default"}),e.content,e.marks);const n=t.schema.marks.breakout;if(n&&n.isInSet(e.marks)){const t=n.removeFromSet(e.marks);return e.type.createChecked(e.attrs,e.content,t)}}return e},s=i.a.chrome&&!i.a.android&&i.a.chrome_version>=58,l=(t,e)=>{if(!e)return!1;for(let n=t.depth+1;n>0;n--){const r=t.node(n);if(r&&r.eq(e.node))break;if(n>1&&t.before(n)!==t.before(n-1)+1)return!1}return!0},f=(t,e)=>{if(!e)return!1;for(let n=t.depth+1;n>0;n--){const r=t.node(n);if(r&&r.eq(e.node))break;if(n>1&&t.after(n)!==t.after(n-1)-1)return!1}return!0},d=(t,e)=>t>=0&&t<=e.doc.resolve(0).end()},NscV:function(t,e,n){"use strict";var r=n("9dFV"),o=n("Czhu"),i=n("icD4");n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return s}));const c=Object(r.a)(i.a,(function(t,e){switch(e.type){case"UPDATE_STATE":return Object(o.a)(Object(o.a)({},t),e.data);default:return t}})),u=c.createPluginState,a=c.createCommand,s=c.getPluginState},OiFN:function(t,e,n){"use strict";var r=n("Czhu"),o=n("m23B"),i=n("6rIb");const c=t=>t.setMeta(i.b,{changed:!0});var u=n("NscV"),a=n("zpdP");function s(t){return Object(u.a)({type:"UPDATE_STATE",data:t})}function l(t,e){return Object(u.a)({type:"UPDATE_STATE",data:{showContextPanel:!0,processParametersBefore:t,processParametersAfter:e}},c)}n.d(e,"e",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return p}));const f=Object(u.a)({type:"UPDATE_STATE",data:{showContextPanel:!1,processParametersBefore:void 0,processParametersAfter:void 0}},c),d=(Object(u.a)({type:"UPDATE_STATE",data:{showContextPanel:!0}},c),t=>Object(u.a)({type:"UPDATE_STATE",data:{layout:t}},(e,n)=>{const o=Object(a.b)(n,!0);return o?e.setNodeMarkup(o.pos,void 0,Object(r.a)(Object(r.a)({},o.node.attrs),{},{layout:t})):e})),p=()=>Object(u.a)({type:"UPDATE_STATE",data:{element:void 0}},(t,e)=>Object(a.b)(e)?Object(o.removeSelectedNode)(t):Object(o.removeParentNodeOfType)(e.schema.nodes.bodiedExtension)(t))},ULBo:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return h}));var r=n("Czhu"),o=n("ehfC"),i=n("DPCN"),c=n.n(i),u=n("wdxN"),a=n("m23B"),s=n("MWcs"),l=n("m/ut");const f=(t,e,n)=>async(r,i)=>{if(!t)return!1;const c=await t.openMacroBrowser(e);if(c){const t=e&&e.attrs.layout||"default",u=d(c,r,{layout:t});if(!u)return!1;const{schema:{nodes:{bodiedExtension:s}}}=r;let{tr:l}=r;const f=e.type===s&&!(l.selection instanceof o.NodeSelection);return f&&!n?l=Object(a.safeInsert)(u)(l):f?l=Object(a.replaceParentNodeOfType)(s,u)(l):l.selection instanceof o.NodeSelection&&(l=Object(a.replaceSelectedNode)(u)(l)),i&&i(l.scrollIntoView()),!0}return!1},d=(t,e,n)=>{if(!t||!e)return null;const{schema:o}=e,{type:i,attrs:c}=Object(u.c)(t,o);let a;return"extension"===i?a=o.nodes.extension.create(Object(r.a)(Object(r.a)({},c),n)):"bodiedExtension"===i?a=o.nodes.bodiedExtension.create(Object(r.a)(Object(r.a)({},c),n),o.nodeFromJSON(t).content):"inlineExtension"===i&&(a=o.nodes.inlineExtension.create(c)),Object(s.e)(e,a)},p=(t,e)=>{const n=l.a.getState(t),r=n&&n.macroProvider;if(!r||!r.autoConvert)return null;const o=r.autoConvert(e);return o?d(o,t):null},h=t=>async e=>{let n;try{n=await t,c()(n&&n.openMacroBrowser,"MacroProvider promise did not resolve to a valid instance of MacroProvider - "+n)}catch(r){n=null}return e.dispatch(e.state.tr.setMeta(l.a,{macroProvider:n})),!0}},XLvf:function(t,e,n){(function(t){var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r]);return n},o=/%[sdj%]/g;e.format=function(t){if(!g(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(u(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,c=String(t).replace(o,(function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return t}})),a=r[n];n<i;a=r[++n])y(a)||!O(a)?c+=" "+a:c+=" "+u(a);return c},e.deprecate=function(n,r){if(void 0!==t&&!0===t.noDeprecation)return n;if(void 0===t)return function(){return e.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(t.throwDeprecation)throw new Error(r);t.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var i,c={};function u(t,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&e._extend(r,n),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=a),l(r,t,r.depth)}function a(t,e){var n=u.styles[e];return n?"["+u.colors[n][0]+"m"+t+"["+u.colors[n][1]+"m":t}function s(t,e){return t}function l(t,n,r){if(t.customInspect&&n&&S(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return g(o)||(o=l(t,o,r)),o}var i=function(t,e){if(b(e))return t.stylize("undefined","undefined");if(g(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(m(e))return t.stylize(""+e,"number");if(h(e))return t.stylize(""+e,"boolean");if(y(e))return t.stylize("null","null")}(t,n);if(i)return i;var c=Object.keys(n),u=function(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}(c);if(t.showHidden&&(c=Object.getOwnPropertyNames(n)),E(n)&&(c.indexOf("message")>=0||c.indexOf("description")>=0))return f(n);if(0===c.length){if(S(n)){var a=n.name?": "+n.name:"";return t.stylize("[Function"+a+"]","special")}if(v(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return t.stylize(Date.prototype.toString.call(n),"date");if(E(n))return f(n)}var s,O="",x=!1,j=["{","}"];(p(n)&&(x=!0,j=["[","]"]),S(n))&&(O=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(O=" "+RegExp.prototype.toString.call(n)),w(n)&&(O=" "+Date.prototype.toUTCString.call(n)),E(n)&&(O=" "+f(n)),0!==c.length||x&&0!=n.length?r<0?v(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),s=x?function(t,e,n,r,o){for(var i=[],c=0,u=e.length;c<u;++c)T(e,String(c))?i.push(d(t,e,n,r,String(c),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(d(t,e,n,r,o,!0))})),i}(t,n,r,u,c):c.map((function(e){return d(t,n,r,u,e,x)})),t.seen.pop(),function(t,e,n){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(s,O,j)):j[0]+O+j[1]}function f(t){return"["+Error.prototype.toString.call(t)+"]"}function d(t,e,n,r,o,i){var c,u,a;if((a=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?u=a.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):a.set&&(u=t.stylize("[Setter]","special")),T(r,o)||(c="["+o+"]"),u||(t.seen.indexOf(a.value)<0?(u=y(n)?l(t,a.value,null):l(t,a.value,n-1)).indexOf("\n")>-1&&(u=i?u.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+u.split("\n").map((function(t){return"   "+t})).join("\n")):u=t.stylize("[Circular]","special")),b(c)){if(i&&o.match(/^\d+$/))return u;(c=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(c=c.substr(1,c.length-2),c=t.stylize(c,"name")):(c=c.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),c=t.stylize(c,"string"))}return c+": "+u}function p(t){return Array.isArray(t)}function h(t){return"boolean"==typeof t}function y(t){return null===t}function m(t){return"number"==typeof t}function g(t){return"string"==typeof t}function b(t){return void 0===t}function v(t){return O(t)&&"[object RegExp]"===x(t)}function O(t){return"object"==typeof t&&null!==t}function w(t){return O(t)&&"[object Date]"===x(t)}function E(t){return O(t)&&("[object Error]"===x(t)||t instanceof Error)}function S(t){return"function"==typeof t}function x(t){return Object.prototype.toString.call(t)}function j(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(b(i)&&(i=t.env.NODE_DEBUG||""),n=n.toUpperCase(),!c[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=t.pid;c[n]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",n,r,t)}}else c[n]=function(){};return c[n]},e.inspect=u,u.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},u.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=p,e.isBoolean=h,e.isNull=y,e.isNullOrUndefined=function(t){return null==t},e.isNumber=m,e.isString=g,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=b,e.isRegExp=v,e.isObject=O,e.isDate=w,e.isError=E,e.isFunction=S,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n("72zh");var C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function P(){var t=new Date,e=[j(t.getHours()),j(t.getMinutes()),j(t.getSeconds())].join(":");return[t.getDate(),C[t.getMonth()],e].join(" ")}function T(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",P(),e.format.apply(e,arguments))},e.inherits=n("cwbO"),e._extend=function(t,e){if(!e||!O(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t};var k="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function A(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(k&&t[k]){var e;if("function"!=typeof(e=t[k]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,k,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise((function(t,r){e=t,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(t,r){t?n(t):e(r)}));try{t.apply(this,o)}catch(c){n(c)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),k&&Object.defineProperty(e,k,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=k,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,c=function(){return o.apply(i,arguments)};e.apply(this,n).then((function(e){t.nextTick(c,null,e)}),(function(e){t.nextTick(A,e,c)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,r(e)),n}}).call(this,n("F63i"))},cwbO:function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},eObz:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return a}));var r=n("I9T1");function o(t){return t.content}function i(t,e,n=null){const c=[];for(let u=0,a=t.childCount;u<a;u++){const a=t.child(u),s=a.isLeaf?e(a,n,u):e(a.copy(i(a.content,e,a)),n,u);s&&(s instanceof r.Fragment?c.push(...o(s)):Array.isArray(s)?c.push(...s):c.push(s))}return r.Fragment.fromArray(c)}function c(t,e){const n=i(t.content,e);return new r.Slice(n,t.openStart,t.openEnd)}function u(t,e){const n=[];for(let r=0;r<t.childCount;r++){const o=e(t.child(r),r,t);Array.isArray(o)?n.push(...o):n.push(o)}return r.Fragment.fromArray(n)}function a(t,e){const n=[];for(let o=0;o<t.childCount;o++)n.push(e(t.child(o),o,t instanceof r.Fragment?t:t.content));return n}},icD4:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=new(n("ehfC").PluginKey)("extensionPlugin")},kEG5:function(t,e,n){"use strict";var r=n("HbGN"),o=n("ERkP"),i=n.n(o),c=n("KsTJ"),u=n("L3DF");const a=c.default.span`
  color: ${t=>t.iconColor};
  display: inline-block;
  fill: ${t=>t.textColor};
  height: ${t=>t.size&&u.b[t.size]}px;
  position: relative;
  user-select: none;

  > svg {
    fill: inherit;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  > canvas {
    display: block;
    height: 100%;
    visibility: hidden;
  }
  ${t=>"inherit"===t.iconGradientStart&&"inherit"===t.iconGradientStop&&c.css`
      /* Stop-color doesn't properly apply in chrome when the inherited/current color changes.
      * We have to initially set stop-color to inherit (either via DOM attribute or an initial CSS
      * rule) and then override it with currentColor for the color changes to be picked up.
      */
      stop {
        stop-color: currentColor;
      }
    `};
`;e.a=t=>{let{label:e,svg:n}=t,o=Object(r.a)(t,["label","svg"]);return i.a.createElement(a,Object.assign({"aria-label":e||void 0,role:e?"img":"presentation",dangerouslySetInnerHTML:{__html:"function"==typeof n?n(String(o.iconGradientStart),String(o.iconGradientStop)):n}},o))}},"m/ut":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=new(n("ehfC").PluginKey)("macroPlugin")},prz2:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("JAZo");const o=t=>!!t&&!Object(r.a)(t)},qtq1:function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return h})),n.d(e,"d",(function(){return y}));var r=n("Czhu"),o=n("I9T1"),i=n("ehfC"),c=n("m23B"),u=n("eObz"),a=n("ULBo"),s=n("zpdP"),l=n("OiFN"),f=n("NscV");const d=(t,e,n,r)=>(o,u)=>{const a=((t,e,n,r)=>{const{schema:o}=n;switch(t){case"extension":return o.nodes.extension.createChecked(e);case"inlineExtension":return o.nodes.inlineExtension.createChecked(e);case"bodiedExtension":return o.nodes.bodiedExtension.create(e,r)}})(t,e,o,n);if(!a)return;const s=Object(c.isNodeSelection)(o.selection);let l,f=o.tr;s?(f=Object(c.replaceSelectedNode)(a)(f),l=i.NodeSelection.create(f.doc,f.mapping.map(o.selection.anchor))):(f=Object(c.replaceParentNodeOfType)(o.schema.nodes.bodiedExtension,a)(f),l=i.TextSelection.create(f.doc,o.selection.anchor)),f=f.setSelection(l),u&&u(r?f.scrollIntoView():f)},p=t=>{const e=t._privateGetEditorView(),{updateExtension:n}=Object(f.c)(e.state);return h(null,n)(e.state,e.dispatch)},h=(t,e)=>(n,o)=>{const i=Object(s.b)(n,!0);if(!i)return!1;const c=()=>{if(!t)throw new Error("Missing macroProvider. Can't use the macro browser for updates");Object(a.a)(t,i.node,!0)(n,o)};if(e)e.then(e=>{if(e&&o){const t=(({editInLegacyMacroBrowser:t})=>(e,n)=>({editInContextPanel:(t,r)=>{Object(l.c)(t,r)(e,n)},editInLegacyMacroBrowser:t}))({editInLegacyMacroBrowser:c})(n,o);((t,e,n)=>async(o,i)=>{const{attrs:c,type:u}=e.node;if(!o.schema.nodes[u.name])return;const{parameters:a,content:s}=c;try{const e=await t(a,n);if(e){const t=Object(r.a)(Object(r.a)({},c),{},{parameters:Object(r.a)(Object(r.a)({},a),e)});return d(u.name,t,s,!0)(o,i)}}catch(l){}})(e,i,t)(n,o)}else e||!t||c()});else{if(!t)return!1;c()}return!0},y=(t,e)=>{const{bodiedExtension:n}=e.nodes,r=Object(u.d)(t.content,(e,r,o)=>{if(e.type===n&&!r){const n=t.openStart&&0===o,r=t.openEnd&&o+1===t.content.childCount;if(n||r)return e.content}return e});return new o.Slice(r,r.firstChild&&r.firstChild.type!==t.content.firstChild.type?t.openStart-1:t.openStart,r.lastChild&&r.lastChild.type!==t.content.lastChild.type?t.openEnd-1:t.openEnd)}},tCDL:function(t,e,n){"use strict";var r;!function(t){t.FULFILLED="fulfilled",t.FAILED="failed"}(r||(r={}));const o=t=>t.status===r.FULFILLED,i=t=>({status:r.FULFILLED,value:t}),c=t=>({status:r.FAILED,reason:t}),u=t=>Promise.all(t.map(t=>t.then(i).catch(c))),a=t=>t.filter(o).map(t=>t.value);e.a=t=>{if(0===t.length)throw new Error("At least one provider must be provided");const e=async e=>(await(async()=>{const e=await u(t.map(t=>Promise.resolve(t)));return a(e)})()).map(t=>e(t)),n=(t,e)=>n=>{const r=n[t];if("function"==typeof r)return r.apply(n,e);throw new Error(`"${t}" isn't a function of the provider`)};return{invokeSingle:async(t,r)=>{const o=n(t,r);return(t=>{const e=[];return new Promise((n,r)=>{t.forEach(o=>o.then(t=>{if(null==t)throw new Error("Result was not found but the method didn't reject/throw. Please ensure that it doesn't return null or undefined.");n(t)}).catch(n=>{e.push(n),e.length===t.length&&r(n)}))})})(await e(o))},invokeList:async(t,r)=>{const o=n(t,r),i=await u(await e(o)),c=a(i);return(s=c,[].concat(...s)).filter(t=>t);var s}}}},u5XY:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c}));var r=n("2SyA");const o=(t,e)=>{const n=t.map(t=>(t.modules.quickInsert||[]).map(e=>function(t,e){const n=e.title||t.title,o=`${t.key}:${e.key}`,i=Object(r.a)(e.action,t);if(!i)throw new Error(`Couldn't find any action for ${n} (${o})`);return{key:o,title:n,extensionType:t.type,keywords:e.keywords||t.keywords||[],featured:e.featured||!1,categories:e.categories||t.categories||[],description:e.description||t.description,summary:t.summary,documentationUrl:t.documentationUrl,icon:e.icon||t.icons[48],node:i}}(t,e)));return[].concat(...n).map((t,n)=>e(t,n))};async function i(t){const e=await Promise.all(t.map(async t=>t.modules.autoConvert&&t.modules.autoConvert.url?t.modules.autoConvert.url:[]));return[].concat(...e)}async function c(t){const e=await t,n=await e.getAutoConverter();return r=n,t=>{for(const e of r){const n=e(t);if(n)return n}};var r}},zpdP:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return u}));var r=n("m23B"),o=n("DBvH");const i=(t,e=!1)=>{const{inlineExtension:n,extension:o,bodiedExtension:i}=t.schema.nodes,c=[o,i,n];return Object(r.findSelectedNodeOfType)(c)(t.selection)||e&&Object(r.findParentNodeOfType)(c)(t.selection)||void 0},c=({schema:t,selection:e})=>{const{inlineExtension:n,extension:o}=t.nodes;return Object(r.findSelectedNodeOfType)([n,o])(e)},u=(t,e,n=!1)=>{const i=e&&Object(r.findDomRefAtPos)(e.pos,t);return e&&i.querySelector?n?i.querySelector(".extension-container")||i:Object(o.b)(i,".extension-container")||i.querySelector(".extension-container")||i:void 0}}}]);
//# sourceMappingURL=40.LhmkbwUPHj.js.map