(this["webpackJsonpanota-react"]=this["webpackJsonpanota-react"]||[]).push([[0],{161:function(e,t,n){},170:function(e,t,n){},171:function(e,t,n){},172:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(17),a=n.n(c),i=n(24),r=n(75),s=n(201),l=(n(149),n(102)),d=n(136),u=n(200),j=n(76),b=n.n(j),O=n(197),f=n(5),x=O.a.Text,h=function(e){var t=Object(i.c)((function(e){return e.modal.title}));Object(o.useEffect)((function(){e.setTitleHandler(t)}),[]);var n={onChange:e.setTitleHandler};return Object(f.jsx)(x,{editable:n,children:e.title})},p=n(39),g=n(196),v=n(41),T=n(40),m=n(192),C=n(202),k=n(140),y=n(205),w=n(204),N=(n(161),Object(p.c)((function(){return Object(f.jsx)("div",{className:"drag-handle",children:Object(f.jsx)(w.a,{})})}))),S=n(49),H=Object(S.b)({name:"todo",initialState:{todos:[],isEdit:!1},reducers:{saveTodo:function(e,t){e.todos.push(t.payload)},checkTodo:function(e,t){var n=t.payload,o=n.index,c=n.todo;e.todos.splice(o,1,c)},removeTodo:function(e,t){e.todos.splice(t.payload,1)},toggleEdit:function(e,t){e.isEdit=t.payload},saveEditTodo:function(e,t){var n=e.todos.findIndex((function(e){return e.id===t.payload.id}));e.todos.splice(n,1,t.payload)},editTodos:function(e,t){e.todos=e.todos.concat(t.payload)},cleatTodos:function(e,t){e.todos.splice(0,e.todos.length)},sortTodos:function(e,t){e.todos=t.payload}}}),I=H.actions,E=I.saveTodo,_=I.checkTodo,D=I.removeTodo,F=I.toggleEdit,W=I.saveEditTodo,A=I.editTodos,R=I.cleatTodos,J=I.sortTodos,L=H.reducer,M=function(e){var t=e.todo,n=e.todos,c=e.index,a=e.setTodoTitleHandler,r=e.setCurrentTodoHandler,s=Object(i.b)(),l=Object(o.useCallback)((function(){s(F(!0)),a(t.title),r(t)}),[s,t,a,r]),u=Object(o.useCallback)((function(){s(D(c)),d.b.success("".concat(t.title," \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d!"))}),[s,c,t]),j=[Object(f.jsx)(T.a,{shape:"circle",icon:Object(f.jsx)(k.a,{}),type:"primary",onClick:l}),Object(f.jsx)(m.a,{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c ".concat(t.title,"?"),okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442",onConfirm:u,children:Object(f.jsx)(T.a,{shape:"circle",icon:Object(f.jsx)(y.a,{}),danger:!0})})],b=Object(o.useCallback)((function(e){s(_({index:c,todo:Object(v.a)(Object(v.a)({},n[c]),{},{isCheck:e.target.checked})}))}),[s,n,c]);return Object(f.jsxs)(g.b.Item,{className:"modal-list__item",actions:j,children:[Object(f.jsx)(N,{}),Object(f.jsx)(C.a,{checked:t.isCheck,onChange:b,children:t.title})]})},P=Object(p.b)((function(e){return Object(f.jsx)(M,{todos:e.todos,todo:e.todo,index:e.indx,setTodoTitleHandler:e.setTodoTitleHandler,setCurrentTodoHandler:e.setCurrentTodoHandler})})),B=Object(p.a)((function(e){return Object(f.jsx)(g.b,{dataSource:e.todos,renderItem:function(t,n){return Object(f.jsx)(P,{todos:e.todos,todo:t,indx:n,setTodoTitleHandler:e.setTodoTitleHandler,setCurrentTodoHandler:e.setCurrentTodoHandler,index:n,ref:e.itemRef},t.id)}})})),U=n(193),z=n(199),$=n(65),q=(Date.now(),{id:0,title:"",isCheck:!1}),G=(n(170),function(e){var t=Object(i.b)(),n=Object(i.c)((function(e){return e.todo.isEdit})),c=Object(o.useCallback)((function(t){var n=t.target;e.setTodoTitleHandler(n.value)}),[e]),a=Object(o.useCallback)((function(){var n=Object(v.a)(Object(v.a)({},q),{},{id:Date.now(),title:e.todoTitle});t(E(n))}),[t,e]),r=Object(o.useCallback)((function(){var n=Object(v.a)(Object(v.a)({},e.currentTodo),{},{title:e.todoTitle});t(W(n))}),[t,e]),s=Object(o.useCallback)((function(){n?(r(),t(F(!1))):a(),e.setTodoTitleHandler("")}),[e,n,t,a,r]),l=Object(o.useCallback)((function(){e.setTodoTitleHandler(""),e.setCurrentTodoHandler(null),t(F(!1))}),[e,t]);return Object(f.jsxs)(U.a,{className:"anota-row",gutter:[16,16],children:[Object(f.jsx)(z.a,{placeholder:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0443\u043d\u043a\u0442",onChange:c,value:e.todoTitle}),Object(f.jsx)(T.a,{type:"primary",disabled:0===e.todoTitle.length,onClick:s,children:n?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(f.jsx)(T.a,{icon:Object(f.jsx)($.a,{}),type:"text",onClick:l})]})}),K=Object(S.b)({name:"app",initialState:[],reducers:{getNotes:function(e,t){return t.payload},saveNote:function(e,t){e.push(t.payload)},saveEditNote:function(e,t){e.splice(t.payload.index,1,t.payload.note)},removeNote:function(e,t){return e.filter((function(e){return e.id!==t.payload}))},saveNotesAfterSorting:function(e,t){return t.payload}}}),Q=K.actions,V=Q.getNotes,X=Q.saveNote,Y=Q.saveEditNote,Z=Q.removeNote,ee=Q.saveNotesAfterSorting,te=K.reducer,ne=Object(S.b)({name:"modal",initialState:{visibleModal:!1,title:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430",currentNoteIndex:null},reducers:{onToggleShow:function(e,t){e.visibleModal=t.payload},setTitleEdit:function(e,t){e.title=t.payload},setCurrentNoteIndex:function(e,t){e.currentNoteIndex=t.payload}}}),oe=ne.actions,ce=oe.onToggleShow,ae=oe.setTitleEdit,ie=oe.setCurrentNoteIndex,re=ne.reducer,se=(n(171),function(){var e=Object(o.useRef)(null),t=Object(i.b)(),n=Object(i.c)((function(e){return e.modal.visibleModal})),c=Object(i.c)((function(e){return e.todo.todos})),r=Object(i.c)((function(e){return e.modal.currentNoteIndex})),s=Object(o.useState)(""),j=Object(l.a)(s,2),O=j[0],x=j[1],p=Object(o.useState)(null),g=Object(l.a)(p,2),v=g[0],T=g[1],m=Object(o.useState)(""),C=Object(l.a)(m,2),k=C[0],y=C[1],w=Object(o.useCallback)((function(e){var n={note:{id:Date.now(),title:O,todos:c},index:e};t(Y(n)),t(ie(null))}),[t,O,c]),N=Object(o.useCallback)((function(){var e={id:Date.now(),title:O,todos:c};t(X(e))}),[t,O,c]),S=Object(o.useCallback)((function(){c.length>0?(Number.isFinite(r)?w(r):N(),t(ce(!1)),t(ae("\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430")),t(R()),y("")):d.b.warning("\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u0432 \u0437\u0430\u043c\u0435\u0442\u043a\u0443!")}),[t,N,w,c,r]);return Object(f.jsxs)(u.a,{title:Object(f.jsx)(h,{title:O,setTitleHandler:x}),visible:n,cancelText:Object(f.jsx)(f.Fragment,{}),destroyOnClose:!0,onOk:S,onCancel:function(){t(ce(!1)),t(R()),t(ie(null)),t(ae("\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430")),y("")},children:[Object(f.jsx)(G,{todoTitle:k,currentTodo:v,setTodoTitleHandler:y,setCurrentTodoHandler:T}),c.length>0&&Object(f.jsx)(B,{itemRef:e,todos:c,setTodoTitleHandler:y,setCurrentTodoHandler:T,onSortEnd:function(e){var n=e.oldIndex,o=e.newIndex;return t(J(b()(c,n,o)))},useDragHandle:!0,helperClass:"modal-list",getContainer:function(){return a.a.findDOMNode(e.current).parentElement}})]})}),le=n(194),de=n(198),ue=(n(172),function(){return Object(f.jsxs)("div",{className:"logo",children:[Object(f.jsx)("span",{}),Object(f.jsx)("span",{}),Object(f.jsx)("span",{}),Object(f.jsx)("span",{})]})}),je=s.a.Header,be=function(){var e=Object(i.c)((function(e){return e.anota}));return Object(f.jsx)(je,{className:"anota__header",children:Object(f.jsxs)(U.a,{justify:"space-between",align:"middle",children:[Object(f.jsx)(le.a,{children:Object(f.jsx)(ue,{})}),Object(f.jsx)(le.a,{children:Object(f.jsx)(de.a,{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043c\u0435\u0442\u043e\u043a",value:e.length,valueStyle:{color:"white"}})})]})})},Oe=n(206),fe=n(195),xe=n(203),he=O.a.Text,pe=function(e){var t=Object(i.b)(),n=Object(o.useCallback)((function(){return t(Z(e.noteId))}),[e.noteId,t]),c=Object(o.useCallback)((function(){t(A(e.noteTodos)),t(ae(e.noteTitle)),t(ce(!0)),t(ie(e.index))}),[t,e]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(T.a,{type:"text",block:!0,onClick:c,children:Object(f.jsx)(he,{type:"success",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}),Object(f.jsx)(m.a,{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c ".concat(e.noteTitle),okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442",onConfirm:n,children:Object(f.jsx)(T.a,{type:"text",block:!0,children:Object(f.jsx)(he,{type:"danger",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})})]})},ge=(n(185),O.a.Title),ve=function(e){var t={rows:1,tooltip:!0,expandable:!0,symbol:Object(f.jsx)("span",{})};return Object(f.jsx)("div",{className:"note__card",children:Object(f.jsx)(g.b,{dataSource:e.todos,renderItem:function(e){return Object(f.jsx)(g.b.Item,{children:Object(f.jsx)(C.a,{checked:e.isCheck,children:e.title},e.id)})},header:Object(f.jsxs)(U.a,{justify:"space-between",align:"middle",wrap:!1,children:[Object(f.jsx)(le.a,{span:"21",children:Object(f.jsx)(ge,{level:4,ellipsis:t,style:{textAlign:"left"},children:e.title})}),Object(f.jsx)(le.a,{span:"3",children:Object(f.jsx)(fe.a,{placement:"bottomRight",trigger:"click",content:Object(f.jsx)(pe,{noteId:e.id,noteTitle:e.title,noteTodos:e.todos,index:e.index}),zIndex:"999",children:Object(f.jsx)(T.a,{type:"text",icon:Object(f.jsx)(xe.a,{})})})})]}),footer:Object(f.jsxs)(f.Fragment,{children:["Done ",e.todos.filter((function(e){return e.isCheck})).length," of\xa0",e.todos.length]})})})},Te=Object(p.b)((function(e){return Object(f.jsx)(le.a,{className:"note",xs:24,sm:24,md:12,lg:8,xl:6,children:Object(f.jsx)(ve,Object(v.a)({index:e.indx},e.note))})})),me=Object(p.a)((function(e){return Object(f.jsx)("div",{style:{display:"contents"},children:e.notes.map((function(e,t){return Object(f.jsx)(Te,{note:e,indx:t,index:t},e.id)}))})})),Ce=s.a.Content,ke=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.anota}));return Object(f.jsxs)(Ce,{className:"anota__main",children:[Object(f.jsx)(U.a,{gutter:[16,24],children:Object(f.jsx)(me,{notes:t,axis:"xy",pressDelay:205,onSortEnd:function(n){var o=n.oldIndex,c=n.newIndex;e(ee(b()(t,o,c)))},useWindowAsScrollContainer:!0})}),Object(f.jsx)(T.a,{type:"primary",shape:"circle",icon:Object(f.jsx)(Oe.a,{}),size:"large",className:"anota__btn-add-note",onClick:function(){return e(ce(!0))}})]})},ye=s.a.Footer,we=function(){return Object(f.jsx)(ye,{})},Ne=(n(186),function(){return Object(f.jsxs)(s.a,{className:"anota",children:[Object(f.jsx)(be,{}),Object(f.jsx)(ke,{}),Object(f.jsx)(we,{}),Object(f.jsx)(se,{})]})}),Se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function He(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,207)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),a(e),i(e)}))},Ee=(n(187),Object(S.a)({reducer:{anota:te,modal:re,todo:L}}));Ee.subscribe((function(){var e={notes:{lists:Object(r.get)(Ee.getState(),"anota","")}};localStorage.setItem("vuex",JSON.stringify(e))}));var _e=function(e){try{var t=localStorage.getItem("vuex");if(t)return Object(r.get)(JSON.parse(t),"notes.lists",[])}catch(n){console.log(n)}}();_e&&Ee.dispatch(V(_e)),a.a.render(Object(f.jsx)(i.a,{store:Ee,children:Object(f.jsx)(Ne,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/anota",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/anota","/service-worker.js");Se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):He(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):He(t,e)}))}}(),Ie()}},[[188,1,2]]]);
//# sourceMappingURL=main.1d117260.chunk.js.map