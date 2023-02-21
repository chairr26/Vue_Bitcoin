import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import Convert1View from '../views/Convert1View.vue'
import Convert2View from '../views/Convert2View.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
    {
    path: '/btctoidr',
    name: 'btctoidr',
    component: Convert1View
  },
    {
    path: '/idrtobtc',
    name: 'idrtobtc',
    component: Convert2View
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
