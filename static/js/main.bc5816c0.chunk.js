(this["webpackJsonpanota-react"]=this["webpackJsonpanota-react"]||[]).push([[0],{162:function(e,t,n){},171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(19),i=n.n(o),a=n(57),s=n(80),r=n(204),l=(n(149),n(47)),d=n(133),j=n(203),u=n(200),b=n(71),f=n(81),O=n.n(f),x=n(201),h=function(){return Object(a.b)()},p=a.c,g=n(5),v=x.a.Text,m=function(e){var t=p((function(e){return e.modal.title}));Object(c.useEffect)((function(){e.setTitleHandler(t)}),[]);var n={onChange:e.setTitleHandler};return Object(g.jsx)(v,{editable:n,children:e.title})},k=n(28),C=n(42),T=n(196),y=n(205),N=n(140),w=n(209),_=n(79),S=n(208),E=(n(162),Object(_.c)((function(){return Object(g.jsx)("div",{className:"drag-handle",children:Object(g.jsx)(S.a,{})})}))),I=n(41),H=Object(I.b)({name:"todo",initialState:{todos:[],isEdit:!1},reducers:{saveTodo:function(e,t){e.todos.push(t.payload)},checkTodo:function(e,t){var n=t.payload,c=n.index,o=n.todo;e.todos.splice(c,1,o)},removeTodo:function(e,t){e.todos.splice(t.payload,1)},toggleEdit:function(e,t){e.isEdit=t.payload},saveEditTodo:function(e,t){var n=e.todos.findIndex((function(e){return e.id===t.payload.id}));e.todos.splice(n,1,t.payload)},editTodos:function(e,t){e.todos=e.todos.concat(t.payload)},cleatTodos:function(e){e.todos.splice(0,e.todos.length)},sortTodos:function(e,t){e.todos=t.payload}}}),V=H.actions,A=V.saveTodo,D=V.checkTodo,F=V.removeTodo,W=V.toggleEdit,z=V.saveEditTodo,M=V.editTodos,R=V.cleatTodos,P=V.sortTodos,L=H.reducer,J="RESET",B="REMOVE",U="\u0414\u0430",G="\u041d\u0435\u0442",$=function(e){var t=e.todo,n=e.index,o=e.setTodoTitleHandler,i=e.setCurrentTodoHandler,a=h(),s=p((function(e){return e.todo.todos})),r=Object(c.useCallback)((function(){a(W(!0)),o(t.title),i(t)}),[a,t,o,i]),l=Object(c.useCallback)((function(){a(F(n)),d.b.success("".concat(t.title," \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d!"))}),[a,n,t]),j=[Object(g.jsx)(C.a,{shape:"circle",icon:Object(g.jsx)(N.a,{}),type:"primary",onClick:r}),Object(g.jsx)(T.a,{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c ".concat(t.title,"?"),okText:U,cancelText:G,onConfirm:l,children:Object(g.jsx)(C.a,{shape:"circle",icon:Object(g.jsx)(w.a,{}),danger:!0})})],b=Object(c.useCallback)((function(e){a(D({index:n,todo:Object(k.a)(Object(k.a)({},s[n]),{},{isCheck:e.target.checked})}))}),[a,s,n]);return Object(g.jsxs)(u.b.Item,{className:"modal-list__item",actions:j,children:[Object(g.jsx)(E,{}),Object(g.jsx)(y.a,{checked:t.isCheck,onChange:b,children:t.title})]})},q=function(e){return e.children},K=Object(_.a)(q),Q=Object(_.b)(q),X=n(197),Y=n(206),Z=n(68),ee={id:0,title:"",isCheck:!1},te=(n(171),function(e){var t=h(),n=p((function(e){return e.todo.isEdit})),o=Object(c.useCallback)((function(t){var n=t.target;e.setTodoTitleHandler(n.value)}),[e]),i=Object(c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=Object(k.a)(Object(k.a)({},ee),{},{id:Date.now()+n,title:e.trim()});t(A(c))}),[t]),a=Object(c.useCallback)((function(){var n=Object(k.a)(Object(k.a)({},e.currentTodo),{},{title:e.todoTitle.trim()});t(z(n))}),[t,e]),s=Object(c.useCallback)((function(){a(),t(W(!1)),e.setTodoTitleHandler("")}),[e,a,t]),r=Object(c.useCallback)((function(){e.todoTitle.trim().split(";").filter((function(e){return""!==e.trim()})).map((function(e,t){return i(e,t)})),e.setTodoTitleHandler("")}),[e,i]),l=Object(c.useCallback)((function(){e.setTodoTitleHandler(""),e.setCurrentTodoHandler(null),t(W(!1))}),[e,t]);return Object(g.jsxs)(X.a,{className:"anota-row",children:[Object(g.jsx)(Y.a,{placeholder:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0443\u043d\u043a\u0442",onChange:o,value:e.todoTitle}),Object(g.jsx)(C.a,{type:"primary",disabled:0===e.todoTitle.length,onClick:n?s:r,children:n?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(g.jsx)(C.a,{icon:Object(g.jsx)(Z.a,{}),type:"text",onClick:l})]})}),ne=n(139),ce=n(138),oe=n(98),ie=n(210),ae=Object(I.b)({name:"note",initialState:{isVisibleNote:!0},reducers:{setVisibleNote:function(e,t){e.isVisibleNote=void 0===t.payload||t.payload}}}),se=ae.actions.setVisibleNote,re=ae.reducer,le=(n(172),x.a.Text),de=function(){var e=h(),t=p((function(e){return e.todo.todos})),n=p((function(e){return e.note.isVisibleNote})),o=Object(c.useState)(null),i=Object(l.a)(o,2),a=i[0],s=i[1],r=t.some((function(e){return e.isCheck})),d=t.filter((function(e){return e.isCheck})),j=t.filter((function(e){return!e.isCheck})),u=Object(c.useCallback)((function(){e(se(!n))}),[e,n]),b=Object(c.useCallback)((function(n,c){e(D({index:n,todo:Object(k.a)(Object(k.a)({},t[n]),{},{isCheck:c})}))}),[e,t]),f=Object(c.useCallback)((function(){var n=t.filter((function(e){return!e.isCheck}));e(P(n))}),[t,e]),O=Object(c.useCallback)((function(){d.forEach((function(e){var n=t.findIndex((function(t){return t.id===e.id}));a===J?b(n,!1):f()}))}),[b,f,d,t,a]),x=Object(c.useCallback)((function(){j.forEach((function(e){var n=t.findIndex((function(t){return t.id===e.id}));b(n,!0)}))}),[j,t,b]),v={text:d.map((function(e){return e.title})).join(";")};return Object(g.jsxs)("div",{className:"actions",children:[Object(g.jsxs)("figure",{className:"actions__item",children:[Object(g.jsx)(C.a,{type:"primary",icon:n?Object(g.jsx)(ne.a,{}):Object(g.jsx)(ce.a,{}),onClick:u,shape:"circle",size:"large"}),Object(g.jsx)("figcaption",{children:Object(g.jsx)(le,{children:n?"\u0421\u043a\u0440\u044b\u0442\u044c":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c"})})]}),Object(g.jsxs)("figure",{className:"actions__item",children:[Object(g.jsx)(C.a,{disabled:!r,type:"primary",className:"actions__btn actions__btn--copy",shape:"circle",size:"large",children:Object(g.jsx)(le,{copyable:v})}),Object(g.jsx)("figcaption",{children:Object(g.jsx)(le,{disabled:!r,children:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]}),Object(g.jsxs)("figure",{className:"actions__item",children:[Object(g.jsx)(C.a,{type:"primary",icon:Object(g.jsx)(oe.a,{}),shape:"circle",size:"large",onClick:x}),Object(g.jsx)("figcaption",{children:Object(g.jsx)(le,{children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0451"})})]}),Object(g.jsxs)("figure",{className:"actions__item",children:[Object(g.jsx)(T.a,{title:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0438 \u0443 ".concat(d.map((function(e){return e.title})).join(", "),"?"),okText:U,cancelText:G,onConfirm:O,children:Object(g.jsx)(C.a,{disabled:!r,type:"primary",icon:Object(g.jsx)(ie.a,{}),onClick:function(){return s(J)},shape:"circle",size:"large"})}),Object(g.jsx)("figcaption",{children:Object(g.jsx)(le,{disabled:!r,children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"})})]}),Object(g.jsxs)("figure",{className:"actions__item",children:[Object(g.jsx)(T.a,{title:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c ".concat(d.map((function(e){return e.title})).join(", "),"?"),okText:U,cancelText:G,onConfirm:O,children:Object(g.jsx)(C.a,{danger:!0,disabled:!r,type:"primary",icon:Object(g.jsx)(w.a,{}),onClick:function(){return s(B)},shape:"circle",size:"large"})}),Object(g.jsx)("figcaption",{children:Object(g.jsx)(le,{disabled:!r,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]})]})},je=Object(I.b)({name:"app",initialState:{notes:[]},reducers:{getNotes:function(e,t){e.notes=t.payload},saveNote:function(e,t){e.notes.push(t.payload)},saveEditNote:function(e,t){e.notes.splice(t.payload.index,1,t.payload.note)},removeNote:function(e,t){var n=e.notes.findIndex((function(e){return e.id===t.payload}));e.notes.splice(n,1)},saveNotesAfterSorting:function(e,t){e.notes=t.payload}}}),ue=je.actions,be=ue.getNotes,fe=ue.saveNote,Oe=ue.saveEditNote,xe=ue.removeNote,he=ue.saveNotesAfterSorting,pe=je.reducer,ge=Object(I.b)({name:"modal",initialState:{visibleModal:!1,title:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430",currentNoteIndex:null},reducers:{onToggleShow:function(e,t){e.visibleModal=t.payload},setTitleEdit:function(e,t){e.title=t.payload},setCurrentNoteIndex:function(e,t){e.currentNoteIndex=t.payload}}}),ve=ge.actions,me=ve.onToggleShow,ke=ve.setTitleEdit,Ce=ve.setCurrentNoteIndex,Te=ge.reducer,ye=(n(173),function(){var e=Object(c.useRef)(null),t=h(),n=p((function(e){return e.modal.visibleModal})),o=p((function(e){return e.todo.todos})),a=p((function(e){return e.modal.currentNoteIndex})),s=p((function(e){return e.note.isVisibleNote})),r=Object(c.useState)(""),f=Object(l.a)(r,2),x=f[0],v=f[1],k=Object(c.useState)(null),C=Object(l.a)(k,2),T=C[0],y=C[1],N=Object(c.useState)(""),w=Object(l.a)(N,2),_=w[0],S=w[1],E=Object(c.useCallback)((function(e){var n={note:{id:Date.now(),title:x,todos:o,isVisibleNote:s},index:e};t(Oe(n)),t(Ce(null))}),[t,x,o,s]),I=Object(c.useCallback)((function(){var e={id:Date.now(),title:x,todos:o,isVisibleNote:s};t(fe(e))}),[t,x,o,s]),H=Object(c.useCallback)((function(){o.length>0?(Number.isFinite(a)?E(a):I(),t(me(!1)),t(ke("\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430")),t(R()),S("")):d.b.warning("\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u0432 \u0437\u0430\u043c\u0435\u0442\u043a\u0443!")}),[t,I,E,o,a]);return Object(g.jsxs)(j.a,{title:Object(g.jsx)(m,{title:x,setTitleHandler:v}),style:{top:20},visible:n,cancelText:Object(g.jsx)(g.Fragment,{}),destroyOnClose:!0,onOk:H,onCancel:function(){t(me(!1)),t(R()),t(Ce(null)),t(ke("\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430")),S("")},children:[Object(g.jsx)(te,{todoTitle:_,currentTodo:T,setTodoTitleHandler:S,setCurrentTodoHandler:y}),o.length>0?Object(g.jsx)(K,{onSortEnd:function(e){var n=e.oldIndex,c=e.newIndex;return t(P(O()(o,n,c)))},useDragHandle:!0,helperClass:"modal-list",getContainer:function(){var t;return null===i.a||void 0===i.a||null===(t=i.a.findDOMNode(e.current))||void 0===t?void 0:t.parentElement},children:Object(g.jsx)(u.b,{dataSource:o,renderItem:function(t,n){return Object(g.jsx)(Q,{index:n,ref:e,children:Object(g.jsx)($,{todo:t,index:n,setTodoTitleHandler:S,setCurrentTodoHandler:y})},t.id+n)},bordered:!0,footer:Object(g.jsx)(de,{})})}):Object(g.jsx)(b.a,{image:b.a.PRESENTED_IMAGE_SIMPLE})]})}),Ne=n(198),we=n(202),_e=(n(174),function(){return Object(g.jsxs)("div",{className:"logo",children:[Object(g.jsx)("span",{}),Object(g.jsx)("span",{}),Object(g.jsx)("span",{}),Object(g.jsx)("span",{})]})}),Se=(n(175),r.a.Header),Ee=function(){var e=p((function(e){return e.anota.notes}));return Object(g.jsx)(Se,{className:"anota-header",children:Object(g.jsxs)(X.a,{justify:"space-between",align:"middle",children:[Object(g.jsx)(Ne.a,{children:Object(g.jsx)(_e,{})}),Object(g.jsx)(Ne.a,{children:Object(g.jsx)(we.a,{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043c\u0435\u0442\u043e\u043a",value:e.length})})]})})},Ie=n(211),He=n(199),Ve=n(207),Ae=n(4),De=n.n(Ae),Fe=x.a.Text,We=function(e){var t=Object(a.b)(),n=Object(c.useCallback)((function(){return t(xe(e.id))}),[e.id,t]),o=Object(c.useCallback)((function(){t(M(e.todos)),t(ke(e.title)),t(me(!0)),t(Ce(e.index)),t(se(e.isVisibleNote))}),[t,e]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C.a,{type:"text",block:!0,onClick:o,children:Object(g.jsx)(Fe,{type:"success",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}),Object(g.jsx)(T.a,{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c ".concat(e.title),okText:U,cancelText:G,onConfirm:n,children:Object(g.jsx)(C.a,{type:"text",block:!0,children:Object(g.jsx)(Fe,{type:"danger",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})})]})},ze=(n(188),x.a.Title),Me={rows:1,tooltip:!0,expandable:!0,symbol:Object(g.jsx)("span",{})},Re=function(e){var t=Object(c.useState)(!e.isVisibleNote),n=Object(l.a)(t,2),o=n[0],i=n[1],a=Object(c.useState)(0),s=Object(l.a)(a,2),r=s[0],d=s[1],j=Object(c.useRef)(null),b=De()("note__card",{"note__card--flip":o}),f=Object(c.useCallback)((function(){i(!o)}),[o]);return Object(c.useEffect)((function(){var e;d(null===j||void 0===j||null===(e=j.current)||void 0===e?void 0:e.firstElementChild.offsetHeight)}),[]),Object(g.jsxs)("div",{className:b,style:{minHeight:"".concat(r,"px")},children:[Object(g.jsx)("div",{className:"note__wrapper note__wrapper--front",ref:j,children:Object(g.jsx)(u.b,{dataSource:e.todos,renderItem:function(e){return Object(g.jsx)(u.b.Item,{children:Object(g.jsx)(y.a,{checked:e.isCheck,children:e.title},e.id)})},header:Object(g.jsxs)(X.a,{justify:"space-between",align:"middle",wrap:!1,children:[Object(g.jsx)(Ne.a,{span:"21",children:Object(g.jsx)(ze,{level:4,ellipsis:Me,style:{textAlign:"left"},children:e.title})}),Object(g.jsx)(Ne.a,{span:"3",children:Object(g.jsx)(He.a,{placement:"bottomRight",trigger:"click",content:Object(g.jsx)(We,Object(k.a)(Object(k.a)({},e),{},{index:e.index})),zIndex:999,children:Object(g.jsx)(C.a,{type:"text",icon:Object(g.jsx)(Ve.a,{})})})})]}),footer:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{}),Object(g.jsxs)("div",{style:{textAlign:"center"},children:["Done ",e.todos.filter((function(e){return e.isCheck})).length," of\xa0 ",e.todos.length]}),Object(g.jsx)("div",{children:!e.isVisibleNote&&Object(g.jsx)(C.a,{type:"text",icon:Object(g.jsx)(ce.a,{}),onClick:f})})]})})}),Object(g.jsx)("div",{className:"note__wrapper note__wrapper--back",onClick:f,children:Object(g.jsx)(C.a,{type:"text",size:"large",icon:Object(g.jsx)(ce.a,{})})})]})},Pe=(n(189),r.a.Content),Le=function(){var e=h(),t=p((function(e){return e.anota.notes}));return Object(g.jsxs)(Pe,{className:"anota-main",children:[Object(g.jsx)(X.a,{gutter:[16,24],children:Object(g.jsx)(K,{axis:"xy",pressDelay:205,helperClass:"anota-main__sort-list",onSortEnd:function(n){var c=n.oldIndex,o=n.newIndex;e(he(O()(t,c,o)))},useWindowAsScrollContainer:!0,children:Object(g.jsx)("div",{style:{display:"contents"},children:t.map((function(e,t){return Object(g.jsx)(Q,{index:t,children:Object(g.jsx)(Ne.a,{className:"note",xs:24,sm:24,md:12,lg:8,xl:6,children:Object(g.jsx)(Re,Object(k.a)({index:t},e))})},e.id)}))})})}),Object(g.jsx)(C.a,{type:"primary",shape:"circle",icon:Object(g.jsx)(Ie.a,{}),size:"large",className:"anota__btn-add-note",onClick:function(){return e(me(!0))}})]})},Je=r.a.Footer,Be=function(){return Object(g.jsx)(Je,{})},Ue=(n(190),function(){return Object(g.jsxs)(r.a,{className:"anota",children:[Object(g.jsx)(Ee,{}),Object(g.jsx)(Le,{}),Object(g.jsx)(Be,{}),Object(g.jsx)(ye,{})]})}),Ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $e(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,212)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),i(e),a(e)}))},Ke=(n(191),Object(I.a)({reducer:{anota:pe,modal:Te,todo:L,note:re}}));Ke.subscribe((function(){var e={notes:{lists:Object(s.get)(Ke.getState(),"anota.notes",[])}};localStorage.setItem("vuex",JSON.stringify(e))}));var Qe=function(){try{var e=localStorage.getItem("vuex");if(e)return Object(s.get)(JSON.parse(e),"notes.lists",[])}catch(t){console.log(t)}}();Qe&&Ke.dispatch(be(Qe)),i.a.render(Object(g.jsx)(a.a,{store:Ke,children:Object(g.jsx)(Ue,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/anota",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/anota","/service-worker.js");Ge?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$e(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):$e(t,e)}))}}(),qe()}},[[192,1,2]]]);
//# sourceMappingURL=main.bc5816c0.chunk.js.map