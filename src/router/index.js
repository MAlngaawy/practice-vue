import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'learn',
      component: () => import('../views/LearnView.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoApp.vue')
    }
  ]
})

export default router
