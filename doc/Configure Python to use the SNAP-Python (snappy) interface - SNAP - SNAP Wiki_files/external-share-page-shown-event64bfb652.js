(window.webpackJsonp=window.webpackJsonp||[]).push([["external-share-page-shown-event~64bfb652"],{"60zu":function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var i=e("H5qd");const c=e.n(i).a`query ExternalShareMetadataQuery($contentId:ID!){queryContentLevelMetadata(contentId:$contentId){shareUrlPath permissions}}`},"90UR":function(n,t,e){"use strict";e.d(t,"a",(function(){return s})),e.d(t,"c",(function(){return b})),e.d(t,"b",(function(){return g}));var i=e("ERkP"),c=e.n(i),o=e("1U1M"),a=e("a0gl"),r=e("+6Tk"),u=e("DqCY");const d=["control","variation"],s=["page"],l="confluence.frontend.external-share",b=n=>{const{featureFlagClient:t}=Object(a.a)(),e=Object(r.c)("confluence.frontend.external-share"),c=d.includes(e),b=Boolean(n&&!s.includes(n)),{loading:g,data:S,error:k}=Object(o.d)(u.a,{skip:!c||b}),p=Boolean(!g&&S&&!S.siteLevelPermission.permissions.includes("extended/disabled/legacyAnonAccess")),I=[[!c,"ff_not_enrolled"],[p,"existing_anon_enabled"]].filter(([n])=>n).map(([,n])=>n),f=0===I.length,j=g?void 0:f&&!b?e:"not-enrolled";return Object(i.useEffect)(()=>{g||t.trackExposure(l,t.flags[l],{cohort:j,ineligibilityReasons:I})},[t,g,j,f,I]),k?{isLoading:!1,ffCohort:e,isExistingAnonEnabled:p,cohort:"not-enrolled",isVariation:!1,isEnrolled:!1}:void 0===j?{isLoading:!0}:{isLoading:!1,ffCohort:e,isExistingAnonEnabled:p,cohort:j,isVariation:"variation"===j,isEnrolled:d.includes(j)&&!b}},g=({children:n,sharedContentType:t})=>c.a.createElement(i.Fragment,null,n(b(t)))},DqCY:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var i=e("H5qd");const c=e.n(i).a`query SiteSettingsQuery{siteLevelPermission{cloudId permissions}}`},Prqj:function(n,t,e){"use strict";e.d(t,"e",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"b",(function(){return u})),e.d(t,"d",(function(){return d})),e.d(t,"f",(function(){return s})),e.d(t,"a",(function(){return l})),e.d(t,"h",(function(){return b})),e.d(t,"i",(function(){return g})),e.d(t,"j",(function(){return S})),e.d(t,"g",(function(){return k})),e.d(t,"C",(function(){return p})),e.d(t,"m",(function(){return I})),e.d(t,"l",(function(){return f})),e.d(t,"v",(function(){return j})),e.d(t,"t",(function(){return v})),e.d(t,"s",(function(){return E})),e.d(t,"u",(function(){return h})),e.d(t,"n",(function(){return L})),e.d(t,"r",(function(){return P})),e.d(t,"y",(function(){return O})),e.d(t,"z",(function(){return m})),e.d(t,"B",(function(){return w})),e.d(t,"x",(function(){return U})),e.d(t,"w",(function(){return y})),e.d(t,"A",(function(){return x})),e.d(t,"k",(function(){return B})),e.d(t,"q",(function(){return T})),e.d(t,"I",(function(){return C})),e.d(t,"p",(function(){return M})),e.d(t,"D",(function(){return A})),e.d(t,"F",(function(){return F})),e.d(t,"E",(function(){return V})),e.d(t,"H",(function(){return R})),e.d(t,"G",(function(){return q})),e.d(t,"o",(function(){return D}));var i=e("Czhu");const c=(n,t,e)=>(c,o)=>c({type:n,data:Object(i.a)(Object(i.a)({},t),{},{attributes:Object(i.a)(Object(i.a)({},e),o)})}).fire(),o=(n,t)=>(e,c,o,a)=>e({type:n,data:Object(i.a)(Object(i.a)({containerType:"space",containerId:c,objectType:"page",objectId:o},t),{},{actionSubjectId:o,attributes:a})}).fire(),a=c("sendUIEvent",{source:"publicLinksAdminOnboardingFlag",action:"clicked",actionSubject:"button",actionSubjectId:"remindMeLaterButton"}),r=c("sendUIEvent",{source:"publicLinksAdminOnboardingFlag",action:"clicked",actionSubject:"button",actionSubjectId:"dontShowAgainButton"}),u=c("sendUIEvent",{source:"publicLinksAdminOnboardingFlag",action:"clicked",actionSubject:"button",actionSubjectId:"closeButton"}),d=c("sendUIEvent",{source:"publicLinksAdminOnboardingFlag",action:"clicked",actionSubject:"button",actionSubjectId:"learnMoreButton"}),s=c("sendUIEvent",{source:"publicLinksAdminOnboardingFlag",action:"clicked",actionSubject:"button",actionSubjectId:"turnOnPublicLinksButton"}),l=c("sendTrackEvent",{source:"publicLinksAdminOnboardingFlag",action:"updated",actionSubject:"publicLinksSettings"}),b=c("sendUIEvent",{source:"publicLinksAdminOnboardingModal",action:"clicked",actionSubject:"button",actionSubjectId:"closeButton"}),g=c("sendUIEvent",{source:"publicLinksAdminOnboardingModal",action:"clicked",actionSubject:"button",actionSubjectId:"seeSettingsButton"}),S=c("sendUIEvent",{source:"publicLinksAdminOnboardingModal",action:"clicked",actionSubject:"button",actionSubjectId:"turnOnPublicLinksButton"}),k=c("sendTrackEvent",{source:"publicLinksAdminOnboardingModal",action:"updated",actionSubject:"publicLinksSettings"}),p=c("sendUIEvent",{source:"publicLinksSuccessFlag",action:"clicked",actionSubject:"button",actionSubjectId:"goToSettingsButton"}),I=c("sendUIEvent",{source:"publicLinksFailureFlag",action:"clicked",actionSubject:"button",actionSubjectId:"goToSettingsButton"}),f=c("sendUIEvent",{source:"publicLinksFailureFlag",action:"clicked",actionSubject:"button",actionSubjectId:"contactSupportButton"}),j=c("sendUIEvent",{source:"publicLinksSettingsScreen",action:"clicked",actionSubject:"toggle",actionSubjectId:"publicLinksToggle"}),v=c("sendUIEvent",{source:"publicLinksSettingsScreen",action:"clicked",actionSubject:"button",actionSubjectId:"confirmDisablePublicLinksButton"}),E=c("sendUIEvent",{source:"publicLinksSettingsScreen",action:"clicked",actionSubject:"button",actionSubjectId:"cancelDisablePublicLinksButton"}),h=c("sendUIEvent",{source:"publicLinksSettingsScreen",action:"clicked",actionSubject:"button",actionSubjectId:"learnMoreLink"}),L=c("sendUIEvent",{source:"publicLinksFailureFlag",action:"clicked",actionSubject:"button",actionSubjectId:"refreshPageButton"}),P=c("sendTrackEvent",{source:"publicLinksSettingsScreen",action:"updated",actionSubject:"publicLinksSettings"}),O=c("sendUIEvent",{source:"shareModal",action:"shown",actionSubject:"onboarding",actionSubjectId:"publicLinksOnboarding"}),m=c("sendUIEvent",{source:"shareModal",action:"clicked",actionSubject:"button",actionSubjectId:"publicLinksOnboardingDismissButton"}),w=c("sendUIEvent",{source:"shareModal",action:"clicked",actionSubject:"toggle",actionSubjectId:"pagePublicLinksToggle"}),U=c("sendUIEvent",{source:"shareModal",action:"clicked",actionSubject:"button",actionSubjectId:"confirmDisablePagePublicLinksButton"}),y=c("sendUIEvent",{source:"shareModal",action:"clicked",actionSubject:"button",actionSubjectId:"cancelDisablePagePublicLinksButton"}),x=o("sendTrackEvent",{source:"shareModal",action:"updated",actionSubject:"pagePublicLinksSettings"}),B=o("sendTrackEvent",{source:"editPageScreen",action:"shown",actionSubject:"page"}),T=o("sendTrackEvent",{source:"restrictionsModal",action:"updated",actionSubject:"pagePublicLinksSettings"}),C=o("sendTrackEvent",{source:"viewPageScreen",action:"shown",actionSubject:"page"}),M=c("sendOperationalEvent",{source:"viewPageScreen",action:"redirected",actionSubject:"page",actionSubjectId:"publicView"}),A=o("sendTrackEvent",{source:"viewPageScreen",action:"viewed",actionSubject:"page"}),F=c("sendUIEvent",{source:"viewPageScreen",action:"clicked",actionSubject:"button",actionSubjectId:"editPageButton"},{isPublicView:!0}),V=c("sendUIEvent",{source:"viewPageScreen",action:"clicked",actionSubject:"commentEditor"},{isPublicView:!0}),R=c("sendUIEvent",{source:"viewPageScreen",action:"clicked",actionSubject:"button",actionSubjectId:"getAccessToViewMacroButton"},{isPublicView:!0}),q=c("sendUIEvent",{source:"viewPageScreen",action:"clicked",actionSubject:"button",actionSubjectId:"getAccessLink"}),D=c("sendUIEvent",{source:"publicViewGetAccessModal",action:"clicked",actionSubject:"button",actionSubjectId:"getAccessButton"})},V0cT:function(n,t,e){"use strict";e.d(t,"b",(function(){return s})),e.d(t,"a",(function(){return l}));var i=e("ERkP"),c=e.n(i),o=e("1U1M"),a=e("fT4k"),r=e("XEHv"),u=e("60zu");const d=n=>{const t=n&&n.queryContentLevelMetadata;if(!t)return{isExternalSharingEnabledContent:!1,isExternalSharingEnabledSite:!1,sharePath:""};const e=t.permissions||[];return{isExternalSharingEnabledSite:e.includes(r.b),isExternalSharingEnabledContent:e.includes(r.a),sharePath:t.shareUrlPath}},s=n=>{const{loading:t,data:e,error:i}=Object(o.d)(u.a,{skip:n.skip,context:Object(a.a)(n.contentId),variables:{contentId:n.contentId},onCompleted:t=>{n.onCompleted&&n.onCompleted(d(t))}});return t?{isLoading:!0}:{isLoading:!1,error:i,data:i?void 0:d(e)}},l=({contentId:n,skip:t,children:e})=>c.a.createElement(i.Fragment,null,e(s({contentId:n,skip:t})))},XEHv:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"a",(function(){return c}));const i="share/page/external",c="view/page/external"},fT4k:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));const i=n=>({fetchOptions:{referrerPolicy:"same-origin",referrer:"/wiki/external/"+n}})},iJJ3:function(n,t,e){"use strict";var i=e("Czhu"),c=e("ERkP"),o=e.n(c),a=e("V0cT"),r=e("90UR"),u=e("1U1M"),d=e("H5qd");const s=e.n(d).a`query ExternalShareContentQuery($contentId:ID!){content(id:$contentId){nodes{id type hasInheritedRestrictions hasRestrictions hasViewRestrictions}}}`,l=n=>{var t,e,i;return{isViewRestrictedContent:Boolean(null!=(i=n)&&null!=(i=i.content)&&null!=(i=i.nodes)&&null!=(i=i[0])?i.hasViewRestrictions:i),isInheritedRestrictedContent:Boolean(null!=(e=n)&&null!=(e=e.content)&&null!=(e=e.nodes)&&null!=(e=e[0])?e.hasInheritedRestrictions:e),contentType:(null!=(t=n)&&null!=(t=t.content)&&null!=(t=t.nodes)&&null!=(t=t[0])?t.type:t)||""}};e.d(t,"b",(function(){return b})),e.d(t,"a",(function(){return g}));const b=n=>{const t=Object(r.c)(),e=Object(a.b)({contentId:n.contentId,skip:t.isLoading||!t.isVariation}),c=(n=>{const{loading:t,data:e,error:i}=Object(u.d)(s,{skip:n.skip,variables:{contentId:n.contentId}});return t?{isLoading:!0}:{isLoading:!1,error:i,data:i?void 0:l(e)}})({contentId:n.contentId,skip:t.isLoading||!t.isVariation});return t.isLoading||e.isLoading||c.isLoading?{isLoading:!0}:Object(i.a)({isLoading:!1},((n,t,e)=>{const i=!e.error&&void 0!==e.data&&r.a.includes(e.data.contentType),c=!n.isLoading&&n.isVariation,o=c&&!t.error&&void 0!==t.data&&t.data.isExternalSharingEnabledContent&&t.data.isExternalSharingEnabledSite&&!e.error&&void 0!==e.data&&!e.data.isViewRestrictedContent&&!e.data.isInheritedRestrictedContent;return{isExternalShareVariation:c,isExternalShareEnabledForSite:c&&!t.error&&void 0!==t.data&&t.data.isExternalSharingEnabledSite,isPageExternallyShared:o,isContentExternallySharable:c&&i}})(t,e,c))},g=({contentId:n,children:t})=>o.a.createElement(c.Fragment,null,t(b({contentId:n})))},w7cQ:function(n,t,e){"use strict";e.r(t);var i=e("ERkP"),c=e("RjSO"),o=e("1U1M"),a=e("iJJ3"),r=e("Prqj"),u=e("H5qd");const d=e.n(u).a`query PageShownPublicLinksEventQuery($contentId:ID!){content(id:$contentId){nodes{id space{id homepage{id}}}}}`;e.d(t,"PageShownPublicLinksEvent",(function(){return s}));const s=n=>{var t,e,u,s;const{createAnalyticsEvent:l}=Object(c.a)(),b=Object(a.b)({contentId:n.contentId}),{loading:g,data:S}=Object(o.d)(d,{variables:{contentId:n.contentId},skip:"page"!==n.pageType}),k=null==S||null===(t=S.content)||void 0===t||null===(e=t.nodes)||void 0===e||null===(u=e[0])||void 0===u?void 0:u.space,p=(null==k||null===(s=k.homepage)||void 0===s?void 0:s.id)===n.contentId;return Object(i.useEffect)(()=>{if("page"!==n.pageType||b.isLoading||g||p)return;(n.isEditPage?r.k:r.I)(l,null==k?void 0:k.id,n.contentId,{isPublicLinkEnabled:b.isPageExternallyShared})},[b.isLoading,g,p]),null}}}]);
//# sourceMappingURL=external-share-page-shown-event~64bfb652.LUyxpdJTkF.js.map