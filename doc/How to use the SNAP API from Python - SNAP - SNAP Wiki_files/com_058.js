WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/doctheme-utils.js' */
define("confluence-highlight-actions/js/doctheme-utils",["jquery"],function(c){function d(f){var e=c(f);c(f).appendTo(c("body"));return e}function a(){return c(document).scrollTop()}function b(){return c(document).scrollLeft()}return{appendAbsolutePositionedElement:d,getMainContentScrollTop:a,getMainContentScrollLeft:b}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-highlight-actions/js/doctheme-utils","Confluence.DocThemeUtils");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/scrolling-inline-dialog.js' */
define("confluence-highlight-actions/js/scrolling-inline-dialog",["ajs","jquery"],function(a,b){return function(c,f,e,d){d=d||{};var g=function(k,s,J,z){var v;var L="auto";var G;var p=-7;var q;var w;var u=b(window).width();var K=s.target.position();var i=s.target.outerWidth();var m=K.left+i/2;var C=(window.pageYOffset||document.documentElement.scrollTop)+b(window).height();var n=10;var o=20;G=K.top+s.target.outerHeight()+z.offsetY;var H=k.find(".arrow").outerWidth();var j=k.outerWidth();var D=s.target.outerWidth();if(z.centerOnHighlight){if(j>D){v=K.left-(j-D)/2;q=m-v-H/2}else{v=K.left+z.offsetX;q=(j-H)/2}}else{v=K.left+z.offsetX;if(j>D){q=m-v-H/2}else{q=(j-H)/2}}q=(q<0)?0:q;var h=(K.top-(window.pageYOffset||document.documentElement.scrollTop));var A=z.maxHeight||0;var t=k.height();var r=h>Math.max(t,A);var l=(G+k.height())<C;w=(!l&&r)||z.onTop;z.onTop=w;var y=u-(v+j+n);if(w){G=K.top-t-8;p=t}if(w===false&&l===false){var x=(G+t)-C;var E=(window.pageYOffset||document.documentElement.scrollTop)+x+o;var F=b("html, body");F.stop().animate({scrollTop:E},500)}if(z.isRelativeToMouse){if(y<0){L=n;v="auto";q=J.x-(b(window).width()-z.width)}else{v=J.x-20;q=J.x-v}}else{if(y<0){L=n;v="auto";var I=u-L;var B=I-j;q=m-B-H/2}}return{displayAbove:w,popupCss:{left:v,right:L,top:G},arrowCss:{position:"absolute",left:q,right:"auto",top:p}}};if(!d.calculatePositions){d.calculatePositions=g}return a.InlineDialog.call(this,c,f,e,d)}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-highlight-actions/js/scrolling-inline-dialog","Confluence.ScrollingInlineDialog");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/highlight-analytics.js' */
define("confluence-highlight-actions/js/highlight-analytics",["ajs"],function(c){var b="confluence.highlight.actions.open";var e="confluence.quote.in.comment.insert";var g="confluence.quote.in.comment.append";function d(h,i){c.trigger("analytics",{name:h,data:i})}function a(){d(b)}function f(h){if(h){d(e)}else{d(g)}}return{sendAnalyticsForOpeningHighlightOptionPanel:a,sendAnalyticsForQuoteInComment:f}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-highlight-actions/js/highlight-analytics","Confluence.HighlightAction.Analytics");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = 'js/highlight-ranger-helper.js' */
define("confluence-highlight-actions/js/highlight-ranger-helper",["ajs","jquery","confluence/legacy","confluence-highlight-actions/js/doctheme-utils"],function(e,b,h,l){function r(s){return s.replace(/\u00a0/g,"\u0020")}function d(u,t){var s={};s.first=t[0];s.last=t[t.length-1];if(u.endOffset!=="undefined"){if(u.endOffset===0&&t.length>1){s.last=t[t.length-2]}}return s}function o(t){var u=l.getMainContentScrollTop();var v=l.getMainContentScrollLeft();var z=t.getClientRects();if(!z.length&&t.parentElement()){var A=b(t.parentElement());var s=A.offset();z=[{top:s.top-u,left:s.left-v,bottom:s.top+A.height(),right:s.left+A.width()}]}var C=d(t,z);var x=function(G,F){var E={};E.top=G.top;E.left=G.left+v;E.bottom=F.bottom;if(G.left>=F.right){E.right=G.right}else{E.right=F.right}E.right=E.right+v;E.top=E.top+u;E.bottom=E.bottom+u;E.width=E.right-E.left;E.height=E.bottom-E.top;return E};var w=function(F){var E={};E.width=F.right-F.left;E.height=F.bottom-F.top;E.left=F.left+v;E.right=F.right+v;E.top=F.top+u;E.bottom=F.bottom+u;return E};var D=x(C.first,C.last);var y=w(C.first);if(h.HighlightAction.debug){var B=b("<div>").attr("id","highlight-actions-debug-helper");l.appendAbsolutePositionedElement(B).css(b.extend({position:"absolute",outline:"1px solid red"},D))}return{first:y,average:D}}function p(t){var s=(t.text!==undefined)?t.text:t.toString();return r(s)}function q(s){return(s.cloneContents)?b("<div>").append(s.cloneContents()).html():s.htmlText}function a(t){if(t.commonAncestorContainer){var s=t.commonAncestorContainer;if(s.nodeType===3){return s.parentNode}return s}else{if(t.parentElement){return t.parentElement()}}}function g(s){return{area:o(s),text:p(s),html:q(s),containingElement:a(s),range:s}}function m(s,v){var t=a(v);var u=function(){var w=false;b.each(s,function(x,y){if(y===t||b.contains(y,t)){w=true;return false}});return w};return u()}function i(){if(window.getSelection&&window.getSelection().isCollapsed){return false}if(document.selection&&(document.selection.type==="None"||document.selection.createRange().htmlText==="")){return false}var v;if(window.getSelection){var s=window.getSelection();v=s.getRangeAt(s.rangeCount-1)}else{if(document.selection){v=document.selection.createRange()}}if(/^\s*$/.test(p(v))){var t=q(v);if(!t){return false}var u=t.toLowerCase().indexOf("<img ")!==-1;if(!u){return false}}if(!m(b(".wiki-content, [data-highlight-actions-target=true]"),v)){return false}return v}function c(u,t){var s;if(document.createRange){s=document.createRange();s.setStart(u.get(0),0);s.setEnd(t.endContainer,t.originalEndOffset)}else{s=document.body.createTextRange();s.moveToElementText(u.get(0));s.setEndPoint("EndToEnd",t)}return s}function k(t){if(document.createRange){return t.text()}else{var s=document.body.createTextRange();s.moveToElementText(t.get(0));return s.text}}function j(x,w,u){var v=w.find('.user-mention, a[href^="/"]');w.find('.conf-macro[data-hasbody="false"]').each(function(){if(b(this).text().indexOf(x)>-1){v=v.add(this)}});if(v.length>0){var s=x.replace(/\S/g," ");var t=new RegExp(x.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"g");v.each(function(){var y=b(this).text();b(this).text(y.replace(t,s))});return k(w)}return u}function f(x,v){var t=k(v);t=j(x,v.clone(),t);t=r(t);var w=0;var u=-1;var s=[];while((u=t.indexOf(x,w))>-1){s.push(u);w=u+1}return s}function n(u,t){var s=p(c(u,t));var w=b.trim(p(t));var v=f(w,u);s=s.replace(/\s*$/,"");return{pageId:e.Meta.get("page-id"),selectedText:w,index:b.inArray(s.length-w.length,v),numMatches:v.length}}return{getRangeOption:g,getUserSelectionRange:i,getSelectionRects:o,getSelectionText:p,getSelectionHTML:q,getContainingElement:a,getFirstAndLastSelectionRect:d,isSelectionInsideContent:m,computeSearchTextObject:n}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-highlight-actions/js/highlight-ranger-helper","Confluence.HighlightAction.RangeHelper");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = 'js/highlight-actions.js' */
define("confluence-highlight-actions/js/highlight-actions",["ajs","jquery","confluence/legacy","confluence-highlight-actions/js/highlight-ranger-helper"],function(n,e,o,g){var d={};var b={MAINCONTENT_AND_COMMENT:function(p){return g.isSelectionInsideContent(e(".wiki-content, [data-highlight-actions-target=true]"),p)},MAINCONTENT_ONLY:function(q){var p=e(".wiki-content, [data-highlight-actions-target=true]").first();return g.isSelectionInsideContent(p,q)},COMMENT_ONLY:function(p){return g.isSelectionInsideContent(e(".comment-content"),p)}};function a(q,r){var p={onClick:function(){},shouldDisplay:b.MAINCONTENT_AND_COMMENT};d[q]=e.extend(p,r)}function l(p){var q=d[p];if(!q){q=function(){n.logError("The button with key "+p+" doesn't have a registered handler")}}return q}function c(q){var p=o.getContextPath()+"/rest/highlighting/1.0/insert-storage-fragment";return e.ajax({type:"POST",contentType:"application/json",url:p,data:JSON.stringify(q)})}function f(p){var q=o.getContextPath()+"/rest/highlighting/1.0/insert-storage-column-table";return e.ajax({type:"POST",contentType:"application/json",url:q,data:JSON.stringify(p)})}function k(s,r){var q={};var p=r?new Date(r).getTime():null;q.pageId=s.pageId;q.selectedText=s.selectedText;q.index=s.index;q.numMatches=s.numMatches;q.lastFetchTime=p||e('meta[name="confluence-request-time"]').attr("content");return q}function j(r,q,t,s){var p=k(t,s);p.tableColumnIndex=q;p.cellModifications=r;return p}function h(p,s,r){var q=k(s,r);q.xmlModification=p[0].xmlInsertion;return q}function i(p,r){var q=k(r);q.xmlModification=p;return q}function m(){if(window.getSelection){window.getSelection().empty&&window.getSelection().empty();window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges()}else{window.document.selection&&window.document.selection.empty()}}return{registerButtonHandler:a,getButtonHandler:l,insertContentAtSelectionEnd:c,insertContentsInTableColumnCells:f,createTableInsertionBean:j,createInsertionBean:h,createXMLModificationBean:i,clearTextSelection:m,WORKING_AREA:b}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-highlight-actions/js/highlight-actions","Confluence.HighlightAction");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/highlight-panel.js' */
define("confluence-highlight-actions/js/highlight-panel",["ajs","confluence/meta","skate","jquery","confluence/legacy","confluence-highlight-actions/js/highlight-ranger-helper","confluence-highlight-actions/js/doctheme-utils","confluence-highlight-actions/js/highlight-analytics","confluence-highlight-actions/js/scrolling-inline-dialog","confluence-highlight-actions/js/highlight-actions"],function(h,k,r,d,i,q,l,e,w,u){var n=d("<div>").attr("id","action-dialog-target");var a;var m="selection-action-panel";var x;var f;var t=function(y){var z=i.getContextPath()+"/rest/highlighting/1.0/panel-items?pageId="+y;var A=d.ajax({url:z,cache:false,success:function(B){if(B.length){v(B)}}});g(A)};function p(){var z=d("#confluence-ui").length===0;if(z){var y=k.get("page-id");if(y){t(y)}}var A="spa-highlight-actions-placeholder";r(A,{type:r.types.CLASS,attributes:{"data-content-id":{created:function(B,C){if(C.newValue){t(C.newValue)}else{h.debug("content-id value is not defined.")}}}}})}var c=function(){return d(".wiki-content, [data-highlight-actions-target=true]").first()};function v(D){var G=s();var y=29;var H=false;var J=D.length*y;var I=i.HighlightPanel.Templates.panelContent({webItems:D});var F=false;var A=function(L,K,M){if(!F){L.append(I);L.find(".aui-button").tooltip({gravity:"s"});o(L.parent());L.find("button").click(function(Q){var O=d(this).attr("data-key");var R=u.getButtonHandler(O);H=true;a.hide();var P=q.getRangeOption(x);if(d.trim(P.text)!==""){var N=c();P.searchText=q.computeSearchTextObject(N,x)}R.onClick(P)})}M();F=true;return false};var E=function(K){var L=false;K.find("button").each(function(M){var O=d(this);var N=O.attr("data-key");var Q=u.getButtonHandler(N);var P=false;if(Q&&Q.shouldDisplay){P=Q.shouldDisplay(x)}O.css("display",P?"inline-block":"none");L=L||P});if(!L){a.hide()}else{K.find(".contents").width("auto")}};var z=function(){e.sendAnalyticsForOpeningHighlightOptionPanel();E(this.popup);G.bindHideEvents();n.show()};var C=function(){G.unbindHideEvents();n.hide()};var B={centerOnHighlight:true,onTop:true,fadeTime:0,width:J,persistent:true,initCallback:z,hideCallback:C};a=w(n,m,A,B)}function o(y){y.children().attr("unselectable","on").on("selectstart",false)}function g(B){var y;var A=0;var z=300;d(document).on("mouseup",function(C){B.done(function(E){if(!(E&&E.length>0)){return}var D=d(C.target);if(D.closest(".aui-inline-dialog").length!==0){return}setTimeout(function(){clearTimeout(y);var F=z;if(d(a[0]).is(":visible")){F=A}y=setTimeout(function(){j()},F)},A)})});B.done(function(){h.bind("quickedit.success",function(){a.hide()})})}function j(){x=q.getUserSelectionRange();var y=function(D){return d.trim(D.toString())!==""};if(x&&x.endOffset!==undefined){x.originalEndOffset=x.endOffset}var C=window.Confluence&&window.Confluence.HighlightAction?window.Confluence.HighlightAction.getButtonHandler("com.atlassian.confluence.plugins.confluence-inline-comments:create-inline-comment"):null;var B=C&&typeof C.shouldDisplay==="function"?C.shouldDisplay(x):false;if(!B||!x||!y(x)){a.hide();return}var A=q.getSelectionRects(x);if(!A){return}var z=b(A);if(z||!d(a[0]).is(":visible")){d(a[0]).hide();a.show()}}function s(){var B=function(){D();A()};var E=function(){y();G()};var z=false;var F=m+".inline-dialog-check";var D=function(){if(!z){d("body").bind("click."+F,function(I){var H=d(I.target);if(H.closest("#inline-dialog-"+m+" .contents").length===0){if(!x){a.hide()}}});z=true}};var y=function(){if(z){d("body").unbind("click."+F)}z=false};var C=function(H){if(H.keyCode===27){a.hide()}};var A=function(){d(document).on("keydown",C)};var G=function(){d(document).off("keydown",C)};return{bindHideEvents:B,unbindHideEvents:E}}function b(z){l.appendAbsolutePositionedElement(n);var y=false;if(!f||z.first.top!=f.first.top||z.first.height!=f.first.height||z.first.left!=f.first.left||z.first.width!=f.first.width){n.css({top:z.first.top,height:z.first.height,left:z.first.left,width:z.first.width});f=z;y=true}return y}return{init:p}});require("confluence/module-exporter").safeRequire("confluence-highlight-actions/js/highlight-panel",function(a){a.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/quote-in-comment.js' */
define("confluence-highlight-actions/js/quote-in-comment",["ajs","jquery","confluence-highlight-actions/js/highlight-analytics","confluence-highlight-actions/js/highlight-actions"],function(j,e,h,f){var a=true;var i=false;function b(n){var m=n.getBody().createTextRange();m.moveToElementText(n.getBody());m.collapse(false);m.select()}function d(){var m=40;var n=e("#rte-toolbar").offset().top;e(document).scrollTop(n-m)}function l(n,o){var p="<p><br/></p>";if(e.browser.msie&&!i){b(n);p="<p></p>"}var m="<blockquote><p>"+o.html+"</p></blockquote>"+p;n.execCommand("mceInsertContent",false,m);i=false}function k(m){f.clearTextSelection();setTimeout(function(){var n=j&&j.Rte&&j.Rte.getEditor&&j.Rte.getEditor();if(n){h.sendAnalyticsForQuoteInComment();d();l(n,m)}else{h.sendAnalyticsForQuoteInComment(a);i=true;var o=function(){l(j.Rte.getEditor(),m);j.unbind("quickedit.visible",o)};j.bind("quickedit.visible",o);c(g(m.containingElement))}},0)}function g(m){var n=e(m).closest("div.comment");return n}function c(m){if(!m.length>0){e(".quick-comment-prompt").click()}else{m.find(".comment-actions .action-reply-comment").click()}}return{actionCallback:k}});require("confluence/module-exporter").safeRequire("confluence-highlight-actions/js/quote-in-comment",function(b){var c="com.atlassian.confluence.plugins.confluence-highlight-actions:quote-comment";var a=require("confluence-highlight-actions/js/highlight-actions");a.registerButtonHandler(c,{onClick:b.actionCallback,shouldDisplay:a.WORKING_AREA.MAINCONTENT_AND_COMMENT})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/highlight-test-helper.js' */
define("confluence-highlight-actions/js/highlight-test-helper",["ajs","window","confluence-highlight-actions/js/highlight-actions"],function(a,b,c){function d(){c.registerButtonHandler("com.atlassian.confluence.plugins.confluence-highlight-actions-test:create-JIRA-issue",{onClick:function(f){var e=new a.Dialog({id:"hilightext-action-dialog",closeOnOutsideClick:true});e.addHeader(f.text);e.show()},shouldDisplay:function(){return true}});c.registerButtonHandler("com.atlassian.confluence.plugins.confluence-highlight-actions-test:append-xxx",{onClick:function(f){var e=c.createXMLModificationBean("<span>XXX</span>",f.searchText);c.insertContentAtSelectionEnd(e).done(function(h){if(h){b.location.reload()}else{var g=new a.Dialog({id:"hilightext-append-xxx-dialog",closeOnOutsideClick:true});g.addHeader("Cannot insert");g.show()}})},shouldDisplay:function(){return true}});c.registerButtonHandler("com.atlassian.confluence.plugins.confluence-highlight-actions-test:insert-table-content",{onClick:function(j){var h=[];for(var g=0;g<3;g++){var k={};k.rowIndex=g;k.xmlInsertion="Insert content";h.push(k)}var f=0;var e=c.createTableInsertionBean(h,f,j.searchText);c.insertContentsInTableColumnCells(e).done(function(l){if(l){b.location.reload()}else{var i=new a.Dialog({id:"hilightext-insert-table-content-dialog",closeOnOutsideClick:true});i.addHeader("Cannot insert");i.show()}})},shouldDisplay:function(){return true}})}return d});require("confluence/module-exporter").safeRequire("confluence-highlight-actions/js/highlight-test-helper",function(a){a()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/soy/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.HighlightPanel.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.HighlightPanel == 'undefined') { Confluence.HighlightPanel = {}; }
if (typeof Confluence.HighlightPanel.Templates == 'undefined') { Confluence.HighlightPanel.Templates = {}; }


Confluence.HighlightPanel.Templates.panelContent = function(opt_data, opt_ignored) {
  var output = '';
  var webItemList3 = opt_data.webItems;
  var webItemListLen3 = webItemList3.length;
  for (var webItemIndex3 = 0; webItemIndex3 < webItemListLen3; webItemIndex3++) {
    var webItemData3 = webItemList3[webItemIndex3];
    output += (webItemData3['key'] == 'com.atlassian.confluence.plugins.confluence-inline-comments:create-inline-comment') ? '<button data-key="' + soy.$$escapeHtml(webItemData3.key) + '" class="aui-button aui-button-compact aui-button-subtle" style="height: 2.4em;" title="' + soy.$$escapeHtml(webItemData3.tooltip) + '"><span class="aui-icon aui-icon-small ' + soy.$$escapeHtml(webItemData3.styleClass) + '"/><span style="font-size: 15px; margin-left: 4px;">' + soy.$$escapeHtml(webItemData3.label) + '</span></button>' : (webItemData3['key'] == 'com.atlassian.confluence.plugins.confluence-jira-content:create-JIRA-issue-summary') ? '<button data-key="' + soy.$$escapeHtml(webItemData3.key) + '" class="aui-button aui-button-compact aui-button-subtle" style="height: 2.4em;" title="' + soy.$$escapeHtml(webItemData3.tooltip) + '"><span class="aui-icon aui-icon-small ' + soy.$$escapeHtml(webItemData3.styleClass) + '"/><span style="font-size: 15px; margin-left: 4px;">' + soy.$$escapeHtml(webItemData3.label) + '</span></button>' : '<button data-key="' + soy.$$escapeHtml(webItemData3.key) + '" class="aui-button aui-button-compact aui-button-subtle" title="' + soy.$$escapeHtml(webItemData3.label) + '"><span class="aui-icon aui-icon-small ' + soy.$$escapeHtml(webItemData3.styleClass) + '"/></button>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.HighlightPanel.Templates.panelContent.soyTemplateName = 'Confluence.HighlightPanel.Templates.panelContent';
}

}catch(e){WRMCB(e)};