import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import pages from '../components/page/index'
import stages from '../components/stage/index'

var children=pages.concat(stages)
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:children
        },
        {
            path: '/login',
            name:"login",
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
