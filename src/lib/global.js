export default {
    install(Vue,options)
    {
        Vue.prototype.baseUrl = function () {
            return{
                //图片上传路径
                imgUpload:DOMAIN_API_CONFIG_SYS+"/statics/image/upload/",//图片上传路径
                //登陆
                login:DOMAIN_API_CONFIG_SYS+'/accounts/login/',
                //退出
                logout:DOMAIN_API_CONFIG_SYS+"/accounts/logout/",

                //系统设置--->入口管理
                entrance:DOMAIN_API_CONFIG_SYS+"/entrance/",
                entranceAdd:DOMAIN_API_CONFIG_SYS+'/entrance/add/',//获取添加页的信息,提交新增的app信息
                entranceDelete:DOMAIN_API_CONFIG_SYS+"/entrance/delete/",  //
                entranceUpdate:DOMAIN_API_CONFIG_SYS+"/entrance/update/",
                entranceView:DOMAIN_API_CONFIG_SYS+"/entrance/detail/",//查看
                entranceSelectState:DOMAIN_API_CONFIG_SYS+"/entrance/update/selected/",
                //系统设置--->代码管理
                module_code:DOMAIN_API_CONFIG_SYS+"/module/type/",//获取模块代码列表
                module_updata:DOMAIN_API_CONFIG_SYS+"/module/type/update/",//修改后的更新
                module_delete:DOMAIN_API_CONFIG_SYS+"/module/type/delete/",//删除模块
                module_parent:DOMAIN_API_CONFIG_SYS+"/module/root/",//点击添加模块按钮时，获取父级模块信息
                moduleAdd:DOMAIN_API_CONFIG_SYS+"/module/type/add/",//添加模块
                moduleView:DOMAIN_API_CONFIG_SYS+"/module/code/",//点击查看按钮时，获取信息
                module_codeDelete:DOMAIN_API_CONFIG_SYS+"/module/code/delete/",//删除代码块
                module_codeAdd:DOMAIN_API_CONFIG_SYS+'/module/code/add/',//内层对话框添加代码块
                module_codeEdit:DOMAIN_API_CONFIG_SYS+'/module/code/update/',//内层对话框代码修改
                //运营系统--->活动配置
                active_home:DOMAIN_API_CONFIG_SYS+"/operate/active/",//活动配置主页数据
                active_query:DOMAIN_API_CONFIG_SYS+"/operate/active/",//查询
                active_Area:DOMAIN_API_CONFIG_SYS+"/area/",//活动配置 城市列表
                active_Add:DOMAIN_API_CONFIG_SYS+"/operate/active/add/",//活动配置 活动添加
                    //运营系统--->配置删除
                oprationDelete:DOMAIN_API_CONFIG_SYS+"/operate/delete/",//（活动。轮播。弹窗）配置删除
                active_Modify:DOMAIN_API_CONFIG_SYS+"/operate/active/update/",//活动修改获取单条数据，上传数据
                //运营系统--->弹窗配置
                operate_home:DOMAIN_API_CONFIG_SYS+"/operate/modal/",//弹窗配置主页数据
                operate_query:DOMAIN_API_CONFIG_SYS+"/operate/modal/",//
                operate_location:DOMAIN_API_CONFIG_SYS+"/operate/location/config/",//获取位置代码模块信息
                operate_Modify:DOMAIN_API_CONFIG_SYS+"/operate/modal/update/",//活动修改获取单条数据，上传数据
                operate_Add:DOMAIN_API_CONFIG_SYS+"/operate/modal/add/",//添加弹窗配置
                //运营系统--->轮播配置
                banner_home:DOMAIN_API_CONFIG_SYS+"/operate/banner/",//轮播配置首页数据
                banner_query:DOMAIN_API_CONFIG_SYS+"/operate/banner/",//轮播条件查询
                banner_add:DOMAIN_API_CONFIG_SYS+"/operate/banner/add/",//添加轮播
                banner_Modify:DOMAIN_API_CONFIG_SYS+"/operate/banner/update/",//修改轮播，获取单条轮播数据

                //同步闯关首页数据
                book_press_version:DOMAIN_API_CONFIG_SYS+"/game/book/press/version/",//教材、出版社、版本 信息
                book_home:DOMAIN_API_CONFIG_SYS+"/game/book/",
                book_home_status:DOMAIN_API_CONFIG_SYS+"/game/book/status/",//教材首页状态变更
                book_delete:DOMAIN_API_CONFIG_SYS+"/game/book/delete/",//首页删除教材
                bookDetail:DOMAIN_API_CONFIG_SYS+"/game/book/detail/",//同步闯关--->英语，数学，语文首页统一获取单条教材详情
                addQueryData:DOMAIN_API_CONFIG_SYS+"/game/book/fetch/",//添加教材时获取教材列表
                addBook:DOMAIN_API_CONFIG_SYS+"/game/book/add/",//添加教材
                book_query:DOMAIN_API_CONFIG_SYS+"/game/book/",//条件查询首页的列表

                /********************数学***************************/
                chaAdd:DOMAIN_API_CONFIG_SYS+"/game/math/chapter/add/",//添加数学章节
                editCha:DOMAIN_API_CONFIG_SYS+"/game/math/chapter/update/",//编辑修改数学章节
                deleteCha:DOMAIN_API_CONFIG_SYS+"/game/math/chapter/delete/",//删除数学章节
                statusCha:DOMAIN_API_CONFIG_SYS+"/game/math/chapter/status/",//启用，禁用数学章节
                ChaMove:DOMAIN_API_CONFIG_SYS+"/game/math/chapter/move/",//移动数学章节
                stageAdd:DOMAIN_API_CONFIG_SYS+"/game/math/section/add/",//添加数学关卡
                stageEdit:DOMAIN_API_CONFIG_SYS+"/game/math/section/update/",//编辑数学关卡名字等信息
                stageContentEdit:DOMAIN_API_CONFIG_SYS+"/game/math/section/content/",//关卡内的内容获取和修改（get，post）
                stageDelete:DOMAIN_API_CONFIG_SYS+"/game/math/section/delete/",//删除数学关卡
                stageMove:DOMAIN_API_CONFIG_SYS+"/game/math/section/move/",//移动数学关卡

                /********************语文***************************/
                chaAdd_chn:DOMAIN_API_CONFIG_SYS+"/game/chn/chapter/add/",//添加语文章节
                editCha_chn:DOMAIN_API_CONFIG_SYS+"/game/chn/chapter/update/",//编辑修改语文章节
                deleteCha_chn:DOMAIN_API_CONFIG_SYS+"/game/chn/chapter/delete/",//删除语文章节
                statusCha_chn:DOMAIN_API_CONFIG_SYS+"/game/chn/chapter/status/",//启用，禁用语文章节
                ChaMove_chn:DOMAIN_API_CONFIG_SYS+"/game/chn/chapter/move/",//移动语文章节
                stageAdd_chn:DOMAIN_API_CONFIG_SYS+"/game/chn/section/add/",//添加语文关卡
                stageEdit_chn:DOMAIN_API_CONFIG_SYS+"/game/chn/section/update/",//编辑语文关卡名字等信息
                stageContentEdit_chn:DOMAIN_API_CONFIG_SYS+"/game/chn/section/content/",//关卡内的内容获取和修改（get，post）
                stageDelete_chn:DOMAIN_API_CONFIG_SYS+"/game/chn/section/delete/",//删除语文关卡
                stageMove_chn:DOMAIN_API_CONFIG_SYS+"/game/chn/section/move/",//移动语文关卡

                /********************英语***************************/
                chaAdd_eng:DOMAIN_API_CONFIG_SYS+"/game/eng/chapter/add/",//添加英语章节
                editCha_eng:DOMAIN_API_CONFIG_SYS+"/game/eng/chapter/update/",//编辑修改英语章节
                deleteCha_eng:DOMAIN_API_CONFIG_SYS+"/game/eng/chapter/delete/",//删除英语章节
                statusCha_eng:DOMAIN_API_CONFIG_SYS+"/game/eng/chapter/status/",//启用，禁用英语章节
                ChaMove_eng:DOMAIN_API_CONFIG_SYS+"/game/eng/chapter/move/",//移动英语章节
                stageAdd_eng:DOMAIN_API_CONFIG_SYS+"/game/eng/section/add/",//添加英语关卡
                stageEdit_eng:DOMAIN_API_CONFIG_SYS+"/game/eng/section/update/",//编辑英语关卡名字等信息
                stageContentEdit_eng:DOMAIN_API_CONFIG_SYS+"/game/eng/section/content/",//关卡内的内容获取和修改（get，post）
                stageDelete_eng:DOMAIN_API_CONFIG_SYS+"/game/eng/section/delete/",//删除英语关卡
                stageMove_eng:DOMAIN_API_CONFIG_SYS+"/game/eng/section/move/",//移动英语关卡

                //教育资讯
                newsHome:DOMAIN_API_CONFIG_SYS+"/news/",//添加教育资讯,保存&保存并发布
                newsAdd:DOMAIN_API_CONFIG_SYS+"/news/add/",//添加教育资讯,保存&保存并发布
                newsEdit:DOMAIN_API_CONFIG_SYS+"/news/update/",//单条资讯数据修改，提交
                newDelete:DOMAIN_API_CONFIG_SYS+"/news/delete/",//单条资讯数据修改，提交
                newQuery:DOMAIN_API_CONFIG_SYS+"/news/",//搜索查询
                newSend:DOMAIN_API_CONFIG_SYS+"/news/send/",//发布
            }
        };
        Vue.prototype.baseFun = function(){
            return{   //this.baseFun().axios()
                axios:function(method,url,data,sfun){//post请求
                    Vue.prototype.$axios({
                        method: method,
                        url: url,
                        data: data,
                    })
                        .then(function (res) {
                            sfun(res)

                        })
                        .catch(function (error) {
                            console.log(error);
                        });

                },
                axiosGet:function(url,sfun){//get请求
                    Vue.prototype.$axios.get(url)
                        .then(function (res) {
                            sfun(res)

                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                },
                timetrans:function(date){//时间戳转换
                    var date = new Date(parseInt(data) * 1000);//如果date为13位不需要乘1000
                    var Y = date.getFullYear() + '-';
                    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
                    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
                    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
                    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
                    return Y + M + D + h + m + s;
                },
                ArrDre:function (arr) {//数组去重
                    let r=arr.filter(function (element, index, self) {
                        return self.indexOf(element) === index;
                    });
                    return r
                },
                has_permission:function (str_code) {
                    if (localStorage.getItem('is_supper') === 'true') {//超级管理员
                        return true
                    }
                    let permissions = localStorage.getItem('permissions');

                    if (!str_code || !permissions) return false;
                    permissions =  permissions.split(',');
                    for (let or_item of str_code.split('|')) {
                        if (isSubArray(permissions, or_item.split('&'))) {
                            return true
                        }
                    }
                    return false
                }
            }
        };
    }
}