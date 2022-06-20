<script setup>
import { ref } from "vue";

const img =
  "https://media.discordapp.net/attachments/493767680256638979/977567817501134878/20220521_154521.jpg";

const translateX = ref(0);
const translateY = ref(0);

const translate = (direction) => {
  if (direction != -1) {
    translateX.value = translateX.value + 5;
  } else {
    translateX.value = translateX.value - 5;
  }
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
      <div class="flex justify-around">
        <div class="form-control input">
          <label for="translateX">X</label>
          <input
            type="number"
            step="5"
            id="translateX"
            :class="{ 'bg-red-500 bg-opacity-50': translateX < 0 }"
            v-model="translateX"
          />
        </div>
        <div class="form-control input">
          <label for="translateY">Y</label>
          <input
            type="number"
            step="5"
            id="translateY"
            v-model="translateY"
            :class="{ 'bg-red-500 bg-opacity-50': translateY < 0 }"
            @keydown.left="translate(-1)"
            @keydown.right="translate(1)"
          />
        </div>
      </div>
      <img
        :src="img"
        alt="Chat Amaury"
        class="mt-8 w-24 cursor-pointer"
        :style="{ transform: `translate(${translateX}px, ${translateY}px)` }"
      />
    </main>
  </div>
</template>
