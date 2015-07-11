var last_tids;
var last_tid;

function a9_render_ad(a9ad) {  
  last_tid = a9ad.tid; 
  var iframe = a9ad.fr;
  if(iframe==null && a9ad.tr == false) { 
  	iframe = "http://cdn-bpx.a9.com/amzn/iframe.html";
  }
  if(iframe=="Trusted" ) { 
  	iframe = null;
  }
  if(iframe!=null) {
     var size = a9ad.s.split("x");
     size = "width=\"" + size[0] + "\" height=\"" + size[1] + "\""; 
     var args = "p="+bpx_pid+";t="+last_tid;
     if(last_tids) args += ";last=" + last_tids;
     //args += "&r="+ Math.round(Math.random()*1000000);
     var html = "<iframe scrolling='no' frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\" "+size+" src=\""+iframe+"#" + args + "\"></iframe>";
     document.write(html);
     
  } else { 
    document.write(a9ad.html);
  }
}


function a9_bpx_punt() { 
  if(last_tids!=null)  last_tids = last_tids + "," +  last_tid;
  else last_tids = last_tid;
  document.write("<script src='http://bpx.a9.com/ads/getad?p="+bpx_pid+"&ltids="+last_tids+"&r=" + Math.round(Math.random()*1000000) +"'></script>");
  document.close();
}



document.write("<script src='http://bpx.a9.com/ads/getad?p="+bpx_pid+"&v=1&r=" + Math.round(Math.random()*1000000) +"'></script>");
document.close();
