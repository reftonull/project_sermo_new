<template>
  <div>
    <div>
      <NavBar />
      <Nuxt />
    </div>
  </div>
</template>

<style>
html {
  @apply bg-dark-gray text-white;
}

body {
  @apply text-gray-200 leading-snug;
  font-size: 18px;
}

h2 {
  @apply text-2xl font-semibold leading-relaxed pt-3 mb-4 border-b-4 border-gray-700 inline-block;
}

.toasted.toasted-primary.toast {
  @apply bg-gray-900 border-purple-600 border-2 rounded-md px-5 py-3 font-semibold font-navigation m-2;
}

.toasted.toasted-primary.toast i {
  @apply pr-2;
}
</style>
