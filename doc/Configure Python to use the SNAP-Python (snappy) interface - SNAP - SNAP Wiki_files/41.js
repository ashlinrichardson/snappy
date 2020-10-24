(window.webpackJsonp=window.webpackJsonp||[]).push([[41,"@atlaskit-internal_MediaCardErrorBoundary~66e23772"],{"/ysP":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=".3s"},"4p2i":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));const a={width:156,height:125},r={width:435,height:125},i={width:300,height:300},o=e=>"image"===e?a:"square"===e?i:"horizontal"===e?r:a},"4ugo":function(e,t,n){"use strict";var a=n("ERkP"),r=n.n(a),i=n("bs5R"),o=n.n(i);const s=n("KsTJ").default.div`
  display: flex;
  color: #ff991f;
`;n.d(t,"a",(function(){return c}));class c extends a.Component{render(){const{size:e}=this.props;return r.a.createElement(s,null,r.a.createElement(o.a,{label:"Error",size:e}))}}c.defaultProps={size:"small"}},"69dh":function(e){e.exports=JSON.parse('{"a":"@atlaskit/media-card","b":"69.3.3"}')},"7+7H":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("Ag3T"),r=n("lEOu"),i=n("Jl7S");const o=({selected:e})=>`\n    ${r.b}\n\n    &::after {\n      content: '';\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      box-sizing: border-box;\n      pointer-events: none;\n      ${a.b}\n      ${e?Object(r.a)([i.a.Border]):""}\n    }\n  `},"94QT":function(e,t,n){"use strict";n.d(t,"m",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return p})),n.d(t,"o",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"k",(function(){return f})),n.d(t,"d",(function(){return b})),n.d(t,"a",(function(){return g})),n.d(t,"j",(function(){return y})),n.d(t,"h",(function(){return v})),n.d(t,"e",(function(){return w})),n.d(t,"n",(function(){return E})),n.d(t,"l",(function(){return x})),n.d(t,"g",(function(){return O}));var a=n("KsTJ"),r=n("jVp3"),i=n("Zvdo"),o=n("Ag3T"),s=n("w301"),c=n("3IV/");const l=a.default.div`
  ${Object(o.f)(14)} ${Object(r.d)()} background-color: ${Object(r.c)("#ffffff",.5)};
  position: absolute;
  top: 8px;
  right: 8px;
  border-radius: 20px;
  color: #798599; /* TODO FIL-3884: Align color with new design */
  display: flex;
  opacity: 0;

  &.selected {
    opacity: 1;
    color: white;
    background-color: #0052cc; /* TODO FIL-3884: Align with tickbox icons */
  }

  /* Enforce dimensions of "tick" icon */
  svg {
    position: absolute;
    width: 14px;
  }
`,d=a.default.div`
  ${Object(o.f)()} ${Object(o.a)()} ${o.b} display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: transparent;
  transition: 0.3s background ${i.a}, 0.3s border-color;
  padding: 16px;

  ${({hasError:e,noHover:t})=>e||t?"\n        cursor: default;\n\n        &:hover {\n          background: transparent;\n        }\n      ":""} &:not(.persistent):hover, &.active {
    .top-row {
      .title {
        color: ${c.B400};
      }
    }

    .bottom-row {
      .delete-btn {
        display: flex;
      }
    }
  }

  &.noHover:hover {
    .top-row {
      .title {
        color: ${c.N800};
      }
    }
  }

  .file-type-icon {
    display: block;
  }

  &:not(.persistent) {
    &:not(.error, .noHover):hover {
      background-color: ${Object(r.c)(c.N900,.06)};
    }

    &.selectable {
      &.selected {
        background-color: ${c.B200};

        &:hover {
          /* TODO FIL-3884 add new overlay with rgba(colors.N900, 0.16) */
        }

        .title,
        .bottom-row,
        .file-size,
        .more-btn {
          color: ${c.N0};
        }
      }
    }
  }

  &.persistent {
    &:not(.active) {
      overflow: hidden;
    }

    .top-row {
      .title {
        transition: opacity 0.3s;
        opacity: 0;
        color: white;
        visibility: hidden;
      }
    }

    .bottom-row {
      opacity: 0;
      transition: transform 0.2s, opacity 0.5s;
      /* This is the height of the overlay footer, needs to be present now since the parent uses flex and 100% doesn't look right anymore */
      transform: translateY(35px);

      .file-type-icon {
        display: none;
      }

      .file-size {
        color: white;
        display: none;
      }

      .more-btn {
        color: ${c.N0};
        display: none;

        &:hover {
          background-color: rgba(9, 30, 66, 0.2);
        }
      }

      .delete-btn {
        display: none;

        &:hover {
          background-color: rgba(9, 30, 66, 0.2);
        }
      }
    }

    &:hover,
    &.active {
      background-color: ${Object(r.c)(c.N900,.5)};

      .title {
        opacity: 1;
        visibility: visible;
      }

      .file-type-icon,
      .file-size {
        display: block;
      }

      .more-btn {
        ${r.b} color: ${c.N0};
      }

      .delete-btn {
        display: flex;
      }

      .bottom-row {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Selectable */
    &.selectable {
      &:hover {
        .tickbox {
          opacity: 1;
        }
      }

      &.selected {
        .tickbox {
          background-color: ${c.B200} !important;
          border-color: ${c.B200} !important;
          color: white;
        }
      }
    }
  }

  &.error {
    .top-row {
      overflow: visible;
    }
    &:hover,
    &.active {
      .top-row {
        .title {
          color: ${c.N800};
        }
      }
    }
  }
`,u=a.default.div`
  height: 24px;
  display: flex;
  align-items: center;
`,p=a.default.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  vertical-align: middle;
`,m=a.default.div``,h=a.default.div`
  display: flex;
  align-items: center;
  height: 16px;
