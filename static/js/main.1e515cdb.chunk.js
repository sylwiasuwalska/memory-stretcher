(this["webpackJsonpmemory-stretcher"]=this["webpackJsonpmemory-stretcher"]||[]).push([[0],{31:function(e,t,a){e.exports=a(43)},37:function(e,t,a){},38:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),o=(a(36),a(37),a(6)),u=a(29),s=(a(38),a(49)),i=a(46),m=a(25),d=a(47),E=a(45),f=a(48);var h=function(e){return l.a.createElement(f.a,{onSubmit:e.handleFormSubmit},l.a.createElement("h5",null,e.title),l.a.createElement("div",{className:"form-check"},l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:e.name,value:e.value1,onChange:e.handleChange,className:"form-check-input"}),e.label1)),l.a.createElement("div",{className:"form-check"},l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:e.name,value:e.value2,onChange:e.handleChange,className:"form-check-input"}),e.label2)),l.a.createElement("div",{className:"form-check"},l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:e.name,value:e.value3,onChange:e.handleChange,className:"form-check-input"}),e.label3)))};var b=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1],u=function(){return c(!1)},s=function(e){e.preventDefault()};return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{variant:"outline-primary",onClick:function(){return c(!0)}},"OPTIONS"),l.a.createElement(d.a,{show:r,onHide:u,centered:!0},l.a.createElement(d.a.Header,{closeButton:!0},l.a.createElement(d.a.Title,null,"Options")),l.a.createElement(d.a.Body,null,l.a.createElement(E.a,null,l.a.createElement(i.a,{className:"show-grid"},l.a.createElement(m.a,null,l.a.createElement(h,{title:"Set display time:",handleChange:function(t){e.setDisplayTime(t.target.value)},handleFormSubmit:s,name:"time",value1:"1000",label1:"1 sec",value2:"2000",label2:"2 sec",value3:"3000",label3:"3 sec"})),l.a.createElement(m.a,null,l.a.createElement(h,{title:"Set difficulty level:",handleChange:function(t){e.setHowManyNodes(Math.floor(t.target.value*e.arraySize*e.arraySize))},handleFormSubmit:s,name:"difficulty",value1:.3,label1:"easy",value2:.5,label2:"medium",value3:.7,label3:"hard"}))))),l.a.createElement(d.a.Footer,null,l.a.createElement("button",{onClick:u},"SAVE"))))};var v=function(e){var t,a,n=Object(o.a)(e.scores,8),r=n[0],c=n[1],u=n[2],s=n[3],i=n[4],m=n[5],d=n[6],E=n[7];return l.a.createElement("div",null,l.a.createElement("p",null,"".concat(E/1e3," sec of display time. ")),l.a.createElement("p",null,"".concat(c-r," nodes remain to win. ")),l.a.createElement("p",null,"".concat(r," nodes exposed. ")," "),l.a.createElement("p",null,"".concat(u,"  missed shots. ")," "),l.a.createElement("p",null,"".concat(3-u," shots left. ")),l.a.createElement("p",{className:"total"},"total wins ".concat(s," : ").concat(i," total defeats ")),(a=d,(t=m)?l.a.createElement("div",null,l.a.createElement("p",{className:"".concat(t?"bouncing":"")},"success!"),l.a.createElement("p",null," start again.")):a?l.a.createElement("div",null,l.a.createElement("p",null,"defeat!"),l.a.createElement("p",null," start again.")):void 0))};var p=function(e){var t=Object(u.a)(Array(e.sizeArray)),a=Object(n.useState)([]),r=Object(o.a)(a,2),c=r[0],d=r[1],E=Object(n.useState)(.3),f=Object(o.a)(E,2),h=f[0],p=(f[1],Object(n.useState)(Math.floor(e.sizeArray*e.sizeArray*h))),y=Object(o.a)(p,2),O=y[0],g=y[1],j=Object(n.useState)(!1),S=Object(o.a)(j,2),k=S[0],w=S[1],N=Object(n.useState)(0),A=Object(o.a)(N,2),C=A[0],z=A[1],T=Object(n.useState)(0),M=Object(o.a)(T,2),F=M[0],x=M[1],B=Object(n.useState)(!1),H=Object(o.a)(B,2),D=H[0],L=H[1],q=Object(n.useState)(!1),I=Object(o.a)(q,2),J=I[0],P=I[1],R=Object(n.useState)(!1),W=Object(o.a)(R,2),V=W[0],$=W[1],G=Object(n.useState)(0),K=Object(o.a)(G,2),Q=K[0],U=K[1],X=Object(n.useState)(0),Y=Object(o.a)(X,2),Z=Y[0],_=Y[1],ee=Object(n.useState)(1e3),te=Object(o.a)(ee,2),ae=te[0],ne=te[1],le=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},re=function(e,t,a){return a?"winning":J?"losing":t?1===e?"chosen":"":2===e?"clicked":void 0},ce=function(e){if(!(k||D||J)){var t=e.target.dataset.index;1===c[t]?(c[t]=2,z(C+1)):2===c[t]?e.target.classList.add("missed"):(e.target.classList.add("missed"),x(F+1))}};return Object(n.useEffect)((function(){C===O&&(L(!0),w(!0),U((function(e){return e+1})),setTimeout((function(){return $(!0)}),2e3))}),[F,C,O]),Object(n.useEffect)((function(){3===F&&(P(!0),_((function(e){return e+1})),setTimeout((function(){return $(!0)}),1500))}),[F,C,O]),l.a.createElement(n.Fragment,null,l.a.createElement(s.a,{now:J?0:Math.round(C/O*100),label:"".concat(J?0:Math.round(C/O*100),"%")}),l.a.createElement(i.a,null,l.a.createElement(m.a,{className:"grid-container ".concat(J?"missed":"")},function(e,t,a){var n=-1;return e.map((function(r,o){return l.a.createElement("div",{key:o,className:"grid-row"},e.map((function(){return n++,l.a.createElement("div",{key:n,"data-index":n,className:a?"square":"square ".concat(re(c[n],t,D)),onClick:function(e){return ce(e)},onAnimationEnd:function(e){return e.target.classList.remove("missed")}})})))}))}(t,k,V),l.a.createElement(i.a,null,l.a.createElement(m.a,null,l.a.createElement(b,{setDisplayTime:ne,setHowManyNodes:g,arraySize:e.sizeArray})),l.a.createElement(m.a,null,l.a.createElement("button",{onClick:function(){!function(e){for(var t=Array.from(Array(e*e),(function(){return 0})),a=1;a<=O;a++){for(var n=le(1,e*e)-1;1===t[n];)n=le(1,e*e);t[n]=1}d(t)}(e.sizeArray),$(!1),L(!1),P(!1),w(!0),z(0),x(0),console.log(ae),console.log(h),console.log(O);var t=setTimeout((function(){w(!1)}),ae);return function(){return clearTimeout(t)}}},"START")))),l.a.createElement(m.a,{className:"scores"},l.a.createElement(v,{scores:[C,O,F,Q,Z,D,J,ae]}))))};a(42);var y=function(){return l.a.createElement(E.a,{className:"App"},l.a.createElement(i.a,null,l.a.createElement(m.a,null,l.a.createElement("header",null,l.a.createElement("h1",null,"memory stretcher"),l.a.createElement("h5",null,"Randomly chosen nodes are displayed for short amount of time."," "),l.a.createElement("h5",null,"Player's task is to memorize and find them all in a less than three attempts.")))),l.a.createElement(p,{sizeArray:5}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.1e515cdb.chunk.js.map