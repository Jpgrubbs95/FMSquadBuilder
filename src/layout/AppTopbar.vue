<script setup>
import { ref, computed, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue'
import { useLayout } from '@/layout/composables/layout'
import { useRouter } from 'vue-router'
import { usePrimeVue } from 'primevue/config'
import Tours from '../components/Tours.vue'

const { layoutConfig, onMenuToggle } = useLayout()

const outsideClickListener = ref(null)
const topbarMenuActive = ref(false)
const router = useRouter()
const PrimeVue = usePrimeVue()

onMounted(() => {
  bindOutsideClickListener()
})

onBeforeUnmount(() => {
  unbindOutsideClickListener()
})

const logoUrl = computed(() => {
  return `layout/images/${
    layoutConfig.darkTheme.value ? 'soccer-ball-light' : 'soccer-ball-dark'
  }.png`
})

const onTopBarMenuButton = () => {
  topbarMenuActive.value = !topbarMenuActive.value
}
const onChangeThemeClick = () => {
  layoutConfig.darkTheme.value = !layoutConfig.darkTheme.value
  if (layoutConfig.darkTheme.value) {
    PrimeVue.changeTheme('lara-light-blue', 'lara-dark-blue', 'theme-link', () => {
      layoutConfig.darkThemeToggled.value = true
    })
  } else {
    PrimeVue.changeTheme('lara-dark-blue', 'lara-light-blue', 'theme-link', () => {
      layoutConfig.darkThemeToggled.value = false
    })
  }
}

const { proxy } = getCurrentInstance()

const onHelpClicked = () => {
  if (router.currentRoute.value.name === 'scouting') {
    proxy.$tours['scoutingTour'].start()
  }
  if (router.currentRoute.value.name === 'home') {
    proxy.$tours['squadTour'].start()
  }
  if (router.currentRoute.value.name === 'roleGrades') {
    proxy.$tours['squadDesignerTour'].start()
  }
  if (router.currentRoute.value.name === 'squadAnalysis') {
    proxy.$tours['squadAnalysisTour'].start()
  }
}

const topbarMenuClasses = computed(() => {
  return {
    'layout-topbar-menu-mobile-active': topbarMenuActive.value
  }
})

const bindOutsideClickListener = () => {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event) => {
      if (isOutsideClicked(event)) {
        topbarMenuActive.value = false
      }
    }
    document.addEventListener('click', outsideClickListener.value)
  }
}
const unbindOutsideClickListener = () => {
  if (outsideClickListener.value) {
    document.removeEventListener('click', outsideClickListener)
    outsideClickListener.value = null
  }
}
const isOutsideClicked = (event) => {
  if (!topbarMenuActive.value) return

  const sidebarEl = document.querySelector('.layout-topbar-menu')
  const topbarEl = document.querySelector('.layout-topbar-menu-button')

  return !(
    sidebarEl.isSameNode(event.target) ||
    sidebarEl.contains(event.target) ||
    topbarEl.isSameNode(event.target) ||
    topbarEl.contains(event.target)
  )
}
</script>

<template>
  <div class="layout-topbar">
    <router-link to="/" class="layout-topbar-logo">
      <img :src="logoUrl" alt="logo" />
      <span>FM Squad Builder</span>
    </router-link>

    <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
      <i class="pi pi-bars"></i>
    </button>

    <button
      class="p-link layout-topbar-menu-button layout-topbar-button"
      @click="onTopBarMenuButton()"
    >
      <i class="pi pi-ellipsis-v"></i>
    </button>

    <div class="layout-topbar-menu" :class="topbarMenuClasses">
      <button @click="onHelpClicked" class="p-link layout-topbar-button">
        <i class="pi pi-question" aria-label="help"></i>
      </button>
      <a
        href="https://github.com/Jpgrubbs95/FMSquadBuilder"
        target="_blank"
        rel="noopener noreferrer"
        class="p-button p-link layout-topbar-button"
        ><i class="pi pi-github"></i
      ></a>
      <button @click="onChangeThemeClick()" class="p-link layout-topbar-button">
        <i
          class="pi"
          :class="{
            'pi-moon': layoutConfig.darkTheme.value,
            'pi-sun': !layoutConfig.darkTheme.value
          }"
        ></i>
        <span>Change Theme</span>
      </button>
    </div>
  </div>
  <Tours></Tours>
</template>

<style lang="scss" scoped></style>
