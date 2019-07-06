// Write your JS here
let hero = {
    "name" : "Pepe", 
    "heroic" : true,
    "inventory" : [],
    "health" : 10,
    "weapon" : {
        "type" : "gun",
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

function pickUpItem(){

}

function equipWeapon(){

}