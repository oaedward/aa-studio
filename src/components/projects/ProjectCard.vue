<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="project-card" :class="project.size">
    <RouterLink class="project-open" :to="{ name: 'project', params: { slug: project.slug } }" :aria-label="`View ${project.title} project`">
      <div class="project-image">
        <img :src="project.image" :alt="project.title" />
        <span>View project ↗</span>
      </div>
      <p>{{ project.meta }}</p>
      <h3>{{ project.title }}</h3>
    </RouterLink>
  </article>
</template>
