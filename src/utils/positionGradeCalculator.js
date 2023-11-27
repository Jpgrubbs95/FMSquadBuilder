export const allRoles = [
  { name: 'Goal Keeper - Defense', value: 'gkd' },
  { name: 'Sweeper Keeper - Defense', value: 'skd' },
  { name: 'Sweeper Keeper - Support', value: 'sks' },
  { name: 'Sweeper Keeper - Attack', value: 'ska' },
  { name: 'Ball Playing Defender - Defend', value: 'bpdd' },
  { name: 'Ball Playing Defender - Cover', value: 'bpdc' },
  { name: 'Ball Playing Defender - Stopper', value: 'bpds' },
  { name: 'Central Defender - Cover', value: 'cdc' },
  { name: 'Central Defender - Stopper', value: 'cds' },
  { name: 'Central Defender - Defend', value: 'cdd' },
  { name: 'Complete Wing Back - Support', value: 'cwbs' },
  { name: 'Complete Wing Back - Attack', value: 'cwba' },
  { name: 'Full Back - Defense', value: 'fbd' },
  { name: 'Full Back - Support', value: 'fbs' },
  { name: 'Full Back - Attack', value: 'fba' },
  { name: 'Inverted Full Back - Defend', value: 'ifbd' },
  { name: 'Inverted Wing Back - Defend', value: 'iwbd' },
  { name: 'Inverted Wing Back - Support', value: 'iwbs' },
  { name: 'Inverted Wing Back - Attack', value: 'iwba' },
  { name: 'Libero - Defend', value: 'ld' },
  { name: 'Libero - Support', value: 'ls' },
  { name: 'No-Nonsense Center Back - Defend', value: 'ncbd' },
  { name: 'No-Nonsense Center Back - Cover', value: 'ncbc' },
  { name: 'No-Nonsense Center Back - Stopper', value: 'ncbs' },
  { name: 'No-Nonsense Full Back - Defend', value: 'nfbd' },
  { name: 'Wide Center Back - Defend', value: 'wcbd' },
  { name: 'Wide Center Back - Support', value: 'wcbs' },
  { name: 'Wide Center Back - Attack', value: 'wcba' },
  { name: 'Wing Back - Defend', value: 'wbd' },
  { name: 'Wing Back - Support', value: 'wbs' },
  { name: 'Wing Back - Attack', value: 'wba' },
  { name: 'Advanced Playmaker - Support', value: 'aps' },
  { name: 'Advanced Playmaker - Attack', value: 'apa' },
  { name: 'Anchor - Defend', value: 'ad' },
  { name: 'Attacking Midfielder - Support', value: 'ams' },
  { name: 'Attacking Midfielder - Attack', value: 'ama' },
  { name: 'Ball Winning Midfielder - Defend', value: 'bwmd' },
  { name: 'Ball Winning Midfielder - Support', value: 'bwms' },
  { name: 'Box To Box Midfielder - Support', value: 'bbms' },
  { name: 'Carrilero - Support', value: 'cars' },
  { name: 'Central Midfielder - Defend', value: 'cmd' },
  { name: 'Central Midfielder - Support', value: 'cms' },
  { name: 'Central Midfielder - Attack', value: 'cma' },
  { name: 'Deep Lying Playmaker - Defend', value: 'dlpd' },
  { name: 'Deep Lying Playmaker - Support', value: 'dlps' },
  { name: 'Defensive Midfielder - Defend', value: 'dmd' },
  { name: 'Defensive Midfielder - Support', value: 'dms' },
  { name: 'Defensive Winger - Defend', value: 'dwd' },
  { name: 'Defensive Winger - Support', value: 'dws' },
  { name: 'Enganche - Support', value: 'engs' },
  { name: 'Halfback - Defend', value: 'hbd' },
  { name: 'Inside Forward - Support', value: 'ifs' },
  { name: 'Inside Forward - Attack', value: 'ifa' },
  { name: 'Inverted Winger - Support', value: 'iws' },
  { name: 'Inverted Winger - Attack', value: 'iwa' },
  { name: 'Mezzala - Support', value: 'mezs' },
  { name: 'Mezzala - Attack', value: 'meza' },
  { name: 'Raumdeuter - Attack', value: 'raua' },
  { name: 'Regista - Support', value: 'regs' },
  { name: 'Roaming Playmaker - Support', value: 'rps' },
  { name: 'Segundo Volante - Support', value: 'svs' },
  { name: 'Segundo Volante - Attack', value: 'sva' },
  { name: 'Shadow Striker - Attack', value: 'ssa' },
  { name: 'Wide Midfielder - Defend', value: 'wmd' },
  { name: 'Wide Midfielder - Support', value: 'wms' },
  { name: 'Wide Midfielder - Attack', value: 'wma' },
  { name: 'Wide Playmaker - Support', value: 'wps' },
  { name: 'Wide Playmaker - Attack', value: 'wpa' },
  { name: 'Wide Target Forward - Support', value: 'wtfs' },
  { name: 'Wide Target Forward - Attack', value: 'wtfa' },
  { name: 'Winger - Support', value: 'ws' },
  { name: 'Winger - Attack', value: 'wa' },
  { name: 'Advanced Forward - Attack', value: 'afa' },
  { name: 'Complete Forward - Support', value: 'cfs' },
  { name: 'Complete Forward - Attack', value: 'cfa' },
  { name: 'Deep Lying Forward - Support', value: 'dlfs' },
  { name: 'Deep Lying Forward - Attack', value: 'dlfa' },
  { name: 'False Nine - Support', value: 'f9s' },
  { name: 'Poacher - Attack', value: 'pa' },
  { name: 'Pressing Forward - Defend', value: 'pfd' },
  { name: 'Pressing Forward - Support', value: 'pfs' },
  { name: 'Pressing Forward - Attack', value: 'pfa' },
  { name: 'Target Forward - Support', value: 'tfs' },
  { name: 'Target Forward - Attack', value: 'tfa' },
  { name: 'Trequartista - Attack', value: 'trea' }
]

