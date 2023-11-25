<template>
  <div class="grid">
    <div class="col-6">
      <PlayerRoleTable @player-selected="onPlayerSelected"></PlayerRoleTable>
    </div>

    <div class="col-6">
      <Card>
        <template #content>
          <DataTable
            :value="[selectedPlayer]"
            :class="`p-datatable-sm`"
            scrollable
            :sortField="sortField"
            scrollHeight="flex"
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
  </div>
</template>

<script setup>
import PlayerRoleTable from '../components/PlayerRoleTable.vue'
import { ref } from 'vue'

const columns = ref([]);

const selectedPlayer = ref()

const onPlayerSelected = (player) => {
  selectedPlayer.value = player.value
}

columns.value = [
    { field: 'Name', header: 'Name' },
    { field: 'Age', header: 'Age' },
    { field: 'Position', header: 'Position' },
    { field: 'Left Foot', header: 'Left Foot' },
    { field: 'Right Foot', header: 'Right Foot' },
    { field: 'Height', header: 'Height' },
    { field: 'Agreed Playing Time', header: 'Agreed Playing Time'}
  ]

</script>
