export const allRoles = [
  { name: 'Sweeper Keeper - Defense', value: 'skd' },
  { name: 'Ball Playing Defender - Defend', value: 'bpdd' },
  { name: 'Central Defender - Defend', value: 'cdd' },
  { name: 'Inverted Wing Back - Support', value: 'iwbs' },
  { name: 'Inverted Wing Back - Attack', value: 'iwba' },
  { name: 'Defensive Midfielder - Support', value: 'dms' },
  { name: 'Box To Box Midfielder - Support', value: 'bbms' },
  { name: 'Roaming Playmaker - Support', value: 'rps' },
  { name: 'Winger - Support', value: 'ws' },
  { name: 'Winger - Attack', value: 'wa' },
  { name: 'Pressing Forward - Attack', value: 'pfa' }
]

export function calculatePlayerAbilityForRole(player, role) {
  switch (role) {
    case 'skd':
      sweeperKeeperDefend(player)
      return
    case 'bpdd':
      ballPlayingDefenderDefend(player)
      return
    case 'cdd':
      centralDefenderDefend(player)
      return
    case 'iwbs':
      invertedWingbackSupport(player)
      return
    case 'iwba':
      invertedWingbackAttack(player)
      return
    case 'dms':
      defensiveMidfielderSupport(player)
      return
    case 'bbms':
      boxToBoxSupport(player)
      return
    case 'rps':
      roamingPlaymakerSupport(player)
      return
    case 'ws':
      wingerSupport(player)
      return
    case 'wa':
      wingerAttack(player)
      return
    case 'pfa':
      pressingForwardAttack(player)
      return
  }
}

function sweeperKeeperDefend(player) {
  const key = parseInt(player['Agi']) + parseInt(player['Ref'])
  const green =
    parseInt(player['Cmd']) +
    parseInt(player['Kic']) +
    parseInt(player['1v1']) +
    parseInt(player['Ant']) +
    parseInt(player['Cnt']) +
    parseInt(player['Pos'])
  const blue =
    parseInt(player['Aer']) +
    parseInt(player['Fir']) +
    parseInt(player['Han']) +
    parseInt(player['Pas']) +
    parseInt(player['TRO']) +
    parseInt(player['Dec']) +
    parseInt(player['Vis']) +
    parseInt(player['Acc'])
  player.skd = ((key * 5 + green * 3 + blue * 1) / 36).toFixed(1)
  return player.skd
}

function ballPlayingDefenderDefend(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Jum']) +
    parseInt(player['Cmp'])
  const green =
    parseInt(player['Hea']) +
    parseInt(player['Mar']) +
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['Pos']) +
    parseInt(player['Str'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Tec']) +
    parseInt(player['Agg']) +
    parseInt(player['Ant']) +
    parseInt(player['Bra']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['Vis'])
  player.bpdd = ((key * 5 + green * 3 + blue * 1) / 46).toFixed(1)
  return player.bpdd
}

function centralDefenderDefend(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Jum']) +
    parseInt(player['Cmp'])
  const green =
    parseInt(player['Hea']) +
    parseInt(player['Mar']) +
    parseInt(player['Tck']) +
    parseInt(player['Pos']) +
    parseInt(player['Str'])
  const blue =
    parseInt(player['Agg']) +
    parseInt(player['Ant']) +
    parseInt(player['Bra']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec'])
  player.cdd = ((key * 5 + green * 3 + blue * 1) / 40).toFixed(1)
  return player.cdd
}

function invertedWingbackSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Mar']) +
    parseInt(player['Tec']) +
    parseInt(player['Ant']) +
    parseInt(player['Cnt']) +
    parseInt(player['OtB']) +
    parseInt(player['Pos']) +
    parseInt(player['Vis']) +
    parseInt(player['Agi'])
  player.iwbs = ((key * 5 + green * 3 + blue * 1) / 46).toFixed(1)
  return player.iwbs
}

function invertedWingbackAttack(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['Tec']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB']) +
    parseInt(player['Tea']) +
    parseInt(player['Vis'])
  const blue =
    parseInt(player['Cro']) +
    parseInt(player['Dri']) +
    parseInt(player['Lon']) +
    parseInt(player['Mar']) +
    parseInt(player['Ant']) +
    parseInt(player['Cnt']) +
    parseInt(player['Fla']) +
    parseInt(player['Pos']) +
    parseInt(player['Agi'])
  player.iwba = ((key * 5 + green * 3 + blue * 1) / 56).toFixed(1)
  return player.iwba
}

function defensiveMidfielderSupport(player) {
  const key =
    parseInt(player['Wor']) +
    parseInt(player['Sta']) +
    parseInt(player['Acc']) +
    parseInt(player['Pac'])
  const green =
    parseInt(player['Tck']) +
    parseInt(player['Ant']) +
    parseInt(player['Cnt']) +
    parseInt(player['Pos']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Mar']) +
    parseInt(player['Pas']) +
    parseInt(player['Agg']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['Str'])
  player.dms = ((key * 5 + green * 3 + blue * 1) / 42).toFixed(1)
  return player.dms
}

function boxToBoxSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['OtB']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Dri']) +
    parseInt(player['Fin']) +
    parseInt(player['Fir']) +
    parseInt(player['Lon']) +
    parseInt(player['Tec']) +
    parseInt(player['Agg']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['Pos']) +
    parseInt(player['Bal']) +
    parseInt(player['Str'])
  player.bbms = ((key * 5 + green * 3 + blue * 1) / 44).toFixed(1)
  return player.bbms
}

function roamingPlaymakerSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB']) +
    parseInt(player['Tea']) +
    parseInt(player['Vis'])
  const blue =
    parseInt(player['Dri']) +
    parseInt(player['Lon']) +
    parseInt(player['Cnt']) +
    parseInt(player['Pos']) +
    parseInt(player['Agi']) +
    parseInt(player['Bal'])
  player.rps = ((key * 5 + green * 3 + blue * 1) / 53).toFixed(1)
  return player.rps
}

function wingerAttack(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Cro']) +
    parseInt(player['Dri']) +
    parseInt(player['Tec']) +
    parseInt(player['Agi'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Ant']) +
    parseInt(player['Fla']) +
    parseInt(player['OtB']) +
    parseInt(player['Bal'])
  player.wa = ((key * 5 + green * 3 + blue * 1) / 38).toFixed(1)
  return player.wa
}

function wingerSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Cro']) +
    parseInt(player['Dri']) +
    parseInt(player['Tec']) +
    parseInt(player['Agi'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['OtB']) +
    parseInt(player['Bal'])
  player.ws = ((key * 5 + green * 3 + blue * 1) / 36).toFixed(1)
  return player.ws
}

function pressingForwardAttack(player) {
  const key = parseInt(player['Acc']) + parseInt(player['Pac']) + parseInt(player['Fin'])
  const green =
    parseInt(player['Agg']) +
    parseInt(player['Ant']) +
    parseInt(player['Bra']) +
    parseInt(player['OtB']) +
    parseInt(player['Tea']) +
    parseInt(player['Wor']) +
    parseInt(player['Sta'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Cmp']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['Agi']) +
    parseInt(player['Bal']) +
    parseInt(player['Str'])
  player.pfa = ((key * 5 + green * 3 + blue * 1) / 43).toFixed(1)
  return player.pfa
}
