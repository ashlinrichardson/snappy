/*! License: TQgnUdJLrz.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"+CY+":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("zjfJ"),a=n("ERkP"),i=(n("aWzz"),n("+Aie")),o=n.n(i),s=n("5Asb");const c={},u=o.a.prototype.stopCallback;o.a.prototype.stopCallback=function(e,t,n){return!!!s.d.map(e=>t.classList.contains(e)).find(e=>e)&&u.call(this,e,t,n)};class l extends a.PureComponent{constructor(...e){super(...e),Object(r.a)(this,"listeners",{}),Object(r.a)(this,"lastFired",0),Object(r.a)(this,"_call",e=>{const t=+new Date;t-this.lastFired>=150&&(this.lastFired=t,this.props.listener(e))})}componentDidMount(){const{accelerator:e}=this.props;c[e],c[e]=!0,o.a.bind(e,this._call)}componentWillUnmount(){const{accelerator:e}=this.props;delete c[e],o.a.unbind(e)}render(){return null}}},"+OYW":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return f}));var r=n("Czhu"),a=n("EfWO"),i=n.n(a),o=n("fYnN"),s=n.n(o);const c="confluence.frontend.branch.deployment",u="useFrontendBranch",l="useFrontendBuildVersion",d=()=>{const e=i.a.parse(window.location.href,!0);window.location.assign(i.a.format({path:e.path,query:Object(r.a)(Object(r.a)({},e.query),{},{[u]:"off",[l]:"off"}),hash:e.hash}))},f=e=>{const t=window.__SSR_RENDER_PARAMS__?window.__SSR_RENDER_PARAMS__.useFrontendBranch:s.a.get(u),n=e[c];return!!(t&&"off"!==t||n&&"off"!==n)}},"0+uK":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("H5qd");const a=n.n(r).a`query WebItemLocationQuery($location:String$locations:[String]$contentId:ID$spaceKey:String$version:Int){webItemSections(location:$location locations:$locations contentId:$contentId key:$spaceKey version:$version){id label styleClass items{accessKey completeKey hasCondition id icon{path}params{key value}label moduleKey section styleClass tooltip url urlWithoutContextPath weight}}}`},"1ONf":function(e,t,n){"use strict";var r=n("Czhu"),a=n("ERkP"),i=n.n(a),o=n("fDrt"),s=n("X2PC"),c=n("29F/");var u=n("33AU"),l=n("1U1M"),d=n("F4Ur"),f=n("PDFU");var b=n("YHG0");const p=(e,t)=>{let n=e;const{setQuickstartState:a,isNudgeTriggerEnabled:i}=e;switch(t.type){case"loading":n=Object(r.a)(Object(r.a)({},e),{},{isLoading:!0});break;case"error":n=Object(r.a)(Object(r.a)({},e),{},{isLoading:!1,isError:!0,error:t.error});break;case"success":n=Object(r.a)(Object(r.a)({},e),{},{isLoading:!1},t.state);break;case"togglePanel":n=Object(r.a)(Object(r.a)({},e),{},{isPanelOpen:t.isPanelOpen});break;case"toggleDismiss":n=Object(r.a)(Object(r.a)({},e),{},{isDismissed:t.isDismissed}),a("isDismissed",n.isDismissed);break;case"openTask":n=Object(r.a)(Object(r.a)({},e),{},{openTaskId:t.openTaskId}),a("openTaskId",n.openTaskId||"none");break;case"toggleModal":n=Object(r.a)(Object(r.a)({},e),{},{isModalOpen:t.isModalOpen});break;case"completeTask":const o=c.i[t.taskId],s=c.h[t.taskId];i&&s?n=Object(r.a)({},e):(n=Object(r.a)(Object(r.a)({},e),{},{[o]:!0}),a(o,!0));break;case"completeNudgeTask":const{nudgeTask:u}=t;n=Object(r.a)(Object(r.a)({},e),{},{[u]:!0}),e[u]||a(u,!0)}return n};n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return O}));const h={state:{openTaskId:c.b,isPanelOpen:!0,isDismissed:!1,isLoading:!1,isError:!1,error:null,createSpaceCompleted:!0,createPageCompleted:!1,inviteTeammateCompleted:!1,sharePageCompleted:!1,integrationCompleted:!1,helpCompleted:!1,isNudgeTriggerEnabled:!1,isModalOpen:!1,setQuickstartState:()=>{}},openTask:()=>{},togglePanel:()=>{},completeTask:()=>{},toggleDismiss:()=>{},completeNudgeTask:()=>{},toggleModal:()=>{}},m=i.a.createContext(h),g=()=>Object(a.useContext)(m),O=(v=o.a,y={attribution:s.a.CC_ONBOARDING},function(e){return t=>{const[n,o]=Object(a.useState)(!1),{children:s}=t;return n?i.a.createElement(a.Fragment,null,s):i.a.createElement(v,Object(r.a)(Object(r.a)({},y),{},{onError:()=>o(!0)}),i.a.createElement(e,Object(r.a)({},t)))}})(({children:e})=>{const{isEligible:t,isNudgeTriggerEnabled:n}=Object(b.a)(),{fireLoadStateError:o}=Object(u.a)(),[s]=(()=>{const[e]=Object(l.c)(f.c,{onError:e=>{"unauthorized"===e.graphQLErrors[0].message&&Object(d.a)(e)}});return[(t,n,r="quickstart-state:")=>{e({variables:{key:r+t,value:""+n}})}]})(),g=Object(r.a)(Object(r.a)({},h.state),{},{isNudgeTriggerEnabled:n,setQuickstartState:s});Object(a.useEffect)(()=>{if(t){const e=c.i[c.b];s(e,!0)}},[t]);const[O,v]=Object(a.useReducer)(p,g),{loadState:y,state:E,error:j,loading:S}=(()=>{const[e,{called:t,data:n,error:r,loading:i}]=Object(l.b)(f.a,{fetchPolicy:"no-cache",variables:{key:Object.values(c.f)}}),[o,s]=Object(a.useState)();return Object(a.useEffect)(()=>{!t||i||r||s((e=>{const t={},{onboardingState:n}=e;return void 0!==n&&n.forEach(({key:e,value:n})=>{const r=e.split(":")[1];n&&(/(true|false)/g.test(n)?t[r]="true"===n:t[r]=n)}),t})(n))},[t,n,r,i]),{loadState:e,state:o,error:r,loading:i}})();Object(a.useMemo)(()=>{t&&y()},[t]),Object(a.useMemo)(()=>{if(!S)return j?(v({type:"error",error:j}),void o()):void(E&&v({type:"success",state:E}));v({type:"loading"})},[E,j,S]);const k={state:O,openTask:e=>{v({type:"openTask",openTaskId:e})},togglePanel:e=>{v({type:"togglePanel",isPanelOpen:e})},completeTask:e=>{v({type:"completeTask",taskId:e})},toggleDismiss:e=>{v({type:"toggleDismiss",isDismissed:e})},completeNudgeTask:e=>{v({type:"completeNudgeTask",nudgeTask:e})},toggleModal:e=>{v({type:"toggleModal",isModalOpen:e})}};return i.a.createElement(m.Provider,{value:k},e)});var v,y},"29F/":function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return f}));var r=n("Qdol");const a={IS_PANEL_OPEN:"quickstart-state:isPanelOpen",IS_DISMISSED:"quickstart-state:isDismissed",OPEN_TASK_ID:"quickstart-state:openTaskId",CREATE_SPACE_COMPLETED:"quickstart-state:createSpaceCompleted",CREATE_PAGE_COMPLETED:"quickstart-state:createPageCompleted",INVITE_TEAMMATE_COMPLETED:"quickstart-state:inviteTeammateCompleted",SHARE_PAGE_COMPLETED:"quickstart-state:sharePageCompleted",INTEGRATION_COMPLETED:"quickstart-state:integrationCompleted",HELP_COMPLETED:"quickstart-state:helpCompleted"},i="quickstart-checklist.create-space",o="quickstart-checklist.create-page",s="quickstart-checklist.invite-teammate",c="quickstart-checklist.share-page",u="quickstart-checklist.integration",l="quickstart-checklist.help",d={[o]:r.d,[s]:r.j},f={[i]:"createSpaceCompleted",[o]:"createPageCompleted",[s]:"inviteTeammateCompleted",[c]:"sharePageCompleted",[u]:"integrationCompleted",[l]:"helpCompleted"}},"33AU":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("RjSO");const a=()=>{const{createAnalyticsEvent:e}=Object(r.a)();return{firePanelViewed:(t,n)=>{e({data:{attributes:{completedTasks:t,totalTasks:n,namespaces:"nuxOnboardingQuickstartDrawer"},name:"nuxOnboardingQuickstartDrawer"},type:"sendScreenEvent"}).fire()},firePanelToggled:t=>{e({type:"sendUIEvent",data:{source:"nuxOnboardingQuickstartDrawer",actionSubject:"button",action:t?"opened":"closed",actionSubjectId:"nuxOnboardingQuickstart",attributes:{namespaces:"nuxOnboardingQuickstartDrawer"}}}).fire()},fireButtonViewed:()=>{e({type:"sendScreenEvent",data:{name:"nuxOnboardingQuickstartButtonDrawer"}}).fire()},fireButtonClicked:()=>{e({type:"sendUIEvent",data:{source:"nuxOnboardingQuickstartButtonDrawer",actionSubject:"button",action:"clicked",actionSubjectId:"nuxOnboardingQuickstartButton",attributes:{namespaces:"navigationNextScreen.nuxOnboardingQuickstartButtonDrawer"}}}).fire()},fireTaskToggled:(t,n,r,a)=>{e({type:"sendUIEvent",data:{source:"nuxOnboardingQuickstartDrawer",actionSubject:"checklistItem",action:t?"opened":"closed",actionSubjectId:a,attributes:{taskPosition:n,taskId:r,namespaces:"nuxOnboardingQuickstartDrawer"}}}).fire()},fireLoadStateError:()=>e({type:"sendOperationalEvent",data:{action:"failed",actionSubject:"onboarding-quickstart.onboardingQuickstartLoadState"}}).fire(),fireDismissToggled:(t,n,r)=>{const a={namespaces:"nuxOnboardingQuickstartDrawer"};t&&(a.completedTasks=n,a.totalTasks=r),e({type:"sendUIEvent",data:{source:"nuxOnboardingQuickstartDrawer",actionSubject:"button",action:t?"dismissed":"reactivated",actionSubjectId:"nuxOnboardingQuickstart",attributes:a}}).fire()},fireCtaClicked:t=>{e({type:"sendUIEvent",data:{source:t,action:"clicked",actionSubject:"button",actionSubjectId:"nuxOnboardingQuickstartCta",attributes:{namespaces:"nuxOnboardingQuickstartDrawer"}}}).fire()}}}},"3Z2R":function(e,t,n){"use strict";var r=n("Czhu"),a=n("zjfJ"),i=n("ERkP"),o=n.n(i),s=(n("aWzz"),n("gQ5V")),c=n("yjkv"),u=n.n(c),l=n("jLkM"),d=n.n(l),f=n("aoYE");class b extends i.Component{constructor(...e){super(...e),Object(a.a)(this,"state",{superBatchLoaded:!1})}componentDidMount(){this.mounted=!0;const{webItems:e,onLoad:t,waitForSuperBatch:n}=this.props;t&&t({webItems:e}),n&&Object(f.a)().then(()=>{this.mounted&&this.setState({superBatchLoaded:!0})})}componentWillUnmount(){this.mounted=!1}render(){const{id:e,tagName:t,className:n,style:r,children:a,webItems:i,webSections:s,location:c,contentId:u,waitForSuperBatch:l}=this.props;if(l&&!this.state.superBatchLoaded)return null;const d={"data-webitem-location":c,"data-content-id":u,children:"function"==typeof a?a({webItems:i,webSections:s}):null};return e&&(d.id=e),n&&(d.className=n),r&&(d.style=r),o.a.createElement(t,d)}}Object(a.a)(b,"defaultProps",{tagName:"div"});var p=n("0+uK");n.d(t,"a",(function(){return h}));class h extends i.Component{constructor(...e){super(...e),Object(a.a)(this,"experienceSuccess",e=>{this.props.experienceSuccess&&this.props.experienceSuccess(e)})}render(){const{location:e,children:t,onLoad:n,hasMultipleSections:a,renderWhenLoading:i,allowedWebItems:c,notAllowedWebItems:l,fetchPolicy:f,spaceKey:h,contentId:m,id:g,className:O,style:v,tagName:y,version:E,waitForSuperBatch:j}=this.props,S={location:Array.isArray(e)?null:e,locations:Array.isArray(e)?e:[],contentId:m||null,spaceKey:h||null,version:E||null};return o.a.createElement(s.b,{query:p.a,variables:S,fetchPolicy:f},({data:s,loading:f,error:p})=>{var h;if(p)return null;if(f&&!s)return i&&"function"==typeof t?t({loading:f}):null;let m=((null!=(h=s)?h.webItemSections:h)||[]).reduce((e,t)=>e.concat((t.items||[]).map(e=>Object(r.a)(Object(r.a)({},e),{},{parentSection:{label:t.label||t.styleClass}}))),[]);m=u()(m,"completeKey"),c&&(m=m.filter(e=>c.includes(e.completeKey))),l&&(m=m.filter(e=>!l.includes(e.completeKey))),m.forEach(e=>{const t={};if(Array.isArray(e.params)&&(e.params.forEach(e=>{t[e.key]=e.value}),e.params=t),e.section&&-1!==e.section.indexOf("/")){const t=e.section.split("/");e.webSection=t[1]}});let E=[];return a&&(E=d()(m.map(e=>e.section))),m.sort((e,t)=>e.weight-t.weight==0?e.label.localeCompare(t.label):e.weight-t.weight),f||this.experienceSuccess(!0),o.a.createElement(b,{id:g,className:O,style:v,tagName:y,location:e,webItems:m,webSections:E,onLoad:n,waitForSuperBatch:j},t)})}}Object(a.a)(h,"defaultProps",{fetchPolicy:"cache-and-network"})},"4CAG":function(e,t,n){"use strict";(function(t){function n(e){var t,n,a,i,o,s,c=Object.create(null);if(this[u]=c,e)if("string"==typeof e)for("?"===e.charAt(0)&&(e=e.slice(1)),o=0,s=(i=e.split("&")).length;o<s;o++)-1<(t=(a=i[o]).indexOf("="))?l(c,d(a.slice(0,t)),d(a.slice(t+1))):a.length&&l(c,d(a),"");else if(r(e))for(o=0,s=e.length;o<s;o++)l(c,(a=e[o])[0],a[1]);else for(n in e)l(c,n,e[n])}var r=Array.isArray,a=n.prototype,i=/[!'\(\)~]|%20|%00/g,o=/\+/g,s={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},c=function(e){return s[e]},u="__URLSearchParams__:"+Math.random();function l(e,t,n){t in e?e[t].push(""+n):e[t]=r(n)?n:[""+n]}function d(e){return decodeURIComponent(e.replace(o," "))}function f(e){return encodeURIComponent(e).replace(i,c)}a.append=function(e,t){l(this[u],e,t)},a.delete=function(e){delete this[u][e]},a.get=function(e){var t=this[u];return e in t?t[e][0]:null},a.getAll=function(e){var t=this[u];return e in t?t[e].slice(0):[]},a.has=function(e){return e in this[u]},a.set=function(e,t){this[u][e]=[""+t]},a.forEach=function(e,t){var n=this[u];Object.getOwnPropertyNames(n).forEach((function(r){n[r].forEach((function(n){e.call(t,n,r,this)}),this)}),this)},a.toJSON=function(){return{}},a.toString=function(){var e,t,n,r,a=this[u],i=[];for(t in a)for(n=f(t),e=0,r=a[t];e<r.length;e++)i.push(n+"="+f(r[e]));return i.join("&")},function(e){var t=function(){try{return!!Symbol.iterator}catch(e){return!1}}();"forEach"in e||(e.forEach=function(e,t){var n=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach((function(r){r.length&&!(r in n)&&(n[r]=this.getAll(r)).forEach((function(n){e.call(t,n,r,this)}),this)}),this)}),"keys"in e||(e.keys=function(){var e=[];this.forEach((function(t,n){e.push(n)}));var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(n[Symbol.iterator]=function(){return n}),n}),"values"in e||(e.values=function(){var e=[];this.forEach((function(t){e.push(t)}));var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(n[Symbol.iterator]=function(){return n}),n}),"entries"in e||(e.entries=function(){var e=[];this.forEach((function(t,n){e.push([n,t])}));var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(n[Symbol.iterator]=function(){return n}),n}),t&&!(Symbol.iterator in e)&&(e[Symbol.iterator]=e.entries),"sort"in e||(e.sort=function(){for(var e,t,n,r=this.entries(),a=r.next(),i=a.done,o=[],s=Object.create(null);!i;)t=(n=a.value)[0],o.push(t),t in s||(s[t]=[]),s[t].push(n[1]),i=(a=r.next()).done;for(o.sort(),e=0;e<o.length;e++)this.delete(o[e]);for(e=0;e<o.length;e++)t=o[e],this.append(t,s[t].shift())})}((n=e.exports=t.URLSearchParams||n).prototype)}).call(this,n("fRV1"))},"5Asb":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return o}));const r={PUBLISH:"mod+enter",PUBLISH_WITH_COMMENT:"mod+shift+enter",EDIT:"e",PREVIEW:"mod+shift+e"},a="mod+s",i="shortcuts-are-allowed",o=["ProseMirror-focused",i]},"5HTf":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("RfuI");const a=Object(r.a)({id:"WTTLL",name:"RecentPages",loader:async()=>(await Promise.all([n.e("vendors~4134d62c"),n.e(4),n.e(110),n.e("global-recent-pages~b59ad437")]).then(n.bind(null,"MxfI"))).RecentPages})},"5ypJ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("ERkP")),a=i(n("4KTy"));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e){return r.default.createElement(a.default,o({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M10.294 9.698a.988.988 0 0 1 0-1.407 1.01 1.01 0 0 1 1.419 0l2.965 2.94a1.09 1.09 0 0 1 0 1.548l-2.955 2.93a1.01 1.01 0 0 1-1.42 0 .988.988 0 0 1 0-1.407l2.318-2.297-2.327-2.307z" fill="currentColor" fill-rule="evenodd"/></svg>'},e))};s.displayName="ChevronRightIcon";var c=s;t.default=c},"7kiZ":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("Czhu"),a=n("cH76"),i=n("syT9");function o({query:e,variables:t={},fetchPolicy:n="cache-first",context:o}){const s=Object(i.b)(e),c=window.GLOBAL_APOLLO_CLIENT;let u;if("string"==typeof e){if(!s)return Promise.resolve(i.a)}else{if(!c)return Promise.resolve(i.a);if(u={query:e,variables:t,errorPolicy:"all",fetchPolicy:n,context:Object(r.a)({single:!0},o)},!s)return c.query(u)}return Object(a.a)().load({name:s,variables:t},()=>u?c.query(u):fetch("/cgraphql?q=QueryPreloader_"+s,{method:"POST",credentials:"include",referrerPolicy:"same-origin",headers:Object(r.a)({"X-APOLLO-OPERATION-NAME":s,"Content-Type":"application/json"},o&&o.headers),body:JSON.stringify({query:e,variables:t})}).then(e=>e.ok?e.json():i.a).catch(()=>i.a))}},"8PwJ":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("ERkP");const a=e=>Object(r.useCallback)(t=>{const n=t.currentTarget,r=n===document.activeElement;e&&e(t),requestAnimationFrame(()=>{r&&n!==document.activeElement&&document.body.contains(n)?n.focus():!r&&document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur()})},[e])},"93WT":function(e,t,n){"use strict";var r=n("HbGN"),a=n("ERkP"),i=n("l1C2"),o=n("aLY5");var s=e=>{let{children:t,testId:n,id:a,cssFn:s=(e=>e)}=e,c=Object(r.a)(e,["children","testId","id","cssFn"]);return Object(i.f)("div",Object.assign({css:s(o.h,void 0),"data-testid":n,"data-ds--menu--heading-item":!0,id:a},c),t)},c=n("fhcw");const u=Object(a.forwardRef)((e,t)=>{let{children:n,overrides:a,title:o,testId:c}=e,u=Object(r.a)(e,["children","overrides","title","testId"]);return void 0!==o?Object(i.f)(l,Object.assign({},u,{testId:c,ref:t,"aria-label":o}),Object(i.f)(s,{cssFn:a&&a.HeadingItem&&a.HeadingItem.cssFn,testId:c&&c+"--heading","aria-hidden":!0},o),n):Object(i.f)(l,Object.assign({},u,{ref:t}),n)}),l=Object(a.forwardRef)((e,t)=>{let{isScrollable:n,hasSeparator:a,testId:o}=e,s=Object(r.a)(e,["isScrollable","hasSeparator","testId"]);return Object(i.f)("div",Object.assign({css:Object(c.b)(n,a),"data-testid":o,role:"group","data-section":!0},s,{ref:t}))});t.a=u},Bcqe:function(e,t,n){var r=n("RNvQ"),a=n("tQYX");e.exports=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return a(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),r(e,t,{leading:i,maxWait:t,trailing:o})}},CqAv:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var r=n("H5qd"),a=n.n(r);const i=a.a`fragment PageContentFragment on Content{id type title status metadata{currentuser{favourited{isFavourite}}}space{id key name}}`,o=a.a`query RecentlyViewedQuery($cloudId:ID!$first:Int$after:String){activities{myActivities{viewed(filters:[{type:AND arguments:{products:[CONFLUENCE]objectTypes:[PAGE BLOGPOST]cloudIds:[$cloudId]}}]first:$first after:$after){edges{node{id timestamp object{id url content{...PageContentFragment}}}cursor}pageInfo{hasNextPage}}}}}${i}`,s=a.a`query RecentlyWorkedOnQuery($cloudId:ID!$first:Int$after:String){activities{myActivities{workedOn(filters:[{type:AND arguments:{products:[CONFLUENCE]objectTypes:[PAGE BLOGPOST]cloudIds:[$cloudId]}}]first:$first after:$after){edges{node{id timestamp object{id url content{...PageContentFragment}}}cursor}pageInfo{hasNextPage}}}}}${i}`,c=a.a`query RecentlyDraftedQuery($first:Int$after:String$context:String){search(cql:"type in (page,blogpost) order by lastModified desc" cqlcontext:$context first:$first after:$after){nodes{entityType url content{...PageContentFragment metadata{currentuser{lastcontributed{status when}}}}}pageInfo{hasNextPage endCursor}}}${i}`,u=a.a`query RecentlyStarredQuery($limit:Int$start:Int){favoriteContent(limit:$limit start:$start){nodes{...PageContentFragment}pageInfo{hasNextPage}}}${i}`},EFB5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("ERkP")),a=i(n("4KTy"));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e){return r.default.createElement(a.default,o({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path fill="currentColor" fill-rule="evenodd" d="M4 5.01C4 4.451 4.443 4 5.01 4h1.98C7.549 4 8 4.443 8 5.01v1.98C8 7.549 7.557 8 6.99 8H5.01C4.451 8 4 7.557 4 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 13.549 7.557 14 6.99 14H5.01C4.451 14 4 13.557 4 12.99v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C14 7.549 13.557 8 12.99 8h-1.98C10.451 8 10 7.557 10 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C20 7.549 19.557 8 18.99 8h-1.98C16.451 8 16 7.557 16 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm-12 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 19.549 7.557 20 6.99 20H5.01C4.451 20 4 19.557 4 18.99v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98z"/></svg>'},e))};s.displayName="AppSwitcherIcon";var c=s;t.default=c},FLmY:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"i",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return f})),n.d(t,"k",(function(){return b})),n.d(t,"j",(function(){return p}));var r=n("XVWa");const a="visited",i="workedOn",o="drafts",s="starred",c=[a,i,o,s],u=25,l="DRAWER",d="DROPDOWN",f="HOME",b={[l]:r.a.recentDrawer,[d]:r.a.recentDropdown,[f]:r.a.recentHome},p={[l]:"recentDrawer",[d]:"recentDropdown",PAGE:"recentPage",[f]:"recentHome"}},MjIW:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r={TOOLS_MENU_CONTAINER:"system.content.action",TOOLS_MENU_MARKER:"system.content.action/marker",TOOLS_MENU_LEADING:"system.content.action/leading",TOOLS_MENU_PRIMARY:"system.content.action/primary",TOOLS_MENU_SECONDARY:"system.content.action/secondary",TOOLS_MENU_MODIFY:"system.content.action/modify",PAGE_BUTTONS:"system.content.button",SYSTEM_DASHBOARD:"system.dashboard",SYSTEM_DASHBOARD_BUTTON:"system.dashboard.button",SYSTEM_CONTENT_BYLINE:"system.content.byline",SYSTEM_CONTENT_METADATA:"system.content.metadata",PAGE_METADATA_BANNER:"page.metadata.banner",SYSTEM_HEADER_LEFT:"system.header/left",SYSTEM_HEADER_LEFT_BUTTON_GROUP:"system.header/left.button.group",SYSTEM_HELP:"system.help/pages",SYSTEM_USER_ANONYMOUS:"system.user/anonymous",SYSTEM_USER:"system.user",SYSTEM_ADMIN_SITE_SECTION:"system.admin.site/site_admin_section",SPACE_SIDEBAR:"system.space.sidebar/main-links",SYSTEM_ADMIN:"system.admin",SYSTEM_EDITOR_LINK_BROWSER_TABS:"system.editor.link.browser.tabs",SYSTEM_EDITOR_PRECURSOR_BUTTONS:"system.editor.precursor.buttons",CREATE_DIALOG:"system.create.dialog/content",ACTION_PANEL:"page.view.selection/action-panel",DASHBOARD_LEFT:"atl.dashboard.left",DASHBOARD_SECONDARY:"atl.dashboard.secondary",ATL_GENERAL:"atl.general",ATL_FOOTER:"atl.footer",ATL_PAGE_METADATA:"atl.page.metadata.banner",ATL_PAGE_CONTENT_FOOTER_ACTIONS:"atl.page.content.footer.actions",ATL_EDITOR_SAVEBAR:"atl.editor.savebar",SYSTEM_ADMIN_SITE_ADMINISTRATION:"system.admin/siteadministration",SYSTEM_ADMIN_SITE_ADMINISTRATION_SECURITY:"system.admin/security"}},PDFU:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s}));var r=n("H5qd"),a=n.n(r);const i=a.a`query GetQuickstartState($key:[String]){onboardingState(key:$key){key value}}`,o=a.a`mutation SetQuickstartState($key:String$value:String)@experimental{experimentalSetOnboardingState(key:$key value:$value){key value}}`,s=a.a`query IsAdmin($cloudId:String!)@experimental{experimentalDrsEligibility(cloudId:$cloudId){isAdmin}}`},"S/rT":function(e,t,n){"use strict";var r=n("HbGN"),a=n("ERkP"),i=n("l1C2"),o=n("8PwJ"),s=n("U0wZ"),c=n("aLY5");const u=e=>{e.preventDefault()},l=Object(a.forwardRef)((e,t)=>{let{href:n}=e,a=Object(r.a)(e,["href"]);const{children:l,cssFn:d=(e=>e),description:f,iconAfter:b,iconBefore:p,isDisabled:h=!1,isSelected:m=!1,onClick:g,testId:O,overrides:v,onMouseDown:y}=a,E=Object(r.a)(a,["children","cssFn","description","iconAfter","iconBefore","isDisabled","isSelected","onClick","testId","overrides","onMouseDown"]),j=Object(o.a)(y);if(!l)return null;const S=h?"span":"a";return Object(i.f)(S,Object.assign({ref:t,css:d(Object(c.j)(h,m),{isSelected:m,isDisabled:h}),onDragStart:u,draggable:!1,href:h?void 0:n,"data-testid":O,onMouseDown:j,onClick:h?void 0:g},E),Object(i.f)(s.a,{overrides:v,iconBefore:p,iconAfter:b,description:f},l))});t.a=l},TGSg:function(e,t,n){"use strict";t.a=function(e){return function(t){return function(n){var r=n(t),a=r.clone();return a&&a.fire(e),r}}}},U0wZ:function(e,t,n){"use strict";var r=n("l1C2"),a=n("aLY5");const i=(e,t)=>Object(r.f)(e,Object.assign({},t));t.a=({children:e,description:t,iconAfter:n,iconBefore:o,overrides:s})=>{const c=s&&s.Title&&s.Title.render||i;return Object(r.f)("div",{css:a.c},o&&Object(r.f)("span",{"data-item-elem-before":!0,css:a.g},o),e&&Object(r.f)("span",{css:a.b},Object(r.f)(r.b,null,({css:t})=>c("span",{children:e,className:t(a.k),"data-item-title":!0})),t&&Object(r.f)("span",{"data-item-description":!0,css:a.e},t)),n&&Object(r.f)("span",{"data-item-elem-after":!0,css:a.f},n))}},YHG0:function(e,t,n){"use strict";var r=n("ERkP"),a=n("1U1M"),i=n("Aqh1"),o=n("a0gl"),s=n("Ua4J"),c=n("TSpG"),u=n("bPAi"),l=n("RNvQ"),d=n.n(l);var f=n("PDFU");n.d(t,"a",(function(){return h}));const b=["VIEW_BLOG_DATE_LEGACY"],{NEW_PAGE_LAYOUT_FF:p}=c.a,h=()=>{const{location:e,matchRoute:t}=Object(r.useContext)(s.a),{isNav2:n}=Object(r.useContext)(i.a),{featureFlagClient:l,locale:h,cloudId:m,userId:g}=Object(o.a)(),{isAdmin:O}=(()=>{var e;const{cloudId:t}=Object(o.a)(),{data:n,loading:r,error:i}=Object(a.d)(f.b,{variables:{cloudId:t}});return{isAdmin:!r&&!i&&Boolean(null!=(e=n)&&null!=(e=e.experimentalDrsEligibility)?e.isAdmin:e)}})(),{QUICKSTART:v}=c.a,{name:y}=e&&e.pathname&&t(e.pathname)||{},E=!(!y||/LEGACY|ADMIN|^CALENDAR$/.test(y)&&-1===b.indexOf(y)),{width:j}=(()=>{const e="object"==typeof window,t=()=>({width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}),[n,a]=Object(r.useState)(t);return Object(r.useEffect)(()=>{const e=d()(()=>{a(t())},200);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),e.cancel()}},[]),n})(),S=j>=1130,k=l.getBooleanValue(p,{default:!1})&&E&&!n&&O&&!!g&&S,T=Object(u.a)(v,l,!1,h,m);return{isEligible:k&&T,isTarget:k,isFlagEnabled:T,isNudgeTriggerEnabled:Object(u.a)("confluence.frontend.onboarding.quickstart.nudge",l,!1,h,m)&&S}}},aLY5:function(e,t,n){"use strict";n.d(t,"a",(function(){return A})),n.d(t,"b",(function(){return C})),n.d(t,"k",(function(){return P})),n.d(t,"g",(function(){return N})),n.d(t,"f",(function(){return x})),n.d(t,"e",(function(){return R})),n.d(t,"c",(function(){return D})),n.d(t,"j",(function(){return M})),n.d(t,"d",(function(){return L})),n.d(t,"h",(function(){return B})),n.d(t,"i",(function(){return q}));var r=n("Czhu"),a=n("l1C2"),i=n("3IV/"),o=n("BMbf"),s=n("WEdt");const c=Object(o.h)(),u=1.5*c,l=3*c,d=c,f=2.5*c,b=.375*c,p=5*c,h=p-2*d,m=s.headingSizes.h100.lineHeight,g=s.headingSizes.h100.size,O=2.5*c,v=(l-O)/2,y={backgroundColor:"transparent",border:0,outline:0,margin:0,width:"100%"},E={},j={color:"currentColor"},S={cursor:"not-allowed","&, &:hover, &:focus, &:active":{backgroundColor:"transparent",color:i.N200}},k={backgroundColor:i.N20,textDecoration:"none"},T=Object(o.j)(),_=Object(a.g)(T.keyframes),I=(e,t)=>Object(r.a)(Object(r.a)({padding:`${d}px ${f}px`,cursor:"pointer",fontSize:Object(o.f)(),display:"flex",boxSizing:"border-box",color:i.N800,userSelect:"none","&:visited":{color:i.N800},"&:hover":{color:i.N800,backgroundColor:i.N20,textDecoration:"none"},"&:focus":{outline:"none",boxShadow:e?"none":i.B100+" 0 0 0 2px inset"},"&:active":{boxShadow:"none",color:i.N800,backgroundColor:i.N30},"::-moz-focus-inner":{border:0}},t&&k),e&&S),A=(e,t)=>Object(r.a)(Object(r.a)({},y),I(e,t)),w=I,C={flexGrow:1,textAlign:"left",overflow:"hidden",outline:"none",display:"flex",flexDirection:"column",lineHeight:1.22},P={display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},N={display:"flex",flexShrink:0,marginRight:u},x={display:"flex",flexShrink:0,marginLeft:u},R=Object(r.a)(Object(r.a)({},P),{},{color:Object(i.subtleText)(),marginTop:b,fontSize:s.headingSizes.h200.size}),D={display:"flex",minHeight:h,alignItems:"center",width:"100%"},M=(e,t)=>Object(r.a)(Object(r.a)({},E),I(e,t)),L=(e,t)=>Object(r.a)(Object(r.a)({},j),I(e,t)),B={textTransform:"uppercase",fontSize:g,lineHeight:m/g,fontWeight:700,color:Object(i.subtleHeading)(),padding:`0 ${f}px`},q=(e,t,n,a)=>Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({},w(!1,!1)),{},{pointerEvents:"none",display:"flex",alignItems:"center",minHeight:p},!n&&{"&:nth-child(1n)::after":{flexBasis:"70%"},"&:nth-child(2n)::after":{flexBasis:"50%"},"&:nth-child(3n)::after":{flexBasis:"60%"},"&:nth-child(4n)::after":{flexBasis:"90%"},"&:nth-child(5n)::after":{flexBasis:"35%"},"&:nth-child(6n)::after":{flexBasis:"77%"}}),(e||t)&&{"&::before":Object(r.a)(Object(r.a)({content:'""',backgroundColor:Object(i.skeleton)()},a&&Object(r.a)(Object(r.a)({},T.css),{},{animationName:""+_})),{},{marginRight:u+v,width:O,height:O,marginLeft:v,borderRadius:e?"100%":Object(o.c)(),flexShrink:0})}),{},{"&::after":Object(r.a)(Object(r.a)({content:'""',backgroundColor:Object(i.skeleton)()},a&&Object(r.a)(Object(r.a)({},T.css),{},{animationName:""+_})),{},{marginTop:1,height:9,borderRadius:100,flexBasis:n||"100%"})})},e00J:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("ERkP"),i=n("7nmT");function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.props.innerRef((0,i.findDOMNode)(this))}},{key:"componentWillUnmount",value:function(){this.props.innerRef(null)}},{key:"render",value:function(){return this.props.children}}]),t}(a.Component);t.default=c},eWMb:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"requestService",(function(){return f}));class a{constructor(){this.listeners=new Set}subscribe(e){this.listeners.add(e),this.lastResult&&e.result(this.lastResult)}unsubscribe(e){this.listeners.delete(e)}notifyResult(e){this.listeners.forEach(t=>{t.result(e)})}notifyError(e){this.listeners.forEach(t=>{t.error&&t.error(e)})}notifyInfo(e){this.listeners.forEach(t=>{t.info&&t.info(e)})}notifyNotReady(){this.listeners.forEach(e=>{e.notReady&&e.notReady()})}}var i=n("Czhu"),o=n("EfWO"),s=n("4CAG"),c=n.n(s);const u=c.a.default||c.a,l={},d=(e,t)=>{if(t)for(const n in t)if({}.hasOwnProperty.call(t,n)){const r=t[n];if(Array.isArray(r))for(let t=0;t<r.length;t++)e[n]=r[t];else e[n]=r}},f=(e,t)=>{const{url:n,securityProvider:r,refreshedSecurityProvider:a}=e,{path:s,queryParams:c,requestInit:b}=t||l,p=r&&r(),h=((e,t="",n,r)=>{const a=new u(o.parse(e).search||void 0);if(e=e.split("?")[0],n)for(const o in n)({}).hasOwnProperty.call(n,o)&&a.append(o,n[o]);if(r&&r.params)for(const o in r.params)if({}.hasOwnProperty.call(r.params,o)){const e=r.params[o];if(Array.isArray(e))for(let t=0;t<e.length;t++)a.append(o,e[t]);else a.append(o,e)}let i="";t&&"/"!==e.substr(-1)&&(i="/");let s=a.toString();return s&&(s="?"+s),`${e}${i}${t}${s}`})(n,s,c,p),m=((e,t)=>{const n={};return d(n,t),e&&d(n,e.headers),n})(p,b&&b.headers),g=(e=>e&&e.omitCredentials?"omit":"include")(p),O=Object(i.a)(Object(i.a)({},b),{},{headers:m,credentials:g});return fetch(h,O).then(e=>204===e.status?Promise.resolve():e.ok?e.json():401===e.status&&a?a().then(e=>f({url:n,securityProvider:()=>e},t)):Promise.reject({code:e.status,reason:e.statusText}))};n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return a}));const b=r},fhcw:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n("Czhu"),a=n("3IV/"),i=n("BMbf"),o=n("WEdt");const s=Object(i.h)(),c=2.5*s,u=.75*s,l=o.headingSizes.h100.lineHeight,d=c+(l-s)-3,f=u+3,b=.75*s,p=({minWidth:e,maxWidth:t,minHeight:n,maxHeight:r})=>({display:"flex",flexDirection:"column",overflow:"auto",maxWidth:t,minWidth:e,maxHeight:r,minHeight:n}),h=(e,t)=>Object(r.a)(Object(r.a)(Object(r.a)({"&:before, &:after":{content:'" "',display:"block",height:b},"& [data-ds--menu--heading-item]":{"&:first-of-type":{marginTop:c-b},marginTop:c,marginBottom:u},"& [data-ds--menu--skeleton-heading-item]":{"&:first-of-type":{marginTop:d-b},marginTop:d,marginBottom:f}},e?{flexShrink:1,overflow:"auto"}:{flexShrink:0}),t?{borderTop:"2px solid "+a.N30A}:{"[data-section] + &":{marginTop:-6}}),{},{"&:focus":{outlineOffset:-1}})},iJcn:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("e00J");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=r,e&&e.__esModule?e:{default:e}).default;var e}})},jLkM:function(e,t,n){var r=n("s+R0");e.exports=function(e){return e&&e.length?r(e):[]}},"l/+N":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n("Czhu"),a=n("ERkP"),i=n.n(a),o=n("a0gl"),s=n("TSpG"),c=n("bPAi"),u=n("1ONf"),l=n("YHG0");const d=()=>{const{state:e}=Object(u.b)(),{isEligible:t,isTarget:n,isNudgeTriggerEnabled:r}=Object(l.a)(),{featureFlagClient:a,locale:i,cloudId:d}=Object(o.a)(),{QUICKSTART:f}=s.a,{isDismissed:b,isError:p,isLoading:h}=e,m=!h&&!p&&n&&!b;Object(c.a)(f,a,m,i,d);return{isQuickstartReactivateEnabled:!h&&!p&&t&&b,isQuickstartEnabled:!h&&!p&&t&&!b,isNudgeTriggerEnabled:r}};function f(e){return t=>{const{isQuickstartEnabled:n}=d();return n?i.a.createElement(e,Object(r.a)({},t)):null}}},lbB3:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("7kiZ"),a=n("FLmY"),i=n("CqAv");function o({cloudId:e,recentTab:t=0}){const n=[{query:i.c,variables:{cloudId:e,first:a.c,after:""}},{query:i.d,variables:{cloudId:e,first:a.c,after:""}},{query:i.a,variables:{first:a.c,context:'{"contentStatuses":["draft"]}'}},{query:i.b,variables:{limit:a.c}}];return t<0||t>=n.length?Object(r.a)(n[0]):Object(r.a)(n[t])}},mzIm:function(e,t,n){"use strict";var r=n("HbGN"),a=n("l1C2"),i=n("fhcw");t.a=e=>{let{maxWidth:t,minWidth:n,minHeight:o,maxHeight:s,testId:c}=e,u=Object(r.a)(e,["maxWidth","minWidth","minHeight","maxHeight","testId"]);return Object(a.f)("div",Object.assign({css:Object(i.a)({maxHeight:s,maxWidth:t,minHeight:o,minWidth:n}),"data-testid":c},u))}},o0fs:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("ERkP")),a=i(n("4KTy"));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e){return r.default.createElement(a.default,o({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><circle fill="inherit" cx="12" cy="18" r="1"/><path d="M15.89 9.05a3.975 3.975 0 0 0-2.957-2.942C10.321 5.514 8.017 7.446 8 9.95l.005.147a.992.992 0 0 0 .982.904c.552 0 1-.447 1.002-.998a2.004 2.004 0 0 1 4.007-.002c0 1.102-.898 2-2.003 2H12a1 1 0 0 0-1 .987v2.014a1.001 1.001 0 0 0 2.004 0v-.782c0-.217.145-.399.35-.472A3.99 3.99 0 0 0 15.89 9.05" fill="inherit"/></g></svg>'},e))};s.displayName="QuestionCircleIcon";var c=s;t.default=c},"p+Ga":function(e,t,n){"use strict";var r=n("D57K"),a=n("ERkP"),i=n.n(a),o=n("8svN");t.a=function(e){return void 0===e&&(e={}),function(t){var n=Object(a.forwardRef)((function(n,s){var c=function(e,t){void 0===e&&(e={});var n=Object(o.a)().createAnalyticsEvent;return{patchedEventProps:Object(a.useMemo)((function(){return Object.keys(e).reduce((function(a,i){var o,s=e[i];if(!["object","function"].includes(typeof s))return a;var c=t[i],u=function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];var i="function"==typeof s?s(n,t):n(s);c&&"function"==typeof c&&c.apply(void 0,Object(r.__spread)(e,[i]))};return u?Object(r.__assign)(Object(r.__assign)({},a),((o={})[i]=u,o)):a}),{})}),[e,t,n])}}(e,n).patchedEventProps,u=Object(o.a)().createAnalyticsEvent;return i.a.createElement(t,Object(r.__assign)({},n,c,{createAnalyticsEvent:u,ref:s}))}));return n.displayName="WithAnalyticsEvents("+(t.displayName||t.name)+")",n}}},syT9:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));const r=/query\s+(\w+).*?\{/,a={data:null};function i(e){if("string"==typeof e){const t=e.match(r);if(t)return t[1]}else{const t=(e.definitions||[]).find(({kind:e,name:t})=>"OperationDefinition"===e&&t);if(t)return t.name.value}}},t0jm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("ERkP")),a=i(n("4KTy"));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e){return r.default.createElement(a.default,o({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M6.485 17.669a2 2 0 0 0 2.829 0l-2.829-2.83a2 2 0 0 0 0 2.83zm4.897-12.191l-.725.725c-.782.782-2.21 1.813-3.206 2.311l-3.017 1.509c-.495.248-.584.774-.187 1.171l8.556 8.556c.398.396.922.313 1.171-.188l1.51-3.016c.494-.988 1.526-2.42 2.311-3.206l.725-.726a5.048 5.048 0 0 0 .64-6.356 1.01 1.01 0 1 0-1.354-1.494c-.023.025-.046.049-.066.075a5.043 5.043 0 0 0-2.788-.84 5.036 5.036 0 0 0-3.57 1.478z" fill="currentColor" fill-rule="evenodd"/></svg>'},e))};s.displayName="NotificationIcon";var c=s;t.default=c},wORz:function(e,t,n){"use strict";var r=n("ERkP"),a=n.n(r),i=n("iJcn"),o=n.n(i),s=n("baYQ");class c extends r.Component{render(){return a.a.createElement(s.c,null,e=>e?a.a.createElement(o.a,{innerRef:e(this.props.name)},this.props.children):this.props.children)}}t.a=c},yjkv:function(e,t,n){var r=n("S3pA"),a=n("s+R0");e.exports=function(e,t){return e&&e.length?a(e,r(t,2)):[]}}}]);
//# sourceMappingURL=82.EAhVoTiUoU.js.map