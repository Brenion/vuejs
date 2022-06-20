<script setup>
import { ref, computed } from "vue";
const revenuList = ref([]);
const depenseList = ref([]);
const title = ref();
const montant = ref();
const titleDepense = ref();
const depense = ref();

const addRevenuList = () => {
  revenuList.value.push({
    title: title.value,
    montant: montant.value,
  });
};
const addDepenseList = () => {
  depenseList.value.push({
    titleDepense: titleDepense.value,
    depense: depense.value,
  });
};
const total = computed(() => {
  const revenu = revenuList.value.reduce(
    (acc, current) => acc + current.montant,
    0
  );
  const depense = depenseList.value.reduce(
    (acc, current) => acc + current.depense,
    0
  );
  return revenu - depense;
});
const deleteElement = ref((e) => {
  revenuList.value.splice(e, 1);
});
const deleteItem = ref((e) => {
  depenseList.value.splice(e, 1);
});
const isDisableButton = ref(true);
const isDisabled = computed(() => {
  if (title.value != null) {
    if (title.value.length >= 3 && montant.value > 0)
      isDisableButton.value = false;
    else isDisableButton.value = true;
  }
  return isDisableButton.value;
});
const isDisableButtonDepense = ref(true);
const isDisabledDepense = computed(() => {
  if (titleDepense.value != null) {
    if (titleDepense.value.length >= 3 && depense.value > 0)
      isDisableButtonDepense.value = false;
    else isDisableButtonDepense.value = true;
  }
  return isDisableButtonDepense.value;
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
      <div class="flex">
        <!-- formulaire revenu -->
        <div>
          <form @submit.prevent="addRevenuList">
            <div class="grid grid-cols-2 mx-2">
              <h2 class="text-xl font-bold mx-2">Revenus</h2>
              <div></div>

              <div class="form-control input mx-2">
                <label for="title">Titre</label>
                <input type="text" id="title" v-model="title" />
              </div>

              <div class="form-control input">
                <label for="montant">Montant</label>
                <input type="number" id="montant" v-model="montant" min="0" />
              </div>
            </div>
            <div class="form-control input">
              <button
                class="btn primary mx-4"
                type="submit"
                :disabled="isDisabled"
              >
                Ajouter
              </button>
            </div>
          </form>
          <div
            class="mt-8 border-t-2 border-gray-400 mx-2"
            v-if="revenuList.length > 0"
          >
            <div
              class="flex"
              v-for="({ montant, title }, index) in revenuList"
              :key="index"
            >
              <button type="button" @click="deleteElement(index)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <p class="mx-4">{{ title }} :</p>
              <p>{{ montant }}</p>
            </div>
          </div>
        </div>

        <!-- formulaire depense -->
        <div>
          <form @submit.prevent="addDepenseList">
            <div class="grid grid-cols-2">
              <h2 class="text-xl font-bold mx-2">Dépenses</h2>
              <div></div>

              <div class="form-control input mx-2">
                <label for="titleDepense">Titre</label>
                <input type="text" id="titleDepense" v-model="titleDepense" />
              </div>
              <div class="form-control input">
                <label for="depense">Montant</label>
                <input type="number" id="depense" v-model="depense" min="0" />
              </div>
            </div>
            <div class="form-control input mx-2">
              <button
                class="btn primary"
                type="submit"
                :disabled="isDisabledDepense"
              >
                Ajouter
              </button>
            </div>
          </form>
          <div
            class="mt-8 border-t-2 border-gray-400 mx-2"
            v-if="depenseList.length > 0"
          >
            <div
              class="flex"
              v-for="({ depense, titleDepense }, index) in depenseList"
              :key="index"
            >
              <button type="button" @click="deleteItem(index)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <p class="mx-4">{{ titleDepense }} :</p>
              <p>{{ depense }}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-8 border-t-2 border-green-600 flex justify-center text-4xl"
        :style="
          total < 0
            ? 'background-color: rgb(255, 164, 164);'
            : 'background-color: transparent'
        "
        v-if="total"
      >
        {{ total }}
      </div>
    </main>
  </div>
</template>
