<script setup lang="ts">
import { useMovieStore } from '../store/movies';
import LoadingPage from './LoadingPage.vue';

const movieStore = useMovieStore();
</script>

<template>
  <div class="bg-gray-900 w-100 h-screen">
  <div v-if="movieStore.isLoading">
    <LoadingPage />
  </div>
  <div class="flex flex-wrap w-full gap-4 p-4 bg-gray-900 ">
    <ul class="flex flex-wrap w-full mx-10 justify-center items-center">
      <li
        v-for="movie in movieStore.movies"
        :key="movie.imdbID"
        class="relative mx-2 my-2  hover:scale-90">
        <RouterLink :to="{ name: 'Detail', params: { imdbiId: movie.imdbID } }">
            <img
              :src="movie.Poster"
              alt=""
              class="w-full h-full object-cover overflow-hidden rounded-lg transition hover:brightness-50"
            />
            <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center transition duration-300 opacity-0 hover:opacity-100">
              <h2 class="text-white font-semibold text-lg md:text-xl lg:text-2xl  ">
                {{ movie.Title }}
              </h2>
            </div>
        </RouterLink>
      </li>
    </ul>
  </div>
</div>
</template>
