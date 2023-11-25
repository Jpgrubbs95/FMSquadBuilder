import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useScoutingStore = defineStore('scouting', () => {

    const players = ref([])

    const selectedRoles = ref([])

    return {players, selectedRoles}

})