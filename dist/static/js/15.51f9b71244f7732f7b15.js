webpackJsonp([15],{GObh:function(t,s){},a52u:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={name:"dashboard",data:function(){return{name:localStorage.getItem("ms_username"),todoList:[{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要写100行代码加几个bug吧",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!0},{title:"今天要写100行代码加几个bug吧",status:!0}]}},computed:{role:function(){return"admin"===this.name?"超级管理员":"普通用户"}}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-row",[a("el-col",[a("el-card",{staticClass:"mgb20",attrs:{shadow:"hover"}},[a("div",{staticClass:"user-info"},[a("img",{staticClass:"user-avator",attrs:{src:"static/img/img.jpg",alt:""}}),t._v(" "),a("div",{staticClass:"user-info-cont"},[a("div",{staticClass:"user-info-name"},[t._v(t._s(t.name))]),t._v(" "),a("div",[t._v(t._s(t.role))])])]),t._v(" "),a("div",{staticClass:"user-info-list"},[t._v("上次登录时间："),a("span",[t._v("2018-01-01")])]),t._v(" "),a("div",{staticClass:"user-info-list"},[t._v("上次登录地点："),a("span",[t._v("郑州")])])]),t._v(" "),a("el-card",{attrs:{shadow:"hover"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("语言详情")])]),t._v("\n                        Vue\n                        "),a("el-progress",{attrs:{percentage:57.2,color:"#42b983"}}),t._v("\n                        JavaScript\n                        "),a("el-progress",{attrs:{percentage:29.8,color:"#f1e05a"}}),t._v("\n                        CSS\n                        "),a("el-progress",{attrs:{percentage:11.9}}),t._v("\n                        HTML\n                        "),a("el-progress",{attrs:{percentage:1.1,color:"#f56c6c"}})],1)],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:16}},[a("el-row",{staticClass:"mgb20",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-1"},[a("i",{staticClass:"el-icon-view grid-con-icon"}),t._v(" "),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v("1234")]),t._v(" "),a("div",[t._v("用户访问量")])])])])],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-2"},[a("i",{staticClass:"el-icon-message grid-con-icon"}),t._v(" "),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v("321")]),t._v(" "),a("div",[t._v("系统消息")])])])])],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-3"},[a("i",{staticClass:"el-icon-goods grid-con-icon"}),t._v(" "),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v("5000")]),t._v(" "),a("div",[t._v("数量")])])])])],1)],1),t._v(" "),a("el-card",{attrs:{shadow:"hover","body-style":{height:"304px"}}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("待办事项")]),t._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("添加")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%","font-size":"14px"},attrs:{data:t.todoList,"show-header":!1,height:"304"}},[a("el-table-column",{attrs:{width:"40"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("el-checkbox",{model:{value:s.row.status,callback:function(a){t.$set(s.row,"status",a)},expression:"scope.row.status"}})]}}])}),t._v(" "),a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(s){return[a("div",{staticClass:"todo-item",class:{"todo-item-del":s.row.status}},[t._v(t._s(s.row.title))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"60"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("i",{staticClass:"el-icon-edit"}),t._v(" "),a("i",{staticClass:"el-icon-delete"})]}}])})],1)],1)],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(e,i,!1,function(t){a("GObh")},"data-v-676c741a",null);s.default=r.exports}});