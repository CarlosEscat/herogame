// Write your JS here
let hero = {
    "name" : "Pepe", 
    "heroic" : true,
    "inventory" : [],
    "health" : 10,
    "weapon" : {
        "type" : "knife",
        "damage" : 2
    }
}

function rest(hero){
    if (hero.health == 10){
        alert('Health is full')
    }
    hero.health = 10
    return hero
}

function pickUpItem(hero, weaponlike){
    hero.inventory.push(weaponlike)
    
}

function equipWeapon(hero){
    if (hero.inventory == 0){
        return undefined
    }else {
        hero.weapon= hero.inventory[0]
    }
}

function dagger(){
    let newDagger = {'type':'dagger','damage':2}
    pickUpItem(hero, newDagger)
}