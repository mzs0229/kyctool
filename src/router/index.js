import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mail from '../views/Mail.vue'
import KycTool from '../views/KycTool.vue'
import DocType from '../components/DocType.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/doctype',
    name: 'DocType',
    component: DocType
  },
  {
    path: '/kyctool',
    component: KycTool
  },
  {
    path: '/mail',
    component: Mail
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
