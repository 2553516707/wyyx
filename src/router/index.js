import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Classify from '@/page/classify.vue'//分类页
import csifySet from '@/page/classify-set.vue'//分类详情列表
=======
import index from '@/page/index'
import Test from '@/page/test'
>>>>>>> 5aab8b2a0ff1ce07e40585c390381f25151f2cb7

import Details from "@/page/details"
import Cycimnr from "@/page/cycimnr"
import ShoppingCart from "@/page/shoppingCart"
import Login from "../components/login"


import Super from '../page/Super Membership .vue'
import Ad1 from '../page/ad1.vue'
import Ad2 from '../page/ad2.vue'
Vue.use(Router)

export default new Router({
<<<<<<< HEAD
  mode: 'history',
  routes: [
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/csifyset/:id',
      name: 'csifySet',
      component: csifySet
=======
  mode:"history",
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
      name:'cycimnr',
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
    },
    {
      path: '/shoppingCart',
      name: ShoppingCart,
      component: ShoppingCart
    },
    {
      path: '/login',
      name: Login,
      component: Login
>>>>>>> 5aab8b2a0ff1ce07e40585c390381f25151f2cb7
    }
  ]
})
