<script setup>
import { services } from '../../data/services'
</script>

<template>
  <section id="services" class="section services-section">
    <div class="section-label light"><span>02</span><p>What we do</p></div>
    <div class="services-head">
      <p class="eyebrow light">Our services</p>
      <h2>From first sketch<br />to <em>final detail.</em></h2>
    </div>
    <div class="service-list">
      <article v-for="service in services" :key="service.number" class="service-card">
        <span>{{ service.number }}</span>
        <h3>{{ service.title }}</h3>
        <p>{{ service.text }}</p>
        <button :aria-label="`Learn more about ${service.title}`">↗</button>
      </article>
    </div>
  </section>
</template>
