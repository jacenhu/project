import Vue from 'vue'
import Router from 'vue-router'
import BaseLayer from '@/components/BaseLayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BaseLayer',
      component: BaseLayer
    }
  ]
})
