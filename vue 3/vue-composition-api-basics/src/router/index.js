import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModalsView from '../views/ModalsView.vue'
import PostsView from '../views/PostsView.vue'
import PostsDetailView from '../views/PostsDetailView.vue'
import SliderView from '../views/SliderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsView
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: PostsDetailView
    },
    {
      path: '/slider',
      name: 'slider',
      component: SliderView
    }
  ]
})

export default router
