import Vue from 'vue'
import VueRouter from 'vue-router'
import MemoList from '../views/MemoList.vue'

import PageView from '../views/PageView.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: MemoList
  },

  {
    path: '/list:id',
    name: 'listpage',
    component: function () {
      return import('../views/PageView.vue')
    }
  },

  {
    path: '/writeform',
    name: 'writeform',
    component: function() {
      return import('../views/WriteForm.vue')
    }
  },

  {
    path: '/memopush/:id',
    name: 'PageView',
    component: PageView
  },



]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
