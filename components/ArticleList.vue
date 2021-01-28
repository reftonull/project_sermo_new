<template>
  <div class="max-w-6xl mx-auto py-4 px-5">
    <div class="grid grid-flow-row lg:grid-cols-2 grid-rows-1 gap-10">
      <div v-for="article of articles" :key="article.slug" class="">
        <ArticleCard :article="article" :tags="tags"></ArticleCard>
      </div>
    </div>
    <Pagination v-if="total > 8" :total="total"></Pagination>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: Array,
    },
    total: {
      type: Number,
      default: 0,
    },
    tags: {
      type: Array,
      default: Array,
    },
  },
}
</script>
