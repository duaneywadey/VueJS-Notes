import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NewHome from '../views/NewHome.vue'
import CategoriesPageView from '../views/CategoriesPageView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: NewHome,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/categories',
      name: 'Categories',
      component: CategoriesPageView,
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: Jobs,
    },
    {
      path: '/jobs/:id',
      name: 'JobDetails',
      component: JobDetails,
      props: true
    },
  ],
})

export default router
