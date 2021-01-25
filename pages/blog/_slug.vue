<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const tagsList = await $content('tag')
      .only(['name', 'color', 'slug'])
      .where({ name: article.name })
      .fetch()
    const tag = tagsList[0]

    tag.tagColor = 'text-' + tag.color + ' border-' + tag.color
    tag.hoverColor = 'hover:text-' + tag.color
    tag.textColor = 'text-' + tag.color

    return { article, tag }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    copyLink() {
      const path = 'localhost:3000/blog/' + this.article.slug
      navigator.clipboard.writeText(path)
      const options = {
        duration: 1500,
        className: 'toast',
        iconPack: 'callback',
        icon: (el) => {
          el.innerHTML = `<svg
              xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>`

          return el
        },
      }
      this.$toast.show('Link Copied!', options)
    },
  },
}
</script>

<template>
  <article>
    <div class="mx-auto my-auto max-w-6xl p-5 relative mb-64">
      <div class="px-2 m-auto">
        <div
          class="font-sans font-bold border-b-2 inline-block"
          :class="tag.tagColor"
        >
          {{ tag.name.toUpperCase() }}
        </div>
        <div class="font-sans text-4xl font-semibold leading-none py-2">
          {{ article.title }}
        </div>
        <div
          class="flex flex-row space-x-2 font-semibold text-gray-600 text-md leading-5 pb-2"
        >
          <div>{{ formatDate(article.createdAt) }}</div>
          <div>•</div>
          <div v-if="article.words">
            {{ Math.round(article.words / 175) }} minute read
          </div>
          <div v-if="article.words">•</div>
          <div
            class="cursor-pointer"
            :class="tag.textColor"
            @click="copyLink()"
          >
            <CopyIcon></CopyIcon>
          </div>
        </div>
      </div>
      <div
        v-if="article.img"
        class="shadow-inner article-image w-auto flex mb-6"
      >
        <img
          :src="article.img"
          class="img rounded-xl max-h-96 object-cover flex-1"
        />
      </div>
      <div class="flex lg:flex-row flex-col-reverse m-auto p-4 lg:space-x-5">
        <nuxt-content
          :document="article"
          class="font-sans max-w-prose flex-auto"
        />
        <nav class="flex-shrink-0 mb-6">
          <p class="text-sm font-semibold text-gray-600">CONTENTS</p>
          <ul>
            <li v-for="link of article.toc" :key="link.id">
              <NuxtLink :to="`#${link.id}`"
                ><div
                  class="text-base my-3 font-medium text-gray-700 content-link"
                >
                  {{ link.text }}
                </div>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </article>
</template>

<style scoped>
.article-image {
  box-shadow: inset 0px -50px 40px #050505, inset 0px 50px 40px #050505;
}

.img {
  z-index: -2;
  position: relative;
  min-width: 200px;
  min-height: 200px;
}

.content-link:hover {
  transform: translateX(10px);
  transition: 0.2s;
}
</style>
