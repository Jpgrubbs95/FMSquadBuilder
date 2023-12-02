<template>
  <div class="grid">
    <div class="col-12 xl:col-6">
      <Card>
        <template #title>Wage Structure</template>
        <template #content>
          <div class="flex justify-content-center">
            <SquadFinancesPieChart></SquadFinancesPieChart>
          </div>
        </template>
      </Card>
    </div>
    <div class="col-12 xl:col-6">
      <div class="col-12">
        <SquadFinancesTable></SquadFinancesTable>
      </div>
      <div class="col-12">
        <Card>
          <template #title>Wage Categories by Agreed Playing Time</template>
          <template #content>
            <p>Key Players = Star Player, Important Player</p>
            <p>Regular Starters = Regular Starter, First-Choice Goalkeeper</p>
            <p>Backup Players = Squad Player, Fringe Player, Backup</p>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import SquadFinancesPieChart from '../components/SquadFinancesPieChart.vue'
import SquadFinancesTable from '../components/SquadFinancesTable.vue'
</script>
