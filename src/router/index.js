import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import AboutView from '@/views/AboutView.vue'
import SciQuiz from '@/views/projects/SciQuiz.vue'
import FLAGMS from '@/views/projects/FLAGMS.vue'
import AATV from '@/views/projects/AATV.vue'
import DTRApp from '@/views/projects/DTRApp.vue'
import ImaginaryFriends from '@/views/projects/ImaginaryFriends.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/projects',
      component: ProjectsView,
      children: [
        {
          path: '/projects/sciquiz',
          component: SciQuiz
        },
        {
          path: '/projects/imaginary-friends',
          component: ImaginaryFriends
        },
        {
          path: '/projects/flagms',
          component: FLAGMS
        },
        {
          path: '/projects/aa-tv',
          component: AATV
        },
        {
          path: '/projects/dtr-app',
          component: DTRApp
        },
      ]
    },
    {
      path: '/about',
      component: AboutView
    },
  ]
})

export default router
