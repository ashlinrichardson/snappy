(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"7pVy":function(e,a,i){"use strict";var t=i("ERkP"),o=i.n(t),n=i("7nmT"),r=i.n(n),d=i("COIo");const s=i("KsTJ").default.img`
  position: absolute;
  left: 50%;
  top: 50%;
  object-fit: contain;
`;i.d(a,"a",(function(){return c}));class c extends t.Component{constructor(e){super(e),this.onImageLoad=e=>{if(!this.imageRef||!this.imageRef.current)return;const{onImageLoad:a}=this.props;this.setState({isImageLoaded:!0,imgWidth:this.imageRef.current.naturalWidth,imgHeight:this.imageRef.current.naturalHeight}),a&&a(e.currentTarget)},this.imageRef=o.a.createRef(),this.state={isImageLoaded:!1,imgWidth:0,imgHeight:0,parentWidth:1/0,parentHeight:1/0}}componentDidMount(){const e=r.a.findDOMNode(this).parentElement;if(!e)return;const{width:a,height:i}=e.getBoundingClientRect();this.setState({parentWidth:a,parentHeight:i})}render(){const{crop:e,stretch:a,dataURI:i,previewOrientation:t,crossOrigin:n,onImageError:r,alt:c}=this.props,{parentWidth:l,parentHeight:f,imgWidth:u,imgHeight:g,isImageLoaded:h}=this.state,p=l/f;let _=u/g,m="100%";const w=e,b=!e,v=Object(d.b)(t||1);v&&(_=1/_,m=Math.ceil(100*_)+"%");const M=_>p;v&&(b&&M||w&&!M)&&(m=Math.ceil(1/_*100)+"%");const y=h||b&&!v,k={transform:"translate(-50%, -50%)"};if(a?b&&M?k.width=m:b&&!M||w&&M?k.height=m:w&&!M&&(k.width=m):b?(k.maxWidth=m,k.maxHeight=m):w&&M?k.maxHeight=m:w&&!M&&(k.maxWidth=m),y||(k.display="none"),t&&t>1){const e=Object(d.a)(t);k.transform+=" "+e}return o.a.createElement(s,{"data-testid":"media-image",draggable:!1,alt:c,style:k,onLoad:this.onImageLoad,onError:r,innerRef:this.imageRef,src:i,crossOrigin:n})}}c.defaultProps={crop:!0,stretch:!1}},COIo:function(e,a,i){"use strict";i.d(a,"b",(function(){return o})),i.d(a,"a",(function(){return n}));const t={1:"none",2:"rotateY(180deg)",3:"rotate(180deg)",4:"rotate(180deg) rotateY(180deg)",5:"rotate(270deg) rotateY(180deg)",6:"rotate(90deg)",7:"rotate(90deg) rotateY(180deg)",8:"rotate(270deg)"},o=e=>e>=5,n=e=>t[e]},QxUR:function(e,a,i){"use strict";i.d(a,"a",(function(){return o}));var t=i("L21V");const o=Object(t.g)({retry:{id:"fabric.media.retry",defaultMessage:"Retry",description:"Allows user to perform an action again"},failed_to_load:{id:"fabric.media.failed_to_load",defaultMessage:"Failed to load",description:"We show this message when we have an error loading a file"},recent_uploads:{id:"fabric.media.recent_uploads",defaultMessage:"Recent uploads",description:"Title of a section where we show the user recent uploaded files"},upload_file:{id:"fabric.media.upload_file",defaultMessage:"Upload a file",description:"Call to action that initiates the upload of a file"},drag_and_drop_your_files:{id:"fabric.media.drag_and_drop_your_files",defaultMessage:"Drag and drop your files anywhere or",description:"Used to describe the area where the user can drag and drop files to upload"},drag_and_drop_your_files_and_folders:{id:"fabric.media.drag_and_drop_your_files",defaultMessage:"Drag and drop your files and folders anywhere or",description:"Used to describe the area where the user can drag and drop files AND folders to upload"},drop_your_files:{id:"fabric.media.drop_your_files",defaultMessage:"Drop your files to upload",description:"Indicates that the files will be uploaded when the user drops them in the drag and drop area"},upload:{id:"fabric.media.upload",defaultMessage:"Upload",description:"upload"},cancel:{id:"fabric.media.cancel",defaultMessage:"Cancel",description:"cancel"},search_all_gifs:{id:"fabric.media.search_all_gifs",defaultMessage:"Search all the GIFs!",description:"Used as input placeholder to let the user know that they can search for GIF image files"},cant_retrieve_gifs:{id:"fabric.media.cant_retrieve_gifs",defaultMessage:"Ouch! We could not retrieve any GIFs",description:"Error message when we can not find any GIF images for that text"},cant_retrieve_files:{id:"fabric.media.cant_retrieve_files",defaultMessage:"Ouch! We could not retrieve any files",description:"Error message when we can not find any files in dropbox/google drive"},check_your_network:{id:"fabric.media.check_your_network",defaultMessage:"Check your network connection",description:"Error message when network does not work"},try_again:{id:"fabric.media.try_again",defaultMessage:"Try again",description:"Allow the user to try an action again"},try_another_account:{id:"fabric.media.try_another_account",defaultMessage:"Try another account",description:"Allows the user to try an action again with a different account"},no_gifs_found:{id:"fabric.media.no_gifs_found",defaultMessage:"Hello? Was it me you're looking for?",description:"Not expected error that happens when searching for GIF images"},no_gifs_found_suggestion:{id:"fabric.media.no_gifs_found_suggestion",defaultMessage:'We couldn\'t find anything for "{query}"',description:"There are no results for GIFs matching that query"},load_more_gifs:{id:"fabric.media.load_more_gifs",defaultMessage:"Load more GIFs",description:"Used to load next page of GIF images"},add_account:{id:"fabric.media.add_account",defaultMessage:"Add account",description:"Allows to add a new account"},unlink_account:{id:"fabric.media.unlink_account",defaultMessage:"Unlink Account",description:"Allows to remove a connected account from the user"},upload_file_from:{id:"fabric.media.upload_file_from",defaultMessage:"Upload a file from {name}",description:"Allows to upload a file from different sources"},connect_to:{id:"fabric.media.connect_to",defaultMessage:"Connect to {name}",description:"Allows the user to connect with different types of external services"},connect_account_description:{id:"fabric.media.connect_account_description",defaultMessage:"We'll open a new page to help you connect your {name} account",description:"Explains what will happen when the users connects to a new account"},connect_link_account:{id:"fabric.media.connect_link_account",defaultMessage:"Connect to preview",description:"Shown when a user does not have access to a link, but can connect their external account to view the link."},connect_link_account_card:{id:"fabric.media.connect_link_account_card_view",defaultMessage:"Connect",description:"Shown when a user does not have access to a link, but can connect their external account to view the link on card view."},connect_link_account_card_name:{id:"fabric.media.connect_link_account_card_view_name",defaultMessage:"Connect your {context} account",description:"Shown when a user does not have access to a link, but can connect their external account to view the link on card view. Displayed in title."},connect_link_account_card_description:{id:"fabric.media.connect_link_account_card_view_description",defaultMessage:"To show a preview of this link, connect your {context} account.",description:"Shown when a user does not have access to a link, but can connect their external account to view the link on card view. Displayed in byline."},invalid_permissions:{id:"fabric.media.invalid_permissions",defaultMessage:"Restricted link",description:"Message shown when a user does not have permissions to view an item"},invalid_permissions_description:{id:"fabric.media.invalid_permissions_description",defaultMessage:"You'll need to request access or try a different account to view this preview.",description:"Message shown when a user does not have permissions to view an item. Displayed as description."},upload_an_avatar:{id:"fabric.media.upload_an_avatar",defaultMessage:"Upload an avatar",description:"Indicates that the user can upload a new avatar"},loading:{id:"fabric.media.loading",defaultMessage:"Loading...",description:"Indicates an element on a page is loading."},save:{id:"fabric.media.save",defaultMessage:"Save",description:'Just the "save" word'},or:{id:"fabric.media.or",defaultMessage:"or",description:'Just the "or" word'},upload_photo:{id:"fabric.media.upload_photo",defaultMessage:"Upload a photo",description:"Call to action for the user to upload a new photo"},default_avatars:{id:"fabric.media.default_avatars",defaultMessage:"Default avatars",description:"Showed above the default avatar list"},drag_and_drop_images_here:{id:"fabric.media.drag_and_drop_images_here",defaultMessage:"Drag and drop your images here",description:"Indicates that the user can drag and drop images in that area"},upload_image:{id:"fabric.media.upload_image",defaultMessage:"Upload image",description:"Call to action for the user to upload a new image"},image_url_invalid_error:{id:"fabric.media.image_url_invalid_error",defaultMessage:"Could not load image, the url is invalid.",description:"There was an error parsing the image url"},image_format_invalid_error:{id:"fabric.media.image_format_invalid_error",defaultMessage:"Could not load image, the format is invalid.",description:"The provided image format is not valid"},image_size_too_large_error:{id:"fabric.media.image_size_too_large_error",defaultMessage:"Image is too large, must be no larger than {MAX_SIZE_MB}Mb",description:"The provided image size is too big"},something_went_wrong:{id:"fabric.media.something_went_wrong",defaultMessage:"Something went wrong.",description:"Showed when an error happen but we dont have more info about it"},might_be_a_hiccup:{id:"fabric.media.might_be_a_hiccup",defaultMessage:"It might just be a hiccup.",description:"Used when an unknow error happens, just in a funny way of saying that we dont have more info about it"},couldnt_generate_preview:{id:"fabric.media.couldnt_generate_preview",defaultMessage:"We couldn't generate a preview for this file.",description:"Error case for when the backend cant generate a preview for that file"},couldnt_generate_encrypted_entry_preview:{id:"fabric.media.couldnt_generate_encrypted_entry_preview",defaultMessage:"We can't preview encrypted or password protected files.",description:"Error case for when an entry selected is encrypted"},cant_preview_file_type:{id:"fabric.media.cant_preview_file_type",defaultMessage:"We can't preview this file type.",description:"Error case for when we have no available preview for that file"},item_not_found_in_list:{id:"fabric.media.item_not_found_in_list",defaultMessage:"The selected item was not found on the list.",description:"Error case for when a provided item is not found within the list of items"},not_found_title:{id:"fabric.media.not_found_title",defaultMessage:"Uh oh. We can't find this link!",description:"Error case for when a provided link is not found"},not_found_description:{id:"fabric.media.not_found_description",defaultMessage:"We couldn't find the link. Check the url and try editing or paste again.",description:"Error case for when a provided item is not found within the list of items"},no_pdf_artifacts:{id:"fabric.media.no_pdf_artifacts",defaultMessage:"No PDF artifacts found for this file.",description:"Error case for when we cant preview a PDF file"},give_feedback:{id:"fabric.media.give_feedback",defaultMessage:"Give feedback",description:"Call to action that opens a popup to get feedback from the users"},try_downloading_file:{id:"fabric.media.try_downloading_file",defaultMessage:"Try downloading the file to view it.",description:"We show this message to allow users to download a file"},webgl_warning_description:{id:"fabric.media.webgl_warning_description",defaultMessage:"Your browser does not support WebGL. Use a WebGL enabled browser to annotate images.",description:"We show this error message when the browser doesnt support this feature"},unable_to_annotate_image:{id:"fabric.media.unable_to_annotate_image",defaultMessage:"You're unable to annotate this image",description:"If there is an error trying to annotate an image we show this"},learn_more:{id:"fabric.media.learn_more",defaultMessage:"Learn More",description:""},accounts:{id:"fabric.media.accounts",defaultMessage:"Accounts",description:""},actions:{id:"fabric.media.actions",defaultMessage:"Actions",description:""},error_hint_retry:{id:"fabric.media.error_hint_retry",defaultMessage:"Try again and we'll give it another shot.",description:"Generic message that we show if an action failed"},error_hint_critical:{id:"fabric.media.error_hint_critical",defaultMessage:"If the problem keeps happening contact support.",description:"We show this error message if we cant recover from the action"},close:{id:"fabric.media.close",defaultMessage:"Close",description:""},could_not_load_editor:{id:"fabric.media.could_not_load_editor",defaultMessage:"Ouch! We could not load the editor",description:"Error message to communicate that we cant load the editor"},could_not_save_image:{id:"fabric.media.could_not_save_image",defaultMessage:"Ouch! We could not save the image",description:"Error message to communicate that we cant save an image"},could_not_load_link:{id:"fabric.media.couldnt_load_link",defaultMessage:"We couldn't load this link for an unknown reason.",description:"Error case for card view - link could not be loaded."},annotate:{id:"fabric.media.annotate",defaultMessage:"Annotate",description:""},annotate_tool_arrow:{id:"fabric.media.annotate.tool.arrow",defaultMessage:"Arrow",description:""},annotate_tool_text:{id:"fabric.media.annotate.tool.text",defaultMessage:"Text",description:""},annotate_tool_shape:{id:"fabric.media.annotate.tool.shape",defaultMessage:"Shape",description:""},annotate_tool_brush:{id:"fabric.media.annotate.tool.brush",defaultMessage:"Brush",description:""},annotate_tool_blur:{id:"fabric.media.annotate.tool.blur",defaultMessage:"Blur",description:""},annotate_tool_line_thickness:{id:"fabric.media.annotate.tool.line.thickness",defaultMessage:"Line thickness",description:""},annotate_tool_color:{id:"fabric.media.annotate.tool.color",defaultMessage:"Color",description:""},annotate_confirmation_close_anyway:{id:"fabric.media.annotate.confirmation.close.anyway",defaultMessage:"Close anyway",description:""},annotate_confirmation_heading:{id:"fabric.media.annotate.confirmation.heading",defaultMessage:"Unsaved changes",description:""},annotate_confirmation_content:{id:"fabric.media.annotate.confirmation.content",defaultMessage:"You have some unsaved changes. Are you sure you want to leave?",description:""},drop_your_files_here:{id:"fabric.media.drop_your_files_here",defaultMessage:"Drop your files here",description:"Info message that we show to indicate that the user can drag and drop files"},share_files_instantly:{id:"fabric.media.share_files_instantly",defaultMessage:"We'll share them instantly",description:"It means that we will upload the files you drag and drop automatically"},insert_files:{id:"fabric.media.insert_files",defaultMessage:"Insert {0, plural, one {a file} other {{0} files}}",description:"Showed when the user selects 1 or more files to insert"},zoom_out:{id:"fabric.media.zoom_out",defaultMessage:"zoom out",description:"Indicates the user can zoom out a file"},zoom_in:{id:"fabric.media.zoom_in",defaultMessage:"zoom in",description:"Indicates the user can zoom in a file"},remove_image:{id:"fabric.media.remove_image",defaultMessage:"Remove image",description:"Allows the user to remove a file"},play:{id:"fabric.media.play",defaultMessage:"play",description:""},pause:{id:"fabric.media.pause",defaultMessage:"pause",description:""},disable_fullscreen:{id:"fabric.media.disable_fullscreen",defaultMessage:"disable fullscreen",description:"Hint to let the user know they can disable the fullscreen mode"},enable_fullscreen:{id:"fabric.media.enable_fullscreen",defaultMessage:"enable fullscreen",description:"Hint to let the user know they can enable the fullscreen mode"},error_loading_file:{id:"fabric.media.error_loading_file",defaultMessage:"Error loading file",description:"Message showed when we had an error trying to load the file"},error_generating_preview:{id:"fabric.media.error_generating_preview",defaultMessage:"Error generating preview",description:"Message showed when we had an error trying generate a preview for a file"},download:{id:"fabric.media.download",defaultMessage:"Download",description:""},unknown:{id:"fabric.media.unknown",defaultMessage:"unknown",description:""},document:{id:"fabric.media.document",defaultMessage:"document",description:""},audio:{id:"fabric.media.audio",defaultMessage:"audio",description:""},video:{id:"fabric.media.video",defaultMessage:"video",description:""},image:{id:"fabric.media.image",defaultMessage:"image",description:""},archive:{id:"fabric.media.archive",defaultMessage:"archive",description:""},search:{id:"fabric.media.image",defaultMessage:"search",description:""},view:{id:"fabric.media.view",defaultMessage:"View",description:"Go through to a piece of content to view it in its original context."},viewIn:{id:"fabric.media.srclink",defaultMessage:"View in",description:"We have a link in our preview modals to the original document. This text goes before the provider name"},viewOriginal:{id:"fabric.media.srclinkunknown",defaultMessage:"View Original",description:"We have a link in our preview modals to the original document. This is for when we don't know the provider name"},preview:{id:"fabric.media.preview",defaultMessage:"Preview",description:"Click to view a richer view of your content, without needing to navigate to it."}})},nVfX:function(e,a,i){"use strict";i.d(a,"a",(function(){return s}));var t=i("ERkP"),o=i.n(t),n=i("KsTJ"),r=i("uPah");const d=n.default.div`
  ${({inline:e})=>e?"display: inline;":""};
`;d.displayName="Ellipsify";const s=({text:e,lines:a,endLength:i,inline:t,testId:n})=>o.a.createElement(d,{className:"ellipsed-text",innerRef:c({lines:a,endLength:i}),"aria-label":e,inline:t,"data-testid":n},e),c=e=>a=>{if(!a)return;const i=e.lines,t=a.getBoundingClientRect().height,o=a.textContent;a.textContent="a";const n=a.getBoundingClientRect().height,r=t/n,d=n*i;if(r<=i)return void(a.textContent=o);let s=o;const c="number"==typeof e.endLength&&e.endLength>=0?e.endLength:8,f=o.substr(0,o.length*i/r-c),u=o.substr(o.length-c,c);a.textContent=s=`${f}...${u}`;if(a.getBoundingClientRect().height>d){const e=f.substr(0,f.length-f.length/i*.25);s=`${e}...${u}`}l(()=>a.textContent=s)},l=r.canUseDOM&&window.requestAnimationFrame?window.requestAnimationFrame:e=>setTimeout(e,1)}}]);
//# sourceMappingURL=37.HAJbKWWZHS.js.map