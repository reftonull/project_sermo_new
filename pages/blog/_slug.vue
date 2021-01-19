<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },
}
</script>

<template>
  <article>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </article>
</template>

<style>
article {
  @apply px-4 pb-2 bg-green-300;
}

h1 {
  @apply font-sans text-5xl;
}

.nuxt-content p {
  @apply font-sans;
}

.nuxt-content h2 {
  @apply font-sans text-3xl;
}
</style>
