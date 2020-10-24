(window.webpackJsonp=window.webpackJsonp||[]).push([["confluence-in-editor-templates-banner~b59ad437"],{AHwV:function(e,t,a){"use strict";a.r(t);var n=a("Czhu"),s=a("zjfJ"),r=a("ERkP"),l=a.n(r),i=a("KsTJ"),o=a("L21V"),c=a("lZoD"),d=a("cphC"),u=a("lPJD"),b=a("WWAs"),h=a("Q/D5"),p=a("3IV/"),f=a("WCbN"),m=a.n(f),g=a("JWHE"),v=a.n(g);const j="confluence-in-editor-templates-banner",E=Object(o.g)({message:{id:"template-panel.banner.message",defaultMessage:"{emoji}Now you can create a page with one click, and select a template directly in the editor.",description:"Text displayed in a banner at the top of the screen informing the user about new features"},linkText:{id:"template-panel.banner.link",defaultMessage:"Learn more",description:"Call to action after the primary text"},closeLabel:{id:"template-panel.banner.close",defaultMessage:"Close",description:"Accessibility label for close button"}}),O=i.default.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  height: ${50}px;
  background-image: url(${v.a});
  background-color: ${p.B50};
  color: ${p.N800};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`,w=i.default.a`
  color: ${p.B400};
`,x=i.default.div.attrs({role:"button"})`
  height: 24px;
  width: 24px;
  cursor: pointer;
  position: absolute;
  right: 5px;
  color: ${p.N600};
  &:hover {
    color: ${p.N90};
  }
`,y=i.default.span`
  &::after {
    display: inline;
    content: "\ud83c\udf89";
    margin-right: 5px;
  }
`;class C extends r.Component{constructor(...e){super(...e),Object(s.a)(this,"state",{isClosed:!1})}render(){const{coordinationClient:e}=this.props;return this.state.isClosed?null:l.a.createElement(h.a,{featureFlag:"confluence.frontend.in-editor-templates.banner"},l.a.createElement(u.a,{client:e,messageId:j},l.a.createElement(c.c,{to:[b.a]},t=>(t.show(j,50),l.a.createElement(O,null,l.a.createElement("div",null,l.a.createElement(o.c,Object(n.a)(Object(n.a)({},E.message),{},{values:{emoji:l.a.createElement(y,null)}}))," ",l.a.createElement(w,{href:"https://confluence.atlassian.com/display/ConfCloud/Create+a+page+from+a+template",target:"_blank"},l.a.createElement(o.c,Object(n.a)({},E.linkText)))),l.a.createElement(x,{onClick:()=>{this.setState({isClosed:!0}),e.stop(j),t.hide(j)}},l.a.createElement(o.c,Object(n.a)({},E.closeLabel),e=>l.a.createElement(m.a,{label:e}))))))))}}const k=Object(d.a)(C);a.d(t,"InEditorTemplatesBanner",(function(){return k}))},JWHE:function(e,t,a){e.exports=a.p+"owDEyai1fL.svg"},"Q/D5":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("ERkP"),s=a.n(n),r=(a("aWzz"),a("KIs4"));const l=({children:e,featureFlag:t,condition:a=(e=>e)})=>s.a.createElement(r.a,null,({featureFlags:r})=>a(r[t])?s.a.createElement(n.Fragment,null,e):null)},WCbN:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("ERkP")),s=r(a("4KTy"));function r(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i=function(e){return n.default.createElement(s.default,l({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M15.185 7.4l-3.184 3.185-3.186-3.186a.507.507 0 0 0-.712.003l-.7.701a.496.496 0 0 0-.004.712l3.185 3.184L7.4 15.185a.507.507 0 0 0 .004.712l.7.7c.206.207.516.2.712.004l3.186-3.185 3.184 3.185a.507.507 0 0 0 .712-.004l.701-.7a.496.496 0 0 0 .003-.712l-3.186-3.186 3.186-3.184a.507.507 0 0 0-.003-.712l-.7-.7a.508.508 0 0 0-.36-.153.5.5 0 0 0-.353.15z" fill="currentColor" fill-rule="evenodd"/></svg>'},e))};i.displayName="EditorCloseIcon";var o=i;t.default=o},WWAs:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a("Czhu"),s=a("zjfJ"),r=a("lZoD"),l=a("+FBq");const i=(e,t)=>t.indexOf(t.filter(t=>t.name===e)[0]);class o extends r.a{constructor(...e){super(...e),Object(s.a)(this,"state",{banners:[],isTopNavEnabled:!1}),Object(s.a)(this,"_updateServerRenderedBanners",e=>{0===e?this.hide("ServerRenderedBanners"):this.show("ServerRenderedBanners",e)}),Object(s.a)(this,"setTopNavEnabled",e=>{this.state.isTopNavEnabled!==e&&this.setState(t=>Object(n.a)(Object(n.a)({},t),{},{isTopNavEnabled:e}))}),Object(s.a)(this,"show",(e,t)=>{const a=i(e,this.state.banners);-1===a?this.setState(a=>{const s=[...a.banners];return s.push({name:e,height:t}),Object(n.a)(Object(n.a)({},a),{},{banners:s})}):this.state.banners[a].height!==t&&this.setState(e=>{const s=[...e.banners];return s[a].height=t,Object(n.a)(Object(n.a)({},e),{},{banners:s})})}),Object(s.a)(this,"hide",e=>{const t=i(e,this.state.banners);t>-1&&this.setState(e=>{const a=[...e.banners];return a.splice(t,1),Object(n.a)(Object(n.a)({},e),{},{banners:a})})}),Object(s.a)(this,"getTotalHeight",e=>{const t=this.state.isTopNavEnabled&&!1!==(e&&e.includeTopNav);return this.state.banners.reduce((e,t)=>e+t.height,t?l.c:0)})}}}}]);
//# sourceMappingURL=confluence-in-editor-templates-banner~b59ad437.4KQGCfuBrb.js.map