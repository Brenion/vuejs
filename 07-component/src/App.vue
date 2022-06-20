<script setup>
import { ref } from "vue";
import ListAnime from "./ListAnime.vue";
import FormAnime from "./FormAnime.vue";

const showForm = ref(false);

const toggleForm = () => {
  showForm.value = !showForm.value;
};
const animes = ref([
  {
    title: "Yu-Gi-Oh! Duel Monsters",
    extra: "Episodes 1 à 20",
    day: "1er",
    month: "Juin",
  },
  {
    title: "One Piece OAV",
    extra: "7 OAV",
    day: "20",
    month: "Juin",
  },
  {
    title: "Capitaine Flam",
    extra: "Intégrale",
    day: "27",
    month: "Juin",
  },
]);
const onSubmitAnime = (anime) => {
  animes.value.push(anime);
  toggleForm();
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
      <div class="mb-8 py-4 px-8 bg-white shadow rounded-md" v-if="showForm">
        <FormAnime @on-goulagwe="onSubmitAnime" @on-resest="toggleForm" />
      </div>
      <div class="flex justify-end mb-8" v-else>
        <button type="button" class="btn primary" @click="toggleForm">
          Créer un nouvel anime
        </button>
      </div>
      <div class="bg-gradient-to-b from-indigo-800 to-cyan-800 rounded-md">
        <ListAnime :animes="animes" />
      </div>
    </main>
  </div>
</template>
