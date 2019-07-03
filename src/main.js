// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import css from "./router/common.css"
import rem from './router/rem'
import indexCss from "./page/index.css"
import 'swiper/dist/css/swiper.css';
import VueAwesomeSwiper from "vue-awesome-swiper"
Vue.use(VueAwesomeSwiper)



=======
>>>>>>> d2b1d5ea92974ac2e87c51d17c827a126d05c44e
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  css,
  rem,
  indexCss,
  components: { App },
  template: '<App/>'
})
