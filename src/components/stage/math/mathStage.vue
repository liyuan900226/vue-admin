<template>
    <div>
        <el-button type="primary" @click="dialogVisibleAdd = true">添加一级目录</el-button>
        <!--第一单元-->
        <div>
            <div v-for="item in stageData.chapter_list">
                <div class="cha">
                    <span>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</span>
                    <p>{{item.name}}</p>
                    <div class="operate">
                        <el-button type="text" @click="stageAddClick(item)" size="mini">添加关卡</el-button>
                        <el-button type="text" @click="editChaClick(item)" size="mini">编辑</el-button>
                        <el-button type="text" @click="chaDelete(item)" size="mini">删除</el-button>
                        <el-button type="text" @click="chaOn(item)" size="mini">{{item.status===2?'启用':'禁用'}}</el-button>
                        <el-button type="text" @click="chaMoveUP(item)" size="mini">上移</el-button>
                        <el-button type="text" @click="chaMoveDown(item)" size="mini">下移</el-button>
                        <el-button @click="chatoggle(item)" size="mini">{{item.toggle?'收起':'展开'}}</el-button>
                    </div>
                </div>

                <transition name="fade">
                    <div v-show="item.toggle">
                        <div class="cha cilidren_" v-for="s in item.section_list ">
                            <span>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</span>
                            <p>{{s.name}}</p>
                            <div class="operate" style="padding-right: 170px">
                                <span v-if="s.hard_mode===1">高</span>
                                <!--------------第一个按钮根据后台数据v-if-------------->
                                <el-button type="text" :disabled="item.status===1" @click="stageContentClick(s,item)" size="mini">{{s.type}}({{s.content_length}})</el-button>
                                <el-button type="text" :disabled="item.status===1" @click="stageEditClick(s,item)" size="mini">编辑</el-button>
                                <el-button type="text" :disabled="item.status===1" @click="stageDelete(s,item)" size="mini">删除</el-button>
                                <el-button type="text" :disabled="item.status===1" @click="stageMoveUp(s,item)" size="mini">上移</el-button>
                                <el-button type="text" :disabled="item.status===1" @click="stageMoveDown(s,item)" size="mini">下移</el-button>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>

        </div>

        <!----添加目录对话框------>
        <el-dialog
            title="添加目录"
            :visible.sync="dialogVisibleAdd"
            width="35%"
            :before-close="handleCloseAdd"
            append-to-body>
            <el-form :model="addChaData" label-width="50px" class="demo-ruleForm">
                <el-form-item label="名称" prop="name">
                    <el-input v-model="addChaData.name"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="ChaAdd">添 加</el-button>
                <el-button type="primary" @click="dialogVisibleAdd = false">取 消</el-button>
            </span>
        </el-dialog>
        <!----编辑目录对话框------>
        <el-dialog
            title="编辑目录"
            :visible.sync="dialogVisibleEdit"
            width="35%"
            :before-close="handleCloseEdit"
            append-to-body>
            <el-form :model="editChaData" label-width="50px" class="demo-ruleForm">
                <el-form-item label="名称" prop="name">
                    <el-input v-model="editChaData.name"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="editCha">确 认</el-button>
                <el-button type="primary" @click="dialogVisibleEdit = false">关 闭</el-button>
            </span>
        </el-dialog>
        <!----添加关卡对话框------>
        <el-dialog
            title="添加关卡"
            :visible.sync="dialogVisibleAddStage"
            width="35%"
            :before-close="handleCloseAddStage"
            append-to-body>
            <el-form :model="addStageData" label-width="50px" class="demo-ruleForm">
                <el-form-item label="名称" prop="name">
                    <el-input v-model="addStageData.name"></el-input>
                </el-form-item>
                <el-form-item label="类型">
                    <el-radio-group v-model="addStageData.section_type">
                        <el-radio label="1">知识点学习</el-radio>
                        <el-radio label="2">同步习题</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="等级">
                    <el-radio-group v-model="addStageData.hard_mode">
                        <el-radio :label="0">普通关卡</el-radio>
                        <el-radio :label="1">高级关卡</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="stageAdd">添 加</el-button>
                <el-button type="primary" @click="dialogVisibleAddStage = false">取 消</el-button>
            </span>
        </el-dialog>
        <!----编辑关卡对话框------>
        <el-dialog
            title="编辑关卡"
            :visible.sync="dialogVisibleEditStage"
            width="35%"
            :before-close="handleCloseEditStage"
            append-to-body>
            <el-form :model="editStageData" label-width="50px" class="demo-ruleForm">
                <el-form-item label="名称" prop="name">
                    <el-input v-model="editStageData.name"></el-input>
                </el-form-item>
                <el-form-item label="等级">
                    <el-radio-group v-model="editStageData.hard_mode">
                        <el-radio label="0">普通关卡</el-radio>
                        <el-radio label="1">高级关卡</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="editStage">确 认</el-button>
                <el-button type="primary" @click="dialogVisibleEditStage = false">关 闭</el-button>
            </span>
        </el-dialog>
        <!----编辑关卡内容对话框------>
        <el-dialog
            title="编辑关卡内容"
            :visible.sync="dialogVisibleStageContent"
            width="30%"
            :before-close="handleCloseStageContent"
            append-to-body>
            <div style="margin-top: 3px" v-for="(item,i) in StageText">
                <el-input v-model="item.name" style="width: 60%;margin-bottom: 3px"></el-input>
                <el-button @click="deleteStageContent(i)">删除</el-button>
            </div>
            <el-button @click="addStageContent" type="primary">新 增</el-button>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="updataStangeContent">提 交</el-button>
                <el-button type="primary" @click="dialogVisibleStageContent = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "ChineseStage",
        props:["stageData"],
        data(){
            return{
                //toggle:false,
                dialogVisibleAdd:false,
                dialogVisibleEdit:false,
                dialogVisibleAddStage:false,
                dialogVisibleEditStage:false,
                dialogVisibleStageContent:false,

                addChaData:{//添加目录数据
                    book_id:"",
                    name:""
                },
                editChaData:{//编辑目录数据
                    chapter_id:"",
                    name:""
                },
                addStageData:{
                    book_id:"",
                    chapter_id:"",
                    section_type:"",
                    hard_mode:"",
                    name:""
                },
                editStageData:{
                    section_id:"",
                    book_id:"",
                    chapter_id:"",

                    name:"",
                    section_type:"",
                    hard_mode:"",
                },
                editStageContentData:{

                },
                StageText:[

                ],
            }
        },
        methods:{
            chaMoveUP:function(item){//目录上移
                //console.log(item);
                var this_=this;
                    this.baseFun().axios("post",this.baseUrl().ChaMove,{book_id:this.stageData.book_id,chapter_id:item.chapter_id,sequence:item.sequence,action:"up"},function (res) {
                        if(res.data.success){
                            this_.$message({
                                message: '移动成功！',
                                type: 'success'
                            });
                            //通信父组件，关闭对话框，刷新数据
                            this_.$emit('refresh', "aaa");
                        }else{
                            this_.$message({
                                message:res.data.msg,
                                type: 'warning'
                            });
                        }
                    })
            },
            chaMoveDown:function(item){//目录下移
                //console.log(item);
                var this_=this;
                    this.baseFun().axios("post",this.baseUrl().ChaMove,{book_id:this.stageData.book_id,chapter_id:item.chapter_id,sequence:item.sequence,action:"down"},function (res) {
                        if(res.data.success){
                            this_.$message({
                                message: '移动成功！',
                                type: 'success'
                            });
                            //通信父组件，关闭对话框，刷新数据
                            this_.$emit('refresh', "aaa");
                        }else{
                            this_.$message({
                                message:res.data.msg,
                                type: 'warning'
                            });
                        }
                    })

            },
            chatoggle:function(item){
                item.toggle=!item.toggle
            },
            chaDelete:function(item){//删除目录
                console.log(item.chapter_id);
                var this_=this;
                this.$confirm('此操作将永久删除该目录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.baseFun().axios("post",this.baseUrl().deleteCha,{chapter_id:item.chapter_id},function (res) {
                        if(res.data.success===true){
                            this_.$message({
                                message: '删除成功！',
                                type: 'success'
                            });
                            this_.$emit('refresh', "aaa");
                        }else{
                            this_.$message({
                                message:res.data.msg,
                                type: 'warning'
                            });
                        }
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            chaOn:function (item) {//启用/禁用目录
                console.log(item)   //2点击将会禁用
                var this_=this;
                if(item.status===2){//禁用变启用
                    this.baseFun().axios("post",this.baseUrl().statusCha,{status:1,chapter_id:item.chapter_id},function (res) {
                        if(res.data.success===true){
                            this_.$message({
                                message: res.data.msg,
                                type: 'success'
                            });
                            this_.$emit('refresh', "aaa");
                        }else{
                            this_.$message({
                                message:res.data.msg,
                                type: 'warning'
                            });
                        }
                    });
                }else{//启用变禁用
                    this.$confirm('此操作将禁用关卡, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.baseFun().axios("post",this.baseUrl().statusCha,{status:2,chapter_id:item.chapter_id},function (res) {
                            if(res.data.success===true){
                                this_.$message({
                                    message: res.data.msg,
                                    type: 'success'
                                });
                                this_.$emit('refresh', "aaa");
                            }else{
                                this_.$message({
                                    message:res.data.msg,
                                    type: 'warning'
                                });
                            }
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消操作'
                        });
                    });

                }

            },
            ChaAdd:function(){//提交添加目录
                this.addChaData.book_id=this.stageData.book_id;
                console.log(this.addChaData);
                if(this.addChaData.name===""){
                    return
                }
                var this_=this;
                this.baseFun().axios("post",this.baseUrl().chaAdd,this.addChaData,function (res) {
                    console.log(res);
                    if(res.data.success){
                        this_.$message({
                            message: '添加成功！',
                            type: 'success'
                        });
                        //通信父组件，关闭对话框，刷新数据
                        this_.addChaData.name=""; //清空
                        this_.$emit('refresh', "aaa");
                        this_.dialogVisibleAdd=false
                    }else{
                        this_.$message({
                            message:res.data.msg,
                            type: 'warning'
                        });
                    }
                })
            },
            editChaClick:function(item){//点击编辑目录按钮
                console.log(item);
                this.dialogVisibleEdit=true;
                this.editChaData.chapter_id=item.chapter_id;
                this.editChaData.name=item.name
            },
            editCha:function(){//提交编辑过的目录信息
                if(this.editChaData.name==="") {
                    return
                }
                var this_=this;
                this.baseFun().axios("post",this.baseUrl().editCha,this.editChaData,function (res) {
                    console.log(res);
                    if(res.data.success){
                        this_.$message({
                            message: '修改成功！',
                            type: 'success'
                        });
                        //通信父组件，关闭对话框，刷新数据
                        this_.editChaData.name=""; //清空
                        this_.editChaData.chapter_id="";
                        this_.$emit('refresh', "aaa");
                        this_.dialogVisibleEdit=false
                    }else{
                        this_.$message({
                            message:res.data.msg,
                            type: 'warning'
                        });
                    }
                })
            },
            stageMoveUp:function(s,item){//关卡上移
               // console.log(s);
                console.log(s.sequence)

                var this_=this
                this.baseFun().axios("post",this.baseUrl().stageMove,{section_id:s.section_id,book_id:this.stageData.book_id,chapter_id:item.chapter_id,sequence:s.sequence,action:"up"},function(res){
                    if(res.data.success){
                        this_.$message({
                            message: '移动成功！',
                            type: 'success'
                        });
                        //通信父组件，关闭对话框，刷新数据
                        this_.$emit('refresh', "aaa");
                    }else{
                        this_.$message({
                            message:res.data.msg,
                            type: 'warning'
                        });
                    }
                })
            },
            stageMoveDown:function(s,item){//关卡下移
                var this_=this
                this.baseFun().axios("post",this.baseUrl().stageMove,{section_id:s.section_id,book_id:this.stageData.book_id,chapter_id:item.chapter_id,sequence:s.sequence,action:"down"},function(res){
                    if(res.data.success){
                        this_.$message({
                            message: '移动成功！',
                            type: 'success'
                        });
                        //通信父组件，关闭对话框，刷新数据
                        this_.$emit('refresh', "aaa");
                    }else{
                        this_.$message({
                            message:res.data.msg,
                            type: 'warning'
                        });
                    }
                })
            },
            stageContentClick:function(s,item){//点击关卡内容的名字
                var this_=this
                console.log(s,item);
                this.baseFun().axiosGet(this.baseUrl().stageContentEdit+"?section_id="+s.section_id,function (res) {
                    this_.editStageContentData=res.data.section_map
                    res.data.section_map.text.forEach((item,i)=>{
                       //this_.$set(this_.StageText,i,{name:item})
                        this_.StageText.push({name:item})
                    });
                    console.log(this_.StageText)
                });
                this.dialogVisibleStageContent=true
            },
            editStage:function(){
                var this_=this;
                this.baseFun().axios("post",this.baseUrl().stageEdit,this.editStageData,function (res) {
                    if(res.data.success){
                        this_.$message({
                            message: '修改成功！',
                            type: 'success'
                        });
                        this_.$emit('refresh', "aaa");
                        this_.dialogVisibleEditStage=false
                    }else{
                        this_.$message({
                            message:res.data.msg,
                            type: 'warning'
                        });
                    }
                })
            },
            stageEditClick:function(s,item){//关卡编辑按钮
                //console.log(item);
                //console.log(item);
                this.editStageData.section_id=s.section_id;
                this.editStageData.book_id=this.stageData.book_id;
                this.editStageData.hard_mode=s.hard_mode.toString();
                this.editStageData.name=s.name;
                this.editStageData.chapter_id=item.chapter_id;
                this.editStageData.section_type=s.type;
                if(s.type==="知识点学习"){
                    this.editStageData.section_type="1"
                }else{
                    this.editStageData.section_type="2"
                }
                this.dialogVisibleEditStage=true
            },
            addStageContent:function(){//点击增加关卡内容条目
                this.StageText.push({name:""})
            },
            deleteStageContent:function(i){
                this.StageText.splice(i,1)
            },
            updataStangeContent:function(){
                var this_=this;
                var arr=[]
                this.StageText.forEach((item,i)=>{
                    arr[i]=item.name
                });
                this.editStageContentData.text=arr;
                console.log(this.editStageContentData);
                this.baseFun().axios("post",this.baseUrl().stageContentEdit,this.editStageContentData,function (res) {
                    if(res.data.success){
                        this_.$message({
                            message: '更新成功！',
                            type: 'success'
                        });
                        this_.StageText=[];
                        this_.$emit('refresh', "aaa");
                        this_.dialogVisibleStageContent=false
                    }else{
                        this_.$message({
                            message:res.data.msg,
                            type: 'warning'
                        });
                    }
                })
            },
            stageDelete:function(s,item){//删除关卡
                console.log(s);
                console.log(item);
                var this_=this;
                this.$confirm('此操作将永久删除该目录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.baseFun().axios("post",this.baseUrl().stageDelete,{chapter_id:item.chapter_id,section_id:s.section_id},function (res) {
                        if(res.data.success===true){
                            this_.$message({
                                message: '删除成功！',
                                type: 'success'
                            });
                            this_.$emit('refresh', "aaa");
                        }else{
                            this_.$message({
                                message:res.data.msg,
                                type: 'warning'
                            });
                        }
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            stageAddClick:function(item){//点击添加关卡按钮
                this.dialogVisibleAddStage=true;
                this.addStageData.chapter_id=item.chapter_id;
                console.log(item)
            },
            stageAdd:function(){//提交添加关卡按钮
                if(this.addStageData.name===""){
                    return
                }
                var this_=this;
                this.addStageData.book_id=this.stageData.book_id;
                this.baseFun().axios("post",this.baseUrl().stageAdd,this.addStageData,function (res) {
                    console.log(res);
                    if(res.data.success){
                        this_.$message({
                            message: '添加成功！',
                            type: 'success'
                        });
                        //通信父组件，关闭对话框，刷新数据
                        this_.addStageData.name=""; //清空
                        this_.addStageData.section_type="";
                        this_.addStageData.hard_mode="";
                        this_.$emit('refresh', "aaa");
                        this_.dialogVisibleAddStage=false
                    }else{
                        this_.$message({
                            message:res.data.msg,
                            type: 'warning'
                        });
                    }
                })
            },
            handleCloseAdd(done) {
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
            handleCloseAddStage(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            handleCloseEditStage(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            handleCloseStageContent(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
        },
        watch:{

            dialogVisibleStageContent:function(n,o){
                if(n===false){
                    console.log("qingli");
                    this.StageText.length=0
                }
            }
        }
    }
</script>

<style scoped>
    .cha{
        margin-top: 20px;
        position: relative;
        overflow: hidden;
        z-index: 1;
    }
    .operate{
        float: right;
        z-index: 1;
        background-color: #ffffff;
        padding-left: 10px;
    }
    .operate span{
        background-color: red;
        color: #ffffff;
        padding: 0 3px;
    }
    .cha>p{
        float: left;
        z-index: 1;
        background-color: #ffffff;
        padding-right: 20px;
    }
    .cha>span{
        width: 100%;
        height: 13px;
        display: block;
        z-index: -2;
        position: absolute;
    }
    .cilidren_{
        margin-left: 75px;
        margin-top: 10px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
