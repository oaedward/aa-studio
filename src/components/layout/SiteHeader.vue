<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import BrandLogo from '../common/BrandLogo.vue'
import { navItems } from '../../data/navigation'
import { useSectionNavigation } from '../../composables/useSectionNavigation'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const { navigateToSection } = useSectionNavigation()

const navigate = (id, routeName) => {
  isMenuOpen.value = false
  navigateToSection(id, routeName)
}

const updateScrolled = () => {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => {
  updateScrolled()
  window.addEventListener('scroll', updateScrolled, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrolled)
})
</script>

<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">
    <button class="brand" aria-label="Urban Atelier + Partners home" @click="navigate('home', 'home')">
      <BrandLogo />
    </button>
    <nav class="desktop-nav" aria-label="Primary navigation">
      <button v-for="[label, id, routeName] in navItems" :key="id" @click="navigate(id, routeName)">{{ label }}</button>
    </nav>
    <button class="menu-toggle" :class="{ open: isMenuOpen }" aria-label="Toggle menu" @click="isMenuOpen = !isMenuOpen">
      <span></span><span></span>
    </button>
    <nav v-if="isMenuOpen" class="mobile-nav" aria-label="Mobile navigation">
      <button v-for="[label, id, routeName] in navItems" :key="id" @click="navigate(id, routeName)">{{ label }}</button>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  align-items: center;
  display: flex;
  height: 88px;
  justify-content: space-between;
  left: 0;
  padding: 0 4.2vw;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 50;
  color: var(--paper);
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background 0.3s ease, border-color 0.3s ease, height 0.3s ease;
}

.site-header.scrolled {
  height: 74px;
  background: rgba(var(--ink-rgb), 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line-on-dark);
}

.brand {
  align-items: center;
  display: flex;
  gap: 12px;
  text-align: left;
}

.desktop-nav {
  display: flex;
  gap: 34px;
}

.desktop-nav button {
  color: var(--paper);
  font-size: 0.71rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.menu-toggle,
.mobile-nav {
  display: none;
}

@media (max-width: 1100px) {
  .site-header {
    padding: 0 4vw;
  }
  .desktop-nav {
    gap: 22px;
  }
}

@media (max-width: 800px) {
  .site-header,
  .site-header.scrolled {
    height: 70px;
    padding: 0 6vw;
  }
  .desktop-nav {
    display: none;
  }
  .menu-toggle {
    display: grid;
    gap: 7px;
  }
  .menu-toggle span {
    background: var(--paper);
    display: block;
    height: 1px;
    transition: 0.25s;
    width: 26px;
  }
  .menu-toggle.open span:first-child {
    transform: translateY(4px) rotate(45deg);
  }
  .menu-toggle.open span:last-child {
    transform: translateY(-4px) rotate(-45deg);
  }
  .mobile-nav {
    background: var(--ink);
    display: grid;
    gap: 16px;
    left: 0;
    max-height: calc(100svh - 70px);
    overflow-y: auto;
    padding: 34px 6vw;
    position: absolute;
    right: 0;
    top: 70px;
  }
  .mobile-nav button {
    color: var(--paper);
    font-size: 0.69rem;
    letter-spacing: 0.18em;
    text-align: left;
    text-transform: uppercase;
  }
}

@media (max-width: 480px) {
  .site-header {
    padding: 0 5vw;
  }
}
</style>
