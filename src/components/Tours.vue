<template>
  <v-tour name="scoutingTour" :steps="scoutingSteps" :options="{ highlight: true }"> </v-tour>
  <v-tour name="squadTour" :steps="squadSteps" :options="{ highlight: true }"></v-tour>
  <v-tour name="squadDesignerTour" :steps="squadDesignerSteps" :options="{ highlight: true }"></v-tour>
  <v-tour name="squadAnalysisTour" :steps="squadAnalysisSteps" :options="{ highlight: true }"></v-tour>
</template>

<script setup>
import { ref } from 'vue'

const scoutingSteps = ref([
  {
    target: '#scouting-tour-0', // We're using document.querySelector() under the hood
    content: `First, click here to download the view that you need to use to export your scouted players in Football Manager`
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

const fullSquadTour3 =   {
    target: '#squad-tour-3', // We're using document.querySelector() under the hood
    content: `Use this table to view and sort your squad by role/position ratings.`,
  };

const fullSquadTour4 =   {
    target: '#squad-tour-4', // We're using document.querySelector() under the hood
    content: `Select the roles from your tactic here, and assign players as starters and backups.`,
  };

const fullSquadTour5 =   {
    target: '#squad-tour-5', // We're using document.querySelector() under the hood
    content: `When you've finished selecting your squad, click here to analyze statistics about them.`,
    params: {
      placement: 'bottom',
      highlight: false
    }
  };

  const fullSquadTour6 =   {
    target: '#squad-tour-6', // We're using document.querySelector() under the hood
    content: `Use these values to give an idea of what the minimum rating of players you're wanting to bring into your squad should be.`,
  };

  const fullSquadTour7 =   {
    target: '#squad-tour-7', // We're using document.querySelector() under the hood
    content: `This card shows the role in your squad with the largest drop-off between your starter and backup, to give an idea of where your squad depth could use strengthening.`,
  };

  const fullSquadTour8 =   {
    target: '#squad-tour-8', // We're using document.querySelector() under the hood
    content: `This chart shows the ratings for each player in your squad to use for a quick analysis of your squad strengths and weaknesses. Click the starters or backup labels at the top to toggle visibility.`,
  };

const squadSteps = ref([
{
    target: '#squad-tour-0', // We're using document.querySelector() under the hood
    content: `First, click here to download the view that you need to use to export your squad in Football Manager`
  },
  {
    target: '#squad-tour-1', // We're using document.querySelector() under the hood
    content: `Next, export your squad as a web page while you have the appropriate view selected. Upload the exported file by pressing this button.`
  },
  {
    target: '#squad-tour-2', // We're using document.querySelector() under the hood
    content: `If your squad has been uploaded successfully, you can now click here to assign players to roles.`,
  },
  fullSquadTour3,
  fullSquadTour4,
  fullSquadTour5,
  fullSquadTour6,
  fullSquadTour7,
  fullSquadTour8
])

const squadDesignerSteps = ref([
  fullSquadTour3,
  fullSquadTour4,
  fullSquadTour5,
  fullSquadTour6,
  fullSquadTour7,
  fullSquadTour8
])

const squadAnalysisSteps = ref([
  fullSquadTour6,
  fullSquadTour7,
  fullSquadTour8
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
