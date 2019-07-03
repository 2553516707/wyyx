// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import ad1 from '../static/css/ad1.css'
import Axios from 'axios'
import Rem from './rem'
=======
import  "./router/common.css"
import  './router/rem'
import  "./page/index.css"
import 'swiper/dist/css/swiper.css';
import VueAwesomeSwiper from "vue-awesome-swiper"
Vue.use(VueAwesomeSwiper)



>>>>>>> 51ef62e8bfa7ccffafe43aba2c631993f535abae
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
