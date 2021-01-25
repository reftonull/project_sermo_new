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
  @apply bg-black text-white;
}

.toasted.toasted-primary.toast {
  @apply bg-gray-900 border-purple-600 border-2 rounded-md px-5 py-3 font-semibold font-navigation m-2;
}

.toasted.toasted-primary.toast i {
  @apply pr-2;
}
</style>
