WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-feature-discovery-plugin:confluence-feature-discovery-plugin-resources', location = '/js/confluence-feature-discovery-plugin.js' */
(function(f){Confluence.FeatureDiscovery={};var c;var e=false;var i=3;var d="com.atlassian.confluence.plugins.confluence-feature-discovery-plugin";var g=d+":confluence-feature-discovery-plugin-resources.test-mode";var a=WRM.data.claim(g);function j(k){if(c===undefined){c=JSON.parse(AJS.Meta.get("discovered-plugin-features")||"{}")}if(k){return c[k]||[]}return c}function b(m,o){var n=j(m);for(var l=0,k=n.length;l<k;l++){if(n[l]===o){return true}}return false}function h(n,p){var l="com.atlassian.webdriver.discovery="+n+":"+p;var k=document.cookie.split(";");for(var m=0;m<k.length;m++){var o=k[m];while(o.charAt(0)===" "){o=o.substring(1)}if(o.indexOf(l)!==-1){return true}}return false}Confluence.FeatureDiscovery.forPlugin=function(m,l){var p=require("confluence/confluence-storage-manager")("feature-discovery."+m);l=l||i;function o(r){var q=parseInt(p.getItem(r),10);return isNaN(q)?0:q}function n(r,q){return p.setItem(r,q)}function k(q){return p.removeItem(q)}return{addDiscoveryView:function(q){n(q,o(q)+1)},shouldShow:function(r,q){if(q===true&&a&&!h(m,r)){return false}if(e||b(m,r)){return false}if(o(r)>=l){this.markDiscovered(r);return false}e=true;return true},markDiscovered:function(r,q){if(b(m,r)){return}AJS.safeAjax({url:AJS.contextPath()+"/rest/feature-discovery/1.0/discovered/"+m+"/"+r,type:"POST",data:{},success:function(){j(m).unshift(r);k(r);AJS.trigger("feature-discovered",{pluginKey:m,featureKey:r});if(q&&f.isFunction(q)){q()}}})},listDiscovered:function(){return j(m).slice(0)}}}})(AJS.$);
}catch(e){WRMCB(e)};