export function calculatePlayerAbilityForRole(player, role) {
  switch (role) {
    case 'gkd':
      goalKeeperDefend(player)
      return
    case 'skd':
      sweeperKeeperDefend(player)
      return
    case 'sks':
      sweeperKeeperSupport(player)
      return
    case 'ska':
      sweeperKeeperAttack(player)
      return
    case 'bpdd':
      ballPlayingDefenderDefend(player)
      return
    case 'bpdc':
      ballPlayingDefenderCover(player)
      return
    case 'bpds':
      ballPlayingDefenderStopper(player)
      return
    case 'cdd':
      centralDefenderDefend(player)
      return
    case 'cds':
      centralDefenderStopper(player)
      return
    case 'cdc':
      centralDefenderCover(player)
      return
    case 'cwbs':
      completeWingBackSupport(player)
      return
    case 'cwba':
      completeWingBackAttack(player)
      return
    case 'fbd':
      fullBackDefend(player)
      return
    case 'fbs':
      fullBackSupport(player)
      return
    case 'fba':
      fullBackAttack(player)
      return
    case 'ifbd':
      invertedFullBackDefend(player)
      return
    case 'iwbd':
      invertedWingbackDefend(player)
      return
    case 'iwbs':
      invertedWingbackSupport(player)
      return
    case 'iwba':
      invertedWingbackAttack(player)
      return
    case 'ld':
      liberoDefend(player)
      return
    case 'ls':
      liberoSupport(player)
      return
    case 'ncbd':
      noNonsenseCenterBackDefend(player)
      return
    case 'ncbc':
      noNonsenseCenterBackCover(player)
      return
    case 'ncbs':
      noNonsenseCenterBackStopper(player)
      return
    case 'nfbd':
      noNonsenseFullBackDefend(player)
      return
    case 'wcbd':
      wideCenterBackDefend(player)
      return
    case 'wcbs':
      wideCenterBackSupport(player)
      return
    case 'wcba':
      wideCenterBackAttack(player)
      return
    case 'wbd':
      wingBackDefend(player)
      return
    case 'wbs':
      wingBackSupport(player)
      return
    case 'wba':
      wingBackAttack(player)
      return
    case 'aps':
      advancedPlaymakerSupport(player)
      return
    case 'apa':
      advancedPlaymakerAttack(player)
      return
    case 'ad':
      anchorDefend(player)
      return
    case 'ams':
      attackingMidfielderSupport(player)
      return
    case 'ama':
      attackingMidfielderAttack(player)
      return
    case 'bwmd':
      ballWinningMidfielderDefend(player)
      return
    case 'bwms':
      ballWinningMidfielderSupport(player)
      return
    case 'bbms':
      boxToBoxSupport(player)
      return
    case 'cars':
      carrileroSupport(player)
      return
    case 'cmd':
      centralMidfielderDefend(player)
      return
    case 'cms':
      centralMidfielderSupport(player)
      return
    case 'cma':
      centralMidfielderAttack(player)
      return
    case 'dlpd':
      deepLyingPlaymakerDefend(player)
      return
    case 'dlps':
      deepLyingPlaymakerSupport(player)
      return
    case 'dmd':
      defensiveMidfielderDefend(player)
      return
    case 'dms':
      defensiveMidfielderSupport(player)
      return
    case 'dwd':
      defensiveWingerDefend(player)
      return
    case 'dws':
      defensiveWingerSupport(player)
      return
    case 'engs':
      engancheSupport(player)
      return
    case 'hbd':
      halfBackDefend(player)
      return
    case 'ifs':
      insideForwardSupport(player)
      return
    case 'ifa':
      insideForwardAttack(player)
      return
    case 'iws':
      invertedWingerSupport(player)
      return
    case 'iwa':
      invertedWingerAttack(player)
      return
    case 'mezs':
      mezzalaSupport(player)
      return
    case 'meza':
      mezzalaAttack(player)
      return
    case 'raua':
      raumdeuterAttack(player)
      return
    case 'regs':
      registaSupport(player)
      return
    case 'rps':
      roamingPlaymakerSupport(player)
      return
    case 'svs':
      segundoVolanteSupport(player)
      return
    case 'sva':
      segundoVolanteAttack(player)
      return
    case 'ssa':
      shadowStrikerAttack(player)
      return
    case 'wmd':
      wideMidfielderDefend(player)
      return
    case 'wms':
      wideMidfielderSupport(player)
      return
    case 'wma':
      wideMidfielderAttack(player)
      return
    case 'wps':
      widePlaymakerSupport(player)
      return
    case 'wpa':
      widePlaymakerAttack(player)
      return
    case 'wtfs':
      wideTargetForwardSupport(player)
      return
    case 'wtfa':
      wideTargetForwardAttack(player)
      return
    case 'ws':
      wingerSupport(player)
      return
    case 'wa':
      wingerAttack(player)
      return
    case 'afa':
      advancedForwardAttack(player)
      return
    case 'cfs':
      completeForwardSupport(player)
      return
    case 'cfa':
      completeForwardAttack(player)
      return
    case 'dlfs':
      deepLyingForwardSupport(player)
      return
    case 'dlfa':
      deepLyingForwardAttack(player)
      return
    case 'f9s':
      falseNineSupport(player)
      return
    case 'pa':
      poacherAttack(player)
      return
    case 'pfd':
      pressingForwardDefend(player)
      return
    case 'pfs':
      pressingForwardSupport(player)
      return
    case 'pfa':
      pressingForwardAttack(player)
      return
    case 'tfs':
      targetForwardSupport(player)
      return
    case 'tfa':
      targetForwardAttack(player)
      return
    case 'trea':
      trequartistaAttack(player)
      return
  }
}

