(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9643f6e2","chunk-71d49b05"],{"0773":function(t,n,e){"use strict";var r=e("d2b8");e.n(r).a},"28dc":function(t,n,e){"use strict";e.r(n);var r={props:["title"],inject:["pro"],data:function(){return{}},components:{},methods:{},created:function(){}},c=(e("0773"),e("2877")),o=Object(c.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("p",[t._v("我从祖先组件中拿到的provide的pro值:"+t._s(t.pro))]),e("p",[t._v("祖先组件传给我的值："+t._s(t.title))])])},[],!1,null,"28bd3260",null);n.default=o.exports},"28df":function(t,n,e){"use strict";var r=e("f1ac");e.n(r).a},"2c33":function(t,n,e){"use strict";e.r(n);var r={props:["info"],inject:["pro"],data:function(){return{children:"我是子组件B",newProvide:this.pro}},components:{"v-c":e("28dc").default},mounted:function(){},computed:{parentVal:function(){return this.$parent.parent}},methods:{},created:function(){}},c=(e("28df"),e("2877")),o=Object(c.a)(r,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"content"},[e("div",[e("p",[n._v("props")]),e("p",[n._v("我是子组件，接受到："+n._s(n.info))]),e("button",{on:{click:function(t){return n.$emit("changeProps","props的值被我改变了")}}},[n._v("我要改变父组件props的值")]),e("p",[n._v("$children")]),e("p",[n._v("$children值："+n._s(n.children))]),e("p",[n._v("$parent")]),e("p",[n._v("$parent从父组件中获取的值："+n._s(n.parentVal))]),e("p",[n._v("provide/ inject")]),e("p",[n._v("我从祖先组件中拿到的provide的某个字段值:"+n._s(n.newProvide))]),e("p",[n._v("祖先组件的所有往下传递属性为"+n._s(n.$attrs))]),e("v-c",n._b({},"v-c",n.$attrs,!1))],1)])},[],!1,null,"51395394",null);n.default=o.exports},d2b8:function(t,n,e){},f1ac:function(t,n,e){}}]);