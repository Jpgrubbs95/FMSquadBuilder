<template>

<div class="grid">
    <div class="col">
    <DataTable :value="squadStore.squad" tableStyle="height:80vh" :class="`p-datatable-sm`" scrollable scrollHeight="80vh">
        <template #header>
            <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                <span class="text-xl text-900 font-bold">Role Grades</span>
                <MultiSelect v-model="selectedRoles" display="chip" :options="roles" optionLabel="name" placeholder="Select Roles"
                    :maxSelectedLabels="3" class="w-full md:w-20rem" />
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
    </div>

    <div class="col">
    <DataTable :value="squadStore.startersAndBackups" :class="`p-datatable-sm`" scrollable scrollHeight="80vh">
        <template #header>
            <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                <span class="text-xl text-900 font-bold">Starters and Backups</span>
                <Button label="Add Position" icon="pi pi-plus" @click="onAddClicked"/>
            </div>
        </template>
        <Column  field="role" header="Role"></Column>
        <Column  field="starter" header="Starter"></Column>
        <Column  field="starterRating" header="Rtg"></Column>
        <Column  field="backup" header="Backup"></Column>
        <Column  field="backupRating" header="Rtg"></Column>
    </DataTable>
    </div>

    <Dialog v-model:visible="addModalVisible" modal header="Add New Position" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <div class="grid formgrid mt-1">
            <div class="col">
            <Dropdown v-model="selectedRole" :options="roles" optionLabel="name" placeholder="Select a Role" class="w-full" filter/>
            </div>
            <div class="col">
            <Dropdown v-model="selectedStarter" :options="squadStore.squad" optionLabel="Name" placeholder="Select a Starter" class="w-full" filter/>
            </div>
            <div class="col">
            <Dropdown v-model="selectedBackup" :options="squadStore.squad" optionLabel="Name" placeholder="Select a Backup" class="w-full" filter/>
            </div>
        </div>
        <template #footer>
            <Button label="Add" icon="pi pi-check" @click="addNewPosition" autofocus />
        </template>

</Dialog>
</div>

</template>

<script setup>
import {ref, computed, watch} from 'vue';
import { useSquadStore } from '../stores/squad';
import { calculatePlayerAbilityForRole } from '../utils/positionGradeCalculator';

const squadStore = useSquadStore();

const roles = ref([
    {name: 'Sweeper Keeper Defense', value:'skd'},
    {name: 'Winger Support', value: 'ws'},
    {name: 'Winger Attack', value: 'wa'},
    {name: 'Pressing Forward Attack', value:'pfa'}
])


//Ratings table
const selectedRoles = ref([]);

const columns = ref([
    {field:'Name', header: 'Name'},
    {field:'Age', header: 'Age'},
    {field:'Position', header: 'Position'},
    {field:'Left Foot', header: 'Left Foot'},
    {field:'Right Foot', header: 'Right Foot'},
    {field:'Height', header: 'Height'}
])

watch(selectedRoles, () => {
    columns.value = [{field:'Name', header: 'Name'},
    {field:'Age', header: 'Age'},
    {field:'Position', header: 'Position'},
    {field:'Left Foot', header: 'Left Foot'},
    {field:'Right Foot', header: 'Right Foot'},
    {field:'Height', header: 'Height'}];
    
    for(let role of selectedRoles.value){
        columns.value.push({field: role.value, header: role.value});
        for(let player of squadStore.squad){
            if(!(role.value in player)){
                calculatePlayerAbilityForRole(player, role.value);
            }
        }
    }
})

//Position Table


//Add Modal
const addModalVisible = ref(false);
const selectedRole = ref();
const selectedStarter = ref();
const selectedBackup = ref();

function onAddClicked(){
    addModalVisible.value = true;
}

function addNewPosition(){
    squadStore.startersAndBackups.push({
        role: selectedRole.value.name,
        starter: selectedStarter.value.Name,
        starterRating: selectedStarter.value[selectedRole.value.value],
        backup: selectedBackup.value.Name,
        backupRating: selectedBackup.value[selectedRole.value.value]
    })
    addModalVisible.value = false;
}


</script>