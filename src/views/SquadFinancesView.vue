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
      <SquadFinancesTable></SquadFinancesTable>
    </div>
  </div>
</template>

<script setup>
import SquadFinancesPieChart from '../components/SquadFinancesPieChart.vue'
import SquadFinancesTable from '../components/SquadFinancesTable.vue'
</script>
