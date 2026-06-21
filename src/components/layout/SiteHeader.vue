<script setup>
import { ref } from 'vue'
import BrandLogo from '../common/BrandLogo.vue'
import { navItems } from '../../data/navigation'
import { useSectionNavigation } from '../../composables/useSectionNavigation'

const isMenuOpen = ref(false)
const { navigateToSection } = useSectionNavigation()

const navigate = (id) => {
  isMenuOpen.value = false
  navigateToSection(id)
}
</script>

<template>
  <header class="site-header">
    <button class="brand" aria-label="AA Design Studio home" @click="navigate('home')">
      <BrandLogo />
    </button>
    <nav class="desktop-nav" aria-label="Primary navigation">
      <button v-for="[label, id] in navItems" :key="id" @click="navigate(id)">{{ label }}</button>
    </nav>
    <button class="menu-toggle" :class="{ open: isMenuOpen }" aria-label="Toggle menu" @click="isMenuOpen = !isMenuOpen">
      <span></span><span></span>
    </button>
    <nav v-if="isMenuOpen" class="mobile-nav" aria-label="Mobile navigation">
      <button v-for="[label, id] in navItems" :key="id" @click="navigate(id)">{{ label }}</button>
    </nav>
  </header>
</template>
