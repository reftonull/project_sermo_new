<template>
  <div>
    <div
      v-if="!project.isFeatured"
      class="lg:mx-0 mx-auto my-auto relative lg:max-w-full max-w-md"
    >
      <div v-if="project.img" class="shadow-inner article-image w-auto">
        <img :src="project.img" class="img rounded-xl" />
      </div>
      <div class="-mt-20">
        <NuxtLink
          :to="{ name: 'projects-slug', params: { slug: project.slug } }"
        >
          <div class="font-sans text-4xl font-semibold leading-none py-2 title">
            {{ project.title }}
          </div>
        </NuxtLink>
        <div
          class="
            flex flex-row
            space-x-2
            font-semibold
            text-gray-600 text-md
            leading-5
            pb-2
          "
        >
          <div v-if="project.readingTime">
            {{ Math.ceil(project.readingTime.minutes) }} minute read
          </div>
          <div v-if="project.readingTime">•</div>
          <div class="cursor-pointer" @click="copyLink()">
            <IconsCopyIcon></IconsCopyIcon>
          </div>
        </div>
        <div class="text-md leading-6">
          {{ project.description }}
        </div>
      </div>
    </div>
    <div
      v-else
      class="
        flex
        lg:flex-row
        flex-col
        items-center
        lg:space-x-8
        space-y-4
        lg:space-y-0 lg:max-w-full
        max-w-md
        lg:mx-0
        mx-auto
      "
    >
      <div v-if="project.img" class="w-auto max-w-lg">
        <img :src="project.img" class="img rounded-xl" />
      </div>
      <div class="">
        <NuxtLink
          :to="{ name: 'projects-slug', params: { slug: project.slug } }"
          class="hover:text-purple-400"
        >
          <div class="font-sans text-4xl font-semibold leading-none py-2 title">
            {{ project.title }}
          </div>
        </NuxtLink>
        <div
          class="
            flex flex-row
            space-x-2
            font-semibold
            text-gray-600 text-md
            leading-5
            pb-2
          "
        >
          <div v-if="project.readingTime">
            {{ Math.ceil(project.readingTime.minutes) }} minute read
          </div>
          <div v-if="project.readingTime">•</div>
          <div class="cursor-pointer" @click="copyLink()">
            <IconsCopyIcon></IconsCopyIcon>
          </div>
        </div>
        <div class="text-md leading-6">
          {{ project.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    copyLink() {
      const path = 'lakshchakraborty.com/projects/' + this.project.slug
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

<style scoped>
.article-image {
  box-shadow: inset 0px -100px 60px #171a28;
}

.title:hover {
  color: var(--color);
}

.img {
  z-index: -2;
  position: relative;
  min-width: 200px;
  min-height: 200px;
}
</style>
