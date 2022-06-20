<script setup>
defineProps(["darwin"]);
const emit = defineEmits(["onReset"]);
const resetSearch = () => {
  emit("onReset");
};
</script>
<template>
  <div>
    <div v-for="(darwin, index) in darwin" :key="index" class="p-4 mb-4">
      <h2 class="font-semibold text-2xl border-b-2">{{ darwin.name }}</h2>
      <p class="p-4 font-bold">{{ darwin.death }}</p>
      <span class="p-4 mb-5">{{ darwin.description }}</span>
    </div>
    <div class="flex justify-end">
      <button class="btn cancel" @click="resetSearch">
        Réinitialiser le resultat
      </button>
    </div>
  </div>
</template>
