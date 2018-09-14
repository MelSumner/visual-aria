/*!
Visual ARIA Bookmarklet (CSS: 08/06/2018), JS last modified 09/11/2018
Copyright 2018 Bryan Garaventa
https://github.com/accdc/visual-aria
Part of the ARIA Role Conformance Matrices, distributed under the terms of the Open Source Initiative OSI - MIT License
*/
!function(){var e,t;if(e=this,t=function(){"use strict";function u(e){return"function"==typeof e}var r=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},a=0,t=void 0,i=void 0,l=function(e,t){b[a]=e,b[a+1]=t,2===(a+=2)&&(i?i(f):A())};var e="undefined"!=typeof window?window:void 0,o=e||{},n=o.MutationObserver||o.WebKitMutationObserver,s="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function c(){var e=setTimeout;return function(){return e(f,1)}}var b=new Array(1e3);function f(){for(var e=0;e<a;e+=2){(0,b[e])(b[e+1]),b[e]=void 0,b[e+1]=void 0}a=0}var p,m,g,h,A=void 0;function w(e,t){var r=this,a=new this.constructor(x);void 0===a[v]&&B(a);var i=r._state;if(i){var o=arguments[i-1];l(function(){return E(i,a,o,r._result)})}else C(r,a,e,t);return a}function y(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(x);return L(t,e),t}A=s?function(){return process.nextTick(f)}:n?(m=0,g=new n(f),h=document.createTextNode(""),g.observe(h,{characterData:!0}),function(){h.data=m=++m%2}):d?((p=new MessageChannel).port1.onmessage=f,function(){return p.port2.postMessage(0)}):void 0===e&&"function"==typeof require?function(){try{var e=Function("return this")().require("vertx");return void 0!==(t=e.runOnLoop||e.runOnContext)?function(){t(f)}:c()}catch(e){return c()}}():c();var v=Math.random().toString(36).substring(2);function x(){}var I=void 0,R=1,V=2,k={error:null};function _(e){try{return e.then}catch(e){return k.error=e,k}}function T(e,t,r){var a,i,o,n;t.constructor===e.constructor&&r===w&&t.constructor.resolve===y?(o=e,(n=t)._state===R?M(o,n._result):n._state===V?S(o,n._result):C(n,void 0,function(e){return L(o,e)},function(e){return S(o,e)})):r===k?(S(e,k.error),k.error=null):void 0===r?M(e,t):u(r)?(a=t,i=r,l(function(t){var r=!1,e=function(e,t,r,a){try{e.call(t,r,a)}catch(e){return e}}(i,a,function(e){r||(r=!0,a!==e?L(t,e):M(t,e))},function(e){r||(r=!0,S(t,e))},t._label);!r&&e&&(r=!0,S(t,e))},e)):M(e,t)}function L(e,t){var r,a;e===t?S(e,new TypeError("You cannot resolve a promise with itself")):(a=typeof(r=t),null===r||"object"!==a&&"function"!==a?M(e,t):T(e,t,_(t)))}function O(e){e._onerror&&e._onerror(e._result),N(e)}function M(e,t){e._state===I&&(e._result=t,e._state=R,0!==e._subscribers.length&&l(N,e))}function S(e,t){e._state===I&&(e._state=V,e._result=t,l(O,e))}function C(e,t,r,a){var i=e._subscribers,o=i.length;e._onerror=null,i[o]=t,i[o+R]=r,i[o+V]=a,0===o&&e._state&&l(N,e)}function N(e){var t=e._subscribers,r=e._state;if(0!==t.length){for(var a=void 0,i=void 0,o=e._result,n=0;n<t.length;n+=3)a=t[n],i=t[n+r],a?E(r,a,i,o):i(o);e._subscribers.length=0}}function E(e,t,r,a){var i=u(r),o=void 0,n=void 0,l=void 0,s=void 0;if(i){if((o=function(e,t){try{return e(t)}catch(e){return k.error=e,k}}(r,a))===k?(s=!0,n=o.error,o.error=null):l=!0,t===o)return void S(t,new TypeError("A promises callback cannot return that same promise."))}else o=a,l=!0;t._state!==I||(i&&l?L(t,o):s?S(t,n):e===R?M(t,o):e===V&&S(t,o))}var q=0;function B(e){e[v]=q++,e._state=void 0,e._result=void 0,e._subscribers=[]}var H=function(){function e(e,t){this._instanceConstructor=e,this.promise=new e(x),this.promise[v]||B(this.promise),r(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?M(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&M(this.promise,this._result))):S(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===I&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,a=r.resolve;if(a===y){var i=_(t);if(i===w&&t._state!==I)this._settledAt(t._state,e,t._result);else if("function"!=typeof i)this._remaining--,this._result[e]=t;else if(r===j){var o=new r(x);T(o,t,i),this._willSettleAt(o,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(a(t),e)},e.prototype._settledAt=function(e,t,r){var a=this.promise;a._state===I&&(this._remaining--,e===V?S(a,r):this._result[t]=r),0===this._remaining&&M(a,this._result)},e.prototype._willSettleAt=function(e,t){var r=this;C(e,void 0,function(e){return r._settledAt(R,t,e)},function(e){return r._settledAt(V,t,e)})},e}();var j=function(){function t(e){this[v]=q++,this._result=this._state=void 0,this._subscribers=[],x!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(t,e){try{e(function(e){L(t,e)},function(e){S(t,e)})}catch(e){S(t,e)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},t}();return j.prototype.then=w,j.all=function(e){return new H(this,e).promise},j.race=function(i){var o=this;return r(i)?new o(function(e,t){for(var r=i.length,a=0;a<r;a++)o.resolve(i[a]).then(e,t)}):new o(function(e,t){return t(new TypeError("You must pass an array to race."))})},j.resolve=y,j.reject=function(e){var t=new this(x);return S(t,e),t},j._setScheduler=function(e){i=e},j._setAsap=function(e){l=e},j._asap=l,j.polyfill=function(){var e=void 0;if("undefined"!=typeof global)e=global;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var r=null;try{r=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===r&&!t.cast)return}e.Promise=j},(j.Promise=j).polyfill(),j},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.ES6Promise=t(),window.VisualARIA={},!document.getElementById("ws-bm-aria-matrices-lnk")){var r=document.createElement("span");r.className="WS-BM-Loading-Msg",r.innerHTML='<span role="alert" style="position: fixed; z-index:10000; color: white; background-color: black; border: inset thick gray; top: 40%; left: 35%; padding: 20px; font-size: 18pt;">Loading Visual ARIA, please wait.<br /><i>(Hold down Ctrl+Shift then Left-click any role for more details.)</i></span>',window.VisualARIA.VisualARIALoadingMsg=r,document.body.appendChild(window.VisualARIA.VisualARIALoadingMsg)}window.top.VisualARIA.IsVisualARIALoaded=!0,window.VisualARIA.toggleVisualARIA=function(){window.VisualARIA.VisualARIALoadingMsg&&(window.VisualARIA.VisualARIALoadingMsg.parentNode.removeChild(window.VisualARIA.VisualARIALoadingMsg),window.VisualARIA.VisualARIALoadingMsg=null),window.top.VisualARIA.IsVisualARIALoaded=!window.top.VisualARIA.IsVisualARIALoaded,window.VisualARIA.VisualARIAToggle.setAttribute("aria-label",window.top.VisualARIA.IsVisualARIALoaded?"Unload Visual ARIA":"Load Visual ARIA"),window.VisualARIA.VisualARIAToggle.innerHTML=window.VisualARIA.getVisualARIAStatus().lng},window.VisualARIA.getVisualARIAStatus=function(){return{lng:window.top.VisualARIA.IsVisualARIALoaded?"Unload Visual ARIA":"Load Visual ARIA",shrt:window.top.VisualARIA.IsVisualARIALoaded?"X":"O"}};var H=function(e,k,_,T,fe,L,O,M,S){var C=this,N=function(e){return"string"!=typeof e?"":e.replace(/^\s+|\s+$/g,"")},E=null,q=null;L="aria-disabled,aria-readonly,aria-haspopup,aria-orientation,aria-label,aria-labelledby,aria-describedby,aria-pressed,aria-checked,aria-valuemin,aria-valuemax,aria-valuenow,aria-valuetext,aria-controls,aria-autocomplete,aria-expanded,aria-owns,aria-activedescendant,aria-posinset,aria-setsize,aria-level,role,alt".split(","),O=function(e,t){for(;e;)if((e=e.parentNode).getAttribute("role")==t)return"true";return"false"},M=function(e,t,r,a,i,o,n,l){if(window.top.VisualARIA.IsVisualARIALoaded){S&&S.init&&(S.comboboxListbox||fe.getElementById("ws-visual-aria-7")||!fe.querySelectorAll('*[role="combobox"], *[role="listbox"], *[role="option"]').length||(S.comboboxListbox=!0,B("7combobox-listbox.css","7")),S.menuMenubar||fe.getElementById("ws-visual-aria-8")||!fe.querySelectorAll('*[role="menu"], *[role="menubar"], *[role="menuitem"], *[role="menuitemradio"], *[role="menuitemcheckbox"]').length||(S.menuMenubar=!0,B("8menu-menubar.css","8")),S.radiogroup||fe.getElementById("ws-visual-aria-9")||!fe.querySelectorAll('*[role="radiogroup"], *[role="radio"]').length||(S.radiogroup=!0,B("9radiogroup.css","9")),S.tablist||fe.getElementById("ws-visual-aria-10")||!fe.querySelectorAll('*[role="tablist"], *[role="tab"], *[role="tabpanel"]').length||(S.tablist=!0,B("10tablist.css","10")),S.tree||fe.getElementById("ws-visual-aria-11")||!fe.querySelectorAll('*[role="tree"], *[role="treeitem"]').length||(S.tree=!0,B("11tree.css","11")),S.treegridGridTable||fe.getElementById("ws-visual-aria-12")||!fe.querySelectorAll('*[role="treegrid"], *[role="grid"], *[role="table"], *[role="rowgroup"], *[role="row"], *[role="columnheader"], *[role="rowheader"], *[role="gridcell"], *[role="cell"]').length||(S.treegridGridTable=!0,B("12treegrid-grid-table.css","12"))),S&&!S.init&&(S.init=!0,B("1roles.css","1"),S.landmarks=!0,B("2landmarks.css","2"),S.structural=!0,B("3structural.css","3"),S.dialogs=!0,B("4dialogs.css","4"),S.liveRegions=!0,B("5live-regions.css","5"),S.simpleWidgets=!0,B("6simple-widgets.css","6")),e=fe.querySelectorAll("input[aria-owns], img[aria-owns], area[aria-owns], hr[aria-owns]");for(V=0;V<e.length;V++)e[V].setAttribute("data-ws-bm-aria-owns-invalid","true"),e[V].parentNode.setAttribute("data-ws-bm-aria-owns-invalid",e[V].nodeName.toUpperCase());e=fe.querySelectorAll("input, *[role], img, progress"),t={},n=function(e,t,r){if(!e||1!==e.nodeType||!N(t)||!N(r)||-1===" application banner complementary contentinfo form main navigation region search article directory document list note table toolbar feed log status combobox grid listbox menu menubar radiogroup tablist tabpanel tree group treegrid ".indexOf(" "+t+" "))return!1;for(var a=!1,i=r.split(" "),o=0;o<i.length;o++)fe.getElementById(i[o])==e&&(a=!0);return a&&e.setAttribute("data-ws-bm-self-ref","true"),a},l=function(e){for(var t=!0,r=e.split(" "),a=0;a<r.length;a++){var i=fe.getElementById(r[a]);i&&1===i.nodeType&&"term"!=i.getAttribute("role")&&(i.setAttribute("data-ws-bm-dtr-missing","true"),t=!1)}return t};for(V=0;V<e.length;V++){for(var s=0;s<L.length;s++)t[L[s]]=e[V].getAttribute(L[s])||null;if(t["node-name"]=e[V].nodeName.toLowerCase(),t.tabindex=e[V].getAttribute("tabindex"),t["input-type"]="input"==t["node-name"]?e[V].getAttribute("type"):null,"radio"==t.role?t["role-nested"]=O(e[V],"radiogroup"):"tab"==t.role?t["role-nested"]=O(e[V],"tablist"):"treeitem"==t.role&&(t["role-nested"]=O(e[V],"tree")),n(e[V],t.role,t["aria-labelledby"]),"definition"==t.role&&t["aria-labelledby"]&&l(t["aria-labelledby"]),-1!==" input img progress ".indexOf(" "+t["node-name"]+" ")&&i!=e[V].parentNode)for(var u in i=e[V].parentNode,t)t[u]||!isNaN(parseInt(t[u]))?i.setAttribute("data-ws-bm-"+u,t[u]):i.removeAttribute("data-ws-bm-"+u)}if((a=fe.querySelectorAll("*[aria-describedby]:focus")).length)for(var d=a[0].getAttribute("aria-describedby").split(" "),c=0;c<d.length;c++){var b=fe.getElementById(d[c]);b&&1===b.nodeType&&b.setAttribute("data-ws-bm-db-match",d[c])}var f=null;if((a=fe.querySelectorAll("*[aria-activedescendant]:focus")).length&&(f=fe.getElementById(a[0].getAttribute("aria-activedescendant"))),a.length&&f&&a[0]==E&&f==q||!q||1!==q.nodeType||!q.getAttribute("data-ws-bm-ad-match")||(q.removeAttribute("data-ws-bm-ad-match"),q.removeAttribute("data-ws-bm-ad-invalid"),q=null),f&&1===f.nodeType){E=a[0];var p=(q=f).nodeName.toLowerCase(),m=f.getAttribute("href"),g=f.getAttribute("role");!g&&"a"==p&&m?g="link":g||"button"!=p||(g="button"),f.setAttribute("data-ws-bm-ad-match",g),g||f.setAttribute("data-ws-bm-ad-invalid","true")}o=fe.querySelectorAll('*[hidefocus="true"]');for(var h=0;h<o.length;h++)o[h].removeAttribute("hidefocus");r=fe.querySelectorAll("frame, iframe");for(var A=0;A<r.length;A++)try{r[A].contentDocument&&r[A].contentDocument.head&&!r[A].contentDocument.WSBMInit&&(r[A].contentDocument.WSBMInit=H,r[A].contentDocument.WSBMInit(!1,k,_,T,r[A].contentDocument))}catch(e){}for(var w=fe.querySelectorAll('*[role="presentation"], *[role="none"]'),y=0;y<w.length;y++){var v=w[y],x=v.getAttribute("role"),I=v.nodeName.toUpperCase(),R="none"==x?"data-ws-role-none":"data-ws-role-presentation";-1!==" input textarea img progress ".indexOf(" "+I.toLowerCase()+" ")?v.parentNode.setAttribute(R,I):v.setAttribute(R,I)}}else if(C.cssLinks&&C.cssLinks.length){for(var V=0;V<C.cssLinks.length;V++)C.cssLinks[V].parentNode.removeChild(C.cssLinks[V]);C.cssLinks=[],S={init:!1,landmarks:!1,structural:!1,dialogs:!1,liveRegions:!1,simpleWidgets:!1,comboboxListbox:!1,menuMenubar:!1,radiogroup:!1,tablist:!1,tree:!1,treegridGridTable:!1}}setTimeout(M,T)};var t,r,a,i=function(){for(var e=function(e,t,G){var r={name:"",desc:""};if(!e||1!==e.nodeType)return r;var F=e,K=[],Y=[],$=function(j,z,D,P,W,U){var e={name:"",title:""},n=function(e,t){for(var r=[];e;){if((e=e.id&&U[e.id]&&U[e.id].node&&-1===r.indexOf(e)?(r.push(e),U[e.id].node):e.parentNode)&&e===t)return!0;if(!e||e===U.top||e===fe.body)return!1}return!1},t={before:"",after:""};if(U.ref){if(le(j,fe.body,!0,!0))return e;if(ne(j,fe.body))var X=!0}-1===K.indexOf(j)&&(t=ue(j,null),G&&(-1===t.before.indexOf(" [ARIA] ")&&-1===t.before.indexOf(" aria-")&&-1===t.before.indexOf(" accName: ")||(t.before=""),-1===t.after.indexOf(" [ARIA] ")&&-1===t.after.indexOf(" aria-")&&-1===t.after.indexOf(" accDescription: ")||(t.after="")));var l=function(e,t,r){var a={name:"",title:""};if(!e)return a;var i=!(!e||1!==e.nodeType||!c(e)),o=t(e)||{};if(o.name&&o.name.length&&(a.name+=o.name),!function(e,t){if(!t||!e||1!==t.nodeType||1!==e.nodeType)return!1;var r=function(e,t){var r=Q(e),a=e.nodeName.toLowerCase();return r&&0<=t.roles.indexOf(r)||!r&&0<=t.tags.indexOf(a)};return r(e,d)?e!==t||e.id&&U[e.id]&&U[e.id].node?!(n(e,U.top)&&"select"!==e.nodeName.toLowerCase()||r(t,s)):!J(e):!(!r(e,u)&&(e!==F||r(e,s)))}(e,U.top))for(e=e.firstChild;e;)a.name+=l(e,t,r).name,e=e.nextSibling;return a.name+=o.owns||"",!be(a.name)&&be(o.title)?a.name=f(o.title):a.title=f(o.title),be(o.desc)&&(a.title=f(o.desc)),(i||o.isWidget)&&(a.name=f(a.name)),a};return(e=l(j,function(e){var t=0,r=null,a=[],i=[],o={name:"",title:"",owns:""},n=!!(e&&1===e.nodeType&&P&&P.length&&-1!==P.indexOf(e)&&e===F&&e!==j);if((D||!e||-1!==K.indexOf(e)||!X&&ne(e,U.top))&&!W&&!n)return o;-1===K.indexOf(e)&&K.push(e);var l="",s="",u={before:"",after:""},d=j===e?e:e.parentNode;if(-1===K.indexOf(d)&&(K.push(d),u=ue(d,j),G&&(-1===u.before.indexOf(" [ARIA] ")&&-1===u.before.indexOf(" aria-")&&-1===u.before.indexOf(" accName: ")||(u.before=""),-1===u.after.indexOf(" [ARIA] ")&&-1===u.after.indexOf(" aria-")&&-1===u.after.indexOf(" accDescription: ")||(u.after=""))),1===e.nodeType){var c=e.getAttribute("aria-labelledby")||"",b=e.getAttribute("aria-describedby")||"",f=e.getAttribute("aria-label")||"",p=e.getAttribute("title")||"",m=e.nodeName.toLowerCase(),g=Q(e),h=-1!==Z.indexOf(m),A=-1!==["input"].indexOf(m),w=-1!==ee.indexOf(g),y=-1!==te.indexOf(g),v=-1!==re.indexOf(g),x=w||y||v||"combobox"===g,I=(x||-1!==ae.indexOf(g))&&"link"!==g;o.isWidget=h||I;var R=!1,V=e.getAttribute("aria-owns")||"",k=!(n||!(e!==j&&(h||x)||e.id&&U[e.id]&&U[e.id].target&&U[e.id].target===e));if(!z&&e===j){if(c){for(a=c.split(/\s+/),i=[],t=0;t<a.length;t++)r=fe.getElementById(a[t]),i.push($(r,!0,D,[e],r===j,{ref:U,top:r}).name);l=be(i.join(" ")),be(l)&&(D=R=!0)}if(b){var _;for(a=b.split(/\s+/),i=[],t=0;t<a.length;t++)r=fe.getElementById(a[t]),i.push($(r,!0,!1,[e],!1,{ref:U,top:r}).name);_=be(i.join(" ")),be(_)&&(o.desc=_)}}if(k&&(P&&P.length&&-1!==P.indexOf(e)||(w?l=se(g,e,!0):y||"combobox"===g&&h?l=se(g,e,!1,!0):v?l=se(g,e,!1,!1,!0):!h||-1===["input","textarea"].indexOf(m)||I&&!y?!h||"select"!==m||I&&"combobox"!==g||(l=se(g,e,!1,!1,!0,!0)):l=se(g,e,!1,!1,!1,!0),l=be(l)),be(l)&&(R=!0)),R||!be(f)||k||be(l=f)&&(R=!0,e===j&&(D=!0)),!R&&e===j&&h){var T=fe.querySelectorAll("label"),L=de(e,"label")||!1,O=!(!e.id||!fe.querySelectorAll('label[for="'+e.id+'"]').length)&&fe.querySelector('label[for="'+e.id+'"]'),M=0,S=0;for(t=0;t<T.length;t++)T[t]===L?M=t:T[t]===O&&(S=t);var C=!!(L&&1===L.nodeType&&O&&1===O.nodeType&&M<S);L&&O&&C?l=be($(L,!0,D,[e],!1,{ref:U,top:L}).name+" "+$(O,!0,D,[e],!1,{ref:U,top:O}).name):O&&L?l=be($(O,!0,D,[e],!1,{ref:U,top:O}).name+" "+$(L,!0,D,[e],!1,{ref:U,top:L}).name):O?l=be($(O,!0,D,[e],!1,{ref:U,top:O}).name):L&&(l=be($(L,!0,D,[e],!1,{ref:U,top:L}).name)),be(l)&&(R=!0)}var N=A&&e.getAttribute("type")||!1,E=N&&be(e.getAttribute("value"))||!1,q=!(R||!g||-1===ie.indexOf(g)||J(e)||oe(e)),B=q?"":be(e.getAttribute("alt"));if(R||q||"img"!==m&&"image"!==N||!B||(l=be(B),be(l)&&(R=!0)),!R&&e===j&&N&&-1!==["button","image","submit","reset"].indexOf(N)){if(E)l=E;else switch(N){case"submit":case"image":l="Submit Query";break;case"reset":l="Reset";break;default:l=""}be(l)&&(R=!0)}if(R&&e===j&&N&&-1!==["button","submit","reset"].indexOf(N)&&E&&E!==l&&!o.desc&&(o.desc=E),q||!be(p)||k||e===j&&(o.title=be(p)),V&&!h&&"img"!==m){for(a=V.split(/\s+/),i=[],t=0;t<a.length;t++)if((r=fe.getElementById(a[t]))&&-1===Y.indexOf(a[t])){Y.push(a[t]);var H={ref:U,top:U.top};H[a[t]]={refNode:j,node:e,target:r},le(r,fe.body,!0)||i.push($(r,!0,D,[],!1,H).name)}s=i.join("")}}else 3===e.nodeType&&(l=e.data);return(l=u.before+l.replace(/\s+/g," ")+u.after).length&&!ce(e,U.top,U,X)&&(o.name=l),o.owns=s,o},j)).name=t.before+e.name.replace(/\s+/g," ")+t.after,e},Q=function(e){var t=e&&e.getAttribute?e.getAttribute("role"):"";if(!be(t))return"";for(var r=function(e){return 0<be(t).length&&0<=e.roles.indexOf(t)},a=t.split(/\s+/),i=0;i<a.length;i++)if(t=a[i],r(s)||r(u)||r(d)||-1!==ie.indexOf(t))return t;return""},J=function(e){var t=e.nodeName.toLowerCase();return!!e.getAttribute("tabindex")||(!("a"!==t||!e.getAttribute("href"))||-1!==["button","input","select","textarea"].indexOf(t)&&"hidden"!==e.getAttribute("type"))},s={roles:["button","checkbox","link","option","radio","switch","tab","treeitem","menuitem","menuitemcheckbox","menuitemradio","cell","gridcell","columnheader","rowheader","tooltip","heading"],tags:["a","button","summary","input","h1","h2","h3","h4","h5","h6","menuitem","option","td","th"]},u={roles:["application","alert","log","marquee","timer","alertdialog","dialog","banner","complementary","form","main","navigation","region","search","article","document","feed","figure","img","math","toolbar","menu","menubar","grid","listbox","radiogroup","textbox","searchbox","spinbutton","scrollbar","slider","tablist","tabpanel","tree","treegrid","separator"],tags:["article","aside","body","select","datalist","optgroup","dialog","figure","footer","form","header","hr","img","textarea","input","main","math","menu","nav","section"]},d={roles:["term","definition","directory","list","group","note","status","table","rowgroup","row","contentinfo"],tags:["dl","ul","ol","dd","details","output","table","thead","tbody","tfoot","tr"]},Z=["button","input","select","textarea"],ee=["scrollbar","slider","spinbutton"],te=["searchbox","textbox"],re=["grid","listbox","tablist","tree","treegrid"],ae=["button","checkbox","link","switch","option","menu","menubar","menuitem","menuitemcheckbox","menuitemradio","radio","tab","treeitem","gridcell"],ie=["presentation","none"],oe=function(e){for(var t=["busy","controls","current","describedby","details","disabled","dropeffect","errormessage","flowto","grabbed","haspopup","invalid","keyshortcuts","live","owns","roledescription"],r=0;r<t.length;r++){if(be(e.getAttribute("aria-"+t[r])))return!0}return!1},ne=function(e,r){return function(e){if(1!==e.nodeType||e===r)return!1;if("true"===e.getAttribute("aria-hidden"))return!0;if(e.getAttribute("hidden"))return!0;var t=n(e);return"none"===t.display||"hidden"===t.visibility}(e)},le=function(e,t,r,a){for(;e&&e!==t;){if(!a&&1===e.nodeType&&ne(e,t))return!0;a=!1,e=e.parentNode}return!1},n=function(e){var t={};return fe.defaultView&&fe.defaultView.getComputedStyle?t=fe.defaultView.getComputedStyle(e,""):e.currentStyle&&(t=e.currentStyle),t},a=function(e,t){var r=t;if(-1!==r.indexOf("attr("))for(var a=r.match(/attr\((.|\n|\r\n)*?\)/g),i=0;i<a.length;i++){var o=a[i].slice(5,-1);o=e.getAttribute(o)||"",r=r.replace(a[i],o)}return r||t},c=function(e,t){var r=t||n(e);for(var a in l)for(var i=l[a],o=0;o<i.length;o++)if(r[a]&&(0===i[o].indexOf("!")&&-1===[i[o].slice(1),"inherit","initial","unset"].indexOf(r[a])||-1!==r[a].indexOf(i[o])))return!0;return!(t||!e.nodeName||-1===b.indexOf(e.nodeName.toLowerCase()))},l={display:["block","grid","table","flow-root","flex"],position:["absolute","fixed"],float:["left","right","inline"],clear:["left","right","both","inline"],overflow:["hidden","scroll","auto"],"column-count":["!auto"],"column-width":["!auto"],"column-span":["all"],contain:["layout","content","strict"]},b=["address","article","aside","blockquote","br","canvas","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","legend","li","main","nav","noscript","ol","output","p","pre","section","table","td","tfoot","th","tr","ul","video"],se=function(e,t,r,a,i,o){var n="",l=!1;if(r&&!o)n=t.getAttribute("aria-valuetext")||t.getAttribute("aria-valuenow")||"";else if(a&&!o)n=m(t)||"";else if(i&&!o){var s=[];"grid"===e||"treegrid"===e?s=["gridcell","rowheader","columnheader"]:"listbox"===e?s=["option"]:"tablist"===e?s=["tab"]:"tree"===e&&(s=["treeitem"]),n=p(t,t.querySelectorAll('*[aria-selected="true"]'),!1,s),l=!0}return!(n=be(n))&&(r||a)&&t.value&&(n=t.value),l||n||!o||(n=i?p(t,t.querySelectorAll("option[selected]"),!0):t.value),n},f=function(e){return be(e).length?" "+e+" ":" "},p=function(e,t,r,a){if(!t||!t.length)return"";for(var i=[],o=0;o<t.length;o++){var n=Q(t[o]);(!a||-1!==a.indexOf(n))&&i.push(r?m(t[o]):$(t[o],!0,!1,[],!1,{top:t[o]}).name)}return i.join(" ")},m=function(e,t){if(!t&&1===e.nodeType)return e.innerText||e.textContent||"";var r=function(e,t){var r={};for(var a in l)r[a]=fe.defaultView.getComputedStyle(e,t).getPropertyValue(a);return r.content=fe.defaultView.getComputedStyle(e,t).getPropertyValue("content").replace(/^"|\\|"$/g,""),r}(e,t),a=r.content;return a&&"none"!==a?(c({},r)&&(":before"===t?a+=" ":":after"===t&&(a=" "+a)),a):""},ue=function(e,t){return e&&1!==e.nodeType||e===t||-1!==["input","select","textarea","img","iframe"].indexOf(e.nodeName.toLowerCase())?{before:"",after:""}:fe.defaultView&&fe.defaultView.getComputedStyle?{before:a(e,m(e,":before")),after:a(e,m(e,":after"))}:{before:"",after:""}},de=function(e,t){for(;e;)if((e=e.parentNode)&&e.nodeName&&e.nodeName.toLowerCase()===t)return e;return{}},ce=function(e,t,r,a){for(var i=[];e&&e!==t;)if((e=e.id&&r&&r[e.id]&&r[e.id].node&&-1===i.indexOf(e)?(i.push(e),r[e.id].node):e.parentNode)&&e.getAttribute&&(be(e.getAttribute("aria-label"))||!a&&ne(e,t)))return!0;return!1},be=function(e){return"string"!=typeof e?"":e.replace(/^\s+|\s+$/g,"")};if(le(e,fe.body,!0))return r;var i=$(e,!1,!1,[],!1,{top:e}),o=be(i.name.replace(/\s+/g," ")),g=be(i.title.replace(/\s+/g," "));return o===g&&(g=""),r.name=o,r.desc=g,K=[],Y=[],t&&"function"==typeof t?t.apply(e,[e,r]):r},t=fe.querySelectorAll('textarea, input, select, button, a[href], progress, *[role="button"], *[role="checkbox"], *[role="link"], *[role="searchbox"], *[role="scrollbar"], *[role="slider"], *[role="spinbutton"], *[role="switch"], *[role="textbox"], *[role="combobox"], *[role="option"], *[role="menuitem"], *[role="menuitemcheckbox"], *[role="menuitemradio"], *[role="radio"], *[role="tab"], *[role="treeitem"], h1, h2, h3, h4, h5, h6, *[role="heading"], ul[aria-labelledby], ol[aria-labelledby], *[role="list"][aria-labelledby], *[role="directory"][aria-labelledby], ul[aria-label], ol[aria-label], *[role="list"][aria-label], *[role="directory"][aria-label], table[aria-labelledby], *[role="table"][aria-labelledby], *[role="grid"][aria-labelledby], *[role="treegrid"][aria-labelledby], table[aria-label], *[role="table"][aria-label], *[role="grid"][aria-label], *[role="treegrid"][aria-label], *[role="row"][aria-labelledby], *[role="row"][aria-label], *[role="cell"], *[role="gridcell"], th, *[role="columnheader"], *[role="rowheader"], *[role="alertdialog"][aria-labelledby], dialog[aria-labelledby], *[role="dialog"][aria-labelledby], *[role="alertdialog"][aria-label], dialog[aria-label], *[role="dialog"][aria-label], header[aria-labelledby], *[role="banner"][aria-labelledby], aside[aria-labelledby], *[role="complementary"][aria-labelledby], footer[aria-labelledby], *[role="contentinfo"][aria-labelledby], header[aria-label], *[role="banner"][aria-label], aside[aria-label], *[role="complementary"][aria-label], footer[aria-label], *[role="contentinfo"][aria-label], form[aria-labelledby], *[role="form"][aria-labelledby], form[aria-label], *[role="form"][aria-label], main[aria-labelledby], *[role="main"][aria-labelledby], nav[aria-labelledby], *[role="navigation"][aria-labelledby], main[aria-label], *[role="main"][aria-label], nav[aria-label], *[role="navigation"][aria-label], section[aria-labelledby], section[aria-label], *[role="region"][aria-labelledby], *[role="search"][aria-labelledby], *[role="article"][aria-labelledby], *[role="definition"][aria-labelledby], *[role="document"][aria-labelledby], *[role="feed"][aria-labelledby], *[role="figure"][aria-labelledby], *[role="img"][aria-labelledby], *[role="math"][aria-labelledby], *[role="note"][aria-labelledby], *[role="application"][aria-labelledby], *[role="region"][aria-label], *[role="search"][aria-label], *[role="article"][aria-label], *[role="definition"][aria-label], *[role="document"][aria-label], *[role="feed"][aria-label], *[role="figure"][aria-label], *[role="img"][aria-label], *[role="math"][aria-label], *[role="note"][aria-label], *[role="application"][aria-label], *[role="log"][aria-labelledby], *[role="marquee"][aria-labelledby], *[role="status"][aria-labelledby], *[role="timer"][aria-labelledby], *[role="log"][aria-label], *[role="marquee"][aria-label], *[role="status"][aria-label], *[role="timer"][aria-label], *[role="toolbar"][aria-labelledby], *[role="group"][aria-labelledby], *[role="listbox"][aria-labelledby], *[role="menu"][aria-labelledby], *[role="menubar"][aria-labelledby], *[role="toolbar"][aria-label], *[role="group"][aria-label], *[role="listbox"][aria-label], *[role="menu"][aria-label], *[role="menubar"][aria-label], *[role="radiogroup"][aria-labelledby], *[role="tree"][aria-labelledby], *[role="tablist"][aria-labelledby], *[role="tabpanel"][aria-labelledby], *[role="radiogroup"][aria-label], *[role="tree"][aria-label], *[role="tablist"][aria-label], *[role="tabpanel"][aria-label]'),r=0;r<t.length;r++)e(t[r],function(e,t){-1!==" input textarea img progress ".indexOf(" "+e.nodeName.toLowerCase()+" ")?(e.parentNode.setAttribute("data-ws-bm-name-prop",t.name),e.parentNode.setAttribute("data-ws-bm-desc-prop",t.desc)):(e.setAttribute("data-ws-bm-name-prop",t.name),e.setAttribute("data-ws-bm-desc-prop",t.desc))},!0);setTimeout(i,5e3)};if(setTimeout(i,5e3),!k){S={init:!1,landmarks:!1,structural:!1,dialogs:!1,liveRegions:!1,simpleWidgets:!1,comboboxListbox:!1,menuMenubar:!1,radiogroup:!1,tablist:!1,tree:!1,treegridGridTable:!1};var o={css:function(a,i){return new Promise(function(e,t){var r=fe.createElement("link");r.type="text/css",r.rel="stylesheet",r.id=i,r.onload=function(){e(a)},r.onerror=function(){},r.href=a,C.cssLinks.push(r),fe.head.appendChild(r)})}},B=function(e,t){C.cssLinks||(C.cssLinks=[]),Promise.all([o.css(_+e,"ws-visual-aria-"+t)])}}M(),t=fe.body,r="mousedown",a=function(e){if(e.shiftKey&&e.ctrlKey){var t=null;e||(e=window.event),e.target?t=e.target:e.srcElement&&(t=e.srcElement),3==t.nodeType&&(t=t.parentNode);var r=function(e){for(;e;){var t=e.getAttribute("role");if(t&&-1===" rowgroup row columnheader rowheader menuitem menuitemcheckbox menuitemradio group ".indexOf(" "+t+" "))return"option"==t?t="listbox":"radio"==t?t="radiogroup":"tab"==t||"tabpanel"==t?t="tablist":"treeitem"==t&&(t="tree"),t;e=e.parentNode}return null}(t),a=window.VisualARIAMatrices;r&&1===a.nodeType&&(a.href="http://whatsock.com/training/matrices/#"+r),1===a.nodeType&&a.click()}},t.attachEvent?(t["e"+r+a]=a,t[r+a]=function(){t["e"+r+a](window.event)},t.attachEvent("on"+r,t[r+a])):t.addEventListener&&t.addEventListener(r,a,!1)};if(setTimeout(function(){H(!0,!1,"https://accdc.github.io/visual-aria/visual-aria/public/",2e3,document)},3e3),!document.getElementById("ws-bm-aria-matrices-lnk")){var a=document.createElement("span");a.innerHTML='<span id="ws-bm-aria-matrices-lnk" style="text-align: center; position: fixed; top: 0; right: 0;padding: 3px; border: 1px solid #dedede; background: #f5f5f5; filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#f9f9f9\', endColorstr=\'#f0f0f0\'); background: -webkit-gradient(linear, left top, left bottom, from(#f9f9f9), to(#f0f0f0)); background: -moz-linear-gradient(top,  #f9f9f9, #f0f0f0); border-color: #000; -webkit-box-shadow: 0 1px 1px #eaeaea, inset 0 1px 0 #fbfbfb; -moz-box-shadow: 0 1px 1px #eaeaea, inset 0 1px 0 #fbfbfb; box-shadow: 0 1px 1px #eaeaea, inset 0 1px 0 #fbfbfb;" onmouseenter="window.VisualARIA.VisualARIAMatrices.innerHTML=\'ARIA Role Matrices\'; window.VisualARIA.VisualARIAToggle.innerHTML=window.VisualARIA.getVisualARIAStatus().lng;" onmouseleave="window.VisualARIA.VisualARIAMatrices.innerHTML=\'?\'; window.VisualARIA.VisualARIAToggle.innerHTML=window.VisualARIA.getVisualARIAStatus().shrt;"><a id="ws-bm-aria-matrices-lnk-a" style="display: inline-block; text-decoration: none; font-size: 10pt; padding: 6px 9px; border: 1px solid #dedede; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; background: #525252; filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#5e5e5e\', endColorstr=\'#434343\'); background: -webkit-gradient(linear, left top, left bottom, from(#5e5e5e), to(#434343)); background: -moz-linear-gradient(top,  #5e5e5e, #434343); border-color: #4c4c4c #313131 #1f1f1f; color: #fff; text-shadow: 0 1px 0 #2e2e2e; -webkit-box-shadow: 0 1px 1px #afafaf, inset 0 1px 0 #868686; -moz-box-shadow: 0 1px 1px #afafaf, inset 0 1px 0 #868686; box-shadow: 0 1px 1px #afafaf, inset 0 1px 0 #868686;" target="ws_aria_role_matrices" onmouseover="this.href=\'http://whatsock.com/training/matrices/\';" onclick="this.href=\'http://whatsock.com/training/matrices/\';" onfocus="window.VisualARIA.VisualARIAMatrices.innerHTML=\'ARIA Role Matrices\'; window.VisualARIA.VisualARIAToggle.innerHTML=window.VisualARIA.getVisualARIAStatus().lng;" onblur="window.VisualARIA.VisualARIAMatrices.innerHTML=\'?\'; window.VisualARIA.VisualARIAToggle.innerHTML=window.VisualARIA.getVisualARIAStatus().shrt;" href="http://whatsock.com/training/matrices/" aria-label="ARIA Role Matrices">?</a><br /><a id="ws-bm-aria-matrices-toggle-a" style="display: inline-block; text-decoration: none; font-size: 10pt; padding: 6px 9px; border: 1px solid #dedede; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; background: #525252; filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#5e5e5e\', endColorstr=\'#434343\'); background: -webkit-gradient(linear, left top, left bottom, from(#5e5e5e), to(#434343)); background: -moz-linear-gradient(top,  #5e5e5e, #434343); border-color: #4c4c4c #313131 #1f1f1f; color: #fff; text-shadow: 0 1px 0 #2e2e2e; -webkit-box-shadow: 0 1px 1px #afafaf, inset 0 1px 0 #868686; -moz-box-shadow: 0 1px 1px #afafaf, inset 0 1px 0 #868686; box-shadow: 0 1px 1px #afafaf, inset 0 1px 0 #868686;" onclick="window.VisualARIA.toggleVisualARIA(); return false;" onfocus="window.VisualARIA.VisualARIAMatrices.innerHTML=\'ARIA Role Matrices\'; window.VisualARIA.VisualARIAToggle.innerHTML=window.VisualARIA.getVisualARIAStatus().lng;" onblur="window.VisualARIA.VisualARIAMatrices.innerHTML=\'?\'; window.VisualARIA.VisualARIAToggle.innerHTML=window.VisualARIA.getVisualARIAStatus().shrt;" href="#" aria-label="Unload Visual ARIA">X</a> </span>',document.body.appendChild(a),window.VisualARIA.VisualARIAMatrices=document.getElementById("ws-bm-aria-matrices-lnk-a"),window.VisualARIA.VisualARIAToggle=document.getElementById("ws-bm-aria-matrices-toggle-a")}}();