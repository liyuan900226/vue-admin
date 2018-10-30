<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>   <!-----这里的router激活时会以index为路由进行跳转------->
            <template v-for="item in items">                                        <!-----这里的unique-opened激活时会保持一个子菜单展开------->
                <!----------如果有子菜单----------->
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <!----------如果没有子菜单----------->
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from "./bus.js"
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-menu',
                        index: 'dashboard',
                        title: '产品管理',
                        power: 'view'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: 'banner',
                        title: '轮播管理',
                        power: 'view'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: 'case',
                        title: '案例管理',
                        power: 'view'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: 'new',
                        title: '新闻管理',
                        power: 'view'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: 'account',
                        title: '账户管理',
                        power: 'view'
                    },





                    {
                        icon: 'el-icon-share',
                        index: '3',
                        title: '同步闯关',
                        subs: [
                            {
                                index: 'chinese',
                                title: '语文闯关'
                            },
                            {
                                index: 'math',
                                title: '数学闯关'
                            },
                            {
                                index: 'english',
                                title: '英语闯关'
                            },
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
