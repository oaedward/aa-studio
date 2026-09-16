<script setup>
defineProps({
  member: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="team-card">
    <div class="team-photo">
      <img v-if="member.image" :src="member.image" :alt="member.name" />
      <span v-else class="team-initials">{{ member.initials }}</span>
    </div>
    <h3>{{ member.name }}</h3>
    <p>{{ member.role }}</p>
  </article>
</template>

<style scoped>
.team-photo {
  aspect-ratio: 4 / 5;
  background: rgba(var(--teal-rgb), 0.14);
  overflow: hidden;
}

.team-photo img {
  height: 100%;
  object-fit: cover;
  width: 100%;
  filter: grayscale(0.5);
}

.team-initials {
  align-items: center;
  color: var(--teal);
  display: flex;
  font-family: 'Manrope', sans-serif;
  font-size: 3rem;
  height: 100%;
  justify-content: center;
  letter-spacing: -0.02em;
  width: 100%;
}

.team-card h3 {
  font-size: clamp(1.2rem, 1vw + 0.9rem, 1.4rem);
  font-weight: 500;
  margin-top: 24px;
}

.team-card p {
  color: var(--gray);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  margin-top: 8px;
}
</style>
