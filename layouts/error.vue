<template>
  <div class="flex flex-col p-5">
    <h1 v-if="error.statusCode === 404" class="self-center">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/" class="self-center text-purple-400">Back Home!</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: ['error'], // you can set a custom layout for the error page
}
</script>
