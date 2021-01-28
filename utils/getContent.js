export default async ($content, params, error) => {
  const currentPage = parseInt(params.page) ?? 1

  const perPage = 8

  const allArticles = await $content('articles').fetch()

  const totalArticles = allArticles.length

  const lastPage = Math.ceil(totalArticles / perPage)

  const lastPageCount = totalArticles % perPage

  const skipNumber = () => {
    if (currentPage === 1) {
      return 0
    }
    if (currentPage === lastPage) {
      return totalArticles - lastPageCount
    }
    return (currentPage - 1) * perPage
  }

  const paginatedArticles = await $content('articles')
    .sortBy('createdAt', 'desc')
    .limit(perPage)
    .skip(skipNumber())
    .fetch()

  if (currentPage === 0 || !paginatedArticles.length) {
    return error({ statusCode: 404, message: 'No articles found' })
  }

  return {
    allArticles,
    paginatedArticles,
  }
}
