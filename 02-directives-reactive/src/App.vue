<script setup>
import { reactive, ref } from "vue";
const state = reactive({
  sound: {
    artists: "YYVNG & BELLORUM",
    title: "Astro",
    artwork:
      "https://i1.sndcdn.com/artworks-GSMd2z7tGhXNeQnn-qAHqjw-t500x500.jpg",
    duration: "2:46",
  },
});
let showMusic = ref(false);
const toggleMusic = () => {
  showMusic.value = !showMusic.value;
  console.log(showMusic); // on option un proxy qui contient une clé value avec la valeur
};
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <header
      class="mt-6 mx-8 shadow-md rounded-md flex justify-center bg-white overflow-hidden"
    >
      <img src="/logo.png" alt="logo" class="w-16 animation-image" />
    </header>
    <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
      <div class="flex items-center">
        <img
          v-bind:src="state.sound.artwork"
          :alt="state.sound.title"
          class="h-32 mr-8"
        />
        <div class="flex flex-grow">
          <button type="button" v-on:click="toggleMusic">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 text-orange-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              v-if="!showMusic"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 text-orange-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              v-else
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <div class="ml-4" v-if="showMusic">
            <h3 class="text-sm text-gray-500">{{ state.sound.artists }}</h3>
            <h2 class="text-xl mt-1">
              {{ state.sound.title }}
              <span class="ml-16 text-xs text-gray-500">{{
                state.sound.duration
              }}</span>
            </h2>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
