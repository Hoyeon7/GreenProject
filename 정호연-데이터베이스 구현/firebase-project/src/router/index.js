

import Vue from 'vue'
import VueRouter from 'vue-router'

import StartPage from '../components/StartPage.vue'

import MainPage from '../components/MainPage.vue'
import LoginPage from '../components/LoginPage.vue'

import RegisterPage from '../components/RegisterPage.vue'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'StartPage',
    component: StartPage
  },

  {
    path: '/main',
    component: MainPage
  },

  {
    path: '/login',
    component: LoginPage
  },

  {
    path: '/register',
    component: RegisterPage
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
