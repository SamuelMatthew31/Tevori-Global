import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    // Arahkan hash routes ke home (berhubung navigasi mengandalkan custom JS scrollBehavior anchor di home)
    { path: '/about', redirect: '/#about' },
    { path: '/services', redirect: '/#services' },
    { path: '/contact', redirect: '/#contact' },
    
    // Halaman Produk
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/products/ProductsView.vue')
    },
    
    // Halaman Insights / Artikel
    {
      path: '/insights',
      name: 'insights',
      component: () => import('../views/insights/InsightsView.vue')
    },
    {
      path: '/insights/:slug',
      name: 'insightDetail',
      component: () => import('../views/insights/InsightDetailView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
