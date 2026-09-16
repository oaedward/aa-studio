<script setup>
import AboutSection from '../components/sections/AboutSection.vue'
import AwardsSection from '../components/sections/AwardsSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import ProcessSection from '../components/sections/ProcessSection.vue'
import StatsSection from '../components/sections/StatsSection.vue'
import TeamSection from '../components/sections/TeamSection.vue'
</script>

<template>
  <main>
    <section id="about-hero" class="about-hero">
      <p class="eyebrow light">A.A Urban Atelier + Partners</p>
      <h1>About the studio.</h1>
    </section>
    <AboutSection />
    <ProcessSection />
    <TeamSection />
    <AwardsSection />
    <StatsSection />
    <ContactSection />
  </main>
</template>

<style scoped>
.about-hero {
  background: var(--ink);
  color: var(--paper);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 52svh;
  padding: 0 5vw 80px;
}

.about-hero h1 {
  color: var(--paper);
  font-size: clamp(3.6rem, 7vw, 6.4rem);
  line-height: 0.92;
}

@media (max-width: 800px) {
  .about-hero {
    min-height: 42svh;
    padding: 0 6vw 60px;
  }
}

@media (max-width: 480px) {
  .about-hero {
    min-height: 40svh;
    padding: 0 5vw 50px;
  }
}
</style>
