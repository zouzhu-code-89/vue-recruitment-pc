import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue';


// 组件测试


Vue.use(VueRouter)

const routes = [
  {path: '/', name: '/', component: Home}
]

const router = new VueRouter({
  routes
})

export default router
