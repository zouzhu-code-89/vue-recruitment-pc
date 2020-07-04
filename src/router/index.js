import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue';
import Index from '../views/index.vue';
import PositionListPage from '../views/position/PositionListPage';


// 组件测试


Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/login', name: 'login', component: Login },
  { path: '/position-list', name: 'position', component: PositionListPage }
]

const router = new VueRouter({
  routes
})

export default router
