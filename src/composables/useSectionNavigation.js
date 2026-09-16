import { nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export const useSectionNavigation = () => {
  const route = useRoute()
  const router = useRouter()

  const navigateToSection = async (id, routeName = 'home') => {
    const hash = `#${id}`

    const existing = document.getElementById(id)
    if (existing) {
      existing.scrollIntoView({ behavior: 'smooth' })
      return
    }

    if (route.name !== routeName || route.hash !== hash) {
      await router.push({ name: routeName, hash })
      return
    }

    await nextTick()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return { navigateToSection }
}
