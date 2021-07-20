(this["webpackJsonpanota-react"]=this["webpackJsonpanota-react"]||[]).push([[0],{164:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(19),i=n.n(o),a=n(20),r=n(79),s=n(203),l=(n(151),n(49)),d=n(134),j=n(202),u=n(80),b=n.n(u),O=n(201),f=n(6),x=O.a.Text,h=function(e){var t=Object(a.c)((function(e){return e.modal.title}));Object(c.useEffect)((function(){e.setTitleHandler(t)}),[]);var n={onChange:e.setTitleHandler};return Object(f.jsx)(x,{editable:n,children:e.title})},p=n(199),v=n(43),g=n(29),m=n(44),T=n(195),k=n(204),C=n(140),y=n(208),N=n(207),w=(n(164),Object(v.c)((function(){return Object(f.jsx)("div",{className:"drag-handle",children:Object(f.jsx)(N.a,{})})}))),S=n(42),H=Object(S.b)({name:"todo",initialState:{todos:[],isEdit:!1},reducers:{saveTodo:function(e,t){e.todos.push(t.payload)},checkTodo:function(e,t){var n=t.payload,c=n.index,o=n.todo;e.todos.splice(c,1,o)},removeTodo:function(e,t){e.todos.splice(t.payload,1)},toggleEdit:function(e,t){e.isEdit=t.payload},saveEditTodo:function(e,t){var n=e.todos.findIndex((function(e){return e.id===t.payload.id}));e.todos.splice(n,1,t.payload)},editTodos:function(e,t){e.todos=e.todos.concat(t.payload)},cleatTodos:function(e,t){e.todos.splice(0,e.todos.length)},sortTodos:function(e,t){e.todos=t.payload}}}),E=H.actions,I=E.saveTodo,_=E.checkTodo,V=E.removeTodo,F=E.toggleEdit,W=E.saveEditTodo,A=E.editTodos,D=E.cleatTodos,R=E.sortTodos,M=H.reducer,J=function(e){var t=e.todo,n=e.index,o=e.setTodoTitleHandler,i=e.setCurrentTodoHandler,r=Object(a.b)(),s=Object(a.c)((function(e){return e.todo.todos})),l=Object(c.useCallback)((function(){r(F(!0)),o(t.title),i(t)}),[r,t,o,i]),j=Object(c.useCallback)((function(){r(V(n)),d.b.success("".concat(t.title," \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d!"))}),[r,n,t]),u=[Object(f.jsx)(m.a,{shape:"circle",icon:Object(f.jsx)(C.a,{}),type:"primary",onClick:l}),Object(f.jsx)(T.a,{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c ".concat(t.title,"?"),okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442",onConfirm:j,children:Object(f.jsx)(m.a,{shape:"circle",icon:Object(f.jsx)(y.a,{}),danger:!0})})],b=Object(c.useCallback)((function(e){r(_({index:n,todo:Object(g.a)(Object(g.a)({},s[n]),{},{isCheck:e.target.checked})}))}),[r,s,n]);return Object(f.jsxs)(p.b.Item,{className:"modal-list__item",actions:u,children:[Object(f.jsx)(w,{}),Object(f.jsx)(k.a,{checked:t.isCheck,onChange:b,children:t.title})]})},L=Object(v.b)((function(e){return Object(f.jsx)(J,{todo:e.todo,index:e.indx,setTodoTitleHandler:e.setTodoTitleHandler,setCurrentTodoHandler:e.setCurrentTodoHandler})})),P=Object(v.a)((function(e){var t=Object(a.c)((function(e){return e.todo.todos}));return Object(f.jsx)(p.b,{dataSource:t,renderItem:function(t,n){return Object(f.jsx)(L,{todo:t,indx:n,setTodoTitleHandler:e.setTodoTitleHandler,setCurrentTodoHandler:e.setCurrentTodoHandler,index:n,ref:e.itemRef},t.id)}})})),z=n(196),B=n(205),U=n(69),$={id:0,title:"",isCheck:!1},q=(n(173),function(e){var t=Object(a.b)(),n=Object(a.c)((function(e){return e.todo.isEdit})),o=Object(c.useCallback)((function(t){var n=t.target;e.setTodoTitleHandler(n.value)}),[e]),i=Object(c.useCallback)((function(){var n=Object(g.a)(Object(g.a)({},$),{},{id:Date.now(),title:e.todoTitle});t(I(n))}),[t,e]),r=Object(c.useCallback)((function(){var n=Object(g.a)(Object(g.a)({},e.currentTodo),{},{title:e.todoTitle});t(W(n))}),[t,e]),s=Object(c.useCallback)((function(){n?(r(),t(F(!1))):i(),e.setTodoTitleHandler("")}),[e,n,t,i,r]),l=Object(c.useCallback)((function(){e.setTodoTitleHandler(""),e.setCurrentTodoHandler(null),t(F(!1))}),[e,t]);return Object(f.jsxs)(z.a,{className:"anota-row",children:[Object(f.jsx)(B.a,{placeholder:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0443\u043d\u043a\u0442",onChange:o,value:e.todoTitle}),Object(f.jsx)(m.a,{type:"primary",disabled:0===e.todoTitle.length,onClick:s,children:n?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(f.jsx)(m.a,{icon:Object(f.jsx)(U.a,{}),type:"text",onClick:l})]})}),G=n(128),K=n(197),Q=n(142),X=n(139),Y=n(141),Z=n(209),ee=Object(S.b)({name:"note",initialState:{isVisibleNote:!0},reducers:{setVisibleNote:function(e,t){e.isVisibleNote=void 0===t.payload||t.payload}}}),te=ee.actions.setVisibleNote,ne=ee.reducer,ce="RESET",oe="REMOVE",ie=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.todo.todos})),n=Object(a.c)((function(e){return e.note.isVisibleNote})),o=Object(c.useState)(null),i=Object(l.a)(o,2),r=i[0],s=i[1],d=t.some((function(e){return e.isCheck})),j=t.filter((function(e){return e.isCheck})),u=Object(c.useCallback)((function(){e(te(!n))}),[e,n]),b=Object(c.useCallback)((function(n){e(_({index:n,todo:Object(g.a)(Object(g.a)({},t[n]),{},{isCheck:!1})}))}),[e,t]),O=Object(c.useCallback)((function(){var n=t.filter((function(e){return!e.isCheck}));e(R(n))}),[t,e]),x=Object(c.useCallback)((function(){var e,n=Object(G.a)(j);try{var c=function(){var n=e.value,c=t.findIndex((function(e){return e.id===n.id}));r===ce?b(c):O()};for(n.s();!(e=n.n()).done;)c()}catch(o){n.e(o)}finally{n.f()}}),[b,O,j,t,r]);return Object(f.jsxs)(z.a,{gutter:[8,8],children:[Object(f.jsx)(K.a,{md:12,xs:24,children:Object(f.jsx)(m.a,{type:"primary",block:!0,icon:n?Object(f.jsx)(Q.a,{}):Object(f.jsx)(X.a,{}),onClick:u,children:n?"\u0421\u043a\u0440\u044b\u0442\u044c":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c"})}),Object(f.jsx)(K.a,{md:12,xs:24,children:Object(f.jsx)(m.a,{disabled:!d,type:"primary",icon:Object(f.jsx)(Y.a,{}),block:!0,children:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}),Object(f.jsx)(K.a,{md:12,xs:24,children:Object(f.jsx)(T.a,{title:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0438 \u0443 ".concat(j.map((function(e){return e.title})).join(", "),"?"),okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442",onConfirm:x,children:Object(f.jsx)(m.a,{disabled:!d,type:"primary",icon:Object(f.jsx)(Z.a,{}),block:!0,onClick:function(){return s(ce)},children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"})})}),Object(f.jsx)(K.a,{md:12,xs:24,children:Object(f.jsx)(T.a,{title:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c ".concat(j.map((function(e){return e.title})).join(", "),"?"),okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442",onConfirm:x,children:Object(f.jsx)(m.a,{danger:!0,disabled:!d,type:"primary",icon:Object(f.jsx)(y.a,{}),block:!0,onClick:function(){return s(oe)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})})]})},ae=Object(S.b)({name:"app",initialState:[],reducers:{getNotes:function(e,t){return t.payload},saveNote:function(e,t){e.push(t.payload)},saveEditNote:function(e,t){e.splice(t.payload.index,1,t.payload.note)},removeNote:function(e,t){return e.filter((function(e){return e.id!==t.payload}))},saveNotesAfterSorting:function(e,t){return t.payload}}}),re=ae.actions,se=re.getNotes,le=re.saveNote,de=re.saveEditNote,je=re.removeNote,ue=re.saveNotesAfterSorting,be=ae.reducer,Oe=Object(S.b)({name:"modal",initialState:{visibleModal:!1,title:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430",currentNoteIndex:null},reducers:{onToggleShow:function(e,t){e.visibleModal=t.payload},setTitleEdit:function(e,t){e.title=t.payload},setCurrentNoteIndex:function(e,t){e.currentNoteIndex=t.payload}}}),fe=Oe.actions,xe=fe.onToggleShow,he=fe.setTitleEdit,pe=fe.setCurrentNoteIndex,ve=Oe.reducer,ge=(n(174),function(){var e=Object(c.useRef)(null),t=Object(a.b)(),n=Object(a.c)((function(e){return e.modal.visibleModal})),o=Object(a.c)((function(e){return e.todo.todos})),r=Object(a.c)((function(e){return e.modal.currentNoteIndex})),s=Object(a.c)((function(e){return e.note.isVisibleNote})),u=Object(c.useState)(""),O=Object(l.a)(u,2),x=O[0],p=O[1],v=Object(c.useState)(null),g=Object(l.a)(v,2),m=g[0],T=g[1],k=Object(c.useState)(""),C=Object(l.a)(k,2),y=C[0],N=C[1],w=Object(c.useCallback)((function(e){var n={note:{id:Date.now(),title:x,todos:o,isVisibleNote:s},index:e};t(de(n)),t(pe(null))}),[t,x,o,s]),S=Object(c.useCallback)((function(){var e={id:Date.now(),title:x,todos:o,isVisibleNote:s};t(le(e))}),[t,x,o,s]),H=Object(c.useCallback)((function(){o.length>0?(Number.isFinite(r)?w(r):S(),t(xe(!1)),t(he("\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430")),t(D()),N("")):d.b.warning("\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u0432 \u0437\u0430\u043c\u0435\u0442\u043a\u0443!")}),[t,S,w,o,r]);return Object(f.jsxs)(j.a,{title:Object(f.jsx)(h,{title:x,setTitleHandler:p}),visible:n,cancelText:Object(f.jsx)(f.Fragment,{}),destroyOnClose:!0,onOk:H,onCancel:function(){t(xe(!1)),t(D()),t(pe(null)),t(he("\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430")),N("")},children:[Object(f.jsx)(q,{todoTitle:y,currentTodo:m,setTodoTitleHandler:N,setCurrentTodoHandler:T}),o.length>0&&Object(f.jsx)(P,{itemRef:e,setTodoTitleHandler:N,setCurrentTodoHandler:T,onSortEnd:function(e){var n=e.oldIndex,c=e.newIndex;return t(R(b()(o,n,c)))},useDragHandle:!0,helperClass:"modal-list",getContainer:function(){return i.a.findDOMNode(e.current).parentElement}}),Object(f.jsx)(ie,{})]})}),me=n(200),Te=(n(175),function(){return Object(f.jsxs)("div",{className:"logo",children:[Object(f.jsx)("span",{}),Object(f.jsx)("span",{}),Object(f.jsx)("span",{}),Object(f.jsx)("span",{})]})}),ke=s.a.Header,Ce=function(){var e=Object(a.c)((function(e){return e.anota}));return Object(f.jsx)(ke,{className:"anota__header",children:Object(f.jsxs)(z.a,{justify:"space-between",align:"middle",children:[Object(f.jsx)(K.a,{children:Object(f.jsx)(Te,{})}),Object(f.jsx)(K.a,{children:Object(f.jsx)(me.a,{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043c\u0435\u0442\u043e\u043a",value:e.length,valueStyle:{color:"white"}})})]})})},ye=n(210),Ne=n(198),we=n(206),Se=n(4),He=n.n(Se),Ee=O.a.Text,Ie=function(e){var t=Object(a.b)(),n=Object(c.useCallback)((function(){return t(je(e.id))}),[e.id,t]),o=Object(c.useCallback)((function(){t(A(e.todos)),t(he(e.title)),t(xe(!0)),t(pe(e.index)),t(te(e.isVisibleNote))}),[t,e]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m.a,{type:"text",block:!0,onClick:o,children:Object(f.jsx)(Ee,{type:"success",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}),Object(f.jsx)(T.a,{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c ".concat(e.title),okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442",onConfirm:n,children:Object(f.jsx)(m.a,{type:"text",block:!0,children:Object(f.jsx)(Ee,{type:"danger",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})})]})},_e=(n(188),O.a.Title),Ve={rows:1,tooltip:!0,expandable:!0,symbol:Object(f.jsx)("span",{})},Fe=function(e){var t=Object(c.useState)(!e.isVisibleNote),n=Object(l.a)(t,2),o=n[0],i=n[1],a=Object(c.useState)(0),r=Object(l.a)(a,2),s=r[0],d=r[1],j=Object(c.useRef)(null),u=He()("note__card",{"note__card--flip":o}),b=Object(c.useCallback)((function(){i(!o)}),[o]);return Object(c.useEffect)((function(){d(j.current.firstElementChild.offsetHeight)}),[]),Object(f.jsxs)("div",{className:u,style:{minHeight:"".concat(s,"px")},children:[Object(f.jsx)("div",{className:"note__wrapper note__wrapper--front",ref:j,children:Object(f.jsx)(p.b,{dataSource:e.todos,renderItem:function(e){return Object(f.jsx)(p.b.Item,{children:Object(f.jsx)(k.a,{checked:e.isCheck,children:e.title},e.id)})},header:Object(f.jsxs)(z.a,{justify:"space-between",align:"middle",wrap:!1,children:[Object(f.jsx)(K.a,{span:"21",children:Object(f.jsx)(_e,{level:4,ellipsis:Ve,style:{textAlign:"left"},children:e.title})}),Object(f.jsx)(K.a,{span:"3",children:Object(f.jsx)(Ne.a,{placement:"bottomRight",trigger:"click",content:Object(f.jsx)(Ie,Object(g.a)({},e)),zIndex:"999",children:Object(f.jsx)(m.a,{type:"text",icon:Object(f.jsx)(we.a,{})})})})]}),footer:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{}),Object(f.jsxs)("div",{style:{textAlign:"center"},children:["Done ",e.todos.filter((function(e){return e.isCheck})).length," of\xa0 ",e.todos.length]}),Object(f.jsx)("div",{children:!e.isVisibleNote&&Object(f.jsx)(m.a,{type:"text",icon:Object(f.jsx)(X.a,{}),onClick:b})})]})})}),Object(f.jsx)("div",{className:"note__wrapper note__wrapper--back",onClick:b,children:Object(f.jsx)(m.a,{type:"text",size:"large",icon:Object(f.jsx)(X.a,{})})})]})},We=Object(v.b)((function(e){return Object(f.jsx)(K.a,{className:"note",xs:24,sm:24,md:12,lg:8,xl:6,children:Object(f.jsx)(Fe,Object(g.a)({index:e.indx},e.note))})})),Ae=Object(v.a)((function(){var e=Object(a.c)((function(e){return e.anota}));return Object(f.jsx)("div",{style:{display:"contents"},children:e.map((function(e,t){return Object(f.jsx)(We,{note:e,indx:t,index:t},e.id)}))})})),De=s.a.Content,Re=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.anota}));return Object(f.jsxs)(De,{className:"anota__main",children:[Object(f.jsx)(z.a,{gutter:[16,24],children:Object(f.jsx)(Ae,{axis:"xy",pressDelay:205,onSortEnd:function(n){var c=n.oldIndex,o=n.newIndex;e(ue(b()(t,c,o)))},useWindowAsScrollContainer:!0})}),Object(f.jsx)(m.a,{type:"primary",shape:"circle",icon:Object(f.jsx)(ye.a,{}),size:"large",className:"anota__btn-add-note",onClick:function(){return e(xe(!0))}})]})},Me=s.a.Footer,Je=function(){return Object(f.jsx)(Me,{})},Le=(n(189),function(){return Object(f.jsxs)(s.a,{className:"anota",children:[Object(f.jsx)(Ce,{}),Object(f.jsx)(Re,{}),Object(f.jsx)(Je,{}),Object(f.jsx)(ge,{})]})}),Pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ze(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,211)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),i(e),a(e)}))},Ue=(n(190),Object(S.a)({reducer:{anota:be,modal:ve,todo:M,note:ne}}));Ue.subscribe((function(){var e={notes:{lists:Object(r.get)(Ue.getState(),"anota","")}};localStorage.setItem("vuex",JSON.stringify(e))}));var $e=function(e){try{var t=localStorage.getItem("vuex");if(t)return Object(r.get)(JSON.parse(t),"notes.lists",[])}catch(n){console.log(n)}}();$e&&Ue.dispatch(se($e)),i.a.render(Object(f.jsx)(a.a,{store:Ue,children:Object(f.jsx)(Le,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/anota",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/anota","/service-worker.js");Pe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ze(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ze(t,e)}))}}(),Be()}},[[191,1,2]]]);
//# sourceMappingURL=main.ebe9a87a.chunk.js.map