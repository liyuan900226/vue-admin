<template>
    <!--产品修改页详情-->
    <div>
        <el-form :model="formData" ref="formData" :rules="rules" label-width="80px" class="demo-ruleForm">
            <el-form-item label="身份" prop="user_type">
                <el-radio-group v-model="formData.user_type">
                    <el-radio :label="1">学生</el-radio>
                    <el-radio :label="3">教师</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item style="width: 475px" label="标题" prop="title" label-width="">
                <el-input v-model="formData.title"></el-input>
            </el-form-item>
            <div  >
                <el-form-item label="范围" prop="province">
                    <el-radio-group v-model="formData.province">
                        <el-radio :key="i" v-for="(item,i) in areaList" :label="item.province">{{item.name}}</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="" prop="city_list">
                    <el-checkbox-group :key="i" v-for="(item,i) in areaList" v-model="formData.city_list">
                        <div v-if="item.province===formData.province">
                            <el-checkbox :key="i" v-for="(s,i) in item.city_list" :label="s.city" name="type">{{s.name}}</el-checkbox>
                        </div>
                    </el-checkbox-group>
                </el-form-item>
            </div>

            <div>
                <div class="block">
                    <span style="margin-left: 40px;margin-right: 7px" class="demonstration">时间</span>
                    <el-date-picker
                            v-model="value7"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                </div>
            </div>
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
                <el-button @click="resetForm('formData')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "productDetail"
    }
</script>

<style scoped>

</style>