<script setup>
import { ref } from "vue";
import Quote from "./Quote.vue";
import CardFormation from "./CardFormation.vue";

const formations = ref([
  {
    id: 1,
    name: "Développeur Frontend/UX/UI",
    imgSrc: "https://www.vectorlogo.zone/logos/figma/figma-ar21.png",
    description: `<h2 class="text-4xl">Formation destinée aux personnes ne souhaitant pas apprendre Figma</h2>`,
  },
  {
    id: 2,
    name: "Développeur Fullstack",
    imgSrc:
      "https://img.passeportsante.net/1200x675/2022-04-19/shutterstock-1761695867.webp",
    description: `<p class="bg-red-500">Bip boup bemp</p>`,
  },
  {
    id: 3,
    name: "Développeur Tourisme",
    imgSrc:
      "https://scontent-bru2-1.xx.fbcdn.net/v/t1.6435-9/68750259_1658951047574138_7307274804124450816_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=rHU9Gb0771kAX-1TNBV&_nc_ht=scontent-bru2-1.xx&oh=00_AT8b3d71Mlm36JQww_pSRpL26L-NwiBWtNo5-8Lgt8aQsw&oe=62CE1B65",
    description: `<p class="text-5xl font-bold">JEANNNE ???????</p>`,
  },
]);
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <header
      class="mt-6 mx-8 shadow-md rounded-md flex justify-center bg-white overflow-hidden"
    >
      <img src="/logo.png" alt="logo" class="w-16 animation-image" />
    </header>
    <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
      <Quote>
        <div class="text-xl font-bold">
          "Deux tartines de confiture équivaut à une frambuche "
        </div>
        <div class="italic mt-4 text-right text-sm">- Sébastion Cardon</div>
      </Quote>
      <div class="grid grid-cols-2 gap-8 w-[1000px] mx-auto">
        <CardFormation
          v-for="formation in formations"
          :key="formation.id"
          :imgSrc="formation.imgSrc"
          :name="formation.name"
        >
          <template v-slot:header>
            <h1 class="title primary">{{ formation.name }}</h1>
          </template>
          <template v-slot:description>
            <div v-html="formation.description"></div>
          </template>
        </CardFormation>
      </div>
    </main>
  </div>
</template>
