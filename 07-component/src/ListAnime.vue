<script setup>
import ListAnimeItem from "./ListAnimeItem.vue";
defineProps(["animes"]);
</script>
<template>
  <div class="p-8 pr-0">
    <ListAnimeItem
      v-for="(anime, index) in animes"
      :key="index"
      v-bind="anime"
    />
  </div>
</template>
