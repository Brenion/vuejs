<script setup>
import { ref } from "vue";

const sound = ref({
  title: "",
  artists: "",
  artwork: "",
  free: false,
  genres: [],
});
const onSubmit = () => {
  console.log(sound.value);
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
      <form class="grid grid-cols-2 gap-8" @submit.prevent="onSubmit">
        <div class="form-control input">
          <label for="title">Titre de la musique</label>
          <input type="text" id="title" v-model="sound.title" />
        </div>
        <div class="form-control input">
          <label for="artists">Artistes</label>
          <input type="text" id="artists" v-model="sound.artists" />
        </div>
        <div class="form-control input">
          <label for="artwork">Artwork</label>
          <input type="text" id="artwork" v-model="sound.artwork" />
        </div>
        <div>&nbsp;</div>
        <div class="form-control radio">
          <div>
            <label for="free">Gratuite</label>
            <input
              type="radio"
              id="free"
              name="freeInput"
              value="true"
              v-model="sound.free"
            />
          </div>
          <div>
            <label for="notFree">Pas gratuite</label>
            <input
              type="radio"
              id="notFree"
              name="freeInput"
              value="false"
              v-model="sound.free"
            />
          </div>
        </div>
        <div class="grid grid-cols-2">
          <h2 class="text-left font-semibold col-span-2">Style de musique</h2>
          <div class="form-control checkbox">
            <label for="rock">Rock</label>
            <input
              type="checkbox"
              id="rock"
              value="rock"
              v-model="sound.genres"
            />
          </div>
          <div class="form-control checkbox">
            <label for="clarinette">Clarinette</label>
            <input
              type="checkbox"
              id="clarinette"
              value="clarinette"
              v-model="sound.genres"
            />
          </div>
          <div class="form-control checkbox">
            <label for="tektonik">Tektonik</label>
            <input
              type="checkbox"
              id="tektonik"
              value="tektonik"
              v-model="sound.genres"
            />
          </div>
          <div class="form-control checkbox">
            <label for="pornRock">Porn Rock</label>
            <input
              type="checkbox"
              id="pornRock"
              value="pornRock"
              v-model="sound.genres"
            />
          </div>
          <div class="form-control checkbox">
            <label for="kpop">K-Pop</label>
            <input
              type="checkbox"
              id="kpop"
              value="kpop"
              v-model="sound.genres"
            />
          </div>
          <div class="form-control checkbox">
            <label for="rai">Raï Vietnamienne</label>
            <input
              type="checkbox"
              id="rai"
              value="rai"
              v-model="sound.genres"
            />
          </div>
        </div>
        <div class="col-span-2">
          <button class="btn primary" type="submit">Ajouter</button>
        </div>
      </form>
    </main>
  </div>
</template>
