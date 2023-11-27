<template>
  <Card class="fullscreen-height">
    <template #title>
      <div class="flex flex-wrap align-items-center justify-content-between gap-2">
        <span class="text-xl text-900 font-bold">Squad</span>
        <div class="flex justify-content-center flex-wrap gap-3">
          <MultiSelect
            v-model="scoutingStore.selectedRoles"
            display="chip"
            :options="roles"
            optionLabel="name"
            placeholder="Select Roles"
            :maxSelectedLabels="3"
            class="w-auto scouting-tour-2"
            filter
          />
          <Button
            id="scouting-tour-0"
            label="Download FM View"
            icon="pi pi-download"
            @click="onDownloadViewClick"
          ></Button>
          <FileUpload
            id="scouting-tour-1"
            mode="basic"
            name="demo[]"
            :maxFileSize="1000000"
            customUpload
            @uploader="onUpload"
            :auto="true"
            chooseLabel="Upload Scouted Players"
          />
        </div>
      </div>
    </template>
    <template #content>
      <DataTable
        id="scouting-tour-3"
        :value="scoutingStore.players"
        tableStyle="min-width: 50rem;"
        :class="`p-datatable-sm fullscreen-card-content`"
        scrollable
        scroll-height="flex"
      >
        <Column
          v-for="col of columns"
          :key="col.field"
          :field="col.field"
          :header="col.header"
          :frozen="col.field === 'Name'"
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
  <!-- <span>{{ squad }}</span> -->
</template>

<script setup>
import { ref, computed, watch, onMounted, proxyRefs, getCurrentInstance } from 'vue'
import { useScoutingStore } from '../stores/scouting'
import { calculatePlayerAbilityForRole, allRoles } from '../utils/positionGradeCalculator'
const scoutingStore = useScoutingStore()

const sortField = ref()

const roles = ref(allRoles)

const { proxy } = getCurrentInstance()

function onUpload(event) {
  var reader = new FileReader()
  reader.readAsText(event.files[0], 'UTF-8')
  reader.onload = function (evt) {
    var doc = new DOMParser().parseFromString(evt.target.result, 'text/html')
    parseTable(doc.firstChild.lastChild.children[1].firstElementChild)
    if (proxy.$tours['scoutingTour']?.currentStep?.value > -1) {
      proxy.$tours['scoutingTour'].nextStep()
    }
  }
}

const defaultColumns = [
  {
    field: 'Name',
    header: 'Name'
  },
  {
    field: 'Position',
    header: 'Position'
  },
  {
    field: 'Club',
    header: 'Club'
  },
  {
    field: 'Age',
    header: 'Age'
  },
  {
    field: 'Height',
    header: 'Height'
  },
  {
    field: 'Left Foot',
    header: 'Left Foot'
  },
  {
    field: 'Right Foot',
    header: 'Right Foot'
  },
  {
    field: 'Salary',
    header: 'Salary'
  }
]

const columns = ref([...defaultColumns])

function parseTable(table) {
  const headers = [...table.querySelectorAll('tbody > tr > th')].map((cell) => cell.innerText)

  const items = []

  for (const row of table.querySelectorAll('tbody > tr')) {
    const item = {}

    for (const [index, cell] of [...row.children].entries()) {
      item[headers[index]] = cell.innerText
    }
    if ('Salary' in item && typeof item['Salary'] === 'string' && item['Salary'] !== 'Salary') {
      try {
        item.dollars = parseInt(item['Salary'].replace(/[^\d.-]/g, ''))
      } catch (e) {
        console.error('Unable to parse salary value')
      }
    }
    items.push(item)
  }
  items.shift()
  scoutingStore.players = items
  for (let player of scoutingStore.players) {
    for (let role of scoutingStore.selectedRoles) {
      if (!(role.value in player)) {
        calculatePlayerAbilityForRole(player, role.value)
      }
    }
  }
}

const onDownloadViewClick = () => {
  window.location.href = 'files/scouting_views.zip'
  if (proxy.$tours['scoutingTour']?.currentStep?.value > -1) {
    proxy.$tours['scoutingTour'].nextStep()
  }
}

watch(
  () => scoutingStore.selectedRoles,
  () => {
    columns.value = [...defaultColumns]

    for (let role of scoutingStore.selectedRoles) {
      columns.value.push({ field: role.value, header: role.value })
      for (let player of scoutingStore.players) {
        if (!(role.value in player)) {
          calculatePlayerAbilityForRole(player, role.value)
        }
      }
    }
    if (scoutingStore.selectedRoles.length) {
      sortField.value = scoutingStore.selectedRoles[scoutingStore.selectedRoles.length - 1].value
      scoutingStore.players.sort((a, b) => {
        if (parseFloat(a[sortField.value]) > parseFloat(b[sortField.value])) return -1
        else if (parseFloat(a[sortField.value]) < parseFloat(b[sortField.value])) return 1
        else return 0
      })
    }
  }
)
</script>

<style lang="scss"></style>
