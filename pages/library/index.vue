<script>
export default {
  async asyncData({ $content, params }) {
    const books = await $content('library/books', params.slug)
      .sortBy('createdAt')
      .fetch()

    const podcasts = await $content('library/podcasts', params.slug)
      .sortBy('createdAt')
      .fetch()

    return {
      books,
      podcasts,
    }
  },
}
</script>

<template>
  <div class="mx-auto max-w-6xl px-5">
    <div class="font-sans text-4xl font-semibold leading-none py-2 mb-5">
      Library
    </div>
    <p>
      This is what I'm descrying right now! Clicking on the thumbnails will take
      you to their website.
    </p>
    <div class="mb-4">
      <h2>Books</h2>
      <DescryList :list="books"></DescryList>
    </div>
    <div>
      <h2>Podcasts</h2>
      <DescryList :list="podcasts"></DescryList>
    </div>
  </div>
</template>
