// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import { NavBar,Tabbar, TabbarItem , Swipe, SwipeItem } from 'vant'

Vue.use(NavBar)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Swipe).use(SwipeItem);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
