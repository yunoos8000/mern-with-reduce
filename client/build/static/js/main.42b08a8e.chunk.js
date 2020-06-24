(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,n){e.exports=n(49)},38:function(e,t,n){},39:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),o=n.n(r),i=(n(38),n(3)),l=n(4),s=n(6),u=n(5),m=(n(39),n(1)),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.wish,t=e._id,n=e.wish,a=this.props.removeWish;return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"collection-item darkness blue-grey darken-1 white-text "},n," ",c.a.createElement("i",{onClick:function(){return a(t)},className:"secondary-content material-icons white-text "},"delete")))}}]),n}(a.Component),p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.wishList,n=e.removeWish;return c.a.createElement("div",null,c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header teal lighten-0"},c.a.createElement("h4",null,"Wish List")),t.map((function(e){return c.a.createElement(h,{key:e._id,wish:e,removeWish:n})}))))}}]),n}(a.Component),d=n(17),f=n(28),b=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={text:"",wishes:[{_id:1,wish:"Lodding"}]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchWishes()}},{key:"render",value:function(){var e=this;return console.log(this.props),c.a.createElement("div",null,c.a.createElement("h1",null,"This is a Home Page"),c.a.createElement("form",{onSubmit:this.props.submitWishAction},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s3"}),c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("input",{name:"item",id:"item",type:"text",value:this.props.text,onChange:function(t){return e.props.changeText(t.target.value)}}),c.a.createElement("label",{className:"active"},"Wish")),c.a.createElement("div",{className:"col s3"})),c.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action"},"Submit",c.a.createElement("i",{className:"material-icons right"},"send"))),c.a.createElement(p,{wishList:this.props.wishes,removeWish:this.props.removeWishAction}))}}]),n}(a.Component),E=Object(d.b)((function(e){return{text:e.text,wishes:e.myWishes}}),(function(e){return{changeText:function(t){e(function(e){return{type:"CHANGE_TEXT",payload:e}}(t))},fetchWishes:function(){e((function(e){fetch("/gethome",{method:"get"}).then((function(e){return e.json()})).then((function(t){console.log(t),e({type:"GET_WISH",payload:t})}))}))},submitWishAction:function(t){e(function(e){return function(t){e.preventDefault();var n,a=new URLSearchParams,c=Object(f.a)(new FormData(e.target));try{for(c.s();!(n=c.n()).done;){var r=n.value;console.log(r),a.append(r[0],r[1])}}catch(o){c.e(o)}finally{c.f()}fetch("/sent",{method:"post",body:a}).then((function(e){return e.json()})).then((function(e){console.log(e),t({type:"ADD_WISH",payload:e})}))}}(t))},removeWishAction:function(t){e(function(e){return function(t){console.log("Deleting "+e),fetch("/delete/"+e,{method:"delete"}).then((function(e){return e.json()})).then((function(e){t({type:"REMOVE_WISH",payload:e})}))}}(t))}}}))(b),v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"This is About Components"))}}]),n}(a.Component),y=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"404 Error"))}}]),n}(a.Component),O=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("nav",{style:{background:"#6200ee"}},c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement("a",{href:"#!",className:"brand-logo"},"Logo"),c.a.createElement("ul",{className:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement("a",{href:"/"},"Home")),c.a.createElement("li",null,c.a.createElement("a",{href:"/about"},"About")))))}}]),n}(a.Component),j=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(O,null),c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/",component:E}),c.a.createElement(m.a,{path:"/about",component:v}),c.a.createElement(m.a,{component:y})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=n(31),w=n(12),W=n(30),_=n(32),N=n(9),k={text:"",myWishes:[{_id:1,wish:"Lodding"}]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_TEXT":return Object(N.a)(Object(N.a)({},e),{},{text:t.payload});case"GET_WISH":return Object(N.a)(Object(N.a)({},e),{},{myWishes:t.payload});case"ADD_WISH":return Object(N.a)(Object(N.a)({},e),{},{myWishes:[].concat(Object(_.a)(e.myWishes),[t.payload])});case"REMOVE_WISH":var n=e.myWishes.filter((function(e){return e._id!==t.payload._id}));return Object(N.a)(Object(N.a)({},e),{},{myWishes:n});default:return e}return"CHANGE_TEXT"===t.type?Object(N.a)(Object(N.a)({},e),{},{text:t.payload}):"GET_WISH"===t.type?(console.log("Reducer : "),console.log(t.payload),Object(N.a)(Object(N.a)({},e),{},{myWishes:t.payload})):e},x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||w.c,C=Object(w.d)(T,x(Object(w.a)(W.a)));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d.a,{store:C},c.a.createElement(g.a,null,c.a.createElement(j,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.42b08a8e.chunk.js.map