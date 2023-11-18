<template>

<DataTable :value="squadStore.squad" tableStyle="min-width: 50rem; height:80vh" :class="`p-datatable-sm`" scrollable scrollHeight="80vh">
    <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
            <span class="text-xl text-900 font-bold">Squad</span>
            <FileUpload mode="basic" name="demo[]" :maxFileSize="1000000" customUpload @uploader="onUpload" :auto="true" chooseLabel="Upload Squad" />
        </div>
    </template>
    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" sortable>
    <template #sorticon="slotProps">
        <span v-if="slotProps.sorted">
            <i v-if="slotProps.sortOrder===1" class="pi pi-sort-amount-down"></i>
            <i v-else="slotProps.sortOrder===1" class="pi pi-sort-amount-up"></i>
        </span>
    </template>
    </Column>

</DataTable>
<!-- <span>{{ squad }}</span> -->
</template>

<script setup>

import { ref, computed } from 'vue';
import {sweeperKeeperDefend} from '../utils/positionGradeCalculator';
import {useSquadStore} from '../stores/squad';

const squadStore = useSquadStore();

function onUpload(event){
    var reader = new FileReader();
    reader.readAsText(event.files[0], "UTF-8");
    reader.onload = function (evt) {

        var doc = new DOMParser().parseFromString(evt.target.result, "text/html");
        parseTable(doc.firstChild.lastChild.children[1].firstElementChild);
    }
}

const columns = computed(() => {
    let columns = [];

    if(squadStore.squadHeaders){
        for (var key of Object.keys(squadStore.squadHeaders)) {
            columns.push(
                {
                    field: key,
                    header: key
                }
            )
        }
    }

    return columns;
})

function parseTable(table) {
  const headers = [...table.querySelectorAll("tbody > tr > th")].map(
    (cell) => cell.innerText
  );

  const items = [];

  for (const row of table.querySelectorAll("tbody > tr")) {
    const item = {};

    for (const [index, cell] of [...row.children].entries()) {
      item[headers[index]] = cell.innerText;
    }

    items.push(item);
  }

  squadStore.squadHeaders = items.shift();
  squadStore.squad = items;

  populateSweeperKeeperDefense();
}

function populateSweeperKeeperDefense(){
    for(let player of squadStore.squad){
        sweeperKeeperDefend(player);
    }
    squadStore.squadHeaders.skd = 'skd';
}

</script>