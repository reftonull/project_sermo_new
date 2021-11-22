<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
}
</script>

<template>
  <div
    class="
      grid
      flex-1
      grid-cols-fill-auto-sm
      sm:grid-cols-fill-auto
      grid-flow-row
    "
  >
    <div v-for="item in list" :key="item.slug">
      <DescryItem :item="item" />
    </div>
  </div>
</template>
