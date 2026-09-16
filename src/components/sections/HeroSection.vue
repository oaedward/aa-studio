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
        <p class="eyebrow light">Architecture · Interiors · </p>
        <h1>Spaces to inspire.<br /><em>Places to belong.</em></h1>
        <p class="hero-text">We shape thoughtful, enduring environments for a life well lived.</p>
        <button class="text-link light" @click="navigateToSection('projects-preview')">Explore our work <span><i class="fa-solid fa-arrow-right icon-diagonal" aria-hidden="true"></i></span></button>
      </div>
      <!-- <div class="hero-side">
        <span>01</span>
        <span class="hero-line"></span>
        <small>Featured residence</small>
      </div> -->
    </div>
    <button class="scroll-note" @click="navigateToSection('about-preview')"><span></span> Scroll to discover</button>
  </section>
</template>

<style scoped>
.hero {
  height: 100svh;
  min-height: 710px;
  overflow: hidden;
  position: relative;
}

.hero > img,
.hero-overlay {
  inset: 0;
  height: 100%;
  object-fit: cover;
  position: absolute;
  width: 100%;
}

.hero > img {
  filter: grayscale(0.3) brightness(0.62);
}

.hero-overlay {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.08) 60%, rgba(0, 0, 0, 0.2));
}

.hero-grid {
  align-items: end;
  display: grid;
  grid-template-columns: 1fr 120px;
  height: 100%;
  padding: 0 5vw 9vh;
  position: relative;
}

h1 {
  color: var(--paper);
  font-size: clamp(4.4rem, 9.5vw, 9.4rem);
  line-height: 0.86;
}

.hero-text {
  color: rgba(var(--paper-rgb), 0.82);
  font-size: 1.02rem;
  line-height: 1.7;
  margin: 27px 0;
  max-width: 380px;
}

.hero-side {
  align-items: center;
  align-self: center;
  color: var(--paper);
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-top: 100px;
}

.hero-side span {
  color: var(--gold);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
}

.hero-line {
  background: rgba(var(--paper-rgb), 0.4);
  display: block;
  height: 130px;
  width: 1px;
}

.hero-side small {
  font-size: 0.6rem;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  writing-mode: vertical-rl;
}

.scroll-note {
  bottom: 20px;
  color: var(--paper);
  display: flex;
  font-size: 0.58rem;
  gap: 12px;
  letter-spacing: 0.18em;
  position: absolute;
  right: 5vw;
  text-transform: uppercase;
}

.scroll-note span {
  background: var(--paper);
  display: inline-block;
  height: 1px;
  margin-top: 4px;
  width: 26px;
}

@media (max-width: 800px) {
  .hero {
    min-height: 650px;
  }
  .hero-grid {
    grid-template-columns: 1fr;
    padding: 0 6vw 12vh;
  }
  .hero-side,
  .scroll-note {
    display: none;
  }
  h1 {
    font-size: 5rem;
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: 580px;
  }
  .hero-grid {
    padding: 0 5vw 13vh;
  }
  h1 {
    font-size: clamp(4rem, 20vw, 5rem);
  }
  .hero-text {
    font-size: 0.93rem;
    line-height: 1.65;
    max-width: 320px;
  }
}

@media (max-height: 620px) and (orientation: landscape) {
  .hero {
    min-height: 620px;
  }
  .hero-grid {
    padding-bottom: 9vh;
  }
}
</style>
