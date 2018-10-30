import Vue from 'vue'
import Vuex from 'vuex'
//引入vuex子模块
import mod1 from "./mod1.js"
import mod2 from "./mod2.js"


Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        a:mod1,
        b:mod2
    }
});

export default store