import { createRouter, createWebHistory } from 'vue-router'
import Checkout from '../views/Checkout.vue'
import Products from '../views/Products.vue'

const routes = [
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
