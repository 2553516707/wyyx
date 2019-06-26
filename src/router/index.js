import Vue from 'vue'
import Router from 'vue-router'
import Super from '../page/Super Membership .vue'
import rem from "../rem"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Super',
      component: Super
    }
  ]
})
