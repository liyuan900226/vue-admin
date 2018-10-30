export default [
    {   //系统首页
        path: '/dashboard',
        component: resolve => require(['./Dashboard.vue'], resolve),
        meta: { title: '产品管理' }
    },
    {   //最新消息页
        path: '/tabs',
        component: resolve => require(['./Tabs.vue'], resolve),
        meta: { title: 'tab选项卡' }
    },
    {
        // 权限页面
        path: '/permission',
        component: resolve => require(['./Permission.vue'], resolve),
        meta: { title: '权限测试', permission: true }
    },
    {
        path: '/404',
        component: resolve => require(['./404.vue'], resolve),
        meta: { title: '页面找不到' }
    },
    {
        path: '/403',
        component: resolve => require(['./403.vue'], resolve),
        meta: { title: '没有权限' }
    },

    {
        path: '/test',
        component: resolve => require(['./test.vue'], resolve),
        meta: { title: '测试页面' }
    },
]