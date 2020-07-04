import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './static/css/common.css'
import './static/css/uikit.min.css'
import './static/js/uikit.min.js'
import './static/icon/css/font-awesome.min.css'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
