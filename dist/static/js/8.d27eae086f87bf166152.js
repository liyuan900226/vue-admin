webpackJsonp([8],{OZHG:function(t,e){},cgE9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"ChineseStage",props:["stageData"],data:function(){return{dialogVisibleAdd:!1,dialogVisibleEdit:!1,dialogVisibleAddStage:!1,dialogVisibleEditStage:!1,dialogVisibleStageContent:!1,addChaData:{book_id:"",name:""},editChaData:{chapter_id:"",name:""},addStageData:{book_id:"",chapter_id:"",section_type:"",hard_mode:"",name:""},editStageData:{section_id:"",book_id:"",chapter_id:"",name:"",section_type:"",hard_mode:""},editStageContentData:{},StageText:[]}},methods:{chaMoveUP:function(t){var e=this;this.baseFun().axios("post",this.baseUrl().ChaMove,{book_id:this.stageData.book_id,chapter_id:t.chapter_id,sequence:t.sequence,action:"up"},function(t){t.data.success?(e.$message({message:"移动成功！",type:"success"}),e.$emit("refresh","aaa")):e.$message({message:t.data.msg,type:"warning"})})},chaMoveDown:function(t){var e=this;this.baseFun().axios("post",this.baseUrl().ChaMove,{book_id:this.stageData.book_id,chapter_id:t.chapter_id,sequence:t.sequence,action:"down"},function(t){t.data.success?(e.$message({message:"移动成功！",type:"success"}),e.$emit("refresh","aaa")):e.$message({message:t.data.msg,type:"warning"})})},chatoggle:function(t){t.toggle=!t.toggle},chaDelete:function(t){var e=this;console.log(t.chapter_id);var a=this;this.$confirm("此操作将永久删除该目录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.baseFun().axios("post",e.baseUrl().deleteCha,{chapter_id:t.chapter_id},function(t){!0===t.data.success?(a.$message({message:"删除成功！",type:"success"}),a.$emit("refresh","aaa")):a.$message({message:t.data.msg,type:"warning"})})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},chaOn:function(t){var e=this;console.log(t);var a=this;2===t.status?this.baseFun().axios("post",this.baseUrl().statusCha,{status:1,chapter_id:t.chapter_id},function(t){!0===t.data.success?(a.$message({message:t.data.msg,type:"success"}),a.$emit("refresh","aaa")):a.$message({message:t.data.msg,type:"warning"})}):this.$confirm("此操作将禁用关卡, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.baseFun().axios("post",e.baseUrl().statusCha,{status:2,chapter_id:t.chapter_id},function(t){!0===t.data.success?(a.$message({message:t.data.msg,type:"success"}),a.$emit("refresh","aaa")):a.$message({message:t.data.msg,type:"warning"})})}).catch(function(){e.$message({type:"info",message:"已取消操作"})})},ChaAdd:function(){if(this.addChaData.book_id=this.stageData.book_id,console.log(this.addChaData),""!==this.addChaData.name){var t=this;this.baseFun().axios("post",this.baseUrl().chaAdd,this.addChaData,function(e){console.log(e),e.data.success?(t.$message({message:"添加成功！",type:"success"}),t.addChaData.name="",t.$emit("refresh","aaa"),t.dialogVisibleAdd=!1):t.$message({message:e.data.msg,type:"warning"})})}},editChaClick:function(t){console.log(t),this.dialogVisibleEdit=!0,this.editChaData.chapter_id=t.chapter_id,this.editChaData.name=t.name},editCha:function(){if(""!==this.editChaData.name){var t=this;this.baseFun().axios("post",this.baseUrl().editCha,this.editChaData,function(e){console.log(e),e.data.success?(t.$message({message:"修改成功！",type:"success"}),t.editChaData.name="",t.editChaData.chapter_id="",t.$emit("refresh","aaa"),t.dialogVisibleEdit=!1):t.$message({message:e.data.msg,type:"warning"})})}},stageMoveUp:function(t,e){console.log(t.sequence);var a=this;this.baseFun().axios("post",this.baseUrl().stageMove,{section_id:t.section_id,book_id:this.stageData.book_id,chapter_id:e.chapter_id,sequence:t.sequence,action:"up"},function(t){t.data.success?(a.$message({message:"移动成功！",type:"success"}),a.$emit("refresh","aaa")):a.$message({message:t.data.msg,type:"warning"})})},stageMoveDown:function(t,e){var a=this;this.baseFun().axios("post",this.baseUrl().stageMove,{section_id:t.section_id,book_id:this.stageData.book_id,chapter_id:e.chapter_id,sequence:t.sequence,action:"down"},function(t){t.data.success?(a.$message({message:"移动成功！",type:"success"}),a.$emit("refresh","aaa")):a.$message({message:t.data.msg,type:"warning"})})},stageContentClick:function(t,e){var a=this;console.log(t,e),this.baseFun().axiosGet(this.baseUrl().stageContentEdit+"?section_id="+t.section_id,function(t){a.editStageContentData=t.data.section_map,t.data.section_map.text.forEach(function(t,e){a.StageText.push({name:t})}),console.log(a.StageText)}),this.dialogVisibleStageContent=!0},editStage:function(){var t=this;this.baseFun().axios("post",this.baseUrl().stageEdit,this.editStageData,function(e){e.data.success?(t.$message({message:"修改成功！",type:"success"}),t.$emit("refresh","aaa"),t.dialogVisibleEditStage=!1):t.$message({message:e.data.msg,type:"warning"})})},stageEditClick:function(t,e){this.editStageData.section_id=t.section_id,this.editStageData.book_id=this.stageData.book_id,this.editStageData.hard_mode=t.hard_mode.toString(),this.editStageData.name=t.name,this.editStageData.chapter_id=e.chapter_id,this.editStageData.section_type=t.type,"知识点学习"===t.type?this.editStageData.section_type="1":this.editStageData.section_type="2",this.dialogVisibleEditStage=!0},addStageContent:function(){this.StageText.push({name:""})},deleteStageContent:function(t){this.StageText.splice(t,1)},updataStangeContent:function(){var t=this,e=[];this.StageText.forEach(function(t,a){e[a]=t.name}),this.editStageContentData.text=e,console.log(this.editStageContentData),this.baseFun().axios("post",this.baseUrl().stageContentEdit,this.editStageContentData,function(e){e.data.success?(t.$message({message:"更新成功！",type:"success"}),t.StageText=[],t.$emit("refresh","aaa"),t.dialogVisibleStageContent=!1):t.$message({message:e.data.msg,type:"warning"})})},stageDelete:function(t,e){var a=this;console.log(t),console.log(e);var s=this;this.$confirm("此操作将永久删除该目录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.baseFun().axios("post",a.baseUrl().stageDelete,{chapter_id:e.chapter_id,section_id:t.section_id},function(t){!0===t.data.success?(s.$message({message:"删除成功！",type:"success"}),s.$emit("refresh","aaa")):s.$message({message:t.data.msg,type:"warning"})})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},stageAddClick:function(t){this.dialogVisibleAddStage=!0,this.addStageData.chapter_id=t.chapter_id,console.log(t)},stageAdd:function(){if(""!==this.addStageData.name){var t=this;this.addStageData.book_id=this.stageData.book_id,this.baseFun().axios("post",this.baseUrl().stageAdd,this.addStageData,function(e){console.log(e),e.data.success?(t.$message({message:"添加成功！",type:"success"}),t.addStageData.name="",t.addStageData.section_type="",t.addStageData.hard_mode="",t.$emit("refresh","aaa"),t.dialogVisibleAddStage=!1):t.$message({message:e.data.msg,type:"warning"})})}},handleCloseAdd:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})},handleCloseEdit:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})},handleCloseAddStage:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})},handleCloseEditStage:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})},handleCloseStageContent:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})}},watch:{dialogVisibleStageContent:function(t,e){!1===t&&(console.log("qingli"),this.StageText.length=0)}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisibleAdd=!0}}},[t._v("添加一级目录")]),t._v(" "),a("div",t._l(t.stageData.chapter_list,function(e){return a("div",[a("div",{staticClass:"cha"},[a("span",[t._v("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")]),t._v(" "),a("p",[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"operate"},[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){t.stageAddClick(e)}}},[t._v("添加关卡")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){t.editChaClick(e)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){t.chaDelete(e)}}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){t.chaOn(e)}}},[t._v(t._s(2===e.status?"启用":"禁用"))]),t._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){t.chaMoveUP(e)}}},[t._v("上移")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){t.chaMoveDown(e)}}},[t._v("下移")]),t._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.chatoggle(e)}}},[t._v(t._s(e.toggle?"收起":"展开"))])],1)]),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.toggle,expression:"item.toggle"}]},t._l(e.section_list,function(s){return a("div",{staticClass:"cha cilidren_"},[a("span",[t._v("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")]),t._v(" "),a("p",[t._v(t._s(s.name))]),t._v(" "),a("div",{staticClass:"operate",staticStyle:{"padding-right":"170px"}},[1===s.hard_mode?a("span",[t._v("高")]):t._e(),t._v(" "),a("el-button",{attrs:{type:"text",disabled:1===e.status,size:"mini"},on:{click:function(a){t.stageContentClick(s,e)}}},[t._v(t._s(s.type)+"("+t._s(s.content_length)+")")]),t._v(" "),a("el-button",{attrs:{type:"text",disabled:1===e.status,size:"mini"},on:{click:function(a){t.stageEditClick(s,e)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"text",disabled:1===e.status,size:"mini"},on:{click:function(a){t.stageDelete(s,e)}}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"text",disabled:1===e.status,size:"mini"},on:{click:function(a){t.stageMoveUp(s,e)}}},[t._v("上移")]),t._v(" "),a("el-button",{attrs:{type:"text",disabled:1===e.status,size:"mini"},on:{click:function(a){t.stageMoveDown(s,e)}}},[t._v("下移")])],1)])}))])],1)})),t._v(" "),a("el-dialog",{attrs:{title:"添加目录",visible:t.dialogVisibleAdd,width:"35%","before-close":t.handleCloseAdd,"append-to-body":""},on:{"update:visible":function(e){t.dialogVisibleAdd=e}}},[a("el-form",{staticClass:"demo-ruleForm",attrs:{model:t.addChaData,"label-width":"50px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:t.addChaData.name,callback:function(e){t.$set(t.addChaData,"name",e)},expression:"addChaData.name"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.ChaAdd}},[t._v("添 加")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisibleAdd=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑目录",visible:t.dialogVisibleEdit,width:"35%","before-close":t.handleCloseEdit,"append-to-body":""},on:{"update:visible":function(e){t.dialogVisibleEdit=e}}},[a("el-form",{staticClass:"demo-ruleForm",attrs:{model:t.editChaData,"label-width":"50px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:t.editChaData.name,callback:function(e){t.$set(t.editChaData,"name",e)},expression:"editChaData.name"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.editCha}},[t._v("确 认")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisibleEdit=!1}}},[t._v("关 闭")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"添加关卡",visible:t.dialogVisibleAddStage,width:"35%","before-close":t.handleCloseAddStage,"append-to-body":""},on:{"update:visible":function(e){t.dialogVisibleAddStage=e}}},[a("el-form",{staticClass:"demo-ruleForm",attrs:{model:t.addStageData,"label-width":"50px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:t.addStageData.name,callback:function(e){t.$set(t.addStageData,"name",e)},expression:"addStageData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("el-radio-group",{model:{value:t.addStageData.section_type,callback:function(e){t.$set(t.addStageData,"section_type",e)},expression:"addStageData.section_type"}},[a("el-radio",{attrs:{label:"1"}},[t._v("知识点学习")]),t._v(" "),a("el-radio",{attrs:{label:"2"}},[t._v("同步习题")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"等级"}},[a("el-radio-group",{model:{value:t.addStageData.hard_mode,callback:function(e){t.$set(t.addStageData,"hard_mode",e)},expression:"addStageData.hard_mode"}},[a("el-radio",{attrs:{label:0}},[t._v("普通关卡")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("高级关卡")])],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.stageAdd}},[t._v("添 加")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisibleAddStage=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑关卡",visible:t.dialogVisibleEditStage,width:"35%","before-close":t.handleCloseEditStage,"append-to-body":""},on:{"update:visible":function(e){t.dialogVisibleEditStage=e}}},[a("el-form",{staticClass:"demo-ruleForm",attrs:{model:t.editStageData,"label-width":"50px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:t.editStageData.name,callback:function(e){t.$set(t.editStageData,"name",e)},expression:"editStageData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"等级"}},[a("el-radio-group",{model:{value:t.editStageData.hard_mode,callback:function(e){t.$set(t.editStageData,"hard_mode",e)},expression:"editStageData.hard_mode"}},[a("el-radio",{attrs:{label:"0"}},[t._v("普通关卡")]),t._v(" "),a("el-radio",{attrs:{label:"1"}},[t._v("高级关卡")])],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.editStage}},[t._v("确 认")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisibleEditStage=!1}}},[t._v("关 闭")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑关卡内容",visible:t.dialogVisibleStageContent,width:"30%","before-close":t.handleCloseStageContent,"append-to-body":""},on:{"update:visible":function(e){t.dialogVisibleStageContent=e}}},[t._l(t.StageText,function(e,s){return a("div",{staticStyle:{"margin-top":"3px"}},[a("el-input",{staticStyle:{width:"60%","margin-bottom":"3px"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"item.name"}}),t._v(" "),a("el-button",{on:{click:function(e){t.deleteStageContent(s)}}},[t._v("删除")])],1)}),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addStageContent}},[t._v("新 增")]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.updataStangeContent}},[t._v("提 交")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisibleStageContent=!1}}},[t._v("取 消")])],1)],2)],1)},staticRenderFns:[]};var o={name:"Chinese",components:{mathStage:a("VU/8")(s,i,!1,function(t){a("OZHG")},"data-v-7b7305e8",null).exports},data:function(){return{currentPage:1,pagesize:10,tableDataStatus:"",rules:{press_id:[{required:!0,message:"请选择版本",trigger:"change"}],version_id:[{required:!0,message:"请选择版本",trigger:"change"}],grade_id:[{required:!0,message:"请选择年级",trigger:"change"}],volume:[{required:!0,message:"请选择阶段",trigger:"change"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},queryData:{volume:"",status:"",press_id:"",version_id:"",grade_id:"",subject_id:2},book_press_version:[],tableData:[],addData:{subject_id:2,book_id:"",press_id:"",version_id:"",grade_id:"",volume:""},ADD:[],dialogVisible:!1,dialogVisibleEdit:!1,dialogVisibleStage:!1,stageTitle:"北师大--新版--一年级--上册",stageData:{},bookRequestData:{subject_id:2,book_id:""}}},mounted:function(){var t=this;this.getData(),this.baseFun().axios("post",this.baseUrl().book_press_version,{subject_id:2},function(e){t.book_press_version=e.data.table})},methods:{handleSizeChange:function(t){this.pagesize=t},handleCurrentChange:function(t){this.currentPage=t},refresh:function(){var t=this;this.baseFun().axios("post",this.baseUrl().bookDetail,this.bookRequestData,function(e){t.stageData=e.data.book_map})},freshData:function(){"all"===this.tableDataStatus&&(console.log("请求所有数据"),this.getData()),"query"===this.tableDataStatus&&(console.log("请求搜索数据"),this.bookQuery())},getData:function(){var t=this;this.baseFun().axiosGet(this.baseUrl().book_home+"?subject_id=2",function(e){t.tableData=e.data.table,t.tableDataStatus="all"})},bookQuery:function(){var t=this;this.baseFun().axios("post",this.baseUrl().book_query,this.queryData,function(e){console.log(e.data),e.data.success&&(t.tableData=e.data.table,t.tableDataStatus="query",t.currentPage=1)})},addBook:function(){var t=this;this.baseFun().axios("post",this.baseUrl().addBook,{book_list:this.ADD},function(e){e.data.success?(t.$message({message:"添加成功！",type:"success"}),t.dialogVisible=!1):t.$message({message:"添加失败"+e.data.msg,type:"warning"})})},addQueryBook:function(){console.log(this.addData);var t=this;this.baseFun().axios("post",this.baseUrl().addQueryData,this.addData,function(e){console.log(e.data),e.data.success&&(t.ADD=e.data.table)})},handleStatus:function(t,e){var a=this;console.log(e);var s,i=this;e.book_id;"启用"===e.status?(s=2,this.$confirm("此操作将禁用关卡, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.baseFun().axios("post",a.baseUrl().book_home_status,{subject_id:2,book_id:e.book_id,status:s},function(t){!0===t.data.success?(i.$message({message:"状态变更成功",type:"success"}),i.freshData()):i.$message({message:t.data.msg,type:"warning"})})}).catch(function(){a.$message({type:"info",message:"已取消操作"})})):(s=1,this.baseFun().axios("post",this.baseUrl().book_home_status,{subject_id:2,book_id:e.book_id,status:s},function(t){!0===t.data.success?(i.$message({message:"状态变更成功",type:"success"}),i.freshData()):i.$message({message:t.data.msg,type:"warning"})})),this.dialogVisibleEdit=!0},handleDelete:function(t,e){var a=this;console.log(e);var s=this;this.$confirm("此操作将永久删除该教材, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.baseFun().axios("post",a.baseUrl().book_delete,{subject_id:2,book_id:e.book_id},function(t){!0===t.data.success?(s.$message({message:"删除成功！",type:"success"}),1===s.tableData.slice((s.currentPage-1)*s.pagesize,s.currentPage*s.pagesize).length&&s.currentPage--,s.freshData()):s.$message({message:t.data.msg,type:"warning"})})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},handleStage:function(t,e){console.log(e),this.bookRequestData.book_id=e.book_id,this.stageTitle=e.press_name+"--"+e.version_name+"--"+e.grade+"--"+e.volume,this.stageData={},this.refresh(),this.dialogVisibleStage=!0},handleClose:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})},handleCloseEdit:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})},handleCloseStage:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.addQueryBook()})}},computed:{tableLength:function(){return this.tableData.length}},watch:{"addData.press_id":{handler:function(t,e){t!==e&&(this.addData.version_id="")},deep:!0},"queryData.press_id":{handler:function(t,e){t!==e&&(this.queryData.version_id="")},deep:!0},dialogVisible:{handler:function(t,e){!1===t&&(this.ADD=[],this.addData.press_id="",this.addData.version_id="",this.addData.grade_id="",this.addData.volume="",this.addData.status="")},deep:!0}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form",{ref:"queryData",attrs:{model:t.queryData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"教材："}},[a("el-select",{attrs:{placeholder:"请选择出版社"},model:{value:t.queryData.press_id,callback:function(e){t.$set(t.queryData,"press_id",e)},expression:"queryData.press_id"}},[a("el-option",{attrs:{label:"全部",value:"0"}}),t._v(" "),t._l(t.book_press_version,function(t,e){return a("el-option",{key:e,attrs:{label:t.press_name,value:t.press_id}})})],2),t._v(" "),a("el-select",{attrs:{placeholder:"请选择版本"},model:{value:t.queryData.version_id,callback:function(e){t.$set(t.queryData,"version_id",e)},expression:"queryData.version_id"}},t._l(t.book_press_version,function(e){return e.press_id==t.queryData.press_id?a("div",[a("el-option",{attrs:{label:"全部",value:"0"}}),t._v(" "),t._l(e.version_list,function(t,e){return a("el-option",{key:e,attrs:{label:t.version_name,value:t.version_id}})})],2):t._e()}))],1),t._v(" "),a("el-form-item",{attrs:{label:"年级："}},[a("el-select",{attrs:{placeholder:"请选择年级"},model:{value:t.queryData.grade_id,callback:function(e){t.$set(t.queryData,"grade_id",e)},expression:"queryData.grade_id"}},[a("el-option",{attrs:{label:"全部",value:"0"}}),t._v(" "),t._l(9,function(t,e){return a("el-option",{key:e,attrs:{label:t+"年级",value:t}})})],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"阶段："}},[a("el-radio-group",{model:{value:t.queryData.volume,callback:function(e){t.$set(t.queryData,"volume",e)},expression:"queryData.volume"}},[a("el-radio",{attrs:{label:"0"}},[t._v("全部")]),t._v(" "),a("el-radio",{attrs:{label:"1"}},[t._v("上册")]),t._v(" "),a("el-radio",{attrs:{label:"2"}},[t._v("下册")]),t._v(" "),a("el-radio",{attrs:{label:"3"}},[t._v("全册")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"状态："}},[a("el-radio-group",{model:{value:t.queryData.status,callback:function(e){t.$set(t.queryData,"status",e)},expression:"queryData.status"}},[a("el-radio",{attrs:{label:"0"}},[t._v("全部")]),t._v(" "),a("el-radio",{attrs:{label:"1"}},[t._v("启用")]),t._v(" "),a("el-radio",{attrs:{label:"2"}},[t._v("未启用")])],1)],1)],1)],1),t._v(" "),a("el-col",{attrs:{offset:8,span:2}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("添加教材")])],1)],1),t._v(" "),a("el-row",[a("el-col",[a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.bookQuery}},[t._v("搜索")]),t._v(" "),a("span",{staticStyle:{color:"#666666","margin-left":"20px","font-size":"15px"}},[t._v("共"+t._s(t.tableLength)+"条结果")])],1)],1),t._v(" "),a("div",{staticStyle:{"margin-top":"30px"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize),border:"","default-sort":{prop:"parent_name",order:"descending"}}},[a("el-table-column",{attrs:{prop:"press_name",label:"出版社",align:"center",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"version_name",label:"版本",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"book_name",label:"名称",align:"center",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"grade",label:"年级",align:"center",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"volume",label:"阶段",sortable:"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",sortable:"",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{sortable:"",prop:"add_date",label:"添加时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"250",prop:"status"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleStatus(e.$index,e.row)}}},[t._v(t._s("启用"===e.row.status?"禁用":"启用"))]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){t.handleStage(e.$index,e.row)}}},[t._v("关卡管理")])]}}])})],1),t._v(" "),a("div",{staticStyle:{position:"relative"}},[a("el-pagination",{staticClass:"page_center",attrs:{"current-page":t.currentPage,"page-sizes":[10,20,50,100],"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.length},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"添加教材",visible:t.dialogVisible,width:"40%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{ref:"addData",staticClass:"demo-ruleForm",attrs:{model:t.addData,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"教材：",prop:"version_id"}},[a("el-select",{attrs:{placeholder:"请选择出版社"},model:{value:t.addData.press_id,callback:function(e){t.$set(t.addData,"press_id",e)},expression:"addData.press_id"}},t._l(t.book_press_version,function(t,e){return a("el-option",{key:e,attrs:{label:t.press_name,value:t.press_id}})})),t._v(" "),a("el-select",{attrs:{placeholder:"请选择版本"},model:{value:t.addData.version_id,callback:function(e){t.$set(t.addData,"version_id",e)},expression:"addData.version_id"}},t._l(t.book_press_version,function(e){return e.press_id==t.addData.press_id?a("div",t._l(e.version_list,function(t,e){return a("el-option",{key:e,attrs:{label:t.version_name,value:t.version_id}})})):t._e()}))],1),t._v(" "),a("el-form-item",{attrs:{label:"年级：",prop:"grade_id"}},[a("el-select",{attrs:{placeholder:"请选择年级"},model:{value:t.addData.grade_id,callback:function(e){t.$set(t.addData,"grade_id",e)},expression:"addData.grade_id"}},t._l(9,function(t,e){return a("el-option",{key:e,attrs:{label:t+"年级",value:t}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"阶段：",prop:"volume"}},[a("el-radio-group",{model:{value:t.addData.volume,callback:function(e){t.$set(t.addData,"volume",e)},expression:"addData.volume"}},[a("el-radio",{attrs:{label:"0"}},[t._v("全部")]),t._v(" "),a("el-radio",{attrs:{label:"1"}},[t._v("上册")]),t._v(" "),a("el-radio",{attrs:{label:"2"}},[t._v("下册")]),t._v(" "),a("el-radio",{attrs:{label:"3"}},[t._v("全册")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"状态：",prop:"status"}},[a("el-radio-group",{model:{value:t.addData.status,callback:function(e){t.$set(t.addData,"status",e)},expression:"addData.status"}},[a("el-radio",{attrs:{label:"1"}},[t._v("启用")]),t._v(" "),a("el-radio",{attrs:{label:"2"}},[t._v("未启用")])],1)],1),t._v(" "),a("el-button",{on:{click:function(e){t.submitForm("addData")}}},[t._v("查询教材")]),t._v(" "),0===t.ADD.length?a("p",{staticStyle:{"text-align":"center"}},[t._v("暂无教材可添加！")]):t._e(),t._v(" "),t._l(t.ADD,function(e){return a("p",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.press_name)+"--"+t._s(e.version_name)+"--"+t._s(e.grade_id)+"年级--"+t._s(e.volume_val))])})],2),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{disabled:0===t.ADD.length},on:{click:t.addBook}},[t._v("添加教材")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("关 闭")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.stageTitle,visible:t.dialogVisibleStage,width:"65%","before-close":t.handleCloseStage},on:{"update:visible":function(e){t.dialogVisibleStage=e}}},[a("mathStage",{attrs:{stageData:t.stageData},on:{refresh:function(e){t.refresh()}}}),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisibleStage=!1}}},[t._v("关 闭")])],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(o,n,!1,function(t){a("tC3e")},"data-v-568846fa",null);e.default=l.exports},tC3e:function(t,e){}});