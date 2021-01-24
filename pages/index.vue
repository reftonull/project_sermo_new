<template>
  <div
    class="max-w-6xl mx-auto grid grid-flow-row lg:grid-cols-2 grid-rows-1 gap-0 pt-4"
  >
    <div v-for="article of articles" :key="article.slug" class="mb-10">
      <ArticleCard :article="article" :tags="tagsList"></ArticleCard>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'tag'])
      .sortBy('createdAt', 'desc')
      .fetch()

    const tagsList = await $content('tag')
      .only(['name', 'color', 'slug'])
      .fetch()

    return {
      articles,
      tagsList,
    }
  },
}
</script>

<style></style>
