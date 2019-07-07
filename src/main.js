import Vue from 'vue'
import App from './App'
import router from './router'
import rem from '../rem'
import Axios from 'axios'
Vue.prototype.$http = Axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  rem,
  components: { App },
  template: '<App/>'
})
