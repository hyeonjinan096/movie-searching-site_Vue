import { createRouter, createWebHistory } from 'vue-router';
import Home from '~/vues/Home.vue';
import MovieList from '~/components/MovieList.vue';
import MovieDetail from '~/components/MovieDetail.vue';
export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'search/:search',
          name: 'Search',
          component: MovieList,
          meta: { title: 'MovieList' }
        },
        {
          path: '/detail/:imdbiId',
          name: 'Detail',
          component: MovieDetail,
          meta: { title: 'MovieDetail' }
        },
      ],
    },
  ],
});
