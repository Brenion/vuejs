<script setup>
import { ref, watch } from "vue";
import Result from "./result.vue";

const darwin = ref([]);
const selectDarwin = ref();

watch(darwin, async () => {
  if (darwin.value.length > 3) {
    const res = await fetch(`http://localhost:8000/darwins?q=${darwin.value}`);
    selectDarwin.value = await res.json();
  } else selectDarwin.value = null;
});
const onReset = () => {
  selectDarwin.value = null;
  darwin.value = "";
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
      <div class="form-control input my-8">
        <label for="darwin">
          <h2 class="text-xl font-bold mx-2">Rechercher</h2></label
        >
        <input type="text" name="darwin" id="darwin" v-model="darwin" />
      </div>
      <div
        class="flex flex-col m-8 border-2 p-2 bg-white rounded-lg"
        v-if="selectDarwin && selectDarwin.length != 0"
      >
        <Result :darwin="selectDarwin" @on-reset="onReset" />
      </div>
    </main>
  </div>
</template>
