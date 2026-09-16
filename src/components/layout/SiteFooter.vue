<script setup>
import BrandLogo from '../common/BrandLogo.vue'
import { useSectionNavigation } from '../../composables/useSectionNavigation'

const { navigateToSection } = useSectionNavigation()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-brand-column">
        <button class="brand footer-brand" aria-label="Urban Atelier + Partners home" @click="navigateToSection('home', 'home')">
          <BrandLogo />
        </button>
        <!-- <p class="footer-address">Architecture &amp; Interior Design<br />Accra, Ghana</p> -->
      </div>
      <nav class="footer-nav" aria-label="Footer navigation">
        <button @click="navigateToSection('about', 'about')">About</button>
        <button @click="navigateToSection('services', 'services')">Services</button>
        <button @click="navigateToSection('projects', 'projects')">Projects</button>
        <!-- <button @click="navigateToSection('team', 'about')">Team</button> -->
        <button @click="navigateToSection('contact', 'home')">Contact</button>
        <a href="mailto:hello@urbanatelier.studio">Email</a>
      </nav>
    </div>
    <small>© {{ new Date().getFullYear() }} A.A Urban Atelier + Partners</small>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--ink);
  color: var(--paper);
  padding: 55px 5vw 35px;
}

.footer-main {
  align-items: start;
  display: grid;
  gap: 4vw;
  grid-template-columns: 1fr auto;
  margin: 0 auto;
  max-width: 1440px;
}

.site-footer p,
.site-footer a,
.site-footer button {
  color: rgba(var(--paper-rgb), 0.62);
  font-size: 0.7rem;
  line-height: 1.8;
  text-decoration: none;
}

.site-footer .footer-brand {
  color: var(--paper);
  justify-self: start;
  width: max-content;
}

.footer-address {
  margin-top: 18px;
}

.footer-nav {
  display: flex;
  gap: 24px;
  justify-content: flex-end;
}

.site-footer small {
  border-top: 1px solid rgba(var(--paper-rgb), 0.14);
  color: rgba(var(--paper-rgb), 0.45);
  display: block;
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  margin: 34px auto 0;
  max-width: 1440px;
  padding-top: 22px;
  text-transform: uppercase;
}

@media (max-width: 800px) {
  .site-footer {
    padding: 45px 6vw 25px;
  }
  .footer-main {
    display: grid;
    gap: 22px;
    grid-template-columns: 1fr;
    text-align: center;
  }
  .site-footer .footer-brand {
    justify-self: center;
  }
  .footer-nav {
    justify-content: center;
    flex-wrap: wrap;
  }
  .site-footer small {
    margin-top: 27px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .site-footer {
    padding: 40px 5vw 23px;
  }
  .footer-nav {
    flex-wrap: wrap;
    gap: 14px 22px;
  }
}
</style>
