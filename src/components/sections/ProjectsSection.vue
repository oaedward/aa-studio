<script setup>
import { computed, ref } from 'vue'
import ProjectCard from '../projects/ProjectCard.vue'
import { filters, projects } from '../../data/projects'

const activeFilter = ref('All')
const visibleProjects = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter.value),
)
</script>

<template>
  <section id="projects" class="section projects-section">
    <div class="section-label"><span>03</span><p>Selected projects</p></div>
    <div class="projects-head">
      <div>
        <p class="eyebrow">Selected work</p>
        <h2>A portfolio of<br /><em>lived experiences.</em></h2>
      </div>
      <div class="filters" aria-label="Project filters">
        <button v-for="filter in filters" :key="filter" :class="{ active: activeFilter === filter }" @click="activeFilter = filter">
          {{ filter }}
        </button>
      </div>
    </div>
    <div class="project-grid">
      <ProjectCard v-for="project in visibleProjects" :key="project.slug" :project="project" />
    </div>
  </section>
</template>
