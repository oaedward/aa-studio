<script setup>
import TeamMemberCard from '../team/TeamMemberCard.vue'
import { team } from '../../data/team'
</script>

<template>
  <section id="team" class="section team-section">
    <div class="section-label"><span>03</span><p>The people</p></div>
    <div class="team-head">
      <p class="eyebrow">Our team</p>
      <h2>Led by people<br />who <em>care.</em></h2>
    </div>
    <div class="team-grid">
      <TeamMemberCard v-for="member in team" :key="member.name" :member="member" />
    </div>
  </section>
</template>

<style scoped>
.team-head {
  margin-left: 13vw;
}

.team-grid {
  display: grid;
  gap: 3vw;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 80px;
}

@media (max-width: 1100px) {
  .team-head {
    margin-left: 8vw;
  }
}

@media (max-width: 800px) {
  .team-head {
    margin-left: 0;
  }
  .team-grid {
    gap: 40px;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 53px;
  }
}

@media (max-width: 480px) {
  .team-grid {
    gap: 32px;
    grid-template-columns: 1fr;
  }
}
</style>
