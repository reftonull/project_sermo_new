<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <a v-if="item.link" :href="item.link">
    <div class="max-w-xxs">
      <img :src="item.img" class="mb-1 rounded-lg" />
      <div class="text-md font-bold">{{ item.title }}</div>
      <div class="text-md">{{ item.author }}</div>
    </div>
  </a>
  <div v-else>
    <div class="max-w-xxs">
      <img :src="item.img" class="mb-1" />
      <div class="text-md font-bold">{{ item.title }}</div>
      <div class="text-md">{{ item.author }}</div>
    </div>
  </div>
</template>
