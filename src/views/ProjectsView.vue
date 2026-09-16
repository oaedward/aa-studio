<script setup>
import ContactSection from '../components/sections/ContactSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
</script>

<template>
  <main>
    <section class="projects-hero">
      <p class="eyebrow light">A.A Urban Atelier + Partners</p>
      <h1>Our projects.</h1>
    </section>
    <ProjectsSection />
    <ContactSection />
  </main>
</template>

<style scoped>
.projects-hero {
  background: var(--ink);
  color: var(--paper);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 52svh;
  padding: 0 5vw 80px;
}

.projects-hero h1 {
  color: var(--paper);
  font-size: clamp(3.6rem, 7vw, 6.4rem);
  line-height: 0.92;
}

@media (max-width: 800px) {
  .projects-hero {
    min-height: 42svh;
    padding: 0 6vw 60px;
  }
}

@media (max-width: 480px) {
  .projects-hero {
    min-height: 40svh;
    padding: 0 5vw 50px;
  }
}
</style>
