(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t.n(s),r=t(7),n=t.n(r),l=t(6),i=t(4),o=(t(12),t(0));function j(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"EmptyplayersList",children:[Object(o.jsx)("div",{className:"EmptyplayersList--empty",children:"no players available"}),Object(o.jsx)("div",{className:"EmptyplayersList__loadIcon rotate-center"})]})})}var d=function(e){var a=e.players,t=Object(s.useState)("Score"),c=Object(i.a)(t,2),r=c[0],n=c[1];return Object(o.jsxs)("div",{className:"playersList",children:[Object(o.jsxs)("div",{className:"playersList__header",children:[Object(o.jsx)("div",{className:"playersList__header-name",children:"Player's name"}),Object(o.jsxs)("select",{className:"playersList__header-select",name:"Sort by",value:r,onChange:function(e){n(e.target.value)},children:[Object(o.jsx)("option",{value:"Score",selected:!0,children:"Score"}),Object(o.jsx)("option",{value:"Name",children:"Name"})]})]}),("Score"===r?a.sort((function(e,a){return a.score-e.score})):a.sort((function(e,a){return e.name.localeCompare(a.name)}))).map((function(e){return Object(o.jsxs)("div",{className:"playersList__Player",children:[Object(o.jsxs)("div",{className:"playersList__Player-ava-name",children:[Object(o.jsx)("img",{className:"playersList__Player-avatar",src:e.avatar,alt:"player's avatar"}),Object(o.jsx)("div",{className:"playersList__Player-name",children:e.name})]}),Object(o.jsx)("div",{className:"playersList__Player-score",children:e.score})]},e.name)}))]})},p=function(){var e=Object(s.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1];return Object(s.useEffect)((function(){var e=window.localStorage.getItem("players");c((function(a){return JSON.parse(e||JSON.stringify(a))}))}),[]),Object(s.useEffect)((function(){window.localStorage.setItem("players",JSON.stringify(t))}),[t]),Object(s.useEffect)((function(){new EventSource("http://localhost:5000").onmessage=function(e){c((function(a){return[].concat(Object(l.a)(a),[JSON.parse(e.data)])}))}}),[]),Object(s.useEffect)((function(){new EventSource("http://localhost:5000").onmessage=function(e){c((function(a){return[].concat(Object(l.a)(a),[JSON.parse(e.data)])}))}}),[t]),Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{className:"App__h1",children:"Score board"}),t.length?Object(o.jsx)(d,{players:t}):Object(o.jsx)(j,{})]})})})};n.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.625b421b.chunk.js.map