<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ContactSection from '../components/sections/ContactSection.vue'
import { useSectionNavigation } from '../composables/useSectionNavigation'
import { getServiceBySlug, services } from '../data/services'

const route = useRoute()
const { navigateToSection } = useSectionNavigation()
const service = computed(() => getServiceBySlug(route.params.slug))
const nextService = computed(() => {
  const currentIndex = services.findIndex((item) => item.slug === service.value?.slug)
  return services[(currentIndex + 1) % services.length]
})
</script>

<template>
  <main v-if="service" class="service-detail">
    <section class="detail-hero">
      <img :src="service.image" :alt="service.title" />
      <div class="hero-overlay"></div>
      <div class="detail-hero-copy">
        <RouterLink class="detail-back" :to="{ name: 'services', hash: '#services' }"><i class="fa-solid fa-arrow-left icon-left" aria-hidden="true"></i>Back to services</RouterLink>
        <p class="eyebrow light">Service {{ service.number }}</p>
        <h1>{{ service.title }}</h1>
      </div>
    </section>
    <section class="section detail-intro">
      <div class="section-label"><span>{{ service.number }}</span><p>{{ service.title }}</p></div>
      <div class="detail-intro-grid">
        <div>
          <p class="eyebrow">Overview</p>
          <h2>{{ service.summary }}</h2>
        </div>
        <div class="detail-description">
          <p>{{ service.description }}</p>
          <ul class="includes-list">
            <li v-for="item in service.highlights" :key="item">{{ item }}</li>
          </ul>
          <button class="text-link" @click="navigateToSection('contact')">Start a project <span><i class="fa-solid fa-arrow-right icon-diagonal" aria-hidden="true"></i></span></button>
        </div>
      </div>
    </section>
    <section class="detail-gallery">
      <img v-for="image in service.gallery" :key="image" :src="image" :alt="`${service.title} example`" />
    </section>
    <section class="detail-next">
      <p class="eyebrow light">Continue exploring</p>
      <RouterLink :to="{ name: 'service', params: { slug: nextService.slug } }">{{ nextService.title }} <span><i class="fa-solid fa-arrow-right icon-diagonal" aria-hidden="true"></i></span></RouterLink>
    </section>
    <ContactSection />
  </main>
  <main v-else class="project-missing">
    <p class="eyebrow">Service not found</p>
    <RouterLink class="text-link" :to="{ name: 'services', hash: '#services' }">Return to services <span><i class="fa-solid fa-arrow-right icon-diagonal" aria-hidden="true"></i></span></RouterLink>
  </main>
</template>

<style scoped>
.detail-hero {
  height: 66svh;
  min-height: 480px;
  overflow: hidden;
  position: relative;
}

.detail-hero > img,
.detail-hero > .hero-overlay {
  height: 100%;
  inset: 0;
  object-fit: cover;
  position: absolute;
  width: 100%;
}

.detail-hero > img {
  filter: grayscale(0.3) brightness(0.65);
}

.detail-hero > .hero-overlay {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0) 40%);
}

.detail-hero-copy {
  bottom: 9vh;
  color: var(--paper);
  left: 5vw;
  position: absolute;
  right: 5vw;
}

.detail-back {
  color: rgba(var(--paper-rgb), 0.75);
  display: block;
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  margin-bottom: 54px;
  text-decoration: none;
  text-transform: uppercase;
}

.detail-hero h1 {
  color: var(--paper);
  font-size: clamp(3.6rem, 7vw, 6.4rem);
  line-height: 0.9;
}

.detail-intro-grid {
  display: grid;
  gap: 8vw;
  grid-template-columns: 1fr 0.85fr;
  margin-left: 13vw;
}

.detail-intro-grid h2 {
  font-size: clamp(2rem, 2.4vw + 1rem, 2.8rem);
  line-height: 1.3;
}

.detail-description > p {
  color: var(--gray);
  font-size: 1.06rem;
  line-height: 1.9;
  max-width: 580px;
}

.includes-list {
  border-top: 1px solid var(--line);
  list-style: none;
  margin: 40px 0 0;
  padding: 0;
}

.includes-list li {
  border-bottom: 1px solid var(--line);
  color: var(--ink);
  font-size: 0.86rem;
  letter-spacing: 0.02em;
  padding: 16px 0;
}

.includes-list li::before {
  color: var(--gold);
  content: '— ';
}

.detail-description .text-link {
  margin-top: 40px;
}

.detail-gallery {
  display: grid;
  gap: 2vw;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 5vw 5vw;
}

.detail-gallery img {
  height: 620px;
  object-fit: cover;
  width: 100%;
  filter: grayscale(0.2);
}

.detail-gallery img:first-child {
  grid-column: 1 / -1;
  height: 720px;
}

.detail-next {
  background: var(--ink);
  color: var(--paper);
  padding: 90px 5vw 100px;
  text-align: center;
}

.detail-next a {
  color: var(--paper);
  font-family: 'Manrope', sans-serif;
  font-size: clamp(2.6rem, 5vw, 5rem);
  letter-spacing: -0.045em;
  text-decoration: none;
}

.detail-next span {
  color: var(--gold);
  font-family: 'Work Sans', sans-serif;
  font-size: 0.55em;
  margin-left: 14px;
}

.project-missing {
  min-height: 70svh;
  padding: 180px 5vw 100px;
}

@media (max-width: 1100px) {
  .detail-intro-grid {
    margin-left: 8vw;
  }
  .detail-gallery img {
    height: 480px;
  }
  .detail-gallery img:first-child {
    height: 580px;
  }
}

@media (max-width: 800px) {
  .detail-hero {
    height: 58svh;
    min-height: 420px;
  }
  .detail-hero-copy {
    bottom: 8vh;
    left: 6vw;
    right: 6vw;
  }
  .detail-back {
    margin-bottom: 42px;
  }
  .detail-intro-grid {
    display: block;
    margin-left: 0;
  }
  .detail-description {
    margin-top: 36px;
  }
  .detail-gallery {
    display: block;
    padding: 0 6vw 6vw;
  }
  .detail-gallery img,
  .detail-gallery img:first-child {
    height: auto;
    margin-bottom: 5vw;
    min-height: 0;
    aspect-ratio: 4 / 5;
  }
  .detail-gallery img:first-child {
    aspect-ratio: 1 / 1;
  }
  .detail-next {
    padding: 72px 6vw 78px;
  }
}

@media (max-width: 480px) {
  .detail-hero-copy {
    left: 5vw;
    right: 5vw;
  }
  .detail-gallery {
    padding: 0 5vw 5vw;
  }
  .detail-next {
    padding: 60px 5vw 66px;
  }
}
</style>
