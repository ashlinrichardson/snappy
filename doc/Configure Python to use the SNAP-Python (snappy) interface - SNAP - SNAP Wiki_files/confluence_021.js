WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.macros.advanced:jiraroadmap-editor', location = 'com/atlassian/confluence/plugins/macros/advanced/jiraroadmap/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.JiraRoadmapMacro.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.JiraRoadmapMacro == 'undefined') { Confluence.Templates.JiraRoadmapMacro = {}; }


Confluence.Templates.JiraRoadmapMacro.roadmapPopupPanel = function(opt_data, opt_ignored) {
  return '<section id="confluence-jira-roadmap-dialog" class="jiraroadmap jiraroadmap-dialog" class="aui-dialog2 aui-dialog2-xlarge aui-layer" role="dialog" aria-hidden="true"><header class="aui-dialog2-header"><h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Jira roadmap') + '</h2></header><div class="aui-dialog2-content"><div class="dialog-content"><form action="" onsubmit="return false" class="aui"><div class="field-group select-tenant"><div class="field-label">' + soy.$$escapeHtml('Paste a Jira instance URL') + '</div><input id="tenant-select" type="text" class="text" /></div><div class="field-group select-project"><div class="field-label">' + soy.$$escapeHtml('Project') + '</div><input id="project-select" /></div></form><div class="field-error" id="field-error"></div><div tabindex="-1" id="roadmap-preview" class="jiraroadmap-iframe-container"></div></div></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions"><form onsubmit="return false" class="aui"><a tabindex="0" id="insert-jira-roadmap-dialog" class="aui-button aui-button-primary">' + soy.$$escapeHtml('Save') + '</a><a tabindex="0" class="close-jira-roadmap-dialog aui-button aui-button-link">' + soy.$$escapeHtml('Cancel') + '</a></form></div></footer></section>';
};
if (goog.DEBUG) {
  Confluence.Templates.JiraRoadmapMacro.roadmapPopupPanel.soyTemplateName = 'Confluence.Templates.JiraRoadmapMacro.roadmapPopupPanel';
}


Confluence.Templates.JiraRoadmapMacro.roadmapError = function(opt_data, opt_ignored) {
  return '<div class="error-screen"><div class="message" id="preview-error-message">' + ((opt_data.type == 'permission') ? '<h2>' + soy.$$escapeHtml('You don\x27t have permission to view this Jira roadmap.') + '</h2><p>' + soy.$$escapeHtml('Please check the project settings in Jira.') + '</p><br/><a href="' + soy.$$escapeHtml(opt_data.link) + '" target="_blank" tabindex="0" class="aui-button aui-button-primary">' + soy.$$escapeHtml('Go to Jira') + '</a><a href="https://confluence.atlassian.com/adminjiracloud/managing-project-permissions-776636362.html" target="_blank" tabindex="0" class="aui-button aui-button-link">' + soy.$$escapeHtml('Learn more') + '</a>' : (opt_data.type == 'validation' || opt_data.type == 'not-available') ? '<h2>' + soy.$$escapeHtml('We can\x27t display this Jira roadmap.') + '</h2><p>' + soy.$$escapeHtml('Please check with your system administrator.') + '</p><br/><a href="' + soy.$$escapeHtml(opt_data.link) + '" target="_blank" tabindex="0" class="aui-button aui-button-primary">' + soy.$$escapeHtml('Go to Jira') + '</a><a href="https://confluence.atlassian.com/jirasoftwarecloud/roadmap-957979308.html#Roadmap-TroubleshootyourRoadmap" target="_blank" tabindex="0" class="aui-button aui-button-link">' + soy.$$escapeHtml('Learn more') + '</a>' : (opt_data.type == 'invalid-url') ? '<h2>' + soy.$$escapeHtml('This doesn\x27t look like a URL of Jira roadmap.') + '</h2><p>' + soy.$$escapeHtml('Please check with your system administrator.') + '</p><br/>' : (opt_data.type == 'inconsistent-env') ? '<h2>' + soy.$$escapeHtml('We can\x27t display this Jira roadmap.') + '</h2><p>' + soy.$$escapeHtml('This Jira roadmap is in a different environment.') + '</p>' : (opt_data.type == 'project-type') ? '<h2>' + soy.$$escapeHtml('We can\x27t display this Jira roadmap.') + '</h2><p>' + soy.$$escapeHtml('This macro only supports next-gen Jira Software projects.') + '</p>' : (opt_data.type == 'service-unavailable') ? '<h2>' + soy.$$escapeHtml('We can\x27t display this Jira roadmap.') + '</h2><p>' + soy.$$escapeHtml('Try again later, or contact Atlassian Support if this keeps happening.') + '</p><br/><a href="https://support.atlassian.com/contact/#/" target="_blank" tabindex="0" class="aui-button aui-button-primary">' + soy.$$escapeHtml('Atlassian Support') + '</a>' : '<h2>' + soy.$$escapeHtml('This Jira roadmap is not currently active.') + '</h2><p>' + soy.$$escapeHtml('Please check with your system administrator.') + '</p><br/><a href="' + soy.$$escapeHtml(opt_data.link) + '" target="_blank" tabindex="0" class="aui-button aui-button-primary">' + soy.$$escapeHtml('Go to Jira') + '</a><a href="https://confluence.atlassian.com/jirasoftwarecloud/roadmap-957979308.html" target="_blank" tabindex="0" class="aui-button aui-button-link">' + soy.$$escapeHtml('Learn more') + '</a>') + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.JiraRoadmapMacro.roadmapError.soyTemplateName = 'Confluence.Templates.JiraRoadmapMacro.roadmapError';
}


