<script setup>
import { stats } from '../../data/stats'
</script>

<template>
  <section class="stats-section">
    <p class="eyebrow light">Key facts</p>
    <div class="stats-grid">
      <div v-for="stat in stats" :key="stat.label" class="stat">
        <span class="stat-value">{{ stat.value }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-section {
  background: var(--ink);
  color: var(--paper);
  padding: 100px 5vw;
  text-align: center;
}

.stats-grid {
  display: grid;
  gap: 4vw;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 50px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.stat-value {
  font-family: 'Manrope', sans-serif;
  font-size: clamp(2.6rem, 4.5vw, 4.2rem);
  font-weight: 500;
  letter-spacing: -0.03em;
}

.stat-label {
  color: rgba(var(--paper-rgb), 0.55);
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

@media (max-width: 800px) {
  .stats-section {
    padding: 80px 6vw;
  }
  .stats-grid {
    gap: 40px 6vw;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 40px;
  }
}
</style>
