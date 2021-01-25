<template>
  <div>
    <div id="myNav" class="overlay bg-gray-900">
      <div class="cursor-pointer m-4" @click="closeMenu()">
        <CloseIcon />
      </div>
      <div class="flex flex-col space-y-8">
        <div class="block text-center font-semibold">
          <NuxtLink to="/" @click.native="closeMenu()">Blog</NuxtLink>
        </div>
        <div class="block text-center font-semibold">
          <NuxtLink to="/projects" @click.native="closeMenu()"
            >Projects</NuxtLink
          >
        </div>
        <div class="block text-center font-semibold">
          <NuxtLink to="/library" @click.native="closeMenu()">Library</NuxtLink>
        </div>
        <div class="block text-center font-semibold">
          <NuxtLink to="/about" @click.native="closeMenu()">About</NuxtLink>
        </div>
      </div>
    </div>

    <div class="cursor-pointer" @click="openMenu()">
      <MenuIcon />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openMenu() {
      document.getElementById('myNav').style.width = '300px'
    },
    closeMenu() {
      document.getElementById('myNav').style.width = '0'
    },
  },
}
</script>

<style>
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  right: 0;
  top: 0;
  transition: 0.5s;
}
</style>
