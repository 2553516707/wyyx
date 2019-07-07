import Vue from 'vue'
import Router from 'vue-router'
import Classify from '@/page/classify.vue'//分类页
import csifySet from '@/page/classify-set.vue'//分类详情列表

Vue.use(Router)

export default new Router({
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
    }
  ]
})