`,f=a.default.div``,b=a.default.div`
  ${r.a} display: inline-block;
  vertical-align: middle;
  font-weight: bold;
  color: ${c.N70};
  font-size: 12px;
  line-height: 15px;
  overflow: hidden;
  max-width: ~'calc(100% - 24px)';
  text-overflow: ellipsis;
  white-space: nowrap;
`,g=Object(a.default)(b)`
  font-weight: normal;
`,y=a.default.div`
  user-select: none;
  ${r.a} box-sizing: border-box;
  margin-left: 5px;
  font-weight: bold;
  color: ${c.B400};
  font-size: 12px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${c.B300};
  }
`,v=a.default.a`
  user-select: none;
  cursor: pointer;
`,w=a.default.div`
  display: flex;
`,E=a.default.div`
  box-sizing: border-box;
  word-wrap: break-word;
  color: ${Object(s.a)({light:c.N800,dark:c.DN900})};
  font-size: 12px;
  line-height: 18px;
`,x=a.default.div`
  ${Object(o.d)("100px")} font-size: 12px;
  color: #5e6c84;
`,O=a.default.div`
  display: flex;
  align-items: center;
`},A8hX:function(e,t,n){"use strict";var a=n("Czhu"),r=n("ERkP"),i=n.n(r),o=n("bjnC"),s=n("u6In");class c extends r.Component{constructor(){super(...arguments),this.fireAnalytics=e=>{const{createAnalyticsEvent:t,channel:n,data:r}=this.props;t({action:"UnhandledError",eventType:"ui",attributes:Object(a.a)(Object(a.a)({browserInfo:window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:"unknown"},r),e)}).fire(n)}}componentDidCatch(e,t){const n={error:e,info:t};this.fireAnalytics(n)}render(){const{data:e,children:t}=this.props;return i.a.createElement(o.a,{data:e},t)}}const l=Object(s.a)()(c);t.a=l},"Am/7":function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return u}));var a=n("Czhu"),r=n("4CAG"),i=n.n(r);const o=e=>e.indexOf("media-blob-url=true")>-1,s=(e,t)=>{const n=e.get(t);return"string"!=typeof n||isNaN(parseInt(n))?void 0:parseInt(n)},c=(e,t)=>{const n=e.get(t);if(n)return decodeURIComponent(n)},l=e=>{const t=new URL(e).hash.replace("#",""),n=new i.a(t),a=n.get("id"),r=n.get("contextId");if(a&&r)return{id:a,contextId:r,collection:c(n,"collection"),alt:c(n,"alt"),height:s(n,"height"),width:s(n,"width"),size:s(n,"size"),name:c(n,"name"),mimeType:c(n,"mimeType")}},d=e=>Object.keys(e).filter(t=>void 0!==e[t]&&null!==e[t]).map(t=>{const n=e[t];if(null!=n)return`${encodeURIComponent(t)}=${encodeURIComponent(n.toString())}`}).join("&"),u=(e,t)=>{if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))return e;const n={"media-blob-url":"true"},r=Object(a.a)(Object(a.a)({},n),t);return`${e}#${d(r)}`}},Jl7S:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e[e.Border=0]="Border",e[e.BoxShadow=1]="BoxShadow",e[e.Background=2]="Background",e[e.Blanket=3]="Blanket",e[e.ResetBorder=4]="ResetBorder",e[e.ResetOpacity=5]="ResetOpacity"}(a||(a={}))},NpkN:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var a=n("KsTJ"),r=n("3IV/"),i=n("Ag3T"),o=n("z+31");const s=Object(a.default)(o.a)`
  display: flex;
  position: relative;
  line-height: 0;
