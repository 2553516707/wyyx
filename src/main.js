import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import rem from '../rem'
import Axios from 'axios'
Vue.prototype.$http = Axios
=======
import Axios from 'axios'
import qs from 'qs'
// import Db from './db/db'
import  "./router/common.css"
import  './router/rem'
import  "./page/index.css"
import 'swiper/dist/css/swiper.css';
import VueAwesomeSwiper from "vue-awesome-swiper"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
>>>>>>> 5aab8b2a0ff1ce07e40585c390381f25151f2cb7

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
<<<<<<< HEAD
  rem,
=======
  Axios,
  qs,
>>>>>>> 5aab8b2a0ff1ce07e40585c390381f25151f2cb7
  components: { App },
  template: '<App/>'
})
