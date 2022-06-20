<script setup>
import Header from "./ui/Header.vue";
import { ref, provide } from "vue";
const isLogged = ref(false);
const toggleLogin = () => {
  isLogged.value = !isLogged.value;
};
provide("isLogged", isLogged);
provide("toggleGoulagwe", toggleLogin);
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <Header />
    <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
      <div class="flex justify-around py-8">
        <button
          type="button"
          class="btn primary"
          v-if="!isLogged"
          @click="toggleLogin"
        >
          Se connecter
        </button>
        <button type="button" class="btn cancel" v-else @click="toggleLogin">
          Se déconnecter
        </button>
      </div>
    </main>
  </div>
</template>
