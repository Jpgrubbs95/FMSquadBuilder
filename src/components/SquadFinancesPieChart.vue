<template>
  <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useSquadStore } from '../stores/squad'
import { useLayout } from '@/layout/composables/layout'

const squadStore = useSquadStore()

const { layoutConfig } = useLayout()

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

const chartData = ref()
const chartOptions = ref(null)

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body)

  return {
    labels: ['Key Players', 'Regular Starters', 'Backups', 'Youth'],
    datasets: [
      {
        data: [
          squadStore.playerSalaryTotals.keyPlayerTotal,
          squadStore.playerSalaryTotals.regularStarterTotal,
          squadStore.playerSalaryTotals.backupPlayerTotal,
          squadStore.playerSalaryTotals.youthTotal
        ],
        backgroundColor: [
          documentStyle.getPropertyValue('--green-500'),
          documentStyle.getPropertyValue('--blue-500'),
          documentStyle.getPropertyValue('--yellow-500'),
          documentStyle.getPropertyValue('--gray-500')
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue('--green-400'),
          documentStyle.getPropertyValue('--blue-400'),
          documentStyle.getPropertyValue('--yellow-400'),
          documentStyle.getPropertyValue('--gray-500')
        ]
      }
    ]
  }
}

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--text-color')

  return {
    plugins: {
      legend: {
        labels: {
          cutout: '60%',
          color: textColor
        }
      }
    }
  }
}

watch(layoutConfig.darkThemeToggled, () => {
  chartOptions.value = setChartOptions()
})
</script>
