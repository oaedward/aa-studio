<script setup>
import BrandLogo from '../common/BrandLogo.vue'
import { useSectionNavigation } from '../../composables/useSectionNavigation'

const { navigateToSection } = useSectionNavigation()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-brand-column">
        <button class="brand footer-brand" @click="navigateToSection('home')">
          <BrandLogo />
        </button>
        <p class="footer-address">Architecture & Interior Design<br />Accra, Ghana</p>
      </div>
      <nav class="footer-nav" aria-label="Footer navigation">
        <button @click="navigateToSection('projects')">Projects</button>
        <button @click="navigateToSection('contact')">Contact</button>
        <a href="mailto:hello@aadesignstudio.com">Email</a>
      </nav>
    </div>
    <small>© {{ new Date().getFullYear() }} AA Design Studio</small>
  </footer>
</template>
