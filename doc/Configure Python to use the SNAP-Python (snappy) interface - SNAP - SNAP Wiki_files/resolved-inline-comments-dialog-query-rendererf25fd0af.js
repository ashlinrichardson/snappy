(window.webpackJsonp=window.webpackJsonp||[]).push([["resolved-inline-comments-dialog-query-renderer~f25fd0af"],{Mmdp:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var o=t("H5qd");const r=t.n(o).a`query ResolvedInlineCommentsQueryRendererQuery($contentId:ID!)@experimental{experimentalResolvedInlineComments(contentId:$contentId){nodes{id replies{nodes{id}}}}}`},Oa7q:function(e,n,t){"use strict";t.r(n),t.d(n,"ResolvedInlineCommentsQueryRenderer",(function(){return a}));var o=t("ERkP"),r=t.n(o),d=t("gQ5V"),s=t("Ua4J"),i=t("Mmdp"),l=t("9oDW");const a=({spaceKey:e,contentId:n})=>{const{getQueryParams:t}=Object(o.useContext)(s.a),{focusedCommentId:a}=t(),[c,m]=Object(o.useState)(!1);return Object(o.useEffect)(()=>{c&&m(!1)},[a]),a?r.a.createElement(d.b,{query:i.a,variables:{contentId:n}},({data:t,loading:o,error:d})=>{if(o||d||!t||!t.experimentalResolvedInlineComments)return null;const s=t.experimentalResolvedInlineComments.nodes.find(({id:e,replies:n})=>a===e||n.nodes.some(e=>a===e.id));if(s){const t=s.id!==a,o={id:a};return t&&(o.parentCommentId=s.id),c?null:r.a.createElement(l.ResolvedInlineCommentsDialog,{spaceKey:e,contentId:n,focusedCommentData:o,onClose:()=>m(!0),context:"renderer"})}return null}):null}}}]);
//# sourceMappingURL=resolved-inline-comments-dialog-query-renderer~f25fd0af.Fz2tokbNnY.js.map