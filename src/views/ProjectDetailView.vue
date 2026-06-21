<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProjectBySlug, projects } from '../data/projects'

const route = useRoute()
const project = computed(() => getProjectBySlug(route.params.slug))
const nextProject = computed(() => {
  const currentIndex = projects.findIndex((item) => item.slug === project.value?.slug)
  return projects[(currentIndex + 1) % projects.length]
})
</script>

<template>
  <main v-if="project" class="project-detail">
    <section class="detail-hero">
      <img :src="project.image" :alt="project.title" />
      <div class="hero-overlay"></div>
      <div class="detail-hero-copy">
        <RouterLink class="detail-back" :to="{ name: 'home', hash: '#projects' }">← Back to projects</RouterLink>
        <p class="eyebrow light">{{ project.scope }}</p>
        <h1>{{ project.title }}</h1>
        <p>{{ project.location }}</p>
      </div>
    </section>
    <section class="section detail-intro">
      <div class="section-label"><span>Project</span><p>{{ project.category }}</p></div>
      <div class="detail-intro-grid">
        <div>
          <p class="eyebrow">About the project</p>
          <h2>Designed for<br /><em>everyday rituals.</em></h2>
        </div>
        <div class="detail-description">
          <p>{{ project.description }}</p>
          <dl>
            <div><dt>Location</dt><dd>{{ project.location }}</dd></div>
            <div><dt>Year</dt><dd>{{ project.year }}</dd></div>
            <div><dt>Scope</dt><dd>{{ project.scope }}</dd></div>
          </dl>
        </div>
      </div>
    </section>
    <section class="detail-gallery">
      <img v-for="image in project.gallery" :key="image" :src="image" :alt="`${project.title} project view`" />
    </section>
    <section class="detail-next">
      <p class="eyebrow light">Continue exploring</p>
      <RouterLink :to="{ name: 'project', params: { slug: nextProject.slug } }">Next project <span>↗</span></RouterLink>
    </section>
  </main>
  <main v-else class="project-missing">
    <p class="eyebrow">Project not found</p>
    <RouterLink class="text-link" :to="{ name: 'home', hash: '#projects' }">Return to projects <span>↗</span></RouterLink>
  </main>
</template>
