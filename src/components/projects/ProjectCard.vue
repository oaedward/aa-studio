<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="project-card" :class="project.size">
    <RouterLink class="project-open" :to="{ name: 'project', params: { slug: project.slug } }" :aria-label="`View ${project.title} project`">
      <div class="project-image">
        <img :src="project.image" :alt="project.title" />
        <span>View project <i class="fa-solid fa-arrow-right icon-diagonal" aria-hidden="true"></i></span>
      </div>
      <p>{{ project.meta }}</p>
      <h3>{{ project.title }}</h3>
    </RouterLink>
  </article>
</template>

<style scoped>
.project-open {
  color: inherit;
  display: block;
  text-align: left;
  text-decoration: none;
  width: 100%;
}

.project-image {
  height: 600px;
  overflow: hidden;
  position: relative;
}

.project-image img {
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  width: 100%;
  filter: grayscale(0.2);
}

.project-image span {
  background: rgba(19, 19, 19, 0.88);
  bottom: 0;
  color: var(--paper);
  font-size: 0.65rem;
  letter-spacing: 0.16em;
  opacity: 0;
  padding: 15px 20px;
  position: absolute;
  right: 0;
  text-transform: uppercase;
  transform: translateY(100%);
  transition: 0.3s;
}

.project-card:hover img {
  transform: scale(1.04);
}

.project-card:hover .project-image span {
  opacity: 1;
  transform: translateY(0);
}

.project-card p {
  color: var(--gray-light);
  font-size: 0.61rem;
  letter-spacing: 0.18em;
  margin-top: 17px;
  text-transform: uppercase;
}

.project-card h3 {
  font-size: clamp(1.4rem, 1.2vw + 1rem, 1.7rem);
  font-weight: 500;
  margin-top: 8px;
}

@media (max-width: 1100px) {
  .project-image {
    height: 520px;
  }
}

@media (max-width: 800px) {
  .project-card {
    margin: 0 0 35px;
  }
  .project-image {
    height: 340px;
  }
}

@media (max-width: 480px) {
  .project-image {
    height: auto;
    aspect-ratio: 4 / 5;
  }
}
</style>
