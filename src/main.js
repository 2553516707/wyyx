// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import qs from 'qs'
// import Db from './db/db'
import  "./router/common.css"
import  './router/rem'
import  "./page/index.css"
import 'swiper/dist/css/swiper.css';
import VueAwesomeSwiper from "vue-awesome-swiper"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.use(VueAwesomeSwiper)

Vue.prototype.$http=Axios
Vue.prototype.$qs=qs

// console.log(Axios)
Vue.config.productionTip = false
// Vue.prototype.$http=Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Axios,
  qs,
  components: { App },
  template: '<App/>'
})
