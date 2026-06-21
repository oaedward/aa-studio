import { nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export const useSectionNavigation = () => {
  const route = useRoute()
  const router = useRouter()

  const navigateToSection = async (id) => {
    const hash = `#${id}`

    if (route.name !== 'home') {
      await router.push({ name: 'home', hash })
      return
    }

    if (route.hash !== hash) {
      await router.push({ name: 'home', hash })
      return
    }

    await nextTick()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return { navigateToSection }
}
