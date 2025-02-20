import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import ProjectDetail from '@/views/ProjectDetail.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Portfolio | Home' }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: { title: 'Portfolio | Projects' },
      children: [
        {
          path: '/projects/:title',
          name: 'project-detail',
          component: ProjectDetail
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { title: 'Portfolio | About' }
    }
  ]
})

router.beforeEach((to) => {
  if (to.name === 'project-detail') {
    to.meta.title = `Portfolio | ${to.params.title}`
  }
  document.title = String(to.meta?.title) ?? 'Portfolio'
})

export default router
