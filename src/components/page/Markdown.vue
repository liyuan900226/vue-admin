<template>
    <div>
        <mavon-editor v-model="content" ref="md" @imgAdd="$imgAdd" @change="change" style="min-height: 600px"/>
        <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
    </div>
    <div>
        <div class="markdown-body">
            <div class="hljs-center"> <h2><a id="_2"></a>标题</h2> </div> <p>       社民党籍的马斯对《星期日世界报》说，美国对外政策的转变将是长期的，德国必须适应。俄罗斯想利用目前西方的政治真空结束制裁。中国则正在世界政治中不断扩大影响力。德国代表着自由、民主和自由贸易。“很显然，我们应和具有同样价值标准的国家进行更密切合作。”他称加拿大、日本、韩国和南非这些国家可能是“多边主义联盟”的首批联系对象。<br />         就在马斯发表这番论调的同一天，德国《世界报》援引杜伊斯堡-埃森大学的一项研究称，74%的中国人对德国有正面印象。该报说，中国人喜欢德国产品，目前在中国活跃着5000多家德国公司，产品销售良好，利润丰厚。<br /> <img src="http://file.m.xueceping.cn/upload_media/message/2018/08/21/20180821143628591504.png" alt="弹窗.jpeg" /><br />         “一些德官员正在给德中合作拖后腿。”一名在德分析人士20日对《环球时报》记者说。事实上，中国正在维护自由贸易，德国却显露保护主义迹象。他认为，只有18%支持率的德国社民党想靠表现“强硬”拉拢人心，不符合德国对华务实外交的思路。</p>
        </div>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    export default {
        name: 'markdown',
        data: function(){
            return {
                content:'',
                html:'',
                configs: {
                }
            }
        },
        components: {
            mavonEditor
        },
        methods: {
            // 将图片上传到服务器，返回地址替换到md中
            $imgAdd(pos, $file){
                var formdata = new FormData();
                formdata.append('file', $file);
                // 这里没有服务器供大家尝试，可将下面上传接口替换为你自己的服务器接口
                this.$axios({
                    url: 'https://mapiconfig-dev.m.xueceping.cn/statics/image/upload/',
                    method: 'post',
                    data: formdata,
                }).then((url) => {
                    this.$refs.md.$img2Url(pos, url);
                })
            },
            change(value, render){
                // render 为 markdown 解析后的结果
                this.html = render;
            },
            submit(){
                console.log(this.content);
                console.log(this.html);
                this.$message.success('提交成功！');
            }
        }
    }
</script>
<style scoped>
    .editor-btn{
        margin-top: 20px;
    }
</style>
