<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 8,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.perPage)
    },
    currentPage() {
      return parseInt(this.$route.params.page) || 1
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1
    },
    nextPage() {
      return this.currentPage < this.totalPages
        ? this.currentPage + 1
        : this.totalPages
    },
  },
}
</script>

<template>
  <div class="flex flex-row space-x-3 mt-4">
    <div
      v-if="currentPage === 1"
      class="flex flex-row text-gray-700 bg-gray-800 rounded-full p-3"
    >
      <IconsDoubleLeftIcon />
    </div>
    <NuxtLink v-else :to="{ name: 'blog-page-page', params: { page: 1 } }">
      <div class="flex flex-row bg-gray-800 rounded-full p-3">
        <IconsDoubleLeftIcon />
      </div>
    </NuxtLink>

    <div
      v-if="currentPage === 1"
      class="flex flex-row text-gray-700 bg-gray-800 rounded-full p-3"
    >
      <IconsSingleLeftIcon />
    </div>
    <NuxtLink
      v-else
      :to="{ name: 'blog-page-page', params: { page: prevPage } }"
    >
      <div class="flex flex-row bg-gray-800 rounded-full p-3">
        <IconsSingleLeftIcon />
      </div>
    </NuxtLink>

    <div class="flex-grow"></div>
    <div class="flex flex-row bg-gray-800 rounded-full py-3 px-5 font-semibold">
      {{ currentPage }}
    </div>
    <div class="flex-grow"></div>

    <div
      v-if="currentPage === totalPages"
      class="flex flex-row text-gray-700 bg-gray-800 rounded-full p-3"
    >
      <IconsSingleRightIcon />
    </div>
    <NuxtLink
      v-else
      :to="{ name: 'blog-page-page', params: { page: nextPage } }"
    >
      <div class="flex flex-row bg-gray-800 rounded-full p-3">
        <IconsSingleRightIcon />
      </div>
    </NuxtLink>

    <div
      v-if="currentPage === totalPages"
      class="flex flex-row text-gray-700 bg-gray-800 rounded-full p-3"
    >
      <IconsDoubleRightIcon />
    </div>
    <NuxtLink
      v-else
      :to="{ name: 'blog-page-page', params: { page: totalPages } }"
    >
      <div class="flex flex-row bg-gray-800 rounded-full p-3">
        <IconsDoubleRightIcon />
      </div>
    </NuxtLink>
  </div>
</template>
