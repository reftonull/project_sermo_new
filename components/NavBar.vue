<template>
  <div class="hidden lg:flex max-w-6xl mx-auto">
    <div class="flex flex-row p-3 w-full">
      <div class="font-logo flex-none text-lg text-center self-center px-2">
        <NuxtLink to="/"> PROJECT <strong>SERMO</strong> </NuxtLink>
      </div>
      <div class="flex-grow"></div>
      <div class="flex flex-row space-x-4 flex-none">
        <NuxtLink to="/">
          <div
            class="font-logo font-medium py-1 px-2 rounded-lg hover:bg-indigo-200"
          >
            Blog
          </div>
        </NuxtLink>

        <NuxtLink to="/projects">
          <div
            class="font-logo font-medium py-1 px-2 rounded-lg hover:bg-indigo-200"
          >
            Projects
          </div>
        </NuxtLink>

        <NuxtLink to="/library">
          <div
            class="font-logo font-medium py-1 px-2 rounded-lg hover:bg-indigo-200"
          >
            Library
          </div>
        </NuxtLink>

        <NuxtLink to="/about">
          <div
            class="font-logo font-medium py-1 px-2 rounded-lg hover:bg-indigo-200"
          >
            About
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
