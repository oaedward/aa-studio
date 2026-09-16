<script setup>
import { processSteps } from '../../data/process'
</script>

<template>
  <section id="process" class="section process-section">
    <div class="section-label"><span>02</span><p>How we work</p></div>
    <div class="process-head">
      <p class="eyebrow">Our process</p>
      <h2>One dream at<br /><em>a time.</em></h2>
    </div>
    <ol class="process-list">
      <li v-for="step in processSteps" :key="step.number" class="process-step">
        <span class="process-number">{{ step.number }}</span>
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.process-head {
  margin-left: 13vw;
}

.process-list {
  display: grid;
  gap: 4vw;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  margin: 80px 0 0;
  padding: 0;
}

.process-step {
  border-top: 1px solid var(--line);
  padding-top: 24px;
}

.process-number {
  color: var(--gold);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
}

.process-step h3 {
  font-size: clamp(1.4rem, 1.2vw + 1rem, 1.7rem);
  font-weight: 500;
  margin: 32px 0 14px;
}

.process-step p {
  color: var(--gray);
  font-size: 0.86rem;
  line-height: 1.8;
}

@media (max-width: 1100px) {
  .process-head {
    margin-left: 8vw;
  }
  .process-list {
    gap: 5vw 3vw;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 800px) {
  .process-head {
    margin-left: 0;
  }
  .process-list {
    gap: 40px;
    grid-template-columns: 1fr;
    margin-top: 53px;
  }
}
</style>
