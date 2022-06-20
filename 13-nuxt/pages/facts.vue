<template>
  <div>
    <h1 class="text-4xl text-red-500 p-8">{{ title }}</h1>
    <button
      class="block mx-auto px-6 rounded bg-indigo-400 text-indigo-900"
      @click.prevent="showNewUselessFact"
    >
      Montrer un fait inutile
    </button>
    <p class="m-8" v-if="fact">{{ fact.text }}</p>
  </div>
</template>

<script>
//import axios from "@nuxtjs/axios";
export default {
  name: "FactsPage",
  data() {
    return {
      title: "Savoir inutile du jour",
      fact: "",
    };
  },
  mounted: async function () {
    const factRes = await fetch(
      "https://uselessfacts.jsph.pl/random.json?language=en"
    );
    this.fact = await factRes.json();
  },
  methods: {
    showNewUselessFact: async function () {
      const factRes = await fetch(
        "https://uselessfacts.jsph.pl/random.json?language=en"
      );
      this.fact = await factRes.json();
    },
  },
};
</script>
