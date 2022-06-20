<script setup>
import { ref, onMounted, watch } from "vue";

const countries = ref([]);
const country = ref();
const selectCountry = ref();
onMounted(async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/region/europe?fields=flag,name"
  );
  countries.value = await res.json();
});

watch(country, async () => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${country.value.name.common}`
  );
  selectCountry.value = (await res.json())[0];
});
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <header
      class="mt-6 mx-8 shadow-md rounded-md flex justify-center bg-white overflow-hidden"
    >
      <img src="/logo.png" alt="logo" class="w-16 animation-image" />
    </header>
    <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
      <div class="form-control select w-64">
        <label for="country">Choisis un pays</label>
        <select name="country" id="country" v-model="country">
          <option
            v-for="(element, index) in countries"
            :key="index"
            :value="element"
          >
            {{ element.flag }}
            {{ element.name.common }}
          </option>
        </select>
      </div>
      <div
        class="flex flex-col items-center space-y-4 mt-8"
        v-if="selectCountry"
      >
        <img
          :src="selectCountry.flags.svg"
          :alt="selectCountry.name.common"
          class="w-64"
        />
        <h2 class="font-semibold text-4xl">{{ selectCountry.name.common }}</h2>
        <h2 class="font-semibold text-4xl">
          capital : {{ selectCountry.capital[0] }}
        </h2>
      </div>
    </main>
  </div>
</template>
