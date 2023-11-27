<script setup>
import { useLayout } from '@/layout/composables/layout'
import { computed } from 'vue'

const { layoutConfig } = useLayout()

const logoUrl = computed(() => {
  return `layout/images/${
    layoutConfig.darkTheme.value ? 'soccer-ball-light' : 'soccer-ball-dark'
  }.png`
})
</script>

<template>
  <div class="layout-footer">
    <img :src="logoUrl" alt="Logo" height="20" class="mr-2" />
    based on code from
    <a
      href="https://youtube.com/@squirrel_plays_fof4318?si=utgRosLkvtEDwbJU"
      class="font-medium ml-2"
      >squirrel_plays</a
    >
  </div>
</template>
<style lang="scss" scoped></style>
