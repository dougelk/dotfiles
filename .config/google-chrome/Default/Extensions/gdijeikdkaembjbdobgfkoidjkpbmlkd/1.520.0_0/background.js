'use strict';var g=this,h=function(a){return void 0!==a},l=function(){},m=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=
typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},aa=function(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length},ba=function(a){return"string"==typeof a},p=function(a){return"function"==m(a)},ca=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},da=function(a,b,c){return a.call.apply(a.bind,arguments)},ea=function(a,b,c){if(!a)throw Error();
if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return q.apply(null,arguments)},fa=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);
return a.apply(this,b)}},ga=Date.now||function(){return+new Date},r=function(a,b){function c(){}c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ab=function(a,c,f){for(var k=Array(arguments.length-2),n=2;n<arguments.length;n++)k[n-2]=arguments[n];return b.prototype[c].apply(a,k)}};var t=function(a,b){this.width=a;this.height=b};t.prototype.clone=function(){return new t(this.width,this.height)};t.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};t.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};t.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
t.prototype.scale=function(a,b){this.width*=a;this.height*="number"==typeof b?b:a;return this};var u=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};r(u,Error);u.prototype.name="CustomError";var ha=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ia=function(a){return Array.prototype.join.call(arguments,"")},ja=function(a,b){return a<b?-1:a>b?1:0};var ka=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(ba(a))return ba(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},la=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=ba(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ma=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,
b,c)}:function(a,b,c){for(var d=a.length,e=ba(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};var na=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)},oa=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};var v;a:{var pa=g.navigator;if(pa){var qa=pa.userAgent;if(qa){v=qa;break a}}v=""}var w=function(a){return-1!=v.indexOf(a)};var ra=w("Opera")||w("OPR"),x=w("Trident")||w("MSIE"),sa=w("Edge"),y=w("Gecko")&&!(-1!=v.toLowerCase().indexOf("webkit")&&!w("Edge"))&&!(w("Trident")||w("MSIE"))&&!w("Edge"),z=-1!=v.toLowerCase().indexOf("webkit")&&!w("Edge"),ta=g.navigator||null,ua=ta&&ta.platform||"",va=w("Macintosh"),wa=w("Windows"),xa=w("Linux")||w("CrOS"),ya=w("Android"),za=w("iPhone")&&!w("iPod")&&!w("iPad"),Aa=w("iPad"),Ba=function(){var a=v;if(y)return/rv\:([^\);]+)(\)|;)/.exec(a);if(sa)return/Edge\/([\d\.]+)/.exec(a);if(x)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
if(z)return/WebKit\/(\S+)/.exec(a)},Ca=function(){var a=g.document;return a?a.documentMode:void 0},Da=function(){if(ra&&g.opera){var a;var b=g.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=Ba())&&(a=b?b[1]:"");return x&&(b=Ca(),b>parseFloat(a))?String(b):a}(),Ea={},A=function(a){var b;if(!(b=Ea[a])){b=0;for(var c=ha(String(Da)).split("."),d=ha(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var k=c[f]||"",n=d[f]||"",L=/(\d*)(\D*)/g,O=/(\d*)(\D*)/g;do{var P=L.exec(k)||
["","",""],Q=O.exec(n)||["","",""];if(0==P[0].length&&0==Q[0].length)break;b=ja(0==P[1].length?0:parseInt(P[1],10),0==Q[1].length?0:parseInt(Q[1],10))||ja(0==P[2].length,0==Q[2].length)||ja(P[2],Q[2])}while(0==b)}b=Ea[a]=0<=b}return b},Fa=g.document,Ga=Fa&&x?Ca()||("CSS1Compat"==Fa.compatMode?parseInt(Da,10):5):void 0;!y&&!x||x&&9<=Ga||y&&A("1.9.1");x&&A("9");var B=function(){this.G=this.G;this.Z=this.Z};B.prototype.G=!1;B.prototype.isDisposed=function(){return this.G};B.prototype.A=function(){this.G||(this.G=!0,this.F())};B.prototype.F=function(){if(this.Z)for(;this.Z.length;)this.Z.shift()()};var Ha=function(a){Ha[" "](a);return a};Ha[" "]=l;var Ia=!x||9<=Ga,Ja=x&&!A("9");!z||A("528");y&&A("1.9b")||x&&A("8")||ra&&A("9.5")||z&&A("528");y&&!A("8")||x&&A("9");var Ka=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.va=!1};Ka.prototype.stopPropagation=function(){this.va=!0};Ka.prototype.preventDefault=function(){this.defaultPrevented=!0};var C=function(a,b){Ka.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.H=this.state=null;a&&this.init(a,b)};r(C,Ka);
C.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(y){var f;a:{try{Ha(e.nodeName);f=!0;break a}catch(k){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.offsetX=z||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=z||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:
a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.H=a;a.defaultPrevented&&
this.preventDefault()};C.prototype.stopPropagation=function(){C.N.stopPropagation.call(this);this.H.stopPropagation?this.H.stopPropagation():this.H.cancelBubble=!0};C.prototype.preventDefault=function(){C.N.preventDefault.call(this);var a=this.H;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ja)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var La="closure_listenable_"+(1E6*Math.random()|0),Ma=0;var Na=function(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.S=!!d;this.na=e;this.key=++Ma;this.removed=this.ga=!1},Oa=function(a){a.removed=!0;a.listener=null;a.proxy=null;a.src=null;a.na=null};var D=function(a){this.src=a;this.b={};this.O=0};D.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.b[f];a||(a=this.b[f]=[],this.O++);var k=Pa(a,b,d,e);-1<k?(b=a[k],c||(b.ga=!1)):(b=new Na(b,this.src,f,!!d,e),b.ga=c,a.push(b));return b};D.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.b))return!1;var e=this.b[a];b=Pa(e,b,c,d);return-1<b?(Oa(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.b[a],this.O--),!0):!1};
var Qa=function(a,b){var c=b.type;if(c in a.b){var d=a.b[c],e=ka(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(Oa(b),0==a.b[c].length&&(delete a.b[c],a.O--))}};D.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.b)if(!a||c==a){for(var d=this.b[c],e=0;e<d.length;e++)++b,Oa(d[e]);delete this.b[c];this.O--}return b};
D.prototype.hasListener=function(a,b){var c=h(a),d=c?a.toString():"",e=h(b);return oa(this.b,function(a){for(var k=0;k<a.length;++k)if(!(c&&a[k].type!=d||e&&a[k].S!=b))return!0;return!1})};var Pa=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.removed&&f.listener==b&&f.S==!!c&&f.na==d)return e}return-1};var Ra="closure_lm_"+(1E6*Math.random()|0),Sa={},Ta=0,Ua=function(a,b,c,d,e){if("array"==m(b)){for(var f=0;f<b.length;f++)Ua(a,b[f],c,d,e);return null}c=Va(c);if(a&&a[La])a=a.listen(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,k=Wa(a);k||(a[Ra]=k=new D(a));c=k.add(b,c,!1,d,e);if(!c.proxy){d=Xa();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(Ya(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");
Ta++}a=c}return a},Xa=function(){var a=Za,b=Ia?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},$a=function(a){if("number"!=typeof a&&a&&!a.removed){var b=a.src;if(b&&b[La])Qa(b.Bb,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.S):b.detachEvent&&b.detachEvent(Ya(c),d);Ta--;(c=Wa(b))?(Qa(c,a),0==c.O&&(c.src=null,b[Ra]=null)):Oa(a)}}},Ya=function(a){return a in Sa?Sa[a]:Sa[a]="on"+a},bb=function(a,b,c,
d){var e=!0;if(a=Wa(a))if(b=a.b[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.S==c&&!f.removed&&(f=ab(f,d),e=e&&!1!==f)}return e},ab=function(a,b){var c=a.listener,d=a.na||a.src;a.ga&&$a(a);return c.call(d,b)},Za=function(a,b){if(a.removed)return!0;if(!Ia){var c;if(!(c=b))a:{c=["window","event"];for(var d=g,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new C(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;
break a}catch(L){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,k=e.length-1;!c.va&&0<=k;k--){c.currentTarget=e[k];var n=bb(e[k],f,!0,c),d=d&&n}for(k=0;!c.va&&k<e.length;k++)c.currentTarget=e[k],n=bb(e[k],f,!1,c),d=d&&n}return d}return ab(a,new C(b,this))},Wa=function(a){a=a[Ra];return a instanceof D?a:null},cb="__closure_events_fn_"+(1E9*Math.random()>>>0),Va=function(a){if(p(a))return a;a[cb]||(a[cb]=function(b){return a.handleEvent(b)});
return a[cb]};var E=function(a){B.call(this);this.hb=a;this.a={}};r(E,B);var db=[];E.prototype.listen=function(a,b,c,d){"array"!=m(b)&&(b&&(db[0]=b.toString()),b=db);for(var e=0;e<b.length;e++){var f=Ua(a,b[e],c||this.handleEvent,d||!1,this.hb||this);if(!f)break;this.a[f.key]=f}return this};E.prototype.removeAll=function(){na(this.a,function(a,b){this.a.hasOwnProperty(b)&&$a(a)},this);this.a={}};E.prototype.F=function(){E.N.F.call(this);this.removeAll()};
E.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};var F="StopIteration"in g?g.StopIteration:{message:"StopIteration",stack:""},G=function(){};G.prototype.next=function(){throw F;};G.prototype.da=function(){return this};
var eb=function(a){if(a instanceof G)return a;if("function"==typeof a.da)return a.da(!1);if(aa(a)){var b=0,c=new G;c.next=function(){for(;;){if(b>=a.length)throw F;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");},fb=function(a,b){if(aa(a))try{la(a,b,void 0)}catch(c){if(c!==F)throw c;}else{a=eb(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==F)throw c;}}};var H=function(a,b){this.h={};this.a=[];this.P=this.u=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};H.prototype.gb=function(){gb(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.h[this.a[b]]);return a};H.prototype.U=function(){gb(this);return this.a.concat()};H.prototype.clear=function(){this.h={};this.P=this.u=this.a.length=0};
H.prototype.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.u--,this.P++,this.a.length>2*this.u&&gb(this),!0):!1};var gb=function(a){if(a.u!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.u!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}};
H.prototype.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};H.prototype.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.u++,this.a.push(a),this.P++);this.h[a]=b};H.prototype.addAll=function(a){var b;if(a instanceof H)b=a.U(),a=a.gb();else{b=[];var c=0,d;for(d in a)b[c++]=d;c=[];d=0;for(var e in a)c[d++]=a[e];a=c}for(e=0;e<b.length;e++)this.set(b[e],a[e])};
H.prototype.forEach=function(a,b){for(var c=this.U(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};H.prototype.clone=function(){return new H(this)};H.prototype.da=function(a){gb(this);var b=0,c=this.P,d=this,e=new G;e.next=function(){if(c!=d.P)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw F;var e=d.a[b++];return a?e:d.h[e]};return e};var hb=function(a,b){this.pa="";this.ta=b||{};if("string"===typeof a)this.pa=a;else{var c=a.ta;this.pa=a.getKey();for(var d in c)null==this.ta[d]&&(this.ta[d]=c[d])}};hb.prototype.getKey=function(){return this.pa};var ib=function(a,b,c){this.ib=c;this.bb=a;this.rb=b;this.Y=0;this.W=null};ib.prototype.get=function(){var a;0<this.Y?(this.Y--,a=this.W,this.W=a.next,a.next=null):a=this.bb();return a};ib.prototype.put=function(a){this.rb(a);this.Y<this.ib&&(this.Y++,a.next=this.W,this.W=a)};var jb=function(a){g.setTimeout(function(){throw a;},0)},kb,lb=function(){var a=g.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!w("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
a=q(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!w("Trident")&&!w("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(h(c.next)){c=c.next;var a=c.za;c.za=null;a()}};return function(a){d.next={za:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){g.setTimeout(a,0)}};var mb=function(){this.ca=this.D=null},ob=new ib(function(){return new nb},function(a){a.reset()},100);mb.prototype.add=function(a,b){var c=ob.get();c.set(a,b);this.ca?this.ca.next=c:this.D=c;this.ca=c};mb.prototype.remove=function(){var a=null;this.D&&(a=this.D,this.D=this.D.next,this.D||(this.ca=null),a.next=null);return a};var nb=function(){this.next=this.scope=this.ma=null};nb.prototype.set=function(a,b){this.ma=a;this.scope=b;this.next=null};
nb.prototype.reset=function(){this.next=this.scope=this.ma=null};var tb=function(a,b){pb||qb();rb||(pb(),rb=!0);sb.add(a,b)},pb,qb=function(){if(g.Promise&&g.Promise.resolve){var a=g.Promise.resolve(void 0);pb=function(){a.then(ub)}}else pb=function(){var a=ub;!p(g.setImmediate)||g.Window&&g.Window.prototype&&!w("Edge")&&g.Window.prototype.setImmediate==g.setImmediate?(kb||(kb=lb()),kb(a)):g.setImmediate(a)}},rb=!1,sb=new mb,ub=function(){for(var a=null;a=sb.remove();){try{a.ma.call(a.scope)}catch(b){jb(b)}ob.put(a)}rb=!1};var vb=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},wb=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var I=function(a,b){this.g=0;this.j=void 0;this.w=this.l=this.c=null;this.V=this.la=!1;if(a!=l)try{var c=this;a.call(b,function(a){c.o(2,a)},function(a){c.o(3,a)})}catch(d){this.o(3,d)}},xb=function(){this.next=this.context=this.C=this.L=this.s=null;this.R=!1};xb.prototype.reset=function(){this.context=this.C=this.L=this.s=null;this.R=!1};
var yb=new ib(function(){return new xb},function(a){a.reset()},100),zb=function(a,b,c){var d=yb.get();d.L=a;d.C=b;d.context=c;return d},Bb=function(){var a,b,c=new I(function(c,e){a=c;b=e});return new Ab(c,a,b)};I.prototype.then=function(a,b,c){return Cb(this,p(a)?a:null,p(b)?b:null,c)};vb(I);I.prototype.cancel=function(a){0==this.g&&tb(function(){var b=new J(a);Db(this,b)},this)};
var Db=function(a,b){if(0==a.g)if(a.c){var c=a.c;if(c.l){for(var d=0,e=null,f=null,k=c.l;k&&(k.R||(d++,k.s==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.g&&1==d?Db(c,b):(f?(d=f,d.next==c.w&&(c.w=d),d.next=d.next.next):Eb(c),Fb(c,e,3,b)))}a.c=null}else a.o(3,b)},Hb=function(a,b){a.l||2!=a.g&&3!=a.g||Gb(a);a.w?a.w.next=b:a.l=b;a.w=b},Cb=function(a,b,c,d){var e=zb(null,null,null);e.s=new I(function(a,k){e.L=b?function(c){try{var e=b.call(d,c);a(e)}catch(O){k(O)}}:a;e.C=c?function(b){try{var e=c.call(d,
b);!h(e)&&b instanceof J?k(b):a(e)}catch(O){k(O)}}:k});e.s.c=a;Hb(a,e);return e.s};I.prototype.wb=function(a){this.g=0;this.o(2,a)};I.prototype.xb=function(a){this.g=0;this.o(3,a)};
I.prototype.o=function(a,b){if(0==this.g){this==b&&(a=3,b=new TypeError("Promise cannot resolve to itself"));this.g=1;var c;a:{var d=b,e=this.wb,f=this.xb;if(d instanceof I)Hb(d,zb(e||l,f||null,this)),c=!0;else if(wb(d))d.then(e,f,this),c=!0;else{if(ca(d))try{var k=d.then;if(p(k)){Ib(d,k,e,f,this);c=!0;break a}}catch(n){f.call(this,n);c=!0;break a}c=!1}}c||(this.j=b,this.g=a,this.c=null,Gb(this),3!=a||b instanceof J||Jb(this,b))}};
var Ib=function(a,b,c,d,e){var f=!1,k=function(a){f||(f=!0,c.call(e,a))},n=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,k,n)}catch(L){n(L)}},Gb=function(a){a.la||(a.la=!0,tb(a.eb,a))},Eb=function(a){var b=null;a.l&&(b=a.l,a.l=b.next,b.next=null);a.l||(a.w=null);return b};I.prototype.eb=function(){for(var a=null;a=Eb(this);)Fb(this,a,this.g,this.j);this.la=!1};
var Fb=function(a,b,c,d){if(3==c&&b.C&&!b.R)for(;a&&a.V;a=a.c)a.V=!1;if(b.s)b.s.c=null,Kb(b,c,d);else try{b.R?b.L.call(b.context):Kb(b,c,d)}catch(e){Lb.call(null,e)}yb.put(b)},Kb=function(a,b,c){2==b?a.L.call(a.context,c):a.C&&a.C.call(a.context,c)},Jb=function(a,b){a.V=!0;tb(function(){a.V&&Lb.call(null,b)})},Lb=jb,J=function(a){u.call(this,a)};r(J,u);J.prototype.name="cancel";var Ab=function(a,b,c){this.ua=a;this.resolve=b;this.reject=c};new hb("null");chrome.i18n.getUILanguage();var Mb=function(){var a;return wa?(a=/Windows NT ([0-9.]+)/,(a=a.exec(v))?a[1]:"0"):va?(a=/10[_.][0-9_.]+/,(a=a.exec(v))?a[0].replace(/_/g,"."):"10"):ya?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(v))?a[1]:""):za||Aa?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(v))?a[1].replace(/_/g,"."):""):""}();var Nb=(w("Chrome")||w("CriOS"))&&!(w("Opera")||w("OPR"))&&!w("Edge");var Ob=!x,Pb=function(a,b){return Ob&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())};var Tb=function(){this.Ra=document.documentElement;var a=Pb(this.Ra,"lavaDeviceModel");if(Qb()){var b="ChromeCDM-"+Rb()+"-",c;c=Rb();"Mac"==c?c="x86-64":"Linux"==c||"ChromeOS"==c?(c=Sb().split(" ")[1],c=0==c.lastIndexOf("arm",0)?"arm":0==c.lastIndexOf("x86_64",0)?"x86-64":"x86-32"):c="Windows"==c?"Win64"==ua?"x86-64":"x86-32":"generic";this.ra=b+c;"ChromeCDM-generic-generic"==this.ra&&(this.ra=a||void 0)}else a&&(this.ra=a);Pb(this.Ra,"lavaDeviceMake")},Sb=function(){var a=v.match(/\(([^)]+)\)/);
return a?a[1].split("; ")[1]:null},Qb=function(){if(Nb){if(va){var a=Sb().split(" "),a=a[a.length-1].split("_");if(3==a.length)return 10<parseInt(a[0],10)||10==parseInt(a[0],10)&&7<parseInt(a[1],10)}return!0}return!1},Rb=function(){if(xa){var a=Sb();if(a&&0==a.lastIndexOf("CrOS",0))return"ChromeOS";if(null!=a)return"Linux"}return va?"Mac":wa?"Windows":"generic"};var K=function(a){return K.Ja(a)};K.Ja=function(a){return a+"_"};K.Db=function(){throw Error("xid.literal must not be used in COMPILED mode.");};K.object=function(a){if(a&&a.constructor&&a.constructor.toString()===Object.toString()){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[K.Ja(c)]=a[c]);return b}throw Error("xid.object must be called with an object literal.");};K.yb=!0;K.zb=function(a){return a};K.Cb=function(){return"a_"!=K("a")};var M=function(a){this.sb=a};M.prototype.toString=function(){return this.sb};new M(K("goog.ui.ActivityMonitor"));new M(K("fava.app.AppLifetimeService"));new M(K("fava.base.AsyncOperationServices"));new M(K("fava.net.BrowserChannelServices"));new M(K("fava.canvas.CanvasService"));new M(K("fava.canvas.CanvasConfiguration"));new M(K("fava.diagnostics.CsiService"));new M(K("fava.data.DataServices"));new M(K("fava.data.DataStoreUpdaterService"));new M(K("fava.locale.DateTimeFormatService"));new M(K("fava.debug.DeobfuscationService"));new M(K("fava.diagnostics.Diagnostics"));new M(K("fava.component.DomServices"));
new M(K("fava.app.DragDropService"));new M(K("fava.browser.ExportService"));new M(K("fava.layout.FixedLayoutHelper"));new M(K("fava.gbar.GbarService"));new M(K("fava.gloader.GoogleLoaderService"));new M(K("fava.controls.help.HelpOverlayService"));new M(K("fava.view.HistoryInterface"));new M(K("fava.view.HistoryManager"));new M(K("fava.view.HistoryRegistry"));new M(K("fava.identity.IdentityService"));new M(K("fava.browser.IeCutCopyHandle"));new M(K("fava.diagnostics.Impressions"));new M(K("fava.browser.KeyboardShortcutHandler"));
new M(K("fava.browser.KeyboardShortcutRegistry"));new M(K("fava.controls.mole.MoleManager"));new M(K("fava.app.NavBarService"));new M(K("fava.view.NavigationServices"));new M(K("fava.net.NetworkDiagnosticsService"));new M(K("fava.app.NotificationService"));new M(K("fava.request.OauthService"));new M(K("fava.net.OfflineServices"));new M(K("fava.modules.PrefetchService"));new M(K("fava.controls.RelativeDateControl"));new M(K("fava.request.RequestService"));new M(K("fava.base.Scheduler"));new M(K("fava.net.ServerErrorService"));
new M(K("fava.dom.SoyRenderer"));new M(K("fava.dom.SoyRendererConfig"));new M(K("fava.app.TitleBar"));new M(K("fava.controls.Toast"));new M(K("fava.app.UserActionService"));new M(K("fava.browser.ViewportServices"));new M(K("fava.diagnostics.ViewDiagnostics"));new M(K("fava.view.ViewManagerInterface"));new M(K("fava.view.ViewRegistry"));new M(K("fava.browser.WindowService"));new M(K("fava.browser.WindowOpenerUtil"));new M(K("fava.app.WindowWidget"));new M(K("fava.request.XsrfService"));new M("a");new M("b");new M("c");new M("d");var Ub=g.JSON.parse;new M("e");new M("f");new M("g");new M("h");new M("i");new M("j");new M("k");new M("l");/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var N=function(a,b){this.$=[];this.Oa=a;this.Fa=b||null;this.K=this.v=!1;this.j=void 0;this.wa=this.$a=this.ea=!1;this.ba=0;this.c=null;this.fa=0};N.prototype.cancel=function(a){if(this.v)this.j instanceof N&&this.j.cancel();else{if(this.c){var b=this.c;delete this.c;a?b.cancel(a):(b.fa--,0>=b.fa&&b.cancel())}this.Oa?this.Oa.call(this.Fa,this):this.wa=!0;this.v||this.m(new R)}};N.prototype.Ca=function(a,b){this.ea=!1;Vb(this,a,b)};
var Vb=function(a,b,c){a.v=!0;a.j=c;a.K=!b;Wb(a)},Yb=function(a){if(a.v){if(!a.wa)throw new Xb;a.wa=!1}};N.prototype.callback=function(a){Yb(this);Vb(this,!0,a)};N.prototype.m=function(a){Yb(this);Vb(this,!1,a)};var Zb=function(a,b){return S(a,b,null,void 0)},S=function(a,b,c,d){a.$.push([b,c,d]);a.v&&Wb(a);return a};N.prototype.then=function(a,b,c){var d,e,f=new I(function(a,b){d=a;e=b});S(this,d,function(a){a instanceof R?f.cancel():e(a)});return f.then(a,b,c)};vb(N);
var $b=function(a){return ma(a.$,function(a){return p(a[1])})},Wb=function(a){if(a.ba&&a.v&&$b(a)){var b=a.ba,c=ac[b];c&&(g.clearTimeout(c.X),delete ac[b]);a.ba=0}a.c&&(a.c.fa--,delete a.c);for(var b=a.j,d=c=!1;a.$.length&&!a.ea;){var e=a.$.shift(),f=e[0],k=e[1],e=e[2];if(f=a.K?k:f)try{var n=f.call(e||a.Fa,b);h(n)&&(a.K=a.K&&(n==b||n instanceof Error),a.j=b=n);if(wb(b)||"function"===typeof g.Promise&&b instanceof g.Promise)d=!0,a.ea=!0}catch(L){b=L,a.K=!0,$b(a)||(c=!0)}}a.j=b;d&&(n=q(a.Ca,a,!0),d=
q(a.Ca,a,!1),b instanceof N?(S(b,n,d),b.$a=!0):b.then(n,d));c&&(b=new bc(b),ac[b.X]=b,a.ba=b.X)},Xb=function(){u.call(this)};r(Xb,u);Xb.prototype.message="Deferred has already fired";Xb.prototype.name="AlreadyCalledError";var R=function(){u.call(this)};r(R,u);R.prototype.message="Deferred was canceled";R.prototype.name="CanceledError";var bc=function(a){this.X=g.setTimeout(q(this.tb,this),0);this.cb=a};bc.prototype.tb=function(){delete ac[this.X];throw this.cb;};var ac={};var T=function(a){this.aa=a};T.prototype.get=function(a,b){var c=new N;this.aa.get(a,function(d){var e=chrome.runtime?chrome.runtime.lastError:void 0;e?c.m(e):(d=d[a],c.callback(h(d)?d:b))});return c};T.prototype.getAll=function(){var a=new N;this.aa.get(null,function(b){var c=chrome.runtime?chrome.runtime.lastError:void 0;c?a.m(c):a.callback(b)});return a};
T.prototype.set=function(a,b){var c=new N,d={};d[a]=b;this.aa.set(d,function(){var a=chrome.runtime?chrome.runtime.lastError:void 0;a?c.m(a):c.callback()});return c};T.prototype.clear=function(){var a=new N;this.aa.clear(function(){var b=chrome.runtime?chrome.runtime.lastError:void 0;b?a.m(b):a.callback()});return a};var U=function(a,b,c,d,e,f){N.call(this,e,f);this.qa=a;this.ha=[];this.Ha=!!b;this.fb=!!c;this.ab=!!d;for(b=this.Na=0;b<a.length;b++)S(a[b],q(this.Ia,this,b,!0),q(this.Ia,this,b,!1));0!=a.length||this.Ha||this.callback(this.ha)};r(U,N);U.prototype.Ia=function(a,b,c){this.Na++;this.ha[a]=[b,c];this.v||(this.Ha&&b?this.callback([a,c]):this.fb&&!b?this.m(c):this.Na==this.qa.length&&this.callback(this.ha));this.ab&&!b&&(c=null);return c};U.prototype.m=function(a){U.N.m.call(this,a);for(a=0;a<this.qa.length;a++)this.qa[a].cancel()};
var cc=function(a){return Zb(new U(a,!1,!0),function(a){for(var c=[],d=0;d<a.length;d++)c[d]=a[d][1];return c})};var dc=function(a){try{return 2<(a.i?a.i.readyState:0)?a.i.statusText:""}catch(b){return""}},ec=function(a){try{return a.i?a.i.responseText:""}catch(b){return""}},fc=function(a){if(a.i)return Ub(a.i.responseText)},gc=function(a){var b={};a=a.getAllResponseHeaders().split("\r\n");for(var c=0;c<a.length;c++)if(!/^[\s\xa0]*$/.test(a[c])){var d;d=2;for(var e=a[c].split(": "),f=[];0<d&&e.length;)f.push(e.shift()),d--;e.length&&f.push(e.join(": "));d=f;b[d[0]]=b[d[0]]?b[d[0]]+(", "+d[1]):d[1]}return b};new M("m");var hc=function(a,b){this.La=b||3;this.Ea=0;this.Za=a};vb(hc);hc.prototype.execute=function(){if(this.f)return this.f.ua;this.f=Bb();ic(this);return this.f.ua};var ic=function(a){a.Za().then(q(a.nb,a),q(a.ob,a))};hc.prototype.nb=function(a){this.f.resolve(a)};hc.prototype.ob=function(a){this.Ea>=this.La?this.f.reject("Exceeded maximum of "+this.La+" retries: "+a):(this.Ea++,ic(this))};var V=function(a,b,c){this.i=a;this.Pa=h(c)?!!c:!0;this.B=new E(this);this.B.listen(a,"success",this.pb);this.B.listen(a,"error",this.mb);this.B.listen(a,"abort",this.lb);this.B.listen(a,"timeout",this.qb);this.Qa=b||2;this.f=Bb()};vb(V);V.prototype.$cd_Cancellable=!0;V.prototype.cancel=function(){this.i.abort()};V.prototype.lb=function(a){jc(this,a.target)};V.prototype.mb=function(a){jc(this,a.target)};V.prototype.pb=function(a){this.o(a.target)};V.prototype.qb=function(a){jc(this,a.target)};
var jc=function(a,b){var c=b.getStatus(),d=dc(b);0<c&&3==a.Qa?(c={status:c,statusText:d,result:fc(b),body:ec(b),headers:gc(b)},a.f.resolve(c)):(c=ha(ia(c," ",d)),a.f.reject(c));a.B.A();a.Pa&&a.i.A()};V.prototype.o=function(a){switch(this.Qa){case 1:a=ec(a);this.f.resolve(a);break;case 3:a={result:fc(a),body:ec(a),headers:gc(a),status:a.getStatus(),statusText:dc(a)};this.f.resolve(a);break;default:a=fc(a),this.f.resolve(a)}this.B.A();this.Pa&&this.i.A()};
V.prototype.then=function(a,b,c){return this.f.ua.then(a,b,c)};new M("n");new M("o");var W=function(a,b){this.Ma=a;this.vb=b;this.constructor.ya||(this.constructor.ya={});this.constructor.ya[this.toString()]=this};W.prototype.toString=function(){this.Ua||(this.Ua=this.Ma.jb+":"+this.vb);return this.Ua};W.prototype.getNamespace=function(){return this.Ma};var kc=function(a,b){W.call(this,a,b)};r(kc,W);var lc=function(a){this.jb=a},mc=new lc("lib");var nc=new lc("fva");new kc(nc,1);new M("p");new M("q");new M("r");new M("s");new M("t");new M("u");new M("v");new M("w");new M("x");new M("y");new M("z");new M("A");new M("B");new M("C");new M("D");var X=function(a,b){W.call(this,a,b)};r(X,W);var Y=new lc("lava");new X(Y,"moviedetails");new X(Y,"movies");new X(Y,"player");new X(Y,"searchresults");new X(Y,"showdetails");new X(Y,"tvshows");new X(Y,"watchnow");x&&A(8);var oc=function(){throw Error("Do not instantiate directly");};oc.prototype.Ba=null;oc.prototype.toString=function(){return this.content};var pc=function(){oc.call(this)};r(pc,oc);(function(a){function b(a){this.content=a}b.prototype=a.prototype;return function(a,d){var e=new b(String(a));void 0!==d&&(e.Ba=d);return e}})(pc);(function(a){function b(a){this.content=a}b.prototype=a.prototype;return function(a,d){var e=String(a);if(!e)return"";e=new b(e);void 0!==d&&(e.Ba=d);return e}})(pc);chrome.i18n.getMessage("568365569990952204");chrome.i18n.getMessage("2729184261638747391");var qc=function(){B.call(this)};r(qc,B);qc.prototype.init=function(){};new qc;var Z=function(a,b){B.call(this);this.Ga=this.Da=null;this.Ka=b;this.J=[];if(a>this.Ka)throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");for(var c=0;c<a;c++)this.J.push(this.T())};r(Z,B);var rc=function(a,b){a.J.length<a.Ka?a.J.push(b):a.ia(b)};Z.prototype.T=function(){return this.Da?this.Da():{}};Z.prototype.ia=function(a){if(this.Ga)this.Ga(a);else if(ca(a))if(p(a.A))a.A();else for(var b in a)delete a[b]};
Z.prototype.F=function(){Z.N.F.call(this);for(var a=this.J;a.length;)this.ia(a.pop());delete this.J};var uc=function(){this.I=[];this.sa=new H;this.Wa=this.Xa=this.Ya=this.Sa=0;this.M=new H;this.Aa=this.Va=0;this.kb=1;this.ja=new Z(0,4E3);this.ja.T=function(){return new sc};this.Ta=new Z(0,50);this.Ta.T=function(){return new tc};var a=this;this.oa=new Z(0,2E3);this.oa.T=function(){return String(a.kb++)};this.oa.ia=function(){}},tc=function(){this.xa=this.time=this.count=0};
tc.prototype.toString=function(){var a=[];a.push(this.type," ",this.count," (",Math.round(10*this.time)/10," ms)");this.xa&&a.push(" [VarAlloc = ",this.xa,"]");return a.join("")};var sc=function(){},xc=function(a,b,c,d){var e=[];-1==c?e.push("    "):e.push(vc(a.eventTime-c));e.push(" ",wc(a.eventTime-b));0==a.ka?e.push(" Start        "):1==a.ka?(e.push(" Done "),e.push(vc(a.Eb-a.startTime)," ms ")):e.push(" Comment      ");e.push(d,a);0<a.ub&&e.push("[VarAlloc ",a.ub,"] ");return e.join("")};
sc.prototype.toString=function(){return null==this.type?this.comment:"["+this.type+"] "+this.comment};uc.prototype.reset=function(){for(var a=0;a<this.I.length;a++){var b=this.ja.id;b&&rc(this.oa,b);rc(this.ja,this.I[a])}this.I.length=0;this.sa.clear();this.Sa=ga();this.Aa=this.Va=this.Wa=this.Xa=this.Ya=0;b=this.M.U();for(a=0;a<b.length;a++){var c=this.M.get(b[a]);c.count=0;c.time=0;c.xa=0;rc(this.Ta,c)}this.M.clear()};
uc.prototype.toString=function(){for(var a=[],b=-1,c=[],d=0;d<this.I.length;d++){var e=this.I[d];1==e.ka&&c.pop();a.push(" ",xc(e,this.Sa,b,c.join("")));b=e.eventTime;a.push("\n");0==e.ka&&c.push("|  ")}if(0!=this.sa.u){var f=ga();a.push(" Unstopped timers:\n");fb(this.sa,function(b){a.push("  ",b," (",f-b.startTime," ms, started at ",wc(b.startTime),")\n")})}b=this.M.U();for(d=0;d<b.length;d++)c=this.M.get(b[d]),1<c.count&&a.push(" TOTAL ",c,"\n");a.push("Total tracers created ",this.Va,"\n","Total comments created ",
this.Aa,"\n","Overhead start: ",this.Ya," ms\n","Overhead end: ",this.Xa," ms\n","Overhead comment: ",this.Wa," ms\n");return a.join("")};var vc=function(a){a=Math.round(a);var b="";1E3>a&&(b=" ");100>a&&(b="  ");10>a&&(b="   ");return b+a},wc=function(a){a=Math.round(a);return String(100+a/1E3%60).substring(1,3)+"."+String(1E3+a%1E3).substring(1,4)};new uc;var yc=function(a,b){W.call(this,a,b)};r(yc,W);new yc(mc,"d");new yc(mc,"c");new yc(mc,"f");var Ac=function(a,b){switch(a.type){case "hello":return zc(a,b),null;case "play":var c={id:"play",url:"http://play.google.com/movies/"+("tvepisode"==a.contentType?"shows":"movies")+"?v="+a.videoId+"&play=true"};b({success:!0});return c;case "refresh":return b({success:!0}),{id:"refresh",url:"http://play.google.com/movies/"};case "watch_now":return b({success:!0}),{id:"watch_now",url:"http://play.google.com/movies/"};default:throw Error("Unsupported message type. Message: "+a);}},zc=function(a,b){var c=
new T(chrome.storage.local);S(cc([c.get("user_info"),c.get("playStoreIntegration",!0)]),function(c){var e=c[0];c[1]&&HTMLVideoElement.prototype.webkitGenerateKeyRequest?h(e)&&e.emails[0].value==a.email?b({success:!0}):b({success:!1,error:"E-mail mismatched or not initialized."}):b({success:!1,error:"Play Store integration disabled."})},function(a){b({success:!1,error:a.message})})};var Bc=new t(800,450),Ec=function(a){if(HTMLVideoElement.prototype.webkitGenerateKeyRequest){var b;new Tb;b=/Chrome\/(\S+)/.exec(v);b=null===b||2>b.length?null:parseFloat(b[1]);if(b=null!==b&&34<=b){if(wa){b=0;try{b=parseFloat(Mb)}catch(c){b=0}b=6>b}else b=!1;b=!b}b?Cc(a):Dc()}else chrome.browser.openTab({url:"https://play.google.com/movies/"},l)},Dc=function(){chrome.app.window.create("platform_not_supported.html",{frame:"chrome",id:"lava_not_supported",bounds:{width:500,height:200,left:g.screen.width/
2,top:g.screen.height/2}},function(a){a.onClosed.addListener(fa(Fc,a))})},Fc=function(a){"continue"==a.contentWindow.selected_action&&Cc()},Cc=function(a){chrome.app.window.create("main.html",{frame:"chrome",id:"lava",minWidth:Bc.width,minHeight:Bc.height,bounds:{width:g.screen.width-96,height:g.screen.height-128,left:48,top:64}},function(b){b.contentWindow.launchData=a});a&&chrome.runtime.sendMessage(a)};chrome.app.runtime.onLaunched.addListener(Ec);
chrome.runtime.onMessageExternal.addListener(function(a,b,c){if(h(b.id))return!1;a=Ac(a,c);null===a||Ec(a);return!0});