function goalKeeperDefend(player) {
  const key = parseInt(player['Agi']) + parseInt(player['Ref'])
  const green =
    parseInt(player['Aer']) +
    parseInt(player['Cmd']) +
    parseInt(player['Han']) +
    parseInt(player['Kic']) +
    parseInt(player['Cnt']) +
    parseInt(player['Pos'])
  const blue =
    parseInt(player['1v1']) +
    parseInt(player['Thr']) +
    parseInt(player['Ant']) +
    parseInt(player['Dec'])
  player.gkd = ((key * 5 + green * 3 + blue * 1) / 32).toFixed(1)
  return player.gkd
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

function sweeperKeeperSupport(player) {
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
  player.sks = ((key * 5 + green * 3 + blue * 1) / 36).toFixed(1)
  return player.sks
}

function sweeperKeeperAttack(player) {
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
  player.ska = ((key * 5 + green * 3 + blue * 1) / 36).toFixed(1)
  return player.ska
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

function ballPlayingDefenderStopper(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Jum']) +
    parseInt(player['Cmp'])
  const green =
    parseInt(player['Hea']) +
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['Pos']) +
    parseInt(player['Str']) +
    parseInt(player['Agg']) +
    parseInt(player['Bra']) +
    parseInt(player['Dec'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Tec']) +
    parseInt(player['Ant']) +
    parseInt(player['Cnt']) +
    parseInt(player['Vis']) +
    parseInt(player['Mar'])
  player.bpds = ((key * 5 + green * 3 + blue * 1) / 50).toFixed(1)
  return player.bpds
}

function ballPlayingDefenderCover(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Jum']) +
    parseInt(player['Cmp'])
  const green =
    parseInt(player['Mar']) +
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['Pos']) +
    parseInt(player['Ant']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Tec']) +
    parseInt(player['Bra']) +
    parseInt(player['Vis']) +
    parseInt(player['Str']) +
    parseInt(player['Hea'])
  player.bpdc = ((key * 5 + green * 3 + blue * 1) / 47).toFixed(1)
  return player.bpdccds_key
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

function centralDefenderStopper(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Jum']) +
    parseInt(player['Cmp'])
  const green =
    parseInt(player['Hea']) +
    parseInt(player['Tck']) +
    parseInt(player['Agg']) +
    parseInt(player['Bra']) +
    parseInt(player['Dec']) +
    parseInt(player['Pos']) +
    parseInt(player['Str'])
  const blue = parseInt(player['Mar']) + parseInt(player['Ant']) + parseInt(player['Cnt'])
  player.cds = ((key * 5 + green * 3 + blue * 1) / 44).toFixed(1)
  return player.cds
}

function centralDefenderCover(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Jum']) +
    parseInt(player['Cmp'])
  const green =
    parseInt(player['Mar']) +
    parseInt(player['Tck']) +
    parseInt(player['Ant']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['Pos'])
  const blue = parseInt(player['Hea']) + parseInt(player['Bra']) + parseInt(player['Str'])
  player.cdc = ((key * 5 + green * 3 + blue * 1) / 41).toFixed(1)
  return player.cdc
}

function completeWingBackSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Cro']) +
    parseInt(player['Dri']) +
    parseInt(player['Tec']) +
    parseInt(player['OtB']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Mar']) +
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['Ant']) +
    parseInt(player['Dec']) +
    parseInt(player['Fla']) +
    parseInt(player['Pos']) +
    parseInt(player['Agi']) +
    parseInt(player['Bal'])
  player.cwbs = ((key * 5 + green * 3 + blue * 1) / 45).toFixed(1)
  return player.cwbs
}

function completeWingBackAttack(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Cro']) +
    parseInt(player['Dri']) +
    parseInt(player['Tec']) +
    parseInt(player['Fla']) +
    parseInt(player['OtB']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Mar']) +
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['Ant']) +
    parseInt(player['Dec']) +
    parseInt(player['Pos']) +
    parseInt(player['Agi']) +
    parseInt(player['Bal'])
  player.cwba = ((key * 5 + green * 3 + blue * 1) / 47).toFixed(1)
  return player.cwba
}

function fullBackDefend(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Mar']) +
    parseInt(player['Tck']) +
    parseInt(player['Ant']) +
    parseInt(player['Cnt']) +
    parseInt(player['Pos']) +
    parseInt(player['Pos'])
  const blue =
    parseInt(player['Cro']) +
    parseInt(player['Pas']) +
    parseInt(player['Dec']) +
    parseInt(player['Tea'])
  player.fbd = ((key * 5 + green * 3 + blue * 1) / 42).toFixed(1)
  return player.fbd
}

function fullBackSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Mar']) +
    parseInt(player['Tck']) +
    parseInt(player['Ant']) +
    parseInt(player['Cnt']) +
    parseInt(player['Pos']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Cro']) +
    parseInt(player['Dri']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Dec'])
  player.fbs = ((key * 5 + green * 3 + blue * 1) / 43).toFixed(1)
  return player.fbs
}

function fullBackAttack(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Cro']) +
    parseInt(player['Mar']) +
    parseInt(player['Tck']) +
    parseInt(player['Ant']) +
    parseInt(player['Pos']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Dri']) +
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB']) +
    parseInt(player['Agi'])
  player.fba = ((key * 5 + green * 3 + blue * 1) / 46).toFixed(1)
  return player.fba
}

function invertedFullBackDefend(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Hea']) +
    parseInt(player['Mar']) +
    parseInt(player['Tck']) +
    parseInt(player['Pos']) +
    parseInt(player['Str'])
  const blue =
    parseInt(player['Dri']) +
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Agg']) +
    parseInt(player['Ant']) +
    parseInt(player['Bra']) +
    parseInt(player['Cmp']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['Agi']) +
    parseInt(player['Jum'])
  player.ifbd = ((key * 5 + green * 3 + blue * 1) / 47).toFixed(1)
  return player.ifbd
}

function invertedWingbackDefend(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['Ant']) +
    parseInt(player['Dec']) +
    parseInt(player['Pos']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Mar']) +
    parseInt(player['Tec']) +
    parseInt(player['Cmp']) +
    parseInt(player['Cnt']) +
    parseInt(player['OtB']) +
    parseInt(player['Agi'])
  player.iwbd = ((key * 5 + green * 3 + blue * 1) / 45).toFixed(1)
  return player.iwbd
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

function liberoDefend(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Jum']) +
    parseInt(player['Cmp'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Hea']) +
    parseInt(player['Mar']) +
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['Tec']) +
    parseInt(player['Dec']) +
    parseInt(player['Pos']) +
    parseInt(player['Tea']) +
    parseInt(player['Str'])
  const blue =
    parseInt(player['Ant']) +
    parseInt(player['Bra']) +
    parseInt(player['Cnt']) +
    parseInt(player['Sta'])
  player.ld = ((key * 5 + green * 3 + blue * 1) / 54).toFixed(1)
  return player.ld
}

function liberoSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Jum']) +
    parseInt(player['Cmp'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Hea']) +
    parseInt(player['Mar']) +
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['Tec']) +
    parseInt(player['Dec']) +
    parseInt(player['Pos']) +
    parseInt(player['Tea']) +
    parseInt(player['Str'])
  const blue =
    parseInt(player['Dri']) +
    parseInt(player['Ant']) +
    parseInt(player['Bra']) +
    parseInt(player['Cnt']) +
    parseInt(player['Vis']) +
    parseInt(player['Sta'])
  player.ls = ((key * 5 + green * 3 + blue * 1) / 56).toFixed(1)
  return player.ls
}

function noNonsenseCenterBackStopper(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Jum']) +
    parseInt(player['Cmp'])
  const green =
    parseInt(player['Hea']) +
    parseInt(player['Tck']) +
    parseInt(player['Agg']) +
    parseInt(player['Bra']) +
    parseInt(player['Pos']) +
    parseInt(player['Str'])
  const blue = parseInt(player['Mar']) + parseInt(player['Ant']) + parseInt(player['Cnt'])
  player.ncbs = ((key * 5 + green * 3 + blue * 1) / 41).toFixed(1)
  return player.ncbs
}

function noNonsenseCenterBackCover(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Jum']) +
    parseInt(player['Cmp'])
  const green =
    parseInt(player['Mar']) +
    parseInt(player['Tck']) +
    parseInt(player['Ant']) +
    parseInt(player['Cnt']) +
    parseInt(player['Pos'])
  const blue = parseInt(player['Hea']) + parseInt(player['Bra']) + parseInt(player['Str'])
  player.ncbc = ((key * 5 + green * 3 + blue * 1) / 38).toFixed(1)
  return player.ncbc
}

function noNonsenseCenterBackDefend(player) {
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
    parseInt(player['Cnt'])
  player.ncbd = ((key * 5 + green * 3 + blue * 1) / 39).toFixed(1)
  return player.ncbd
}

function noNonsenseFullBackDefend(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Mar']) +
    parseInt(player['Tck']) +
    parseInt(player['Ant']) +
    parseInt(player['Pos']) +
    parseInt(player['Str'])
  const blue =
    parseInt(player['Hea']) +
    parseInt(player['Agg']) +
    parseInt(player['Bra']) +
    parseInt(player['Cnt']) +
    parseInt(player['Tea'])
  player.nfbd = ((key * 5 + green * 3 + blue * 1) / 40).toFixed(1)
  return player.nfbd
}

function wideCenterBackDefend(player) {
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
    parseInt(player['Dri']) +
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Agg']) +
    parseInt(player['Ant']) +
    parseInt(player['Bra']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['Wor']) +
    parseInt(player['Agi'])
  player.wcbd = ((key * 5 + green * 3 + blue * 1) / 46).toFixed(1)
  return player.wcbd
}

function wideCenterBackSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Jum']) +
    parseInt(player['Cmp'])
  const green =
    parseInt(player['Dri']) +
    parseInt(player['Hea']) +
    parseInt(player['Mar']) +
    parseInt(player['Tck']) +
    parseInt(player['Pos']) +
    parseInt(player['Str'])
  const blue =
    parseInt(player['Cro']) +
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Agg']) +
    parseInt(player['Ant']) +
    parseInt(player['Bra']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB']) +
    parseInt(player['Wor']) +
    parseInt(player['Agi']) +
    parseInt(player['Sta'])
  player.wcbs = ((key * 5 + green * 3 + blue * 1) / 51).toFixed(1)
  return player.wcbs
}

function wideCenterBackAttack(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Jum']) +
    parseInt(player['Cmp'])
  const green =
    parseInt(player['Cro']) +
    parseInt(player['Dri']) +
    parseInt(player['Hea']) +
    parseInt(player['Mar']) +
    parseInt(player['Tck']) +
    parseInt(player['OtB']) +
    parseInt(player['Sta']) +
    parseInt(player['Str'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Agg']) +
    parseInt(player['Ant']) +
    parseInt(player['Bra']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['Pos']) +
    parseInt(player['Wor']) +
    parseInt(player['Agi'])
  player.wcba = ((key * 5 + green * 3 + blue * 1) / 55).toFixed(1)
  return player.wcba
}

function wingBackDefend(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Mar']) +
    parseInt(player['Tck']) +
    parseInt(player['Ant']) +
    parseInt(player['Pos']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Cro']) +
    parseInt(player['Dri']) +
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB']) +
    parseInt(player['Agi']) +
    parseInt(player['Bal'])
  player.wbd = ((key * 5 + green * 3 + blue * 1) / 45).toFixed(1)
  return player.wbd
}

function wingBackSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Cro']) +
    parseInt(player['Dri']) +
    parseInt(player['Mar']) +
    parseInt(player['Tck']) +
    parseInt(player['OtB']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Ant']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['Pos']) +
    parseInt(player['Agi']) +
    parseInt(player['Bal'])
  player.wbs = ((key * 5 + green * 3 + blue * 1) / 47).toFixed(1)
  return player.wbs
}

function wingBackAttack(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Cro']) +
    parseInt(player['Dri']) +
    parseInt(player['Tck']) +
    parseInt(player['Tec']) +
    parseInt(player['OtB']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Mar']) +
    parseInt(player['Pas']) +
    parseInt(player['Ant']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['Fla']) +
    parseInt(player['Pos']) +
    parseInt(player['Agi']) +
    parseInt(player['Bal'])
  player.wba = ((key * 5 + green * 3 + blue * 1) / 48).toFixed(1)
  return player.wba
}

function advancedPlaymakerSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB']) +
    parseInt(player['Tea']) +
    parseInt(player['Vis'])
  const blue =
    parseInt(player['Dri']) +
    parseInt(player['Ant']) +
    parseInt(player['Fla']) +
    parseInt(player['Agi'])
  player.aps = ((key * 5 + green * 3 + blue * 1) / 48).toFixed(1)
  return player.aps
}

function advancedPlaymakerAttack(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB']) +
    parseInt(player['Tea']) +
    parseInt(player['Vis'])
  const blue =
    parseInt(player['Dri']) +
    parseInt(player['Ant']) +
    parseInt(player['Fla']) +
    parseInt(player['Agi'])
  player.apa = ((key * 5 + green * 3 + blue * 1) / 48).toFixed(1)
  return player.apa
}

function anchorDefend(player) {
  const key =
    parseInt(player['Wor']) +
    parseInt(player['Sta']) +
    parseInt(player['Acc']) +
    parseInt(player['Pac'])
  const green =
    parseInt(player['Mar']) +
    parseInt(player['Tck']) +
    parseInt(player['Ant']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['Pos'])
  const blue = parseInt(player['Cmp']) + parseInt(player['Tea']) + parseInt(player['Str'])
  player.ad = ((key * 5 + green * 3 + blue * 1) / 41).toFixed(1)
  return player.ad
}

function attackingMidfielderSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Lon']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Ant']) +
    parseInt(player['Dec']) +
    parseInt(player['Fla']) +
    parseInt(player['OtB'])
  const blue =
    parseInt(player['Dri']) +
    parseInt(player['Cmp']) +
    parseInt(player['Vis']) +
    parseInt(player['Agi'])
  player.ams = ((key * 5 + green * 3 + blue * 1) / 48).toFixed(1)
  return player.ams
}

function attackingMidfielderAttack(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Dri']) +
    parseInt(player['Fir']) +
    parseInt(player['Lon']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Ant']) +
    parseInt(player['Dec']) +
    parseInt(player['Fla']) +
    parseInt(player['OtB'])
  const blue =
    parseInt(player['Fin']) +
    parseInt(player['Cmp']) +
    parseInt(player['Vis']) +
    parseInt(player['Agi'])
  player.ama = ((key * 5 + green * 3 + blue * 1) / 51).toFixed(1)
  return player.ama
}

function ballWinningMidfielderDefend(player) {
  const key =
    parseInt(player['Wor']) +
    parseInt(player['Sta']) +
    parseInt(player['Acc']) +
    parseInt(player['Pac'])
  const green =
    parseInt(player['Tck']) +
    parseInt(player['Agg']) +
    parseInt(player['Ant']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Mar']) +
    parseInt(player['Bra']) +
    parseInt(player['Cnt']) +
    parseInt(player['Pos']) +
    parseInt(player['Agi']) +
    parseInt(player['Str'])
  player.bwmd = ((key * 5 + green * 3 + blue * 1) / 38).toFixed(1)
  return player.bwmd
}

function ballWinningMidfielderSupport(player) {
  const key =
    parseInt(player['Wor']) +
    parseInt(player['Sta']) +
    parseInt(player['Acc']) +
    parseInt(player['Pac'])
  const green =
    parseInt(player['Tck']) +
    parseInt(player['Agg']) +
    parseInt(player['Ant']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Mar']) +
    parseInt(player['Pas']) +
    parseInt(player['Bra']) +
    parseInt(player['Cnt']) +
    parseInt(player['Agi']) +
    parseInt(player['Str'])
  player.bwms = ((key * 5 + green * 3 + blue * 1) / 38).toFixed(1)
  return player.bwms
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

function carrileroSupport(player) {
  const key =
    parseInt(player['Wor']) +
    parseInt(player['Sta']) +
    parseInt(player['Acc']) +
    parseInt(player['Pac'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['Dec']) +
    parseInt(player['Pos']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Tec']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['Cnt']) +
    parseInt(player['OtB']) +
    parseInt(player['Vis'])
  player.cars = ((key * 5 + green * 3 + blue * 1) / 44).toFixed(1)
  return player.cars
}

function centralMidfielderDefend(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Tck']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['Pos']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Mar']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Agg']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp'])
  player.cmd = ((key * 5 + green * 3 + blue * 1) / 42).toFixed(1)
  return player.cmd
}

function centralMidfielderSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['Dec']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Tec']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['Cnt']) +
    parseInt(player['OtB']) +
    parseInt(player['Vis'])
  player.cms = ((key * 5 + green * 3 + blue * 1) / 41).toFixed(1)
  return player.cms
}

function centralMidfielderAttack(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB'])
  const blue =
    parseInt(player['Lon']) +
    parseInt(player['Tck']) +
    parseInt(player['Tec']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['Tea']) +
    parseInt(player['Vis'])
  player.cma = ((key * 5 + green * 3 + blue * 1) / 39).toFixed(1)
  return player.cma
}

function deepLyingPlaymakerDefend(player) {
  const key =
    parseInt(player['Wor']) +
    parseInt(player['Sta']) +
    parseInt(player['Acc']) +
    parseInt(player['Pac'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['Tea']) +
    parseInt(player['Vis'])
  const blue =
    parseInt(player['Tck']) +
    parseInt(player['Ant']) +
    parseInt(player['Pos']) +
    parseInt(player['Bal'])
  player.dlpd = ((key * 5 + green * 3 + blue * 1) / 45).toFixed(1)
  return player.dlpd
}

function deepLyingPlaymakerSupport(player) {
  const key =
    parseInt(player['Wor']) +
    parseInt(player['Sta']) +
    parseInt(player['Acc']) +
    parseInt(player['Pac'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['Tea']) +
    parseInt(player['Vis'])
  const blue =
    parseInt(player['Ant']) +
    parseInt(player['OtB']) +
    parseInt(player['Pos']) +
    parseInt(player['Bal'])
  player.dlps = ((key * 5 + green * 3 + blue * 1) / 45).toFixed(1)
  return player.dlps
}

function defensiveMidfielderDefend(player) {
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
    parseInt(player['Mar']) +
    parseInt(player['Pas']) +
    parseInt(player['Agg']) +
    parseInt(player['Cmp']) +
    parseInt(player['Str']) +
    parseInt(player['Dec'])
  player.dmd = ((key * 5 + green * 3 + blue * 1) / 41).toFixed(1)
  return player.dmd
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

function defensiveWingerDefend(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Tec']) +
    parseInt(player['Ant']) +
    parseInt(player['OtB']) +
    parseInt(player['Pos']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Cro']) +
    parseInt(player['Dri']) +
    parseInt(player['Fir']) +
    parseInt(player['Mar']) +
    parseInt(player['Tck']) +
    parseInt(player['Agg']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec'])
  player.dwd = ((key * 5 + green * 3 + blue * 1) / 43).toFixed(1)
  return player.dwd
}

function defensiveWingerSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Cro']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['OtB']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Dri']) +
    parseInt(player['Fir']) +
    parseInt(player['Mar']) +
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['Agg']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['Pos'])
  player.dws = ((key * 5 + green * 3 + blue * 1) / 46).toFixed(1)
  return player.dws
}

function engancheSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['Vis'])
  const blue =
    parseInt(player['Dri']) +
    parseInt(player['Ant']) +
    parseInt(player['Fla']) +
    parseInt(player['OtB']) +
    parseInt(player['Tea']) +
    parseInt(player['Agi'])
  player.engs = ((key * 5 + green * 3 + blue * 1) / 44).toFixed(1)
  return player.engs
}

function halfBackDefend(player) {
  const key =
    parseInt(player['Wor']) +
    parseInt(player['Sta']) +
    parseInt(player['Acc']) +
    parseInt(player['Pac'])
  const green =
    parseInt(player['Mar']) +
    parseInt(player['Tck']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['Pos']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Agg']) +
    parseInt(player['Bra']) +
    parseInt(player['Jum']) +
    parseInt(player['Str'])
  player.hbd = ((key * 5 + green * 3 + blue * 1) / 50).toFixed(1)
  return player.hbd
}

function insideForwardSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Dri']) +
    parseInt(player['Fin']) +
    parseInt(player['Fir']) +
    parseInt(player['Tec']) +
    parseInt(player['OtB']) +
    parseInt(player['Agi'])
  const blue =
    parseInt(player['Lon']) +
    parseInt(player['Pas']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['Fla']) +
    parseInt(player['Vis']) +
    parseInt(player['Bal'])
  player.ifs = ((key * 5 + green * 3 + blue * 1) / 45).toFixed(1)
  return player.ifs
}

function insideForwardAttack(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Dri']) +
    parseInt(player['Fin']) +
    parseInt(player['Fir']) +
    parseInt(player['Tec']) +
    parseInt(player['Ant']) +
    parseInt(player['OtB']) +
    parseInt(player['Agi'])
  const blue =
    parseInt(player['Lon']) +
    parseInt(player['Pas']) +
    parseInt(player['Cmp']) +
    parseInt(player['Fla']) +
    parseInt(player['Bal'])
  player.ifa = ((key * 5 + green * 3 + blue * 1) / 46).toFixed(1)
  return player.ifa
}

function invertedWingerSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Cro']) +
    parseInt(player['Dri']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Agi'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Lon']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB']) +
    parseInt(player['Vis']) +
    parseInt(player['Bal'])
  player.iws = ((key * 5 + green * 3 + blue * 1) / 42).toFixed(1)
  return player.iws
}

function invertedWingerAttack(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Cro']) +
    parseInt(player['Dri']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Agi'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Lon']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['Fla']) +
    parseInt(player['OtB']) +
    parseInt(player['Vis']) +
    parseInt(player['Bal'])
  player.iwa = ((key * 5 + green * 3 + blue * 1) / 44).toFixed(1)
  return player.iwa
}

function mezzalaSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB'])
  const blue =
    parseInt(player['Dri']) +
    parseInt(player['Fir']) +
    parseInt(player['Lon']) +
    parseInt(player['Tck']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['Vis']) +
    parseInt(player['Bal'])
  player.mezs = ((key * 5 + green * 3 + blue * 1) / 40).toFixed(1)
  return player.mezs
}

function mezzalaAttack(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Dri']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB']) +
    parseInt(player['Vis'])
  const blue =
    parseInt(player['Fin']) +
    parseInt(player['Fir']) +
    parseInt(player['Lon']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['Fla']) +
    parseInt(player['Bal'])
  player.meza = ((key * 5 + green * 3 + blue * 1) / 45).toFixed(1)
  return player.meza
}

function raumdeuterAttack(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Fin']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB']) +
    parseInt(player['Bal'])
  const blue = parseInt(player['Fir']) + parseInt(player['Tec'])
  player.raua = ((key * 5 + green * 3 + blue * 1) / 43).toFixed(1)
  return player.raua
}

function registaSupport(player) {
  const key =
    parseInt(player['Wor']) +
    parseInt(player['Sta']) +
    parseInt(player['Acc']) +
    parseInt(player['Pac'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['Fla']) +
    parseInt(player['OtB']) +
    parseInt(player['Tea']) +
    parseInt(player['Vis'])
  const blue =
    parseInt(player['Dri']) +
    parseInt(player['Lon']) +
    parseInt(player['Ant']) +
    parseInt(player['Bal'])
  player.regs = ((key * 5 + green * 3 + blue * 1) / 51).toFixed(1)
  return player.regs
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

function segundoVolanteSupport(player) {
  const key =
    parseInt(player['Wor']) +
    parseInt(player['Sta']) +
    parseInt(player['Acc']) +
    parseInt(player['Pac'])
  const green =
    parseInt(player['Mar']) +
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['OtB']) +
    parseInt(player['Pos'])
  const blue =
    parseInt(player['Fin']) +
    parseInt(player['Fir']) +
    parseInt(player['Lon']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['Bal']) +
    parseInt(player['Str'])
  player.svs = ((key * 5 + green * 3 + blue * 1) / 44).toFixed(1)
  return player.svs
}

function segundoVolanteAttack(player) {
  const key =
    parseInt(player['Wor']) +
    parseInt(player['Sta']) +
    parseInt(player['Acc']) +
    parseInt(player['Pac'])
  const green =
    parseInt(player['Fin']) +
    parseInt(player['Lon']) +
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['Ant']) +
    parseInt(player['OtB']) +
    parseInt(player['Pos'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Mar']) +
    parseInt(player['Cmp']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['Bal'])
  player.sva = ((key * 5 + green * 3 + blue * 1) / 47).toFixed(1)
  return player.sva
}

function shadowStrikerAttack(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Dri']) +
    parseInt(player['Fin']) +
    parseInt(player['Fir']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['OtB'])
  const blue =
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['Agi']) +
    parseInt(player['Bal'])
  player.ssa = ((key * 5 + green * 3 + blue * 1) / 44).toFixed(1)
  return player.ssa
}

function wideMidfielderDefend(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['Cnt']) +
    parseInt(player['Dec']) +
    parseInt(player['Pos']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Cro']) +
    parseInt(player['Fir']) +
    parseInt(player['Mar']) +
    parseInt(player['Tec']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp'])
  player.wmd = ((key * 5 + green * 3 + blue * 1) / 44).toFixed(1)
  return player.wmd
}

function wideMidfielderSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Pas']) +
    parseInt(player['Tck']) +
    parseInt(player['Dec']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Cro']) +
    parseInt(player['Fir']) +
    parseInt(player['Tec']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['Cnt']) +
    parseInt(player['OtB']) +
    parseInt(player['Pos']) +
    parseInt(player['Vis'])
  player.wms = ((key * 5 + green * 3 + blue * 1) / 41).toFixed(1)
  return player.wms
}

function wideMidfielderAttack(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Cro']) +
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Dec']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Tck']) +
    parseInt(player['Tec']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['OtB']) +
    parseInt(player['Vis'])
  player.wma = ((key * 5 + green * 3 + blue * 1) / 41).toFixed(1)
  return player.wma
}

function widePlaymakerSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['Tea']) +
    parseInt(player['Vis'])
  const blue = parseInt(player['Dri']) + parseInt(player['OtB']) + parseInt(player['Agi'])
  player.wps = ((key * 5 + green * 3 + blue * 1) / 44).toFixed(1)
  return player.wps
}

