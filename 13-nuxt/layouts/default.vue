<template>
  <div class="flex flex-col min-h-screen bg-slate-100 p-8">
    <header class="flex p-8 shadow-md justify-between rounded-md bg-white">
      <img
        src="https://pbs.twimg.com/profile_images/474541110518243328/QEfL2pBT_400x400.png"
        alt=""
        class="h-16"
      />
      <nav>
        <ul class="flex items-center space-x-8">
          <li>
            <nuxt-link
              to="/"
              class="px-4 rounded block py-2 bg-red-300 text-white"
              >Accueil</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="facts"
              class="px-4 rounded block py-2 bg-red-300 text-white"
              >Savoir inutile</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </header>
    <main class="container mt-8">
      <nuxt />
    </main>
  </div>
</template>

<style scoped>
a.nuxt-link-exact-active {
  @apply bg-indigo-500;
}
</style>
