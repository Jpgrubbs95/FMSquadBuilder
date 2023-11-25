<template>
  <Card class="fullscreen-height">
    <template #title>
      <div class="flex flex-wrap align-items-center justify-content-between gap-2">
        <span class="text-xl text-900 font-bold">Player Role Ratings</span>
        <Dropdown
          v-model="selectedPlayer"
          display="chip"
          :options="squadStore.squad"
          optionLabel="Name"
          placeholder="Select Player"
          class="w-auto"
          filter
          @change="$emit('player-selected', $event)"
        />
      </div>
    </template>
    <template #content>
      <DataTable
        :value="playerRoleData"
        :class="`p-datatable-sm fullscreen-card-content`"
        scrollable
        scroll-height="flex"
        sortField="rating"
        :sortOrder="-1"
      >
        <Column field="role" header="Role"></Column>
        <Column field="rating" header="Rating" sortable></Column>
      </DataTable>
    </template>
  </Card>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useSquadStore } from '../stores/squad'
import { allRoles, calculatePlayerAbilityForRole } from '../utils/positionGradeCalculator'

defineEmits(['player-selected'])

const squadStore = useSquadStore()

const selectedPlayer = ref()

const playerRoleData = computed(() => {
  if (!selectedPlayer.value) {
    return []
  }
  const data = []
  for (let role of allRoles) {
    if (!(role.value in selectedPlayer.value)) {
      calculatePlayerAbilityForRole(selectedPlayer.value, role.value)
    }

    data.push({ role: role.name, rating: selectedPlayer.value[role.value] })
  }

  return data
})
</script>
