/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[14],{438:function(Aa,ua,r){r.r(ua);var pa=r(1),ka=r(0);r.n(ka);var ma=r(2),ha=r(147);Aa=r(51);var da=r(94),aa=r(245),x=r(70),y=r(244);r=r(372);var h=window,e=function(){function f(n,z,w){var ea=-1===n.indexOf("?")?"?":"&";switch(z){case x.a.NEVER_CACHE:this.url=n+ea+"_="+Object(ka.uniqueId)();break;default:this.url=n}this.cf=w;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);this.request.setRequestHeader("X-Requested-With",
"XMLHttpRequest");this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=y.a.NOT_STARTED}f.prototype.start=function(n,z){var w=this,ea=this,ja=this.request,ca;ea.Ww=0;n&&Object.keys(n).forEach(function(ba){w.request.setRequestHeader(ba,n[ba])});z&&(this.request.withCredentials=z);this.TD=setInterval(function(){var ba=0===window.document.URL.indexOf("file:///");ba=200===ja.status||
ba&&0===ja.status;if(ja.readyState!==y.b.DONE||ba){try{ja.responseText}catch(fa){return}ea.Ww<ja.responseText.length&&(ca=ea.Kga())&&ea.trigger(f.Events.DATA,[ca]);0===ja.readyState&&(clearInterval(ea.TD),ea.trigger(f.Events.DONE))}else clearInterval(ea.TD),ea.trigger(f.Events.DONE,["Error received return status "+ja.status])},1E3);this.request.send(null);this.status=y.a.STARTED};f.prototype.Kga=function(){var n=this.request,z=n.responseText;if(0!==z.length)if(this.Ww===z.length)clearInterval(this.TD),
this.trigger(f.Events.DONE);else return z=Math.min(this.Ww+3E6,z.length),n=h.BT(n,this.Ww,!0,z),this.Ww=z,n};f.prototype.abort=function(){clearInterval(this.TD);var n=this;this.request.onreadystatechange=function(){Object(ma.j)("StreamingRequest aborted");n.status=y.a.ABORTED;return n.trigger(f.Events.ABORTED)};this.request.abort()};f.prototype.finish=function(){var n=this;this.request.onreadystatechange=function(){n.status=y.a.SUCCESS;return n.trigger(f.Events.DONE)};this.request.abort()};f.Events=
{DONE:"done",DATA:"data",ABORTED:"aborted"};return f}();Object(Aa.a)(e);var b;(function(f){f[f.LOCAL_HEADER=0]="LOCAL_HEADER";f[f.FILE=1]="FILE";f[f.CENTRAL_DIR=2]="CENTRAL_DIR"})(b||(b={}));var a=function(f){function n(){var z=f.call(this)||this;z.buffer="";z.state=b.LOCAL_HEADER;z.zM=4;z.Ol=null;z.kt=ha.c;z.tn={};return z}Object(pa.c)(n,f);n.prototype.Dga=function(z){var w;for(z=this.buffer+z;z.length>=this.kt;)switch(this.state){case b.LOCAL_HEADER:this.Ol=w=this.Oga(z.slice(0,this.kt));if(w.Rt!==
ha.g)throw Error("Wrong signature in local header: "+w.Rt);z=z.slice(this.kt);this.state=b.FILE;this.kt=w.jH+w.mq+w.Xv+this.zM;this.trigger(n.Events.HEADER,[w]);break;case b.FILE:this.Ol.name=z.slice(0,this.Ol.mq);this.tn[this.Ol.name]=this.Ol;w=this.kt-this.zM;var ea=z.slice(this.Ol.mq+this.Ol.Xv,w);this.trigger(n.Events.FILE,[this.Ol.name,ea,this.Ol.zH]);z=z.slice(w);if(z.slice(0,this.zM)===ha.h)this.state=b.LOCAL_HEADER,this.kt=ha.c;else return this.state=b.CENTRAL_DIR,!0}this.buffer=z;return!1};
n.Events={HEADER:"header",FILE:"file"};return n}(aa.a);Object(Aa.a)(a);Aa=function(f){function n(z,w,ea,ja,ca){ea=f.call(this,z,ea,ja)||this;ea.url=z;ea.stream=new e(z,w);ea.Yd=new a;ea.EW=window.createPromiseCapability();ea.eX={};ea.cf=ca;return ea}Object(pa.c)(n,f);n.prototype.Px=function(z){var w=this;this.request([this.mj,this.Gk,this.lj]);this.stream.addEventListener(e.Events.DATA,function(ea){try{if(w.Yd.Dga(ea))return w.stream.finish()}catch(ja){throw w.stream.abort(),w.Tv(ja),z(ja),ja;}});
this.stream.addEventListener(e.Events.DONE,function(ea){w.gga=!0;w.EW.resolve();ea&&(w.Tv(ea),z(ea))});this.Yd.addEventListener(a.Events.HEADER,Object(ka.bind)(this.dX,this));this.Yd.addEventListener(a.Events.FILE,Object(ka.bind)(this.dha,this));return this.stream.start(this.cf,this.withCredentials)};n.prototype.yT=function(z){var w=this;this.EW.promise.then(function(){z(Object.keys(w.Yd.tn))})};n.prototype.co=function(){return!0};n.prototype.request=function(z){var w=this;this.gga&&z.forEach(function(ea){w.eX[ea]||
w.Lla(ea)})};n.prototype.dX=function(){};n.prototype.abort=function(){this.stream&&this.stream.abort()};n.prototype.Lla=function(z){this.trigger(da.a.Events.PART_READY,[{Ya:z,error:"Requested part not found",zi:!1,Tf:!1}])};n.prototype.dha=function(z,w,ea){this.eX[z]=!0;this.trigger(da.a.Events.PART_READY,[{Ya:z,data:w,zi:!1,Tf:!1,error:null,$c:ea}])};return n}(da.a);Object(r.a)(Aa);Object(r.b)(Aa);ua["default"]=Aa}}]);}).call(this || window)
