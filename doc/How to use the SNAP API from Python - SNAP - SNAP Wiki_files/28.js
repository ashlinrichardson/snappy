(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"46jh":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("Czhu"),r=a("ERkP"),c=a.n(r),i=a("w7pu");function o(e){return function(t){const{isSiteAdmin:a,error:o,loading:s}=Object(r.useContext)(i.a);return o||s?null:c.a.createElement(e,Object(n.a)(Object(n.a)({},t),{},{isSiteAdmin:a}))}}},"54y6":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("ERkP"),r=a("RjSO");const c=({isGrandfathered:e})=>{const{createAnalyticsEvent:t}=Object(r.a)();return{createAnalyticsEvent:t,analyticsAttributes:Object(n.useMemo)(()=>({isGrandfathered:e,isSiteAdmin:!0,isEnhancedFeatureGate:!0}),[e])}}},"6HGh":function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a("ERkP"),r=a.n(n),c=a("KsTJ"),i=a("93GD"),o=a.n(i),s=a("5kGD"),u=a("3IV/"),d=a("bg0W"),l=a("WEdt"),E=a("+352"),p=a("mvtW");const b=c.default.div`
  width: ${({width:e})=>e}px;
  flex: 0 0 auto;
`,g=c.default.div`
  display: flex;
  flex-direction: column;
`,f=c.default.div`
  ${Object(l.h400)()};
  margin-top: 0;
`,m=c.default.div`
  margin-top: 8px;
`,O=c.default.div`
  margin-top: 16px;
`,h=c.default.div`
  background-color: ${u.N0};

  border-radius: 3px;
  display: flex;

  margin: 0 auto;

  ${({appearanceType:e})=>{switch(e){case E.P.DEFAULT:return c.css`
          padding: 16px 25px;
          ${d.e100};
          max-width: 710px;
        `;case E.P.FLAT:return c.css`
          padding: 16px 25px;
          max-width: 710px;
        `;case E.P.INLINE:return c.css`
          width: 352px;
          font-size: 14px;
        `;case E.P.INLINE_MODAL:return c.css`
          max-width: 400px;
          ${f} {
            ${Object(l.h600)()};
            margin-top: 0;
          }

          ${m} {
            margin-top: 16px;
          }

          ${O} {
            margin-top: 96px;
            display: flex;
          }
        `}}}
`;function j({actions:e,appearanceType:t=E.P.DEFAULT,body:a,edition:n,title:c}){return r.a.createElement(s.a,{mode:"light"},r.a.createElement(h,{appearanceType:t},n===p.a.PREMIUM&&r.a.createElement(b,{width:"40"},r.a.createElement(o.a,{label:"",primaryColor:u.B400})),r.a.createElement(g,null,r.a.createElement(f,null,c),"string"==typeof a?r.a.createElement(m,{dangerouslySetInnerHTML:{__html:a}}):r.a.createElement(m,null,a),e&&r.a.createElement(O,{className:"actionButtons"},e))))}},"9ZX9":function(e,t,a){"use strict";a.d(t,"a",(function(){return T}));var n=a("ERkP"),r=a.n(n),c=a("L21V"),i=a("RjSO"),o=a("zJ/j"),s=a("6z9Z"),u=a("3VMZ"),d=a("hpu0"),l=a("TSpG"),E=a("HKB3"),p=a("1U1M"),b=a("a0gl"),g=a("LEcB"),f=a("dIe6"),m=a("+352"),O=a("mvtW"),h=a("t0Ff"),j=a("6n9r"),S=a("FdbS"),y=a("3ike");const T=({autoFocus:e=!0,analyticsProps:{actionSubjectId:t,attributes:a,source:T},appearance:A="primary",children:I,onUpFlowOpen:R,targetEdition:L=O.a.STANDARD,onUpgradeButtonClick:w})=>{const[v,U]=Object(n.useState)(!1),{data:k,loading:x,error:N}=Object(p.d)(h.a),[F,M]=Object(n.useState)(),P=Object(j.a)(k),{cloudId:C}=Object(b.a)(),{createAnalyticsEvent:D}=Object(i.a)(),_=Object(n.useContext)(s.a),{cohort:B,fireExposureEvent:G}=Object(g.a)(l.a.IN_CONTEXT_MODAL,E.b,E.a.NOT_ENROLLED),q=B===E.a.EXPERIMENT&&(x||P===O.a.FREE);Object(n.useEffect)(()=>()=>{q||_.abort({name:u.a.UPSELL_EDITION,reason:"Canceled by user"})},[_,q]);if(x)return null;const z=N||F;return r.a.createElement(r.a.Fragment,null,z?r.a.createElement(f.a,{error:z}):null,r.a.createElement(o.a,{appearance:A,autoFocus:e,className:"primaryButton",href:q?void 0:m.R,onClick:()=>{G(),a&&(a.currentEdition=P,a.targetEdition=L,a.upFlowVariateFlag=B),D({type:"sendUIEvent",data:{action:"clicked",actionSubject:"link",actionSubjectId:t,source:T,attributes:a}}).fire(),_.start({name:u.a.UPSELL_EDITION,attributes:{currentEdition:P,linkClicked:t,source:T,targetEdition:L,upFlowVariateFlag:B}}),q?U(!0):(async()=>{w&&w();try{const e=await Object(y.a)(P);_.succeed({name:u.a.UPSELL_EDITION,attributes:{currentEdition:P,targetEdition:e,upFlowVariateFlag:B}}),window.location.reload()}catch(e){Object(d.c)(u.a.UPSELL_EDITION,e),M(e)}})()},target:q?void 0:"_blank"},I||r.a.createElement(c.c,{id:"change-edition.upgrade.try.now",defaultMessage:"Try it now",description:"The text of the button/link which starts the user onto the path of upgrade"})),q&&v?r.a.createElement(S.a,{canChangeEdition:!0,cloudId:C,currentEdition:P,flow:"upgrade",product:"confluence",targetEdition:L,touchpointId:T,isExperienceTrackerEnabled:!0,onClose:R?void 0:()=>{U(!1)},onOpen:R,epMessageId:m.T}):null)}},Gj0q:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u}));var n=a("ERkP"),r=a.n(n),c=a("L21V"),i=a("54y6");let o;!function(e){e.FREE="FREE",e.PREMIUM="PREMIUM",e.STANDARD="STANDARD"}(o||(o={}));const s=Object(c.g)({label:{id:"growth-experiment-enhanced-feature-gates.upgrade-button",defaultMessage:"Upgrade",description:"Label for upgrade button on enhanced feature gates"}}),u=Object(c.h)(({intl:e,UpgradeEditionButton:t,autoFocus:a,targetEdition:n,onUpFlowOpen:c,source:o,isGrandfathered:u})=>{const{analyticsAttributes:d}=Object(i.a)({isGrandfathered:u});return r.a.createElement(t,{autoFocus:a,targetEdition:n,onUpFlowOpen:c,analyticsProps:{actionSubjectId:"upgradeButton",source:o,attributes:d}},e.formatMessage(s.label))})},"Uo/y":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=e=>{let t=!0,a=!0;return e&&(t=-1!==e.toLowerCase().indexOf("en",0)),navigator&&(a=navigator.language.includes("en")),a&&t}},ZUFC:function(e,t,a){"use strict";var n=a("Czhu"),r=a("zjfJ"),c=a("ERkP"),i=a.n(c),o=a("L21V"),s=a("2q8g"),u=a.n(s),d=a("u6In"),l=a("zJ/j"),E=(a("aWzz"),a("wn7R"));const p=e=>{const t=i.a.Children.toArray(e.children);return i.a.createElement(E.a,null,t)};var b=a("+352"),g=a("46jh"),f=a("9ZX9"),m=a("psri"),O=a.n(m),h=a("1U1M"),j=a("RjSO"),S=a("T+Mg"),y=a("oayO"),T=a("SRtI"),A=a("a0gl"),I=a("dIe6"),R=a("t0Ff"),L=a("6n9r"),w=a("mvtW"),v=a("mTU2"),U=a("FdbS");const k=Object(S.a)(({analyticsProps:e,autoFocus:t,onUpFlowOpen:a,targetEdition:r=w.a.STANDARD,flags:s})=>{const[d,E]=Object(c.useState)(!1),{data:p,loading:g,error:f}=Object(h.d)(R.a),m=Object(L.a)(p),{cloudId:S}=Object(A.a)(),{createAnalyticsEvent:k}=Object(j.a)();return g?null:i.a.createElement(i.a.Fragment,null,f?i.a.createElement(I.a,{error:f}):null,i.a.createElement(l.a,{appearance:"primary",autoFocus:t,onClick:async()=>{const t=await(async()=>{const e=await y.a.getItem(T.b.GROWTH_EXPERIMENT_REQUEST_UPGRADE_SENT);if("true"===e){const e=O()(r.toString().toLowerCase());s.showWarningFlag({title:i.a.createElement(o.c,Object(n.a)({},v.a.requestUpgradeAlreadySentWarningTitle)),description:i.a.createElement(o.c,Object(n.a)(Object(n.a)({},v.a.requestUpgradeAlreadySentWarningDescription),{},{values:{edition:e}}))})}else E(!0);return e})(),{actionSubjectId:a,attributes:c,source:u}=e;c&&(c.currentEdition=m,c.targetEdition=r,c.requestUpgradeNotificationSent=t),k({type:"sendUIEvent",data:{action:"clicked",actionSubject:"link",actionSubjectId:a,source:u,attributes:c}}).fire()}},i.a.createElement(o.c,Object(n.a)({},v.a.requestUpgradeButton))),d?i.a.createElement(U.a,{canChangeEdition:!1,cloudId:S,currentEdition:m,flow:"request-upgrade",product:"confluence",targetEdition:r,touchpointId:e.source,onClose:()=>{u()(a)||E(!1)},onOpen:a,epMessageId:b.T}):null)});var x=a("r89S"),N=a("6HGh"),F=a("TSpG"),M=a("HKB3"),P=a("Uo/y"),C=a("LEcB");const D=Object(o.h)((function({canShowUpgradeButton:e,children:t,intl:a,isSiteAdmin:n,secondaryLink:r}){const{IN_CONTEXT_MODAL:i,END_USER_REQUEST:o}=F.a,{cohort:s}=Object(C.a)(i,M.b,M.a.NOT_ENROLLED),{cohort:u,fireExposureEvent:d}=Object(C.a)(o,M.b,M.a.NOT_ENROLLED),l=Object(P.a)(a&&a.locale),E=s===M.a.EXPERIMENT,p=u===M.a.EXPERIMENT;Object(c.useEffect)(()=>{!n&&E&&l&&d()},[n,E,l,d]);let b=!1,g=!1,f=!0,m=!0;return e&&(n?b=!0:E&&l&&(g=p),(b||g)&&(f=!r,m=!1)),t({showUpgradeTryNowButton:b,showUpgradeRequestButton:g,showLearnMore:f,learnMoreIsPrimaryCTA:m})}));a.d(t,"a",(function(){return B}));class _ extends c.Component{constructor(...e){super(...e),Object(r.a)(this,"generateCTAAnalyticsProps",e=>{const{grandfathered:t,isSiteAdmin:a,source:n}=this.props;return{actionSubjectId:e,source:n,attributes:{isGrandfathered:Boolean(t),isSiteAdmin:a}}}),Object(r.a)(this,"triggerLinkClickAnalytics",(e,t)=>{const{createAnalyticsEvent:a}=this.props;if(a){const{actionSubjectId:r,attributes:c,source:i}=this.generateCTAAnalyticsProps(e);a({type:"sendUIEvent",data:{action:"clicked",actionSubject:"link",actionSubjectId:r,source:i,attributes:Object(n.a)(Object(n.a)({},c),{},{linkMessage:t})}}).fire()}}),Object(r.a)(this,"handleSecondaryLinkClick",()=>{const e=this.props.secondaryLink;e&&(this.triggerLinkClickAnalytics(e.actionSubjectId,e.messageDescriptor.defaultMessage),u()(e.onClick)&&e.onClick())})}componentDidMount(){const{createAnalyticsEvent:e}=this.props;if(e){const{attributes:t,source:a}=this.generateCTAAnalyticsProps("");e({type:"sendScreenEvent",data:{name:"changeEditionGatewayScreen",attributes:Object(n.a)(Object(n.a)({},t),{},{source:a})}}).fire()}}renderButtons(){const{autoFocus:e,isSiteAdmin:t,canShowUpgradeButton:a,learnMoreLinkActionSubjectId:r,upgradeEditionActionSubjectId:s,upgradeRequestEditionActionSubjectId:u,secondaryLink:d,onUpFlowOpen:E,targetEdition:p}=this.props;return i.a.createElement(D,{isSiteAdmin:t,canShowUpgradeButton:a,secondaryLink:d},({showUpgradeTryNowButton:t,showUpgradeRequestButton:a,showLearnMore:b,learnMoreIsPrimaryCTA:g})=>i.a.createElement(c.Fragment,null,t?i.a.createElement(f.a,{autoFocus:e,analyticsProps:this.generateCTAAnalyticsProps(s),onUpFlowOpen:E,targetEdition:p}):a&&i.a.createElement(k,{autoFocus:e,analyticsProps:this.generateCTAAnalyticsProps(u),onUpFlowOpen:E,targetEdition:p}),b&&i.a.createElement(x.a,{analyticsProps:this.generateCTAAnalyticsProps(r),appearance:g?"primary":"link",onUpFlowOpen:E,targetEdition:p}),d&&i.a.createElement(l.a,{appearance:"link",href:d.href?d.href:void 0,id:"secondaryLink",spacing:"default",target:"_blank",onClick:this.handleSecondaryLinkClick},i.a.createElement(o.c,Object(n.a)({},d.messageDescriptor)))))}render(){const{appearanceType:e=b.P.DEFAULT,body:t,targetEdition:a,title:n}=this.props;return i.a.createElement(N.a,{appearanceType:e,edition:a,title:n,body:t,actions:i.a.createElement(p,null,this.renderButtons())})}}Object(r.a)(_,"defaultProps",{autoFocus:!0,canShowUpgradeButton:!0,learnMoreLinkActionSubjectId:"freeLearnMore",upgradeEditionActionSubjectId:"freeTryNow",upgradeRequestEditionActionSubjectId:"requestTrial"});const B=Object(g.a)(Object(d.a)()(_))},iqtt:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("ERkP"),r=a("a0gl"),c=a("LEcB"),i=a("TSpG"),o=a("HKB3"),s=a("Uo/y");const u=({isSiteAdmin:e,autoFireExposureEvent:t=!0})=>{const{locale:a}=Object(r.a)(),{cohort:u,fireExposureEvent:d}=Object(c.a)(i.a.ENHANCED_FEATURE_GATES,o.b,o.a.NOT_ENROLLED),l=Object(s.a)(a)&&e,E=l&&u===o.a.EXPERIMENT;Object(n.useEffect)(()=>{l&&t&&d()},[l,t,d]);return{shouldShowEnhancedFeatureGates:E,triggerEnhancedFeatureGatesExposureEvent:Object(n.useCallback)(()=>{l&&d()},[l,d])}}},mvtW:function(e,t,a){"use strict";let n;a.d(t,"a",(function(){return n})),function(e){e.FREE="FREE",e.PREMIUM="PREMIUM",e.STANDARD="STANDARD"}(n||(n={}))},qpwI:function(e,t,a){"use strict";a.d(t,"a",(function(){return S}));var n=a("Czhu"),r=a("ERkP"),c=a.n(r),i=a("KsTJ"),o=a("WEdt"),s=a("bg0W"),u=a("3IV/"),d=a("93GD"),l=a.n(d),E=a("54y6");const p=i.default.div`
  font-size: 14px;
  border-radius: 3px;

  box-sizing: border-box;
  max-width: 704px;

  ${e=>e.elevated&&i.css`
      padding: 24px;
      ${s.e200};
    `}

  a {
    cursor: pointer;
  }
`,b=i.default.div`
  padding-bottom: 12px;
  border-bottom: 1px solid ${u.N40};
  margin-bottom: 24px;
`,g=i.default.div`
  display: flex;

  > * {
    flex: none;
  }
`,f=i.default.div`
  width: 24px;
  margin-left: 12px;
`,m=i.default.div`
  flex: auto;

  * + & {
    margin-left: 24px;
  }

  ${f} + & {
    margin-left: 8px;
  }
`,O=i.default.div`
  ${Object(o.h500)()};
  margin-top: 0;
`,h=i.default.div`
  margin: 8px 0 12px;
`,j=i.default.div`
  margin-top: 24px;
  border-top: 1px solid ${u.N40};
  padding-top: 12px;
`;function S({elevated:e=!1,showPremiumIcon:t=!1,header:a,pictogram:i,title:o,body:s,upgradeEditionButton:d,footer:S,source:y,isGrandfathered:T}){const{createAnalyticsEvent:A,analyticsAttributes:I}=Object(E.a)({isGrandfathered:T});return Object(r.useEffect)(()=>{A({type:"sendScreenEvent",data:{name:"changeEditionGatewayScreen",attributes:Object(n.a)(Object(n.a)({},I),{},{source:y})}}).fire()},[I,A,y]),c.a.createElement(p,{"data-testid":y,elevated:e},a&&c.a.createElement(b,null,a),c.a.createElement(g,null,i,t&&c.a.createElement(f,null,c.a.createElement(l.a,{label:"",primaryColor:u.B400})),c.a.createElement(m,null,c.a.createElement(O,null,o),c.a.createElement(h,null,s),d)),S&&c.a.createElement(j,null,S))}},r89S:function(e,t,a){"use strict";var n=a("Czhu"),r=a("2q8g"),c=a.n(r),i=a("ERkP"),o=a.n(i),s=a("1U1M"),u=a("L21V"),d=a("RjSO"),l=a("zJ/j"),E=a("dIe6"),p=a("6z9Z"),b=a("3VMZ"),g=a("TSpG"),f=a("HKB3"),m=a("Uo/y");let O;!function(e){e.LEARN_MORE="learn-more",e.UPGRADE="upgrade",e.REQUEST_UPGRADE="request-upgrade",e.REQUEST_LEARN_MORE="request-learn-more"}(O||(O={}));var h=a("a0gl"),j=a("LEcB"),S=a("+352"),y=a("46jh"),T=a("mTU2"),A=a("mvtW"),I=a("t0Ff"),R=a("6n9r"),L=a("FdbS");a.d(t,"a",(function(){return w}));const w=Object(y.a)(Object(u.h)(({analyticsProps:e,appearance:t,isSiteAdmin:a,onUpFlowOpen:r,targetEdition:y=A.a.STANDARD,isGrandfathered:w=!1,intl:v})=>{const{cloudId:U}=Object(h.a)(),{createAnalyticsEvent:k}=Object(d.a)(),{data:x,loading:N,error:F}=Object(s.d)(I.a),M=Object(R.a)(x),[P,C]=Object(i.useState)(!1),D=Object(i.useContext)(p.a),{cohort:_,fireExposureEvent:B}=Object(j.a)(g.a.END_USER_REQUEST,f.b,f.a.NOT_ENROLLED),{cohort:G,fireExposureEvent:q}=Object(j.a)(g.a.IN_CONTEXT_MODAL,f.b,f.a.NOT_ENROLLED),z=G===f.a.EXPERIMENT&&(N||!a||M===A.a.FREE),$=z&&!a&&Object(m.a)(v&&v.locale),W=$&&_===f.a.EXPERIMENT,V=W?O.REQUEST_LEARN_MORE:O.LEARN_MORE,{source:X,actionSubjectId:H}=e;if(Object(i.useEffect)(()=>()=>{z||W||D.abort({name:b.a.UPSELL_EDITION,reason:"Canceled by user"}),$&&B()},[D,z,W,$,B]),N)return null;const J=()=>{if(k){const t=Object(n.a)(Object(n.a)({action:"clicked",actionSubject:"link",actionSubjectId:"freeLearnMore"},e),{},{attributes:Object(n.a)({currentEdition:M,isSiteAdmin:a,linkMessage:T.a.learnMoreButton.defaultMessage,targetEdition:y,upFlowVariateFlag:G},e.attributes)});k({type:"sendUIEvent",data:t}).fire()}W||D.start({name:b.a.UPSELL_EDITION,attributes:{currentEdition:M,linkClicked:H||"freeLearnMore",source:X,targetEdition:y,upFlowVariateFlag:G}})},Z={target:z?void 0:"_blank",href:z?"#":S.j,onClick:e=>{J(),q(),z&&(C(!0),e.preventDefault())}},K=o.a.createElement(u.c,Object(n.a)({},T.a.learnMoreButton));return!w||a||W?o.a.createElement(o.a.Fragment,null,F?o.a.createElement(E.a,{error:F}):null,"inline-link"===t?o.a.createElement("a",Object(n.a)({},Z),K):o.a.createElement(l.a,Object(n.a)({appearance:t,className:"primaryButton",id:"learnMoreLink",spacing:"default"},Z),K),z&&P&&o.a.createElement(L.a,{cloudId:U,canChangeEdition:a,currentEdition:M,targetEdition:y,flow:V,product:"confluence",touchpointId:X,onClose:()=>{c()(r)||C(!1)},onOpen:r,isExperienceTrackerEnabled:!W,epMessageId:S.T})):null}))}}]);
//# sourceMappingURL=28.7dm7tAAAFY.js.map