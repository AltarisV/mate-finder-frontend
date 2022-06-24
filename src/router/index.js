import { createRouter, createWebHistory } from 'vue-router'
import MateView from '@/views/MateView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FlavoursView from '@/views/FlavoursView'
import FinderView from '@/views/FinderView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/mates',
    name: 'mates',
    component: MateView
  },
  {
    path: '/flavours',
    name: 'flavours',
    component: FlavoursView
  },
  {
    path: '/finder',
    name: 'finder',
    component: FinderView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
