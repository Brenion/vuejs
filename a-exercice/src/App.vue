<script setup>
import { reactive, ref } from "vue";
const dogstyle = reactive([]);
let count = 0;
const imageDog = ref("dogstyle.jpg");
const onClickEvent = () => {
  count++;
  for (let i = 0; i < count; i++) {
    dogstyle.push({
      style: imageDog.value,
      index: count + 1,
    });
  }

  console.log(dogstyle);
};
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <header
      class="mt-6 mx-8 shadow-md rounded-md flex justify-center bg-white overflow-hidden"
    >
      <img src="/logo.png" alt="logo" class="w-16 animation-image" />
    </header>
    <main class="container mx-auto m-4 border-2 border-dashed rounded p-8">
      <button class="btn primary mx-auto my-4" @click="onClickEvent">
        Click
      </button>
      <div class="flex flex-wrap m-1">
        <div
          v-for="{ style, index } in dogstyle"
          :key="index"
          class="h-28 w-40"
        >
          <img v-bind:src="style" />
        </div>
      </div>
    </main>
  </div>
</template>