`;var c;!function(e){e.default="default",e.filled="filled"}(c||(c={}));const l=a.default.div`
  ${({variant:e})=>`\n    ${i.c} ${i.b} ${Object(i.f)(26)} color: ${r.N500};\n\n    &:hover {\n      cursor: pointer;\n    }\n\n    ${(e=>"filled"===e?`\n    background: ${r.N0};\n    margin-right: 8px;\n    opacity: 0.8;\n\n    &:last-child {\n      margin-right: 0;\n    }\n\n    &:hover {\n      opacity: 0.6;\n    }\n  `:"\n    &:hover {\n      background-color: rgba(9, 30, 66, 0.06);\n    }\n  ")(e)}\n  `}
`},P3V9:function(e,t,n){"use strict";const a=e=>e.replace(/_/g,"-"),r=e=>new Date(e.year,e.month-1,e.day),i=new Date(NaN),o={year:1993,month:2,day:18},s=r(o),c=/(\d+)[^\d]+(\d+)[^\d]+(\d+)\.?/,l=/(\d+)[^\d]*(\d+)?[^\d]*(\d+)?\.?/,d=e=>e.replace(/\u200E/g,""),u=e=>e.splice(1,4).map(e=>parseInt(e,10)),p=e=>{const t=a(e),n=Intl.DateTimeFormat(t).format(s),p=d(n).match(c);if(!p)throw new Error("Unable to create DateParser");const m=u(p),h=m.indexOf(o.year),f=m.indexOf(o.month),b=m.indexOf(o.day);return e=>{const t=d(e).match(l);if(!t)return i;const n=u(t),a=(e=>{const t=(e=>({year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate()}))(new Date),{year:n,month:a,day:r}=e,i=n<100?2e3+n:n;return{year:isNaN(i)?t.year:i,month:isNaN(a)||0===a?t.month:a,day:isNaN(r)||0===r?t.day:r}})({year:n[h],month:n[f],day:n[b]});return(e=>{const{year:t,month:n,day:a}=e,r=((e,t)=>2===t&&(e=>e%4==0&&e%100!=0||e%400==0)(e)?29:[31,28,31,30,31,30,31,31,30,31,30,31][t-1])(t,n);return 1<=n&&n<=12&&1<=a&&a<=r})(a)?r(a):i}};var m=n("Czhu");const h=e=>e.reduce((e,t)=>Object(m.a)(Object(m.a)({},e),{},{[t.type]:t.value}),{});n.d(t,"a",(function(){return f}));const f=(e,t)=>{const n=a(e);return{getDaysShort:()=>{const e=Intl.DateTimeFormat(n,{weekday:"short"});return[1,2,3,4,5,6,7].map(t=>e.format(new Date(2e3,9,t,12)).replace(/[\s\u200E]/g,"").substring(0,3))},getMonthsLong:()=>{const e=Intl.DateTimeFormat(n,{month:"long"});return[0,1,2,3,4,5,6,7,8,9,10,11].map(t=>e.format(new Date(2020,t,1)))},formatDate:e=>Intl.DateTimeFormat(n).format(e),formatTime:e=>Intl.DateTimeFormat(n,{hour:"numeric",minute:"numeric"}).format(e),parseDate:e=>p(n)(e),formatToParts:(e=new Date)=>{const a=new Intl.DateTimeFormat(n,t),r=new Date(e);r.setFullYear(2020);const i=h(a.formatToParts(r)),o=h(a.formatToParts(e));return i.year&&(i.year=o.year),"00"===i.hour&&12===r.getHours()&&(i.hour="12"),i}}}},Rz8l:function(e,t,n){"use strict";var a=n("ERkP"),r=n.n(a),i=n("BMbf"),o=n("lRcl"),s=n("KsTJ");const c=i.i.modal()+10,l=s.default.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${c};
`;l.displayName="Blanket";const d=s.default.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;d.displayName="SpinnerWrapper";const u="none",p=!1;t.a=({blankedColor:e,invertSpinnerColor:t})=>r.a.createElement(l,{style:{backgroundColor:e||u}},r.a.createElement(d,null,r.a.createElement(o.a,{size:"large",appearance:t||p?"invert":"inherit"})))},VEAB:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return m})),n.d(t,"i",(function(){return h})),n.d(t,"g",(function(){return f}));var a=n("Czhu"),r=n("69dh"),i=n("z3D9"),o=n("mU6V");function s(e="mediaCard"){return{packageVersion:r.b,packageName:r.a,componentName:e,component:e}}const c=(e,t)=>({fileSource:"mediaCard",fileMediatype:e&&e.mediaType,fileMimetype:e&&e.mimeType,fileId:e&&e.id,fileSize:e&&e.size,fileStatus:t});function l(e,t,n){return{fileAttributes:c(e,t&&t.status),featureFlags:n}}function d(e,t){if(t){t(e).fire(o.ANALYTICS_MEDIA_CHANNEL)}}const u=e=>Object(i.a)(o.ANALYTICS_MEDIA_CHANNEL)(e),p=({cardStatus:e,metadata:t,fileState:n,dataURI:a,error:r})=>{if(!a&&["error","failed-processing"].includes(e)){const e="failed";if(r){return{action:e,failReason:"media-client-error",error:r instanceof Error?r.message:r}}const a=n&&"message"in n&&n.message;return a?{action:e,failReason:"file-status-error",error:a}:t.name?{action:e,failReason:"file-status-error",error:"unknown error"}:{action:e,failReason:"file-status-error",error:"Does not have minimal metadata (filename and filesize) OR metadata/media-type is undefined"}}if(!a&&"complete"===e)return{action:"succeeded"}},m=(e,t)=>{const n={eventType:"ui",action:"copied",actionSubject:"file",actionSubjectId:"file"===e.mediaItemType?e.id:e.mediaItemType};return t&&(n.attributes={featureFlags:t}),n},h=(e,t)=>{const n={eventType:"operational",action:"commenced",actionSubject:"mediaCardRender",actionSubjectId:e};return t&&(n.attributes={featureFlags:t}),n},f=({action:e,actionSubjectId:t,fileAttributes:n,failReason:r,error:i,featureFlags:o})=>{const s={eventType:"operational",action:e,actionSubject:"mediaCardRender",actionSubjectId:t};return n&&(s.attributes=Object(a.a)(Object(a.a)({},s.attributes),{},{fileAttributes:n})),o&&(s.attributes=Object(a.a)(Object(a.a)({},s.attributes),{},{featureFlags:o})),r&&(s.attributes=Object(a.a)(Object(a.a)({},s.attributes),{},{failReason:r})),i&&(s.attributes=Object(a.a)(Object(a.a)({},s.attributes),{},{error:i})),s}},Zvdo:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a="cubic-bezier(0.215, 0.61, 0.355, 1)"},amcu:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return g}));var a=n("ERkP"),r=n.n(a),i=n("VEAB"),o=n("u6In"),s=n("94QT"),c=n("L21V"),l=n("QxUR"),d=n("m4VZ"),u=n("hGBm"),p=n.n(u);const m=Object(o.a)({onClick:Object(i.b)({eventType:"ui",action:"clicked",actionSubject:"button",actionSubjectId:"mediaCardRetry"})}),h=m(e=>r.a.createElement(s.j,Object.assign({"data-testid":"media-card-retry-button"},e))),f=({onClick:e})=>r.a.createElement(h,{onClick:Object(d.b)(e)},r.a.createElement(c.c,Object.assign({},l.a.retry))),b=m(e=>r.a.createElement(s.h,Object.assign({"data-testid":"media-card-retry-button"},e),r.a.createElement(p.a,{label:"Retry",size:"small"}))),g=({onClick:e})=>r.a.createElement(b,{onClick:Object(d.b)(e)},r.a.createElement(c.c,Object.assign({},l.a.retry)))},asyg:function(e,t,n){"use strict";var a=n("ERkP"),r=n.n(a),i=n("7pVy"),o=n("nVfX"),s=n("1dWH"),c=n.n(s),l=n("O94r"),d=n.n(l),u=n("STeY"),p=n.n(u),m=n("CRB6"),h=n.n(m),f=n("5DpX"),b=n.n(f),g=n("NhJz"),y=n.n(g),v=n("c1da"),w=n.n(v),E=n("2TTf"),x=n.n(E),O=n("xLy2"),k=n.n(O),C=n("KsTJ"),j=n("3IV/");const I={image:j.Y200,audio:j.P200,video:"#ff7143",doc:j.B300,unknown:"#3dc7dc",archive:""},T=C.default.div`
  display: inline-flex;
  color: ${({type:e})=>I[e]||I.unknown};
`,N={image:h.a,audio:b.a,video:w.a,doc:x.a,unknown:k.a,archive:y.a};class $ extends r.a.Component{render(){const{type:e,size:t="small",className:n}=this.props,a=e&&N[e]||N.unknown;return r.a.createElement(T,{type:e||"unknown"},r.a.createElement(a,{label:"media-type",size:t,className:n}))}}var A=n("Ag3T");const S=C.default.div`
  float: left;
  margin-right: 6px;
  position: relative;
  top: 1px;
  img {
    ${Object(A.f)("12px !important")};
  }
`;class z extends a.Component{render(){const{mediaType:e,iconUrl:t,style:n}=this.props,a=e||"unknown",i=r.a.createElement($,{type:e,size:"small",className:"file-type-icon"}),o=t?r.a.createElement("img",{src:t,className:"custom-icon",alt:a}):i;return r.a.createElement(S,{style:n,className:"file-type-icon"},o)}}var B=n("4ugo"),R=n("lT4H"),D=n("amcu"),F=n("94QT");class M extends a.Component{constructor(e){super(e),this.onMenuToggle=e=>{this.setState({isMenuExpanded:e.isOpen})},this.state={isMenuExpanded:!1}}get wrapperClassNames(){const{error:e,noHover:t,selectable:n,selected:a,mediaType:r,persistent:i}=this.props,{isMenuExpanded:o}=this.state;return e?d()("overlay",{error:e,active:o}):d()("overlay",r,{active:o,selectable:n,selected:a,persistent:!i,noHover:t})}render(){const{cardStatus:e,error:t,noHover:n,mediaName:a,persistent:i,selected:s,actions:c}=this.props,l=((e,t,n,a)=>n||!t||"uploading"===e&&!a?"":t)(e,a,t,s),d=i?void 0:"white";return r.a.createElement(F.i,{hasError:!!t,noHover:n,className:this.wrapperClassNames},r.a.createElement(F.o,{className:"top-row"},this.errorLine(),r.a.createElement(F.n,{className:"title"},l?r.a.createElement(o.a,{testId:"media-card-file-name",text:l,lines:2}):null),this.tickBox()),r.a.createElement(F.b,{className:"bottom-row"},r.a.createElement(F.f,null,this.bottomLeftColumn()),r.a.createElement(F.k,null,c?r.a.createElement(R.a,{actions:c,onToggle:this.onMenuToggle,triggerColor:d}):null)))}errorLine(){const{error:e,alt:t}=this.props;return e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(F.c,null,r.a.createElement(F.d,null,e)),t&&r.a.createElement(F.c,null,r.a.createElement(F.a,null,t)))}tickBox(){const{selected:e,selectable:t}=this.props,n=r.a.createElement(p.a,{label:"tick"}),a=d()("tickbox",{selected:e});return t&&r.a.createElement(F.m,{className:a}," ",n," ")}bottomLeftColumn(){const{error:e,onRetry:t}=this.props;if(e)return t?r.a.createElement(F.e,null,r.a.createElement(B.a,null),r.a.createElement(D.b,{onClick:t})):r.a.createElement(B.a,null);{const{mediaType:e,subtitle:t,icon:n}=this.props,a=d()("metadata"),i=e||n?r.a.createElement(z,{mediaType:e,iconUrl:n}):null,o=t?r.a.createElement(F.l,{className:"file-size"},t):null;return r.a.createElement("div",null,r.a.createElement(F.g,{className:a},i,o))}}removeBtnClick(e){return t=>{t.preventDefault(),t.stopPropagation(),e()}}}M.defaultProps={actions:[],mediaName:""};var P=n("w301"),L=n("z+31"),U=n("7+7H");const V=Object(C.default)(L.a)`
  ${e=>{const{disableOverlay:t}=e;return t?"":L.b}}
  ${A.b}
  ${e=>{const{mediaType:t}=e;return`background: ${"image"===t?"transparent":Object(P.a)({light:j.N20,dark:j.DN50})(e)};`}}

  line-height: normal;
  position: relative;

  ${U.a}

  ${Object(A.f)()} .wrapper {
    ${A.b};
    display: block;
    height: inherit;
    position: relative;

    .img-wrapper {
      position: relative;
      width: inherit;
      height: inherit;
      overflow: hidden;
      display: block;
      ${A.b}
    }
  }
`,H=C.default.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  /* we want to override default icon size and hover state */
  &:hover > * {
    width: 64px;
    height: 64px;
  }

  > * {
    background: rgba(23, 43, 77, 0.7);
    width: 56px;
    height: 56px;
    border-radius: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.1s;
  }
