<script setup>
import Header from "./components/Header.vue";
const content = "Votre contenu ici !";
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <Header />
    <main class="container mx-auto m-8 p-8">
      <router-view />
    </main>
  </div>
</template>
