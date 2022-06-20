<script setup>
import { inject } from "vue";
const isLogged = inject("isLogged");
const toggleLogin = inject("toggleLogin");
</script>
<template>
  <header
    class="border mt-6 mx-8 shadow-lg rounded-md flex justify-between items-center px-8 bg-white overflow-hidden"
  >
    <img src="/logo.png" alt="logo" class="w-16 animation-image" />
    <div>
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
  </header>
</template>
