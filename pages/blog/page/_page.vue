<template>
  <ArticleList
    :articles="paginatedArticles"
    :total="allArticles.length"
    :tags="tagsList"
  />
</template>

<script>
import getContent from '@/utils/getContent'
export default {
  async asyncData({ $content, params, error }) {
    const content = await getContent($content, params, error)

    const tagsList = await $content('tag')
      .only(['name', 'color', 'slug'])
      .fetch()

    return {
      allArticles: content.allArticles,
      paginatedArticles: content.paginatedArticles,
      tagsList,
    }
  },
}
</script>
