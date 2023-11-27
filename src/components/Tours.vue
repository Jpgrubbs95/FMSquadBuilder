<template>
  <v-tour name="scoutingTour" :steps="scoutingSteps" :options="{ highlight: true }"> </v-tour>
</template>

<script setup>
import { ref } from 'vue'

const scoutingSteps = ref([
  {
    target: '#scouting-tour-0', // We're using document.querySelector() under the hood
    content: `First, click here to download the view that you need to use to export your squad in Football Manager`
  },
  {
    target: '#scouting-tour-1', // We're using document.querySelector() under the hood
    content: `Next, export your shortlist or scouted players as a web page while you have the appropriate view selected. Upload the exported file by pressing this button.`
  },
  {
    target: '.scouting-tour-2', // We're using document.querySelector() under the hood
    content: `Select the roles that you wish to evaluate these players by. Any players whose attributes have not been scouted will be graded pessimistically by the bottom of the range for that attribute. If there is no data for a required attribute, no grade will be given.`,
    params: {
      placement: 'left',
      highlight: false
    }
  },
  {
    target: '#scouting-tour-3', // We're using document.querySelector() under the hood
    content: `You can now view and sort by the roles you have selected to evaluate the scouted players.`,
    params: {
      placement: 'auto'
    }
  }
])
</script>

<style lang="scss">
.v-step {
  background: var(--primary-color) !important;
  color: var(--primary-color-text) !important;
  font-weight: bold;
}

.v-step__button {
  color: var(--primary-color-text) !important;
  font-weight: bold;
  border-color: var(--primary-color-text) !important;
}

.v-step__button:hover {
  background-color: var(--primary-300) !important;
}

.v-tour__target--highlighted {
  box-shadow: 0 0 0 99999px rgba(0, 0, 0, 0.4) !important;
}
</style>
