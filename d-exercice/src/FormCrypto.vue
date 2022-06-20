<script setup>
import { inject, ref, computed } from "vue";
const isLogged = inject("isLogged");
const isValided = ref(true);

const cryptoValidate = computed(() => {
  return !isLogged.value || !cryptos.value.title || !cryptos.value.svg;
});
const emit = defineEmits(["onSendEmit", "onReset"]);

const sendEmit = () => {
  if (cryptos.value.svg.includes("svg", "path", "/svg")) {
    isValided.value = true;
    emit("onSendEmit", cryptos);
    cryptos.value = {
      title: "",
      svg: "",
    };
  } else isValided.value = false;
};
const sendReset = () => {
  emit("onReset");
  cryptos.value = {
    title: "",
    svg: "",
  };
};

const cryptos = ref({
  title: "",
  svg: "",
});
</script>

<template>
  <div class="form-control label input textarea my-6">
    <form>
      <label for="title">
        <h2 class="font-bold mx-2">Nom de la crypto</h2></label
      >
      <input
        type="text"
        name="title"
        id="title"
        v-model="cryptos.title"
        :disabled="!isLogged"
      />
      <label for="svg"> <h2 class="font-bold mx-2">SVG</h2></label>
      <textarea
        name="svg"
        id="svg"
        v-model="cryptos.svg"
        class="w-full h-48 rounded-lg resize-none"
        :disabled="!isLogged"
      />

      <div class="h-6 my-2 text-center text-red-700">
        <Transition name="fade">
          <p v-if="!isValided">Le format de l'image n'est pas valide</p>
        </Transition>
      </div>

      <div class="w-full flex justify-around">
        <button
          type="submit"
          class="btn primary mt-4"
          :disabled="cryptoValidate"
          @click.prevent="sendEmit"
        >
          Enregistrer
        </button>
        <button
          type="submit"
          class="btn cancel mt-4 !px-8"
          :disabled="!isLogged || !cryptos.title || !cryptos.svg"
          @click.prevent="sendReset"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
</template>
