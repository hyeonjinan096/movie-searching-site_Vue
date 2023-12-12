<template>
  <Searchbar />
  <RouterView />
  <div
    v-if="$route.name === 'Home'"
    class="bg-gray-900 w-full h-screen flex flex-grow flex-col items-center">
    <h1 class="mt-20 text-white text-center selection:font-semibold text-4xl">
      Search movie!
    </h1>
  </div>
</template>

<script setup lang="ts">
import Searchbar from '../components/Searchbar.vue';
import { RouterView } from 'vue-router';
</script>
