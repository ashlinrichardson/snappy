WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:navigator-context', location = 'includes/js/api/navigator-context.js' */
define("confluence/api/navigator-context",["confluence/meta","document","window"],function(d,b,l){function r(a){var b={};if(a){"?"===a.substr(0,1)&&(a=a.substr(1));a=a.split("\x26");for(var c=0;c<a.length;c++){var f=a[c].split("\x3d");b[f[0]]||(b[f[0]]=[]);b[f[0]].push(a[c].substring(f[0].length+1))}}return b}var m=function(a){a=g(a);return"undefined"!==typeof a&&0!==a},g=function(a){a=d.get(a);if(!isNaN(a))return Number(a)},n=function(a){return(a=a.match(/[^/?#]*\/plugins\/servlet\/ac\/([^/?#]*)\/([^/?#]*)$/))?
{addonKey:a[1],moduleKey:a[2]}:null},p=function(){return 0<b.querySelectorAll("[data-fabric-mode]").length},q=function(){return!!b.querySelector(".page.view")||!!b.querySelector(".blogpost.view")},h=function(){return!!b.querySelector(".page.edit")||!!b.querySelector(".blogpost.edit")||p()},k=function(){return d.get("content-type")},e=function(){return g("page-id")},t=function(a){var b=n(a.pathname),c=r(a.search);a=Object.keys(c).reduce(function(a,b){a[decodeURIComponent(b).replace(/^ac\./g,"")]=c[b].map(decodeURIComponent);
return a},{});return{target:"addonmodule",context:{addonKey:decodeURIComponent(b.addonKey),moduleKey:decodeURIComponent(b.moduleKey),context:a}}};return{getCurrent:function(){return h()&&0===e()&&m("draft-id")||0<b.querySelectorAll("[data-fabric-mode\x3d'create']").length?{target:"contentcreate",context:{contentId:p()?e():g("draft-id"),contentType:k(),spaceKey:d.get("space-key")}}:h()&&!q()&&0!==e()||0<b.querySelectorAll("[data-fabric-mode\x3d'edit']").length?{target:"contentedit",context:{contentId:e(),
contentType:k(),spaceKey:d.get("space-key")}}:!h()&&q()&&m("page-id")?{target:"contentview",context:{contentId:e(),contentType:k(),spaceKey:d.get("space-key")}}:null!=n(l.location.pathname)?t(l.location):{target:"unknown",context:{}}}}});
}catch(e){WRMCB(e)};