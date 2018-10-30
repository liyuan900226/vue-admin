<template>
    <div>
        <el-row>
            <el-col :span="12">
                <el-form :model="queryData" ref="queryData" label-width="80px">
                    <el-form-item label="教材：">
                        <el-select v-model="queryData.press_id" placeholder="请选择出版社">
                            <el-option label="全部" value="0"></el-option>
                            <el-option :key="i" v-for="(item,i) in book_press_version" :label="item.press_name" :value="item.press_id"></el-option>
                        </el-select>
                        <el-select v-model="queryData.version_id" placeholder="请选择版本">
                            <div v-for="item in book_press_version" v-if="item.press_id==queryData.press_id">
                                <el-option label="全部" value="0"></el-option>
                                <el-option :key="i" v-for="(s,i) in item.version_list" :label="s.version_name" :value="s.version_id"></el-option>
                            </div>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="年级：">
                        <el-select v-model="queryData.grade_id" placeholder="请选择年级">
                            <el-option label="全部" value="0"></el-option>
                            <el-option :key="s" v-for="(i,s) in 9" :label="i+'年级'" :value="i"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="阶段：">
                        <el-radio-group v-model="queryData.volume">
                            <el-radio label="0">全部</el-radio>
                            <el-radio label="1">上册</el-radio>
                            <el-radio label="2">下册</el-radio>
                            <el-radio label="3">全册</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="状态：">
                        <el-radio-group v-model="queryData.status">
                            <el-radio label="0">全部</el-radio>
                            <el-radio label="1">启用</el-radio>
                            <el-radio label="2">未启用</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :offset="8" :span="2">
                <el-button  type="primary" @click="dialogVisible=true" icon="el-icon-plus">添加教材</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <el-button @click="bookQuery"  style="margin-left: 20px" type="primary" icon="el-icon-search">搜索</el-button>
                <span style="color: #666666;margin-left: 20px;font-size: 15px">共{{tableLength}}条结果</span>
            </el-col>
        </el-row>
        <!---------------表格-------------------->
        <div style="margin-top: 30px">
            <el-table
                :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                border
                style="width: 100%"
                :default-sort="{prop: 'parent_name', order: 'descending'}">
                <el-table-column
                    prop="press_name"
                    label="出版社"
                    align="center"
                    sortable>
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="version_name"
                    label="版本"
                    sortable>
                </el-table-column>
                <el-table-column
                    prop="book_name"
                    label="名称"
                    align="center"
                    sortable>
                </el-table-column>
                <el-table-column
                    prop="grade"
                    label="年级"
                    align="center"
                    sortable>
                </el-table-column>
                <el-table-column
                    prop="volume"
                    label="阶段"
                    sortable
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="状态"
                    sortable
                    align="center">
                </el-table-column>
                <el-table-column
                    sortable
                    prop="add_date"
                    label="添加时间"
                    align="center">
                </el-table-column>
                <el-table-column label="操作" align="center" width="250" prop="status">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            @click="handleStatus(scope.$index, scope.row)">{{scope.row.status==="启用"?"禁用":"启用"}}</el-button>
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        <el-button
                            size="mini"
                            type="primary"
                            @click="handleStage(scope.$index, scope.row)">关卡管理</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="position: relative">
                <el-pagination
                        class="page_center"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[10, 20, 50, 100]"
                        :page-size="pagesize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="tableData.length">
                </el-pagination>
            </div>
        </div>
        <!---------------添加对话框-------------------->
        <el-dialog
            title="添加教材"
            :visible.sync="dialogVisible"
            width="40%"
            :before-close="handleClose">
            <el-form :model="addData" :rules="rules" ref="addData" label-width="80px" class="demo-ruleForm">
                <el-form-item label="教材：" prop="press_id">
                    <el-select v-model="addData.press_id" placeholder="请选择出版社">
                        <el-option :key="i" v-for="(item,i) in book_press_version" :label="item.press_name" :value="item.press_id"></el-option>
                    </el-select>
                    <el-select v-model="addData.version_id" placeholder="请选择版本">
                        <div v-for="item in book_press_version" v-if="item.press_id==addData.press_id">
                            <el-option :key="i" v-for="(s,i) in item.version_list" :label="s.version_name" :value="s.version_id"></el-option>
                        </div>
                    </el-select>
                </el-form-item>
                <el-form-item label="年级：" prop="grade_id">
                    <el-select v-model="addData.grade_id" placeholder="请选择年级">
                        <el-option :key="s" v-for="(i,s) in 9" :label="i+'年级'" :value="i"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="阶段：" prop="volume">
                    <el-radio-group v-model="addData.volume">
                        <el-radio label="0">全部</el-radio>
                        <el-radio label="1">上册</el-radio>
                        <el-radio label="2">下册</el-radio>
                        <el-radio label="3">全册</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="状态：" prop="status">
                    <el-radio-group v-model="addData.status">
                        <el-radio label="1">启用</el-radio>
                        <el-radio label="2">未启用</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-button @click="submitForm('addData')">查询教材</el-button>
                <p style="text-align: center" v-if="ADD.length===0">暂无教材可添加！</p>
                <p style="text-align: center" v-for="item in ADD">{{item.press_name}}--{{item.version_name}}--{{item.grade_id}}年级--{{item.volume_val}}</p>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addBook" :disabled="ADD.length===0">添加教材</el-button>
                <el-button type="primary" @click="dialogVisible = false">关 闭</el-button>
            </span>
        </el-dialog>
        <!---------------关卡管理对话框-------------------->
        <el-dialog
            :title="stageTitle"
            :visible.sync="dialogVisibleStage"
            width="65%"
            :before-close="handleCloseStage">
            <ChineseStage v-on:refresh="refresh()" :stageData="stageData"></ChineseStage>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisibleStage = false">关 闭</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import ChineseStage from "./ChineseStage"
    export default {
        name: "Chinese",
        components:{
            ChineseStage
        },
        data(){
            return{
                currentPage:1,
                pagesize:10,


                tableDataStatus:"", //列表数据状态  "query"  "all"
                rules:{
                    press_id: [{ required: true, message: '请选择版本', trigger: 'change' }],
                    version_id: [{ required: true, message: '请选择版本', trigger: 'change' }],
                    grade_id: [{ required: true, message: '请选择年级', trigger: 'change' }],
                    volume: [{ required: true, message: '请选择阶段', trigger: 'change' }],
                    status: [{ required: true, message: '请选择状态', trigger: 'change' }],
                },
                queryData:{
                    volume:"",//0全部  1上册  2下册  3全册
                    status:"",
                    press_id:"",
                    version_id:"",//可选
                    grade_id:"",
                    subject_id:5
                },
                book_press_version:[],
                tableData:[//表格数据

                ],
                addData:{//添加教材用来查找教材的数据
                    subject_id:5,
                    book_id:"",
                    press_id:"",
                    version_id:"",//可选
                    grade_id:"",
                    volume:"",//0全部  1上册  2下册  3全册

                },
                ADD:[//添加教材的数据

                ],
                dialogVisible:false,
                dialogVisibleEdit:false,
                dialogVisibleStage:false,
                stageTitle:"北师大--新版--一年级--上册",//关卡管理标题
                stageData:{//关卡管理需要传递给编辑组件的数据
                },
                bookRequestData:{//单条教材详情的请求参数数据
                    subject_id:5,//数学是2，英语是9，语文是5
                    book_id:""
                }
            }
        },
        mounted:function(){
            var this_=this;
            this.getData();
            this.baseFun().axios("post",this.baseUrl().book_press_version,{subject_id:5},function (res) {
                this_.book_press_version=res.data.table
                //console.log(res.data)
            })
        },
        methods:{
            handleSizeChange: function (size) {
                this.pagesize = size;
            },
            handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
            },


            refresh:function(){//请求以及刷新stageData数据， //this.bookRequestDat
                var this_=this;
                this.baseFun().axios("post",this.baseUrl().bookDetail,this.bookRequestData,function(res){
                    //console.log(res.data)
                    this_.stageData=res.data.book_map
                })
            },
            freshData(){//首页更改状态、删除之后刷新数据

                if(this.tableDataStatus==="all"){
                    console.log("请求所有数据")
                    this.getData()
                }
                if(this.tableDataStatus==="query"){
                    console.log("请求搜索数据")
                    this.bookQuery()
                }
            },
            getData:function(){//获取主页数据列表
                var this_=this;
                this.baseFun().axiosGet(this.baseUrl().book_home+"?subject_id=5",function(res){
                    this_.tableData=res.data.table;
                    //更改tableDataStatus为  all
                    this_.tableDataStatus="all"
                })
            },
            bookQuery:function(){
                var this_=this;
                this.baseFun().axios("post",this.baseUrl().book_query,this.queryData,function (res) {
                    if(res.data.success){
                        this_.tableData=res.data.table;
                        //console.log(this_.tableDataStatus)
                        //更改tableDataStatus为  query
                        this_.tableDataStatus="query"
                        this_.currentPage=1;
                    }
                })
            },
            addBook:function(){//查询教材后点击提交添加，只有查询数据不是空时才可以添加
                var this_=this;
                this.baseFun().axios("post",this.baseUrl().addBook,{book_list:this.ADD},function (res) {
                    if(res.data.success){
                        this_.$message({
                            message: '添加成功！',
                            type: 'success'
                        });
                        this_.dialogVisible=false

                    }else{
                        this_.$message({
                            message: '添加失败'+res.data.msg,
                            type: 'warning'
                        });
                    }
                })
            },
            addQueryBook:function(){//添加时点击查询教材
                console.log(this.addData);
                var this_=this;
                this.baseFun().axios("post",this.baseUrl().addQueryData,this.addData,function(res){
                    console.log(res.data);
                    if(res.data.success){//
                        this_.ADD=res.data.table
                    }
                })
            },
            handleStatus(index, row){//点击关卡管理按钮
                //console.log(row);
                var this_=this;
                var book_id=row.book_id;
                var status;
                if(row.status==="启用"){
                    status=2
                    this.$confirm('此操作将禁用关卡, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.baseFun().axios("post",this.baseUrl().book_home_status,{subject_id:5,book_id:row.book_id,status:status},function (res) {
                            if(res.data.success===true){
                                this_.$message({
                                    message: "状态变更成功",
                                    type: 'success'
                                });
                                this_.freshData()
                            }else{
                                this_.$message({
                                    message:res.data.msg,
                                    type: 'warning'
                                });
                            }
                        })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消操作'
                        });
                    });
                }else{
                    status=1
                    this.baseFun().axios("post",this.baseUrl().book_home_status,{subject_id:5,book_id:row.book_id,status:status},function (res) {
                        if(res.data.success===true){
                            this_.$message({
                                message: "状态变更成功",
                                type: 'success'
                            });
                            this_.freshData()
                        }else{
                            this_.$message({
                                message:res.data.msg,
                                type: 'warning'
                            });
                        }
                    })
                }
                this.dialogVisibleEdit=true
            },
            handleDelete(index, row){//删除教材
                console.log(row);
                var this_=this;
                this.$confirm('此操作将永久删除该教材, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //console.log(row);
                    this.baseFun().axios("post",this.baseUrl().book_delete,{subject_id:5,book_id:row.book_id},function (res) {
                        //console.log(res)
                        if(res.data.success===true){
                            this_.$message({
                                message: '删除成功！',
                                type: 'success'
                            });
                            if(this_.tableData.slice((this_.currentPage-1)*this_.pagesize,this_.currentPage*this_.pagesize).length===1){//如果删除的时候当前页只有一条数据，则页码减一
                                this_.currentPage--;
                            }
                            this_.freshData()
                        }else{
                            this_.$message({
                                message:res.data.msg,
                                type: 'warning'
                            });
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            handleStage(index, row){//点击打开关卡管理
                console.log(row);
                this.bookRequestData.book_id=row.book_id;
                //修改对话框标题
                this.stageTitle=row.press_name+"--"+row.version_name+"--"+row.grade+"--"+row.volume;
                this.stageData={}
                this.refresh();
                this.dialogVisibleStage=true
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            handleCloseEdit(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            handleCloseStage(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.addQueryBook()
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        },
        computed:{
            tableLength:function () {
                return this.tableData.length
            }
        },
        watch: {
            'addData.press_id':{
                handler:function(n, o) {
                    // 监听数组list 的第一项的name值变化；n 为新数据，o 为旧数据
                    if(n!==o){
                        this.addData.version_id=""
                    }
                    //console.log(n);
                    //console.log(o)
                },
                deep: true
            },
            'queryData.press_id':{
                handler:function(n, o) {
                    // 监听数组list 的第一项的name值变化；n 为新数据，o 为旧数据
                    if(n!==o){
                        this.queryData.version_id=""
                    }
                    //console.log(n);
                    //console.log(o)
                },
                deep: true
            },
            dialogVisible:{
                handler:function(n, o) {
                    // 监听数组list 的第一项的name值变化；n 为新数据，o 为旧数据
                    if(n===false){
                        this.ADD=[];
                        this.addData.press_id="";
                        this.addData.version_id="";
                        this.addData.grade_id="";
                        this.addData.volume="";
                        this.addData.status="";
                    }
                    //console.log(n);
                    //console.log(o)
                },
                deep: true
            },
        }
    }
</script>

<style scoped>
    .page_center{
        margin-top: 20px;
        margin-bottom: 100px;
        position: absolute;
        left: 50%;
        -webkit-transform:translateX(-50%) ;
        -moz-transform:translateX(-50%) ;
        -ms-transform:translateX(-50%) ;
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
    }
</style>