`,J=C.default.div`
  position: absolute;
  height: 100%;
  width: 100%;
`,Y=C.default.div`
  ${Object(A.a)()}
  ${Object(A.f)()}
  border-radius: inherit;
  background-color: rgba(9, 30, 66, 0.5);
`,_=C.default.div`
  ${Object(A.a)()} width: 100%;
  padding: 8px;
  color: ${j.N0};
  font-size: 12px;
  line-height: 18px;
  word-wrap: break-word;
`,K=C.default.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 8px;
  color: ${j.N0};
`,G=C.default.div`
  flex-grow: 1;

  /*
    force the height to always be 20px (the height of the cancel icon),
    so that the height of the progress bar doesn't jump when cards with
    and without a cancel icon are rendered side-by-side.
  */
  height: ${26}px;

  /*
    vertically center the progress bar within the 20px, keeping the progress bar full width
  */
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Z=C.default.div`
  margin-left: 4px;
  /*
    button must appear above overlay
   */
  z-index: 2;
`;var Q=n("lb6e"),X=n("2uSk");const q=(e,t,n,a,r)=>!("doc"===a||!r&&"file"===t)&&(!!n&&("external-image"===t||r&&Object(X.d)(r)||"complete"===e)),W=C.default.div`
  ${A.b} z-index: 30;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.3);

  .progressBar {
    width: 0%;
    height: 3px;
    transition: width 0.25s ease-in;
    background-color: white;
  }
