(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"6Nnt":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("ERkP")),r=i(a("ZUNO"));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){return n.default.createElement(r.default,l({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path fill="#2684FF" fill-rule="evenodd" d="M10.998 9.035a3.5 3.5 0 1 0-3.046 3.94c-.473.836-1.096 1.778-1.87 2.827a1.168 1.168 0 0 0 .102 1.506.85.85 0 0 0 1.298-.092c2.675-3.68 3.847-6.407 3.516-8.18zm8.895 0a3.5 3.5 0 1 0-3.046 3.94c-.473.836-1.096 1.778-1.87 2.827a1.168 1.168 0 0 0 .102 1.506.85.85 0 0 0 1.298-.092c2.675-3.68 3.847-6.407 3.516-8.18zM3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3z"/></svg>'},e,{size:"medium"}))};o.displayName="Blog24Icon";var s=o;t.default=s},"9cPP":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var n=a("RfuI");const r=Object(n.a)({id:"NIGkQ",name:"ShareButtonLoader",loader:()=>Promise.all([a.e("atlaskit~66e23772"),a.e("vendors~4134d62c"),a.e(0),a.e(2),a.e(3),a.e(4),a.e(1),a.e(11),a.e(25),a.e("share~b59ad437")]).then(a.bind(null,"M3QI")).then(({ShareButton:e})=>e)}),i=Object(n.a)({id:"/aJ8X",name:"LegacyShareButtonLoader",loader:()=>Promise.all([a.e("atlaskit~66e23772"),a.e("vendors~4134d62c"),a.e(0),a.e(2),a.e(3),a.e(4),a.e(1),a.e(11),a.e(25),a.e("share~b59ad437")]).then(a.bind(null,"7alG")).then(({LegacyShareButton:e})=>e)})},EUbR:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("ERkP")),r=i(a("ZUNO"));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){return n.default.createElement(r.default,l({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path fill="#FF5630" fill-rule="evenodd" d="M16 6H8V5a1 1 0 1 0-2 0v1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2V5a1 1 0 0 0-2 0v1zM3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm3 10v8h12v-8H6z"/></svg>'},e,{size:"medium"}))};o.displayName="Calendar24Icon";var s=o;t.default=s},EvV7:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("Czhu"),r=a("zjfJ"),i=a("lZoD"),l=a("hpu0"),o=a("3VMZ");class s extends i.a{constructor(...e){super(...e),Object(r.a)(this,"state",{items:[],itemsLoaded:!1}),Object(r.a)(this,"loadTimeout",null),Object(r.a)(this,"addItem",e=>{if(this.state.items.filter(t=>t.key===e).length)return!1;const t={key:e,loaded:!1};return this.state.items.push(t),!0}),Object(r.a)(this,"getItem",e=>{const t=this.state.items.find(t=>t.key===e);return t?Object(n.a)({},t):void 0}),Object(r.a)(this,"markItem",async e=>{var t;(null===(t=this.getItem(e))||void 0===t?void 0:t.loaded)||this.setState(t=>({items:t.items.map(t=>t.key!==e?t:{key:t.key,loaded:!0})}),this.checkAllItems)}),Object(r.a)(this,"checkAllItems",()=>{let e=!0;this.state.items.length&&(this.state.items.forEach(t=>{t.loaded||(e=!1)}),e&&(Object(l.b)().succeed({name:o.a.HEADER_ITEMS_GROUP_LOAD}),this.state.itemsLoaded||(this.setState(()=>({itemsLoaded:!0})),clearTimeout(this.loadTimeout))))}),Object(r.a)(this,"initItems",()=>{this.state.items=[],this.state.itemsLoaded=!1,clearTimeout(this.loadTimeout),this.startTimer(),Object(l.b)().start({name:o.a.HEADER_ITEMS_GROUP_LOAD})}),Object(r.a)(this,"startTimer",()=>{this.loadTimeout=setTimeout(()=>{Object(l.b)().fail({name:o.a.HEADER_ITEMS_GROUP_LOAD,error:new Error("Grouped Page Buttons loading exceeded 5000 milliseconds")}),this.setState(()=>({itemsLoaded:!0}))},5e3)})}}},HJud:function(e,t,a){"use strict";var n=a("zjfJ"),r=a("ERkP"),i=a.n(r),l=(a("aWzz"),a("MAnY")),o=a.n(l),s=a("b1dP"),c=a.n(s),u=a("Wuxy"),d=a.n(u),h=a("6Nnt"),m=a.n(h),f=a("ytIA"),p=a.n(f),v=a("EUbR"),b=a.n(v),g=a("Jdbh"),y=a.n(g),E=a("HP67"),O=a.n(E),C=a("B7n+"),I=a.n(C);const j=()=>i.a.createElement("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1"},i.a.createElement("title",null,"object/comment/16"),i.a.createElement("desc",null,"Created with Sketch."),i.a.createElement("g",{id:"object/comment/16",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},i.a.createElement("path",{d:"M2,0 L14,0 C15.1045695,-2.02906125e-16 16,0.8954305 16,2 L16,14 C16,15.1045695 15.1045695,16 14,16 L2,16 C0.8954305,16 1.3527075e-16,15.1045695 0,14 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M12.3540869,12.0466753 L12.3540869,12.046119 L12.3540869,12.0455626 C12.3540869,12.0455626 11.4856556,10.7899473 11.9284723,10.3142933 L11.9079407,10.3254197 C12.589368,9.6122168 13,8.71042127 13,7.72962824 C13,5.42813035 10.7570612,3.55555556 8.00027745,3.55555556 C5.24293879,3.55555556 3,5.42813035 3,7.72962824 C3,10.0311261 5.24293879,11.9037009 8.00027745,11.9037009 C8.78935686,11.9037009 9.53348871,11.7457059 10.1982687,11.4725525 C10.7553965,12.0405558 11.4690084,12.3459757 11.9978359,12.4277548 L11.9995006,12.4260859 C12.0283558,12.4355433 12.0583208,12.4444444 12.0905055,12.4444444 C12.2486543,12.4444444 12.3762832,12.3159344 12.3762832,12.1573831 C12.3762832,12.1178843 12.3685145,12.0806108 12.3540869,12.0466753 Z",id:"Combined-Shape",fill:"#36B37E"}))),w=()=>i.a.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1"},i.a.createElement("title",null,"object/comment/24"),i.a.createElement("desc",null,"Created with Sketch."),i.a.createElement("g",{id:"object/comment/24",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},i.a.createElement("path",{d:"M3,0 L21,0 C22.6568542,-3.04359188e-16 24,1.34314575 24,3 L24,21 C24,22.6568542 22.6568542,24 21,24 L3,24 C1.34314575,24 2.02906125e-16,22.6568542 0,21 L0,3 C-2.02906125e-16,1.34314575 1.34314575,3.04359188e-16 3,0 Z M18.966539,18.5857916 L18.966539,18.5849015 L18.966539,18.5840113 C18.966539,18.5840113 17.577049,16.5750268 18.2855557,15.8139803 L18.2527052,15.8317826 C19.3429887,14.690658 20,13.2477851 20,11.6785163 C20,7.99611966 16.4112979,5 12.0004439,5 C7.58870207,5 4,7.99611966 4,11.6785163 C4,15.3609129 7.58870207,18.3570326 12.0004439,18.3570326 C13.262971,18.3570326 14.4535819,18.1042406 15.5172299,17.6671952 C16.4086344,18.5760003 17.5504134,19.0646723 18.3965374,19.1955188 L18.3992009,19.1928485 C18.4453693,19.2079804 18.4933134,19.2222222 18.5448088,19.2222222 C18.797847,19.2222222 19.0020532,19.0166062 19.0020532,18.762924 C19.0020532,18.699726 18.9896232,18.6400885 18.966539,18.5857916 Z",id:"Combined-Shape",fill:"#36B37E"})));a.d(t,"a",(function(){return S}));const _=["small","medium"],k={page:[o.a,c.a],blogpost:[d.a,m.a],"com.atlassian.confluence.extra.team-calendars:calendar-content-type":[p.a,b.a],"com.atlassian.confluence.extra.team-calendars:space-calendars-view-content-type":[p.a,b.a],comment:[()=>i.a.createElement(I.a,{glyph:j}),()=>i.a.createElement(I.a,{glyph:w})],"ac:com.atlassian.confluence.plugins.confluence-questions:question":[y.a,O.a]};class S extends r.PureComponent{constructor(...e){super(...e),Object(n.a)(this,"getIcon",()=>{const{type:e,size:t}=this.props,a=e?e.toLowerCase():"";return(k[a]||[o.a,c.a])[_.indexOf(t)||0]})}render(){const{label:e,size:t}=this.props,a=this.getIcon();return i.a.createElement(a,{size:t,label:e})}}Object(n.a)(S,"defaultProps",{size:"medium"})},HP67:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("ERkP")),r=i(a("ZUNO"));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){return n.default.createElement(r.default,l({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path fill="#6554C0" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm9 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-2a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm3.238-8.88a3.12 3.12 0 0 0-6.238 0 1 1 0 1 0 2 0 1.119 1.119 0 0 1 2.238 0 1.1 1.1 0 0 1-.329.775l-1.499.994a.999.999 0 0 0-.448.834v.022h-.002v.753a1 1 0 0 0 2 0v-.228l.717-.464a3.106 3.106 0 0 0 1.561-2.687zm-3.285 4.882a.998.998 0 1 0 0 1.997.998.998 0 0 0 0-1.997z"/></svg>'},e,{size:"medium"}))};o.displayName="Question24Icon";var s=o;t.default=s},Jdbh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("ERkP")),r=i(a("ZUNO"));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){return n.default.createElement(r.default,l({dangerouslySetGlyph:'<svg width="16" height="16" viewBox="0 0 16 16" focusable="false" role="presentation"><path fill="#6554C0" fill-rule="evenodd" d="M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm9.751 5.75a3.75 3.75 0 0 0-7.5 0 1 1 0 0 0 2 0 1.75 1.75 0 1 1 2.687 1.476l-1.48.957a1 1 0 0 0-.457.84V10a1 1 0 0 0 2 0v-.454l.873-.565c1.117-.65 1.877-1.846 1.877-3.231zM8.001 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>'},e,{size:"small"}))};o.displayName="Question16Icon";var s=o;t.default=s},MAnY:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("ERkP")),r=i(a("ZUNO"));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){return n.default.createElement(r.default,l({dangerouslySetGlyph:'<svg width="16" height="16" viewBox="0 0 16 16" focusable="false" role="presentation"><path fill="#2684FF" fill-rule="evenodd" d="M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm2 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H4zm0 4a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H4zm0 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2H4z"/></svg>'},e,{size:"small"}))};o.displayName="Page16Icon";var s=o;t.default=s},QBI0:function(e,t,a){"use strict";var n=a("Czhu"),r=a("O94r"),i=a.n(r),l=(a("aWzz"),a("ERkP")),o=a.n(l),s=a("lZoD"),c=a("EvV7"),u=a("dpHv"),d=a("gQ5V"),h=a("L21V"),m=a("liuE"),f=a("H5qd");const p=a.n(f).a`query DraftStatusQuery($contentId:ID!){singleContent(id:$contentId){id metadata{currentuser{lastcontributed{status}}}}}`,v=e=>{const{contentId:t}=e;return o.a.createElement(d.b,{query:p,fetchPolicy:"network-only",variables:{contentId:t}},({data:e,loading:t,error:a})=>{var n;if(t||a)return null;return"unpublished"===(null!=(n=e)&&null!=(n=n.singleContent)&&null!=(n=n.metadata)&&null!=(n=n.currentuser)&&null!=(n=n.lastcontributed)?n.status:n)?o.a.createElement(m.a,{appearance:"default"},o.a.createElement(h.c,{id:"content-metadata.draft.status.unpublished",defaultMessage:"UNPUBLISHED CHANGES",description:"user has made changes to content but not published them yet"},e=>o.a.createElement("span",{"data-test-id":"draft-status-lozenge"},e))):null})};var b=a("FdGg"),g=a("X2PC"),y=a("aiWh"),E=a("RjSO"),O=a("r+LL");const C={type:"sendUIEvent",data:{action:"clicked",source:"viewPageScreen",actionSubject:"JiraTicketsButton"}};function I({children:e}){const{createAnalyticsEvent:t}=Object(E.a)(),a=Object(l.useRef)(null);return Object(l.useEffect)(()=>{setTimeout(()=>{var e;let n=!1;const r=null!=(e=a)&&null!=(e=e.current)&&null!=(e=e.children)?e[O.a.CONTENT_METADATA_JIRA]:e;r&&!r.classList.contains("hidden")&&(n=!0),n&&t({type:"sendTrackEvent",data:{actionSubject:"JiraTicketsButton",action:"shown",source:"viewPageScreen"}}).fire()},5e3)},[]),o.a.createElement(y.a,{analyticsData:C,innerRef:a,wrapChildren:!0},e)}var j=a("V6qs"),w=a("EufE"),_=a("2+Cz"),k=a("+6Tk"),S=a("9cPP"),z=a("zjfJ"),M=a("HbGN"),N=a("Iy7w"),P=a("uZih"),T=a.n(P),A=a("lRcl"),L=a("HJud");const x=Object(N.a)("a",{shouldForwardProp:()=>!0,target:"e1cucsw0"})({name:"1b0gse9",styles:"margin-left:3px !important;margin-right:2px !important;img{max-height:100%;height:auto;display:inline-block;vertical-align:middle;margin-right:5px;}"}),R=e=>{let{classes:t,id:a,url:r,label:i,onClick:l,style:s,icon:c}=e,u=Object(M.a)(e,["classes","id","url","label","onClick","style","icon"]);return o.a.createElement(x,Object(n.a)({className:t,href:r,id:a,onClick:l,style:s},u),c,"string"==typeof i?o.a.createElement("span",{dangerouslySetInnerHTML:{__html:i}}):i)};class D extends l.PureComponent{getIcon(){const{disableIcon:e,params:t,iconStyle:a,spinner:n,iconInfo:r,label:i,iconSize:l}=this.props;let s=t&&t.iconClass;return e?null:n?o.a.createElement(A.a,{size:"small"}):r&&r.path?o.a.createElement("img",{style:a,src:r.path,width:r.width,height:r.height,alt:i,title:i}):s?(-1===s.indexOf("aui-iconfont-")&&(s="aui-iconfont-"+s),o.a.createElement(L.a,{iconSize:l,className:s,style:a})):null}render(){const e=this.props,{className:t,id:a,url:r,type:l,label:s,onClick:c,style:u}=e,d=Object(M.a)(e,["className","id","url","type","label","onClick","style"]),h="primary"===l?"aui-button-primary":"",m=i()(t,h),f=this.getIcon(),p=T()(Object(n.a)({classes:m,id:a,url:r,label:s,onClick:c,style:u,icon:f},d),["disableIcon","iconStyle","spinner","iconInfo","iconSize"]);return o.a.createElement(R,Object(n.a)({},p))}}Object(z.a)(D,"defaultProps",{spinner:!1,iconStyle:{},style:{},iconSize:"small"}),a.d(t,"a",(function(){return H}));const B={fontSize:"14px",display:"inline-block",verticalAlign:"top",paddingLeft:"8px"},H=e=>{const t=Object(k.b)("confluence.frontend.fabric.share.published"),a=Object(k.b)("confluence.frontend.enable.urlShortener.on.share"),{webItems:r,actions:l,modifications:d,className:h,id:m,disableIcons:f,webItemClassName:p,ContainerTagName:y,pageId:E}=e;return o.a.createElement(s.c,{to:[c.a]},({markItem:e,state:s})=>o.a.createElement(y,{className:h,id:m},r.map(r=>{const c={key:r.completeKey,url:r.url,id:r.id,onClick:r.onClick||l[r.moduleKey],className:i()(r.styleClass,p),params:r.params,iconInfo:r.icon,label:r.label,tooltip:r.tooltip,spinner:!!d[r.moduleKey]&&d[r.moduleKey].spinner,disableIcon:f,iconStyle:r.iconStyle};return r.id===O.a.CONTENT_METADATA_JIRA&&(c["data-jira-metadata-count"]=-1),E&&r.id===O.a.DRAFT_STATUS_LOZENGE?o.a.createElement(v,{key:E,contentId:E}):r.id===O.a.CONTENT_METADATA_ATTACHMENTS?o.a.createElement(u.b,{key:"view-attachments-button"}):r.id===O.a.INVITE_TO_EDIT?o.a.createElement("span",{style:B,key:"fabric-share"},t?o.a.createElement(S.b,{contentId:r.contentId,useUrlShortener:a,markItem:e}):o.a.createElement(S.a,{className:"share webitem-invite-button",id:r.id,markItem:e})):r.id===O.a.CONTENT_METADATA_PAGE_RESTRICTIONS?o.a.createElement(b.a,{attribution:g.a.MISSION_CONTROL,key:"restrictions-dialog-trigger"},o.a.createElement(w.a,{triggeredFrom:"fromView",markItemAsLoaded:e,headerItemsLoaded:s.itemsLoaded})):r.id===O.a.EDIT_PAGE_METADATA_RESTRICTIONS?o.a.createElement(b.a,{attribution:g.a.MISSION_CONTROL,key:"restrictions-dialog-editor-trigger"},o.a.createElement(_.a,null),o.a.createElement(w.a,{triggeredFrom:"fromEdit",editor:"fabric"})):r.id===O.a.ANALYTICS_ADDON_ACTIONS_MENU||r.id===O.a.ANALYTICS_ADDON_BYLINE?o.a.createElement(j.a,{key:r.completeKey,webItemId:r.id},o.a.createElement(D,Object(n.a)({},c))):r.id===O.a.CONTENT_METADATA_JIRA?o.a.createElement(I,{key:r.completeKey},o.a.createElement(D,Object(n.a)({},c))):o.a.createElement(D,Object(n.a)({key:r.completeKey},c))})))};H.displayName="WebItemList",H.defaultProps={disableIcons:!1,ContainerTagName:"div",actions:{},modifications:{}}},V6qs:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("ERkP"),r=a.n(n),i=(a("aWzz"),a("aiWh")),l=a("r+LL");const o={type:"sendUIEvent",data:{action:"clicked",source:"viewPageScreen",actionSubject:"AnalyticsButton",attributes:{from:"fromByline"}}},s={type:"sendUIEvent",data:{action:"clicked",source:"viewPageScreen",actionSubject:"AnalyticsButton",attributes:{from:"fromActionMenu"}}};class c extends n.PureComponent{render(){return this.props.webItemId===l.a.ANALYTICS_ADDON_BYLINE?r.a.createElement(i.a,{analyticsData:o},this.props.children):r.a.createElement(i.a,{analyticsData:s},this.props.children)}}},Wuxy:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("ERkP")),r=i(a("ZUNO"));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){return n.default.createElement(r.default,l({dangerouslySetGlyph:'<svg width="16" height="16" viewBox="0 0 16 16" focusable="false" role="presentation"><path fill="#2684FF" fill-rule="evenodd" d="M6.972 6.128a2.5 2.5 0 1 0-2.37 2.87c-.277.394-.616.815-1.016 1.265a.916.916 0 0 0-.058 1.147.607.607 0 0 0 .948.043c1.939-2.221 2.77-3.996 2.496-5.325zm7 0a2.5 2.5 0 1 0-2.37 2.87c-.277.394-.616.815-1.016 1.265a.916.916 0 0 0-.058 1.147.607.607 0 0 0 .948.043c1.939-2.221 2.77-3.996 2.496-5.325zM2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/></svg>'},e,{size:"small"}))};o.displayName="Blog16Icon";var s=o;t.default=s},ZUNO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("D57K"),r=n.__importStar(a("ERkP")),i=n.__importDefault(a("KsTJ")),l=a("3IV/"),o={small:{height:"16px",width:"16px"},medium:{height:"24px",width:"24px"}},s=function(e){return e.size?"height: "+o[e.size].height+"; width: "+o[e.size].width+";":null};t.IconWrapper=i.default.span(c||(c=n.__makeTemplateObject(["\n  "," color: ",";\n  display: inline-block;\n  fill: ",";\n  flex-shrink: 0;\n  line-height: 1;\n\n  > svg {\n    "," max-height: 100%;\n    max-width: 100%;\n    overflow: hidden;\n    pointer-events: none;\n    vertical-align: bottom;\n  }\n  /* Stop-color doesn't properly apply in chrome when the inherited/current color changes.\n   * We have to initially set stop-color to inherit (either via DOM attribute or an initial CSS\n   * rule) and then override it with currentColor for the color changes to be picked up.\n   */\n  stop {\n    stop-color: currentColor;\n  }\n"],["\n  "," color: ",";\n  display: inline-block;\n  fill: ",";\n  flex-shrink: 0;\n  line-height: 1;\n\n  > svg {\n    "," max-height: 100%;\n    max-width: 100%;\n    overflow: hidden;\n    pointer-events: none;\n    vertical-align: bottom;\n  }\n  /* Stop-color doesn't properly apply in chrome when the inherited/current color changes.\n   * We have to initially set stop-color to inherit (either via DOM attribute or an initial CSS\n   * rule) and then override it with currentColor for the color changes to be picked up.\n   */\n  stop {\n    stop-color: currentColor;\n  }\n"])),s,(function(e){return e.primaryColor||"currentColor"}),(function(e){return e.secondaryColor||l.background}),s);var c,u=function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(a,e),a.prototype.render=function(){var e=this.props,a=e.dangerouslySetGlyph,n=e.label,i=e.size;return r.default.createElement(t.IconWrapper,{size:i,"aria-label":n||void 0,role:n?"img":"presentation",dangerouslySetInnerHTML:a?{__html:a}:void 0})},a}(r.Component);t.default=u,t.size=Object.keys(o).reduce((function(e,t){var a;return Object.assign(e,((a={})[t]=t,a))}),{})},aiWh:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("ERkP"),r=a.n(n),i=(a("aWzz"),a("W071"));const l=()=>{};function o({children:e,analyticsData:t,innerRef:a,wrapChildren:o=!1}){var s;const c=(null!=(s=e)&&null!=(s=s.props)?s.onClick:s)||l,u=Object(i.a)(c,t);return o?r.a.createElement("span",{ref:a,onMouseDown:u},e):Object(n.cloneElement)(e,{onClick:u,ref:a})}},amtX:function(e,t,a){"use strict";var n=a("HbGN"),r=a("ERkP"),i=a.n(r),l=a("zx5z"),o=a("mAAO"),s=a("I17z"),c=a("g52X");function u(){}const d="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>-1,h=i.a.forwardRef((function(e,t){let{mode:a,onMouseDown:l=u,onMouseUp:h=u}=e,m=Object(n.a)(e,["mode","onMouseDown","onMouseUp"]);const f=m.appearance||"default",p=m.spacing||"default",v=Boolean(m.shouldFitContainer),b=Boolean(m.isSelected),g=Object(c.a)(m),[y,E]=Object(r.useState)(!1),O=Object(r.useCallback)(e=>{l(e),d&&E(!0)},[l,E]),C=Object(r.useCallback)(e=>{h(e),d&&E(!1)},[h,E]),I=Object(r.useMemo)(()=>Object(s.b)({appearance:f,spacing:p,mode:a,isSelected:b,shouldFitContainer:v,isOnlySingleIcon:g}),[f,p,a,b,v,g]);return i.a.createElement(o.a,Object.assign({},m,{ref:t,buttonCss:I,"data-firefox-is-active":!!y||void 0,onMouseDown:O,onMouseUp:C}))})),m=i.a.memo(i.a.forwardRef((function(e,t){return i.a.createElement(l.a.Consumer,null,({mode:a})=>i.a.createElement(h,Object.assign({},e,{ref:t,mode:a})))})));m.displayName="Button",t.a=m},b1dP:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("ERkP")),r=i(a("ZUNO"));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){return n.default.createElement(r.default,l({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path fill="#2684FF" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm1 18c0 .556.446 1 .995 1h8.01c.54 0 .995-.448.995-1 0-.556-.446-1-.995-1h-8.01c-.54 0-.995.448-.995 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1z"/></svg>'},e,{size:"medium"}))};o.displayName="Page24Icon";var s=o;t.default=s},dpHv:function(e,t,a){"use strict";a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return O}));var n=a("zjfJ"),r=a("Iy7w"),i=a("ERkP"),l=a.n(i),o=a("L21V"),s=a("zJ/j"),c=a("fWid"),u=a.n(c),d=a("3IV/"),h=a("aiWh"),m=a("frZf"),f=a("+mzV"),p=a("FdGg"),v=a("X2PC");const b=Object(r.a)("span",{target:"e1www41e0"})("button{cursor:pointer;height:30px;width:30px;padding:0;margin:0;}a,a:hover{color:",d.N400,";}"),g=Object(o.g)({attachments:{id:"attachments.view-attachments-button",defaultMessage:"View attachments",description:"Explaining that click on a button will take user to a list of attachments for the page"}}),y={type:"sendUIEvent",data:{action:"clicked",actionSubject:"ViewAttachmentsButton",source:"attachments",attributes:{triggeredFrom:"fromView"}}},E={type:"sendUIEvent",data:{action:"clicked",actionSubject:"ViewAttachmentsButton",source:"attachments",attributes:{triggeredFrom:"actionsMenu"}}},O=Object(o.h)(class extends i.PureComponent{constructor(...e){super(...e),Object(n.a)(this,"label",this.props.intl.formatMessage(g.attachments))}render(){return l.a.createElement(p.a,{attribution:v.a.BACKBONE},l.a.createElement(f.a.Consumer,null,({contentId:e})=>l.a.createElement(b,null,l.a.createElement(s.a,{appearance:"subtle"},l.a.createElement(h.a,{analyticsData:y},l.a.createElement("a",{href:`${m.a}/pages/viewpageattachments.action?pageId=${e}&metadataLink=true`},l.a.createElement(u.a,{label:this.label})))))))}})},fWid:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("ERkP")),r=i(a("4KTy"));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){return n.default.createElement(r.default,l({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M11.643 17.965c-1.53 1.495-4.016 1.496-5.542.004a3.773 3.773 0 0 1 .002-5.412l7.147-6.985a2.316 2.316 0 0 1 3.233-.003c.893.873.895 2.282.004 3.153l-6.703 6.55a.653.653 0 0 1-.914-.008.62.62 0 0 1 0-.902l6.229-6.087a.941.941 0 0 0 0-1.353.995.995 0 0 0-1.384 0l-6.23 6.087a2.502 2.502 0 0 0 0 3.607 2.643 2.643 0 0 0 3.683.009l6.703-6.55a4.074 4.074 0 0 0-.003-5.859 4.306 4.306 0 0 0-6.002.003l-7.148 6.985a5.655 5.655 0 0 0-.001 8.118c2.29 2.239 6.015 2.238 8.31-.005l6.686-6.533a.941.941 0 0 0 0-1.353.995.995 0 0 0-1.384 0l-6.686 6.534z" fill="currentColor" fill-rule="evenodd"/></svg>'},e))};o.displayName="AttachmentIcon";var s=o;t.default=s},ytIA:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("ERkP")),r=i(a("ZUNO"));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){return n.default.createElement(r.default,l({dangerouslySetGlyph:'<svg width="16" height="16" viewBox="0 0 16 16" focusable="false" role="presentation"><path fill="#FF5630" fill-rule="evenodd" d="M6 5H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zM2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm8 4v1h2V4a1 1 0 0 0-2 0zM4 4v1h2V4a1 1 0 0 0-2 0zm1 4h6v3H5V8z"/></svg>'},e,{size:"small"}))};o.displayName="Calendar16Icon";var s=o;t.default=s}}]);
//# sourceMappingURL=71.5XgiPCYi3T.js.map