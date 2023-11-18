import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSquadStore = defineStore('squad', () => {
  const squad = ref([])

  const startersAndBackups = ref([]);

  const squadHeaders = ref();

  return { squad, squadHeaders, startersAndBackups }
})
