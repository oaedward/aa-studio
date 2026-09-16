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
    <div class="section-label"><span>01</span><p>Selected projects</p></div>
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

<style scoped>
.projects-head {
  align-items: end;
  display: flex;
  justify-content: space-between;
  margin: 0 0 54px 13vw;
}

.filters {
  display: flex;
  gap: 18px;
  padding-bottom: 8px;
}

.filters button {
  border-bottom: 1px solid transparent;
  color: var(--gray-light);
  font-size: 0.64rem;
  letter-spacing: 0.15em;
  padding: 5px 0;
  text-transform: uppercase;
}

.filters .active {
  border-color: var(--teal);
  color: var(--ink);
}

.project-grid {
  display: grid;
  gap: 4vw 2vw;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 1100px) {
  .projects-head {
    margin-left: 8vw;
    align-items: start;
    display: block;
  }
  .filters {
    flex-wrap: wrap;
    margin-top: 28px;
  }
}

@media (max-width: 800px) {
  .projects-head {
    align-items: start;
    display: block;
    margin: 0 0 35px;
  }
  .filters {
    flex-wrap: wrap;
    margin-top: 30px;
  }
  .project-grid {
    display: block;
  }
}

@media (max-width: 480px) {
  .filters {
    gap: 11px 15px;
    margin-top: 24px;
  }
  .filters button {
    font-size: 0.58rem;
  }
}
</style>
