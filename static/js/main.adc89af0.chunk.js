(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{40:function(e,a,t){e.exports=t(70)},45:function(e,a,t){},46:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),l=t.n(r),o=(t(45),t(9)),s=t(82),u=t(11),i=t(21),m=t(16),f="/home",p="/scores",E=[["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],d=[1,2,3,4,5,6,7,8,9];t(46);var v=Object(u.compose)(m.g)((function(){var e=Object(n.useState)("HOME"),a=Object(o.a)(e,2),t=a[0],r=a[1];function l(e){r(e)}return c.a.createElement("div",{className:"header"},c.a.createElement("div",null,c.a.createElement("span",null,"Sudoku App")),c.a.createElement("div",{className:"nav"},c.a.createElement(i.b,{to:f,className:"nav_link"},c.a.createElement(s.a,{className:"HOME"===t?"selected":"",variant:"text",onClick:function(){return l("HOME")}},"Home")),c.a.createElement(i.b,{to:p,className:"nav_link"},c.a.createElement(s.a,{className:"SCORE"===t?"selected":"",variant:"text",onClick:function(){return l("SCORE")}},"Score Page"))))})),b=t(4),N=function(e){return function(a){a({type:"NEW_GAME_POP_UP",payload:e})}},O=function(e){return function(a){a({type:"IS_GAME_DONE",payload:e})}},k=t(8),_=t(22);t(61);var j=function(e){var a=e.stopClock,t=Object(b.b)(),r=Object(n.useState)(0),l=Object(o.a)(r,2),s=l[0],u=l[1],i=Object(n.useState)(0),m=Object(o.a)(i,2),f=m[0],p=m[1];return Object(n.useEffect)((function(){var e=null;a?(t(function(e){return function(a){a({type:"SET_TIMER_RESULT",payload:e})}}({clockMin:s,clockSec:f})),clearInterval(e)):e=setInterval((function(){f<59?p((function(e){return e+1})):(p(0),u(s+1))}),1e3);return function(){return clearInterval(e)}}),[a,f]),c.a.createElement("div",{className:"timer_wrapper"},c.a.createElement("div",{className:"timer"},c.a.createElement("span",{className:"min"},s<10?"0".concat(s):s),c.a.createElement("span",{className:"separator"},":"),c.a.createElement("span",{className:"sec"},f<10?"0".concat(f):f)))};t(62);function h(){var e=Object(b.b)(),a=Object(b.c)((function(e){return e.mainReducer.newGameData})),t=Object(n.useState)([]),r=Object(o.a)(t,2),l=r[0],u=r[1],i=Object(n.useState)(null),m=Object(o.a)(i,2),f=m[0],p=m[1],v=Object(n.useState)({}),N=Object(o.a)(v,2),h=N[0],S=N[1],g=Object(n.useState)(!0),w=Object(o.a)(g,2),y=w[0],T=w[1],C=Object(n.useState)(!1),D=Object(o.a)(C,2),R=D[0],x=D[1];function A(e,a){p(a)}function G(e,a,t){if(""===l[a][t]){var n=Object(k.a)(l);e.preventDefault(),S({line:a,lineIndex:t}),n[a].splice(t,1,f),function(e,a){var t=function(e,a){var t=[];function n(n,c){n.map((function(n){c.map((function(c){if(n===a&&c===e)return!1;t.push(l[n][c])}))}))}switch(a){case 0:case 1:case 2:switch(e){case 0:case 1:case 2:n([0,1,2],[0,1,2]);break;case 3:case 4:case 5:n([0,1,2],[3,4,5]);break;case 6:case 7:case 8:n([0,1,2],[6,7,8]);break;default:return t}break;case 3:case 4:case 5:switch(e){case 0:case 1:case 2:n([3,4,5],[0,1,2]);break;case 3:case 4:case 5:n([3,4,5],[3,4,5]);break;case 6:case 7:case 8:n([3,4,5],[6,7,8]);break;default:return t}break;case 6:case 7:case 8:switch(e){case 0:case 1:case 2:n([6,7,8],[0,1,2]);break;case 3:case 4:case 5:n([6,7,8],[3,4,5]);break;case 6:case 7:case 8:n([6,7,8],[6,7,8]);break;default:return t}break;default:return t}return t}(a,e);l[e].map((function(e,t){a!==t&&f===Number(e)&&T(!1)})),l.map((function(t,n){e!==n&&f===Number(t[a])&&T(!1)})),t.map((function(e){f===Number(e)&&T(!1)}))}(a,t),u(n),p(null)}}return Object(n.useEffect)((function(){!function(){var e=a.squares,t=JSON.parse(JSON.stringify(E));e.map((function(e){t[e.y].splice(e.x,1,e.value)})),u(t)}()}),[a]),Object(n.useEffect)((function(){l.map((function(a){a.map((function(a){if(""===a)return!1;!function(){var a=!function(){var e=!1;return l.map((function(a){return a.map((function(a){a||(e=!0)}))})),e}()&&y;x(a),e(O(a))}()}))}))}),[l]),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"game_wrapper"},c.a.createElement("div",{className:"game_dice"},d.map((function(e,a){return c.a.createElement(_.Fade,{key:a,bottom:!0,delay:200*a},c.a.createElement("span",{draggable:y,className:"dice ".concat(y?"pointer":""," ").concat(f===a+1?"chosen":""),onDragStart:function(e){return A(0,a+1)},onClick:y?function(e){return A(0,a+1)}:null},e))}))),c.a.createElement(_.Zoom,null,c.a.createElement("div",{className:"game_table"},l.map((function(e,a){return c.a.createElement("div",{key:a,className:"line"},e.map((function(e,t){var n=a,r=h.line===n&&h.lineIndex===t&&!y;return c.a.createElement("span",{key:t,className:"square ".concat(r?"err":""," ").concat(""!==f?"pointer":""),onDragOver:function(a){return e?{}:void a.preventDefault()},onDrop:function(e){return G(e,n,t)},onClick:function(e){return G(e,n,t)}},e)})))})))),c.a.createElement(j,{stopClock:R}),!y&&c.a.createElement("div",{className:"button_wrapper"},c.a.createElement(s.a,{className:"clear_table",variant:"text",onClick:function(){return function(){var e=Object(k.a)(l);e[h.line].splice(h.lineIndex,1,""),u(e),T(!0)}()}},"Clear Last Dice"))))}t(63);var S=function(){var e=Object(b.b)(),a=Object(b.c)((function(e){return e.mainReducer.newGameData}));return c.a.createElement("div",{className:"home"},c.a.createElement("span",null,"Sudoku Game"),a?c.a.createElement(h,null):c.a.createElement(s.a,{className:"selected",variant:"text",onClick:function(){return e(N(!0))}},"Start a new game"))};t(64);var g=function(){var e=localStorage.getItem("scoresTable"),a=JSON.parse(e);return c.a.createElement("div",{className:"score_page"},c.a.createElement("span",{className:"title"},"score page"),c.a.createElement("div",{className:"scores_wrapper"},function(){var e=[],t=[];return a.map((function(t,n){var c=a.filter((function(e){return e.minutes===t.minutes}));if(0===n)e.push(c);else{var r=e[e.length-1];if(c.length===r.length)return!1;e.push(c)}})),e.map((function(e){var a=e.sort((function(e,a){return e.seconds-a.seconds}));t.push.apply(t,Object(k.a)(a))})),t}().map((function(e,a){var t=e.seconds,n=e.minutes,r=t<10?"0".concat(t):t,l=n<10?"0".concat(n):n;return c.a.createElement("div",{className:"score_wrapper",key:a},c.a.createElement("span",{className:"table_position"},a+1,"."),c.a.createElement("span",{className:"time"},l,":",r,c.a.createElement("i",{className:"far fa-times-circle",onClick:function(){}})))}))))};t(65);var w=function(e){var a=e.title,t=e.children;return c.a.createElement("div",{className:"popup_wrapper"},c.a.createElement(_.Zoom,null,c.a.createElement("div",{className:"popup"},c.a.createElement("span",{className:"title"},a),t)))};t(66);var y=function(){var e=Object(b.b)();function a(a){e(function(e){return function(a){a({type:"SET_LOADER",payload:!0}),fetch("".concat("https://cors-anywhere.herokuapp.com/").concat("http://www.cs.utep.edu/cheon/ws/sudoku/","new/?size=",9,"&level=").concat(e)).then((function(e){return e.json()})).then((function(e){setTimeout((function(){return a({type:"SET_NEW_GAME_REQUEST",payload:e})}),2e3)})).catch((function(e){console.log(e)}))}}(a))}return c.a.createElement("div",{className:"select_level_wrapper"},c.a.createElement("i",{className:"far fa-times-circle",onClick:function(){return e(N(!1))}}),c.a.createElement("div",{className:"buttons_wrapper"},c.a.createElement(s.a,{className:"selected",variant:"text",onClick:function(){return a(1)}},"Easy"),c.a.createElement(s.a,{className:"selected",variant:"text",onClick:function(){return a(2)}},"Normal"),c.a.createElement(s.a,{className:"selected",variant:"text",onClick:function(){return a(3)}},"Hard")))};t(67);var T=function(){var e=Object(b.b)(),a=Object(b.c)((function(e){return e.mainReducer.gameTime})),t=a&&a.clockSec,n=a&&a.clockMin,r=t<10?"0".concat(t):t,l=n<10?"0".concat(n):n;return c.a.createElement("div",{className:"select_action_wrapper"},c.a.createElement("span",{className:"time"},"Your Time is ",l,":",r),c.a.createElement("div",{className:"buttons_wrapper"},c.a.createElement(s.a,{className:"stop_game",variant:"text",onClick:function(){return function(){var a,c={seconds:t,minutes:n},r=localStorage.getItem("scoresTable"),l=JSON.parse(r),o=null!==l?[].concat(Object(k.a)(l),[c]):[c];localStorage.setItem("scoresTable",JSON.stringify(o)),e((function(e){e({type:"CLEAR_STATE",payload:a})}))}()}},"Done"),c.a.createElement(s.a,{className:"stop_game",variant:"text",onClick:function(){return e(N(!0)),void e(O(!1))}},"Play Again")))};t(68);var C=function(){return c.a.createElement("div",{className:"loader_wrapper"},c.a.createElement("div",{className:"loader"}))};t(69);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=t(37),R=t(20),x={setNewGameLevel:!1,gameDone:!1,newGameData:"",loader:!1,gameTime:""},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"NEW_GAME_POP_UP":var t=a.payload;return Object(R.a)({},e,{setNewGameLevel:t});case"SET_NEW_GAME_REQUEST":var n=a.payload;return Object(R.a)({},e,{newGameData:n,setNewGameLevel:!1,loader:!1});case"SET_LOADER":var c=a.payload;return Object(R.a)({},e,{loader:c});case"IS_GAME_DONE":var r=a.payload;return Object(R.a)({},e,{gameDone:r});case"SET_TIMER_RESULT":var l=a.payload;return Object(R.a)({},e,{gameTime:l});case"CLEAR_STATE":return{initialState:x};default:return e}},G=Object(u.combineReducers)({mainReducer:A}),I=t(38),M=Object(u.createStore)(G,{},Object(I.composeWithDevTools)(Object(u.applyMiddleware)(D.a)));l.a.render(c.a.createElement(b.a,{store:M},c.a.createElement((function(){var e=Object(b.c)((function(e){return e.mainReducer.setNewGameLevel})),a=Object(b.c)((function(e){return e.mainReducer.gameDone})),t=Object(b.c)((function(e){return e.mainReducer.loader})),n=e||a;return c.a.createElement("div",{className:"App"},c.a.createElement(i.a,null,c.a.createElement(v,{className:"App-header"}),c.a.createElement(m.d,null,c.a.createElement(m.b,{exect:!0,path:f,component:S}),c.a.createElement(m.b,{exect:!0,path:p,component:g}),c.a.createElement(m.b,{path:"/",render:function(){return c.a.createElement(m.a,{to:f})}})),n&&c.a.createElement(w,{title:a?"Nice You Did It":"Select Level:",children:a?c.a.createElement(T,null):c.a.createElement(y,null)}),t&&c.a.createElement(C,null)))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.adc89af0.chunk.js.map