webpackJsonp([5],{"2/S2":function(t,e){},CX0p:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"ActivitysAdd",data:function(){return{dialogVisible:!1,areaList:{},formData:{title:"",user_type:"",province:"",city_list:[],begin_time:"",end_time:"",image_url:"",link_url:""},img:"",rules:{title:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:2,max:15,message:"长度不能超过15个字符",trigger:"blur"}],province:[{required:!0,message:"请至少选择一选项",trigger:"change"}],city_list:[{type:"array",required:!0,message:"请至少选择一选项",trigger:"change"}],user_type:[{required:!0,message:"请选择活动资源",trigger:"change"}]},value7:["",""],fileList3:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}},mounted:function(){this.getAreaList()},methods:{imgDelete:function(){this.formData.image_url=""},formDataUpload:function(){var t=this;return""===this.value7[0]||""===this.value7[1]?(this.$message({message:"请选择活动时间",type:"warning"}),!1):""===this.formData.image_url?(this.$message({message:"请添加一张图片",type:"warning"}),!1):(this.formData.begin_time=Date.parse(t.value7[0])/1e3,this.formData.end_time=Date.parse(t.value7[1])/1e3,void this.baseFun().axios("post",this.baseUrl().active_Add,this.formData,function(e){e.data.success?(t.$message({message:"添加成功！",type:"success"}),t.formData.image_url="",t.$emit("ActivitysAdd","aaa")):t.$message({message:"添加成功"+e.data.msg,type:"warning"})}))},beforeUpload:function(t){var e=this;new Promise(function(e,a){var i=window.URL||window.webkitURL,r=new Image;r.onload=function(){672==r.width&&260==r.height?e():a()},r.src=i.createObjectURL(t)}).then(function(){e.img=new FormData,e.img.set("image_file",t,t.name);var a=e;return a.baseFun().axios("post",e.baseUrl().imgUpload,e.img,function(t){a.formData.image_url=t.data.image_url}),t},function(){return e.$message.error("图片尺寸必须是672*260!"),Promise.reject()});return!1},getAreaList:function(){var t=this;this.baseFun().axiosGet(this.baseUrl().active_Area,function(e){t.areaList=e.data.area_list,t.formData.province=t.areaList[0].province})},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.formDataUpload()})},resetForm:function(t){this.$refs[t].resetFields()}},watch:{"formData.province":{handler:function(t,e){t!==e&&(this.formData.city_list=[])},deep:!0}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"formData",staticClass:"demo-ruleForm",attrs:{model:t.formData,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"身份",prop:"user_type"}},[a("el-radio-group",{model:{value:t.formData.user_type,callback:function(e){t.$set(t.formData,"user_type",e)},expression:"formData.user_type"}},[a("el-radio",{attrs:{label:1}},[t._v("学生")]),t._v(" "),a("el-radio",{attrs:{label:3}},[t._v("教师")])],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"475px"},attrs:{label:"标题",prop:"title","label-width":""}},[a("el-input",{model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),t._v(" "),a("div",[a("el-form-item",{attrs:{label:"范围",prop:"province"}},[a("el-radio-group",{model:{value:t.formData.province,callback:function(e){t.$set(t.formData,"province",e)},expression:"formData.province"}},t._l(t.areaList,function(e,i){return a("el-radio",{key:i,attrs:{label:e.province}},[t._v(t._s(e.name))])}))],1),t._v(" "),a("el-form-item",{attrs:{label:"",prop:"city_list"}},t._l(t.areaList,function(e,i){return a("el-checkbox-group",{key:i,model:{value:t.formData.city_list,callback:function(e){t.$set(t.formData,"city_list",e)},expression:"formData.city_list"}},[e.province===t.formData.province?a("div",t._l(e.city_list,function(e,i){return a("el-checkbox",{key:i,attrs:{label:e.city,name:"type"}},[t._v(t._s(e.name))])})):t._e()])}))],1),t._v(" "),a("div",[a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration",staticStyle:{"margin-left":"40px","margin-right":"7px"}},[t._v("时间")]),t._v(" "),a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.value7,callback:function(e){t.value7=e},expression:"value7"}})],1)]),t._v(" "),a("el-row",{staticStyle:{"margin-top":"30px"}},[a("el-col",{attrs:{span:1,offset:1}},[a("span",{staticStyle:{"margin-left":"-9px"}},[t._v("图片 ")])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",accept:".jpg,.jpeg,.bmp,.gif,.png",action:"https://jsonplaceholder.typicode.com/posts/",multiple:"","before-upload":t.beforeUpload}},[a("i",{staticClass:"el-icon-upload"}),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),a("em",[t._v("点击上传")])]),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("支持格式：.jpg  .jpeg .bmp .gif .png")]),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("图片尺寸：宽672，高260")])])],1),t._v(" "),a("el-col",{staticStyle:{position:"relative"},attrs:{span:10}},[a("img",{staticStyle:{width:"100%"},attrs:{src:t.formData.image_url,alt:""}}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.formData.image_url,expression:"formData.image_url"}],staticClass:"el-icon-error closeimg",on:{click:t.imgDelete}})])],1),t._v(" "),a("el-form-item",{staticStyle:{width:"475px","margin-top":"20px"},attrs:{label:"跳转链接","label-width":""}},[a("el-input",{model:{value:t.formData.link_url,callback:function(e){t.$set(t.formData,"link_url",e)},expression:"formData.link_url"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("formData")}}},[t._v("立即创建")]),t._v(" "),a("el-button",{on:{click:function(e){t.resetForm("formData")}}},[t._v("重置")])],1)],1)],1)},staticRenderFns:[]};var s={name:"ActivitysModify",props:["formData","value7"],data:function(){return{dialogVisible:!1,areaList:{},img:"",rules:{title:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:2,max:15,message:"长度不能超过15个字符",trigger:"blur"}],province:[{required:!0,message:"请至少选择一选项",trigger:"change"}],city_list:[{type:"array",required:!0,message:"请至少选择一选项",trigger:"change"}],user_type:[{required:!0,message:"请选择活动资源",trigger:"change"}]}}},mounted:function(){this.getAreaList()},methods:{imgDelete:function(){this.formData.image_url=""},ProvinceChange:function(){this.formData.city_list=[]},formDataUpload:function(){var t=this;return""===this.value7[0]||""===this.value7[1]?(this.$message({message:"请选择活动时间",type:"warning"}),!1):""===this.formData.image_url?(this.$message({message:"请添加一张图片",type:"warning"}),!1):(this.formData.begin_time=Date.parse(t.value7[0])/1e3,this.formData.end_time=Date.parse(t.value7[1])/1e3,console.log(this.value7),void this.baseFun().axios("post",this.baseUrl().active_Modify,this.formData,function(e){e.data.success?(t.$message({message:"修改成功！",type:"success"}),t.formData.image_url="",t.$emit("ActivitysModify","aaa")):t.$message({message:"修改失败"+e.data.msg,type:"warning"})}))},beforeUpload:function(t){var e=this;new Promise(function(e,a){var i=window.URL||window.webkitURL,r=new Image;r.onload=function(){672==r.width&&260==r.height?e():a()},r.src=i.createObjectURL(t)}).then(function(){e.img=new FormData,e.img.set("image_file",t,t.name);var a=e;return a.baseFun().axios("post",e.baseUrl().imgUpload,e.img,function(t){a.formData.image_url=t.data.image_url}),t},function(){return e.$message.error("图片尺寸必须是等于或大于672*260!"),Promise.reject()});return!1},getAreaList:function(){var t=this;this.baseFun().axiosGet(this.baseUrl().active_Area,function(e){t.areaList=e.data.area_list})},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.formDataUpload()})},resetForm:function(t){this.$refs[t].resetFields()}},computed:{},watch:{}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"formData",staticClass:"demo-ruleForm",attrs:{model:t.formData,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"身份",prop:"user_type"}},[a("el-radio-group",{model:{value:t.formData.user_type,callback:function(e){t.$set(t.formData,"user_type",e)},expression:"formData.user_type"}},[a("el-radio",{attrs:{label:1}},[t._v("学生")]),t._v(" "),a("el-radio",{attrs:{label:3}},[t._v("教师")])],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"475px"},attrs:{label:"标题",prop:"title","label-width":""}},[a("el-input",{model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),t._v(" "),a("div",[a("el-form-item",{attrs:{label:"范围",prop:"province"}},[a("el-radio-group",{model:{value:t.formData.province,callback:function(e){t.$set(t.formData,"province",e)},expression:"formData.province"}},t._l(t.areaList,function(e,i){return a("el-radio",{key:i,attrs:{label:e.province},on:{change:t.ProvinceChange}},[t._v(t._s(e.name))])}))],1),t._v(" "),a("el-form-item",{attrs:{label:"",prop:"city_list"}},t._l(t.areaList,function(e,i){return a("el-checkbox-group",{key:i,model:{value:t.formData.city_list,callback:function(e){t.$set(t.formData,"city_list",e)},expression:"formData.city_list"}},[e.province===t.formData.province?a("div",t._l(e.city_list,function(e,i){return a("el-checkbox",{key:i,attrs:{label:e.city,name:"type"}},[t._v(t._s(e.name))])})):t._e()])}))],1),t._v(" "),a("div",[a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration",staticStyle:{"margin-left":"40px","margin-right":"7px"}},[t._v("时间")]),t._v(" "),a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.value7,callback:function(e){t.value7=e},expression:"value7"}})],1)]),t._v(" "),a("el-row",{staticStyle:{"margin-top":"30px"}},[a("el-col",{attrs:{span:1,offset:1}},[a("span",{staticStyle:{"margin-left":"-9px"}},[t._v("图片 ")])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",accept:".jpg,.jpeg,.bmp,.gif,.png",action:"https://jsonplaceholder.typicode.com/posts/",multiple:"","before-upload":t.beforeUpload}},[a("i",{staticClass:"el-icon-upload"}),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),a("em",[t._v("点击上传")])]),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("支持格式：.jpg  .jpeg .bmp .gif .png")]),t._v(" "),a("div",{staticClass:"el-upload__text"},[t._v("图片尺寸：宽672，高260")])])],1),t._v(" "),a("el-col",{staticStyle:{position:"relative"},attrs:{span:10}},[a("img",{staticStyle:{width:"100%"},attrs:{src:t.formData.image_url,alt:""}}),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.formData.image_url,expression:"formData.image_url"}],staticClass:"el-icon-error closeimg",on:{click:t.imgDelete}})])],1),t._v(" "),a("el-form-item",{staticStyle:{width:"475px","margin-top":"20px"},attrs:{label:"跳转链接","label-width":""}},[a("el-input",{model:{value:t.formData.link_url,callback:function(e){t.$set(t.formData,"link_url",e)},expression:"formData.link_url"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("formData")}}},[t._v("立即修改")]),t._v(" "),a("el-button",{on:{click:function(e){t.resetForm("formData")}}},[t._v("重置")])],1)],1)],1)},staticRenderFns:[]};var o={name:"Activitys",components:{ActivitysAdd:a("VU/8")(i,r,!1,function(t){a("2/S2")},"data-v-11b6fdc7",null).exports,ActivitysModify:a("VU/8")(s,l,!1,function(t){a("hQFC")},"data-v-7fc8aa4f",null).exports},data:function(){return{currentPage:1,pagesize:10,tableDataStatus:"",form:{},tableData:[],dialogVisible:!1,dialogVisibleEdit:!1,queryData:{user_type:"",title:"",status:""},formData:{},value7:[]}},mounted:function(){this.getData()},methods:{handleSizeChange:function(t){this.pagesize=t},handleCurrentChange:function(t){this.currentPage=t},ActivitysAdd:function(){this.dialogVisible=!1,this.getData()},ActivitysModify:function(){this.dialogVisibleEdit=!1,this.freshData()},freshData:function(){"all"===this.tableDataStatus&&this.getData(),"query"===this.tableDataStatus&&this.getQueryData()},getQueryData:function(){var t=this;this.baseFun().axios("post",this.baseUrl().active_query,this.queryData,function(e){t.tableData=e.data.table,t.currentPage=1,t.tableDataStatus="query"})},getData:function(){var t=this;this.baseFun().axiosGet(this.baseUrl().active_home,function(e){t.tableData=e.data.table,t.tableDataStatus="all"})},handleEdit:function(t,e){var a=this;this.dialogVisibleEdit=!0,this.baseFun().axiosGet(this.baseUrl().active_Modify+"?config_id="+e.id,function(t){a.formData=t.data.config_map,a.value7=[new Date(1e3*parseInt(a.formData.begin_time)),new Date(1e3*parseInt(a.formData.end_time))]})},handleDelete:function(t,e){var a=this;console.log(e);var i=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.baseFun().axios("post",a.baseUrl().oprationDelete,{config_id:e.id},function(t){!0===t.data.success?(i.$message({message:"删除成功！",type:"success"}),i.freshData()):i.$message({message:"删除失败："+t.data.msg,type:"warning"})})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},handleClose:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})},handleCloseEdit:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})}},computed:{resultNum:function(){return this.tableData.length}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form",{ref:"queryData",attrs:{model:t.queryData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"活动名称"}},[a("el-input",{model:{value:t.queryData.title,callback:function(e){t.$set(t.queryData,"title",e)},expression:"queryData.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"身份"}},[a("el-radio-group",{model:{value:t.queryData.user_type,callback:function(e){t.$set(t.queryData,"user_type",e)},expression:"queryData.user_type"}},[a("el-radio",{attrs:{label:"0"}},[t._v("全部")]),t._v(" "),a("el-radio",{attrs:{label:"1"}},[t._v("学生")]),t._v(" "),a("el-radio",{attrs:{label:"3"}},[t._v("教师")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-radio-group",{model:{value:t.queryData.status,callback:function(e){t.$set(t.queryData,"status",e)},expression:"queryData.status"}},[a("el-radio",{attrs:{label:"0"}},[t._v("全部")]),t._v(" "),a("el-radio",{attrs:{label:"1"}},[t._v("未上线")]),t._v(" "),a("el-radio",{attrs:{label:"2"}},[t._v("进行中")]),t._v(" "),a("el-radio",{attrs:{label:"3"}},[t._v("已下线")]),t._v(" "),a("el-radio",{attrs:{label:"4"}},[t._v("已删除")])],1)],1)],1)],1),t._v(" "),a("el-col",{attrs:{offset:8,span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("添加活动")])],1)],1),t._v(" "),a("el-row",[a("el-col",[a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.getQueryData}},[t._v("搜索")]),t._v(" "),a("span",{staticStyle:{color:"#666666","margin-left":"20px","font-size":"15px"}},[t._v("共"+t._s(t.resultNum)+"条结果")])],1)],1),t._v(" "),a("div",{staticStyle:{"margin-top":"30px"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize),border:"","default-sort":{prop:"parent_name",order:"descending"}}},[a("el-table-column",{attrs:{prop:"user_type",label:"身份",align:"center",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"title",label:"标题"}}),t._v(" "),a("el-table-column",{attrs:{prop:"range",label:"范围",width:"500",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"begin_time",label:"上线时间",sortable:"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"end_time",label:"下线时间",sortable:"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"status",label:"状态",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{disabled:"已删除"===e.row.status,size:"mini"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger",disabled:"已删除"===e.row.status},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticStyle:{position:"relative"}},[a("el-pagination",{staticClass:"page_center",attrs:{"current-page":t.currentPage,"page-sizes":[10,20,50,100],"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.length},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"添加活动",visible:t.dialogVisible,width:"85%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("ActivitysAdd",{on:{ActivitysAdd:t.ActivitysAdd}}),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("关 闭")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"修改",visible:t.dialogVisibleEdit,width:"85%","before-close":t.handleCloseEdit},on:{"update:visible":function(e){t.dialogVisibleEdit=e}}},[a("ActivitysModify",{attrs:{value7:t.value7,formData:t.formData},on:{ActivitysModify:t.ActivitysModify}}),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisibleEdit=!1}}},[t._v("关 闭")])],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(o,n,!1,function(t){a("Rcch")},"data-v-7f1c6f59",null);e.default=c.exports},Rcch:function(t,e){},hQFC:function(t,e){}});