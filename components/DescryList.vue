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
  <div class="grid auto-cols-max grid-flow-col space-x-5">
    <div v-for="item in list" :key="item.slug">
      <DescryItem :item="item" />
    </div>
  </div>
</template>
