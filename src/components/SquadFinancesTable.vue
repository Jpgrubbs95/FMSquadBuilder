<template>
  <Card>
    <template #title>
      <div class="flex flex-wrap align-items-center justify-content-between gap-2">
        <span class="text-xl text-900 font-bold">Finances By Category</span>
      </div>
    </template>
    <template #content>
      <DataTable :value="data" :class="`p-datatable-sm`">
        <Column field="wageCategory" header="Wage Category"></Column>
        <Column field="average" header="Average Salary"></Column>
        <Column field="minimum" header="Minimum Salary"></Column>
        <Column field="maximum" header="Maximum Salary"></Column>
      </DataTable>
    </template>
  </Card>
</template>

<script setup>
import { computed } from 'vue'
import { useSquadStore } from '../stores/squad'

const squadStore = useSquadStore()

const data = computed(() => {
  const keyPlayers = { wageCategory: 'Key Players', players: [] }
  const squadPlayers = { wageCategory: 'Squad Players', players: [] }
  const backupPlayers = { wageCategory: 'Backup Players', players: [] }

  for (let player of squadStore.squad) {
    if (
      player['Agreed Playing Time'] === 'Star Player' ||
      player['Agreed Playing Time'] === 'Important Player'
    ) {
      keyPlayers.players.push(player)
    } else if (
      player['Agreed Playing Time'] === 'Regular Starter' ||
      player['Agreed Playing Time'] === 'First-Choice Goalkeeper'
    ) {
      squadPlayers.players.push(player)
    } else {
      backupPlayers.players.push(player)
    }
  }

  calculateData(keyPlayers)
  calculateData(squadPlayers)
  calculateData(backupPlayers)

  return [keyPlayers, squadPlayers, backupPlayers]
})

const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

function calculateData(playerData) {
  let minimum = -1
  let maximum = 0
  let total = 0

  for (let player of playerData.players) {
    if (minimum < 0 || player.dollars < minimum) {
      minimum = player.dollars
    }
    if (player.dollars > maximum) {
      maximum = player.dollars
    }
    total += player.dollars
  }

  playerData.average = formatter.format(total / playerData.players.length)
  playerData.minimum = formatter.format(minimum)
  playerData.maximum = formatter.format(maximum)
}
</script>
