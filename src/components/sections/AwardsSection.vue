<script setup>
import { awards } from '../../data/awards'
</script>

<template>
  <section id="awards" class="section awards-section">
    <div class="section-label"><span>04</span><p>Recognition</p></div>
    <div class="awards-head">
      <p class="eyebrow">Awards</p>
      <h2>Recognized for<br /><em>considered work.</em></h2>
    </div>
    <ul class="awards-list">
      <li v-for="award in awards" :key="`${award.year}-${award.title}`" class="awards-row">
        <span class="awards-year">{{ award.year }}</span>
        <span class="awards-title">{{ award.title }}</span>
        <span class="awards-org">{{ award.org }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.awards-head {
  margin-left: 13vw;
}

.awards-list {
  border-top: 1px solid var(--line);
  list-style: none;
  margin: 70px 0 0;
  padding: 0;
}

.awards-row {
  align-items: baseline;
  border-bottom: 1px solid var(--line);
  display: grid;
  gap: 24px;
  grid-template-columns: 90px 1fr auto;
  padding: 22px 0;
}

.awards-year {
  color: var(--gold);
  font-size: 0.72rem;
  letter-spacing: 0.16em;
}

.awards-title {
  font-family: 'Manrope', sans-serif;
  font-size: 1.15rem;
  font-weight: 500;
}

.awards-org {
  color: var(--gray);
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  text-align: right;
}

@media (max-width: 1100px) {
  .awards-head {
    margin-left: 8vw;
  }
}

@media (max-width: 800px) {
  .awards-head {
    margin-left: 0;
  }
  .awards-list {
    margin-top: 53px;
  }
  .awards-row {
    gap: 6px 16px;
    grid-template-columns: 70px 1fr;
    padding: 20px 0;
  }
  .awards-org {
    grid-column: 2 / 3;
    text-align: left;
  }
}

@media (max-width: 480px) {
  .awards-row {
    grid-template-columns: 1fr;
  }
  .awards-org {
    grid-column: 1 / 2;
  }
}
</style>
