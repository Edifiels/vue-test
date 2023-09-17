import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/my_history',
      name: 'my_history',
      component: () => import('../views/MyHistoryView.vue')
    },
    {
      path: '/my_selfie',
      name: 'my_selfie',
      component: () => import('../views/MySelfieView.vue')
    },
    {
      path: '/my_school_photo',
      name: 'my_school_photo',
      component: () => import('../views/MySchoolPhotoView.vue')
    },
    {
      path: '/my_video:videoSource',
      name: 'my_video',
      component: () => import('../views/MyVideoView.vue'),
      props: true 
    }
  ]
})

export default router
