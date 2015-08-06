try {
document.execCommand('BackgroundImageCache', false, true);
}
catch(e) {};
/* https://github.com/farinspace/jquery.imgpreload */
if("undefined"!=typeof jQuery){(function(a){a.imgpreload=function(b,c){c=a.extend({},a.fn.imgpreload.defaults,c instanceof Function?{all:c}:c);if("string"==typeof b){b=new Array(b)}var d=new Array;a.each(b,function(e,f){var g=new Image;var h=f;var i=g;if("string"!=typeof f){h=a(f).attr("src");i=f}a(g).bind("load error",function(e){d.push(i);a.data(i,"loaded","error"==e.type?false:true);if(c.each instanceof Function){c.each.call(i)}if(d.length>=b.length&&c.all instanceof Function){c.all.call(d)}a(this).unbind("load error")});g.src=h})};a.fn.imgpreload=function(b){a.imgpreload(this,b);return this};a.fn.imgpreload.defaults={each:null,all:null}})(jQuery)};

/* jQuery.browser.mobile (http://detectmobilebrowser.com/) */
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|android|ipad|playbook|silk|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD */
window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/sass";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/* http://tympanus.net/codrops/2012/09/03/bookblock-a-content-flip-plugin/ */
(function(){var event=jQuery.event,findHelper=function(events,types,callback,selector){var t,type,typeHandlers,all,h,handle,namespaces,namespace,match;for(t=0;t<types.length;t++){type=types[t];all=type.indexOf(".")<0;if(!all){namespaces=type.split(".");type=namespaces.shift();namespace=new RegExp("(^|\\.)"+namespaces.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}typeHandlers=(events[type]||[]).slice(0);for(h=0;h<typeHandlers.length;h++){handle=typeHandlers[h];match=(all||namespace.test(handle.namespace));if(match){if(selector){if(handle.selector===selector){callback(type,handle.origHandler||handle.handler)}}else if(selector===null){callback(type,handle.origHandler||handle.handler,handle.selector)}else if(!handle.selector){callback(type,handle.origHandler||handle.handler)}}}}};event.find=function(el,types,selector){var events=($._data(el)||{}).events,handlers=[],t,liver,live;if(!events){return handlers}findHelper(events,types,function(type,handler){handlers.push(handler)},selector);return handlers};event.findBySelector=function(el,types){var events=$._data(el).events,selectors={},add=function(selector,event,handler){var select=selectors[selector]||(selectors[selector]={}),events=select[event]||(select[event]=[]);events.push(handler)};if(!events){return selectors}findHelper(events,types,function(type,handler,selector){add(selector||"",type,handler)},null);return selectors};event.supportTouch="ontouchend"in document;$.fn.respondsTo=function(events){if(!this.length){return false}else{return event.find(this[0],$.isArray(events)?events:[events]).length>0}};$.fn.triggerHandled=function(event,data){event=(typeof event=="string"?$.Event(event):event);this.trigger(event,data);return event.handled};event.setupHelper=function(types,startingEvent,onFirst){if(!onFirst){onFirst=startingEvent;startingEvent=null}var add=function(handleObj){var bySelector,selector=handleObj.selector||"";if(selector){bySelector=event.find(this,types,selector);if(!bySelector.length){$(this).delegate(selector,startingEvent,onFirst)}}else{if(!event.find(this,types,selector).length){event.add(this,startingEvent,onFirst,{selector:selector,delegate:this})}}},remove=function(handleObj){var bySelector,selector=handleObj.selector||"";if(selector){bySelector=event.find(this,types,selector);if(!bySelector.length){$(this).undelegate(selector,startingEvent,onFirst)}}else{if(!event.find(this,types,selector).length){event.remove(this,startingEvent,onFirst,{selector:selector,delegate:this})}}};$.each(types,function(){event.special[this]={add:add,remove:remove,setup:function(){},teardown:function(){}}})}})(jQuery);(function($){var isPhantom=/Phantom/.test(navigator.userAgent),supportTouch=!isPhantom&&"ontouchend"in document,scrollEvent="touchmove scroll",touchStartEvent=supportTouch?"touchstart":"mousedown",touchStopEvent=supportTouch?"touchend":"mouseup",touchMoveEvent=supportTouch?"touchmove":"mousemove",data=function(event){var d=event.originalEvent.touches?event.originalEvent.touches[0]:event;return{time:(new Date).getTime(),coords:[d.pageX,d.pageY],origin:$(event.target)}};var swipe=$.event.swipe={delay:500,max:75,min:30};$.event.setupHelper(["swipe",'swipeleft','swiperight','swipeup','swipedown'],touchStartEvent,function(ev){var start=data(ev),stop,delegate=ev.delegateTarget||ev.currentTarget,selector=ev.handleObj.selector,entered=this;function moveHandler(event){if(!start){return}stop=data(event);if(Math.abs(start.coords[0]-stop.coords[0])>10){event.preventDefault()}};$(document.documentElement).bind(touchMoveEvent,moveHandler).one(touchStopEvent,function(event){$(this).unbind(touchMoveEvent,moveHandler);if(start&&stop){var deltaX=Math.abs(start.coords[0]-stop.coords[0]),deltaY=Math.abs(start.coords[1]-stop.coords[1]),distance=Math.sqrt(deltaX*deltaX+deltaY*deltaY);if(stop.time-start.time<swipe.delay&&distance>=swipe.min){var events=['swipe'];if(deltaX>=swipe.min&&deltaY<swipe.min){events.push(start.coords[0]>stop.coords[0]?"swipeleft":"swiperight")}else if(deltaY>=swipe.min&&deltaX<swipe.min){events.push(start.coords[1]<stop.coords[1]?"swipedown":"swipeup")}$.each($.event.find(delegate,events,selector),function(){this.call(entered,ev,{start:start,end:stop})})}}start=stop=undefined})})})(jQuery);
(function(f,g,d){var c=f(g),e=g.Modernizr;e.addTest("csstransformspreserve3d",function(){var l=e.prefixed("transformStyle");var k="preserve-3d";var j;if(!l){return false}l=l.replace(/([A-Z])/g,function(n,m){return"-"+m.toLowerCase()}).replace(/^ms-/,"-ms-");e.testStyles("#modernizr{"+l+":"+k+";}",function(m,n){j=g.getComputedStyle?getComputedStyle(m,null).getPropertyValue(l):""});return(j===k)});var a=f.event,b,i;b=a.special.debouncedresize={setup:function(){f(this).on("resize",b.handler)},teardown:function(){f(this).off("resize",b.handler)},handler:function(n,j){var m=this,l=arguments,k=function(){n.type="debouncedresize";a.dispatch.apply(m,l)};if(i){clearTimeout(i)}j?k():i=setTimeout(k,b.threshold)},threshold:150};f.BookBlock=function(j,k){this.$el=f(k);this._init(j)};f.BookBlock.defaults={startPage:1,orientation:"vertical",direction:"ltr",speed:1000,easing:"ease-in-out",shadows:true,shadowSides:0.2,shadowFlip:0.1,circular:false,nextEl:"",prevEl:"",autoplay:false,interval:3000,onEndFlip:function(j,l,k){return false},onBeforeFlip:function(j){return false}};f.BookBlock.prototype={_init:function(j){this.options=f.extend(true,{},f.BookBlock.defaults,j);this.$el.addClass("bb-"+this.options.orientation);this.$items=this.$el.children(".bb-item").hide();this.itemsCount=this.$items.length;if((this.options.startPage>0)&&(this.options.startPage<=this.itemsCount)){this.current=(this.options.startPage-1)}else{h("startPage option is out of range");this.current=0}this.previous=-1;this.$current=this.$items.eq(this.current).show();this.elWidth=this.$el.width();var k={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"};this.transEndEventName=k[e.prefixed("transition")]+".bookblock";this.support=e.csstransitions&&e.csstransforms3d&&e.csstransformspreserve3d;this._initEvents();if(this.options.autoplay){this.options.circular=true;this._startSlideshow()}},_initEvents:function(){var j=this;if(this.options.nextEl!==""){f(this.options.nextEl).on("click.bookblock touchstart.bookblock",function(){j._action("next");return false})}if(this.options.prevEl!==""){f(this.options.prevEl).on("click.bookblock touchstart.bookblock",function(){j._action("prev");return false})}c.on("debouncedresize",function(){j.elWidth=j.$el.width()})},_action:function(j,k){this._stopSlideshow();this._navigate(j,k)},_navigate:function(j,k){if(this.isAnimating){return false}this.options.onBeforeFlip(this.current);this.isAnimating=true;this.$current=this.$items.eq(this.current);if(k!==d){this.current=k}else{if(j==="next"&&this.options.direction==="ltr"||j==="prev"&&this.options.direction==="rtl"){if(!this.options.circular&&this.current===this.itemsCount-1){this.end=true}else{this.previous=this.current;this.current=this.current<this.itemsCount-1?this.current+1:0}}else{if(j==="prev"&&this.options.direction==="ltr"||j==="next"&&this.options.direction==="rtl"){if(!this.options.circular&&this.current===0){this.end=true}else{this.previous=this.current;this.current=this.current>0?this.current-1:this.itemsCount-1}}}}this.$nextItem=!this.options.circular&&this.end?this.$current:this.$items.eq(this.current);if(!this.support){this._layoutNoSupport(j)}else{this._layout(j)}},_layoutNoSupport:function(k){this.$items.hide();this.$nextItem.show();this.end=false;this.isAnimating=false;var j=k==="next"&&this.current===this.itemsCount-1||k==="prev"&&this.current===0;this.options.onEndFlip(this.previous,this.current,j)},_layout:function(l){var v=this,u=this._addSide("left",l),o=this._addSide("middle",l),j=this._addSide("right",l),r=u.find("div.bb-overlay"),t=o.find("div.bb-flipoverlay:first"),w=o.find("div.bb-flipoverlay:last"),s=j.find("div.bb-overlay"),k=this.end?400:this.options.speed;this.$items.hide();this.$el.prepend(u,o,j);o.css({transitionDuration:k+"ms",transitionTimingFunction:this.options.easing}).on(this.transEndEventName,function(y){if(f(y.target).hasClass("bb-page")){v.$el.children(".bb-page").remove();v.$nextItem.show();v.end=false;v.isAnimating=false;var x=l==="next"&&v.current===v.itemsCount-1||l==="prev"&&v.current===0;v.options.onEndFlip(v.previous,v.current,x)}});if(l==="prev"){o.addClass("bb-flip-initial")}if(this.options.shadows&&!this.end){var n=(l==="next")?{transition:"opacity "+this.options.speed/2+"ms linear "+this.options.speed/2+"ms"}:{transition:"opacity "+this.options.speed/2+"ms linear",opacity:this.options.shadowSides},q=(l==="next")?{transition:"opacity "+this.options.speed/2+"ms linear"}:{transition:"opacity "+this.options.speed/2+"ms linear "+this.options.speed/2+"ms",opacity:this.options.shadowFlip},m=(l==="next")?{transition:"opacity "+this.options.speed/2+"ms linear "+this.options.speed/2+"ms",opacity:this.options.shadowFlip}:{transition:"opacity "+this.options.speed/2+"ms linear"},p=(l==="next")?{transition:"opacity "+this.options.speed/2+"ms linear",opacity:this.options.shadowSides}:{transition:"opacity "+this.options.speed/2+"ms linear "+this.options.speed/2+"ms"};t.css(q);w.css(m);r.css(n);s.css(p)}setTimeout(function(){o.addClass(v.end?"bb-flip-"+l+"-end":"bb-flip-"+l);if(v.options.shadows&&!v.end){t.css({opacity:l==="next"?v.options.shadowFlip:0});w.css({opacity:l==="next"?0:v.options.shadowFlip});r.css({opacity:l==="next"?v.options.shadowSides:0});s.css({opacity:l==="next"?0:v.options.shadowSides})}},25)},_addSide:function(l,k){var j;switch(l){case"left":j=f('<div class="bb-page"><div class="bb-back"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">'+(k==="next"?this.$current.html():this.$nextItem.html())+'</div></div><div class="bb-overlay"></div></div></div></div>').css("z-index",102);break;case"middle":j=f('<div class="bb-page"><div class="bb-front"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">'+(k==="next"?this.$current.html():this.$nextItem.html())+'</div></div><div class="bb-flipoverlay"></div></div></div><div class="bb-back"><div class="bb-outer"><div class="bb-content" style="width:'+this.elWidth+'px"><div class="bb-inner">'+(k==="next"?this.$nextItem.html():this.$current.html())+'</div></div><div class="bb-flipoverlay"></div></div></div></div>').css("z-index",103);break;case"right":j=f('<div class="bb-page"><div class="bb-front"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">'+(k==="next"?this.$nextItem.html():this.$current.html())+'</div></div><div class="bb-overlay"></div></div></div></div>').css("z-index",101);break}return j},_startSlideshow:function(){var j=this;this.slideshow=setTimeout(function(){j._navigate("next");if(j.options.autoplay){j._startSlideshow()}},this.options.interval)},_stopSlideshow:function(){if(this.options.autoplay){clearTimeout(this.slideshow);this.options.autoplay=false}},next:function(){this._action(this.options.direction==="ltr"?"next":"prev")},prev:function(){this._action(this.options.direction==="ltr"?"prev":"next")},jump:function(k){k-=1;if(k===this.current||k>=this.itemsCount||k<0){return false}var j;if(this.options.direction==="ltr"){j=k>this.current?"next":"prev"}else{j=k>this.current?"prev":"next"}this._action(j,k)},last:function(){this.jump(this.itemsCount)},first:function(){this.jump(1)},isActive:function(){return this.isAnimating},update:function(){var j=this.$items.eq(this.current);this.$items=this.$el.children(".bb-item");this.itemsCount=this.$items.length;this.current=j.index()},destroy:function(){if(this.options.autoplay){this._stopSlideshow()}this.$el.removeClass("bb-"+this.options.orientation);this.$items.show();if(this.options.nextEl!==""){f(this.options.nextEl).off(".bookblock")}if(this.options.prevEl!==""){f(this.options.prevEl).off(".bookblock")}c.off("debouncedresize")}};var h=function(j){if(g.console){g.console.error(j)}};f.fn.bookblock=function(k){if(typeof k==="string"){var j=Array.prototype.slice.call(arguments,1);this.each(function(){var l=f.data(this,"bookblock");if(!l){h("cannot call methods on bookblock prior to initialization; attempted to call method '"+k+"'");return}if(!f.isFunction(l[k])||k.charAt(0)==="_"){h("no such method '"+k+"' for bookblock instance");return}l[k].apply(l,j)})}else{this.each(function(){var l=f.data(this,"bookblock");if(l){l._init()}else{l=f.data(this,"bookblock",new f.BookBlock(k,this))}})}return this}})(jQuery,window);

/* getScrollerWidth */
function getScrollerWidth() {
	var scr = null;
	var inn = null;
	var wNoScroll = 0;
	var wScroll = 0;
	// Outer scrolling div
	scr = document.createElement('div');
	scr.style.position = 'absolute';
	scr.style.top = '-1000px';
	scr.style.left = '-1000px';
	scr.style.width = '100px';
	scr.style.height = '50px';
	// Start with no scrollbar
	scr.style.overflow = 'hidden';
	// Inner content div
	inn = document.createElement('div');
	inn.style.width = '100%';
	inn.style.height = '200px';
	// Put the inner div in the scrolling div
	scr.appendChild(inn);
	// Append the scrolling div to the doc
	document.body.appendChild(scr);
	// Width of the inner div sans scrollbar
	wNoScroll = inn.offsetWidth;
	// Add the scrollbar
	scr.style.overflow = 'auto';
	// Width of the inner div width scrollbar
	wScroll = inn.offsetWidth;
	// Remove the scrolling div from the doc
	document.body.removeChild(
		document.body.lastChild);
	// Pixel width of the scroller
	return (wNoScroll - wScroll);
}
var diceArr = new Array(0,1,2,3,4);
	diceArr[0] = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19);
	diceArr[1] = new Array(0,1,2,3,4,5,6,7,8,9,10,11);
	diceArr[2] = new Array(0,1,2,3,4,5,6,7,8,9,10,11);
	diceArr[3] = new Array(0,1,2,3,4,5,6,7,8,9,10,11);
	diceArr[4] = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12);
	diceArr[0][0] = [0,0,0,0,0,0,0,0,0,0,0,0];
	diceArr[0][1] = [740,154,240,-370,0,-154,922,192,280,-461,0,0];
	diceArr[0][2] = [661,154,240,-330,0,-308,823,192,280,-412,0,-250];
	diceArr[0][3] = [561,154,240,-280,0,-462,699,192,280,-350,0,-500];
	diceArr[0][4] = [441,154,240,-220,-740,-308,549,192,280,-275,0,-750];
	diceArr[0][5] = [321,154,240,-160,-740,-462,399,192,280,-200,-650,-750];
	diceArr[0][6] = [249,154,240,-122,-951,-154,310,192,280,-155,-750,-500];
	diceArr[0][7] = [184,154,240,-92,-951,0,229,192,280,-115,-850,-250];
	diceArr[0][8] = [144,154,240,-72,-756,-154,180,192,280,-90,-950,0];
	diceArr[0][9] = [160,174,244,-88,0,-616,200,217,244,-113,0,-1000];
	diceArr[0][10] = [181,213,214,-132,-160,-616,228,266,207,-163,-300,-1000];
	diceArr[0][11] = [201,235,190,-178,-341,-616,250,293,176,-220,-600,-1000];
	diceArr[0][12] = [194,216,185,-210,-542,-616,242,271,169,-260,-900,-1000];
	diceArr[0][13] = [148,172,190,-230,-740,-616,183,215,176,-285,0,-1300];
	diceArr[0][14] = [173,216,159,-292,-951,-615,216,271,136,-364,-300,-1300];
	diceArr[0][15] = [188,203,147,-351,0,-850,235,254,122,-437,-600,-1300];
	diceArr[0][16] = [194,153,156,-396,-188,-850,243,191,133,-494,-900,-1300];
	diceArr[0][17] = [199,209,154,-434,-382,-850,247,262,130,-540,0,-1600];
	diceArr[0][18] = [188,225,137,-466,-581,-850,234,281,110,-581,-300,-1600];
	diceArr[0][19] = [188,225,150,-482,-769,-850,203,217,126,-600,-600,-1600];
	diceArr[1][0] = [144,154,160,-482,0,0,180,191,150,-600,0,0];
	diceArr[1][1] = [160,173,147,-483,-200,0,200,217,133,-601,0,-300];
	diceArr[1][2] = [182,213,128,-493,-400,0,227,266,109,-614,0,-600];
	diceArr[1][3] = [201,235,117,-502,-600,0,250,293,95,-625,-300,0];
	diceArr[1][4] = [193,217,126,-499,-820,0,242,271,106,-622,-300,-300];
	diceArr[1][5] = [147,172,147,-475,0,-257,184,215,134,-593,-300,-600];
	diceArr[1][6] = [173,217,126,-488,-200,-257,216,270,106,-609,-600,0];
	diceArr[1][7] = [188,203,133,-496,-400,-257,235,253,116,-618,-600,-300];
	diceArr[1][8] = [194,153,158,-499,-600,-257,243,191,146,-622,-600,-600];
	diceArr[1][9] = [199,210,129,-501,-820,-257,247,262,111,-624,-900,0];
	diceArr[1][10] = [187,225,120,-496,0,-480,234,280,101,-618,-900,-300];
	diceArr[1][11] = [162,174,146,-489,-200,-480,203,216,132,-609,-900,-600];
	diceArr[2][0] = [144,155,160,-482,0,0,180,191,150,-600,0,0];
	diceArr[2][1] = [160,173,147,-483,-200,0,200,217,133,-601,0,-300];
	diceArr[2][2] = [182,213,128,-493,-400,0,227,266,109,-614,0,-600];
	diceArr[2][3] = [201,235,117,-502,-600,0,250,293,95,-625,-300,0];
	diceArr[2][4] = [193,217,126,-514,-820,0,242,271,106,-622,-300,-300];
	diceArr[2][5] = [147,172,147,-475,0,-257,184,215,134,-593,-300,-600];
	diceArr[2][6] = [173,217,126,-488,-200,-257,216,270,106,-609,-600,0];
	diceArr[2][7] = [188,203,133,-496,-400,-257,235,253,116,-618,-600,-300];
	diceArr[2][8] = [194,153,158,-499,-600,-257,243,191,146,-622,-600,-600];
	diceArr[2][9] = [199,210,129,-501,-820,-257,247,262,111,-624,-900,0];
	diceArr[2][10] = [187,225,121,-496,0,-480,234,280,101,-618,-900,-300];
	diceArr[2][11] = [162,174,146,-489,-200,-480,203,216,132,-609,-900,-600];
	diceArr[3][0] = [144,155,160,-482,0,0,180,191,150,-600,0,0];
	diceArr[3][1] = [160,173,147,-483,-200,0,200,217,133,-601,0,-300];
	diceArr[3][2] = [182,213,128,-493,-400,0,227,266,109,-614,0,-600];
	diceArr[3][3] = [201,235,117,-502,-600,0,250,293,95,-625,-300,0];
	diceArr[3][4] = [193,217,126,-499,-820,0,242,271,106,-622,-300,-300];
	diceArr[3][5] = [147,172,147,-475,0,-257,184,215,134,-593,-300,-600];
	diceArr[3][6] = [173,217,126,-488,-200,-257,216,270,106,-609,-600,0];
	diceArr[3][7] = [188,203,133,-496,-400,-257,235,253,116,-618,-600,-300];
	diceArr[3][8] = [194,153,158,-499,-600,-257,243,191,146,-622,-600,-600];
	diceArr[3][9] = [199,210,129,-501,-820,-257,247,262,111,-624,-900,0];
	diceArr[3][10] = [187,225,121,-496,0,-480,234,280,101,-618,-900,-300];
	diceArr[3][11] = [162,174,146,-489,-200,-480,203,216,132,-609,-900,-600];
	diceArr[4][0] = [144,155,160,-482,0,0,180,191,150,-600,0,0];
	diceArr[4][1] = [160,173,147,-483,-200,0,200,217,133,-601,0,-300];
	diceArr[4][2] = [182,213,128,-493,-400,0,227,266,109,-614,0,-600];
	diceArr[4][3] = [201,235,117,-502,-600,0,250,293,95,-625,-300,0];
	diceArr[4][4] = [193,217,126,-499,-820,0,242,271,106,-622,-300,-300];
	diceArr[4][5] = [147,172,147,-475,0,-257,184,215,134,-593,-300,-600];
	diceArr[4][6] = [173,217,126,-488,-200,-257,216,270,106,-609,-600,0];
	diceArr[4][7] = [188,203,132,-496,-400,-257,235,253,116,-618,-600,-300];
	diceArr[4][8] = [194,153,158,-499,-600,-257,243,191,146,-622,-600,-600];
	diceArr[4][9] = [199,210,129,-501,-820,-257,247,262,111,-624,-900,0];
	diceArr[4][10] = [187,225,121,-496,0,-480,234,280,101,-618,-900,-300];
	diceArr[4][11] = [162,174,146,-489,-200,-480,203,216,132,-609,-900,-600];

jQuery.fn.pageInit = function(arg) {
	page = jQuery.extend({
		hn : "",
		sn : ""
	}, arg || {});
	var convertObj = function(obj) {
		$.each(obj, function(key, val) {
			if(val == "") {
				var value = -1;
			} else {
				var value = Number(val);
			}
			eval("obj." + key+"=" + value);
		});
	}
	convertObj(arg);
	if(window.console){console.log(arg)};

	var $win = $(window),
		$this = $(this),
		$wrap = $("#wrap", $this),
		$logo = $("h1.logo", $this),
		$header = $("#header", $this),
		$containerWrap = $(".containerWrap", $this),
		$menu = $("#ktngMenu", $this),
		$menuBtn = $(".menuBtn", $this),
		$dim = $(".bodyDimmed", $this),
		$menu1Depth = $("li.hn", $menu),
		$menu1DepthBtn = $("> a.hn", $menu1Depth),
		$menu2Depth = $("ul.sn li", $menu),
		$entireA = $("a", $this),
		$menuA = $("a", $menu),
		$wrapA = $("a", $wrap).not($dim),
		logoOriginalPos = 5,
		menuBtnOriginalPos = 30,
		winW,
		winH,
		menuDur = 200,
		menuEase = "linear",
		menuTimer,
		headerH,
		scrollbarWidth = getScrollerWidth(),
		isMenuOpen = false,

		$container = $("#container"),
		$area = $("> .area", $container),
		$areaBG = $("> .area_bg", $area),
		$visualBg = $(".mainVisual .visual .bg", $container),
		$fixedTitles = $(".title", $container),
		$fixedTitle = [$(".area_0 .title", $container), $(".area_1 .title", $container) , $(".area_2 .title", $container), $(".area_3 .title", $container), $(".area_4 .title", $container)],
		$stage0Cont = $(".area_0 .box"),
		$mainNavi = $("#mainNavi a"),
		minHeight = [681,1024,768,900]
		winW,
		winH,
		stage = 0,
		isDTP = 0,
		framePerStage = [20,12,12,12,13],
		areaTopOffsetArray = new Array(),
		areaHeightArray = new Array(),
		getAreaHeight = function() {
			var h = $win.height();
			if(h < minHeight[isDTP]) {
				h = minHeight[isDTP];
			}
			return h;
		},
		$dice = $("#dice");
	if(jQuery.browser.mobile) {
		$areaBG.css("background-attachment","scroll");
		$visualBg.css("background-attachment","scroll");
	}

	function setDice(stage,frame,scrollTop) {
		$mainNavi.removeClass("on");
		$mainNavi.eq(stage).addClass("on");
		if(!jQuery.browser.mobile) {
			if(stage > 4) {
				$dice.css({
					"display" : "none"
				});
				$fixedTitles.css("display", "");
			} else {
				if(frame == 0) {
					$dice.css({
						"display" : "none"
					});
					$stage0Cont.css("display", "");
					if(isDTP == 2 || isDTP == 3) {
						$fixedTitles.css("display", "none");
						$fixedTitle[stage].css("display", "");
					} else {
						$fixedTitles.css("display", "");
					}
				} else {
					if(isDTP == 2 || isDTP == 3) {
						$stage0Cont.css("display", "none");
					} else {
						$stage0Cont.css("display", "");
					}
					if(isDTP == 2) {
						$dice.css({
							"display" : "",
							"background-image" : "url('/resources/_img/main/dice_s_" + stage + ".png')",
							"width" : diceArr[stage][frame][0] + "px",
							"height" : diceArr[stage][frame][1] + "px",
							"top" : diceArr[stage][frame][2] + scrollTop + "px",
							"margin-left" : diceArr[stage][frame][3] + "px",
							"background-position" : diceArr[stage][frame][4] + "px " + diceArr[stage][frame][5] + "px"
						});
						$fixedTitles.css("display", "none");
					} else if (isDTP == 3) {
						$dice.css({
							"display" : "",
							"background-image" : "url('/resources/_img/main/dice_b_" + stage + ".png')",
							"width" : diceArr[stage][frame][6] + "px",
							"height" : diceArr[stage][frame][7] + "px",
							"top" : diceArr[stage][frame][8] + scrollTop + "px",
							"margin-left" : diceArr[stage][frame][9] + "px",
							"background-position" : diceArr[stage][frame][10] + "px " + diceArr[stage][frame][11] + "px"
						});
						$fixedTitles.css("display", "none");
					} else {
						$dice.css({
							"display" : "none"
						});
						$fixedTitles.css("display", "");
					}
				}
			}
		}
	}
	function moveDice() {
		if(isDTP == 2 || isDTP == 3) {
			var sTop = $win.scrollTop(),
					gap,
					step;
			if(sTop < areaTopOffsetArray[1]) {
				stage = 0;//메인
				gap = Math.ceil(areaHeightArray[0] / framePerStage[0]);
				step = (sTop -  areaTopOffsetArray[0]) / gap;
				step = step & step;
			} else if(sTop < areaTopOffsetArray[2]) {
				stage = 1;//기업소개
				gap = Math.ceil(areaHeightArray[1] / framePerStage[1]);
				step = (sTop -  areaTopOffsetArray[1]) / gap;
				step = step & step;
			} else if(sTop < areaTopOffsetArray[3]) {
				stage = 2;//투자정보
				gap = Math.ceil(areaHeightArray[2] / framePerStage[2]);
				step = (sTop -  areaTopOffsetArray[2]) / gap;
				step = step & step;
			} else if(sTop < areaTopOffsetArray[4]) {
				stage = 3;//홍보채널
				gap = Math.ceil(areaHeightArray[3] / framePerStage[3]);
				step = (sTop -  areaTopOffsetArray[3]) / gap;
				step = step & step;
			} else if(sTop < areaTopOffsetArray[5]) {
				stage = 4;//사회공헌
				gap = Math.ceil(areaHeightArray[4] / framePerStage[4]);
				step = (sTop -  areaTopOffsetArray[4]) / gap;
				step = step & step;
			} else if(sTop < areaTopOffsetArray[6]) {
				stage = 5;//인재채용
				gap = Math.ceil(areaHeightArray[5] / framePerStage[5]);
				step = (sTop -  areaTopOffsetArray[5]) / gap;
				step = step & step;
			} else {//푸터
				stage = 6;
				step = 0;
			}
			step = step & step;
			if(window.console) {
				console.log("stage " + stage + " / frame " + step);
			}
			setDice(stage,step,sTop);
			$header.removeClass("shown");
		} else {
			setDice(0,0,0);
			var sTop = $win.scrollTop();
			if(isDTP == 1) {
				$header.removeClass("shown");
			} else {
				if(sTop < winH) {
					$header.removeClass("shown");
				} else {
					$header.addClass("shown");
				}
			}

		}
	}
	//초기화
		$entireA.each(function() {
			$(this).data("hrefSTR", $(this).attr("href"));
		});
		function init() {
			var winInnerWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			/*
			if(winInnerWidth > 1920) {
				winInnerWidth = 1920;
			}
			*/
			winW = winInnerWidth;// + scrollbarWidth - 2;
			//console.log(winW);
			winH = $win.height();
			//$menu.height(winH);
			$wrap.width(winInnerWidth).css("min-height", winH + "px");
			if(winW >= 768) {
				logoOriginalPos = 20;
				menuBtnOriginalPos = 30;
				isDTP = 1;
				if(winW >= 1024) {
					logoOriginalPos = 20;
					menuBtnOriginalPos = 30;
					isDTP = 2;
					if(winW >= 1280) {
						logoOriginalPos = 20;
						menuBtnOriginalPos = 30;
						isDTP = 3;
					}
				}
			} else {
				logoOriginalPos = 10; 
				menuBtnOriginalPos = 7;
				isDTP = 0;
			}
			headerH = $header.height();
			$containerWrap.css({
				"padding-top" : headerH + "px"
			});
			menuClose();

			$area.each(function(index) {
				$(this).height(getAreaHeight());
				//if(isDTP == 2 || isDTP == 3) {
					areaHeightArray[index] = $(this).height();
					areaTopOffsetArray[index] = $(this).offset().top;
				//}

			});
			moveDice();
		}
	//전체메뉴
		function menuOpen() {
			resetMenu(true);
			$win.scrollTop(0);
			$this.addClass("menuOpen");
			$menu.stop().animate({
				"left" : "0px"
			},{
				queue : false,
				duration : menuDur,
				easing : menuEase
			});
			/*
			$wrap.stop().animate({
				"left" : "270px"
			},{
				queue : false,
				duration : menuDur,
				easing : menuEase
			});
			$logo.stop().animate({
				"right" : logoOriginalPos - 270 + "px"
			},{
				queue : false,
				duration : menuDur,
				easing : menuEase
			});
			$menuBtn.stop().animate({
				"left" : menuBtnOriginalPos + 270 + "px"
			},{
				queue : false,
				duration : menuDur,
				easing : menuEase,
				complete : function(){
					isMenuOpen = true;
				}
			});
			*/
			$dice.css("display", "none");
		}
		function menuClose() {
			$this.removeClass("menuOpen");
			$menu.stop().animate({
				"left" : "-320px"
			},{
				queue : false,
				duration : menuDur,
				easing : menuEase
			});
			/*
			$wrap.stop().animate({
				"left" : "0px"
			},{
				queue : false,
				duration : menuDur,
				easing : menuEase,
				complete : function() {
					$this.removeClass("menuOpen").sass({
						"height" : "auto"
					});
					isMenuOpen = false;
				}
			});
			$logo.stop().animate({
				"right" : logoOriginalPos + "px"
			},{
				queue : false,
				duration : menuDur,
				easing : menuEase
			});
			$menuBtn.stop().animate({
				"left" : menuBtnOriginalPos + "px"
			},{
				queue : false,
				duration : menuDur,
				easing : menuEase
			});
			*/
		}
		function resetMenu(bool) {
			$menu1Depth.removeClass("on");
			if(bool) {
				$menu1Depth.filter(".hn" + page.hn).addClass("on").find("> ul.sn > li").filter(".sn" + page.sn).addClass("on");
			}
		}
	//bind
		$menuBtn.bind("click" , function(){
			clearTimeout(menuTimer);
			//if(!isMenuOpen) {
				menuOpen();
			//} else {
			//	menuClose();
			//}
			return false;
		});
		$(".menuBtnClose").bind("click", function() {
			menuClose();
			return false;
		});

		/*
		$menuA.bind("focus", function() {
			clearTimeout(menuTimer);
			menuOpen();
		}).bind("focusout", function() {
			menuTimer = setTimeout(function() {
				menuClose();
			}, 500);
		});
		*/
		$dim.bind("click", function() {
			menuClose();
			return false;
		});
		$menu1DepthBtn.bind("click", function() {
			resetMenu();
			$(this).parent().addClass("on");
			return false;
		});
		$win.bind("resize", function() {
			init();
			moveDice();
		});
		$win.bind("scroll", function(e) {
			moveDice();
		});
		$mainNavi.bind("click", function() {
			var naviIndex = $mainNavi.index($(this)[0]);
			$("body, html").stop().animate({
				"scrollTop" : areaTopOffsetArray[naviIndex] + "px"
			}, {
				duration:600,
				queue:false,
				easing:"linear"
			});
			return false;
		});
		$(".area_h a.title1").bind("click", function() {
			var i = $(".area_h a.title1").index($(this)[0]) + 1;
			$("body, html").stop().animate({
				"scrollTop" : areaTopOffsetArray[i] + "px"
			}, {
				duration:600,
				queue:false,
				easing:"linear"
			});
			return false;

		});

	init();
	
}

//youtube
	var host = "//www.ktng.com//"; //도메인 설정 필수
	if(!jQuery.browser.mobile){  //2014-04-07 조건 삭제
		var $frames = $(".moviebg"),
			$movie = $frames.find("> .movieFrame"),
			movieList = new Array();
		$movie .each(function(i) {
			movieList[i] = $(this).data("movieid");
		});
		var youtubeEmbedOption = {
				"loop": 1,
				"modestbranding": 1,
				"rel": 0,
				"hd": 1,
				"html5": 0,
				"vq": "hd720",
				"iv_load_policy": 3,
				"controls": 0,
				"showinfo": 0,
				"showsearch": 0,
				"autohide": 1,
				"enablejsapi": 1,
				"wmode": "opaque",
				"quality": "hd720",
				"origin": host
			};
		//https://www.youtube.com/iframe_api start
		if (!window['YT']) {var YT = {loading: 0,loaded: 0};}if (!window['YTConfig']) {var YTConfig = {};}if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};var a = document.createElement('script');a.src = 'http:' + '//s.ytimg.com/yts/jsbin/www-widgetapi-vflvlw_TO.js';a.async = true;var b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a, b);})();}
		//https://www.youtube.com/iframe_api end
		var player = new Array();
		function onYouTubeIframeAPIReady() {
			for(i=0;i < $frames.length;i++) {
				player[i] = new YT.Player("player" + i, {
					width: 472,
					height: 180,
					videoId: movieList[i],
					playerVars: youtubeEmbedOption,
					events: {
						"onReady" : onPlayerReady,
						"onStateChange" : onPlayerStateChange
					}
				});
			}
		}
		function onPlayerReady(event) {
			event.target.mute();
			event.target.playVideo();
		}

		function onPlayerStateChange(event) {
			event.target.playVideo();
		}
		$(".html5movie a").bind("mouseenter", function() {
			$(this).find(".dim").stop().animate({
				"opacity" : "0"
			}, {
				queue:false,
				duration:200
			});
			$(this).find(".txt").hide();
		}).bind("mouseleave", function() {
			$(this).find(".dim").stop().animate({
				"opacity" : "0.5"
			}, {
				queue:false,
				duration:200
			});
			$(this).find(".txt").show();		
		});
	} else {
		$(".moviebg").remove();
	}

