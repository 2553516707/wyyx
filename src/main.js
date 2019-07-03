// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ad1 from '../static/css/ad1.css'
import Axios from 'axios'
import Rem from './rem'
Vue.config.productionTip = false
Vue.prototype.$http=Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ad1,
  Rem,
  components: { App },
  template: '<App/>'
})
