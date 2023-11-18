
export function calculatePlayerAbilityForRole(player, role){
    switch(role){
        case 'skd':
            sweeperKeeperDefend(player);
            return;
        case 'ws':
            wingerSupport(player);
            return;
        case 'wa':
            wingerAttack(player);
            return;
        case 'pfa':
            pressingForwardAttack(player);
            return;
    }
}

export function sweeperKeeperDefend(player){
    debugger;
    const key = ( parseInt(player['Agi']) + parseInt(player['Ref']) )
    const green = ( parseInt(player['Cmd']) + parseInt(player['Kic']) + parseInt(player['1v1']) + parseInt(player['Ant']) + parseInt(player['Cnt']) + parseInt(player['Pos']) )
    const blue = ( parseInt(player['Aer']) + parseInt(player['Fir']) + parseInt(player['Han']) + parseInt(player['Pas']) + parseInt(player['TRO']) + parseInt(player['Dec']) + parseInt(player['Vis']) + parseInt(player['Acc']) )
    player['skd'] =( ( ( key * 5) + (green * 3) + (blue * 1) ) / 36).toFixed(1);
 return player.skd;
}

export function wingerAttack(player){
    const key = ( parseInt(player['Acc'])+ parseInt(player['Pac'])+ parseInt(player['Sta'])+ parseInt(player['Wor']))
    const green = ( parseInt(player['Cro'])+ parseInt(player['Dri'])+ parseInt(player['Tec'])+ parseInt(player['Agi']))
    const blue = ( parseInt(player['Fir'])+ parseInt(player['Pas'])+ parseInt(player['Ant'])+ parseInt(player['Fla'])+ parseInt(player['OtB'])+ parseInt(player['Bal']))
    player['wa'] =( ( ( key * 5) + (green * 3) + (blue * 1) ) / 38).toFixed(1);
    return player.wa;
}

export function wingerSupport(player){
    const key = ( parseInt(player['Acc'])+ parseInt(player['Pac'])+ parseInt(player['Sta'])+ parseInt(player['Wor']))
    const green = ( parseInt(player['Cro'])+ parseInt(player['Dri'])+ parseInt(player['Tec'])+ parseInt(player['Agi']))
    const blue = ( parseInt(player['Fir'])+ parseInt(player['Pas'])+ parseInt(player['OtB'])+ parseInt(player['Bal']))
    player['ws'] =( ( ( key * 5) + ( green * 3) + (blue * 1) ) / 36).toFixed(1)
    return player.ws;
}

export function pressingForwardAttack(player){
    debugger;
    const key = ( parseInt(player['Acc']) + parseInt(player['Pac']) + parseInt(player['Fin']))
    const green = ( parseInt(player['Agg']) + parseInt(player['Ant']) + parseInt(player['Bra']) + parseInt(player['OtB']) + parseInt(player['Tea']) + parseInt(player['Wor']) + parseInt(player['Sta']) )
    const blue = ( parseInt(player['Fir']) + parseInt(player['Cmp']) + parseInt(player['Cnt']) + parseInt(player['Dec']) + parseInt(player['Agi']) + parseInt(player['Bal']) + parseInt(player['Str']))
    player['pfa'] =( ( ( key * 5) + (green * 3) + (blue * 1) ) / 43).toFixed(1);
 return player.pfa;
}

