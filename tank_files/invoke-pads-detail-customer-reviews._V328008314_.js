function pa_slot_punt(){return a9_bpx_punt()}function pa_slot_getads(){var a=window.SFClient?window.productAdsUrl:window.top.paCusRevAllURL;return"undefined"==typeof a?pa_slot_punt():void document.write("<script src='"+a+"'></script>")}function pa_slot_render(a,b,c){var d="pa_detail_customer_reviews_frame",e=305,f=255;"undefined"!=typeof c&&null!=c&&(e=c),"undefined"!=typeof b&&null!=b&&(f=b);var g='<iframe id="'+d+'" style="width:'+e+"px;height:"+f+'px"  scrolling="no" frameborder="0" marginheight="0" marginwidth="0"></iframe>';document.open(),document.write(g),document.close();try{var h=document.getElementById(d),i=h.contentDocument||h.contentWindow.document;if(i.open(),i.write(a),i.close(),"undefined"!=typeof window.SFClient){var j=document.createElement("base");j.href=window.parentLocation||"http://www.amazon.com",i.head.appendChild(j)}}catch(k){return pa_slot_punt()}if("undefined"==typeof window.SFClient){for(var l=window;;)try{if("undefined"==typeof l.parent.frameElement||null==l.parent.frameElement||l==l.parent)break;l=l.parent}catch(k){break}"undefined"!=typeof l.frameElement&&null!=l.frameElement&&(l.frameElement.scrolling="no",l.frameElement.height=f,l.frameElement.width=e,l.frameElement.marginHeight=0,l.frameElement.marginWidth=0,l.frameElement.frameBorder=0)}else window.SFClient.changeSize(e+"px",f+"px")}pa_slot_getads();