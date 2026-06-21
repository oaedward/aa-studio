<script setup>
import { useSectionNavigation } from '../../composables/useSectionNavigation'

const { navigateToSection } = useSectionNavigation()
</script>

<template>
  <section id="home" class="hero">
    <img src="/images/courtyard-pool-night.jpg" alt="Pool courtyard illuminated at night" />
    <div class="hero-overlay"></div>
    <div class="hero-grid">
      <div class="hero-copy">
        <p class="eyebrow light">Architecture · Interiors · Accra</p>
        <h1>Spaces with<br /><em>presence.</em></h1>
        <p class="hero-text">We shape thoughtful, enduring environments for a life well lived.</p>
        <button class="text-link light" @click="navigateToSection('projects')">Explore our work <span>↗</span></button>
      </div>
      <div class="hero-side">
        <span>01</span>
        <span class="hero-line"></span>
        <small>Featured residence</small>
      </div>
    </div>
    <button class="scroll-note" @click="navigateToSection('about')"><span></span> Scroll to discover</button>
  </section>
</template>
