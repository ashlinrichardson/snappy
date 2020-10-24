(window.webpackJsonp=window.webpackJsonp||[]).push([["page.editor-flags~21833f8f"],{RfA0:function(e,t,i){"use strict";i.r(t);var s,n,o=i("uDfI"),r=i("kD2R"),a=i("Bud6"),l=i("f6W2"),c=i("+Prw"),d=i("zUx9"),h=i("Czhu"),u=i("EfWO"),g=i.n(u),f=(i("aWzz"),i("ERkP")),p=i.n(f),m=i("L21V"),b=i("uZih"),E=i.n(b),F=i("nnRT"),C=i.n(F),O=i("r9hL"),y=i("cGYM"),w=i("uJ/C"),j=i("btMZ");const x=["userLimitReached","editingFailed"];let S=(s=Object(O.a)(),Object(m.h)(n=s(n=class extends f.Component{constructor(...e){super(...e),this._onFlagClose=this._onFlagClose.bind(this)}shouldComponentUpdate(e){const t=["intl","location"],i=E()(e,t),s=E()(this.props,t);return!C()(s,i)}componentDidUpdate(){const{showFlag:e,reason:t,triggerAnalytics:i,contentId:s}=this.props;if("limited"===t&&e){const e=new j.a;i("collab.edit.user.limit.reached",{browser:Object(y.a)(`${e.friendlyName()}-${e.version()}`),pageId:s,editMode:Object(y.c)("quick")("quick")})}}componentWillUnmount(){this.props.shouldNavigateToEditPage||this._closeNotification()}_closeNotification(){this.props.resetNotification()}_resetLegacyFlagParams(){const{replace:e,location:t}=this.props,i=E()(t.query,x);e(Object(h.a)(Object(h.a)({},t),{},{query:i,search:g.a.format({query:i})}))}_onFlagClose(){this._resetLegacyFlagParams()}render(){const{reason:e,errorData:t,showFlag:i,intl:{formatMessage:s},hasLegacyFlagParams:n}=this.props;let o={};return"locked"===e&&t&&(o={title:s({id:"editor.unavailable.title"}),body:s({id:"limited.mode.existing.editor.body"},{0:t.user}),type:"info"}),"limited"===e&&(o={title:s({id:"collab.edit.user.limit.msg.title"}),body:s({id:"collab.edit.user.limit.msg.body"}),type:"warning"}),"failed"===e&&(o={title:s({id:"editor.unavailable.title"}),body:s({id:"editor.unavailable.generic.body"}),type:"info"}),n&&(o.onClose=this._onFlagClose),i?p.a.createElement(w.a,Object(h.a)(Object(h.a)({close:"manual"},o),{},{isShowing:!0})):null}})||n)||n);S.displayName="EditorFlags";const I=Object(c.a)(),v=e=>void 0!==e;t.default=Object(o.connect)((e,t)=>{const i=Object(l.a)(e),{userLimitReached:s,editingFailed:n}=i.query,{contentId:o}=t;let r,a=!1;const{errorData:c,contentId:h,hasFetched:u,statusCode:g,shouldNavigateToEditPage:f}=I(e,{contentId:o});r={[d.b]:"limited"}[g]||null,r||(v(s)?r="limited":v(n)&&(r="failed")),((...e)=>e.filter(e=>void 0!==e).length>0)(s,n)&&(a=!0);const p=!!r&&o===h&&u,m=a&&"locked"===r&&g&&g!==d.d;return{contentId:o,reason:r,showFlag:a||m||p&&!a,errorData:c,hasFetchedEditorContent:u,shouldNavigateToEditPage:f,hasLegacyFlagParams:a,location:i}},e=>({resetNotification:t=>e(Object(a.t)({contentId:t})),getEditorContent:t=>e(Object(a.k)({contentId:t,silent:!0})),replace:t=>e(Object(r.replace)(t))}))(S)},btMZ:function(e,t,i){"use strict";(function(e){i.d(t,"a",(function(){return s}));class s{constructor(t){t?this.userAgent=t:e.window&&(this.userAgent=e.window.navigator.userAgent)}isFirefox(){return-1!==this.userAgent.indexOf("Firefox/")}notFirefox(){return!this.isFirefox()}isMSEdge(){return-1!==this.userAgent.indexOf("Edge/")}notMSEdge(){return!this.isMSEdge()}isIE(){return-1!==this.userAgent.indexOf("MSIE")||-1!==this.userAgent.indexOf("Trident/")||this.isMSEdge()}notIE(){return!this.isIE()}isChrome(){return-1!==this.userAgent.indexOf("Chrome/")}notChrome(){return!this.isChrome()}isSafari(){return-1!==this.userAgent.indexOf("Safari/")&&-1===this.userAgent.indexOf("Chrome/")}notSafari(){return!this.isSafari()}isPhantom(){return-1!==this.userAgent.indexOf("PhantomJS")}notPhantom(){return!this.isPhantom()}version(){if(this.isIE()){const e=this.userAgent.match(/MSIE\s([\d.]+)/)||this.userAgent.match(/rv:([\d.]+)/)||this.userAgent.match(/Edge\/([\d.]+)/);return parseInt(e[1])}return this.isChrome()?parseInt(this.userAgent.match(/Chrome\/([\d.]+)/)[1]):this.isSafari()?parseInt(this.userAgent.match(/Version\/([\d.]+)/)[1]):this.isFirefox()?parseInt(this.userAgent.match(/Firefox\/([\d.]+)/)[1]):void 0}friendlyName(){return this.isMSEdge()?"MSEdge":this.isIE()?"IE":this.isChrome()?"Chrome":this.isSafari()?"Safari":this.isFirefox()?"Firefox":void 0}}}).call(this,i("fRV1"))},"uJ/C":function(e,t,i){"use strict";var s=i("Czhu"),n=i("HbGN"),o=i("zjfJ"),r=i("ERkP"),a=(i("aWzz"),i("nnRT")),l=i.n(a),c=i("S2j0"),d=i("jqY8");const h=()=>{};class u extends r.Component{constructor(...e){super(...e),Object(o.a)(this,"_closeFlag",(e,t)=>{this.flagEl&&(this.flagEl.removeEventListener("aui-flag-close",this._closeFlag),this.flagEl.close(),this.props.onClose&&this.props.onClose(t),this.flagEl=void 0)})}componentDidMount(){this._createFlag(this.props)}shouldComponentUpdate(e){return!l()(this.props,e)}componentDidUpdate(){this._closeFlag(null,!0),this._createFlag(this.props,!0)}componentWillUnmount(){this._closeFlag()}_createFlag(e,t){const{isShowing:i,type:o,title:r,body:a,close:l,extraClasses:h}=e,u=Object(n.a)(e,["isShowing","type","title","body","close","extraClasses"]);return i?(Object(c.a)(["wrc!confluence.aui.staging:confluence-flags"],()=>{const e=Object(d.d)("confluence/flag");this.flagEl&&this._closeFlag(null,t);try{this.flagEl=e(Object(s.a)({type:o,title:r,body:a,close:l,extraClasses:h},u)),this.flagEl.addEventListener("aui-flag-close",this._closeFlag),this.props.onShow&&this.props.onShow(this.flagEl)}catch(i){console.error(i)}},()=>{0}),null):null}render(){return null}}Object(o.a)(u,"defaultProps",{onShow:h,onClose:h}),i.d(t,"a",(function(){return u}))}}]);
//# sourceMappingURL=page.editor-flags~21833f8f.QvjDSWPbCz.js.map