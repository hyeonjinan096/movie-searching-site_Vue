<script setup lang="ts">
import { ref } from 'vue';
import { useMovieStore } from '../store/movies';
const movieStore = useMovieStore();
const title = ref('');
title.value = 'frozen';
async function searchMovies() {
  await movieStore.readMovies(title.value);
}
function resetMovies() {
  title.value = '';
  movieStore.$reset();
}
</script>

<template>
  <div class="flex items-center space-x-4 p-4 bg-gray-900 text-white">
    <input
      v-model="title"
      @keydown.enter="searchMovies"
      class="px-4 py-2 bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
    />
    <button
      @click="searchMovies"
      class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-300"
    >
      Search
    </button>
    <button
      @click="resetMovies"
      class="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition duration-300"
    >
      Reset
    </button>
  </div>
</template>