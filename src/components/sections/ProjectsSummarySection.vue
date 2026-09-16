<script setup>
import ProjectCard from '../projects/ProjectCard.vue'
import { projects } from '../../data/projects'

const featured = projects.slice(0, 4)
</script>

<template>
  <section id="projects-preview" class="section projects-summary">
    <div class="section-label"><span>02</span><p>Selected projects</p></div>
    <div class="summary-head">
      <p class="eyebrow">Selected work</p>
      <h2>A portfolio of<br /><em>lived experiences.</em></h2>
    </div>
    <div class="summary-grid">
      <ProjectCard v-for="project in featured" :key="project.slug" :project="project" />
    </div>
    <RouterLink class="text-link" :to="{ name: 'projects' }">View all projects <span><i class="fa-solid fa-arrow-right icon-diagonal" aria-hidden="true"></i></span></RouterLink>
  </section>
</template>

<style scoped>
.summary-head {
  margin: 0 0 54px 13vw;
}

.summary-grid {
  display: grid;
  gap: 4vw 2vw;
  grid-template-columns: repeat(2, 1fr);
}

.summary-grid + .text-link {
  margin-top: 50px;
}

@media (max-width: 1100px) {
  .summary-head {
    margin-left: 8vw;
  }
}

@media (max-width: 800px) {
  .summary-head {
    margin-left: 0;
  }
  .summary-grid {
    display: block;
  }
  .summary-grid + .text-link {
    margin-top: 8px;
  }
}
</style>
