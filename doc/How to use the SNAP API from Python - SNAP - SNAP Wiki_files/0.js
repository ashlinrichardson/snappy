(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3eOh":function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return f}));var r=n("ERkP"),o=function(e){return Array.isArray(e)?e[0]:e},i=function(e){if("function"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.apply(void 0,n)}},a=function(e,t){if("function"==typeof e)return i(e,t);null!=e&&(e.current=t)},s=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},f="undefined"!=typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect},NI0Q:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n("ERkP"),o=r.createContext(),i=r.createContext();function a(e){var t=e.children,n=r.useState(null),a=n[0],s=n[1];return r.useEffect((function(){return function(){s(null)}}),[s]),r.createElement(o.Provider,{value:a},r.createElement(i.Provider,{value:s},t))}},bLpi:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("ERkP"),o=n.n(r),i=n("ewQW");const a=[{name:"flip",options:{flipVariations:!1,padding:5,boundary:"clippingParents",rootBoundary:"viewport"}},{name:"preventOverflow",options:{padding:5,rootBoundary:"document"}}];function s(){return null}const f=[0,8];function c({children:e=s,offset:t=f,placement:n="bottom-start",referenceElement:c,modifiers:u,strategy:p="fixed"}){const[l,d]=t,m=Object(r.useMemo)(()=>[...a,{name:"offset",options:{offset:[l,d]}}],[l,d]),h=Object(r.useMemo)(()=>null==u?m:[...m,...u],[m,u]);return o.a.createElement(i.a,{modifiers:h,placement:n,strategy:p,referenceElement:c},e)}},d2al:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var s,f,c,u;if(Array.isArray(t)){if((s=t.length)!=a.length)return!1;for(f=s;0!=f--;)if(!e(t[f],a[f]))return!1;return!0}if(r&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(u=t.entries();!(f=u.next()).done;)if(!a.has(f.value[0]))return!1;for(u=t.entries();!(f=u.next()).done;)if(!e(f.value[1],a.get(f.value[0])))return!1;return!0}if(o&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(u=t.entries();!(f=u.next()).done;)if(!a.has(f.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((s=t.length)!=a.length)return!1;for(f=s;0!=f--;)if(t[f]!==a[f])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((s=(c=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(f=s;0!=f--;)if(!Object.prototype.hasOwnProperty.call(a,c[f]))return!1;if(n&&t instanceof Element)return!1;for(f=s;0!=f--;)if(("_owner"!==c[f]&&"__v"!==c[f]&&"__o"!==c[f]||!t.$$typeof)&&!e(t[c[f]],a[c[f]]))return!1;return!0}return t!=t&&a!=a}(e,t)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}}},ewQW:function(e,t,n){"use strict";var r=n("ERkP"),o=n("NI0Q"),i=n("3eOh");function a(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function s(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t?t.defaultView:window}return e}function f(e){var t=s(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function c(e){return e instanceof s(e).Element||e instanceof Element}function u(e){return e instanceof s(e).HTMLElement||e instanceof HTMLElement}function p(e){return e?(e.nodeName||"").toLowerCase():null}function l(e){return(c(e)?e.ownerDocument:e.document).documentElement}function d(e){return a(l(e)).left+f(e).scrollLeft}function m(e){return s(e).getComputedStyle(e)}function h(e){var t=m(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function v(e,t,n){void 0===n&&(n=!1);var r,o,i=l(t),c=a(e),m=u(t),v={scrollLeft:0,scrollTop:0},y={x:0,y:0};return(m||!m&&!n)&&(("body"!==p(t)||h(i))&&(v=(r=t)!==s(r)&&u(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:f(r)),u(t)?((y=a(t)).x+=t.clientLeft,y.y+=t.clientTop):i&&(y.x=d(i))),{x:c.left+v.scrollLeft-y.x,y:c.top+v.scrollTop-y.y,width:c.width,height:c.height}}function y(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function g(e){return"html"===p(e)?e:e.assignedSlot||e.parentNode||e.host||l(e)}function b(e,t){void 0===t&&(t=[]);var n=function e(t){return["html","body","#document"].indexOf(p(t))>=0?t.ownerDocument.body:u(t)&&h(t)?t:e(g(t))}(e),r="body"===p(n),o=s(n),i=r?[o].concat(o.visualViewport||[],h(n)?n:[]):n,a=t.concat(i);return r?a:a.concat(b(g(i)))}function O(e){return["table","td","th"].indexOf(p(e))>=0}function w(e){if(!u(e)||"fixed"===m(e).position)return null;var t=e.offsetParent;if(t){var n=l(t);if("body"===p(t)&&"static"===m(t).position&&"static"!==m(n).position)return n}return t}function x(e){for(var t=s(e),n=w(e);n&&O(n)&&"static"===m(n).position;)n=w(n);return n&&"body"===p(n)&&"static"===m(n).position?t:n||function(e){for(var t=g(e);u(t)&&["html","body"].indexOf(p(t))<0;){var n=m(t);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return t;t=t.parentNode}return null}(e)||t}var j="top",E="bottom",M="right",D="left",P=[j,E,M,D],k=P.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),A=[].concat(P,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),B=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function S(e){var t=new Map,n=new Set,r=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){if(!n.has(r)){var o=t.get(r);o&&e(o)}})),r.push(o)}(e)})),r}var L={placement:"bottom",modifiers:[],strategy:"absolute"};function R(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function W(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?L:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},L),i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],u=!1,p={state:s,setOptions:function(n){l(),s.options=Object.assign(Object.assign(Object.assign({},i),s.options),n),s.scrollParents={reference:c(e)?b(e):e.contextElement?b(e.contextElement):[],popper:b(t)};var o=function(e){var t=S(e);return B.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,s.options.modifiers)));return s.orderedModifiers=o.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:p,options:r});f.push(i||function(){})}})),p.update()},forceUpdate:function(){if(!u){var e=s.elements,t=e.reference,n=e.popper;if(R(t,n)){s.rects={reference:v(t,x(n),"fixed"===s.options.strategy),popper:y(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,f=void 0===a?{}:a,c=o.name;"function"==typeof i&&(s=i({state:s,options:f,name:c,instance:p})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){p.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){l(),u=!0}};if(!R(e,t))return p;function l(){f.forEach((function(e){return e()})),f=[]}return p.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var H={passive:!0};function U(e){return e.split("-")[0]}function T(e){return e.split("-")[1]}function C(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function q(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?U(o):null,a=o?T(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case j:t={x:s,y:n.y-r.height};break;case E:t={x:s,y:n.y+n.height};break;case M:t={x:n.x+n.width,y:f};break;case D:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?C(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case"start":t[c]=Math.floor(t[c])-Math.floor(n[u]/2-r[u]/2);break;case"end":t[c]=Math.floor(t[c])+Math.ceil(n[u]/2-r[u]/2)}}return t}var V={top:"auto",right:"auto",bottom:"auto",left:"auto"};function F(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.offsets,a=e.position,f=e.gpuAcceleration,c=e.adaptive,u=function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Math.round(t*r)/r||0,y:Math.round(n*r)/r||0}}(i),p=u.x,d=u.y,m=i.hasOwnProperty("x"),h=i.hasOwnProperty("y"),v=D,y=j,g=window;if(c){var b=x(n);b===s(n)&&(b=l(n)),o===j&&(y=E,d-=b.clientHeight-r.height,d*=f?1:-1),o===D&&(v=M,p-=b.clientWidth-r.width,p*=f?1:-1)}var O,w=Object.assign({position:a},c&&V);return f?Object.assign(Object.assign({},w),{},((O={})[y]=h?"0":"",O[v]=m?"0":"",O.transform=(g.devicePixelRatio||1)<2?"translate("+p+"px, "+d+"px)":"translate3d("+p+"px, "+d+"px, 0)",O)):Object.assign(Object.assign({},w),{},((t={})[y]=h?d+"px":"",t[v]=m?p+"px":"",t.transform="",t))}var N={left:"right",right:"left",bottom:"top",top:"bottom"};function _(e){return e.replace(/left|right|bottom|top/g,(function(e){return N[e]}))}var z={start:"end",end:"start"};function I(e){return e.replace(/start|end/g,(function(e){return z[e]}))}function Q(e,t){var n=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(n){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function J(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function X(e,t){return"viewport"===t?J(function(e){var t=s(e),n=l(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,f=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,f=r.offsetTop)),{width:o,height:i,x:a+d(e),y:f}}(e)):u(t)?function(e){var t=a(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):J(function(e){var t=l(e),n=f(e),r=e.ownerDocument.body,o=Math.max(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=Math.max(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-n.scrollLeft+d(e),s=-n.scrollTop;return"rtl"===m(r||t).direction&&(a+=Math.max(t.clientWidth,r?r.clientWidth:0)-o),{width:o,height:i,x:a,y:s}}(l(e)))}function Y(e,t,n){var r="clippingParents"===t?function(e){var t=b(g(e)),n=["absolute","fixed"].indexOf(m(e).position)>=0&&u(e)?x(e):e;return c(n)?t.filter((function(e){return c(e)&&Q(e,n)&&"body"!==p(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=X(e,n);return t.top=Math.max(r.top,t.top),t.right=Math.min(r.right,t.right),t.bottom=Math.min(r.bottom,t.bottom),t.left=Math.max(r.left,t.left),t}),X(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function $(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function G(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function K(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,s=void 0===i?"clippingParents":i,f=n.rootBoundary,u=void 0===f?"viewport":f,p=n.elementContext,d=void 0===p?"popper":p,m=n.altBoundary,h=void 0!==m&&m,v=n.padding,y=void 0===v?0:v,g=$("number"!=typeof y?y:G(y,P)),b="popper"===d?"reference":"popper",O=e.elements.reference,w=e.rects.popper,x=e.elements[h?b:d],D=Y(c(x)?x:x.contextElement||l(e.elements.popper),s,u),k=a(O),A=q({reference:k,element:w,strategy:"absolute",placement:o}),B=J(Object.assign(Object.assign({},w),A)),S="popper"===d?B:k,L={top:D.top-S.top+g.top,bottom:S.bottom-D.bottom+g.bottom,left:D.left-S.left+g.left,right:S.right-D.right+g.right},R=e.modifiersData.offset;if("popper"===d&&R){var W=R[o];Object.keys(L).forEach((function(e){var t=[M,E].indexOf(e)>=0?1:-1,n=[j,E].indexOf(e)>=0?"y":"x";L[e]+=W[n]*t}))}return L}function Z(e,t,n){return Math.max(e,Math.min(t,n))}function ee(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function te(e){return[j,M,E,D].some((function(t){return e[t]>=0}))}var ne=W({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,f=void 0===a||a,c=s(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,H)})),f&&c.addEventListener("resize",n.update,H),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,H)})),f&&c.removeEventListener("resize",n.update,H)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=q({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s={placement:U(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),F(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),F(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];u(o)&&p(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});u(r)&&p(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=A.reduce((function(e,n){return e[n]=function(e,t,n){var r=U(e),o=[D,j].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign(Object.assign({},t),{},{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[D,M].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=U(v),g=f||(y===v||!m?[_(v)]:function(e){if("auto"===U(e))return[];var t=_(e);return[I(e),t,I(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat("auto"===U(n)?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?A:f,u=T(r),p=u?s?k:k.filter((function(e){return T(e)===u})):P,l=p.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=p);var d=l.reduce((function(t,n){return t[n]=K(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[U(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:p,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),O=t.rects.reference,w=t.rects.popper,x=new Map,B=!0,S=b[0],L=0;L<b.length;L++){var R=b[L],W=U(R),H="start"===T(R),C=[j,E].indexOf(W)>=0,q=C?"width":"height",V=K(t,{placement:R,boundary:u,rootBoundary:p,altBoundary:l,padding:c}),F=C?H?M:D:H?E:j;O[q]>w[q]&&(F=_(F));var N=_(F),z=[];if(i&&z.push(V[W]<=0),s&&z.push(V[F]<=0,V[N]<=0),z.every((function(e){return e}))){S=R,B=!1;break}x.set(R,z)}if(B)for(var Q=function(e){var t=b.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return S=t,"break"},J=m?3:1;J>0;J--){if("break"===Q(J))break}t.placement!==S&&(t.modifiersData[r]._skip=!0,t.placement=S,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,u=n.altBoundary,p=n.padding,l=n.tether,d=void 0===l||l,m=n.tetherOffset,h=void 0===m?0:m,v=K(t,{boundary:f,rootBoundary:c,padding:p,altBoundary:u}),g=U(t.placement),b=T(t.placement),O=!b,w=C(g),P="x"===w?"y":"x",k=t.modifiersData.popperOffsets,A=t.rects.reference,B=t.rects.popper,S="function"==typeof h?h(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):h,L={x:0,y:0};if(k){if(i){var R="y"===w?j:D,W="y"===w?E:M,H="y"===w?"height":"width",q=k[w],V=k[w]+v[R],F=k[w]-v[W],N=d?-B[H]/2:0,_="start"===b?A[H]:B[H],z="start"===b?-B[H]:-A[H],I=t.elements.arrow,Q=d&&I?y(I):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},X=J[R],Y=J[W],$=Z(0,A[H],Q[H]),G=O?A[H]/2-N-$-X-S:_-$-X-S,ee=O?-A[H]/2+N+$+Y+S:z+$+Y+S,te=t.elements.arrow&&x(t.elements.arrow),ne=te?"y"===w?te.clientTop||0:te.clientLeft||0:0,re=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,oe=k[w]+G-re-ne,ie=k[w]+ee-re,ae=Z(d?Math.min(V,oe):V,q,d?Math.max(F,ie):F);k[w]=ae,L[w]=ae-q}if(s){var se="x"===w?j:D,fe="x"===w?E:M,ce=k[P],ue=Z(ce+v[se],ce,ce-v[fe]);k[P]=ue,L[P]=ue-ce}t.modifiersData[r]=L}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=n.elements.arrow,i=n.modifiersData.popperOffsets,a=U(n.placement),s=C(a),f=[D,M].indexOf(a)>=0?"height":"width";if(o&&i){var c=n.modifiersData[r+"#persistent"].padding,u=y(o),p="y"===s?j:D,l="y"===s?E:M,d=n.rects.reference[f]+n.rects.reference[s]-i[s]-n.rects.popper[f],m=i[s]-n.rects.reference[s],h=x(o),v=h?"y"===s?h.clientHeight||0:h.clientWidth||0:0,g=d/2-m/2,b=c[p],O=v-u[f]-c[l],w=v/2-u[f]/2+g,P=Z(b,w,O),k=s;n.modifiersData[r]=((t={})[k]=P,t.centerOffset=P-w,t)}},effect:function(e){var t=e.state,n=e.options,r=e.name,o=n.element,i=void 0===o?"[data-popper-arrow]":o,a=n.padding,s=void 0===a?0:a;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&Q(t.elements.popper,i)&&(t.elements.arrow=i,t.modifiersData[r+"#persistent"]={padding:$("number"!=typeof s?s:G(s,P))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=K(t,{elementContext:"reference"}),s=K(t,{altBoundary:!0}),f=ee(a,r),c=ee(s,o,i),u=te(f),p=te(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]}),re=n("d2al"),oe=n.n(re),ie=[];n.d(t,"a",(function(){return ce}));var ae=function(){},se=function(){return Promise.resolve(null)},fe=[];function ce(e){var t=e.placement,n=void 0===t?"bottom":t,a=e.strategy,s=void 0===a?"absolute":a,f=e.modifiers,c=void 0===f?fe:f,u=e.referenceElement,p=e.onFirstUpdate,l=e.innerRef,d=e.children,m=r.useContext(o.b),h=r.useState(null),v=h[0],y=h[1],g=r.useState(null),b=g[0],O=g[1];r.useEffect((function(){return Object(i.c)(l,v)}),[l,v]);var w=r.useMemo((function(){return{placement:n,strategy:s,onFirstUpdate:p,modifiers:[].concat(c,[{name:"arrow",enabled:null!=b,options:{element:b}}])}}),[n,s,p,c,b]),x=function(e,t,n){void 0===n&&(n={});var o=r.useRef(null),a={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||ie},s=r.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"}},attributes:{}}),f=s[0],c=s[1],u=r.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);c({styles:Object(i.a)(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:Object(i.a)(n.map((function(e){return[e,t.attributes[e]]})))})},requires:["computeStyles"]}}),[]),p=r.useMemo((function(){var e={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[u,{name:"applyStyles",enabled:!1}])};return oe()(o.current,e)?o.current||e:(o.current=e,e)}),[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,u]),l=r.useRef();return Object(i.e)((function(){l.current&&l.current.setOptions(p)}),[p]),Object(i.e)((function(){if(null!=e&&null!=t){var r=(n.createPopper||ne)(e,t,p);return l.current=r,function(){r.destroy(),l.current=null}}}),[e,t,n.createPopper]),{state:l.current?l.current.state:null,styles:f.styles,attributes:f.attributes,update:l.current?l.current.update:null,forceUpdate:l.current?l.current.forceUpdate:null}}(u||m,v,w),j=x.state,E=x.styles,M=x.forceUpdate,D=x.update,P=r.useMemo((function(){return{ref:y,style:E.popper,placement:j?j.placement:n,hasPopperEscaped:j&&j.modifiersData.hide?j.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:j&&j.modifiersData.hide?j.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:E.arrow,ref:O},forceUpdate:M||ae,update:D||se}}),[y,O,n,j,E,D,M]);return Object(i.d)(d)(P)}}}]);
//# sourceMappingURL=0.4anuwLpDgf.js.map