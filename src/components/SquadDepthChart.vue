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
        @rowReorder="onRowReorder"
        editMode="cell" 
        @cell-edit-complete="onCellEditComplete"
      >
        <Column v-if="props.editable" rowReorder headerStyle="width: 3rem" :reorderableColumn="false">
        </Column>
        <Column field="role" header="Role">
          <template #body="{data, field}">
            <Dropdown v-if="props.editable"
                  v-model="data[field]"
                  :options="roles"
                  optionLabel="name"
                  placeholder="Select a Role"
                  class="w-full"
                  filter
                  @change="onRoleSelected(data, $event)"
                />
                <span v-else>{{ data[field]?.name }}</span>
          </template>
        </Column>
        <Column field="starter" header="Starter"><template #body="{data}">
          
          <Dropdown v-if="props.editable"
          v-model="data.starter"
          :options="squadStore.squad"
          optionLabel="Name"
          placeholder="Select a Starter"
          class="w-full"
          filter
          @change="onStarterSelected(data, $event)"
        />                 <span v-else>{{ data.starter.Name  }}</span>
</template></Column>
        <Column field="starterRating" header="Rtg"></Column>
        <Column field="backup" header="Backup"><template #body="{data}">
          <Dropdown v-if="props.editable"
          v-model="data.backup"
          :options="squadStore.squad"
          optionLabel="Name"
          placeholder="Select a Backup"
          class="w-full"
          filter
          @change="onBackupSelected(data, $event)"
        />                 <span v-else>{{ data.backup.Name  }}</span>
</template>
        </Column>
        <Column field="backupRating" header="Rtg"></Column>
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
  editable: {
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

const onRowReorder = (event) => {
  squadStore.startersAndBackups = event.value

}

const onCellEditComplete = (event) => {
    let { data, newValue, field } = event;

    switch (field) {
      default:
        data[field] = newValue;
    }
  }

const onRoleSelected = (position) =>{
  
  if(position.starter){
    onStarterSelected(position, {value:position.starter})
  }
  if(position.backup){
    onBackupSelected(position, {value:position.backup})
  }
}

const onStarterSelected = (position, player) => {
  if(position.role){
    if (!player.value[position.role.value]) {
      calculatePlayerAbilityForRole(player.value, position.role.value)
    }
    position.starterRating = player.value[position.role.value]
  }
}

const onBackupSelected = (position, player) => {
  if(position.role){
    if (!player.value[position.role.value]) {
      calculatePlayerAbilityForRole(player.value, position.role.value)
    }
    position.backupRating = player.value[position.role.value]
  }
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
    role: selectedRole.value,
    starter: selectedStarter.value.Name,
    starterRating: selectedStarter.value[selectedRole.value.value],
    backup: selectedBackup.value.Name,
    backupRating: selectedBackup.value[selectedRole.value.value]
  })
  sortStartersAndBackups()
  selectedStarter.value = null
  selectedRole.value = null
  selectedBackup.value = null
  addModalVisible.value = false
}
</script>
