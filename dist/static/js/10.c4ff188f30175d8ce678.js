webpackJsonp([10],{RklT:function(e,t){},VWFu:function(e,t){},iTdj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"ViewModule",props:["viewList"],data:function(){return{addData:{parent_abbr:"",code:"",name:"",pre_code:"",memo:""},dialogVisibleAdd:!1,dialogVisibleEdit:!1,editData:{parent_abbr:"",code_id:"",code:"",name:"",memo:"",pre_code:""}}},mounted:function(){},methods:{addDataUpload:function(){var e=this;this.addData.parent_abbr=this.viewList.parent_abbr,this.baseFun().axios("post",this.baseUrl().module_codeAdd,this.addData,function(t){t.data.success?(e.$message({message:"添加成功",type:"success"}),e.addData={parent_abbr:"",code:"",name:"",pre_code:"",memo:""},e.$emit("ViewModuleCross","aaa"),e.dialogVisibleAdd=!1):e.$message({message:"添加失败："+t.data.msg,type:"warning"})})},handleEdit:function(e,t){this.dialogVisibleEdit=!0,this.editData.code_id=t.id,this.editData.name=t.meaning,this.editData.code=t.code,this.editData.memo=t.memo,this.editData.parent_abbr=this.viewList.parent_abbr},handleDelete:function(e,t){var a=this,i=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.baseFun().axios("post",a.baseUrl().module_codeDelete,{code_id:t.id},function(e){e.data.success?(i.$message({message:"删除成功",type:"success"}),i.$emit("ViewModuleCross","aaa"),i.dialogVisible=!1):i.$message({message:"删除失败："+e.data.msg,type:"warning"})})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},editUpdate:function(){var e=this;this.baseFun().axios("post",this.baseUrl().module_codeEdit,this.editData,function(t){console.log(t),t.data.success?(e.$message({message:"修改成功",type:"success"}),e.$emit("ViewModuleCross","aaa"),e.dialogVisibleEdit=!1):e.$message({message:"修改失败："+t.data.msg,type:"warning"})})},addDialog:function(){this.dialogVisibleAdd=!0},handleCloseAdd:function(e){this.$confirm("确认关闭？").then(function(t){e()}).catch(function(e){})},handleCloseEdit:function(e){this.$confirm("确认关闭？").then(function(t){e()}).catch(function(e){})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{attrs:{type:"primary"},on:{click:e.addDialog}},[e._v("添加模块")]),e._v(" "),a("el-dialog",{attrs:{title:"添加模块",visible:e.dialogVisibleAdd,width:"45%","before-close":e.handleCloseAdd,"append-to-body":""},on:{"update:visible":function(t){e.dialogVisibleAdd=t}}},[a("el-form",{ref:"",staticClass:"demo-ruleForm",attrs:{model:e.addData,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"模块名称",prop:"name"}},[a("el-input",{model:{value:e.addData.name,callback:function(t){e.$set(e.addData,"name",t)},expression:"addData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"code",prop:"code"}},[a("el-input",{model:{value:e.addData.code,callback:function(t){e.$set(e.addData,"code",t)},expression:"addData.code"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"模块备注",prop:"memo"}},[a("el-input",{model:{value:e.addData.memo,callback:function(t){e.$set(e.addData,"memo",t)},expression:"addData.memo"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisibleAdd=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addDataUpload}},[e._v("确 定")])],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.viewList.table,border:""}},[a("el-table-column",{attrs:{prop:"meaning",label:"模块名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"code"}}),e._v(" "),a("el-table-column",{attrs:{prop:"memo",label:"模块备注"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-dialog",{attrs:{title:"修改",visible:e.dialogVisibleEdit,width:"45%","before-close":e.handleCloseEdit,"append-to-body":""},on:{"update:visible":function(t){e.dialogVisibleEdit=t}}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.editData,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"模块名称",prop:"name"}},[a("el-input",{model:{value:e.editData.name,callback:function(t){e.$set(e.editData,"name",t)},expression:"editData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"模块code",prop:"name"}},[a("el-input",{model:{value:e.editData.code,callback:function(t){e.$set(e.editData,"code",t)},expression:"editData.code"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"模块备注",prop:"name"}},[a("el-input",{model:{value:e.editData.memo,callback:function(t){e.$set(e.editData,"memo",t)},expression:"editData.memo"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisibleEdit=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.editUpdate}},[e._v("修 改")])],1)],1)],1)},staticRenderFns:[]};var s={name:"module",components:{ViewModule:a("VU/8")(i,o,!1,function(e){a("RklT")},"data-v-4f5be88e",null).exports},data:function(){return{currentPage:1,pagesize:10,editData:"",tableData:[],dialogVisible:!1,dialogVisibleAdd:!1,addData:{parent_id:"",name:"",abbr:"",memo:""},dialogVisibleView:!1,rules:{typename:[{required:!0,message:"请选择活动区域",trigger:"change"}]},root:[],viewList:{},viewId:""}},methods:{handleSizeChange:function(e){this.pagesize=e},handleCurrentChange:function(e){this.currentPage=e},freashViewList:function(){var e=this;this.baseFun().axios("post",this.baseUrl().moduleView,{parent_abbr:this.viewId},function(t){e.viewList=t.data})},addDataUpload:function(){var e=this;this.baseFun().axios("post",this.baseUrl().moduleAdd,this.addData,function(t){console.log(t),t.data.success?(e.$message({message:"添加成功",type:"success"}),e.addData={parent_id:"",name:"",abbr:"",memo:""},e.getData(),e.dialogVisibleAdd=!1):e.$message({message:"添加失败："+t.data.msg,type:"warning"})})},addDialog:function(){this.dialogVisibleAdd=!0;var e=this;this.baseFun().axiosGet(this.baseUrl().module_parent,function(t){e.root=t.data.table})},handleEdit:function(e,t){this.dialogVisible=!0,this.editData=t},handleDelete:function(e,t){var a=this,i=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.baseFun().axios("post",a.baseUrl().module_delete,{type_id:t.id,abbr:t.typespell},function(e){e.data.success?(i.$message({message:"删除成功",type:"success"}),1===i.tableData.slice((i.currentPage-1)*i.pagesize,i.currentPage*i.pagesize).length&&i.currentPage--,i.getData(),i.dialogVisible=!1):i.$message({message:"删除失败："+e.data.msg,type:"warning"})})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},handleView:function(e,t){this.viewId=t.typespell,this.dialogVisibleView=!0;var a=this;this.baseFun().axios("post",this.baseUrl().moduleView,{parent_abbr:t.typespell},function(e){a.viewList=e.data})},handleClose:function(e){this.$confirm("确认关闭？").then(function(t){e()}).catch(function(e){})},handleCloseAdd:function(e){this.$confirm("确认关闭？").then(function(t){e()}).catch(function(e){})},handleCloseView:function(e){this.$confirm("确认关闭？").then(function(t){e()}).catch(function(e){})},getData:function(){var e=this;this.baseFun().axiosGet(this.baseUrl().module_code,function(t){e.tableData=t.data.table})},editUpdate:function(){if(""!==this.editData.typename){var e={},t=this;e.parent_id=this.editData.parentid,e.type_id=this.editData.id,e.name=this.editData.typename,e.memo=this.editData.memo,this.baseFun().axios("post",this.baseUrl().module_updata,e,function(e){e.data.success?(t.$message({message:"修改成功！",type:"success"}),t.dialogVisible=!1):t.$message({message:"修改失败："+e.data.msg,type:"warning"})})}else this.$message({message:"模块名称不能为空",type:"warning"})}},mounted:function(){this.getData()},watch:{dialogVisible:function(e,t){!1===e&&this.getData()}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{attrs:{type:"primary"},on:{click:e.addDialog}},[e._v("添加模块")]),e._v(" "),a("el-dialog",{attrs:{title:"添加模块",visible:e.dialogVisibleAdd,width:"45%","before-close":e.handleCloseAdd},on:{"update:visible":function(t){e.dialogVisibleAdd=t}}},[a("el-form",{ref:"",staticClass:"demo-ruleForm",attrs:{model:e.addData,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"模块名称",prop:"name"}},[a("el-input",{model:{value:e.addData.name,callback:function(t){e.$set(e.addData,"name",t)},expression:"addData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"模块字母缩写",prop:"abbr"}},[a("el-input",{model:{value:e.addData.abbr,callback:function(t){e.$set(e.addData,"abbr",t)},expression:"addData.abbr"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"父级模块","label-width":"100px",prop:"parent_id"}},[a("el-select",{attrs:{placeholder:"请选择一个父级模块"},model:{value:e.addData.parent_id,callback:function(t){e.$set(e.addData,"parent_id",t)},expression:"addData.parent_id"}},e._l(e.root,function(e,t){return a("el-option",{key:t,attrs:{label:e.typename,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"模块备注",prop:"memo"}},[a("el-input",{model:{value:e.addData.memo,callback:function(t){e.$set(e.addData,"memo",t)},expression:"addData.memo"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisibleAdd=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addDataUpload}},[e._v("确 定")])],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData.slice((e.currentPage-1)*e.pagesize,e.currentPage*e.pagesize),border:"","default-sort":{prop:"parent_name",order:"descending"}}},[a("el-table-column",{attrs:{prop:"parent_name",label:"父级模块",sortable:"",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"typespell",label:"模块首字母缩写"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"typename",label:"模块名称"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"memo",label:"模块备注"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){e.handleView(t.$index,t.row)}}},[e._v("查看")])]}}])})],1),e._v(" "),a("div",{staticStyle:{position:"relative"}},[a("el-pagination",{staticClass:"page_center",attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"45%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.editData,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"模块名称",prop:"name"}},[a("el-input",{model:{value:e.editData.typename,callback:function(t){e.$set(e.editData,"typename",t)},expression:"editData.typename"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"模块备注",prop:"name"}},[a("el-input",{model:{value:e.editData.memo,callback:function(t){e.$set(e.editData,"memo",t)},expression:"editData.memo"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.editUpdate}},[e._v("修 改")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.viewList.parent_name,visible:e.dialogVisibleView,width:"65%","before-close":e.handleCloseView},on:{"update:visible":function(t){e.dialogVisibleView=t}}},[a("ViewModule",{attrs:{viewList:e.viewList},on:{ViewModuleCross:function(t){e.freashViewList()}}}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisibleView=!1}}},[e._v("关闭")])],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(s,n,!1,function(e){a("VWFu")},"data-v-276493e0",null);t.default=l.exports}});