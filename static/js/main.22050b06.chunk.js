(this["webpackJsonpmemory-stretcher"]=this["webpackJsonpmemory-stretcher"]||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),s=(a(18),a(19),a(1)),l=a(11),i=(a(20),a(23)),u=a(24);var m=function(e){var t,a,n=Object(s.a)(e.scores,7),c=n[0],o=n[1],l=n[2],i=n[3],u=n[4],m=n[5],d=n[6];return r.a.createElement("div",null,r.a.createElement("p",null,"".concat(c," nodes exposed. ")," "),r.a.createElement("p",null,"".concat(o-c," nodes remain to win. ")),r.a.createElement("p",null,"".concat(l,"  missed shots. ")," "),r.a.createElement("p",null,"".concat(3-l," shots left. ")),r.a.createElement("p",{className:"total"},"total wins ".concat(i," : ").concat(u," total defeats ")),(a=d,(t=m)?r.a.createElement("div",null,r.a.createElement("p",{className:"".concat(t?"bouncing":"")},"success!"),r.a.createElement("p",null," start again.")):a?r.a.createElement("div",null,r.a.createElement("p",null,"defeat!"),r.a.createElement("p",null," start again.")):void 0))};var d=function(e){var t=Object(l.a)(Array(e.sizeArray)),a=Object(n.useState)([]),c=Object(s.a)(a,2),o=c[0],d=c[1],f=Object(n.useState)(Math.floor(e.sizeArray*e.sizeArray*.35)),E=Object(s.a)(f,2),b=E[0],h=(E[1],Object(n.useState)(!1)),j=Object(s.a)(h,2),O=j[0],v=j[1],p=Object(n.useState)(0),y=Object(s.a)(p,2),g=y[0],w=y[1],A=Object(n.useState)(0),S=Object(s.a)(A,2),k=S[0],N=S[1],z=Object(n.useState)(!1),T=Object(s.a)(z,2),x=T[0],M=T[1],L=Object(n.useState)(!1),q=Object(s.a)(L,2),B=q[0],C=q[1],J=Object(n.useState)(!1),R=Object(s.a)(J,2),W=R[0],I=R[1],P=Object(n.useState)(0),$=Object(s.a)(P,2),D=$[0],F=$[1],G=Object(n.useState)(0),H=Object(s.a)(G,2),K=H[0],Q=H[1],U=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},V=function(e,t,a){return a?"winning":B?"losing":t?1===e?"chosen":"":2===e?"clicked":void 0},X=function(e){if(!(O||x||B)){var t=e.target.getAttribute("data-index");1===o[t]?(o[t]=2,w(g+1)):2===o[t]?e.target.classList.add("missed"):(e.target.classList.add("missed"),N(k+1))}};return Object(n.useEffect)((function(){g===b&&(M(!0),v(!0),F((function(e){return e+1})),setTimeout((function(){return I(!0)}),2e3))}),[k,g,b]),Object(n.useEffect)((function(){3===k&&(C(!0),Q((function(e){return e+1})),setTimeout((function(){return I(!0)}),1500))}),[k,g,b]),r.a.createElement(i.a,null,r.a.createElement(u.a,{className:"grid-container ".concat(B?"missed":"")},function(e,t,a){var n=-1;return e.map((function(c,s){return r.a.createElement("div",{key:s,className:"grid-row"},e.map((function(){return n++,r.a.createElement("div",{key:n,"data-index":n,className:a?"square":"square ".concat(V(o[n],t,x)),onClick:function(e){return X(e)},onAnimationEnd:function(e){return e.target.classList.remove("missed")}})})))}))}(t,O,W),r.a.createElement("button",{onClick:function(){!function(e){for(var t=Array.from(Array(e*e),(function(){return 0})),a=1;a<=b;a++){for(var n=U(1,e*e)-1;1===t[n];)n=U(1,e*e);t[n]=1}d(t)}(e.sizeArray),I(!1),M(!1),C(!1),v(!0),w(0),N(0);var t=setTimeout((function(){v(!1)}),3e3);return function(){return clearTimeout(t)}}},"START")),r.a.createElement(u.a,{className:"scores"},r.a.createElement(m,{scores:[g,b,k,D,K,x,B]})))},f=(a(21),a(25));var E=function(){return r.a.createElement(f.a,{className:"App"},r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("header",null,r.a.createElement("h1",null,"memory stretcher"),r.a.createElement("h4",null,"Randomly chosen nodes are displayed for short amount of time."," "),r.a.createElement("h4",null,"Player's task is to memorize and find them all in a less than three attempts.")))),r.a.createElement(d,{sizeArray:5}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.22050b06.chunk.js.map