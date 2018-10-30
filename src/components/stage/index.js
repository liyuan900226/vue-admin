export default [
    {// 同步闯关-->语文
        path: '/chinese',
        component: resolve => require(['./chinese/Chinese.vue'], resolve),
        meta: { title: '语文闯关' }
    },
    {// 同步闯关-->数学
        path: '/math',
        component: resolve => require(['./math/math.vue'], resolve),
        meta: { title: '数学闯关' }
    },
    {// 同步闯关-->英语
        path: '/english',
        component: resolve => require(['./english/English.vue'], resolve),
        meta: { title: '英语闯关' }
    },
]