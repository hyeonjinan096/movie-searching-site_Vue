import { createRouter, createWebHistory } from 'vue-router'
import Home from '../vues/Home.vue'
import Detail from '../vues/Detail.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/detail/:imdbiId',
      name: 'Detail',
      component: Detail
    }
  ]
})