webpackJsonp([1],{"/NEt":function(t,n){},"5eQ2":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("7+uW"),i=e("Dd8w"),a=e.n(i),o=e("R4Sj"),c={computed:a()({},Object(o.b)(["zjs"]))},u={render:function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("router-link",{attrs:{to:"/"}},[this._v("首页")]),this._v(" "),n("router-link",{attrs:{to:"/gwc"}},[this._v("购物车"+this._s(this.zjs))])],1)},staticRenderFns:[]};var s={name:"App",components:{mynav:e("VU/8")(c,u,!1,function(t){e("iMxF")},null,null).exports}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),this._v(" "),n("mynav")],1)},staticRenderFns:[]};var v=e("VU/8")(s,l,!1,function(t){e("T94L")},null,null).exports,_=e("/ocq"),h={computed:a()({},Object(o.d)(["zhi"])),methods:a()({},Object(o.c)(["jia"]),{aaa:function(){localStorage.aa="aa",window.open("http://localhost:8081/#/")}})},p={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("table",[e("tr",[e("th",{on:{click:t.aaa}},[t._v("名11")]),t._v(" "),e("th",[t._v("加一份")])]),t._v(" "),t._l(t.zhi,function(n,r){return e("tr",[e("td",[t._v(t._s(n.name))]),t._v(" "),e("td",[e("button",{on:{click:function(n){t.jia(r)}}},[t._v("加一份")])])])})],2)])},staticRenderFns:[]};var m=e("VU/8")(h,p,!1,function(t){e("5eQ2")},null,null).exports,f={computed:a()({},Object(o.d)(["zhi"]))},d={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("table",[t._m(0),t._v(" "),t._l(t.zhi,function(n){return e("tr",[e("td",[t._v(t._s(n.name))]),t._v(" "),e("td",[t._v(t._s(n.num))])])})],2)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("tr",[n("th",[this._v("名")]),this._v(" "),n("th",[this._v("数量")])])}]};var j=e("VU/8")(f,d,!1,function(t){e("/NEt")},null,null).exports;r.a.use(_.a);var b=new _.a({routes:[{path:"/",component:m},{path:"/gwc",component:j}]});r.a.use(o.a);var w=new o.a.Store({state:{zhi:[{name:"苹果",num:0},{name:"香蕉",num:0},{name:"橘子",num:0}]},getters:{zjs:function(t){var n=0;return t.zhi.map(function(t){n+=t.num}),n}},mutations:{jia:function(t,n){t.zhi[n].num++}}});r.a.config.productionTip=!1,new r.a({el:"#app",router:b,store:w,components:{App:v},template:"<App/>"})},T94L:function(t,n){},iMxF:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.d21456d59a0b15b8115c.js.map