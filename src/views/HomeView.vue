<script setup>
import AboutSection from '../components/sections/AboutSection.vue';
import ContactSection from '../components/sections/ContactSection.vue'
import HeroSection from '../components/sections/HeroSection.vue'
import ProjectsSummarySection from '../components/sections/ProjectsSummarySection.vue'
import QuoteSection from '../components/sections/QuoteSection.vue'
</script>

<template>
  <main>
    <HeroSection />
    <AboutSection variant="teaser" />
    <ProjectsSummarySection />
    <QuoteSection />
    <ContactSection />
  </main>
</template>
