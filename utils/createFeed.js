export default async (feed) => {
  feed.options = {
    title: 'Project Sermo',
    link: 'https://projectsermo.com/rss.xml',
    description: 'Welcome to Project Sermo!',
  }

  const articles = await this.$content('articles')
    .sortBy('createdAt', 'desc')
    .fetch()

  articles.forEach((element) => {
    feed.addItem({
      title: element.title,
      id: element.path,
      link: 'www.projectsermo.com/blog/' + element.slug,
      description: element.description,
      content: element.content,
    })

    feed.addCategory('Posts')

    feed.addContributor({
      name: 'Laksh Chakraborty',
      email: 'laksh@projectsermo.com',
      link: 'https://www.projectsermo.com',
    })
  })
}
