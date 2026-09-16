<template>
  <section class="quote-section">
    <img src="/images/courtyard-wide.jpg" alt="Courtyard residence at dusk" />
    <div>
      <p class="eyebrow light">Our approach</p>
      <blockquote>"Every space should tell a quiet story about the people who live within it."</blockquote>
      <p class="quote-signoff">A.A Urban Atelier + Partners</p>
    </div>
  </section>
</template>

<style scoped>
.quote-section {
  align-items: end;
  background: var(--ink);
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 650px;
  position: relative;
}

.quote-section img {
  height: 650px;
  object-fit: cover;
  width: 100%;
  filter: grayscale(0.4);
}

.quote-section div {
  color: var(--paper);
  padding: 0 5vw 95px;
}

blockquote {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 500;
  font-size: clamp(2.3rem, 4vw, 4.2rem);
  line-height: 1.15;
  margin: 0;
}

.quote-signoff {
  color: var(--gold);
  font-size: 0.64rem;
  letter-spacing: 0.23em;
  margin-top: 32px;
  text-transform: uppercase;
}

@media (max-width: 1100px) {
  .quote-section,
  .quote-section img {
    min-height: 560px;
  }
  .quote-section img {
    height: 560px;
  }
}

@media (max-width: 800px) {
  .quote-section {
    display: block;
    min-height: 0;
  }
  .quote-section img {
    height: 360px;
    min-height: 0;
  }
  .quote-section div {
    padding: 55px 6vw 68px;
  }
}

@media (max-width: 480px) {
  .quote-section img {
    height: 280px;
    min-height: 0;
  }
  .quote-section div {
    padding: 46px 5vw 56px;
  }
  blockquote {
    font-size: 2.2rem;
  }
}
</style>
