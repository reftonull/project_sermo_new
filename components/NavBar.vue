<template>
  <div class="flex max-w-6xl mx-auto">
    <div class="flex flex-row p-5 w-full">
      <div class="font-logo flex-none text-lg text-center self-center px-2">
        <NuxtLink to="/"> PROJECT <strong>SERMO</strong> </NuxtLink>
      </div>
      <div class="flex-grow"></div>
      <div class="lg:hidden"><Menu /></div>
      <div class="hidden lg:flex flex-row space-x-4 flex-none">
        <NuxtLink to="/">
          <div class="font-logo font-medium py-1 px-2 rounded-lg nav-item">
            Blog
          </div>
        </NuxtLink>

        <NuxtLink to="/projects">
          <div class="font-logo font-medium py-1 px-2 rounded-lg nav-item">
            Projects
          </div>
        </NuxtLink>

        <NuxtLink to="/library">
          <div class="font-logo font-medium py-1 px-2 rounded-lg nav-item">
            Library
          </div>
        </NuxtLink>

        <NuxtLink to="/about">
          <div class="font-logo font-medium py-1 px-2 rounded-lg nav-item">
            About
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-item::after {
  content: '';
  display: block;
  margin: auto;
  height: 3px;
  width: 0px;
  background: transparent;
  transition: width 0.5s ease, background-color 0.5s ease;
}

.nav-item:hover:after {
  width: 100%;
  @apply bg-gray-200;
}
</style>
