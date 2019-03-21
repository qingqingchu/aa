import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/components/shouye'
import count from '@/components/count'
import cart from '@/components/cart'
import search from '@/components/search'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      directives: '/shouye'
    },
    {
      path: '/shouye',
      component: shouye
    },
    {
      path: '/count',
      component: count
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/search',
      component: search
    },
  ]
})
