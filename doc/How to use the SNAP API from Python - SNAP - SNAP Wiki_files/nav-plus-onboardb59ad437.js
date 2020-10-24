(window.webpackJsonp=window.webpackJsonp||[]).push([["nav-plus-onboard~b59ad437"],{"1ioG":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("ERkP")),o=r(a("4KTy"));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=function(e){return n.default.createElement(o.default,i({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M10.294 9.698a.988.988 0 0 1 0-1.407 1.01 1.01 0 0 1 1.419 0l2.965 2.94a1.09 1.09 0 0 1 0 1.548l-2.955 2.93a1.01 1.01 0 0 1-1.42 0 .988.988 0 0 1 0-1.407l2.318-2.297-2.327-2.307z" fill="inherit"/></g></svg>'},e))};c.displayName="ChevronRightCircleIcon";var l=c;t.default=l},"4OJ4":function(e,t,a){e.exports=a.p+"pgDigCDhee.png"},"6zDZ":function(e,t,a){e.exports=a.p+"gotCEK9s1u.gif"},G8fi:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("ERkP")),o=r(a("4KTy"));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=function(e){return n.default.createElement(o.default,i({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M13.706 9.698a.988.988 0 0 0 0-1.407 1.01 1.01 0 0 0-1.419 0l-2.965 2.94a1.09 1.09 0 0 0 0 1.548l2.955 2.93a1.01 1.01 0 0 0 1.42 0 .988.988 0 0 0 0-1.407l-2.318-2.297 2.327-2.307z" fill="inherit"/></g></svg>'},e))};c.displayName="ChevronLeftCircleIcon";var l=c;t.default=l},JIOe:function(e,t,a){e.exports=a.p+"gz8JGXopzt.png"},TW7j:function(e,t,a){"use strict";a.r(t);var n=a("ERkP"),o=a.n(n),r=a("RWLP"),i=a("lPJD"),c=a("cphC"),l=a("Aqh1"),s=a("+FBq"),d=a("Czhu"),u=a("L21V"),p=a("kbI0"),g=a("MqVv"),f=a("zJ/j"),b=a("RjSO"),m=a("Ua4J"),h=a("6zDZ"),v=a.n(h),y=a("JIOe"),O=a.n(y),E=a("4OJ4"),j=a.n(E),x=a("c1gS"),k=a.n(x),C=a("KsTJ"),w=a("3IV/");const M=Object(u.g)({dismiss:{id:"app-navigation.nav-home-onboarding.dismiss",defaultMessage:"Dismiss"},next:{id:"app-navigation.nav-home-onboarding.next",defaultMessage:"Next"},done:{id:"app-navigation.nav-home-onboarding.done",defaultMessage:"Done"}}),P=C.default.div`
  padding: 22px 24px 24px 24px;
  display: flex;
  align-items: center;
  > div {
    flex: 1 1 0px;
  }
`,I=C.default.div`
  display: flex;
  justify-content: flex-start;
`,S=C.default.div`
  display: flex;
  justify-content: center;
`,B=C.default.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: ${e=>e.current?w.N900:w.N50};
  margin: 0 4px;
`,V=C.default.div`
  display: flex;
  justify-content: flex-end;
`,z=({currentPage:e,nextPage:t,closeDialog:a,numPages:n})=>o.a.createElement(P,null,o.a.createElement(I,null,e<n-1&&o.a.createElement(f.a,{appearance:"subtle",onClick:a},o.a.createElement(u.c,Object(d.a)({},M.dismiss)))),o.a.createElement(S,null,(()=>{const t=[];for(let a=0;a<n;a++)t.push(o.a.createElement(B,{key:"dot-"+a,current:e===a}));return t})()),o.a.createElement(V,null,o.a.createElement(f.a,{appearance:"primary",autoFocus:!0,onClick:e<n-1?t:a},o.a.createElement(u.c,Object(d.a)({},e<n-1?M.next:M.done)))));var J=a("WEdt");const D=C.default.div`
  ${J.h600}
  margin-top: 0;
  margin-bottom: 12px;
`,H=C.default.div``,_=C.default.div`
  padding: 40px 44px;
  height: 176px;
  box-sizing: border-box;
  text-align: center;
`,G=({page:e})=>o.a.createElement(_,null,o.a.createElement(D,null,e.header),o.a.createElement(H,null,e.body));var T=a("G8fi"),N=a.n(T),R=a("1ioG"),L=a.n(R);const q=C.default.img`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: 320px;
  width: 100%;
`,A=C.default.button`
  position: absolute;
  width: 32px;
  height: 32px;
  cursor: pointer;
  background: 0;
  padding: 0;
  border: 0;
  opacity: 0.7;
`,F=Object(C.default)(A)`
  top: 144px;
  left: 8px;
`,K=Object(C.default)(A)`
  top: 144px;
  right: 8px;
`,U=C.default.div`
  overflow-y: auto;
`,W=({page:e,currentPage:t,prevPage:a,nextPage:n,numPages:r})=>o.a.createElement(U,null,o.a.createElement(q,{src:e.image}),t>0&&o.a.createElement(F,{onClick:a},o.a.createElement(N.a,{label:"left-button",size:"large"})),t<r-1&&o.a.createElement(K,{onClick:n},o.a.createElement(L.a,{label:"right-button",size:"large"}))),X=Object(u.g)({learnMore:{id:"app-navigation.nav-home-onboarding.learnMore",defaultMessage:"Learn more"},screen1Header:{id:"app-navigation.nav-home-onboarding.screen.1.header",defaultMessage:"Confluence navigation just got better"},screen1Body:{id:"app-navigation.nav-home-onboarding.screen.1.body.v2",defaultMessage:"Get to information faster from anywhere in Confluence with improved navigation. Click your profile picture at the top right to send feedback or turn off this navigation for now. {link}"},screen2Header:{id:"app-navigation.nav-home-onboarding.screen.2.header",defaultMessage:"More discoverable create and search"},screen2Body:{id:"app-navigation.nav-home-onboarding.screen.2.body",defaultMessage:"Quickly create pages from wherever you are and find what you’re looking for with a faster search personalized to you."},screen3Header:{id:"app-navigation.nav-home-onboarding.screen.3.header",defaultMessage:"Quickly access things that matter"},screen3Body:{id:"app-navigation.nav-home-onboarding.screen.3.body",defaultMessage:"Access pages you’ve viewed and worked on, including drafts and starred."},screen4Header:{id:"app-navigation.nav-home-onboarding.screen.4.header",defaultMessage:"Make yourself at home"},screen4Body:{id:"app-navigation.nav-home-onboarding.screen.4.body",defaultMessage:"Start your day here by quickly accessing the spaces and pages you frequent, and see all the latest updates across your site. {link}"}}),Q=[{image:v.a,header:o.a.createElement(u.c,Object(d.a)({},X.screen1Header)),body:o.a.createElement(u.c,Object(d.a)(Object(d.a)({},X.screen1Body),{},{values:{link:o.a.createElement(f.a,{appearance:"link",href:"https://confluence.atlassian.com/display/ConfCloud/Improved+Confluence+navigation",spacing:"none",target:"_blank",rel:"noreferrer"},o.a.createElement(u.c,Object(d.a)({},X.learnMore)))}}))},{image:k.a,header:o.a.createElement(u.c,Object(d.a)({},X.screen4Header)),body:o.a.createElement(u.c,Object(d.a)(Object(d.a)({},X.screen4Body),{},{values:{link:o.a.createElement(f.a,{appearance:"link",href:"https://confluence.atlassian.com/display/ConfCloud/Home+page",spacing:"none",target:"_blank",rel:"noreferrer"},o.a.createElement(u.c,Object(d.a)({},X.learnMore)))}}))},{image:j.a,header:o.a.createElement(u.c,Object(d.a)({},X.screen3Header)),body:o.a.createElement(u.c,Object(d.a)({},X.screen3Body))},{image:O.a,header:o.a.createElement(u.c,Object(d.a)({},X.screen2Header)),body:o.a.createElement(u.c,Object(d.a)({},X.screen2Body))}],Z=({stop:e})=>{const{createAnalyticsEvent:t}=Object(b.a)(),{location:a,matchRoute:r}=Object(n.useContext)(m.a),{navigationVariant:i}=Object(n.useContext)(l.a),c=i===s.g||i===s.h?Q.slice(1):Q;Object(n.useEffect)(()=>{c.forEach(e=>{(new Image).src=e.image})},[]);const[d,u]=Object(n.useState)(0),[f,h]=Object(n.useState)(!0),v=Object(n.useCallback)(()=>{const e=a?a.pathname:"";return(r(e)||{}).screenName||""},[r,a]),y=Object(n.useCallback)(()=>{t({type:"sendUIEvent",data:{action:"clicked",actionSubject:"button",actionSubjectId:"loudOptInNextButton",source:"navV3OptInModal",attributes:{type:"navV3Benefits",screen:d+1,navCohort:i,userLocation:v()}}}).fire(),u(e=>e+1)},[d,i,a]),O=Object(n.useCallback)(()=>u(e=>e-1),[]),E=Object(n.useCallback)(()=>{e&&e(),t({type:"sendUIEvent",data:{action:"clicked",actionSubject:"button",actionSubjectId:"loudOptInDismissButton",source:"navV3OptInModal",attributes:{type:"navV3Benefits",screen:d+1,navCohort:i,userLocation:v()}}}).fire(),h(!1)},[e,d,i,a]),j=Object(n.forwardRef)((e,t)=>o.a.createElement("div",{ref:t},o.a.createElement(G,{page:c[d]})));return o.a.createElement(p.b,null,f?o.a.createElement(g.a,{components:{Footer:()=>o.a.createElement(n.Fragment,null,o.a.createElement(j,null),o.a.createElement(z,{currentPage:d,nextPage:y,closeDialog:E,numPages:c.length})),Body:()=>o.a.createElement(W,{page:c[d],currentPage:d,prevPage:O,nextPage:y,numPages:c.length})}}):null)};var $=a("7xCX");const Y=Object(u.g)({heading:{id:"app-navigation.nav-home-onboarding.spotlight.heading",defaultMessage:"It’s time to jump into the new nav",description:"The title of the navigation forced opt in onboarding spotlight"},body:{id:"app-navigation.nav-home-onboarding.spotlight.body",defaultMessage:"We’ve designed the navigation to help you get to the things you need from anywhere, but we know it’ll take some time to adjust. Spend some time exploring, then share your feedback.",description:"The body of the navigation forced opt in onboarding spotlight"},ok:{id:"app-navigation.nav-home-onboarding.spotlight.ok",defaultMessage:"OK",description:"Text of button to dismiss the forced opt in onboarding spotlight"}}),ee=C.default.div`
  position: absolute;
  top: 67px;
  right: 12px;
`,te=({stop:e})=>{const[t,a]=Object(n.useState)(!0),{createAnalyticsEvent:r}=Object(b.a)();Object(n.useEffect)(()=>{r({type:"sendScreenEvent",data:{name:"navV3OnboardingSpotlight",attributes:{type:"navV3Benefits"}}}).fire()},[]);const i=Object(n.useCallback)(()=>{e&&e(),r({type:"sendUIEvent",data:{action:"clicked",actionSubject:"button",actionSubjectId:"navV3OnboardingDismissButton",source:"navV3OnboardingSpotlight",attributes:{type:"navV3Benefits"}}}).fire(),a(!1)},[e]);return t?o.a.createElement(ee,null,o.a.createElement($.a,{heading:o.a.createElement(u.c,Object(d.a)({},Y.heading)),actions:[{text:o.a.createElement(u.c,Object(d.a)({},Y.ok)),onClick:i}],width:340},o.a.createElement(u.c,Object(d.a)({},Y.body)))):null},ae=Object(c.a)(({coordinationClient:e})=>{const{forcedOptIn:t}=Object(n.useContext)(l.a),[a,r]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{r(a||t)},[t]),a&&o.a.createElement(i.a,{client:e,messageId:"conf-app-nav-forced-opt-in-spotlight"},o.a.createElement(te,null))}),ne=["hello.atlassian.net","pug.jira-dev.com","localhost"];a.d(t,"NavPlusHomeOnboarding",(function(){return oe}));const oe=Object(c.a)(({coordinationClient:e})=>{const{effectiveVariant:t}=Object(n.useContext)(l.a);return o.a.createElement(n.Fragment,null,o.a.createElement(r.a,{engagementId:"app-navigation"}),!ne.includes(window.location.hostname)&&t===s.h&&o.a.createElement(i.a,{client:e,messageId:"EXT-167",fallback:o.a.createElement(ae,null)},o.a.createElement(Z,null)))})},c1gS:function(e,t,a){e.exports=a.p+"5nCTgSGSJc.png"},m3Bd:function(e,t,a){var n=a("LdEA");e.exports=function(e,t){if(null==e)return{};var a,o,r=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}}}]);
//# sourceMappingURL=nav-plus-onboard~b59ad437.58geQWyrUA.js.map