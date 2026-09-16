<script setup>
import ContactSection from '../components/sections/ContactSection.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
</script>

<template>
  <main>
    <section id="services-hero" class="services-hero">
      <p class="eyebrow light">A.A Urban Atelier + Partners</p>
      <h1>Our services.</h1>
    </section>
    <ServicesSection />
    <ContactSection />
  </main>
</template>

<style scoped>
.services-hero {
  background: var(--ink);
  color: var(--paper);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 52svh;
  padding: 0 5vw 80px;
}

.services-hero h1 {
  color: var(--paper);
  font-size: clamp(3.6rem, 7vw, 6.4rem);
  line-height: 0.92;
}

@media (max-width: 800px) {
  .services-hero {
    min-height: 42svh;
    padding: 0 6vw 60px;
  }
}

@media (max-width: 480px) {
  .services-hero {
    min-height: 40svh;
    padding: 0 5vw 50px;
  }
}
</style>
