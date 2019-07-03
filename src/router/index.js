import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import index from '@/page/index'
import Axios from 'axios'
import Details from "@/page/details"
import Imnr from "@/page/imnr"
Vue.prototype.$ajax=Axios

=======
import Super from '../page/Super Membership .vue'
import rem from "../rem"
>>>>>>> d2b1d5ea92974ac2e87c51d17c827a126d05c44e

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'index',
      component: index
    },
    {
      path:"/details",
      name:Details,
      component:Details
    },
    {
      path:"/imnr",
      name:Imnr,
      component:Imnr
=======
      name: 'Super',
      component: Super
>>>>>>> d2b1d5ea92974ac2e87c51d17c827a126d05c44e
    }
  ]
})
