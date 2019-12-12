import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Categories from '../views/Categories'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: "/categories",
    name: 'categories',
    component: Categories
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
