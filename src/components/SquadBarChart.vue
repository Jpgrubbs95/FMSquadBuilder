<template>
  <div class="card h-full">
    <Chart type="bar" :data="chartData" :options="chartOptions" class="h-full" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useSquadStore } from '../stores/squad'
import { useLayout } from '@/layout/composables/layout'

const { layoutConfig } = useLayout()

const squadStore = useSquadStore()

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

const chartData = ref()
const chartOptions = ref()

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement)

  const labels = []

  const starterData = []
  const backupData = []

  for (let position of squadStore.startersAndBackups) {
    labels.push(position.role)
    starterData.push({
      role: position.role,
      playerName: position.starter,
      value: position.starterRating
    })
    backupData.push({
      role: position.role,
      playerName: position.backup,
      value: position.backupRating
    })
  }

  return {
    labels: labels,
    datasets: [
      {
        label: 'Starters',
        backgroundColor: documentStyle.getPropertyValue('--green-500'),
        borderColor: documentStyle.getPropertyValue('--green-500'),
        data: starterData
      },
      {
        label: 'Backups',
        backgroundColor: documentStyle.getPropertyValue('--blue-500'),
        borderColor: documentStyle.getPropertyValue('--blue-500'),
        data: backupData
      }
    ]
  }
}
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--text-color')
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

  return {
    indexAxis: 'y',
    maintainAspectRatio: false,
    aspectRatio: 0.5,
    parsing: {
      xAxisKey: 'value',
      yAxisKey: 'role'
    },
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = `${context.raw.playerName} - ${context.raw.value}` || ''
            return label
          }
        }
      }
    },
    scales: {
      x: {
        max: 20,
        ticks: {
          color: textColor,
          font: {
            weight: 500
          }
        },
        grid: {
          display: false,
          drawBorder: false
        }
      },
      y: {
        ticks: {
          color: textColor
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false
        }
      }
    }
  }
}

watch(layoutConfig.darkThemeToggled, () => {
  chartOptions.value = setChartOptions()
})
</script>
