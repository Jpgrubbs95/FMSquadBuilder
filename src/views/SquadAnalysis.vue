<template>
  <div class="grid">
    <div class="col-6">
      <div class="grid">
        <div class="col-6">
          <Card class="h-full" id="squad-tour-6">
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
                  {{ squadStore.bestValues.starterDollarsPerRoleGrade }} {{squadStore.wageUnits}} per position rating
                </div>
                <div class="col-12">
                  Best Backup Value: {{ squadStore.bestValues.backupPlayer }} at
                  {{ squadStore.bestValues.backupDollarsPerRoleGrade }} {{squadStore.wageUnits}} per position rating
                </div>
              </div>
            </template>
          </Card>
        </div>
        <div class="col-6">
          <Card class="h-full" id="squad-tour-7">
            <template #title>
              Largest Drop-off
              <Chip
                :label="squadStore.largestDropOff.ratingDifference"
                class="infoChip ml-2 mr-2"
              ></Chip>
            </template>
            <template #content>
              <DataTable :value="squadStore.largestDropOff.position" :class="`p-datatable-sm`">
                <Column field="role.name" header="Role"></Column>
                <Column field="starter.Name" header="Starter"></Column>
                <Column field="starterRating" header="Rtg"></Column>
                <Column field="backup.Name" header="Backup"></Column>
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
      <SquadBarChart id="squad-tour-8"></SquadBarChart>
    </div>
  </div>
</template>

<script setup>
import SquadBarChart from '../components/SquadBarChart.vue'
import SquadDepthChart from '../components/SquadDepthChart.vue'
import { useSquadStore } from '../stores/squad'
import { getCurrentInstance, onMounted } from 'vue';

const squadStore = useSquadStore()
const { proxy } = getCurrentInstance();

onMounted(() => {
  if(proxy.$tours['squadTour']?.currentStep?.value === 5) {
      proxy.$tours['squadTour'].nextStep()
  }
  if(proxy.$tours['squadDesignerTour']?.currentStep?.value === 2) {
      proxy.$tours['squadDesignerTour'].nextStep()
  }
})

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
