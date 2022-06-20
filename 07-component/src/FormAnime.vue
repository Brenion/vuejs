<script setup>
import { ref, computed } from "vue";

const anime = ref({
  title: "",
  extra: "",
  day: "",
  month: "",
});

const animeValidation = computed(() => {
  return (
    !anime.value.title ||
    !anime.value.extra ||
    !anime.value.day ||
    !anime.value.month
  );
});
</script>

<template>
  <form
    class="mt-4"
    @submit.prevent="$emit('onGoulagwe', anime)"
    @reset="$emit('onReset')"
  >
    <h2 class="title primary">Ajouter un anime</h2>
    <div class="grid grid-cols-4 gap-8">
      <div class="form-control input">
        <label for="title">Titre de l'animé</label>
        <input type="text" id="title" v-model="anime.title" />
      </div>
      <div class="form-control input">
        <label for="extra">Information</label>
        <input type="text" id="extra" v-model="anime.extra" />
      </div>
      <div class="form-control input">
        <label for="day">Jour</label>
        <input type="text" id="day" v-model="anime.day" />
      </div>
      <div class="form-control input">
        <label for="month">Mois</label>
        <input type="text" id="month" v-model="anime.month" />
      </div>
    </div>
    <div class="mt-4 flex justify-end">
      <button type="submit" class="btn primary" :disabled="animeValidation">
        Ajouter
      </button>
      <button class="btn cancel ml-8" type="reset">Annuler</button>
    </div>
  </form>
</template>
