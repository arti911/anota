(this["webpackJsonpanota-react"]=this["webpackJsonpanota-react"]||[]).push([[0],{163:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(19),i=n.n(c),a=n(57),s=n(79),r=n(204),l=(n(150),n(47)),d=n(134),u=n(203),j=n(200),b=n(80),f=n.n(b),O=n(201),x=function(){return Object(a.b)()},h=a.c,p=n(6),v=O.a.Text,g=function(e){var t=h((function(e){return e.modal.title}));Object(o.useEffect)((function(){e.setTitleHandler(t)}),[]);var n={onChange:e.setTitleHandler};return Object(p.jsx)(v,{editable:n,children:e.title})},m=n(28),k=n(42),T=n(196),y=n(205),C=n(141),N=n(209),w=n(78),S=n(208),E=(n(163),Object(w.c)((function(){return Object(p.jsx)("div",{className:"drag-handle",children:Object(p.jsx)(S.a,{})})}))),_=n(41),I=Object(_.b)({name:"todo",initialState:{todos:[],isEdit:!1},reducers:{saveTodo:function(e,t){e.todos.push(t.payload)},checkTodo:function(e,t){var n=t.payload,o=n.index,c=n.todo;e.todos.splice(o,1,c)},removeTodo:function(e,t){e.todos.splice(t.payload,1)},toggleEdit:function(e,t){e.isEdit=t.payload},saveEditTodo:function(e,t){var n=e.todos.findIndex((function(e){return e.id===t.payload.id}));e.todos.splice(n,1,t.payload)},editTodos:function(e,t){e.todos=e.todos.concat(t.payload)},cleatTodos:function(e){e.todos.splice(0,e.todos.length)},sortTodos:function(e,t){e.todos=t.payload}}}),H=I.actions,V=H.saveTodo,F=H.checkTodo,W=H.removeTodo,A=H.toggleEdit,D=H.saveEditTodo,R=H.editTodos,M=H.cleatTodos,J=H.sortTodos,L=I.reducer,P="RESET",z="REMOVE",B="\u0414\u0430",U="\u041d\u0435\u0442",$=function(e){var t=e.todo,n=e.index,c=e.setTodoTitleHandler,i=e.setCurrentTodoHandler,a=x(),s=h((function(e){return e.todo.todos})),r=Object(o.useCallback)((function(){a(A(!0)),c(t.title),i(t)}),[a,t,c,i]),l=Object(o.useCallback)((function(){a(W(n)),d.b.success("".concat(t.title," \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d!"))}),[a,n,t]),u=[Object(p.jsx)(k.a,{shape:"circle",icon:Object(p.jsx)(C.a,{}),type:"primary",onClick:r}),Object(p.jsx)(T.a,{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c ".concat(t.title,"?"),okText:B,cancelText:U,onConfirm:l,children:Object(p.jsx)(k.a,{shape:"circle",icon:Object(p.jsx)(N.a,{}),danger:!0})})],b=Object(o.useCallback)((function(e){console.log("==index",n),a(F({index:n,todo:Object(m.a)(Object(m.a)({},s[n]),{},{isCheck:e.target.checked})}))}),[a,s,n]);return Object(p.jsxs)(j.b.Item,{className:"modal-list__item",actions:u,children:[Object(p.jsx)(E,{}),Object(p.jsx)(y.a,{checked:t.isCheck,onChange:b,children:t.title})]})},q=function(e){return e.children},G=Object(w.a)(q),K=Object(w.b)(q),Q=n(197),X=n(206),Y=n(68),Z={id:0,title:"",isCheck:!1},ee=(n(172),function(e){var t=x(),n=h((function(e){return e.todo.isEdit})),c=Object(o.useCallback)((function(t){var n=t.target;e.setTodoTitleHandler(n.value)}),[e]),i=Object(o.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=Object(m.a)(Object(m.a)({},Z),{},{id:Date.now()+n,title:e.trim()});t(V(o))}),[t]),a=Object(o.useCallback)((function(){var n=Object(m.a)(Object(m.a)({},e.currentTodo),{},{title:e.todoTitle.trim()});t(D(n))}),[t,e]),s=Object(o.useCallback)((function(){a(),t(A(!1)),e.setTodoTitleHandler("")}),[e,a,t]),r=Object(o.useCallback)((function(){e.todoTitle.trim().split(";").filter((function(e){return""!==e.trim()})).map((function(e,t){return i(e,t)})),e.setTodoTitleHandler("")}),[e,i]),l=Object(o.useCallback)((function(){e.setTodoTitleHandler(""),e.setCurrentTodoHandler(null),t(A(!1))}),[e,t]);return Object(p.jsxs)(Q.a,{className:"anota-row",children:[Object(p.jsx)(X.a,{placeholder:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0443\u043d\u043a\u0442",onChange:c,value:e.todoTitle}),Object(p.jsx)(k.a,{type:"primary",disabled:0===e.todoTitle.length,onClick:n?s:r,children:n?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(p.jsx)(k.a,{icon:Object(p.jsx)(Y.a,{}),type:"text",onClick:l})]})}),te=n(128),ne=n(198),oe=n(140),ce=n(139),ie=n(210),ae=Object(_.b)({name:"note",initialState:{isVisibleNote:!0},reducers:{setVisibleNote:function(e,t){e.isVisibleNote=void 0===t.payload||t.payload}}}),se=ae.actions.setVisibleNote,re=ae.reducer,le=O.a.Text,de=function(){var e=x(),t=h((function(e){return e.todo.todos})),n=h((function(e){return e.note.isVisibleNote})),c=Object(o.useState)(null),i=Object(l.a)(c,2),a=i[0],s=i[1],r=t.some((function(e){return e.isCheck})),d=t.filter((function(e){return e.isCheck})),u=Object(o.useCallback)((function(){e(se(!n))}),[e,n]),j=Object(o.useCallback)((function(n){e(F({index:n,todo:Object(m.a)(Object(m.a)({},t[n]),{},{isCheck:!1})}))}),[e,t]),b=Object(o.useCallback)((function(){var n=t.filter((function(e){return!e.isCheck}));e(J(n))}),[t,e]),f=Object(o.useCallback)((function(){var e,n=Object(te.a)(d);try{var o=function(){var n=e.value,o=t.findIndex((function(e){return e.id===n.id}));a===P?j(o):b()};for(n.s();!(e=n.n()).done;)o()}catch(c){n.e(c)}finally{n.f()}}),[j,b,d,t,a]),O={text:d.map((function(e){return e.title})).join(";")};return Object(p.jsxs)(Q.a,{gutter:[8,8],className:"actions",children:[Object(p.jsx)(ne.a,{md:12,xs:24,children:Object(p.jsx)(k.a,{type:"primary",block:!0,icon:n?Object(p.jsx)(oe.a,{}):Object(p.jsx)(ce.a,{}),onClick:u,children:n?"\u0421\u043a\u0440\u044b\u0442\u044c":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c"})}),Object(p.jsx)(ne.a,{md:12,xs:24,children:Object(p.jsx)(k.a,{disabled:!r,type:"default",block:!0,className:"actions__btn actions__btn--copy",children:Object(p.jsx)(le,{copyable:O})})}),Object(p.jsx)(ne.a,{md:12,xs:24,children:Object(p.jsx)(T.a,{title:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0438 \u0443 ".concat(d.map((function(e){return e.title})).join(", "),"?"),okText:B,cancelText:U,onConfirm:f,children:Object(p.jsx)(k.a,{disabled:!r,type:"primary",icon:Object(p.jsx)(ie.a,{}),block:!0,onClick:function(){return s(P)},children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"})})}),Object(p.jsx)(ne.a,{md:12,xs:24,children:Object(p.jsx)(T.a,{title:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c ".concat(d.map((function(e){return e.title})).join(", "),"?"),okText:B,cancelText:U,onConfirm:f,children:Object(p.jsx)(k.a,{danger:!0,disabled:!r,type:"primary",icon:Object(p.jsx)(N.a,{}),block:!0,onClick:function(){return s(z)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})})]})},ue=Object(_.b)({name:"app",initialState:{notes:[]},reducers:{getNotes:function(e,t){e.notes=t.payload},saveNote:function(e,t){e.notes.push(t.payload)},saveEditNote:function(e,t){e.notes.splice(t.payload.index,1,t.payload.note)},removeNote:function(e,t){var n=e.notes.findIndex((function(e){return e.id===t.payload}));e.notes.splice(n,1)},saveNotesAfterSorting:function(e,t){e.notes=t.payload}}}),je=ue.actions,be=je.getNotes,fe=je.saveNote,Oe=je.saveEditNote,xe=je.removeNote,he=je.saveNotesAfterSorting,pe=ue.reducer,ve=Object(_.b)({name:"modal",initialState:{visibleModal:!1,title:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430",currentNoteIndex:null},reducers:{onToggleShow:function(e,t){e.visibleModal=t.payload},setTitleEdit:function(e,t){e.title=t.payload},setCurrentNoteIndex:function(e,t){e.currentNoteIndex=t.payload}}}),ge=ve.actions,me=ge.onToggleShow,ke=ge.setTitleEdit,Te=ge.setCurrentNoteIndex,ye=ve.reducer,Ce=(n(173),function(){var e=Object(o.useRef)(null),t=x(),n=h((function(e){return e.modal.visibleModal})),c=h((function(e){return e.todo.todos})),a=h((function(e){return e.modal.currentNoteIndex})),s=h((function(e){return e.note.isVisibleNote})),r=Object(o.useState)(""),b=Object(l.a)(r,2),O=b[0],v=b[1],m=Object(o.useState)(null),k=Object(l.a)(m,2),T=k[0],y=k[1],C=Object(o.useState)(""),N=Object(l.a)(C,2),w=N[0],S=N[1],E=Object(o.useCallback)((function(e){var n={note:{id:Date.now(),title:O,todos:c,isVisibleNote:s},index:e};t(Oe(n)),t(Te(null))}),[t,O,c,s]),_=Object(o.useCallback)((function(){var e={id:Date.now(),title:O,todos:c,isVisibleNote:s};t(fe(e))}),[t,O,c,s]),I=Object(o.useCallback)((function(){c.length>0?(Number.isFinite(a)?E(a):_(),t(me(!1)),t(ke("\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430")),t(M()),S("")):d.b.warning("\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u0432 \u0437\u0430\u043c\u0435\u0442\u043a\u0443!")}),[t,_,E,c,a]);return Object(p.jsxs)(u.a,{title:Object(p.jsx)(g,{title:O,setTitleHandler:v}),style:{top:20},visible:n,cancelText:Object(p.jsx)(p.Fragment,{}),destroyOnClose:!0,onOk:I,onCancel:function(){t(me(!1)),t(M()),t(Te(null)),t(ke("\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043c\u0435\u0442\u043a\u0430")),S("")},children:[Object(p.jsx)(ee,{todoTitle:w,currentTodo:T,setTodoTitleHandler:S,setCurrentTodoHandler:y}),c.length>0&&Object(p.jsx)(G,{onSortEnd:function(e){var n=e.oldIndex,o=e.newIndex;return t(J(f()(c,n,o)))},useDragHandle:!0,helperClass:"modal-list",getContainer:function(){var t;return null===i.a||void 0===i.a||null===(t=i.a.findDOMNode(e.current))||void 0===t?void 0:t.parentElement},children:Object(p.jsx)(j.b,{dataSource:c,renderItem:function(t,n){return Object(p.jsx)(K,{index:n,ref:e,children:Object(p.jsx)($,{todo:t,index:n,setTodoTitleHandler:S,setCurrentTodoHandler:y})},t.id+n)}})}),Object(p.jsx)(de,{})]})}),Ne=n(202),we=(n(174),function(){return Object(p.jsxs)("div",{className:"logo",children:[Object(p.jsx)("span",{}),Object(p.jsx)("span",{}),Object(p.jsx)("span",{}),Object(p.jsx)("span",{})]})}),Se=(n(175),r.a.Header),Ee=function(){var e=h((function(e){return e.anota.notes}));return Object(p.jsx)(Se,{className:"anota-header",children:Object(p.jsxs)(Q.a,{justify:"space-between",align:"middle",children:[Object(p.jsx)(ne.a,{children:Object(p.jsx)(we,{})}),Object(p.jsx)(ne.a,{children:Object(p.jsx)(Ne.a,{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043c\u0435\u0442\u043e\u043a",value:e.length})})]})})},_e=n(211),Ie=n(199),He=n(207),Ve=n(4),Fe=n.n(Ve),We=O.a.Text,Ae=function(e){var t=Object(a.b)(),n=Object(o.useCallback)((function(){return t(xe(e.id))}),[e.id,t]),c=Object(o.useCallback)((function(){t(R(e.todos)),t(ke(e.title)),t(me(!0)),t(Te(e.index)),t(se(e.isVisibleNote))}),[t,e]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k.a,{type:"text",block:!0,onClick:c,children:Object(p.jsx)(We,{type:"success",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})}),Object(p.jsx)(T.a,{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c ".concat(e.title),okText:B,cancelText:U,onConfirm:n,children:Object(p.jsx)(k.a,{type:"text",block:!0,children:Object(p.jsx)(We,{type:"danger",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})})]})},De=(n(188),O.a.Title),Re={rows:1,tooltip:!0,expandable:!0,symbol:Object(p.jsx)("span",{})},Me=function(e){var t=Object(o.useState)(!e.isVisibleNote),n=Object(l.a)(t,2),c=n[0],i=n[1],a=Object(o.useState)(0),s=Object(l.a)(a,2),r=s[0],d=s[1],u=Object(o.useRef)(null),b=Fe()("note__card",{"note__card--flip":c}),f=Object(o.useCallback)((function(){i(!c)}),[c]);return Object(o.useEffect)((function(){var e;d(null===u||void 0===u||null===(e=u.current)||void 0===e?void 0:e.firstElementChild.offsetHeight)}),[]),Object(p.jsxs)("div",{className:b,style:{minHeight:"".concat(r,"px")},children:[Object(p.jsx)("div",{className:"note__wrapper note__wrapper--front",ref:u,children:Object(p.jsx)(j.b,{dataSource:e.todos,renderItem:function(e){return Object(p.jsx)(j.b.Item,{children:Object(p.jsx)(y.a,{checked:e.isCheck,children:e.title},e.id)})},header:Object(p.jsxs)(Q.a,{justify:"space-between",align:"middle",wrap:!1,children:[Object(p.jsx)(ne.a,{span:"21",children:Object(p.jsx)(De,{level:4,ellipsis:Re,style:{textAlign:"left"},children:e.title})}),Object(p.jsx)(ne.a,{span:"3",children:Object(p.jsx)(Ie.a,{placement:"bottomRight",trigger:"click",content:Object(p.jsx)(Ae,Object(m.a)(Object(m.a)({},e),{},{index:e.index})),zIndex:999,children:Object(p.jsx)(k.a,{type:"text",icon:Object(p.jsx)(He.a,{})})})})]}),footer:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{}),Object(p.jsxs)("div",{style:{textAlign:"center"},children:["Done ",e.todos.filter((function(e){return e.isCheck})).length," of\xa0 ",e.todos.length]}),Object(p.jsx)("div",{children:!e.isVisibleNote&&Object(p.jsx)(k.a,{type:"text",icon:Object(p.jsx)(ce.a,{}),onClick:f})})]})})}),Object(p.jsx)("div",{className:"note__wrapper note__wrapper--back",onClick:f,children:Object(p.jsx)(k.a,{type:"text",size:"large",icon:Object(p.jsx)(ce.a,{})})})]})},Je=(n(189),r.a.Content),Le=function(){var e=x(),t=h((function(e){return e.anota.notes}));return Object(p.jsxs)(Je,{className:"anota-main",children:[Object(p.jsx)(Q.a,{gutter:[16,24],children:Object(p.jsx)(G,{axis:"xy",pressDelay:205,helperClass:"anota-main__sort-list",onSortEnd:function(n){var o=n.oldIndex,c=n.newIndex;e(he(f()(t,o,c)))},useWindowAsScrollContainer:!0,children:Object(p.jsx)("div",{style:{display:"contents"},children:t.map((function(e,t){return Object(p.jsx)(K,{index:t,children:Object(p.jsx)(ne.a,{className:"note",xs:24,sm:24,md:12,lg:8,xl:6,children:Object(p.jsx)(Me,Object(m.a)({index:t},e))})},e.id)}))})})}),Object(p.jsx)(k.a,{type:"primary",shape:"circle",icon:Object(p.jsx)(_e.a,{}),size:"large",className:"anota__btn-add-note",onClick:function(){return e(me(!0))}})]})},Pe=r.a.Footer,ze=function(){return Object(p.jsx)(Pe,{})},Be=(n(190),function(){return Object(p.jsxs)(r.a,{className:"anota",children:[Object(p.jsx)(Ee,{}),Object(p.jsx)(Le,{}),Object(p.jsx)(ze,{}),Object(p.jsx)(Ce,{})]})}),Ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $e(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,212)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),i(e),a(e)}))},Ge=(n(191),Object(_.a)({reducer:{anota:pe,modal:ye,todo:L,note:re}}));Ge.subscribe((function(){var e={notes:{lists:Object(s.get)(Ge.getState(),"anota.notes",[])}};localStorage.setItem("vuex",JSON.stringify(e))}));var Ke=function(){try{var e=localStorage.getItem("vuex");if(e)return Object(s.get)(JSON.parse(e),"notes.lists",[])}catch(t){console.log(t)}}();Ke&&Ge.dispatch(be(Ke)),i.a.render(Object(p.jsx)(a.a,{store:Ge,children:Object(p.jsx)(Be,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/anota",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/anota","/service-worker.js");Ue?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$e(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):$e(t,e)}))}}(),qe()}},[[192,1,2]]]);
//# sourceMappingURL=main.9fe73c59.chunk.js.map