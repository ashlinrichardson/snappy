WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:editor-autocomplete-date-conf-frontend', location = '/js/editor-plugin/date-autocomplete-help-dialog.js' */
AJS.toInit(function(){if(!(Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.Autoformat)){return}Confluence.KeyboardShortcuts.Autoformat.push({action:"//",context:"autoformat.autocomplete",description:"Date"})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:editor-autocomplete-date-conf-frontend', location = '/js/editor-plugin/autocomplete-manager.js' */
(function(d){var f=window.Confluence||{};var e="confluence.date-autocomplete-manager.plugin";f.Editor=f.Editor||{};f.Editor.AutoComplete=f.Editor.AutoComplete||{};var b=f.InlineTasks.Util.KEY,a=f.InlineTasks.DateUtil,c=f.Editor.AutoComplete;c.SETTING_DEFAULT={leadingChar:"",isDataValid:function(g){return false},backWords:0,onBeforeDie:function(){},onAfterStart:function(){},onScroll:function(){}};c.Manager=function(g){this.ed=AJS.Rte.getEditor();this.settings=d.extend({},c.SETTING_DEFAULT,g);this.log=AJS.debug;this.control=null};c.Manager.prototype={start:function(g){AJS.trigger("synchrony.stop",{id:e});this.log("startAutoComplete - Started");var h=d.extend({},this.settings,g);this.control=f.Editor.Autocompleter.Control(this.ed,h);if(!this.control){return false}this.attachEventsToControl();h.onAfterStart&&h.onAfterStart({date:g.date,isTriggerFromOrphan:g.isTriggerFromOrphan?true:false});return true},attachEventsToControl:function(){var j=this,m=j.control,i=j.log,h=j.settings;if(typeof this.settings.onBeforeDie==="function"){var l=this.control.die;this.control.die=function(){j.settings.onBeforeDie.apply(j.control,arguments);if(j.dateInserted()){l.apply(j.control,[true]);AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.daterecognition.killed"})}else{l.apply(j.control,arguments)}}}var g=_.bind(_.throttle(j.settings.onScroll,40),this);var k={onBeforeKey:function(n,o){if(n.keyCode!==b.ESCAPE&&n.keyCode!==b.ENTER){j.control&&j.control.getContainer().addClass("isDirty")}if(n.keyCode===b.DOWN||n.keyCode===b.UP||n.keyCode===b.ENTER){tinymce.dom.Event.cancel(n);return false}if(n.keyCode===b.ESCAPE||n.keyCode===b.TAB||n.keyCode===b.BACKSPACE&&!o){i("autoCompleteControl.onBeforeKey - killing autoCompleteControl");this.die(n.keyCode===b.BACKSPACE);return false}return true},onKeyPress:function(q,r){var o=AJS.$.browser.msie?q.keyCode:q.which;if(q.keyCode===b.ENTER){tinymce.dom.Event.cancel(q);return false}var p=String.fromCharCode(o),n=AJS.indexOf(this.settings.endChars,p);if(n>=0){i("autoCompleteControl.onKeyPress - caught autocomplete-closing char - character");m.die()}return true},onAfterKey:function(p,q){var o=d("#autocomplete-trigger",j.control.getContainer()),n=o.text();if(o.length>0&&n!==j.settings.leadingChar){i("after","dying because of: trigger text is modified");j.reset();return false}if(p.keyCode===b.ENTER){if(h.isDataValid(q)){m.update(q)}else{i("autoCompleteControl.onAfterKey - closing autocomplete due to invalid data - "+q);m.die(false)}return false}if(j.dateInserted()&&(q.length>10)&&(!a.parse(q,[a.PATTERN_INSERTING,a.PATTERN_INSERTING_ALTERNATE]))){j.reset();return false}if(p.keyCode===b.SPACE){j.reset();return false}return true},onDeath:function(){j.reset()},onScroll:function(){if(!j.isAlive()){return}g()}};d.extend(m,k)},isAlive:function(){return this.control&&!this.control.dying},reset:function(){if(!this.control){return}this.control.die();this.control=null;AJS.trigger("synchrony.start",{id:e})},dateInserted:function(g){if(g===true){return this.control.getContainer().addClass("hasDateInserted")}else{if(g===false){return this.control.getContainer().removeClass("hasDateInserted")}else{return this.control.getContainer().hasClass("hasDateInserted")}}},dirty:function(g){if(g===true){return this.control.getContainer().addClass("isDirty")}else{return this.control.getContainer().hasClass("isDirty")}},reattach:function(){var g=f.Editor.Autocompleter.Control.removeOrphanedControl();if(g&&g.leadingChar===this.settings.leadingChar){this.reset();return this.start({backWords:1,isTriggerFromOrphan:true})}return false}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:editor-autocomplete-date-conf-frontend', location = '/js/editor-plugin/date-autocomplete.js' */
(function(h,e){var r="dateautocomplete",m="tinymce.plugins.DateAutocomplete",p="mceConfInsertDateAutocomplete",k="//";var q="confluence.date-autocomplete.plugin";var t=Confluence.InlineTasks.Util,n=t.NODE_TYPE,d=t.KEY,a=Confluence.InlineTasks.DateUtil,g=null,o=null,b=false,i=e.dom.TreeWalker;var j={initDateAutoCompleteObject:function(u){if(!Confluence.Editor.Autocompleter){Confluence.Editor.Autocompleter=e.confluence.Autocompleter}Confluence.Editor.Autocompleter.Settings[k]={ch:k,endChars:[],update:function(y,x){o.picker.die();var w=(x==a.PATTERN_INSERTING.toLowerCase())?moment():a.guessPartialDate(x,a.PATTERN_INSERTING);w&&a.insertDateIntoCurrentCursor(w,"<time>","",a.PATTERN_LOZENGE,"&nbsp;");if(o.dateInserted()){AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.daterecognition.used"})}o.reset();u.undoManager.add();AJS.trigger("synchrony.start",{id:q})}};var v={leadingChar:k,isDataValid:function(w){return !o.dirty()||a.guessPartialDate(w,a.PATTERN_INSERTING)!=null},onBeforeDie:function(){o.picker&&o.picker.die();if(o.control){var w=h(o.control.getContainer());if(!o.dirty()){w.find("#autocomplete-search-text").remove()}}},onAfterStart:function(x){if(x&&x.date){j.fillPlaceholderDateAutoComplete(u,x.date,true);o.dirty(true);o.dateInserted(true)}else{if(x&&!x.isTriggerFromOrphan){j.fillPlaceholderDateAutoComplete(u,a.PATTERN_INSERTING.toLowerCase(),false);o.dateInserted(false)}}var w=o.control.text();var y=a.guessPartialDate(w,a.PATTERN_INSERTING)||moment();j.bindDatePickerToAutoComplete(y)},onScroll:function(){o.picker&&o.picker.placeDatePicker()}};o=new Confluence.Editor.AutoComplete.Manager(v)},activateDateAutocomplete:function(w,v){if(!o.isAlive()){var u=o.start(v);if(!u){g.execCommand("mceInsertContent",false,k,{skip_undo:true});return false}}},bindDatePickerToAutoComplete:function(x){var u=o.control&&o.control.getContainer();if(!u.length){return}u.addClass("date-autocomplete");u.find("#autocomplete-search-text span").addClass("inserting");var w=function(y){o.control.update(y.format(a.PATTERN_INSERTING))},v=j.isInsideTaskAndFirstTimeNode(u);o.picker=a.datepicker.create({$attachTo:u,$positionTo:u,startDate:x,onSelect:w,isSetDueDate:v})},fillPlaceholderDateAutoComplete:function(v,y,x){var u=o.control.getContainer().find("#autocomplete-search-text span");u.text(AJS.Rte.HIDDEN_CHAR+y);var w=v.dom.createRng();w.setStart(u[0].firstChild,1);w.setEnd(u[0].firstChild,y.length+1);x&&w.collapse(false);v.selection.setRng(w)},autocompleteDoubleSlash:function(z,y){var w=y.handlerManager,v=y.ed,x=y.createHandler;var u=x(/(?:\s|\xA0|^|\ufeff|\u200b)(\/)$/,function(){v.execCommand(p,false,{},{skip_undo:true})},true,"#autocomplete");w.registerHandler("/".charCodeAt(0),u)},registerTriggerDoubleSlash:function(u){u.addCommand(p,j.activateDateAutocomplete);AJS.bind("confluence.editor.registerHandlers",this.autocompleteDoubleSlash)},isTimeNode:function(u){return u&&u.nodeType===n.ELEMENT_NODE&&u.tagName.toLowerCase()==="time"},getTimeNodeAtCursor:function(u){if(!u){u=g}var v=u.selection.getNode();if(j.isTimeNode(v)){return v}v=u.selection.getStart();if(j.isTimeNode(v)){return v}v=u.selection.getEnd();if(j.isTimeNode(v)){return v}},makeTimeNodesUnEditable:function(u){u.each(function(){var v=h(this);if(h.trim(v.text())===""){v.remove()}e.isWebKit&&v.remove("br.Apple-interchange-newline");t.addContentEditableIfApplicable(this)})},wrapTimeNodesWithHiddenChar:function(u){u.each(function(){var v=h(this);if(!this.previousSibling||this.previousSibling.nodeType!==n.TEXT_NODE||this.previousSibling.nodeValue===""){v.before(AJS.Rte.HIDDEN_CHAR)}if(!this.nextSibling||this.nextSibling.nodeType!==n.TEXT_NODE||this.previousSibling.nodeValue===""){v.after(AJS.Rte.HIDDEN_CHAR)}})},putCursorAtEdge:function(v,x,u){u=!!u;if(u){if(!x.nextSibling||x.nextSibling.nodeType!==n.TEXT_NODE){h(x).after(v.dom.doc.createTextNode(""))}}else{if(!x.previousSibling||x.previousSibling.nodeType!==n.TEXT_NODE){h(x).before(v.dom.doc.createTextNode(""))}}var w=v.selection.dom.createRng();w.selectNode(u?x.nextSibling:x.previousSibling);w.collapse(u);v.selection.setRng(w)},findFirstTimeNodeInClosestBlock:function(v,A,x){var z=new i(A,v.getBody());var y=A,w=0;do{if(w==1&&j.isTimeNode(A)){return A}var u=x?A.previousSibling:A.nextSibling;if(A!==y&&u&&(v.dom.isBlock(A)||v.dom.isBlock(u))){w++}}while((A=x?z.next():z.prev())&&w<2)},findFirstTimeNodeNearby:function(u,y,v){var x=y;var w=new i(y,u.getBody());do{if(j.isTimeNode(y)){return y}if(u.dom.isBlock(y)||(y!==x&&y.nodeType===n.TEXT_NODE&&y.nodeValue!=="")){return}}while(y=v?w.next():w.prev())},convertInvalidTimeNodeToPlainText:function(u){u.each(function(){var x=h(this);var v=x.attr("datetime");var w=a.parse(v);if(!w){x.before(x.text());x.remove()}})},isInsideTaskAndFirstTimeNode:function(v){var u=h(v),w=u.closest("ul.inline-task-list > li[data-inline-task-id]");if(!w.length){return false}return w.find("time, span.date-autocomplete")[0]===u[0]}};var c={handleRemoveDateLozenge:function(v,B){var A=B.keyCode;if(A!==d.BACKSPACE&&A!==d.DELETE){return}var y=(A===d.DELETE),u=v.selection.getRng(true),w=u.startContainer,x=w;if(w.nodeType==n.TEXT_NODE&&(y?u.startOffset!=w.nodeValue.length:u.startOffset!=0)){return}if(w.nodeType===n.ELEMENT_NODE){if(y){x=(w.childNodes.length===u.startOffset)?w:w.childNodes.item(u.startOffset)}else{x=(u.startOffset===0)?w:w.childNodes.item(u.startOffset-1)}}var z=j.findFirstTimeNodeNearby(v,x,y);z&&v.dom.remove(z)},handleClickingDateLozenge:function(z,C){var w=h(C.target);if(!w.is("time")){return}AJS.trigger("synchrony.stop",{id:q});var u=(w.closest("li[data-inline-task-id]").length)?"task":"page";var x={mode:"editor",context:u};AJS.trigger("analyticsEvent",{name:"confluence-spaces.date.clicked",data:x});var F=w.closest("body");var B=function(){AJS.Rte.unbindScroll("date-lozenge-date-picker");A.die();AJS.trigger("synchrony.start",{id:q})};F.one("keydown click",B);var E=function(H){var I=H.format(a.PATTERN_INSIDE_TIME_ELE);var G=H.format(a.PATTERN_LOZENGE);if(I!==w.attr("datetime")){var J={context:u};AJS.trigger("analyticsEvent",{name:"confluence-spaces.date.changed",data:J})}w.attr("datetime",I);w.text(G);F.unbind("keydown click",B);AJS.trigger("synchrony.start",{id:q})};var v=a.parse(w.attr("datetime")),y=j.isInsideTaskAndFirstTimeNode(w),A=a.datepicker.create({$attachTo:w,$positionTo:w,startDate:v,onSelect:E,isSetDueDate:y});var D=_.bind(_.throttle(function(){if(A&&AJS.Rte.isAnyPartShown(w)){A.placeDatePicker()}else{B()}},40),this);AJS.Rte.bindScroll("date-lozenge-date-picker",D)},handleTypingDate:function(v,x){var w=x.keyCode;if(w===d.UP||w===d.DOWN||w===d.LEFT||w===d.RIGHT||w===d.HOME||w===d.END||w===d.PAGEDOWN||w===d.PAGEUP||x.metaKey||x.ctrlKey||x.altKey){return}if(o.control&&o.picker){var u=o.control.text();o.picker.setDate(u)}},handleOnLoadContent:function(u){var w=h(u.dom.doc),v=w.find("time");j.makeTimeNodesUnEditable(v);j.wrapTimeNodesWithHiddenChar(v)},handlePostPaste:function(v,u,w){j.convertInvalidTimeNodeToPlainText(h(w.node).find("time"))},handlePostPasteContent:function(w,u,x){var v=h(x.node).find("time");j.makeTimeNodesUnEditable(v)},handlePrePasteContent:function(v,u,w){if(j.getTimeNodeAtCursor(g)){w.content="";return false}},fixWhenUpDownNavOnList:function(v,B){var x=B.keyCode;if(x!==d.UP&&x!==d.DOWN){return}var u=v.selection.getRng(true),w=u.startContainer,y=w,z=x===d.DOWN;if(w.nodeType===n.ELEMENT_NODE){if(z){y=(w.childNodes.length===u.startOffset)?w:w.childNodes.item(u.startOffset)}else{y=(u.startOffset===0)?w:w.childNodes.item(u.startOffset-1)}}var A=j.findFirstTimeNodeInClosestBlock(v,y,z);if(A){j.wrapTimeNodesWithHiddenChar(h(A))}},preventCursorInsideDateLozenge:function(v,u,x){var w=(x.nodeType===n.TEXT_NODE)?x.parentNode:x;if(j.isTimeNode(w)){if(b||v.selection.getRng().startOffset>1){j.putCursorAtEdge(v,w,true)}else{j.putCursorAtEdge(v,w,false)}}},handleUndoRedo:function(){o&&o.reattach()}};var f={init:function(u){j.initDateAutoCompleteObject(u);j.registerTriggerDoubleSlash(u);g=u;u.onContextMenu.add(function(){o.reset()});u.onSetContent.add(c.handleOnLoadContent);u.onClick.add(c.handleClickingDateLozenge);u.onKeyUp.add(c.handleTypingDate);if(e.isWebKit){u.onKeyDown.add(c.fixWhenUpDownNavOnList);u.onInit.add(function(){h(document).bind("postPaste",c.handlePostPasteContent)});u.onRemove.add(function(){h(document).unbind("postPaste",c.handlePostPasteContent)})}u.onKeyUp.add(function(A,C){b=(C.keyCode===d.RIGHT);var z=A.selection.getRng(true);var y=z.commonAncestorContainer;var B=!!y&&y.data;if(!!B&&!AJS.$(y).closest("pre,.text-placeholder").length){var D=String.prototype.slice.apply(B,[-11]);if((C.keyCode>=48&&C.keyCode<=57)||(C.keyCode>=96&&C.keyCode<=105)){var v=/(^| )\d{2}[\/\-]\d{2}[\/\-]\d{4}$/;var x=String.prototype.slice.apply(B,[-10]);if(v.test(B)&&a.parse(x,[a.PATTERN_INSERTING,a.PATTERN_INSERTING_ALTERNATE])){var w=z.commonAncestorContainer;z.setStart(w,z.endOffset-x.length);A.undoManager.add();A.undoManager.beforeChange();A.selection.setRng(z);A.execCommand("mceConfInsertDateAutocomplete",false,{date:x},{skip_undo:true});AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.daterecognition.triggered"})}}}});if(e.isGecko){u.onKeyDown.add(c.handleRemoveDateLozenge);u.onInit.add(function(){h(document).bind("prePaste",c.handlePrePasteContent)});u.onRemove.add(function(){h(document).unbind("prePaste",c.handlePrePasteContent)})}if(e.isWebKit||e.isGecko){u.onNodeChange.add(c.preventCursorInsideDateLozenge)}u.onUndo.add(c.handleUndoRedo);u.onRedo.add(c.handleUndoRedo);u.onInit.add(function(){h(document).bind("postPaste",c.handlePostPaste)});u.onRemove.add(function(){h(document).unbind("postPaste",c.handlePostPaste);AJS.unbind("confluence.editor.registerHandlers",j.autocompleteDoubleSlash)});AJS.bind("editor.remote.change",function(){j.makeTimeNodesUnEditable(h(u.dom.doc).find("time"))})},getInfo:function(){return{longname:"Insert Date Autocomplete",author:"Atlassian",authorurl:"http://www.atlassian.com",version:e.majorVersion+"."+e.minorVersion}}};function l(){e.create(m,f);e.PluginManager.add(r,e.plugins.DateAutocomplete);AJS.Rte.BootstrapManager.addTinyMcePluginInit(function(u){u.plugins+=","+r})}var s=/createblogpost\.action|draft-createpage\.action|createpage\.action/;if(AJS.DarkFeatures.isEnabled("fd-87.editor.spa")&&!s.test(window.location.pathname)){AJS.bind("rte-pre-resolveplugins",l)}else{l()}})(AJS.$,tinymce);
}catch(e){WRMCB(e)};