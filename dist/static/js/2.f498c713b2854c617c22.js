webpackJsonp([2],{JQ9e:function(t,e){},a52u:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"formData",staticClass:"demo-ruleForm",attrs:{model:t.formData,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"身份",prop:"user_type"}},[a("el-radio-group",{model:{value:t.formData.user_type,callback:function(e){t.$set(t.formData,"user_type",e)},expression:"formData.user_type"}},[a("el-radio",{attrs:{label:1}},[t._v("学生")]),t._v(" "),a("el-radio",{attrs:{label:3}},[t._v("教师")])],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"475px"},attrs:{label:"标题",prop:"title","label-width":""}},[a("el-input",{model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),t._v(" "),a("div",[a("el-form-item",{attrs:{label:"范围",prop:"province"}},[a("el-radio-group",{model:{value:t.formData.province,callback:function(e){t.$set(t.formData,"province",e)},expression:"formData.province"}},t._l(t.areaList,function(e,l){return a("el-radio",{key:l,attrs:{label:e.province}},[t._v(t._s(e.name))])}))],1),t._v(" "),a("el-form-item",{attrs:{label:"",prop:"city_list"}},t._l(t.areaList,function(e,l){return a("el-checkbox-group",{key:l,model:{value:t.formData.city_list,callback:function(e){t.$set(t.formData,"city_list",e)},expression:"formData.city_list"}},[e.province===t.formData.province?a("div",t._l(e.city_list,function(e,l){return a("el-checkbox",{key:l,attrs:{label:e.city,name:"type"}},[t._v(t._s(e.name))])})):t._e()])}))],1),t._v(" "),a("div",[a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration",staticStyle:{"margin-left":"40px","margin-right":"7px"}},[t._v("时间")]),t._v(" "),a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.value7,callback:function(e){t.value7=e},expression:"value7"}})],1)]),t._v(" "),a("el-row",{staticStyle:{"margin-top":"30px"}},[a("el-col",{attrs:{span:1,offset:1}},[a("span",{staticStyle:{"margin-left":"-9px"}},[t._v("图片 ")])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",accept:".jpg,.jpeg,.bmp,.gif,.png",action:"https://jsonplaceholder.typicode.com/posts/",multiple:"","before-upload":t.beforeUpload}},[a("i",{staticClass:"el-icon-upload"}),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),a("em",[t._v("点击上传")])]),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("支持格式：.jpg  .jpeg .bmp .gif .png")]),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("图片尺寸：宽672，高260")])])],1),t._v(" "),a("el-col",{staticStyle:{position:"relative"},attrs:{span:10}},[a("img",{staticStyle:{width:"100%"},attrs:{src:t.formData.image_url,alt:""}}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.formData.image_url,expression:"formData.image_url"}],staticClass:"el-icon-error closeimg",on:{click:t.imgDelete}})])],1),t._v(" "),a("el-form-item",{staticStyle:{width:"475px","margin-top":"20px"},attrs:{label:"跳转链接","label-width":""}},[a("el-input",{model:{value:t.formData.link_url,callback:function(e){t.$set(t.formData,"link_url",e)},expression:"formData.link_url"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("formData")}}},[t._v("立即创建")]),t._v(" "),a("el-button",{on:{click:function(e){t.resetForm("formData")}}},[t._v("重置")])],1)],1)],1)},staticRenderFns:[]};var i={name:"dashboard",components:{productDetail:a("VU/8")({name:"productDetail"},l,!1,function(t){a("bU/5")},"data-v-e0cf667a",null).exports},data:()=>({dialogVisibleAdd:!1,tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}),methods:{Add(){this.dialogVisibleAdd=!0},handleEdit(t,e){console.log(t,e)},handleDelete(t,e){console.log(t,e),this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})}},computed:{}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("el-button",{attrs:{type:"primary"},on:{click:t.Add}},[t._v("添加")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",[a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisibleAdd,width:"70%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisibleAdd=e}}},[a("productDetail"),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisibleAdd=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisibleAdd=!1}}},[t._v("确 定")])],1)],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(i,o,!1,function(t){a("JQ9e")},"data-v-6618c0f1",null);e.default=r.exports},"bU/5":function(t,e){}});