import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue';
import Index from '../views/index.vue';
import PositionListPage from '../views/position/PositionListPage';
import PositionDetailPage from '../views/position/PositionDetailPage';


// 组件测试


Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/login', name: 'login', component: Login },
  { path: '/position-list', name: 'position', component: PositionListPage },
  { path: '/position-detail', name: 'PositionDetailPage', component: PositionDetailPage },
]

const router = new VueRouter({
  routes
})

export default router
