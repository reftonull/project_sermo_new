<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return { project }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    copyLink() {
      const path = 'localhost:3000/project/' + this.project.slug
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
          {{ project.title }}
        </div>
        <div
          class="flex flex-row space-x-2 font-semibold text-gray-600 text-md leading-5 pb-2"
        >
          <div v-if="project.readingTime">
            {{ Math.ceil(project.readingTime.minutes) }} minute read
          </div>
          <div v-if="project.readingTime">•</div>
          <div class="cursor-pointer" @click="copyLink()">
            <CopyIcon></CopyIcon>
          </div>
        </div>
      </div>
      <div
        v-if="project.img"
        class="shadow-inner article-image w-auto flex mb-6"
      >
        <img
          :src="project.img"
          class="img rounded-xl max-h-96 object-cover flex-1"
        />
      </div>
      <div class="flex lg:flex-row flex-col-reverse m-auto pt-4 lg:space-x-5">
        <nuxt-content
          :document="project"
          class="font-sans max-w-prose flex-auto"
        />
        <nav class="flex-shrink-0 mb-6">
          <div class="text-sm font-semibold text-gray-600">CONTENTS</div>
          <ul>
            <li v-for="link of project.toc" :key="link.id">
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

<style>
.article-image {
  box-shadow: inset 0px -50px 40px #171a28, inset 0px 50px 40px #171a28;
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

blockquote > p {
  @apply px-4 border-l-4 py-3 mb-0 font-medium rounded-md bg-gray-900;
}

aside {
  @apply px-4 border-l-4 py-3 font-medium rounded-md bg-gray-900 mb-4;
}

.nuxt-content > a {
}
</style>
