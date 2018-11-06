<template>
    <!--产品修改页详情-->
    <div>
        <el-form :model="formData" ref="formData"  label-width="80px" class="demo-ruleForm">
            <el-form-item label="类型" prop="user_type">
                <el-radio-group v-model="formData.user_type">
                    <el-radio :label="1">仓储</el-radio>
                    <el-radio :label="3">超市</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item style="width: 475px" label="名称" prop="title" label-width="">
                <el-input v-model="formData.title"></el-input>
            </el-form-item>

            <!-----------图片上传-------------->
            <el-row style="margin-top: 30px">
                <el-col :span="1" :offset="1">
                    <span style="margin-left: -9px">图片 </span>
                </el-col>
                <el-col :span="8">
                    <el-upload
                            class="upload-demo"
                            drag
                            accept=".jpg,.jpeg,.bmp,.gif,.png"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple
                            :before-upload="beforeUpload">
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__text">支持格式：.jpg  .jpeg .bmp .gif .png</div>
                        <div class="el-upload__text">图片尺寸：宽672，高260</div>
                    </el-upload>
                </el-col>
                <el-col style="position: relative" :span="10">
                    <img  style="width: 100%" :src="formData.image_url" alt="">
                    <i @click="imgDelete" v-show="formData.image_url" style="" class="el-icon-error closeimg"></i>
                </el-col>
            </el-row>

            <el-form-item style="width: 475px;margin-top: 20px" label="跳转链接" label-width="">
                <el-input v-model="formData.link_url"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('formData')">立即创建</el-button>
                <!--<el-button @click="resetForm('formData')">重置</el-button>-->
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "productDetail",
        data(){
            return{
                img:"",
                formData:{
                    user_type:'',
                    title:'',
                    image_url:'',
                    link_url:'',
                }
            }
        },
        mounted(){

        },
        methods:{
            beforeUpload:function (file) {
                var this_=this;
                const isSize = new Promise(function(resolve, reject) {
                    let width = 1000000000;
                    let height = 1000000000;
                    let _URL = window.URL || window.webkitURL;
                    let img = new Image();
                    img.onload = function() {//异步操作，当条件满足时resolve,执行then里面的第一个回调；当条件不满足时reject，执行then里面的第二个回调
                        let valid = img.width <= width && img.height <= height;
                        valid ? resolve() : reject();
                    };
                    img.src = _URL.createObjectURL(file);
                }).then(() => {
                    this.img=new FormData();
                    this.img.set('image_file', file, file.name);
                    var this_=this;
                    // this_.baseFun().axios("post",this.baseUrl().imgUpload,this.img,function (res) {
                    //     //console.log(res.data.image_url);
                    //     this_.formData.cover_page_url=res.data.image_url
                    // });
                    return file;
                }, () => {
                    this.$message.error('图片尺寸必须是672*260!');
                    return Promise.reject();
                });
                return false;
            },
            imgDelete(){

            }
        },
    }
</script>

<style scoped>

</style>