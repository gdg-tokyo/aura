import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './registerServiceWorker'
// import(/* webpackPreload: true */ 'roboto-fontface/css/roboto/roboto-fontface.css')
import(/* webpackPreload: true */  'material-design-icons-iconfont/dist/material-design-icons.css')
import(/* webpackPreload: true */  './style.css')
import './filters/truncate'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
