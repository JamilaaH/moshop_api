import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

  },
  {
    path:'/register',
    name:'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),

  },
  {
    path:'/login',
    name:'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),

  }, 
  {
    path:'/profil',
    name:'Profil',
    component: () => import(/* webpackChunkName: "profil" */ '../views/Profil.vue'),
    meta: { requiresAuth: true }
  },
  {
    path:'/edit',
    name:'Edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/EditProfil.vue'),
    meta: { requiresAuth: true }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
