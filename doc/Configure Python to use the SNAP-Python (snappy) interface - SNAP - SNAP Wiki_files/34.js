(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"+nA1":function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return l}));const i={action:"rendered",actionSubject:"nudgeTooltip",attributes:{componentName:"nudgeTooltip"}},a={action:"displayed",actionSubject:"nudgeTooltip",attributes:{componentName:"nudgeTooltip"}},o={action:"hidden",actionSubject:"nudgeTooltip",attributes:{componentName:"nudgeTooltip"}},c={action:"clicked",actionSubject:"nudgeTooltip",attributes:{componentName:"nudgeTooltip"}},l={action:"hidden_by_outside_click",actionSubject:"nudgeTooltip",attributes:{componentName:"nudgeTooltip"}}},"/Qos":function(e,t,n){(function(e){var i=void 0!==e&&e||"undefined"!=typeof self&&self||window,a=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(a.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new o(a.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("gIIS"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("fRV1"))},"7xCX":function(e,t,n){"use strict";var i=n("Czhu"),a=n("HbGN"),o=n("ERkP"),c=n.n(o),l=n("kKv/"),r=n("3IV/"),d=n("KsTJ"),u=n("zJ/j"),s=n("8pvK"),f=n("BMbf"),h=n("ZgvQ"),b=n("WEdt"),p=n("rr2M");const m=d.default.div`
  ${({theme:e})=>e};
`,g=d.default.div`
  display: flex;
  flex-direction: column;
  padding: ${Object(h.multiply)(f.h,2)}px ${Object(h.multiply)(f.h,2.5)}px;
`,O=d.default.h4`
  ${b.h600};
  color: inherit;
`,k=d.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: ${f.h}px;
`,j=d.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${f.h}px;
`,E=Object(s.a)(()=>({container:{overflow:"auto",borderRadius:Object(f.c)()+"px",height:"fit-content",zIndex:""+(f.i.spotlight()+1)}})),v=({actions:e=[],actionsBeforeElement:t,children:n,components:i={},image:o,heading:l,headingAfterElement:r,theme:d,innerRef:s,testId:f})=>{const{Header:h=k,Footer:b=j}=i;return c.a.createElement(E.Provider,{value:d},c.a.createElement(E.Consumer,null,({container:i})=>c.a.createElement(m,{theme:i,innerRef:s,"data-testid":f},"string"==typeof o?c.a.createElement("img",{src:o,alt:""}):o,c.a.createElement(g,null,l||r?c.a.createElement(h,null,c.a.createElement(O,null,l),r||c.a.createElement("span",null)):null,n,e.length>0||t?c.a.createElement(b,null,t||c.a.createElement("span",null),c.a.createElement(p.b,null,e.map((e,t)=>{let{text:n,key:i}=e,o=Object(a.a)(e,["text","key"]);return c.a.createElement(p.a,{key:i||("string"==typeof n?n:""+t)},c.a.createElement(u.a,Object.assign({},o),n))}))):null))))};var N=c.a.forwardRef((e,t)=>c.a.createElement(v,Object.assign({},e,{innerRef:t}))),y=n("P/3O");class C extends c.a.Component{render(){const{actions:e,actionsBeforeElement:t,children:n,components:o,isFlat:d,heading:u,headingAfterElement:s,image:f,innerRef:h,theme:b,width:p,testId:m}=this.props;return c.a.createElement(l.a.Provider,{value:y.b},c.a.createElement(N,{testId:m,ref:h,heading:u,headingAfterElement:s,actions:e,actionsBeforeElement:t,components:o,image:f,theme:e=>{const t=e({}),{container:n}=t,o=Object(a.a)(t,["container"]);return b(()=>Object(i.a)(Object(i.a)({},o),{},{container:Object(i.a)({background:r.P300,color:r.N0,width:Math.min(Math.max(p,160),600)+"px",boxShadow:d?void 0:`0 4px 8px -2px ${r.N50A}, 0 0 1px ${r.N60A}`},n)}),{})}},n))}}C.defaultProps={width:400,isFlat:!1,components:{},theme:e=>e()};t.a=c.a.forwardRef((e,t)=>c.a.createElement(C,Object.assign({},e,{innerRef:t})))},EvIQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("RfuI");n("VgIc");const a=Object(i.a)({id:"kxuGX",name:"OnboardingNudge",loader:async()=>(await n.e("nudge-tooltip~8b1a6a8a").then(n.bind(null,"la5E"))).OnboardingNudge,loading:({children:e,renderChildrenWhileLoading:t})=>t?e(!1):null})},"P/3O":function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return u}));var i=n("Czhu"),a=n("HbGN"),o=n("3IV/");const c={default:{background:{default:{light:o.P400,dark:o.P400},hover:{light:o.P200,dark:o.P200},active:{light:o.P500,dark:o.P500},disabled:{light:o.P400,dark:o.P400},selected:{light:o.R500,dark:o.R500},focus:{light:o.P400,dark:o.P400}},boxShadow:{focus:{light:o.P100+" 0 0 0 2px",dark:o.P100+" 0 0 0 2px"}},color:{default:{light:o.N0,dark:o.N0},hover:{light:o.N0,dark:o.N0},active:{light:o.N0,dark:o.N0},disabled:{light:o.N0,dark:o.DN30},selected:{light:o.N0,dark:o.N0},focus:{light:o.N0,dark:o.N0}},outline:{focus:{light:"none",dark:"none"}}},subtle:{background:{default:{light:"none",dark:"none"},hover:{light:o.P200,dark:o.P200},active:{light:o.P500,dark:o.P500},disabled:{light:"none",dark:"none"},selected:{light:o.N700,dark:o.DN0},focusSelected:{light:o.N700,dark:o.DN0}},boxShadow:{focus:{light:o.P100+" 0 0 0 2px",dark:o.P100+" 0 0 0 2px"}},color:{default:{light:o.N0,dark:o.N0},hover:{light:o.N0,dark:o.N0},active:{light:o.N0,dark:o.N0},disabled:{light:o.N0,dark:o.N0},selected:{light:o.N0,dark:o.N0},focus:{light:o.N0,dark:o.N0}},outline:{focus:{light:"none",dark:"none"}}},"subtle-link":{textDecoration:{hover:{light:"underline "+o.P75,dark:"underline "+o.P75}},textDecorationLine:{active:{light:"none",dark:"none"}},boxShadow:{focus:{light:o.P100+" 0 0 0 2px",dark:o.P100+" 0 0 0 2px"}},color:{default:{light:o.N0,dark:o.N0},hover:{light:o.P75,dark:o.P75},active:{light:o.P100,dark:o.P100},disabled:{light:o.P500,dark:o.P500},selected:{light:o.N0,dark:o.N0},focus:{light:o.N0,dark:o.N0}}}},l={primary:{background:{default:{light:o.P400,dark:o.P400},hover:{light:o.P200,dark:o.P200},active:{light:o.P500,dark:o.P500},disabled:{light:o.N30,dark:o.DN70},selected:{light:o.R500,dark:o.R500},focus:{light:o.P400,dark:o.P400}},boxShadow:{focus:{light:o.P100+" 0 0 0 2px",dark:o.P100+" 0 0 0 2px"}},color:{default:{light:o.N0,dark:o.N0},disabled:{light:o.N0,dark:o.DN30},selected:{light:o.N0,dark:o.N0},focus:{light:o.N0,dark:o.N0}}}};function r(e,{mode:t,appearance:n,state:i}){if(!e[n])return;const a=e[n];return Object.keys(a).reduce((e,n)=>{let o=a;return[n,i,t].forEach(t=>{o[t]&&("object"==typeof o[t]?o=o[t]:e[n]=o[t])}),e},{})}const d=(e,t)=>{const n=e(t),{buttonStyles:o}=n,l=Object(a.a)(n,["buttonStyles"]);return Object(i.a)({buttonStyles:Object(i.a)(Object(i.a)({},o),r(c,t))},l)},u=(e,t)=>{const n=e(t),{buttonStyles:o}=n,c=Object(a.a)(n,["buttonStyles"]);return Object(i.a)({buttonStyles:Object(i.a)(Object(i.a)({},o),r(l,t))},c)}},Qdol:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"j",(function(){return l})),n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return d})),n.d(t,"k",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"b",(function(){return f})),n.d(t,"i",(function(){return h})),n.d(t,"l",(function(){return v})),n.d(t,"f",(function(){return N}));var i=n("TSpG");const a="onboarding-state:",o="createNudge",c="createNudgeQS",l="peopleNudge",r="editNudge",d="commentNudge",u="personalSpaceNudge",s={OVERALL_STATE:a+"introWorkflow",EDIT_NUDGE:`${a}${r}`,CREATE_NUDGE:`${a}${o}`,COMMENT_NUDGE:`${a}${d}`,LEGACY_ONBOARDING_STATE:a+"legacy",SPOTLIGHT_TOUR_STATE:a+"spotlightTour",PERSONAL_SPACE_NUDGE:`${a}${u}`},f="__complete__",{OVERALL_STATE:h,EDIT_NUDGE:b,CREATE_NUDGE:p,COMMENT_NUDGE:m,LEGACY_ONBOARDING_STATE:g,SPOTLIGHT_TOUR_STATE:O,PERSONAL_SPACE_NUDGE:k}=s,{PERSONAL_SPACE_EXP:j,ONBOARDING_NUDGE:E}=i.a,v=[g,O],N={[E]:[b,m,p],[j]:[k]}},VgIc:function(e,t,n){"use strict";var i=n("Czhu"),a=n("HbGN"),o=n("ERkP"),c=n.n(o),l=n("a8dO"),r=n("KsTJ"),d=n("DfCg"),u=n("uvkf");const s=Object(r.default)(u.a)`
  background-color: ${d.a.P300};
  border-radius: 3px;
  box-sizing: border-box;
  color: white;
  max-width: 240px;
  padding: 8px 16px;
  word-wrap: break-word;
  overflow-wrap: break-word;

  &:empty {
    display: none;
  }
`;var f=n("h5BT"),h=n("nvpc"),b=n("u6In");const p=e=>{let t=!1;return()=>{t||(t=!0,e())}};var m=Object(h.a)({componentName:"NudgeTooltip"})(Object(b.a)({onHide:Object(i.a)({},{action:"hidden",actionSubject:"nudgeTooltip",attributes:{componentName:"nudgeTooltip"}}),onShow:Object(i.a)({},{action:"displayed",actionSubject:"nudgeTooltip",attributes:{componentName:"nudgeTooltip"}}),onClick:Object(i.a)({},{action:"clicked",actionSubject:"nudgeTooltip",attributes:{componentName:"nudgeTooltip"}})})(e=>{let{onShow:t=(()=>{}),onHide:n=(()=>{}),onClick:i=(()=>{}),children:r,content:d,hidden:u,delay:h=0,hideTooltipOnClick:b=!0,minReadTime:m=1e3}=e,g=Object(a.a)(e,["onShow","onHide","onClick","children","content","hidden","delay","hideTooltipOnClick","minReadTime"]);const[O,k]=Object(o.useState)(!1),[j,E]=Object(o.useState)(null),v=O||!!u,N=!v&&d,y=Object(o.useCallback)(()=>{j&&clearTimeout(j),E(null)},[j]),C=Object(o.useCallback)(p(()=>{k(!0),n()}),[]),T=Object(o.useCallback)(p(()=>i()),[]),w=Object(o.useCallback)(()=>{v||(b?(T(),C()):i())},[v,b,T,C,i]),S=Object(o.useCallback)(Object(o.forwardRef)((e,t)=>c.a.createElement(s,Object.assign({},e,{innerRef:t}))),[]);return c.a.createElement(l.a,Object.assign({hideTooltipOnClick:b,component:S,delay:h,onShow:()=>{t(),j&&y(),E(setTimeout(y,m))},onHide:()=>{null===j&&C()},content:N},g),c.a.createElement(f.a,{hasPulse:!v,onClickCapture:w},r))})),g=(n("iVrZ"),n("7xCX")),O=n("PEqI"),k=n("bLpi"),j=n("bES6"),E=n("+nA1"),v=n("ijMi");const N=({fn:e,relay:t})=>(Object(o.useEffect)(()=>{t(()=>e)},[e,t]),null);var y=Object(h.a)({componentName:"NudgeSpotlight"})(Object(b.a)({onRender:Object(i.a)({},E.d),onShow:Object(i.a)({},E.e),onHide:Object(i.a)({},E.b),onClick:Object(i.a)({},E.a),onOutsideClick:Object(i.a)({},E.c)})(e=>{let{hidden:t,setHidden:n,hideNudgeOnClick:l=!0,hideSpotlightOnOutsideClick:r=!0,autoShow:d=!0,children:u,content:s,spotlight:h=g.a,position:b="bottom",offset:p,zIndex:m=800,onRender:E,onShow:y,onHide:C,onClick:T,onOutsideClick:w,createAnalyticsEvent:S,pulseColor:x,pulseShadowColor:P,pulseBorderRadius:R,registerUpdateFn:I}=e,_=Object(a.a)(e,["hidden","setHidden","hideNudgeOnClick","hideSpotlightOnOutsideClick","autoShow","children","content","spotlight","position","offset","zIndex","onRender","onShow","onHide","onClick","onOutsideClick","createAnalyticsEvent","pulseColor","pulseShadowColor","pulseBorderRadius","registerUpdateFn"]);const $=Object(o.useRef)(null),A=Object(o.useRef)(null),D=Object(o.useMemo)(()=>h===g.a?Object(i.a)(Object(i.a)({},_),{},{children:s}):{},[h,_,s]),M=!t,[G,H]=Object(o.useState)(d),[L,B]=Object(o.useState)(!1),z=Object(o.useCallback)(()=>H(!0),[]),U=Object(o.useCallback)(()=>{l&&n(),null==T||T()},[l,n,T]),[V,F]=Object(o.useState)();return Object(o.useEffect)(()=>{V&&(null==I||I(()=>V))},[V,I]),Object(o.useEffect)(()=>{B(M&&G)},[M,G]),Object(o.useEffect)(()=>{if(!t)return null==E||E(),()=>null==C?void 0:C()},[t,E,C]),Object(o.useEffect)(()=>{L&&(null==y||y())},[L,y]),Object(o.useEffect)(()=>{t&&H(d)},[t,d]),Object(o.useEffect)(()=>{let e,t;return L&&r&&(t=setTimeout(()=>{e=Object(j.bind)(window,{type:"click",listener:t=>{$.current&&A.current&&t.target instanceof Node&&!$.current.contains(t.target)&&!A.current.contains(t.target)&&(null==w||w(),H(!1),null==e||e())},options:{passive:!0}})})),()=>{null==e||e(),clearTimeout(t)}},[L,r,n,w]),c.a.createElement(o.Fragment,null,c.a.createElement(f.a,{innerRef:$,hasPulse:M,onClickCapture:U,onMouseEnter:z,pulseColor:x,pulseShadowColor:P,pulseBorderRadius:R},u),L&&c.a.createElement(O.a,{zIndex:m},c.a.createElement(k.a,{placement:b,referenceElement:$.current||void 0,offset:p},({ref:e,style:t,forceUpdate:n})=>c.a.createElement(v.b,{innerRef:e,style:t},c.a.createElement(N,{fn:n,relay:F}),c.a.createElement(h,Object.assign({},D,{ref:A}))))))}));n.d(t,"c",(function(){return f.a})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return y}))},gIIS:function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var i,a,o,c,l,r=1,d={},u=!1,s=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?i=function(e){t.nextTick((function(){b(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){b(e.data)},i=function(e){o.port2.postMessage(e)}):s&&"onreadystatechange"in s.createElement("script")?(a=s.documentElement,i=function(e){var t=s.createElement("script");t.onreadystatechange=function(){b(e),t.onreadystatechange=null,a.removeChild(t),t=null},a.appendChild(t)}):i=function(e){setTimeout(b,0,e)}:(c="setImmediate$"+Math.random()+"$",l=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(c)&&b(+t.data.slice(c.length))},e.addEventListener?e.addEventListener("message",l,!1):e.attachEvent("onmessage",l),i=function(t){e.postMessage(c+t,"*")}),f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return d[r]=a,i(r),r++},f.clearImmediate=h}function h(e){delete d[e]}function b(e){if(u)setTimeout(b,0,e);else{var t=d[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{h(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("fRV1"),n("F63i"))},h5BT:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n("KsTJ"),a=n("DfCg"),o=n("BMbf");const c=a.a.P75,l=i.keyframes`
   0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,r=i.css`
  animation: ${l} 3000ms ${"cubic-bezier(0.55, 0.055, 0.675, 0.19)"} infinite;
`,d=i.css`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,u=i.default.span`
  display: block;
  > * {
    position: relative;

    &::before {
      ${d}
      border-radius: ${({pulseBorderRadius:e=o.c})=>e}px;
      box-shadow: ${({pulseColor:e=c})=>"0 0 0 3px "+e};
      opacity: ${e=>e.hasPulse?1:0};
      transition: opacity 0.1s ease-in-out;
      pointer-events: none;
    }

    &::after {
      ${d}
      border-radius: ${({pulseBorderRadius:e=o.c})=>e}px;
      box-shadow: ${({pulseColor:e=c,pulseShadowColor:t="rgba(101, 84, 192, 1)"})=>`0 0 0 3px ${e} , 0 0 11px ${t}`};
      opacity: 0;
      pointer-events: none;
      ${e=>e.hasPulse&&r}
    }
  }
`},iVrZ:function(e,t,n){"use strict";(function(e){var t=n("Czhu"),i=n("HbGN"),a=n("ERkP"),o=n.n(a),c=n("a8dO"),l=n("ijMi"),r=n("h5BT"),d=n("nvpc"),u=n("u6In"),s=n("+nA1"),f=n("7xCX"),h=n("RNvQ"),b=n.n(h);const p=Object(a.forwardRef)((e,t)=>{let{setSpotlightMounted:n,setDelayValue:c,children:l}=e,r=Object(i.a)(e,["setSpotlightMounted","setDelayValue","children"]);return Object(a.useEffect)(()=>(c(31556952e3),n(!0),()=>{c(0),n(!1)}),[c,n]),o.a.createElement(f.a,Object.assign({ref:t},r),l)});Object(d.a)({componentName:"NudgeSpotlight"})(Object(u.a)({onRender:Object(t.a)({},s.d),onShow:Object(t.a)({},s.e),onHide:Object(t.a)({},s.b),onClick:Object(t.a)({},s.a),onOutsideClick:Object(t.a)({},s.c)})(t=>{let{onRender:n=(()=>{}),onShow:d=(()=>{}),onHide:u=(()=>{}),onClick:s=(()=>{}),onOutsideClick:f=(()=>{}),setHidden:h=(()=>{}),children:m,content:g,hidden:O,hideNudgeOnClick:k=!0,hideSpotlightOnOutsideClick:j=!1,autoShow:E=!0,zIndex:v=-1,position:N}=t,y=Object(i.a)(t,["onRender","onShow","onHide","onClick","onOutsideClick","setHidden","children","content","hidden","hideNudgeOnClick","hideSpotlightOnOutsideClick","autoShow","zIndex","position"]);const C=Object(a.useRef)(null),T=Object(a.useRef)(null),[w,S]=Object(a.useState)(0),[x,P]=Object(a.useState)(!1),[R,I]=Object(a.useState)(!E),[_,$]=Object(a.useState)(!1),[A,D]=Object(a.useState)(!1),M=x||!!O,G=!M&&g,H=Object(a.useCallback)(e=>{if(!C.current)return;const[t,n]=["show"===e,"hide"===e],i=t?"mouseover":"mouseout";I(n),S(0),C.current.dispatchEvent(new MouseEvent(i,{view:window,bubbles:!0,cancelable:!0}))},[I,S]),L=Object(a.useCallback)(b()(H,1e3,{leading:!0,trailing:!0}),[H]),B=Object(a.useCallback)(b()(d,100,{trailing:!0}),[d]),z=Object(a.useCallback)(()=>{H("hide"),P(!0),h()},[H,h]),U=Object(a.useCallback)(()=>{I(!1),B()},[B]),V=Object(a.useCallback)(()=>{M||(s(),k&&z())},[M,s,k,z]),F=Object(a.useCallback)(Object(a.forwardRef)((e,t)=>{let{children:n}=e,a=Object(i.a)(e,["children"]);return G?o.a.createElement(l.a,Object.assign({},a,{innerRef:t}),o.a.createElement(p,Object.assign({setDelayValue:S,setSpotlightMounted:$,ref:T},y),n)):null}),[G]),J=Object(a.useCallback)(e=>{const t=C.current,n=T.current,i=e.target;M||j&&t&&i&&n&&(t.contains(i)||n.contains(i)||(H("hide"),f()))},[M,j,H,f]),Q=Object(a.useCallback)(()=>{M||R||_&&S(31556952e3)},[R,_,M]);return Object(a.useEffect)(()=>{const e=C.current;if(e)return e.addEventListener("mouseout",Q),()=>e.removeEventListener("mouseout",Q)},[Q]),Object(a.useEffect)(()=>{w&&O&&S(0)},[w,O]),Object(a.useEffect)(()=>{O&&(H("hide"),A&&(D(!1),P(!1),u()))},[O,A,D,H,u]),Object(a.useEffect)(()=>{M||E&&(H("show"),B())},[M,E,H,B]),Object(a.useEffect)(()=>{M||(D(!0),n())},[n,M]),Object(a.useEffect)(()=>{M||_||R||L("show")},[M,_,R,L]),Object(a.useEffect)(()=>{if(!M)return e(()=>window.addEventListener("click",J)),()=>window.removeEventListener("click",J)},[M,J]),Object(a.useEffect)(()=>{if(-1===v)return;if(null===T.current)return;let e=T.current;for(;e&&!e.classList.contains("atlaskit-portal");)e=e.parentNode;e&&(e.style.zIndex=""+v)},[T.current,v]),o.a.createElement(c.a,{hideTooltipOnClick:k,hideTooltipOnMouseDown:!1,delay:w,component:F,content:G,onShow:U,position:N},o.a.createElement(r.a,{hasPulse:!M,innerRef:C,onClickCapture:V},m))}))}).call(this,n("/Qos").setImmediate)},ijMi:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var i=n("KsTJ"),a=n("uvkf");const o=i.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,c=Object(i.default)("div")`
  animation: 0.2s ${o} ease-out;
  animation-iteration-count: 1;
`,l=Object(i.default)(a.a)`
  pointer-events: all;
  padding: 0.5rem;
`},rr2M:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return r}));var i=n("KsTJ"),a=n("BMbf"),o=n("ZgvQ");i.default.div`
  height: 100%;
  left: 0;
  overflow-y: auto;
  position: absolute;
  top: ${e=>e.scrollDistance}px;
  width: 100%;
`,i.default.div`
  flex: 1 1 auto;
  padding: ${Object(o.multiply)(a.h,2)}px ${Object(o.multiply)(a.h,3)}px ${a.h}px;

  p:last-child,
  ul:last-child,
  ol:last-child {
    margin-bottom: 0;
  }
`,i.default.h4`
  color: inherit;
  font-size: 20px;
  font-style: inherit;
  font-weight: 500;
  letter-spacing: -0.008em;
  line-height: 1.2;
  margin-bottom: ${a.h}px;
`;const c=i.default.img`
  height: auto;
  max-width: 100%;
`,l=(i.default.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${Object(o.multiply)(a.h,3)}px ${Object(o.multiply)(a.h,2)}px;
`,i.default.div`
  display: flex;
  margin: 0 -${Object(o.divide)(a.h,2)}px;
  /* When there is more than one action, place primary action visually on the
  right, but keep it's position as the first focusable element in the DOM */
  flex-direction: row-reverse;
`),r=i.default.div`
  margin: 0 ${Object(o.divide)(a.h,2)}px;
`}}]);
//# sourceMappingURL=34.7R7VoLiTDb.js.map