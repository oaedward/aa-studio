<script setup>
import { useSectionNavigation } from '../../composables/useSectionNavigation'

const { navigateToSection } = useSectionNavigation()
</script>

<template>
  <section id="about" class="section about-section">
    <div class="section-label"><span>01</span><p>About the studio</p></div>
    <div class="about-intro">
      <p class="eyebrow">AA Design Studio</p>
      <h2>Considered design,<br /><em>made personal.</em></h2>
    </div>
    <div class="about-grid">
      <img class="about-image" src="/images/studio-visit.jpg" alt="Design review in a completed interior" />
      <div class="about-copy">
        <p class="lead">AA Design Studio is an architecture and interior design practice creating spaces that feel as good as they look.</p>
        <p>Our work is guided by a clear understanding of people, place, and purpose. Each project is approached as a collaboration, bringing together measured planning, expressive details, and lasting materials.</p>
        <button class="text-link" @click="navigateToSection('contact')">Meet the studio <span>↗</span></button>
      </div>
      <div class="about-detail">
        <img src="/images/material-stone.jpg" alt="Detailed stone wall material study" />
        <p>Materiality, light, and proportion are central to every space we shape.</p>
      </div>
    </div>
  </section>
</template>