//main Visual
jQuery.fn.mainVisual = function() {
	var $vi = $(this),
		$v_btns = $(".paging", $vi),
		$v_controll = $(".controll", $vi),
		$v = $(".visual", $vi),
		v_index = 0,
		v_max = $v.length,
		v_auto = true,
		v_timer;
	function v_next() {
		clearTimeout(v_timer);
		if(v_auto == true) {
			v_timer = setTimeout(function(){
				v_index++;
				if(v_index == v_max) {
					v_index = 0;
				}
				showVi(v_index);
			}, 7000);
		}
	}
	function showVi(i) {
		$v_btns.removeClass("on");
		$v_btns.eq(i).addClass("on");
		if($v.eq(i).hasClass("on") == false) {
			v_index = i;
			$v.css({
				"z-index" : "1",
				"left" : "0"
			});
			$v.filter(".on").css({
				"z-index" : "3",
				"left" : "0"
			});
			$v.eq(i).css({
				"z-index" : "2",
				"left" : "0"
			});
			$v.filter(".on").stop().animate({
				"left" : "-100%"
			},{
				queue:false,
				duration:1500,
				easing:"easeOutCirc",
				complete:function() {
					$v.removeClass("on").css({
						"z-index" : "",
						"left" : "0"
					});
					$v.eq(i).addClass("on").css({
						"z-index" : "",
						"left" : "0"
					});
				}
			});
			v_next();
		}
	}
	$v_btns.bind("click", function() {
		clearTimeout(v_timer);
		var vindex = $v_btns.index($(this)[0]);
		showVi(vindex);
		return false;
	});
	$v_controll.bind("click", function() {
		if(v_auto == true) {
			$(this).addClass("stopped").text("자동재생 켜기");
			v_auto = false;
			clearTimeout(v_timer);
		} else {
			$(this).removeClass("stopped").text("자동재생 끄기");
			v_auto = true;
			v_next();
		}
	});
	v_next();

};
$(".mainVisual").mainVisual();
var Page = (function() {
	var $grid = $( '#container' );
	return {
		init : function() {
			$grid.find( 'div.bb-bookblock' ).each( function( i ) {
				
				var $bookBlock = $( this ),
					$nav =  $(".bookBlockNav", $bookBlock);
				if($bookBlock.is(".auto-bookblock")) {
					var bb = $bookBlock.bookblock({
						speed : 1000,
						orientation : 'horizontal',
						shadows     : true,
						shadowSides : 0.2,
						shadowFlip  : 0.1,
						autoplay : true,
						interval : 5000
					});
				} else {
					var bb = $bookBlock.bookblock({
						speed : 1000,
						orientation : 'horizontal',
						shadows     : true,
						shadowSides : 0.2,
						shadowFlip  : 0.1
					});
				}
				// add navigation events
				$nav.each( function( i ) {
					$( this ).on( 'click touchstart', function( event ) {
						var $dot = $( this );
						$nav.removeClass( 'bb-current' );
						$dot.addClass( 'bb-current' );
						$bookBlock.bookblock( 'jump', i + 1 );
						return false;
					} );
				} );
				
				// add swipe events
				$bookBlock.children().on( {
					'swipeleft' : function( event ) {
						$bookBlock.bookblock( 'next' );
						return false;
					},
					'swiperight' : function( event ) {
						$bookBlock.bookblock( 'prev' );
						return false;
					}

				} );
				
			} );
		}
	};
})();
var familySiteOpen = false;
$(document).on("click", "a.familysite", function() {
	if(familySiteOpen == false) {
		$(this).addClass("on");
		$(".familysitePop").addClass("on");
		familySiteOpen = true;
	} else {
		$(this).removeClass("on");
		$(".familysitePop").removeClass("on");
		familySiteOpen = false;
	}
	return false;
});
$(document).on("click", "a.fPopClose", function() {
	$(".familysite").removeClass("on");
	$(".familysitePop").removeClass("on");
	familySiteOpen = false;
	return false;
});

