(this.webpackJsonpbiblia=this.webpackJsonpbiblia||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),c=n(4),a=n(2),i=function(){return Object(o.jsx)("div",{className:"spinner"})},s=function(e){for(var t=[],n=[],r=[],c=0;c<e.bibles.length;c++)t.push(Object(o.jsx)("option",{value:c,children:e.bibles[c]},c));for(var a=0;a<e.books.length;a++)n.push(Object(o.jsx)("option",{value:a,children:e.books[a]},a));for(var i=0;i<e.chapters[e.book];i++)r.push(Object(o.jsx)("option",{value:i,children:i+1},i));return Object(o.jsxs)("div",{className:"search",children:[Object(o.jsx)("select",{name:"bible","aria-label":"Wybierz przek\u0142ad",value:e.bible,onChange:e.onBibleChange,children:t}),Object(o.jsx)("select",{name:"book","aria-label":"Wybierz ksi\u0119g\u0119",value:e.book,onChange:e.onBookChange,children:n}),Object(o.jsx)("select",{name:"chapter","aria-label":"Wybierz rozdzia\u0142",value:e.chapter,onChange:e.onChapterChange,children:r})]})},l=function(e){var t=e.index,n=e.verse;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t}),Object(o.jsx)("td",{children:n})]})},b=function(e){var t=e.verses;return Object(o.jsx)("table",{children:Object(o.jsx)("tbody",{children:t.map((function(e,t){return Object(o.jsx)(l,{index:t+1,verse:e},t)}))})})},u=function(){var e=Object(r.useState)(JSON.parse(localStorage.getItem("variables"))),t=Object(a.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)(localStorage.getItem("bible")||0),u=Object(a.a)(l,2),h=u[0],f=u[1],j=Object(r.useState)(localStorage.getItem("book")||0),d=Object(a.a)(j,2),g=d[0],v=d[1],p=Object(r.useState)(localStorage.getItem("chapter")||0),O=Object(a.a)(p,2),w=O[0],k=O[1],m=Object(r.useState)(JSON.parse(localStorage.getItem("verses"))),S=Object(a.a)(m,2),x=S[0],C=S[1];return Object(r.useEffect)((function(){fetch("https://biblia-api.kosciolwroclaw.pl").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),Object(r.useEffect)((function(){fetch("".concat("https://biblia-api.kosciolwroclaw.pl","/").concat(h,"/").concat(g,"/").concat(w)).then((function(e){return e.json()})).then((function(e){return C(e)}))}),[h,g,w]),Object(r.useEffect)((function(){return localStorage.setItem("variables",JSON.stringify(n))}),[n]),Object(r.useEffect)((function(){return localStorage.setItem("bible",h)}),[h]),Object(r.useEffect)((function(){return localStorage.setItem("book",g)}),[g]),Object(r.useEffect)((function(){return localStorage.setItem("chapter",w)}),[w]),Object(r.useEffect)((function(){return localStorage.setItem("verses",JSON.stringify(x))}),[x]),Object(r.useEffect)((function(){return window.scrollTo(0,0)})),Object(o.jsxs)(o.Fragment,{children:[n?Object(o.jsx)(s,{bibles:n.bibles,books:n.books,chapters:n.chapters,bible:h,book:g,chapter:w,onBibleChange:function(e){return f(e.target.value)},onBookChange:function(e){return v(e.target.value)||k(0)},onChapterChange:function(e){return k(e.target.value)}}):void 0,x?Object(o.jsx)(b,{verses:x}):Object(o.jsx)(i,{})]})},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(10);Object(c.render)(Object(o.jsx)(r.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("app")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");h?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.122b9550.chunk.js.map