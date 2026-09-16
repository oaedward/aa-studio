<script setup>
import { team } from '../../data/team'

defineProps({
  variant: {
    type: String,
    default: 'page',
  },
})

const founder = team[0]
</script>

<template>
  <section :id="variant === 'teaser' ? 'about-preview' : 'about'" class="section about-section">
    <div class="section-label"><span>01</span><p>About the studio</p></div>
    <div class="about-intro">
      <p class="eyebrow">A.A Urban Atelier + Partners</p>
      <h2>Clarity, identity,<br /><em>refined elegance.</em></h2>
    </div>
    <div class="about-grid">
      <img class="about-image" src="/images/studio-visit.jpg" alt="Design review in a completed interior" />
      <div class="about-copy">
        <p class="lead">A.A Urban Atelier + Partners is an architecture and interior design practice creating spaces that feel as good as they look.</p>
        <p>Our work is guided by a clear understanding of people, place, and purpose. Each project is approached one at a time, bringing together measured planning, expressive details, and lasting materials.</p>
        <RouterLink v-if="variant === 'teaser'" class="text-link" :to="{ name: 'about' }">
          More about us <span><i class="fa-solid fa-arrow-right icon-diagonal" aria-hidden="true"></i></span>
        </RouterLink>
      </div>
      <div class="about-detail">
        <img src="/images/material-stone.jpg" alt="Detailed stone wall material study" />
        <p>Materiality, light, and proportion are central to every space we shape.</p>
      </div>
    </div>

    <div v-if="variant !== 'teaser'" class="about-story">
      <div class="about-story-copy">
        <p class="eyebrow">Our story</p>
        <p>
          Founded in Accra in 2014, A.A Urban Atelier + Partners began as a two-person studio with a simple belief: that
          good design is measured by how a space feels to live in, not just how it photographs. That belief has
          shaped every project we have taken on since, from single-family homes to larger residential communities
          across Ghana.
        </p>
        <p>
          We work in small teams and take on a limited number of projects at a time, because attention is the one
          resource that cannot be scaled. Every client works directly with our senior architects from first sketch
          through to final handover, and every material choice is made on site, not from a catalogue.
        </p>
        <p>
          As the studio has grown, that commitment has not changed. We design spaces around the people who will
          actually live in them, and we stand behind that work long after the keys are handed over.
        </p>
      </div>
      <div class="about-signature">
        <p class="signature-name">{{ founder.name }}</p>
        <p class="signature-role">{{ founder.role }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-intro {
  margin-left: 13vw;
}

.about-grid {
  display: grid;
  gap: 4vw;
  grid-template-columns: 1.22fr 0.9fr 0.52fr;
  margin-top: 65px;
}

.about-image {
  height: 640px;
  object-fit: cover;
  width: 100%;
  filter: grayscale(0.15);
}

.about-copy {
  align-self: center;
  padding-right: 2vw;
}

.about-copy p {
  color: var(--gray);
  font-size: 0.95rem;
  line-height: 1.9;
  margin-bottom: 24px;
}

.about-copy .lead {
  color: var(--ink);
  font-size: 1.3rem;
  line-height: 1.55;
}

.about-detail {
  align-self: end;
}

.about-detail img {
  filter: grayscale(0.4);
  height: 260px;
  object-fit: cover;
  width: 100%;
}

.about-detail p {
  color: var(--gray-light);
  font-size: 0.77rem;
  line-height: 1.65;
  padding: 15px 0;
}

.about-story {
  border-top: 1px solid var(--line);
  margin: 90px 0 0 13vw;
  padding-top: 70px;
}

.about-story-copy {
  max-width: 640px;
}

.about-story-copy p {
  color: var(--gray);
  font-size: 0.95rem;
  line-height: 1.9;
  margin-bottom: 24px;
}

.about-signature {
  margin-top: 40px;
}

.signature-name {
  color: var(--ink);
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-style: italic;
  font-weight: 500;
}

.signature-role {
  color: var(--gray);
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  margin-top: 6px;
  text-transform: uppercase;
}

@media (max-width: 1100px) {
  .about-intro {
    margin-left: 8vw;
  }
  .about-grid {
    gap: 3vw;
    grid-template-columns: 1.15fr 0.85fr;
  }
  .about-detail {
    display: none;
  }
  .about-image {
    height: 560px;
  }
  .about-story {
    margin-left: 8vw;
  }
}

@media (max-width: 800px) {
  .about-intro {
    margin-left: 0;
  }
  .about-grid {
    gap: 25px;
    grid-template-columns: 1fr;
    margin-top: 42px;
  }
  .about-image {
    height: 370px;
  }
  .about-copy {
    padding: 4px 0;
  }
  .about-detail {
    display: none;
  }
  .about-story {
    margin-left: 0;
    margin-top: 60px;
    padding-top: 50px;
  }
  .signature-name {
    font-size: 1.7rem;
  }
}

@media (max-width: 480px) {
  .about-grid {
    margin-top: 34px;
  }
  .about-image {
    height: 300px;
  }
  .about-copy .lead {
    font-size: 1.15rem;
  }
}
</style>
