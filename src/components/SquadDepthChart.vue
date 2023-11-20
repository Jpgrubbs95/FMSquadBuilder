<template>
  <Card v-bind="$attrs">
    <template #title>
      <div class="flex flex-wrap align-items-center justify-content-between gap-2">
        <span class="text-xl text-900 font-bold">Squad Depth Chart</span>
        <Button
          v-if="squadStore.startersAndBackups.length < 11"
          label="Add Position"
          icon="pi pi-plus"
          @click="onAddClicked"
        />
      </div>
    </template>
    <template #content>
      <DataTable
        :value="squadStore.startersAndBackups"
        :class="`p-datatable-sm ${props.tableClass}`"
        scrollable
        scrollHeight="flex"
      >
        <Column v-if="props.showActions" field="order">
          <template #body="slotProps">
            <span class="p-buttonset">
              <Button
                v-if="slotProps.data.order !== 0"
                icon="pi pi-chevron-up"
                size="small"
                text
                @click="decrementOrder(slotProps.data)"
              />
              <Button
                v-if="slotProps.data.order !== squadStore.startersAndBackups.length - 1"
                icon="pi pi-chevron-down"
                size="small"
                text
                @click="incrementOrder(slotProps.data)"
              />
            </span>
          </template>
        </Column>
        <Column field="role" header="Role"></Column>
        <Column field="starter" header="Starter"></Column>
        <Column field="starterRating" header="Rtg"></Column>
        <Column field="backup" header="Backup"></Column>
        <Column field="backupRating" header="Rtg"></Column>
        <Column v-if="props.showActions" field="actions">
          <template #body="slotProps">
            <span class="p-buttonset">
              <Button icon="pi pi-pencil" size="small" text @click="edit(slotProps.data)" />
              <Button
                icon="pi pi-trash"
                size="small"
                text
                @click="deletePosition(slotProps.data)"
              />
            </span>
          </template>
        </Column>
      </DataTable>
    </template>
  </Card>
  <Dialog
    v-model:visible="addModalVisible"
    modal
    class="mr-7"
    header="Add New Position"
    position="right"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <div class="grid formgrid mt-1">
      <div class="col">
        <Dropdown
          v-model="selectedRole"
          :options="roles"
          optionLabel="name"
          placeholder="Select a Role"
          class="w-full"
          filter
        />
      </div>
      <div class="col">
        <Dropdown
          v-model="selectedStarter"
          :options="squadStore.squad"
          optionLabel="Name"
          placeholder="Select a Starter"
          class="w-full"
          filter
        />
      </div>
      <div class="col">
        <Dropdown
          v-model="selectedBackup"
          :options="squadStore.squad"
          optionLabel="Name"
          placeholder="Select a Backup"
          class="w-full"
          filter
        />
      </div>
    </div>
    <template #footer>
      <Button label="Add" icon="pi pi-check" @click="addNewPosition" autofocus />
    </template>
  </Dialog>
</template>

<script setup>
import { useSquadStore } from '../stores/squad'
import { calculatePlayerAbilityForRole, allRoles } from '../utils/positionGradeCalculator'
import { ref, defineProps } from 'vue'

const props = defineProps({
  showActions: {
    type: Boolean,
    default: false
  },
  tableClass: {
    type: String,
    default: null
  }
})

const squadStore = useSquadStore()

const roles = ref(allRoles)

//Position Table
function sortStartersAndBackups() {
  squadStore.startersAndBackups.sort((a, b) => {
    if (a.order > b.order) return 1
    else if (a.order < b.order) return -1
    else return 0
  })
}

function incrementOrder(position) {
  const otherPosition = squadStore.startersAndBackups.find((val) => {
    return val.order === position.order + 1
  })
  position.order++
  otherPosition.order--

  sortStartersAndBackups()
}

function decrementOrder(position) {
  const otherPosition = squadStore.startersAndBackups.find((val) => {
    return val.order === position.order - 1
  })

  position.order--
  otherPosition.order++

  sortStartersAndBackups()
}

function deletePosition(position) {
  squadStore.startersAndBackups = squadStore.startersAndBackups.filter((val) => val !== position)
}

//Add Modal
const addModalVisible = ref(false)
const selectedRole = ref()
const selectedStarter = ref()
const selectedBackup = ref()

function onAddClicked() {
  addModalVisible.value = true
}

function addNewPosition() {
  if (!selectedStarter.value[selectedRole.value.value]) {
    calculatePlayerAbilityForRole(selectedStarter.value, selectedRole.value.value)
  }
  if (!selectedBackup.value[selectedRole.value.value]) {
    calculatePlayerAbilityForRole(selectedBackup.value, selectedRole.value.value)
  }
  squadStore.startersAndBackups.push({
    order: squadStore.startersAndBackups.length,
    role: selectedRole.value.name,
    starter: selectedStarter.value.Name,
    starterDollars: selectedStarter.value.dollars,
    starterRating: selectedStarter.value[selectedRole.value.value],
    backup: selectedBackup.value.Name,
    backupDollars: selectedStarter.value.dollars,
    backupRating: selectedBackup.value[selectedRole.value.value]
  })
  sortStartersAndBackups()
  selectedStarter.value = null
  selectedRole.value = null
  selectedBackup.value = null
  addModalVisible.value = false
}
</script>
