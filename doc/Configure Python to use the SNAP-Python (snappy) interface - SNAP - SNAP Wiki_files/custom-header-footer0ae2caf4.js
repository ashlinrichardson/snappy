(window.webpackJsonp=window.webpackJsonp||[]).push([["custom-header-footer~0ae2caf4"],{"/4Yv":function(e,t,a){"use strict";a.r(t);var n=a("ERkP"),r=a.n(n),s=a("gQ5V"),o=a("+mzV"),c=a("FdGg"),l=a("X2PC"),u=a("L21V"),i=a("OOEx"),d=a.n(i),m=a("3IV/"),p=a("aoYE"),f=a("AqZj"),h=a("7OEs"),y=a("pxb7"),g=a("KsTJ");const E=g.default.div`
  margin: 0;
  padding: 15px 20px;
`,b=g.default.div`
  & > span {
    vertical-align: middle;
  }
`,w=g.default.div`
  text-align: center;
  display: block;
`,v=g.default.div`
  margin-top: 50px;
  text-align: center;
  display: block;
`,j=Object(u.g)({unsupportedMacrosTitle:{id:"custom-header-footer.unsupported.macros.title",defaultMessage:"Unsupported macros",description:"Space cutomized header and footer is imcompitable with unsupported macros"}}),M=Object(u.h)(({spaUnfriendlyMacros:e=[],type:t,js:a,css:s,html:o,intl:c})=>{const l=t===y.a.HEADER?w:v,i=r.a.createRef(),g=r.a.createRef();return Object(n.useEffect)(()=>{g.current&&i.current&&Object(p.a)().then(()=>{g.current&&Object(f.a)(g.current,a).then(()=>{i.current&&Object(h.a)(i.current)})})}),r.a.createElement(E,null,e.length?r.a.createElement(b,null,r.a.createElement(d.a,{primaryColor:m.Y500,label:c.formatMessage(j.unsupportedMacrosTitle)}),r.a.createElement(u.c,{id:"custom-header-footer.unsupported.macros.list",defaultMessage:"The following macros are not currently supported in the {type}:",description:"The warning message when a custom space header or footer contain incompatible macros. type variable equals to 'header' or 'footer'",values:{type:t}}),r.a.createElement("ul",null,e.map(e=>e&&e.name&&r.a.createElement("li",{key:e.name},e.name)))):null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:s}}),r.a.createElement(l,{"data-test-id":"custom-settings-"+t,dangerouslySetInnerHTML:{__html:o},innerRef:i}),r.a.createElement("div",{ref:g}))});var O=a("H5qd");const A=a.n(O).a`query CustomHeaderAndFooterQuery($spaceKey:String){space(key:$spaceKey){id settings{customHeaderAndFooter{header{html js css spaUnfriendlyMacros{name}}footer{html js css spaUnfriendlyMacros{name}}}}}}`;function H({type:e}){return r.a.createElement(c.a,{attribution:l.a.BACKBONE},r.a.createElement(o.a.Consumer,null,({spaceKey:t})=>r.a.createElement(s.b,{query:A,variables:{spaceKey:t}},({loading:t,error:a,data:n})=>{var s,o;if(t||a||!(null!=(o=n)&&null!=(o=o.space)&&null!=(o=o.settings)&&null!=(o=o.customHeaderAndFooter)&&null!=(o=o[e])?o.html:o))return null;const c=null!=(s=n)&&null!=(s=s.space)&&null!=(s=s.settings)&&null!=(s=s.customHeaderAndFooter)?s[e]:s;return r.a.createElement(M,{spaUnfriendlyMacros:Array.from(new Set(c.spaUnfriendlyMacros)),type:e,css:c.css,js:c.js,html:c.html})})))}a.d(t,"CustomHeaderFooter",(function(){return H}))},AqZj:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("daKX");Object(n.a)("wrm");function r(e,t){if(!t.length)return Promise.resolve();const a=window.document.createDocumentFragment(),n=t.map(e=>new Promise((t,n)=>{const r=window.document.createElement("script");r.async=!1,r.src=e,r.onload=t,r.onerror=n,a.appendChild(r)}));return e.appendChild(a),Promise.all(n).catch((...e)=>{0})}}}]);
//# sourceMappingURL=custom-header-footer~0ae2caf4.FpUnAbmmiw.js.map