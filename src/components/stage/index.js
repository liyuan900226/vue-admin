export default [
    {// 新闻
        path: '/news',
        component: resolve => require(['./News.vue'], resolve),
        meta: { title: '新闻管理' }
    },
    {// 案例
        path: '/case',
        component: resolve => require(['./Cases.vue'], resolve),
        meta: { title: '案例管理' }
    },
    {// 账户管理
        path: '/account',
        component: resolve => require(['./Account.vue'], resolve),
        meta: { title: '账户管理' }
    }
]