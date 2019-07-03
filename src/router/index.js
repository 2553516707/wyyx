import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import Axios from 'axios'
import Details from "@/page/details"
import Imnr from "@/page/imnr"
Vue.prototype.$ajax=Axios

import Super from '../page/Super Membership .vue'
import rem from "../rem"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})
