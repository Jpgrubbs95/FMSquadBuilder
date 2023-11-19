<template>
  <div class="grid">
    <div class="col">
      <Card>
        <template #title>
          <div class="flex flex-wrap align-items-center justify-content-between gap-2">
            <span class="text-xl text-900 font-bold">Role Grades</span>
            <MultiSelect
              v-model="selectedRoles"
              display="chip"
              :options="roles"
              optionLabel="name"
              placeholder="Select Roles"
              :maxSelectedLabels="3"
              class="w-auto"
              filter
            />
          </div>
        </template>
        <template #content>
          <DataTable
            :value="squadStore.squad"
            tableStyle="height:80vh"
            :class="`p-datatable-sm`"
            scrollable
            scrollHeight="80vh"
          >
            <Column
              v-for="col of columns"
              :key="col.field"
              :field="col.field"
              :header="col.header"
              sortable
            >
              <template #sorticon="slotProps">
                <span v-if="slotProps.sorted">
                  <i v-if="slotProps.sortOrder === 1" class="pi pi-sort-amount-down"></i>
                  <i v-else class="pi pi-sort-amount-up"></i>
                </span>
              </template>
            </Column>
          </DataTable>
        </template>
      </Card>
    </div>

    <div class="col">
      <SquadDepthChart show-actions></SquadDepthChart>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useSquadStore } from '../stores/squad'
import { calculatePlayerAbilityForRole, allRoles } from '../utils/positionGradeCalculator'
import SquadDepthChart from '../components/SquadDepthChart.vue'

const squadStore = useSquadStore()

const roles = ref(allRoles)

//Ratings table
const selectedRoles = ref([])

const columns = ref([
  { field: 'Name', header: 'Name' },
  { field: 'Age', header: 'Age' },
  { field: 'Position', header: 'Position' },
  { field: 'Left Foot', header: 'Left Foot' },
  { field: 'Right Foot', header: 'Right Foot' },
  { field: 'Height', header: 'Height' }
])

watch(selectedRoles, () => {
  columns.value = [
    { field: 'Name', header: 'Name' },
    { field: 'Age', header: 'Age' },
    { field: 'Position', header: 'Position' },
    { field: 'Left Foot', header: 'Left Foot' },
    { field: 'Right Foot', header: 'Right Foot' },
    { field: 'Height', header: 'Height' }
  ]

  for (let role of selectedRoles.value) {
    columns.value.push({ field: role.value, header: role.value })
    for (let player of squadStore.squad) {
      if (!(role.value in player)) {
        calculatePlayerAbilityForRole(player, role.value)
      }
    }
  }
})
</script>
