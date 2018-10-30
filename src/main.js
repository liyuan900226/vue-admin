import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
//import '../static/css/theme-blue/index.css';       // 浅绿色主题
import "babel-polyfill";

//vuex
import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex);
Vue.use(ElementUI, { size: 'small' });
Vue.prototype.$axios = axios;

//配置
import global from './lib/global.js'
Vue.use(global);

//base64、MD5
import md5 from 'js-md5';
Vue.prototype.Base64=require('js-base64').Base64;  //this.Base.encode(str)   this.Base.decode(str)

//请求拦截器
// axios.interceptors.request.use(config => {
//     if(config.url!==Vue.prototype.baseUrl().login){
//         config.headers['auth-token'] =localStorage.getItem('cookie');
//         //config.headers['auth-token'] ="0873lign2ee0dy887hzungx8sb58s898";
//     }
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     });
// //响应拦截器
// axios.interceptors.response.use(response => {
//         if(response.data.err==="authentication_failed"){//token失效
//             Vue.prototype.$message({
//                 message: "请重新登陆",
//                 type: 'warning'
//             });
//             router.replace({
//                 path: 'login',
//             });
//         }
//         return response;
//     },
//     error => {
//     //console.log(error);
//         if(error.response.status!==undefined){
//             if(error.response.status===403){
//                 router.replace({
//                     path: 'login',
//                 });
//             }else{
//                 Vue.prototype.$message({
//                     message: "数据请求出错："+error.response.status,
//                     type: 'warning'
//                 });
//             }
//         }
//         return Promise.reject(error.response.data)  // 返回接口返回的错误信息
//     });

//前置导航守卫
router.beforeEach((to, from, next) => {
    const role = localStorage.getItem('ms_username');
    if(!role && to.path !== '/login'){//如果没有登陆，并且目标路由不是login--->跳转到登陆页
        next('/login');
    }else if(to.meta.permission){//如果是管理员，则允许进入权限页面,      ！该用户所有的权限路由，由后台返回一个数组，当to.path在数组里面时，路由放行，否则403
        role === 'admin' ? next() : next('/403');
    }else{
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        }else{
            next();
        }
    }
});
//权限
//1、路由权限列表，在导航中拦截
//2、菜单栏权限列表，渲染时过滤掉
//3、操作权限列表，渲染时过滤掉
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