`;class ee extends a.Component{render(){if("number"!=typeof this.props.progress)return null;const e={width:100*Math.min(1,Math.max(0,this.props.progress))+"%"};return r.a.createElement(W,null,r.a.createElement("div",{className:"progressBar",style:e}))}}var te=n("u6In"),ne=n("VEAB");n.d(t,"b",(function(){return ae})),n.d(t,"a",(function(){return ie}));const ae="media-file-card-view";class re extends a.Component{constructor(){super(...arguments),this.wasThumbnailDisplayed=!1,this.renderCardContents=()=>{const{status:e,mediaType:t}=this.props;return"error"===e?this.renderErrorContents():"failed-processing"===e?this.renderFailedContents():"video"===t||this.isFileCardImageReadyForDisplay?this.renderSuccessCardContents():this.renderLoadingContents()},this.renderLoadingContents=()=>r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"img-wrapper"},r.a.createElement(Q.a,null))),this.renderErrorContents=()=>{const{status:e,error:t,alt:n,mediaName:a,mediaType:i,onRetry:o,actions:s,fileSize:c}=this.props;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"}),r.a.createElement(M,{cardStatus:e,error:t,persistent:!0,mediaName:a,mediaType:i,alt:n,onRetry:o,subtitle:c,actions:s}))},this.renderFailedContents=()=>{const{status:e,mediaName:t,mediaType:n,actions:a,fileSize:i}=this.props;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"}),r.a.createElement(M,{cardStatus:e,noHover:!0,persistent:!0,mediaName:t,mediaType:n,subtitle:i,actions:a}))},this.renderUploadingCardOverlay=()=>{const{status:e,mediaName:t,mediaType:n,dataURI:a,selectable:i,selected:o}=this.props,s="doc"===n||!a;return r.a.createElement(M,{cardStatus:e,persistent:s,mediaName:t,selectable:i,selected:o})},this.renderPlayButton=()=>{const{status:e,mediaItemType:t,mediaType:n,mimeType:a,selectable:i,dataURI:o}=this.props;return"video"!==n||i&&!q(e,t,o,n,a)?null:r.a.createElement(H,null,r.a.createElement(c.a,{label:"play",size:"large"}))},this.onImageLoad=()=>{this.fireLoadingStatusAnalyticsEvent("succeeded")},this.onImageError=()=>{this.fireLoadingStatusAnalyticsEvent("failed")},this.renderMediaImage=()=>{const{status:e,mediaItemType:t,dataURI:n,mediaType:a,mimeType:o,previewOrientation:s,onDisplayImage:c,alt:l}=this.props;return q(e,t,n,a,o)?(!this.wasThumbnailDisplayed&&c&&"image"===a&&(c(),this.wasThumbnailDisplayed=!0),r.a.createElement(i.a,{dataURI:n,alt:l,crop:this.isCropped,stretch:this.isStretched,previewOrientation:s,onImageLoad:this.onImageLoad,onImageError:this.onImageError})):null},this.shouldFireLoadingStatusAnalyticsEvent=e=>!this.lastAnalyticsAction||this.lastAnalyticsAction!==e,this.fireLoadingStatusAnalyticsEvent=e=>{const{createAnalyticsEvent:t}=this.props;this.shouldFireLoadingStatusAnalyticsEvent(e)&&(this.lastAnalyticsAction=e,"failed"===e?Object(ne.a)(Object(ne.g)({action:e,error:"unknown error",failReason:"file-uri-error"}),t):Object(ne.a)(Object(ne.g)({action:e}),t))},this.renderProgressBar=()=>{const{mediaName:e,progress:t,actions:n,status:a}=this.props;return"uploading"!==a?null:r.a.createElement(J,null,r.a.createElement(Y,null,r.a.createElement(_,null,r.a.createElement(o.a,{testId:"media-card-file-name",text:e||"",lines:2})),r.a.createElement(K,null,r.a.createElement(G,null,r.a.createElement(ee,{progress:t})),r.a.createElement(Z,null,n?r.a.createElement(R.a,{actions:n,triggerColor:"white"}):null))))},this.renderSuccessCardContents=()=>{const{disableOverlay:e,selectable:t,status:n}=this.props;let a=null;return e||("uploading"===n?t&&(a=this.renderUploadingCardOverlay()):a=this.renderSuccessCardOverlay()),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"img-wrapper"},this.renderMediaImage(),this.renderProgressBar(),this.renderPlayButton()),a)},this.renderSuccessCardOverlay=()=>{const{status:e,mediaName:t,mediaType:n,fileSize:a,dataURI:i,selectable:o,selected:s,actions:c}=this.props,l="doc"===n||!i;return r.a.createElement(M,{cardStatus:e,persistent:l,mediaName:t,mediaType:n,selectable:o,selected:s,subtitle:a,actions:c})}}render(){const{disableOverlay:e,selectable:t,selected:n,mediaType:a,progress:i,status:o,mediaName:s}=this.props;return r.a.createElement(V,{"data-testid":"media-file-card-view","data-test-media-name":s,"data-test-status":o,"data-test-progress":i,"data-test-selected":!!n||void 0,disableOverlay:e,selectable:t,selected:n,mediaType:a,className:ae},this.renderCardContents())}get isFileCardImageReadyForDisplay(){const{dataURI:e,status:t}=this.props;return!!e||!["loading","processing"].includes(t)}get isCropped(){const{resizeMode:e}=this.props;return"crop"===e}get isStretched(){const{resizeMode:e}=this.props;return"stretchy-fit"===e}}re.defaultProps={resizeMode:"crop",disableOverlay:!1};const ie=Object(te.a)()(re)},jVp3:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return c}));var a=n("BMbf"),r=n("/ysP");const i="\n  display: flex;\n  justify-content: center;\n",o="\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n",s=(Object(a.c)(),Object(a.c)(),(e="all")=>`\n  transition: ${e} ${r.a};\n`),c=(e,t)=>`rgba(${(e=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?`${parseInt(t[1],16)},${parseInt(t[2],16)},${parseInt(t[3],16)}`:null})(e)}, ${t})`},lEOu:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var a=n("qPpp"),r=n("Jl7S");const i=e=>e.map(e=>s(e)).concat(o).join("\n"),o="\n  ::selection,*::selection {\n    background-color: transparent;\n  }\n  ::-moz-selection,*::-moz-selection {\n    background-color: transparent;\n  }\n",s=e=>{switch(e){case r.a.Border:return`border: ${a.C};`;case r.a.BoxShadow:return`\n        box-shadow: ${a.G};\n        border-color: transparent;`;case r.a.Background:return`background-color: ${a.z};`;case r.a.Blanket:return`\n        position: relative;\n\n        // Fixes ED-9263, where emoji or inline card in panel makes selection go outside the panel\n        // in Safari. Looks like it's caused by user-select: all in the emoji element\n        -webkit-user-select: text;\n\n        ::after {\n          position: absolute;\n          content: '';\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          opacity: ${a.B};\n          pointer-events: none;\n          background-color: ${a.A}\n        }`;case r.a.ResetBorder:return" border: none;";case r.a.ResetOpacity:return`opacity: ${a.B};`;default:return""}}},lT4H:function(e,t,n){"use strict";var a=n("ERkP"),r=n.n(a),i=n("NpkN");class o extends a.Component{constructor(){super(...arguments),this.onMouseDown=e=>{e.preventDefault()}}render(){const{icon:e,triggerColor:t,onClick:n,variant:a}=this.props;return r.a.createElement(i.a,{"data-testid":"media-card-primary-action",onClick:n,onMouseDown:this.onMouseDown,style:{color:t},variant:a},e)}}var s=n("lyMi"),c=n.n(s),l=n("Fqgi"),d=n("seTC"),u=n("VOzU"),p=n("u6In"),m=n("VEAB");const h=Object(p.a)({onClick:Object(m.b)({eventType:"ui",action:"clicked",actionSubject:"button",actionSubjectId:"mediaCardDropDownMenu"})})(e=>r.a.createElement(i.a,Object.assign({},e))),f=e=>r.a.createElement(l.a,Object.assign({"data-testid":"media-card-actions-menu-item"},e)),b=(e,t)=>{const{label:n,handler:a}=e,i=Object(p.a)({onClick:Object(m.b)({eventType:"ui",action:"clicked",actionSubject:"button",actionSubjectId:"mediaCardDropDownMenuItem",attributes:{label:n}})})(f);return r.a.createElement(i,{key:t,onClick:a},n)};class g extends a.Component{render(){const{actions:e,triggerColor:t,onOpenChange:n,triggerVariant:a}=this.props;return e.length>0?r.a.createElement(d.a,{"data-testid":"media-card-actions-menu",onOpenChange:n,trigger:r.a.createElement(h,{variant:a,style:{color:t}},r.a.createElement(c.a,{label:"more"}))},r.a.createElement(u.a,null,e.map(b))):null}}var y=n("m4VZ");n.d(t,"a",(function(){return w}));const v=e=>r.a.createElement(o,Object.assign({},e));class w extends a.Component{render(){const{actions:e}=this.props;if(!e.length)return null;const t=e.find(E),n=e.filter(x(t));return r.a.createElement(y.a,null,r.a.createElement(i.c,null,t?this.renderActionIconButton(t,!0):null,this.renderOtherActionButtons(n)))}renderActionIconButton(e,t){const{triggerColor:n,variant:a}=this.props,{icon:i,handler:o,label:s}=e,c=Object(p.a)({onClick:Object(m.b)({eventType:"ui",action:"clicked",actionSubject:"button",actionSubjectId:t?"mediaCardPrimaryActionButton":"mediaCardSecondaryActionButton",attributes:{label:s}})})(v);return r.a.createElement(c,{icon:i,triggerColor:n,onClick:()=>o(),variant:a})}renderOtherActionButtons(e){if(0===e.length)return null;{const{triggerColor:t,onToggle:n,variant:a}=this.props,i=e.find(E),o=e.filter(x(i));return i&&0===o.length?this.renderActionIconButton(i,!1):r.a.createElement(g,{actions:e,triggerColor:t,onOpenChange:n,triggerVariant:a})}}}function E(e){return!!e.icon}function x(e){return t=>t!==e}},m4VZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var a=n("ERkP"),r=n.n(a);function i({children:e}){return r.a.createElement("span",{onClick:e=>{e.stopPropagation(),e.preventDefault()}},e)}const o=e=>t=>{t.stopPropagation(),t.preventDefault(),e()}},mU6V:function(e,t,n){"use strict";n.r(t),n.d(t,"ANALYTICS_MEDIA_CHANNEL",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n("ERkP"),r=n.n(a),i=n("A8hX");const o="media";class s extends r.a.Component{render(){const{data:e={},children:t}=this.props;return r.a.createElement(i.a,{channel:o,data:e},t)}}s.displayName="MediaCardAnalyticsErrorBoundary"},seTC:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("ERkP"),r=n.n(a),i=n("745k");class o extends a.Component{constructor(){super(...arguments),this.state={isOpen:this.props.defaultOpen,items:[...this.props.items]},this.findActivatedGroup=e=>this.state.items.filter(t=>t.items.indexOf(e)>-1)[0],this.handleItemActivation=e=>{const t=e.item,n=this.findActivatedGroup(t),a=[...this.state.items];switch(t.type){case"checkbox":t.isChecked=!t.isChecked,this.props.onItemActivated({item:t}),this.setState({items:a});break;case"radio":n.items.forEach(e=>{e.isChecked=e===t}),this.props.onItemActivated({item:t}),this.setState({items:a});break;case"link":default:this.props.onItemActivated({item:t}),this.close()}},this.handleOpenChange=(e,...t)=>{this.state.isOpen!==e.isOpen&&(this.setState({isOpen:e.isOpen}),this.props.onOpenChange(e,...t))},this.close=(...e)=>{!1!==this.state.isOpen&&(this.setState({isOpen:!1}),this.props.onOpenChange({isOpen:!1},...e))}}UNSAFE_componentWillReceiveProps(e){e.items!==this.state.items&&this.setState({items:[...e.items]}),e.isOpen!==this.props.isOpen&&this.setState({isOpen:e.isOpen})}render(){const{isOpen:e}=this.state,{appearance:t,boundariesElement:n,children:a,isLoading:o,items:s,position:c,isMenuFixed:l,shouldAllowMultilineItems:d,shouldFitContainer:u,shouldFlip:p,testId:m,trigger:h,triggerButtonProps:f,triggerType:b,onPositioned:g}=this.props;return r.a.createElement(i.a,{appearance:t,boundariesElement:n,isOpen:e,isLoading:o,items:s,onItemActivated:this.handleItemActivation,onOpenChange:this.handleOpenChange,position:c,isMenuFixed:l,shouldAllowMultilineItems:d,shouldFitContainer:u,shouldFlip:p,trigger:h,triggerButtonProps:f,triggerType:b,onPositioned:g,testId:m},a)}}o.defaultProps={appearance:"default",boundariesElement:"viewport",defaultOpen:!1,isLoading:!1,isOpen:!1,items:[],onItemActivated:()=>{},onOpenChange:()=>{},position:"bottom left",isMenuFixed:!1,shouldAllowMultilineItems:!1,shouldFitContainer:!1,shouldFlip:!0,triggerType:"default",onPositioned:()=>{}}},"z+31":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var a=n("KsTJ"),r=n("BMbf"),i=n("Ag3T");const o=a.default.div`
  box-sizing: border-box;
  font-family: ${Object(r.e)()};

  * {
    box-sizing: border-box;
  }
`,s="\n  box-shadow: 0 1px 1px rgba(9, 30, 66, 0.2), 0 0 1px 0 rgba(9, 30, 66, 0.24);\n";a.default.div`
  ${i.e};
`}}]);
//# sourceMappingURL=41.5HPokTHvh9.js.map