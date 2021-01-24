<template>
  <div class="mx-auto my-auto max-w-md relative">
    <div class="shadow-inner article-image w-auto">
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
        <div>October 17, 2021</div>
        <div>•</div>
        <div>5 minute read</div>
        <div>•</div>
        <div :class="tag.textColor">
          <CopyIcon></CopyIcon>
        </div>
      </div>
      <div class="text-md leading-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed nisl
        luctus, congue odio non, fermentum est. Sed a risus mi. Ut non massa
        justo.
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
}
</script>

<style>
.article-image {
  box-shadow: inset 0px -100px 60px rgba(0, 0, 0, 1);
}

.img {
  z-index: -2;
  position: relative;
}
</style>
