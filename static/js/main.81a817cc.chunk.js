(this.webpackJsonpbiblia=this.webpackJsonpbiblia||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),c=n(6),a=n(3),i=n.n(a),s=n(5),l=n(2),b=function(){return Object(o.jsx)("div",{className:"spinner"})},u=function(e){for(var t=[],n=[],r=[],c=0;c<e.bibles.length;c++)t.push(Object(o.jsx)("option",{value:c,children:e.bibles[c]},c));for(var a=0;a<e.books.length;a++)n.push(Object(o.jsx)("option",{value:a,children:e.books[a]},a));for(var i=0;i<e.chapters[e.book];i++)r.push(Object(o.jsx)("option",{value:i,children:i+1},i));return Object(o.jsxs)("div",{className:"search",children:[Object(o.jsx)("select",{name:"bible","aria-label":"Wybierz przek\u0142ad",value:e.bible,onChange:e.onBibleChange,children:t}),Object(o.jsx)("select",{name:"book","aria-label":"Wybierz ksi\u0119g\u0119",value:e.book,onChange:e.onBookChange,children:n}),Object(o.jsx)("select",{name:"chapter","aria-label":"Wybierz rozdzia\u0142",value:e.chapter,onChange:e.onChapterChange,children:r})]})},f=function(e){var t=e.index,n=e.verse;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t}),Object(o.jsx)("td",{children:n})]})},h=function(e){var t=e.verses;return Object(o.jsx)("table",{children:Object(o.jsx)("tbody",{children:t.map((function(e,t){return Object(o.jsx)(f,{index:t+1,verse:e},t)}))})})},j=function(){var e=Object(r.useState)(JSON.parse(localStorage.getItem("variables"))),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(localStorage.getItem("bible")||0),f=Object(l.a)(a,2),j=f[0],d=f[1],g=Object(r.useState)(localStorage.getItem("book")||0),v=Object(l.a)(g,2),p=v[0],O=v[1],w=Object(r.useState)(localStorage.getItem("chapter")||0),k=Object(l.a)(w,2),x=k[0],m=k[1],S=Object(r.useState)(JSON.parse(localStorage.getItem("verses"))),C=Object(l.a)(S,2),y=C[0],E=C[1];return Object(r.useEffect)(Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://biblia-api.kosciolwroclaw.pl");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,c(t);case 6:case"end":return e.stop()}}),e)}))),[]),Object(r.useEffect)(Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://biblia-api.kosciolwroclaw.pl","/").concat(j,"/").concat(p,"/").concat(x));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,E(t.verses);case 6:case"end":return e.stop()}}),e)}))),[j,p,x]),Object(r.useEffect)((function(){return localStorage.setItem("variables",JSON.stringify(n))}),[n]),Object(r.useEffect)((function(){return localStorage.setItem("bible",j)}),[j]),Object(r.useEffect)((function(){return localStorage.setItem("book",p)}),[p]),Object(r.useEffect)((function(){return localStorage.setItem("chapter",x)}),[x]),Object(r.useEffect)((function(){return localStorage.setItem("verses",JSON.stringify(y))}),[y]),Object(r.useEffect)((function(){return window.scrollTo(0,0)})),Object(o.jsxs)(o.Fragment,{children:[n?Object(o.jsx)(u,{bibles:n.bibles,books:n.books,chapters:n.chapters[j],bible:j,book:p,chapter:x,onBibleChange:function(e){return d(e.target.value)},onBookChange:function(e){return O(e.target.value)||m(0)},onChapterChange:function(e){return m(e.target.value)}}):void 0,y?Object(o.jsx)(h,{verses:y}):Object(o.jsx)(b,{})]})},d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(13);Object(c.render)(Object(o.jsx)(r.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("app")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");d?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.81a817cc.chunk.js.map