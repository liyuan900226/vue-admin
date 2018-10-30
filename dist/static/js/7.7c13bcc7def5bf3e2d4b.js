webpackJsonp([7],{"0YRr":function(e,t){},"2bBq":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={name:"publishPush",data:function(){return{formData:{user_type:"",province:"",city_list:[],title:"",content:"",link:""},areaList:{},rules:{title:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:2,max:15,message:"长度不能超过15个字符",trigger:"blur"}],province:[{required:!0,message:"请至少选择一选项",trigger:"change"}],city_list:[{type:"array",required:!0,message:"请至少选择一选项",trigger:"change"}],user_type:[{required:!0,message:"请选择活动资源",trigger:"change"}]},value1:""}},mounted:function(){this.getAreaList()},methods:{getAreaList:function(){var e=this;this.baseFun().axiosGet(this.baseUrl().active_Area,function(t){e.areaList=t.data.area_list})},submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1})},resetForm:function(e){this.$refs[e].resetFields()}},watch:{"formData.province":{handler:function(e,t){e!==t&&(this.formData.city_list=[])},deep:!0}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"formData",staticClass:"demo-ruleForm",attrs:{model:e.formData,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"身份",prop:"user_type"}},[a("el-radio-group",{model:{value:e.formData.user_type,callback:function(t){e.$set(e.formData,"user_type",t)},expression:"formData.user_type"}},[a("el-radio",{attrs:{label:1}},[e._v("学生")]),e._v(" "),a("el-radio",{attrs:{label:3}},[e._v("教师")])],1)],1),e._v(" "),a("el-form-item",{staticStyle:{width:"475px"},attrs:{label:"标题",prop:"title","label-width":""}},[a("el-input",{model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}})],1),e._v(" "),a("div",[a("el-form-item",{attrs:{label:"范围",prop:"province"}},[a("el-radio-group",{model:{value:e.formData.province,callback:function(t){e.$set(e.formData,"province",t)},expression:"formData.province"}},e._l(e.areaList,function(t,l){return a("el-radio",{key:l,attrs:{label:t.province}},[e._v(e._s(t.name))])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"",prop:"city_list"}},e._l(e.areaList,function(t,l){return a("el-checkbox-group",{key:l,model:{value:e.formData.city_list,callback:function(t){e.$set(e.formData,"city_list",t)},expression:"formData.city_list"}},[t.province===e.formData.province?a("div",e._l(t.city_list,function(t,l){return a("el-checkbox",{key:l,attrs:{label:t.city,name:"type"}},[e._v(e._s(t.name))])})):e._e()])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"时间",prop:"time"}},[a("el-radio-group",{model:{value:e.formData.time,callback:function(t){e.$set(e.formData,"time",t)},expression:"formData.time"}},[a("el-radio",{attrs:{label:1}},[e._v("立即推送")]),e._v(" "),a("el-radio",{attrs:{label:3}},[e._v("定时推送")])],1),e._v(" "),a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"内容",prop:"content"}},[a("el-input",{attrs:{rows:"5",type:"textarea"},model:{value:e.formData.content,callback:function(t){e.$set(e.formData,"content",t)},expression:"formData.content"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"时间",prop:"link"}},[a("el-radio-group",{model:{value:e.formData.link,callback:function(t){e.$set(e.formData,"link",t)},expression:"formData.link"}},[a("el-radio",{attrs:{label:1}},[e._v("首页")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("任务")]),e._v(" "),a("el-radio",{attrs:{label:3}},[e._v("活动")]),e._v(" "),a("el-radio",{attrs:{label:4}},[e._v("语文闯关")]),e._v(" "),a("el-radio",{attrs:{label:5}},[e._v("数学闯关")]),e._v(" "),a("el-radio",{attrs:{label:6}},[e._v("英语闯关")]),e._v(" "),a("el-radio",{attrs:{label:7}},[e._v("作业")]),e._v(" "),a("el-radio",{attrs:{label:8}},[e._v("家校沟通")])],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("formData")}}},[e._v("立即创建")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("formData")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var o={name:"personPush",components:{publishPush:a("VU/8")(l,r,!1,function(e){a("0YRr")},"data-v-efb681a8",null).exports},data:function(){return{queryData:{user_type:""},dialogVisible:!1,addData:{},tableData:[{},{}]}},methods:{handleClose:function(e){this.$confirm("确认关闭？").then(function(t){e()}).catch(function(e){})},handleDelete:function(e,t){console.log(t)},handleEdit:function(e,t){console.log(t)}},computed:{tableLength:function(){return this.tableData.length}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form",{ref:"queryData",attrs:{model:e.queryData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"身份："}},[a("el-radio-group",{model:{value:e.queryData.user_type,callback:function(t){e.$set(e.queryData,"user_type",t)},expression:"queryData.user_type"}},[a("el-radio",{attrs:{label:"0"}},[e._v("全部")]),e._v(" "),a("el-radio",{attrs:{label:"1"}},[e._v("学生")]),e._v(" "),a("el-radio",{attrs:{label:"3"}},[e._v("教师")])],1)],1)],1)],1),e._v(" "),a("el-col",{attrs:{offset:8,span:2}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("发布推送")])],1)],1),e._v(" "),a("el-row",[a("el-col",[a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){}}},[e._v("搜索")]),e._v(" "),a("span",{staticStyle:{color:"#666666","margin-left":"20px","font-size":"15px"}},[e._v("共"+e._s(e.tableLength)+"条结果")])],1)],1),e._v(" "),a("div",{staticStyle:{"margin-top":"30px"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","default-sort":{prop:"parent_name",order:"descending"}}},[a("el-table-column",{attrs:{prop:"user_type",label:"身份",align:"center",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"title",label:"推送时间",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"range",label:"标题",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"begin_time",label:"内容",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"end_time",label:"范围",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"status",label:"模块",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"status",label:"数量",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"status",label:"状态",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"添加教材",visible:e.dialogVisible,width:"75%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("publishPush"),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("关 闭")])],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(o,i,!1,function(e){a("sDhi")},"data-v-57cd0c29",null);t.default=n.exports},sDhi:function(e,t){}});