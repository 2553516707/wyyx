import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import Test from '@/page/test'

import Details from "@/page/details"
import Cycimnr from "@/page/cycimnr"


import Super from '../page/Super Membership .vue'
import Ad1 from '../page/ad1.vue'
import Ad2 from '../page/ad2.vue'
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
      path:"/cycimnr",
      name:Cycimnr,
      component:Cycimnr
    },
    {
      path: '/ad1',
      name: 'ad1',
      component: Ad1
    },
    {
      path: '/ad2',
      name: 'ad2',
      component: Ad2
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
