<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useMovieStore } from '../store/movies';
import LoadingPage from './LoadingPage.vue';

const movieStore = useMovieStore();
const $route = useRoute();

const movie = reactive({
  Title: '',
  Poster: '',
  Director: '',
  Plot: '',
  Genre: '',
  Runtime: '',
  Released: '',
  imdbRating: '',
});

onMounted(async () => {
  await movieStore.readMovieDetails($route.params.imdbiId as string);
  Object.assign(movie, movieStore.movie);
});
</script>

<template>
  <div class="h-screen bg-gray-900">
    <div
      v-if="movieStore.isLoading"
      class="bg-gray-900 text-white">
      <LoadingPage />
    </div>
    <div class="grid place-items-center bg-gray-900 text-white">
      <div class="flex p-4 w-4/5 m-10">
        <img
          :src="movie.Poster"
          alt=""
          class="object-cover rounded-lg mr-4 mb-4 w-4/12" />
        <div class="w-6/12">
          <h1 class="text-3xl font-bold mb-2">{{ movie.Title }}</h1>
          <div class="text-gray-300 mb-2">{{ movie.Director }}</div>
          <div class="text-gray-400 mb-4">{{ movie.Plot }}</div>
          <div class="text-gray-300 mb-2">{{ movie.Genre }}</div>
          <div class="text-gray-300 mb-2">{{ movie.Runtime }}</div>
          <div class="text-gray-300 mb-2">{{ movie.Released }}</div>
          <div class="text-purple-500 font-bold">{{ movie.imdbRating }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
