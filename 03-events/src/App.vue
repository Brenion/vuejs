<script setup>
import { ref } from "vue";
const secret = ref(false);

const secretAction = () => {
  alert("Vous avez trouvé la première action secrète");
  secret.value = true;
};
const sounds = ref([
  {
    artists: "YYVNG & BELLORUM",
    title: "Astro",
    duration: "2:46",
    artwork:
      "https://i1.sndcdn.com/artworks-GSMd2z7tGhXNeQnn-qAHqjw-t500x500.jpg",
  },
  {
    artists: "Teddy Killerz",
    title: "Sticky",
    duration: "2:43",
    artwork:
      "https://i1.sndcdn.com/artworks-uVc8oaRL0u1vLO0P-6Bwx5g-t500x500.jpg",
  },
  {
    artists: "YDG X GAWM",
    title: "Overkill",
    duration: "3:12",
    artwork:
      "https://i1.sndcdn.com/artworks-g2qtzDELwwtHhPid-HyFyrQ-t500x500.jpg",
  },
]);

const onClickRow = (title) => {
  console.log("ROW CLICK : " + title);
};
const onClickIcon = (artists) => {
  console.log("ICON CLICK : " + artists);
};

const destroyApp = () => {
  sounds.value = [];
  secret.value = false;

  alert(
    "Vous avez trouvé la deuxième action secrète. Tout le monde est mort sauf le chat d'Alex"
  );
};
</script>

<template>
  <div class="bg-slate-50 flex flex-col min-h-screen">
    <header
      class="mt-6 mx-8 shadow-md rounded-md flex justify-center bg-white overflow-hidden"
      @click.alt.once="secretAction"
    >
      <img src="/logo.png" alt="logo" class="w-16 animation-image" />
    </header>
    <main class="container mx-auto m-8 border-2 border-dashed rounded p-8">
      <div
        class="grid grid-cols-5 items-center py-3 px-4 rounded cursor-pointer duration-200 hover:bg-gray-300 hover:bg-opacity-70"
        v-for="({ title, artists, artwork, duration }, index) in sounds"
        @click="onClickRow(title)"
        :key="index"
      >
        <img :src="artwork" :alt="title" class="w-16" />
        <p class="font-semibold">{{ artists }}</p>
        <p>{{ title }}</p>
        <p>{{ duration }}</p>
        <button type="button" @click.stop="onClickIcon(artists)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-emerald-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </button>
      </div>
      <div v-if="secret">
        <h2 class="title primary">Entrez l'action secrète</h2>
        <div class="form-control input">
          <input type="text" @keyup.shift.space="destroyApp" />
        </div>
      </div>
    </main>
  </div>
</template>
