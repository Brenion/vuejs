<script setup>
defineProps(["title"]);
const emit = defineEmits(["onDelete"]);
const deleted = () => {
  emit("onDelete");
};
//console.log(title.value);
</script>

<template>
  <div
    class="text-3xl text-blue-400 flex justify-around gap-2 border border-gray-300 p-6 items-center rounded-md m-2 bg-slate-200 shadow-sm"
  >
    <slot></slot>

    <h2 class="mx-8">{{ title }}</h2>

    <div class="text-red-600 flex justify-end">
      <button type="button" @click.prevent="deleted">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
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
    </div>
  </div>
</template>
