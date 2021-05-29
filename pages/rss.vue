<script>
export default {
  async asyncData({ $content, params }) {
    const rss = await $content('rss').fetch()

    return { rss }
  },
  methods: {
    copyLink() {
      const path = 'localhost:3000/rss'
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
    <div class="mx-auto my-auto max-w-6xl p-5 relative">
      <div class="m-auto">
        <div class="font-sans text-4xl font-semibold leading-none py-2">
          {{ rss.title }}
        </div>
        <div
          class="flex flex-row space-x-2 font-semibold text-gray-600 text-md leading-5 pb-2"
        >
          <div v-if="rss.readingTime">
            {{ Math.ceil(rss.readingTime.minutes) }} minute read
          </div>
          <div v-if="rss.readingTime">•</div>
          <div class="cursor-pointer" @click="copyLink()">
            <IconsCopyIcon></IconsCopyIcon>
          </div>
        </div>
      </div>
      <div v-if="rss.img" class="shadow-inner article-image w-auto flex mb-6">
        <img
          :src="rss.img"
          class="img rounded-xl max-h-96 object-cover flex-1"
        />
      </div>
      <div
        class="flex lg:flex-row flex-col-reverse m-auto pt-4 lg:space-x-5 justify-items-center"
      >
        <nuxt-content :document="rss" class="font-sans max-w-prose flex-auto" />
      </div>
    </div>
  </article>
</template>
