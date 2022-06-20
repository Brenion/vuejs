<template>
  <header
    class="mt-6 mx-8 shadow-md rounded-md flex justify-between items-center px-8 bg-white overflow-hidden"
  >
    <img src="/logo.png" alt="logo" class="w-16 animation-image" />

    <nav>
      <ul class="flex space-x-8">
        <li>
          <router-link
            class="block font-semibold rounded px-4 py-1 text-gray-900"
            to="/"
            >Accueil</router-link
          >
        </li>
        <li>
          <router-link
            class="block font-semibold rounded px-4 py-1 text-gray-900"
            to="/chats"
            >Nos chats</router-link
          >
        </li>
        <li>
          <router-link to="/add" class="btn primary"
            >Ajouter un chat</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.router-link-exact-active {
  @apply bg-yellow-800 text-white duration-200;
}
.router-link-exact-active:hover {
  @apply bg-teal-900;
}
</style>
