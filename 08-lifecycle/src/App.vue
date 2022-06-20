<script setup>
import { ref, onMounted } from "vue";
const countries = ref([]);
const country = ref();
onMounted(async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/region/europe?fields=flag,name"
  );
  countries.value = await res.json();
});
const showCountry = () => {
  console.log(country.value);
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
      <div class="form-control select w-64">
        <label for="country">choisir un pays</label>
        <select name="country" id="country" v-model="country">
          <option
            v-for="(element, index) in countries"
            :key="index"
            :value="element"
          >
            {{ element.flag }} - {{ element.name.common }}
          </option>
        </select>
      </div>
      <button
        class="btn primary mt-8"
        type="button"
        @click="showCountry"
        :disabled="!country"
      >
        Montrez le pays de mes reves
      </button>
    </main>
  </div>
</template>
