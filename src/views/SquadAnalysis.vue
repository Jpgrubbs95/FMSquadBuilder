<template>
  <div class="grid">
    <div class="col-6">
      <div class="grid">
        <div class="col-6">
          <Card class="h-full">
            <template #title> Average Rating </template>
            <template #content>
              <div class="grid">
                <div class="col-12 xl:col-6">
                  Starters:
                  <Chip :label="squadStore.startersAverage" class="goodChip ml-2 mr-2"></Chip>
                </div>
                <div class="col-12 xl:col-6">
                  Backups:
                  <Chip :label="squadStore.backupsAverage" class="goodChip ml-2 mr-2"></Chip>
                </div>
              </div>
              <div class="grid mt-1">
                <div class="col-12">
                  Best Starter Value: {{ squadStore.bestValues.starterPlayer }} at
                  {{ squadStore.bestValues.starterDollarsPerRoleGrade }} p/a per position rating
                </div>
                <div class="col-12">
                  Best Backup Value: {{ squadStore.bestValues.backupPlayer }} at
                  {{ squadStore.bestValues.backupDollarsPerRoleGrade }} p/a per position rating
                </div>
              </div>
            </template>
          </Card>
        </div>
        <div class="col-6">
          <Card class="h-full">
            <template #title>
              Largest Drop-off
              <Chip
                :label="squadStore.largestDropOff.ratingDifference"
                class="infoChip ml-2 mr-2"
              ></Chip>
            </template>
            <template #content>
              <DataTable :value="squadStore.largestDropOff.position" :class="`p-datatable-sm`">
                <Column field="role" header="Role"></Column>
                <Column field="starter" header="Starter"></Column>
                <Column field="starterRating" header="Rtg"></Column>
                <Column field="backup" header="Backup"></Column>
                <Column field="backupRating" header="Rtg"></Column>
              </DataTable>
            </template>
          </Card>
        </div>
        <div class="col-12">
          <SquadDepthChart></SquadDepthChart>
        </div>
      </div>
    </div>
    <div class="col-6">
      <SquadBarChart></SquadBarChart>
    </div>
  </div>
</template>

<script setup>
import SquadBarChart from '../components/SquadBarChart.vue'
import SquadDepthChart from '../components/SquadDepthChart.vue'
import { useSquadStore } from '../stores/squad'

const squadStore = useSquadStore()
</script>

<style lang="scss">
.goodChip {
  background-color: var(--green-500) !important;
  color: var(--primary-color-text) !important;
}
.infoChip {
  background-color: var(--primary-color) !important;
  color: var(--primary-color-text) !important;
}
</style>
