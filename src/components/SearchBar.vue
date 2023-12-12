<script setup lang="ts">
import { ref } from 'vue';
import router from '~/routes';
import { useMovieStore } from '~/store/movies';
const movieStore = useMovieStore();
const title = ref('');
async function searchMovies() {
  await movieStore.readMovies(title.value);
  router.push({
    name: 'Search',
    params: { search: title.value },
  });
}
function resetMovies() {
  title.value = '';
  movieStore.$reset();
  router.push({
    name: 'Home',
  });
}
</script>

<template>
  <div class="flex items-center space-x-4 p-4 bg-gray-900 text-white">
    <button
      @click="resetMovies"
      class="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition duration-300">
      Home
    </button>
    <div>
      <form @submit.prevent="searchMovies">
        <input
          v-model="title"
          class="px-4 py-2 bg-gray-800 text-white border rounded border-gray-700 focus:outline-none focus:border-purple-500"
          placeholder="영화를 검색하세요." />
        <button
          class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-300">
          Search
        </button>
      </form>
    </div>
  </div>
</template>
