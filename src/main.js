import Vue from 'vue'
import vuescroll from 'vuescroll'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'normalize.css'
import './main.scss'

Vue.use(vuescroll)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
