<template>
  <Card class="fullscreen-height">
    <template #title>
      <div class="flex flex-wrap align-items-center justify-content-between gap-2">
        <span class="text-xl text-900 font-bold">Squad</span>
        <div class="flex justify-content-center flex-wrap gap-3">
          <Button
            id="squad-tour-0"
            label="Download FM View"
            icon="pi pi-download"
            @click="onDownloadViewClick"
          ></Button>
          <FileUpload
            id="squad-tour-1"
            mode="basic"
            name="demo[]"
            :maxFileSize="1000000"
            customUpload
            @uploader="onUpload"
            :auto="true"
            chooseLabel="Upload Squad"
          />
        </div>
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
import { ref, computed, getCurrentInstance } from 'vue'
import { useSquadStore } from '../stores/squad'
import { calculatePlayerAbilityForRole } from '../utils/positionGradeCalculator';

const squadStore = useSquadStore()

const { proxy } = getCurrentInstance();

function onUpload(event) {
  var reader = new FileReader()
  reader.readAsText(event.files[0], 'UTF-8')
  reader.onload = function (evt) {
    var doc = new DOMParser().parseFromString(evt.target.result, 'text/html')
    parseTable(doc.firstChild.lastChild.children[1].firstElementChild)
    if(proxy.$tours['squadTour']?.currentStep?.value === 1) {
      proxy.$tours['squadTour'].nextStep()
    }
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
  Wage: 'Wage',
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
  let wageUnits = '';

  for (const row of table.querySelectorAll('tbody > tr')) {
    const item = {}
    for (const [index, cell] of [...row.children].entries()) {
      item[headers[index]] = cell.innerText
    }
    if ('Salary' in item && typeof item['Salary'] === 'string' && item['Salary'] !== 'Salary') {
      try {
        item.dollars = parseInt(item['Salary'].replace(/[^\d.-]/g, ''))
        wageUnits = item['Salary'].replace(/^([£€$]([0-9]([0-9,.])*))/,' ').trim();
      } catch (e) {
        console.error('Unable to parse salary value')
      }
    } else if ('Wage' in item && typeof item['Wage'] === 'string' && item['Wage'] !== 'Wage') {
      try {
        item.dollars = parseInt(item['Wage'].replace(/[^\d.-]/g, ''))
        wageUnits = item['Wage'].replace(/^([£€$]([0-9]([0-9,.])*))/,' ').trim();
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
  squadStore.wageUnits = wageUnits;


  if(squadStore.startersAndBackups.length === 0){
    for (let i = 0; i < 11; i++) {
      squadStore.startersAndBackups.push({
        order: i,
        role: null,
        starter: null,
        starterRating: null,
        backup: null,
        backupRating: null
      })
    }
  } else {
    for(let starterBackup of squadStore.startersAndBackups){
      let starterUID = starterBackup.starter?.UID;
      let backupUID = starterBackup.backup?.UID;

      let updatedStarter = null;
      let updatedBackup = null;

      for(let player of squadStore.squad){
        if(player.UID === starterUID) updatedStarter = player;
        if(player.UID === backupUID) updatedBackup = player;
      }

      if(updatedStarter){
        starterBackup.starter = updatedStarter
        starterBackup.starterRating = calculatePlayerAbilityForRole(updatedStarter, starterBackup.role.value)
      } else {
        starterBackup.starter = null;
        starterBackup.starterRating = null;
      }
      if(updatedBackup){
        starterBackup.backup = updatedBackup
        starterBackup.backupRating = calculatePlayerAbilityForRole(updatedBackup, starterBackup.role.value)
      } else {
        starterBackup.backup = null;
        starterBackup.backupRating = null;
      }
    }
  }
}

const onDownloadViewClick = () => {
  console.log(proxy.$tours['squadTour']?.currentStep?.value)
  if(proxy.$tours['squadTour']?.currentStep?.value === 0) {
      proxy.$tours['squadTour'].nextStep()
  }
  window.location.href = 'files/FMSquadBuilder-squad.fmf'
}
</script>

<style lang="scss"></style>
