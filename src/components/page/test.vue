<template>
    <div>
        <div class="editor_container">
            <div class="ql-editor" v-html="content"></div>
        </div>
    </div>
</template>
<script>
    //npm install vue-quill-editor --save
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import {quillEditor, Quill} from 'vue-quill-editor'
    export default {
        components: {quillEditor},
        data() {
            return {
                content:"",
                htmls:"<p>       中过</p>"
            }
        },
        mounted:function () {
            var this_=this;
            this.baseFun().axiosGet("https://mapiconfig-dev.m.xueceping.cn/news/update/?news_id=83",function (res) {
                //console.log(res.data);
                this_.content=this_.Base64.decode(res.data.news_map.content);
                console.log(res.data.news_map.content)
            })
        }
    }
</script>
<style>
    /*
    .ql-toolbar{
        display: none;
    }
    .ql-container{
        width: 720px!important;
        border: none!important;
        font-size: 14px!important;
    }
    */
    .editor-btn{
        margin-top: 20px;
    }
    .editor_container {
        width: 748px!important;
        font-size: 32px;
        border: 1px solid #dddddd;
    }
    .ql-editor{
        letter-spacing: 5px;
        line-height: 50px;
    }
    .editor_container p{
        text-align: justify;
    }
    img{
        max-width: 100%;
    }
</style>
