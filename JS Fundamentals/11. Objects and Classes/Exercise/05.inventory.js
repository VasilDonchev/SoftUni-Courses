function inventory(input){
    let heroes = [];

    for (const heroInfo of input) {
        let [name, level, items] = heroInfo.split(' / ');
        items.sort()((a,b) => a.localeCompare(b));
        heroes.push({name}, {level},{items});
        console.log(heroes);
    }

    
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );