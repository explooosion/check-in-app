(this["webpackJsonpcheck-in-app"]=this["webpackJsonpcheck-in-app"]||[]).push([[0],{131:function(e,t,n){var r={"./":49,"./auth":78,"./auth.js":78,"./config":79,"./config.js":79,"./example":77,"./example.js":77,"./index":49,"./index.js":49,"./users":80,"./users.js":80};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id=131},159:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(3),c=n(31),o=n.n(c),i=n(22),u=n(19),s=n(21),l=n(16),d=n(20),b=n(39),f=n(43),p=n(48),h=n(44),j=n(46),m=n(17);function O(){var e=Object(d.a)(["\n  position: fixed;\n  bottom: 0.5rem;\n  width: 100%;\n  text-align: center;\n  color: ",";\n  ",";\n\n  b {\n    margin: 0 0.5rem;\n  }\n\n  a {\n    text-decoration: none;\n    color: ",";\n    ",";\n  }\n\n  &.checked {\n    color: ",";\n    opacity: 0.6;\n\n    a {\n      color: ",";\n    }\n  }\n"]);return O=function(){return e},e}function x(){var e=Object(d.a)(["\n  overflow: hidden;\n  margin-top: 18vh;\n  padding: 1rem 1.5rem 0;\n  width: 85%;\n  color: ",";\n  background-color: ",";\n  border-radius: 0.25rem;\n  z-index: 1;\n  ",";\n\n  &.checked {\n    transform: scale(0.5) rotate(10deg);\n    opacity: 0;\n  }\n\n  h2 {\n    margin: 0;\n  }\n\n  h4 {\n    margin: 0;\n    font-weight: normal;\n    color: ",";\n  }\n"]);return x=function(){return e},e}function v(){var e=Object(d.a)(["\n  position: relative;\n  background-color: ",";\n\n  &::before {\n    content: '';\n    position: fixed;\n    top: 0;\n    width: 100vw;\n    height: 60vh;\n    background-color: #006fe3;\n    border-radius: 0 0 60% 30%;\n    z-index: 0;\n    ",";\n  }\n\n  &.checked {\n    .title {\n      top: 35vh;\n\n      h4 {\n        opacity: 0.8;\n      }\n    }\n\n    &::before {\n      height: 150vh;\n      border-radius: 0 0 35% 20%;\n    }\n  }\n\n  .title {\n    position: absolute;\n    top: 2.5vh;\n    text-align: center;\n    ",";\n\n    h1 {\n      margin: 0;\n      font-size: 1.65rem;\n      font-weight: bold;\n      color: ",";\n      z-index: 1;\n    }\n\n    h3 {\n      margin: 0;\n      font-size: 1.35rem;\n      color: ",";\n      z-index: 1;\n      ",";\n    }\n  }\n"]);return v=function(){return e},e}var g=u.c.section(v(),(function(e){return e.theme.milk}),Object(h.a)("all 1s ease-out"),Object(h.a)("top 0.6s ease-in-out"),(function(e){return e.theme.white}),(function(e){return e.theme.white}),Object(h.a)("opacity 0.6s ease-in-out")),y=u.c.div(x(),(function(e){return e.theme.dark}),(function(e){return e.theme.white}),Object(h.a)("all 0.6s ease-out"),(function(e){return e.theme.gray})),w=u.c.div(O(),(function(e){return e.theme.gray}),Object(h.a)("all 1s ease-out"),(function(e){return e.theme.gray}),Object(h.a)("color 1s ease-out"),(function(e){return e.theme.white}),(function(e){return e.theme.white})),k={title:"109\u5b78\u5e74\u5ea6\u570b\u4e2d\u5c0f\u5b78\u6821\u9577",sub:"\u79d1\u6280\u9ad4\u9a57\u7814\u7fd2\u8b1b\u5ea7"},E={title:"\u5b8c\u6210\u7c3d\u5230",sub:"\u60a8\u53ef\u4ee5\u5b89\u5fc3\u95dc\u9589\u672c\u8996\u7a97"};var S=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),u=Object(b.a)(o,2),l=u[0],d=u[1],h=Object(a.useState)(k),O=Object(b.a)(h,2),x=O[0],v=O[1],S=Object(a.useState)(""),C=Object(b.a)(S,2),N=C[0],R=C[1],U=Object(a.useState)(!1),T=Object(b.a)(U,2),_=T[0],A=T[1],I=Object(i.b)();return Object(r.jsxs)(g,{className:"p-d-flex p-flex-column p-ai-center ".concat(_?"checked":""),children:[Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h1",{children:x.title}),Object(r.jsx)("h3",{children:x.sub})]}),Object(r.jsxs)(y,{className:"p-d-flex p-flex-column ".concat(_?"checked":""),children:[Object(r.jsx)("h2",{children:"\u7dda\u4e0a\u7c3d\u5230\u8868"}),Object(r.jsxs)("div",{className:"p-d-flex p-flex-column p-jc-between p-mt-3 p-pb-3",style:{height:"100%"},children:[Object(r.jsx)("h4",{children:"\u8acb\u65bc\u4e0b\u65b9\u8f38\u5165\u60a8\u7684\u5b78\u6821\u540d\u7a31\uff1a"}),Object(r.jsx)(p.InputText,{className:"p-inputtext-md p-mt-1 p-mb-3",value:l,onChange:function(e){return d(e.target.value)}}),Object(r.jsx)("h4",{children:"\u8acb\u65bc\u4e0b\u65b9\u8f38\u5165\u60a8\u7684\u59d3\u540d\uff1a"}),Object(r.jsx)(p.InputText,{className:"p-inputtext-md p-mt-1 p-mb-3",value:n,onChange:function(e){return c(e.target.value)}}),Object(r.jsx)(f.Button,{label:"\u9001\u51fa",icon:"pi ".concat(N),iconPos:"right",className:"p-button-md p-mt-1",onClick:function(){n&&l&&(I({type:m.a,payload:{name:n,school:l}}),R("pi-spin pi-spinner"),setTimeout((function(){return R("pi-check")}),800),setTimeout((function(){c(""),A(!0),v(E)}),1200))}})]})]}),Object(r.jsxs)(w,{className:"p-d-flex p-ai-center p-jc-center ".concat(_?"checked":""),children:[Object(r.jsx)(s.b,{to:"/login",className:"p-mr-4",children:"\u7dda\u4e0a\u7c3d\u5230\u7cfb\u7d71"}),Object(r.jsx)(s.b,{to:"/qrcode",children:Object(r.jsx)(j.a,{size:"2rem"})})]})]})},C=n(47);function N(){var e=Object(d.a)(["\n  position: fixed;\n  bottom: 2rem;\n  width: 100%;\n  text-align: center;\n  color: ",";\n  opacity: 0.6;\n\n  b {\n    margin: 0 0.5rem;\n  }\n\n  a {\n    text-decoration: none;\n    color: ",";\n  }\n"]);return N=function(){return e},e}function R(){var e=Object(d.a)(["\n  position: relative;\n  background-color: #006fe3;\n  height: 100vh;\n\n  .title {\n    position: absolute;\n    top: 5vh;\n    text-align: center;\n    z-index: 1;\n\n    h1 {\n      margin: 0;\n      font-size: 1.5rem;\n      font-weight: bold;\n      color: ",";\n    }\n\n    h2 {\n      margin: 0;\n      font-size: 1.25rem;\n      color: ",";\n    }\n  }\n\n  img {\n    margin-top: 25vh;\n    width: 70%;\n    max-width: 224px;\n    z-index: 1;\n  }\n"]);return R=function(){return e},e}var U=u.c.section(R(),(function(e){return e.theme.white}),(function(e){return e.theme.white})),T=u.c.div(N(),(function(e){return e.theme.white}),(function(e){return e.theme.white}));var _=function(){var e=Object(i.c)((function(e){return e.config})).config;return Object(r.jsxs)(U,{className:"p-d-flex p-flex-column p-ai-center",children:[Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h1",{children:"\u6383\u63cf\u7c3d\u5230"}),Object(r.jsx)("h2",{children:"QRCODE"})]}),Object(r.jsx)("img",{src:e.qrcode}),Object(r.jsxs)(T,{className:"p-d-flex p-ai-center p-jc-center",children:[Object(r.jsx)(s.b,{to:"/login",className:"p-mr-4",children:"\u7dda\u4e0a\u7c3d\u5230\u7cfb\u7d71"}),Object(r.jsx)(s.b,{to:"/",children:Object(r.jsx)(C.a,{size:"2rem"})})]})]})},A=n(25),I=n(38);function F(){var e=Object(d.a)(["\n  position: fixed;\n  bottom: 1rem;\n  width: 100%;\n  text-align: center;\n  color: ",";\n\n  b {\n    margin: 0 0.5rem;\n  }\n\n  a {\n    text-decoration: none;\n    color: ",";\n  }\n"]);return F=function(){return e},e}function z(){var e=Object(d.a)(["\n  overflow: hidden;\n  margin-top: 18vh;\n  padding: 1rem 1.5rem 0;\n  width: 85%;\n  color: ",";\n  background-color: ",";\n  border-radius: 0.25rem;\n  z-index: 1;\n"]);return z=function(){return e},e}function H(){var e=Object(d.a)(["\n  position: relative;\n\n  &::before {\n    content: '';\n    position: fixed;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: #006fe3;\n    z-index: 0;\n  }\n\n  .title {\n    position: absolute;\n    top: 2.5vh;\n    text-align: center;\n    z-index: 1;\n\n    h1 {\n      margin: 0;\n      font-size: 1.65rem;\n      font-weight: bold;\n      color: ",";\n    }\n\n    h2 {\n      margin: 0;\n      font-size: 1.35rem;\n      color: ",";\n    }\n  }\n\n  img {\n    margin-top: 25vh;\n    width: 70%;\n    z-index: 1;\n  }\n"]);return H=function(){return e},e}var M=u.c.section(H(),(function(e){return e.theme.white}),(function(e){return e.theme.white})),D=u.c.form(z(),(function(e){return e.theme.dark}),(function(e){return e.theme.white})),L=u.c.div(F(),(function(e){return e.theme.white}),(function(e){return e.theme.white}));var q=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})).auth,n=Object(a.useState)(""),c=Object(b.a)(n,2),o=c[0],u=c[1],d=Object(a.useState)(""),h=Object(b.a)(d,2),m=h[0],O=h[1];return t?Object(r.jsx)(l.a,{to:"/dashboard"}):I.a.getItem(A.d)?null:Object(r.jsxs)(M,{className:"p-d-flex p-flex-column p-ai-center",children:[Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h1",{children:"\u7dda\u4e0a\u7c3d\u5230\u7cfb\u7d71"}),Object(r.jsx)("h2",{children:"\u5f8c\u53f0\u767b\u5165"})]}),Object(r.jsxs)(D,{className:"p-d-flex p-flex-column",children:[Object(r.jsx)("h2",{className:"p-m-0 p-text-center",children:"\u767b\u5165"}),Object(r.jsxs)("div",{className:"p-d-flex p-flex-column p-jc-between p-mt-3 p-pb-3",style:{height:"100%"},children:[Object(r.jsxs)("span",{className:"p-input-icon-left p-mb-3",children:[Object(r.jsx)("i",{className:"pi pi-user"}),Object(r.jsx)(p.InputText,{className:"p-inputtext-md",name:"username",placeholder:"Username",autoComplete:"username",onChange:function(e){return u(e.target.value)},style:{width:"100%"}})]}),Object(r.jsxs)("span",{className:"p-input-icon-left p-mb-5",children:[Object(r.jsx)("i",{className:"pi pi-lock"}),Object(r.jsx)(p.InputText,{className:"p-inputtext-md",name:"password",placeholder:"Password",type:"password",autoComplete:"current-password",onChange:function(e){return O(e.target.value)},style:{width:"100%"}})]}),Object(r.jsx)(f.Button,{type:"button",label:"Submit",className:"p-button-md",onClick:function(){return e({type:A.a,payload:{username:o,password:m}})}})]})]}),Object(r.jsxs)(L,{className:"p-d-flex p-flex-column p-ai-center p-jc-center",children:[Object(r.jsx)("div",{className:"p-mb-2",children:"v1.6.8"}),Object(r.jsxs)("div",{children:[Object(r.jsx)(s.b,{to:"/",className:"p-mr-4",children:Object(r.jsx)(C.a,{size:"2rem"})}),Object(r.jsx)(s.b,{to:"/qrcode",children:Object(r.jsx)(j.a,{size:"2rem"})})]})]})]})},G=n(9),P=n(87),B=n(50),J=n(61);function X(){var e=Object(d.a)(["\n  position: relative;\n\n  .title {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 70px;\n    background-color: #006fe3;\n\n    h1 {\n      margin: 0;\n      margin-left: 1rem;\n      font-size: 1.5rem;\n      font-weight: bold;\n      color: ",";\n    }\n\n    a {\n      position: absolute;\n      top: 1.25rem;\n      text-decoration: none;\n      color: ",";\n\n      &.link-home {\n        right: 2.5rem;\n      }\n\n      &.link-qrcode {\n        right: 1.5rem;\n      }\n    }\n  }\n"]);return X=function(){return e},e}var K=u.c.section(X(),(function(e){return e.theme.white}),(function(e){return e.theme.white}));var V=[{key:"check-in",path:"/",exact:!0,component:S,title:""},{key:"qrcode",path:"/qrcode",exact:!0,component:_,title:""},{key:"login",path:"/login",exact:!0,component:q,title:""},{key:"dashboard",path:"/dashboard",exact:!0,component:function(){var e=Object(a.useRef)(null),t=Object(i.b)(),n=Object(i.c)((function(e){return e.auth})).auth,c=Object(i.c)((function(e){return e.users.lists.map((function(e,t){return Object(G.a)(Object(G.a)({},e),{},{index:t,createAt:e.createAt?J.DateTime.fromMillis(e.createAt).toFormat("yyyy-MM-dd HH:mm:ss"):null,updateAt:e.updateAt?J.DateTime.fromMillis(e.updateAt).toFormat("yyyy-MM-dd HH:mm:ss"):null})}))}));if(!n)return Object(r.jsx)(l.a,{to:"/login"});if(!n&&I.a.getItem(A.d))return null;Object(a.useEffect)((function(){t({type:m.f})}),[t]);var o=function(){return confirm("\u78ba\u5b9a\u8981\u79fb\u9664\u6240\u6709\u7d00\u9304?")?t({type:m.e}):null},u=function(){return e.current.exportCSV()};return Object(r.jsxs)(K,{className:"p-d-flex p-flex-column p-ai-center",children:[Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h1",{children:"\u7dda\u4e0a\u7c3d\u5230\u7cfb\u7d71"}),Object(r.jsx)(s.b,{to:"/",className:"link-home p-mr-6",children:Object(r.jsx)(C.a,{size:"2rem"})}),Object(r.jsx)(s.b,{to:"/qrcode",className:"link-qrcode",children:Object(r.jsx)(j.a,{size:"2rem"})})]}),Object(r.jsxs)(P.DataTable,{ref:e,className:"p-datatable-sm p-datatable-gridlines p-datatable-striped",value:c,children:[Object(r.jsx)(B.Column,{field:"index",header:"#",style:{width:"10%"}}),Object(r.jsx)(B.Column,{field:"school",header:"\u5b78\u6821",sortable:!0,style:{width:"30%"}}),Object(r.jsx)(B.Column,{field:"name",header:"\u59d3\u540d",sortable:!0,style:{width:"20%"}}),Object(r.jsx)(B.Column,{field:"createAt",header:"\u7c3d\u5230\u6642\u9593",style:{width:"30%"},sortable:!0})]}),c.length>0?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(f.Button,{type:"button",label:"\u4e0b\u8f09\u7c3d\u5230\u8cc7\u6599",className:"p-button-success p-button-lg p-mt-4",style:{width:"80%"},onClick:u}),Object(r.jsx)(f.Button,{type:"button",label:"\u6e05\u9664\u6240\u6709\u8cc7\u6599",className:"p-button-danger p-button-lg p-mt-4 p-mb-6",style:{width:"80%"},onClick:o})]}):null]})},title:""}];function W(){var e=Object(d.a)([""]);return W=function(){return e},e}var Q=u.c.main(W());var Z=function(){return Object(r.jsx)(Q,{children:Object(r.jsx)(l.d,{children:Object(r.jsx)(r.Fragment,{children:V.map((function(e){return function(e){var t=e.key,n=e.path,a=e.exact,c=e.component;return Object(r.jsx)(l.b,{exact:a,path:n,component:c},t)}(e)}))})})})},Y=n(41);var $=function(){var e=Object(i.b)(),t=I.a.getItem(A.d);return Object(a.useEffect)((function(){e({type:Y.a}),t&&e({type:A.a,payload:t})}),[e]),Object(r.jsx)(s.a,{children:Object(r.jsx)(l.d,{children:Object(r.jsx)(l.b,{path:"/",component:Z})})})},ee=n(34),te=n(91),ne=n(88),re=Object(ee.combineReducers)({users:m.l,config:Y.d,auth:A.e}),ae=n(49),ce=Object(te.a)(),oe=Object(ee.createStore)(re,Object(ne.composeWithDevTools)(Object(ee.applyMiddleware)(ce)));ce.run(ae.default);n(154),n(155),n(156),n(157);var ie=n(90);function ue(){var e=Object(d.a)(["\n\n  *,\n  ::after,\n  ::before {\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: ",";\n    color: ",";\n    background-color: ",";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]);return ue=function(){return e},e}n.n(ie).a.ripple=!0;var se=Object(u.b)(ue(),(function(e){return e.theme.globalFont}),(function(e){return e.theme.black}),(function(e){return e.theme.white})),le=Object(G.a)(Object(G.a)(Object(G.a)({},{white:"#fff",milk:"#fbfcff",gray:"#888",gray2:"#ccc",dark:"#17212F",dark2:"#1F2E3F",dark3:"#304562"}),{globalFont:"'Microsoft JhengHei', 'Segoe UI', Helvetica, Arial, Helvetica, sans-serif;"}),{screenXs:"480px",screenSm:"576px",screenMd:"768px",screenLg:"992px",screenXl:"1200px"});o.a.render(Object(r.jsxs)(u.a,{theme:le,children:[Object(r.jsx)(se,{}),Object(r.jsx)(i.a,{store:oe,children:Object(r.jsx)($,{})})]}),document.getElementById("root"))},17:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"h",(function(){return i})),n.d(t,"g",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"i",(function(){return b})),n.d(t,"k",(function(){return f})),n.d(t,"j",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"e",(function(){return j}));var r=n(9),a=n(33),c=n.n(a),o="FETCH_USERS",i="FETCH_USERS_SUCCESS",u="FETCH_USERS_ERROR",s="CREATE_USER",l="CREATE_USER_SUCCESS",d="FETCH_USER_ERROR",b="UPDATE_USER",f="UPDATE_USER_SUCCESS",p="UPDATE_USER_ERROR",h="CHECK_IN_USER",j="DELETE_ALL_USERS",m={lists:[],isFetching:!1,isCreating:!1,isUpdating:!1,error:null};t.l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(r.a)(Object(r.a)({},e),{},{isFetching:!0});case i:return Object(r.a)(Object(r.a)({},e),{},{lists:c.a.sortBy(t.payload,"createAt"),isFetching:!1});case u:return Object(r.a)(Object(r.a)({},e),{},{error:t.payload,isFetching:!1});case s:return Object(r.a)(Object(r.a)({},e),{},{isCreating:!0});case l:case d:return Object(r.a)(Object(r.a)({},e),{},{isCreating:!1});case b:return Object(r.a)(Object(r.a)({},e),{},{isUpdating:!0});case f:case p:return Object(r.a)(Object(r.a)({},e),{},{isUpdating:!1});default:return e}}},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return u}));var r=n(9),a=n(38),c="LOGIN_AUTH",o="LOGIN_AUTH_SUCCESS",i="LOGIN_AUTH_ERROR",u="STORAGE_AUTH",s={auth:null,loading:!1,error:null};t.e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case o:return a.a.setItem(u,t.payload),Object(r.a)(Object(r.a)(Object(r.a)({},e),t.payload),{},{loading:!1});case i:return a.a.removeItem(u),Object(r.a)(Object(r.a)({},e),{},{error:t.payload,loading:!1});default:return e}}},29:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n(35);n(132),n(134),n(136),n(160);r.a.initializeApp({apiKey:"AIzaSyDZth-n537yDeraNAmmF1M7TKqKrd2bWg0",authDomain:"myweb-d162a.firebaseapp.com",databaseURL:"https://myweb-d162a.firebaseio.com",projectId:"myweb-d162a",storageBucket:"myweb-d162a.appspot.com"}),r.a.auth().useDeviceLanguage();var a="check-in-app",c={USERS:"users",CONFIG:"config",AUTH:"auth"},o=(r.a.storage(),r.a.database().ref(a),r.a.database().ref("".concat(a,"/").concat(c.USERS))),i=function(e){return r.a.database().ref("".concat(a,"/").concat(c.USERS,"/").concat(e))},u=r.a.database().ref("".concat(a,"/").concat(c.CONFIG)),s=r.a.database().ref("".concat(a,"/").concat(c.AUTH)),l=r.a.database.ServerValue.TIMESTAMP},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(85),a=n(86),c=n(33),o=n.n(c),i=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"setItem",value:function(e,t){return localStorage.setItem(e,JSON.stringify(t))}},{key:"getItem",value:function(e){return JSON.parse(localStorage.getItem(e))}},{key:"removeItem",value:function(e){return localStorage.removeItem(e)}},{key:"clear",value:function(){return localStorage.clear()}},{key:"hasIn",value:function(t){return o.a.isObject(e.getItem(t))}}]),e}()},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o}));var r=n(9),a="FETCH_CONFIG",c="FETCH_CONFIG_SUCCESS",o="FETCH_CONFIG_ERROR",i={config:{},loading:!1,error:null};t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case c:return Object(r.a)(Object(r.a)({},e),{},{config:t.payload,loading:!1});case o:return Object(r.a)(Object(r.a)({},e),{},{error:t.payload,loading:!1});default:return e}}},49:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(10),a=n.n(r),c=n(11),o=a.a.mark(u),i=["users","config","auth"].map((function(e){return n(131)("./".concat(e)).default()}));function u(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)(i);case 2:case"end":return e.stop()}}),o)}},77:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var r=n(10),a=n.n(r),c=n(11),o=(n(9),"FETCH_EXAMPLE"),i="FETCH_EXAMPLE_SUCCESS",u="FETCH_EXAMPLE_ERROR",s=n(54),l=n(89),d=n.n(l).a.create();d.interceptors.request.use((function(e){return e})),d.interceptors.response.use((function(e){return e}),function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.response.status,e.next=401===e.t0?3:403===e.t0?4:5;break;case 3:case 4:case 5:return e.abrupt("break",6);case 6:return e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var b=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({type:o});case 2:return e.next=4,d.get("").then((function(e){return t({type:i,payload:e.data})})).catch((function(e){return t({type:u,payload:e})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=a.a.mark(h),p=a.a.mark(j);function h(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.b)(b);case 2:if(200!==(e=t.sent).status){t.next=8;break}return t.next=6,Object(c.d)({type:i,payload:e.data});case 6:t.next=10;break;case 8:return t.next=10,Object(c.d)({type:u,payload:e.data});case 10:case"end":return t.stop()}}),f)}function j(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.e)(o,h);case 2:case"end":return e.stop()}}),p)}},78:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(10),a=n.n(r),c=n(11),o=n(25),i=n(9),u=n(29),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{username:"",password:""};return u.b.once("value").then((function(e){return e.val()})).then((function(t){var n=t.username,r=t.password;return e.username===n&&e.password===r})).then((function(t){return{status:t,data:Object(i.a)(Object(i.a)({},e),{},{auth:t})}})).catch((function(e){return{status:!1,error:e}}))},l=a.a.mark(b),d=a.a.mark(f);function b(e){var t,n;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,Object(c.b)(s,t);case 3:if(!(n=r.sent).status){r.next=9;break}return r.next=7,Object(c.d)({type:o.c,payload:n.data});case 7:r.next=11;break;case 9:return r.next=11,Object(c.d)({type:o.b,error:n.data});case 11:case"end":return r.stop()}}),l)}function f(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.e)(o.a,b);case 2:case"end":return e.stop()}}),d)}},79:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n(10),a=n.n(r),c=n(11),o=n(41),i=n(29),u=function(){return i.c.once("value").then((function(e){return{status:!0,data:e.val()}})).catch((function(e){return{status:!1,error:e}}))},s=a.a.mark(d),l=a.a.mark(b);function d(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.b)(u);case 2:if(!(e=t.sent).status){t.next=8;break}return t.next=6,Object(c.d)({type:o.c,payload:e.data});case 6:t.next=10;break;case 8:return t.next=10,Object(c.d)({type:o.b,error:e.data});case 10:case"end":return t.stop()}}),s)}function b(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.e)(o.a,d);case 2:case"end":return e.stop()}}),l)}},80:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var r=n(10),a=n.n(r),c=n(11),o=n(17),i=n(33),u=n.n(i),s=n(162),l=n(29),d=function(){return l.e.orderByChild("createAt").once("value").then((function(e){return{status:!0,data:u.a.valuesIn(e.val())}})).catch((function(e){return{status:!1,error:e}}))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"Unknow",status:!0},t=Object(s.a)();return Object(l.d)(t).set(u.a.assign(e,{id:t,createAt:l.a})).then((function(){return{status:!0}})).catch((function(e){return{status:!1,error:e}}))},f=function(e){return u.a.isEmpty(e.id)?{status:!1,error:error}:Object(l.d)(u.a.get(e,"id")).update(u.a.chain(e).pick(["status","name","school"]).assign({updateAt:l.a}).value()).then((function(){return{status:!0}})).catch((function(e){return{status:!1,error:e}}))},p=function(e){var t=Object(s.a)();return Object(l.d)(t).set(u.a.chain(e).pick(["name","school"]).assign({id:t,status:!0,createAt:l.a}).value()).then((function(){return{status:!0}})).catch((function(e){return{status:!1,error:e}}))},h=function(){return l.e.remove().then((function(){return{status:!0}})).catch((function(e){return{status:!1,error:e}}))},j=a.a.mark(y),m=a.a.mark(w),O=a.a.mark(k),x=a.a.mark(E),v=a.a.mark(S),g=a.a.mark(C);function y(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(c.b)(d);case 3:if(!(e=t.sent).status){t.next=9;break}return t.next=7,Object(c.d)({type:o.h,payload:e.data});case 7:t.next=11;break;case 9:return t.next=11,Object(c.d)({type:o.g,payload:e.error});case 11:return t.next=13,Object(c.c)(3e3);case 13:t.next=0;break;case 15:case"end":return t.stop()}}),j)}function w(e){var t,n;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,Object(c.b)(b,t);case 3:if(!(n=r.sent).status){r.next=9;break}return r.next=7,Object(c.d)({type:o.d,payload:n.data});case 7:r.next=11;break;case 9:return r.next=11,Object(c.d)({type:o.c,payload:n.error});case 11:case"end":return r.stop()}}),m)}function k(e){var t,n;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,Object(c.b)(f,t);case 3:if(!(n=r.sent).status){r.next=9;break}return r.next=7,Object(c.d)({type:o.k,payload:n.data});case 7:r.next=11;break;case 9:return r.next=11,Object(c.d)({type:o.j,payload:n.error});case 11:case"end":return r.stop()}}),O)}function E(e){var t,n;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.next=3,Object(c.b)(p,t);case 3:if(!(n=r.sent).status){r.next=9;break}return r.next=7,Object(c.d)({type:o.d,payload:n.data});case 7:r.next=11;break;case 9:return r.next=11,Object(c.d)({type:o.c,payload:n.error});case 11:case"end":return r.stop()}}),x)}function S(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.b)(h);case 2:case"end":return e.stop()}}),v)}function C(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.e)(o.f,y);case 2:return e.next=4,Object(c.e)(o.b,w);case 4:return e.next=6,Object(c.e)(o.i,k);case 6:return e.next=8,Object(c.e)(o.a,E);case 8:return e.next=10,Object(c.e)(o.e,S);case 10:case"end":return e.stop()}}),g)}}},[[159,1,2]]]);