// footer 레이어팝업
function footerPopClose(obj) {
	$(".fpop_wrap").remove();
	$(obj).parent().parent().parent().remove();
}
$(".f_email").bind("click", function() {
	$("body").append("<div class=\"fpop_wrap\"></div><div class=\"foo_pop mail\"></div>");
	$(".foo_pop").load("/resources/html/mail_pop.html");
	return false;
});

$(".f_browser").bind("click", function() {
	$("body").append("<div class=\"fpop_wrap\"></div><div class=\"foo_pop browser\"></div>");
	$(".foo_pop").load("/resources/html/browser_pop.html");
	return false;
});


$(".preLoader .buffer img").imgpreload(function() {
	$(".preLoader").css("display","none");
	$("body").removeClass("loading");
	jQuery(".bodWrap").pageInit({hn:0});
	Page.init();
});
$(document).on("change", ".familysiteSel", function(e) {
	location.href = e.target.value;
});
// 쿠키 2014-07-buttonEffect
var numberofpopup = 0,
	$layerPop = $(".layerPop"),
	$layerPopDim = $(".popDimmed");

function setCookie(name, value, expiredays) {
	var todayDate = new Date();
	todayDate.setDate(todayDate.getDate() + expiredays);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
function getCookie(name) {
	var nameOfCookie = name + "=";
	var x = 0;
	while (x <= document.cookie.length) {
		var y = (x+nameOfCookie.length);
		if(document.cookie.substring(x, y) == nameOfCookie) {
			if((endOfCookie=document.cookie.indexOf( ";", y )) == -1) {
				endOfCookie = document.cookie.length;
			}
			return unescape(document.cookie.substring(y, endOfCookie));
		}
		x = document.cookie.indexOf(" ", x) + 1;
		if(x == 0) {
			break;  
		}
	}  
	return "";  
}  
$(document).on("click", ".btn_popclose", function() {
	$(this).parent().removeClass("on");
	/*
	numberofpopup--;
	if(numberofpopup == 0) {
		$layerPop.removeClass("on");
		$layerPopDim.removeClass("on");
	}
	*/
	return false;
})
$(document).on("click", ".chk_popclose", function() {
	var popid = $(this).parent().parent().attr("id");
	setCookie( popid, "done" , 1);   
	$(this).parent().parent().removeClass("on");
	/*
	numberofpopup--;
	if(numberofpopup == 0) {
		$layerPop.removeClass("on");
		$layerPopDim.removeClass("on");
	}
	*/
	return false;
});
$(".popbody").each(function() {
	var popCookie = getCookie($(this).attr("id"));
	if(!popCookie) {
		//$layerPop.addClass("on");
		//$layerPopDim.addClass("on");
		$(this).addClass("on");
		//numberofpopup++;
	}
});