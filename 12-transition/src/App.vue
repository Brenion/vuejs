<script setup>
import { ref } from "vue";
import Loading from "./Loading.vue";
import { format } from "date-fns";

const messages = ref([]);
const content = ref("");

const send = () => {
  const time = format(new Date(), "HH:mm");
  messages.value.push({ text: content.value, time });
  content.value = "";
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
      <div class="w-[400px] mx-auto">
        <TransitionGroup name="msg">
          <div
            v-for="({ text, time }, index) in messages"
            :key="index"
            class="my-4 px-4 py-1 rounded bg-blue-200 text-gray-600 w-64 break-words"
            :class="{ 'ml-auto bg-red-200': index % 2 }"
          >
            <span class="block text-xs text-gray-400">{{ time }}</span>
            {{ text }}
          </div>
        </TransitionGroup>
        <Transition name="slide-fade">
          <div
            class="my-4 px-4 py-1 rounded bg-blue-200 text-gray-600 w-24 flex justify-center"
            :class="{ 'ml-auto bg-red-200': messages.length % 2 }"
            v-if="content.length"
          >
            <Loading />
          </div>
        </Transition>
        <form class="flex items-center space-x-3 mt-8" @submit.prevent="send">
          <input
            type="text"
            v-model="content"
            class="focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
          <button type="submit" class="btn primary" :disabled="!content">
            Envoyer
          </button>
        </form>
      </div>
    </main>
  </div>
</template>

<style scoped>
.msg-enter-active,
.msg-leave-active {
  transition: all 0.5s ease;
}
.msg-enter-from,
.msg-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
