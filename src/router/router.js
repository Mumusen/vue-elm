import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// 引入组件
import goods from '../components/goods/goods.vue'
import ratings from '../components/ratings/ratings.vue'
import seller from '../components/seller/seller.vue'

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {
    path: '/',
    name: 'goods',
    component: goods
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/seller',
    component: seller
  }
]

let router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
