<template>
  <Card class="fullscreen-height">
    <template #title>
      <div class="flex flex-wrap align-items-center justify-content-between gap-2">
        <span class="text-xl text-900 font-bold">Squad</span>
        <FileUpload
          mode="basic"
          name="demo[]"
          :maxFileSize="1000000"
          customUpload
          @uploader="onUpload"
          :auto="true"
          chooseLabel="Upload Squad"
        />
      </div>
    </template>
    <template #content>
      <DataTable
        :value="squadStore.squad"
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
              <i v-else="slotProps.sortOrder === 1" class="pi pi-sort-amount-up"></i>
            </span>
          </template>
        </Column>
      </DataTable>
    </template>
  </Card>

  <!-- <span>{{ squad }}</span> -->
</template>

<script setup>
import { ref, computed } from 'vue'
import { useSquadStore } from '../stores/squad'

const squadStore = useSquadStore()

function onUpload(event) {
  var reader = new FileReader()
  reader.readAsText(event.files[0], 'UTF-8')
  reader.onload = function (evt) {
    var doc = new DOMParser().parseFromString(evt.target.result, 'text/html')
    parseTable(doc.firstChild.lastChild.children[1].firstElementChild)
  }
}

const columns = computed(() => {
  let columns = []

  if (squadStore.squadHeaders) {
    for (var key of Object.keys(squadStore.squadHeaders)) {
      columns.push({
        field: key,
        header: key
      })
    }
  }

  return columns
})

const correctHeaders = {
  Reg: 'Reg',
  Inf: 'Inf',
  Name: 'Name',
  Age: 'Age',
  'Agreed Playing Time': 'Agreed Playing Time',
  Salary: 'Salary',
  Wages: 'Wages',
  'Transfer Value': 'Transfer Value',
  Nat: 'Nat',
  '2nd Nat': '2nd Nat',
  Position: 'Position',
  Personality: 'Personality',
  'Media Handling': 'Media Handling',
  'Av Rat': 'Av Rat',
  'Left Foot': 'Left Foot',
  'Right Foot': 'Right Foot',
  Height: 'Height',
  '1v1': '1v1',
  Acc: 'Acc',
  Aer: 'Aer',
  Agg: 'Agg',
  Agi: 'Agi',
  Ant: 'Ant',
  Bal: 'Bal',
  Bra: 'Bra',
  Cmd: 'Cmd',
  Cnt: 'Cnt',
  Cmp: 'Cmp',
  Cro: 'Cro',
  Dec: 'Dec',
  Det: 'Det',
  Dri: 'Dri',
  Fin: 'Fin',
  Fir: 'Fir',
  Fla: 'Fla',
  Han: 'Han',
  Hea: 'Hea',
  Jum: 'Jum',
  Kic: 'Kic',
  Ldr: 'Ldr',
  Lon: 'Lon',
  Mar: 'Mar',
  OtB: 'OtB',
  Pac: 'Pac',
  Pas: 'Pas',
  Pos: 'Pos',
  Ref: 'Ref',
  Sta: 'Sta',
  Str: 'Str',
  Tck: 'Tck',
  Tea: 'Tea',
  Tec: 'Tec',
  Thr: 'Thr',
  TRO: 'TRO',
  Vis: 'Vis',
  Wor: 'Wor',
  UID: 'UID',
  Cor: 'Cor',
  Club: 'Club'
}

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
  squadStore.squadHeaders = items.shift()
  for (let key in squadStore.squadHeaders) {
    if (correctHeaders[key] === undefined) {
      throw new Error('Please upload the correct view')
    }
  }
  squadStore.squad = items
}
</script>

<style lang="scss"></style>
