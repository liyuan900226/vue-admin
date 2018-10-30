<template>
    <div class="login-wrap">
        <div class="ms-title">后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @keyup.enter="submitForm('ruleForm')" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p style="font-size:12px;line-height:30px;color:#999;">Tips : </p>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        created(){
            //console.log(this.baseUrl().imgUpload)
        },
        methods: {
            submitForm(formName) {
                var this_=this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // this_.baseFun().axios("post",this.baseUrl().login,this.ruleForm,function (res) {
                        //     //console.log(res);
                        //     if(res.data.success){
                        //         this_.$message({
                        //             message: '登陆成功！',
                        //             type: 'success'
                        //         });
                        //         localStorage.setItem('cookie',res.data.cookie);//cookie存在本地
                        //         localStorage.setItem('ms_username',this_.ruleForm.username);
                        //         this_.$router.push('/dashboard');
                        //     }else{
                        //         this_.$message({
                        //             message: '登陆失败：'+res.data.msg,
                        //             type: 'warning'
                        //         });
                        //     }
                        // });
                        // return;
                        localStorage.setItem('ms_username',this_.ruleForm.username);
                        this_.$router.push('/dashboard');

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
