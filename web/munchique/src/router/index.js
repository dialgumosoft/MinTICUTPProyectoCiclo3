import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/users.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/products.vue')
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import('../views/productos.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
