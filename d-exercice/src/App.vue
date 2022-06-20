<script setup>
import Header from "./Header.vue";
import FormCrypto from "./FormCrypto.vue";
import CryptoElement from "./CryptoElement.vue";
import { ref, provide } from "vue";
const cryptoList = ref([]);

const isLogged = ref(false);
const toggleLogin = () => {
  isLogged.value = !isLogged.value;
  console.log(isLogged.value);
};

const sendEmit = (cryptos) => {
  cryptoList.value.push(cryptos.value);
  console.log(cryptoList.value);
};
const reset = (cryptos) => {};
provide("isLogged", isLogged);
provide("toggleLogin", toggleLogin);
const deleted = (index) => {
  cryptoList.value.splice(index, 1);

  console.log(index);
};
</script>

<template>
  <div class="bg-slate-100">
    <Header />
    <div class="bg-slate-100 flex flex-col min-h-screen">
      <main class="container mx-auto m-8 p-8">
        <FormCrypto @on-sendEmit="sendEmit" @on-reset="reset" />
        <div class="grid grid-cols-2 flex-wrap">
          <TransitionGroup name="box">
            <CryptoElement
              v-for="({ title, svg }, index) in cryptoList"
              :key="index"
              :title="title"
              @on-delete="deleted(index)"
            >
              <div class="primary" v-html="svg"></div>
            </CryptoElement>
          </TransitionGroup>
        </div>
      </main>
    </div>
  </div>
</template>
