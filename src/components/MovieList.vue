<script setup lang="ts">
import { useMovieStore } from '~/store/movies';
import LoadingPage from './LoadingPage.vue';
import defaultPoster from '../assets/no_image.png';
import router from '~/routes';

const movieStore = useMovieStore();

function replaceByDefault(e: Event) {
  const target = e.target as HTMLImageElement;
  target.src = defaultPoster;
  target.classList.add('defaultpage');
}

async function goMovieDetail(movieId: string) {
  router.push({
    name: 'Detail',
    params: { imdbiId: movieId },
  });
}
</script>

<template>
  <div class="bg-gray-900 w-full h-screen">
    <div v-if="movieStore.isLoading">
      <LoadingPage />
    </div>
    <div class="flex flex-wrap w-full gap-4 p-4 bg-gray-900">
      <ul class="flex flex-wrap w-full mx-10 justify-center items-center">
        <li
          v-for="movie in movieStore.movies"
          :key="movie.imdbID"
          class="relative mx-2 my-2">
          <div
            class="item relative w-full h-full group"
            @click="goMovieDetail(movie.imdbID)">
            <img
              :src="movie.Poster"
              @error="replaceByDefault"
              alt="movie poster"
              class="overflow-hidden rounded-lg transition group-hover:scale-90 object-cover group-hover:brightness-50" />
            <div
              class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100">
              <h2
                class="text-white font-semibold text-lg md:text-xl lg:text-2xl">
                {{ movie.Title }}
              </h2>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.defaultpage {
  width: 300px;
  filter: invert(0.35);
}
</style>
