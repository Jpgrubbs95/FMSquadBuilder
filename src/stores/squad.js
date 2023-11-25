import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useSquadStore = defineStore('squad', () => {
  const squad = useStorage('squad', [])

  const startersAndBackups = useStorage('startersAndBackups', [])

  const squadHeaders = useStorage('squadHeaders', {})

  const startersAverage = computed(() => {
    if (startersAndBackups.value.length > 0) {
      let total = 0
      for (let position of startersAndBackups.value) {
        total += parseFloat(position.starterRating)
      }
      return (total / startersAndBackups.value.length).toFixed(1)
    } else return 0
  })

  const backupsAverage = computed(() => {
    if (startersAndBackups.value.length > 0) {
      let total = 0
      for (let position of startersAndBackups.value) {
        total += parseFloat(position.backupRating)
      }
      return (total / startersAndBackups.value.length).toFixed(1)
    } else return 0
  })

  const largestDropOff = computed(() => {
    let dropOff = 0
    let dropOffPosition = [{}]

    for (let position of startersAndBackups.value) {
      const thisDropOff = parseFloat(position.starterRating) - parseFloat(position.backupRating)
      if (thisDropOff > dropOff) {
        dropOffPosition = [position]
        dropOff = thisDropOff
      } else if (thisDropOff.toFixed(1) === dropOff.toFixed(1)) {
        dropOffPosition.push(position)
      }
    }

    return { ratingDifference: dropOff.toFixed(1), position: dropOffPosition }
  })

  const bestValues = computed(() => {
    let starterValue = -1
    let starterValuePlayer = ''
    let backupValue = -1
    let backupValuePlayer = ''

    for (let position of startersAndBackups.value) {
      let dollarsPerRoleGrade = position.starter.dollars / parseFloat(position.starterRating)
      if (starterValue < 0 || dollarsPerRoleGrade < starterValue) {
        starterValue = dollarsPerRoleGrade
        starterValuePlayer = position.starter.Name
      }

      dollarsPerRoleGrade = position.backup.dollars / parseFloat(position.backupRating)
      if (backupValue < 0 || dollarsPerRoleGrade < backupValue) {
        backupValue = dollarsPerRoleGrade
        backupValuePlayer = position.backup.Name
      }
    }
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

    return {
      starterDollarsPerRoleGrade: formatter.format(starterValue),
      starterPlayer: starterValuePlayer,
      backupDollarsPerRoleGrade: formatter.format(backupValue),
      backupPlayer: backupValuePlayer
    }
  })

  const playerSalaryTotals = computed(() => {
    let keyPlayerTotal = 0
    let squadPlayerTotal = 0
    let backupPlayerTotal = 0
    let youthTotal = 0

    for (let player of squad.value) {
      if (
        player['Agreed Playing Time'] === 'Star Player' ||
        player['Agreed Playing Time'] === 'Important Player'
      ) {
        keyPlayerTotal += player.dollars
      } else if (
        player['Agreed Playing Time'] === 'Regular Starter' ||
        player['Agreed Playing Time'] === 'First-Choice Goalkeeper'
      ) {
        squadPlayerTotal += player.dollars
      } else if (
        player['Agreed Playing Time'] === 'Squad Player' ||
        player['Agreed Playing Time'] === 'Fringe Player' ||
        player['Agreed Playing Time'] === 'Backup'
      ) {
        backupPlayerTotal += player.dollars
      } else {
        youthTotal += player.dollars
      }
      // } else {
      //   console.log(player['Agreed Playing Time'])
      // }
    }

    return { keyPlayerTotal, squadPlayerTotal, backupPlayerTotal, youthTotal }
  })

  return {
    squad,
    squadHeaders,
    startersAndBackups,
    startersAverage,
    backupsAverage,
    largestDropOff,
    bestValues,
    playerSalaryTotals
  }
})
