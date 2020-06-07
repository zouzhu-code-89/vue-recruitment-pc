import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


// 组件测试
const header = import('../components/common/header');


Vue.use(VueRouter)

const routes = [

]

const router = new VueRouter({
  routes
})

export default router
