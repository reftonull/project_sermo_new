<template>
  <div
    class="max-w-6xl mx-auto grid grid-flow-row lg:grid-cols-2 grid-rows-1 gap-10 pt-4 px-5"
  >
    <div
      v-for="project of projects"
      :key="project.slug"
      class=""
      :class="{ 'lg:col-span-2': project.isFeatured }"
    >
      <ProjectCard :project="project"></ProjectCard>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content('projects', params.slug)
      .sortBy('order')
      .fetch()

    return {
      projects,
    }
  },
}
</script>

<style></style>
