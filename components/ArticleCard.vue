<template>
  <div class="mx-auto my-auto max-w-md relative">
    <div v-if="article.img" class="shadow-inner article-image w-auto">
      <img :src="article.img" class="img rounded-xl" />
    </div>
    <div class="px-2 -mt-20">
      <div
        class="font-sans font-bold border-b-2 inline-block"
        :class="tag.tagColor"
      >
        {{ tag.name.toUpperCase() }}
      </div>
      <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
        <div
          class="font-sans text-4xl font-semibold leading-none py-2"
          :class="tag.hoverColor"
        >
          {{ article.title }}
        </div>
      </NuxtLink>
      <div
        class="flex flex-row space-x-2 font-semibold text-gray-600 text-md leading-5 pb-2"
      >
        <div>{{ formatDate(article.createdAt) }}</div>
        <div>•</div>
        <div v-if="article.words">
          {{ Math.round(article.words / 175) }} minute read
        </div>
        <div v-if="article.words">•</div>
        <div class="cursor-pointer" :class="tag.textColor" @click="copyLink()">
          <CopyIcon></CopyIcon>
        </div>
      </div>
      <div class="text-md leading-5">
        {{ article.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
  },

  data() {
    const art = this.article

    const tag = this.tags.filter(function (e) {
      return e.name === art.tag
    })[0]

    tag.tagColor = 'text-' + tag.color + ' border-' + tag.color
    tag.hoverColor = 'hover:text-' + tag.color
    tag.textColor = 'text-' + tag.color

    return { tag }
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

<style>
.article-image {
  box-shadow: inset 0px -100px 60px rgba(0, 0, 0, 1);
}

.img {
  z-index: -2;
  position: relative;
  min-width: 200px;
  min-height: 200px;
}
</style>
