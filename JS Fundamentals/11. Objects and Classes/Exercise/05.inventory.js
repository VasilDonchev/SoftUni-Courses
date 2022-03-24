function inventory(input){
    let heroes = [];

    for (const heroInfo of input) {
        let [name, level, items] = heroInfo.split(' / ');
        items.split(', ').sort((a,b) => a.localeCompare());
        console.log(heroInfo);
    }

    
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );