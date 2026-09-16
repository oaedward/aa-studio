<script setup>
import { services } from '../../data/services'
</script>

<template>
  <section id="services" class="section services-section">
    <div class="section-label"><span>01</span><p>What we do</p></div>
    <div class="services-head">
      <p class="eyebrow">Our services</p>
      <h2>From first sketch<br />to <em>final detail.</em></h2>
    </div>
    <div class="service-list">
      <article v-for="service in services" :key="service.slug" class="service-card">
        <RouterLink class="service-open" :to="{ name: 'service', params: { slug: service.slug } }" :aria-label="`Learn more about ${service.title}`">
          <span class="service-number">{{ service.number }}</span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.text }}</p>
          <span class="service-arrow" aria-hidden="true"><i class="fa-solid fa-arrow-right icon-diagonal"></i></span>
        </RouterLink>
      </article>
    </div>
  </section>
</template>

<style scoped>
.services-head {
  margin-left: 13vw;
}

.service-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 80px;
}

.service-card {
  border-top: 1px solid var(--line);
  min-height: 300px;
  position: relative;
}

.service-card + .service-card {
  border-left: 1px solid var(--line);
}

.service-open {
  color: inherit;
  display: block;
  height: 100%;
  padding: 25px 34px 20px 0;
  text-decoration: none;
}

.service-card + .service-card .service-open {
  padding-left: 34px;
}

.service-number {
  color: var(--gold);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
}

.service-card h3 {
  font-size: clamp(1.8rem, 1.5vw + 1.3rem, 2.1rem);
  font-weight: 500;
  margin: 45px 0 16px;
}

.service-card p {
  color: var(--gray);
  font-size: 0.86rem;
  line-height: 1.8;
  max-width: 320px;
}

.service-arrow {
  bottom: 22px;
  color: var(--ink);
  font-size: 1.4rem;
  position: absolute;
  right: 25px;
  transition: transform 0.25s, color 0.25s;
}

.service-card:hover .service-arrow {
  color: var(--gold);
  transform: translate(4px, -4px);
}

@media (max-width: 1100px) {
  .services-head {
    margin-left: 8vw;
  }
}

@media (max-width: 800px) {
  .services-head {
    margin-left: 0;
  }
  .service-list {
    display: block;
    margin-top: 53px;
  }
  .service-card {
    min-height: 240px;
  }
  .service-card + .service-card {
    border-left: 0;
  }
  .service-card + .service-card .service-open {
    padding-left: 0;
  }
}

@media (max-width: 480px) {
  .service-list {
    margin-top: 42px;
  }
  .service-card {
    min-height: 225px;
  }
  .service-open {
    padding-right: 8px;
  }
  .service-card h3 {
    font-size: 1.55rem;
    margin-top: 34px;
  }
  .service-arrow {
    right: 4px;
  }
}
</style>