Confluence.Templates.JiraRoadmapMacro.roadmapIframe = function(opt_data, opt_ignored) {
  return '<iframe id="roadmap-iframe" src="' + soy.$$escapeHtml(opt_data.iframeSrc) + '" width="100%" frameBorder="0" />' + ((opt_data.roadmapUrl != '') ? '<div class="preview-footer"><a class="aui-button aui-button-link" target="_blank" href="' + soy.$$escapeHtml(opt_data.roadmapUrl) + '">' + soy.$$escapeHtml('View in Jira') + '</a></div>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.JiraRoadmapMacro.roadmapIframe.soyTemplateName = 'Confluence.Templates.JiraRoadmapMacro.roadmapIframe';
}


Confluence.Templates.JiraRoadmapMacro.roadmapLoading = function(opt_data, opt_ignored) {
  return '<div class="jiraroadmap-loading"><div class="spinner-container"><div class="spinner"><svg focusable="false" size="50" height="50" width="50" viewBox="0 0 50 50"><circle cx="25" cy="25" r="22.5"></circle></svg></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.JiraRoadmapMacro.roadmapLoading.soyTemplateName = 'Confluence.Templates.JiraRoadmapMacro.roadmapLoading';
}


Confluence.Templates.JiraRoadmapMacro.roadmapWarning = function(opt_data, opt_ignored) {
  return '<span>' + soy.$$escapeHtml('Right now, the macro editor doesn\x27t support classic roadmaps. To add the roadmap, just copy and paste its URL directly onto your Confluence page, and the roadmap will magically appear. ') + '<a href="https://confluence.atlassian.com/jirasoftwarecloud/share-the-roadmap-1004952903.html" target="_blank" tabindex="0">' + soy.$$escapeHtml('Learn more about the Confluence roadmap macro for classic projects') + '</a></span>';
};
if (goog.DEBUG) {
  Confluence.Templates.JiraRoadmapMacro.roadmapWarning.soyTemplateName = 'Confluence.Templates.JiraRoadmapMacro.roadmapWarning';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.advanced:jiraroadmap-editor', location = 'com/atlassian/confluence/plugins/macros/advanced/jiraroadmap/jiraroadmap-helper.js' */
define("confluence-advanced-macros/jiraroadmap-helper",["jquery","confluence/templates","confluence/legacy-message-queue"],function(j,k,m){var f={makeGetRequest:function(c,b){var a=new XMLHttpRequest;a.open("GET",c);a.withCredentials=!0;a.onload=function(){if(200===a.status){var c=JSON.parse(a.responseText);b({data:c,status:a.status})}else try{b({data:null,error:JSON.parse(a.responseText),status:a.status})}catch(g){b({data:null,error:null,status:a.status})}};a.onerror=function(){b({data:null,error:null,
status:a.status})};a.send()},convertParamsToFragmentUrl:function(c,b,a){var e=/[\w][\w]+/g.exec(b);return e&&e[0]?c+"/rest/greenhopper/1.0/roadmap/fragment/confluenceMacro/"+b+"?fragmentHost="+window.location.protocol+"//"+window.location.hostname+(a?"&boardId="+a:""):null},convertParamsToRoadmapUrl:function(c,b,a,e){return e?c+"/jira/software/c/projects/"+b+"/boards/"+a+"/roadmap":c+"/jira/software/projects/"+b+"/boards/"+a+"/roadmap"},convertRoadmapUrlToParams:function(c){var b=document.createElement("a");
b.href=-1<c.indexOf("://")?c:"https://"+c;var a=/(?:\?|&)projectKey=([\w][\w]+)(?:&rapidView=(\d+))?/g,e=/(?:.+)\/jira\/software\/?c?\/projects\/([\w][\w]+)\/boards\/(\d+|null|undefined)\/roadmap/g,a=-1<b.href.indexOf("Roadmap.jspa")?a.exec(b.search):e.exec(b.href);return{tenant:"https://"+b.hostname,project:a&&a[1]?a[1]:null,boardId:a&&a[2]&&"undefined"!==a[2]&&"null"!==a[2]?a[2]:null,isClassic:-1<c.indexOf("software/c/projects")}},matchHostEnvironment:function(c){var b=["jira-dev.com","localhost",
"atl-test.space"],a=window.location.hostname,e=b.filter(function(a){return-1<c.indexOf(a)}),b=b.filter(function(b){return-1<a.indexOf(b)});return 0<e.length===0<b.length},showGenericErrorScreen:function(c,b,a){c=k.JiraRoadmapMacro.roadmapError({link:c,type:a});b.empty();j(c).appendTo(b);m.push({type:"ATLASSIAN_CONFLUENCE_ANALYTICS_NEXT_TRACK",payload:{source:"macro",action:"showed",actionSubject:"jiraRoadmapMacroError",attributes:{errorType:a}}})},showLoadingScreen:function(c){c.empty();var b=k.JiraRoadmapMacro.roadmapLoading();
j(b).appendTo(c)},renderPreview:function(c,b,a,e,g,h){f.makeGetRequest(b+"/rest/greenhopper/1.0/roadmap/fragment/configuration/?projectKey="+a+"&fragmentHost="+(window.location.protocol+"//"+window.location.hostname)+(e?"&boardId="+e:""),function(d){g.empty();if(d&&d.data&&d.data.hasActiveJiraSoftwareLicense)if(d.data.isValidRoadmap&&d.data.isRoadmapEnabled&&!d.data.isCrossProject){var i=e||d.data.boardId,l=f.convertParamsToFragmentUrl(b,a,i),i=f.convertParamsToRoadmapUrl(b,a,i,d.data.isClassic),
l=k.JiraRoadmapMacro.roadmapIframe({iframeSrc:l+"&hideHeader="+!c,roadmapUrl:i});j(l).appendTo(g);h&&h({success:!0,boardId:d.data.boardId,isClassic:d.data.isClassic});m.push({type:"ATLASSIAN_CONFLUENCE_ANALYTICS_NEXT_TRACK",payload:{source:"macro",action:"validated",actionSubject:"jiraRoadmapMacro"}})}else d.data.isRoadmapEnabled?f.showGenericErrorScreen(b+"/projects/"+a+"/settings",g,"validation"):f.showGenericErrorScreen(b,g,"not-available"),h&&h({success:!1,boardId:d.data.boardId,isClassic:d.data.isClassic});
else{if(503===d.status)f.showGenericErrorScreen(b,g,"service-unavailable");else if(d.error&&d.error.errorMessages)switch(0<d.error.errorMessages.length?d.error.errorMessages[0]:""){case "You must have the browse project permission to view this project.":f.showGenericErrorScreen(b,g,"permission");break;case "This project is not a next-gen Jira Software project.":f.showGenericErrorScreen(b,g,"project-type");break;default:f.showGenericErrorScreen(b,g,"not-available")}else f.showGenericErrorScreen(b,
g,"not-available");h&&h({success:!1,boardId:null,isClassic:!1})}})}};return f});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.advanced:jiraroadmap-editor', location = 'com/atlassian/confluence/plugins/macros/advanced/jiraroadmap/jiraroadmap-editor.js' */
define("confluence-advanced-macros/jiraroadmap-editor","jquery ajs aui/dialog2 confluence/templates confluence/macro-js-overrides confluence-macro-browser/macro-browser-facade confluence-advanced-macros/jiraroadmap-helper".split(" "),function(d,o,q,v,r,y,e){return{init:function(){r.put("jiraroadmap",{opener:function(h){function i(a){var b="";switch(a){case "invalid-url":b="This doesn\'t look like a URL of Jira roadmap.";j.auiSelect2({data:{id:"",text:""},dropdownCssClass:m});
break;case "inconsistent-env":b="This Jira roadmap is in a different environment.";j.auiSelect2({data:{id:"",text:""},dropdownCssClass:m});break;case "project-type":b=v.JiraRoadmapMacro.roadmapWarning();break;case "service-unavailable":b="Try again later, or contact Atlassian Support if this keeps happening.";j.auiSelect2({data:{id:"",text:""},dropdownCssClass:m});break;default:b=""}n.html(b)}function w(a){var b=/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
if(a&&a.url&&a.url!==""&&a.url.match(b)!==null)if((b=e.convertRoadmapUrlToParams(a.url))&&b.tenant){var d=e.convertParamsToFragmentUrl(b.tenant,b.project,b.boardId);return{url:a.url,iframeUrl:d,tenant:b.tenant,project:b.project,boardId:b.boardId,isClassic:b.isClassic}}return null}function x(c,b){if(!p){p=true;e.showLoadingScreen(l);g.attr("disabled",true);e.makeGetRequest(c+"/rest/greenhopper/1.0/roadmap/fragment/cloudId?fragmentHost="+r,function(c){if(c&&c.data&&c.data.cloudId){p=false;s=c.data.cloudId;
var d="/gateway/api/ex/jira/"+s+"/rest/api/3/project/search?typeKey=software";n.html("");b?t(d,b,true):e.makeGetRequest(d,function(f){if(f&&f.data&&f.data.values&&f.data.values.length>0){a.project=f.data.values[0].key;t(d,a.project,false)}else t(d,"",false)})}else{p=false;l.empty();c.status===503?i("service-unavailable"):i("invalid-url")}})}}function t(c,b,h){j.auiSelect2("destroy");j.unbind().change(function(){a.project=j.auiSelect2("val");if(a.tenant&&a.project){e.showLoadingScreen(l);n.html("");
e.renderPreview(false,a.tenant,a.project,null,l,function(f){if(f){a.boardId=f.boardId;a.isClassic=f.isClassic;f.success?g.removeAttr("disabled"):g.attr("disabled",true);a.isClassic?i("project-type"):i("")}})}}).auiSelect2({minimumInputLength:0,multiple:false,ajax:{data:function(a){return{query:a}},dataType:"json",url:c,results:function(a){var b=[];a.values&&(b=a.values.map(function(a){return{id:a.key,text:a.name+" ("+a.key+")"}}));return{results:b}},params:{xhrFields:{withCredentials:true},error:function(){var a=
d(".select2-drop-active > .select2-results"),b="No result found.";a.html('<li class="select2-no-results">'+b+"</li>")}},cache:true,quietMillis:300},dropdownCssClass:m});j.auiSelect2("data",{id:b,text:b});if(a.tenant&&b){var k=function(c){if(c!==void 0&&c.isSimplified!==void 0){e.renderPreview(false,a.tenant,b,a.boardId,l,function(b){if(b){a.boardId=b.boardId;a.isClassic=!c.isSimplified;b.success?g.removeAttr("disabled"):g.attr("disabled",true)}});
c.isSimplified===false&&i("project-type")}else{l.empty();g.attr("disabled",true);c.status===503?i("service-unavailable"):i("invalid-url")}};h?e.makeGetRequest("/gateway/api/ex/jira/"+s+"/rest/api/3/project/"+b,function(a){k({isSimplified:a&&a.data&&a.data.simplified,status:a.status})}):k({isSimplified:true,status:200})}}var m="jiraroadmap-macro-dropdown",u=v.JiraRoadmapMacro.roadmapPopupPanel(),r=window.location.protocol+"//"+window.location.hostname,p=false,a,s,g,k,j,l,n;d("#confluence-jira-roadmap-dialog").length>
0&&d("#confluence-jira-roadmap-dialog").remove();a=w(h.params);h=d(u).appendTo(d("body"));q("#confluence-jira-roadmap-dialog").show();g=d("#insert-jira-roadmap-dialog",h);u=d(".close-jira-roadmap-dialog",h);k=d("#tenant-select",h);j=d("#project-select",h);l=d("#roadmap-preview",h);n=d("#field-error",h);g.unbind().click(function(){if(a&&a.tenant&&a.project){y.insert({name:"jiraroadmap",params:{url:e.convertParamsToRoadmapUrl(a.tenant,a.project,a.boardId,a.isClassic)}});q("#confluence-jira-roadmap-dialog").hide()}});
u.unbind().click(function(){q("#confluence-jira-roadmap-dialog").hide()});k.unbind().keyup(function(a,b){var d;return function(){var e=this,f=arguments;if(d){clearTimeout(d);d=void 0}d=setTimeout(function(){a.apply(e,f);d=void 0},b)}}(function(){if(d(this).val().length>0){var c=w({url:d(this).val()});if(!c||!c.tenant||!e.matchHostEnvironment(c.tenant)){c&&c.tenant?i("inconsistent-env"):i("invalid-url");l.empty();g.attr("disabled",true);a=null;return false}n.html("");if(!a||a&&c.tenant!==a.tenant||
a&&c.project&&c.project!==a.project){a={tenant:c.tenant,project:c.project,boardId:c.boardId};x(a.tenant,a.project);k.val(a.tenant)}else c.tenant&&!c.project&&k.val(a.tenant)}},500));j.auiSelect2({data:[{id:a&&a.project?a.project:"",text:a&&a.project?a.project:""}],dropdownCssClass:m});if(a&&a.url){if(a.tenant){k.val(a.tenant);if(e.matchHostEnvironment(a.tenant))x(a.tenant,a.project);else{i("inconsistent-env");g.attr("disabled",true);a=null}}}else{g.removeAttr("disabled");k.focus()}}})}}});
require("confluence/module-exporter").safeRequire("confluence-advanced-macros/jiraroadmap-editor",function(d){require("ajs").toInit(function(){d.init()})});
}catch(e){WRMCB(e)};