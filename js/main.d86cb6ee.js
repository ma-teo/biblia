(self.webpackChunkbiblia=self.webpackChunkbiblia||[]).push([[179],{384:(e,t,r)=>{"use strict";var n=r(294),s=r(935),a=r(936),o=r(137),c=r(391),i=r(757),l=r.n(i),u=r(893);const f=function(){return(0,u.jsx)("div",{className:"spinner"})},b=function(e){for(var t=[],r=[],n=[],s=0;s<e.bibles.length;s++)t.push((0,u.jsx)("option",{value:s,children:e.bibles[s]},s));for(var a=0;a<e.books.length;a++)r.push((0,u.jsx)("option",{value:a,children:e.books[a]},a));for(var o=0;o<e.chapters[e.book];o++)n.push((0,u.jsx)("option",{value:o,children:o+1},o));return(0,u.jsxs)("div",{className:"search",children:[(0,u.jsx)("select",{name:"bible","aria-label":"Wybierz przekład",value:e.bible,onChange:e.onBibleChange,children:t}),(0,u.jsx)("select",{name:"book","aria-label":"Wybierz księgę",value:e.book,onChange:e.onBookChange,children:r}),(0,u.jsx)("select",{name:"chapter","aria-label":"Wybierz rozdział",value:e.chapter,onChange:e.onChapterChange,children:n})]})},h=function(e){var t=e.index,r=e.verse;return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:t}),(0,u.jsx)("td",{children:r})]})},g=function(e){var t=e.verses;return(0,u.jsx)("table",{children:(0,u.jsx)("tbody",{children:t.map((function(e,t){return(0,u.jsx)(h,{index:t+1,verse:e},t)}))})})},p=function(){var e=(0,a.lr)(),t=(0,c.Z)(e,2),r=t[0],s=t[1],i=(0,n.useState)(JSON.parse(localStorage.getItem("variables"))),h=(0,c.Z)(i,2),p=h[0],v=h[1],d=(0,n.useState)(r.get("bible")||localStorage.getItem("bible")||0),x=(0,c.Z)(d,2),k=x[0],j=x[1],m=(0,n.useState)(r.get("book")||localStorage.getItem("book")||0),S=(0,c.Z)(m,2),w=S[0],E=S[1],C=(0,n.useState)(r.get("chapter")||localStorage.getItem("chapter")||0),I=(0,c.Z)(C,2),Z=I[0],y=I[1],z=(0,n.useState)(JSON.parse(localStorage.getItem("verses"))),N=(0,c.Z)(z,2),O=N[0],B=N[1];return(0,n.useEffect)((0,o.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://biblia-api.kosciolwroclaw.pl");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,v(t);case 6:case"end":return e.stop()}}),e)}))),[]),(0,n.useEffect)((0,o.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://biblia-api.kosciolwroclaw.pl","/").concat(k,"/").concat(w,"/").concat(Z));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,B(t.verses);case 6:case"end":return e.stop()}}),e)}))),[k,w,Z]),(0,n.useEffect)((function(){return localStorage.setItem("variables",JSON.stringify(p))}),[p]),(0,n.useEffect)((function(){return localStorage.setItem("bible",k)}),[k]),(0,n.useEffect)((function(){return localStorage.setItem("book",w)}),[w]),(0,n.useEffect)((function(){return localStorage.setItem("chapter",Z)}),[Z]),(0,n.useEffect)((function(){return localStorage.setItem("verses",JSON.stringify(O))}),[O]),(0,n.useEffect)((function(){return r.set("bible",k)}),[k]),(0,n.useEffect)((function(){return r.set("book",w)}),[w]),(0,n.useEffect)((function(){return r.set("chapter",Z)}),[Z]),(0,n.useEffect)((function(){return s(r)}),[k,w,Z]),(0,n.useEffect)((function(){return window.scrollTo(0,0)})),(0,u.jsxs)(u.Fragment,{children:[p?(0,u.jsx)(b,{bibles:p.bibles,books:p.books,chapters:p.chapters[k],bible:k,book:w,chapter:Z,onBibleChange:function(e){return j(e.target.value)||y(0)},onBookChange:function(e){return E(e.target.value)||y(0)},onChapterChange:function(e){return y(e.target.value)}}):void 0,O?(0,u.jsx)(g,{verses:O}):(0,u.jsx)(f,{})]})};(0,s.render)((0,u.jsx)(n.StrictMode,{children:(0,u.jsx)(a.VK,{children:(0,u.jsx)(p,{})})}),document.getElementById("app")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js")}))}},e=>{"use strict";e.O(0,[216],(()=>(384,e(e.s=384)))),e.O()}]);
//# sourceMappingURL=main.d86cb6ee.js.map