function widePlaymakerAttack(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Dri']) +
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB']) +
    parseInt(player['Tea']) +
    parseInt(player['Vis'])
  const blue = parseInt(player['Ant']) + parseInt(player['Fla']) + parseInt(player['Agi'])
  player.wpa = ((key * 5 + green * 3 + blue * 1) / 50).toFixed(1)
  return player.wpa
}

function wideTargetForwardSupport(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Hea']) +
    parseInt(player['Bra']) +
    parseInt(player['Tea']) +
    parseInt(player['Jum']) +
    parseInt(player['Str'])
  const blue =
    parseInt(player['Cro']) +
    parseInt(player['Fir']) +
    parseInt(player['Ant']) +
    parseInt(player['OtB']) +
    parseInt(player['Bal'])
  player.wtfs = ((key * 5 + green * 3 + blue * 1) / 40).toFixed(1)
  return player.wtfs
}

function wideTargetForwardAttack(player) {
  const key =
    parseInt(player['Acc']) +
    parseInt(player['Pac']) +
    parseInt(player['Sta']) +
    parseInt(player['Wor'])
  const green =
    parseInt(player['Hea']) +
    parseInt(player['Bra']) +
    parseInt(player['OtB']) +
    parseInt(player['Jum']) +
    parseInt(player['Str'])
  const blue =
    parseInt(player['Cro']) +
    parseInt(player['Fin']) +
    parseInt(player['Fir']) +
    parseInt(player['Ant']) +
    parseInt(player['Tea']) +
    parseInt(player['Bal'])
  player.wtfa = ((key * 5 + green * 3 + blue * 1) / 41).toFixed(1)
  return player.wtfa
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

function advancedForwardAttack(player) {
  const key = parseInt(player['Acc']) + parseInt(player['Pac']) + parseInt(player['Fin'])
  const green =
    parseInt(player['Dri']) +
    parseInt(player['Fir']) +
    parseInt(player['Tec']) +
    parseInt(player['Cmp']) +
    parseInt(player['OtB'])
  const blue =
    parseInt(player['Pas']) +
    parseInt(player['Ant']) +
    parseInt(player['Dec']) +
    parseInt(player['Wor']) +
    parseInt(player['Agi']) +
    parseInt(player['Bal']) +
    parseInt(player['Sta'])
  player.afa = ((key * 5 + green * 3 + blue * 1) / 37).toFixed(1)
  return player.afa
}

function completeForwardSupport(player) {
  const key = parseInt(player['Acc']) + parseInt(player['Pac']) + parseInt(player['Fin'])
  const green =
    parseInt(player['Dri']) +
    parseInt(player['Fir']) +
    parseInt(player['Hea']) +
    parseInt(player['Lon']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB']) +
    parseInt(player['Vis']) +
    parseInt(player['Agi']) +
    parseInt(player['Str'])
  const blue =
    parseInt(player['Tea']) +
    parseInt(player['Wor']) +
    parseInt(player['Bal']) +
    parseInt(player['Jum']) +
    parseInt(player['Sta'])
  player.cfs = ((key * 5 + green * 3 + blue * 1) / 59).toFixed(1)
  return player.cfs
}

function completeForwardAttack(player) {
  const key = parseInt(player['Acc']) + parseInt(player['Pac']) + parseInt(player['Fin'])
  const green =
    parseInt(player['Dri']) +
    parseInt(player['Fir']) +
    parseInt(player['Hea']) +
    parseInt(player['Tec']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['OtB']) +
    parseInt(player['Agi']) +
    parseInt(player['Str'])
  const blue =
    parseInt(player['Lon']) +
    parseInt(player['Pas']) +
    parseInt(player['Dec']) +
    parseInt(player['Tea']) +
    parseInt(player['Vis']) +
    parseInt(player['Wor']) +
    parseInt(player['Bal']) +
    parseInt(player['Jum']) +
    parseInt(player['Sta'])
  player.cfa = ((key * 5 + green * 3 + blue * 1) / 51).toFixed(1)
  return player.cfa
}

function deepLyingForwardSupport(player) {
  const key = parseInt(player['Acc']) + parseInt(player['Pac']) + parseInt(player['Fin'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Ant']) +
    parseInt(player['Fla']) +
    parseInt(player['Vis']) +
    parseInt(player['Bal']) +
    parseInt(player['Str'])
  player.dlfs = ((key * 5 + green * 3 + blue * 1) / 41).toFixed(1)
  return player.dlfs
}

function deepLyingForwardAttack(player) {
  const key = parseInt(player['Acc']) + parseInt(player['Pac']) + parseInt(player['Fin'])
  const green =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB']) +
    parseInt(player['Tea'])
  const blue =
    parseInt(player['Dri']) +
    parseInt(player['Ant']) +
    parseInt(player['Fla']) +
    parseInt(player['Vis']) +
    parseInt(player['Bal']) +
    parseInt(player['Str'])
  player.dlfa = ((key * 5 + green * 3 + blue * 1) / 42).toFixed(1)
  return player.dlfa
}

function falseNineSupport(player) {
  const key = parseInt(player['Acc']) + parseInt(player['Pac']) + parseInt(player['Fin'])
  const green =
    parseInt(player['Dri']) +
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB']) +
    parseInt(player['Vis']) +
    parseInt(player['Agi'])
  const blue =
    parseInt(player['Ant']) +
    parseInt(player['Fla']) +
    parseInt(player['Tea']) +
    parseInt(player['Bal'])
  player.f9s = ((key * 5 + green * 3 + blue * 1) / 46).toFixed(1)
  return player.f9s
}

function poacherAttack(player) {
  const key = parseInt(player['Acc']) + parseInt(player['Pac']) + parseInt(player['Fin'])
  const green = parseInt(player['Ant']) + parseInt(player['Cmp']) + parseInt(player['OtB'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Hea']) +
    parseInt(player['Tec']) +
    parseInt(player['Dec'])
  player.pa = ((key * 5 + green * 3 + blue * 1) / 28).toFixed(1)
  return player.pa
}

function pressingForwardDefend(player) {
  const key = parseInt(player['Acc']) + parseInt(player['Pac']) + parseInt(player['Fin'])
  const green =
    parseInt(player['Agg']) +
    parseInt(player['Ant']) +
    parseInt(player['Bra']) +
    parseInt(player['Dec']) +
    parseInt(player['Tea']) +
    parseInt(player['Wor']) +
    parseInt(player['Sta'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Cmp']) +
    parseInt(player['Cnt']) +
    parseInt(player['Agi']) +
    parseInt(player['Bal']) +
    parseInt(player['Str'])
  player.pfd = ((key * 5 + green * 3 + blue * 1) / 42).toFixed(1)
  return player.pfd
}

function pressingForwardSupport(player) {
  const key = parseInt(player['Acc']) + parseInt(player['Pac']) + parseInt(player['Fin'])
  const green =
    parseInt(player['Agg']) +
    parseInt(player['Ant']) +
    parseInt(player['Bra']) +
    parseInt(player['Dec']) +
    parseInt(player['Tea']) +
    parseInt(player['Wor']) +
    parseInt(player['Sta'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Cmp']) +
    parseInt(player['Cnt']) +
    parseInt(player['OtB']) +
    parseInt(player['Agi']) +
    parseInt(player['Bal']) +
    parseInt(player['Str'])
  player.pfs = ((key * 5 + green * 3 + blue * 1) / 44).toFixed(1)
  return player.pfs
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

function targetForwardSupport(player) {
  const key = parseInt(player['Acc']) + parseInt(player['Pac']) + parseInt(player['Fin'])
  const green =
    parseInt(player['Hea']) +
    parseInt(player['Bra']) +
    parseInt(player['Tea']) +
    parseInt(player['Bal']) +
    parseInt(player['Jum']) +
    parseInt(player['Str'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Agg']) +
    parseInt(player['Ant']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['OtB'])
  player.tfs = ((key * 5 + green * 3 + blue * 1) / 39).toFixed(1)
  return player.tfs
}

function targetForwardAttack(player) {
  const key = parseInt(player['Acc']) + parseInt(player['Pac']) + parseInt(player['Fin'])
  const green =
    parseInt(player['Hea']) +
    parseInt(player['Bra']) +
    parseInt(player['Cmp']) +
    parseInt(player['OtB']) +
    parseInt(player['Bal']) +
    parseInt(player['Jum']) +
    parseInt(player['Str'])
  const blue =
    parseInt(player['Fir']) +
    parseInt(player['Agg']) +
    parseInt(player['Ant']) +
    parseInt(player['Dec']) +
    parseInt(player['Tea'])
  player.tfa = ((key * 5 + green * 3 + blue * 1) / 41).toFixed(1)
  return player.tfa
}

function trequartistaAttack(player) {
  const key = parseInt(player['Acc']) + parseInt(player['Pac']) + parseInt(player['Fin'])
  const green =
    parseInt(player['Dri']) +
    parseInt(player['Fir']) +
    parseInt(player['Pas']) +
    parseInt(player['Tec']) +
    parseInt(player['Cmp']) +
    parseInt(player['Dec']) +
    parseInt(player['Fla']) +
    parseInt(player['OtB']) +
    parseInt(player['Vis'])
  const blue = parseInt(player['Ant']) + parseInt(player['Agi']) + parseInt(player['Bal'])
  player.trea = ((key * 5 + green * 3 + blue * 1) / 45).toFixed(1)
  return player.trea
}
