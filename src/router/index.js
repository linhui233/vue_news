import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index'
import Mine from '@/components/pages/mine'
import Page2 from '@/components/pages/page2'
import Page3 from '@/components/pages/page3'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/page2',
      component: Page2
    },
    {
      path: '/page3',
      component: Page3
    }
  ]
})
