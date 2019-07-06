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

function rest(object = hero){
    
    if (object.health == 10){
        alert('Health is full')
    }
    object.health = 10
    console.log(object.health)
    hero = object
    return hero
}

function pickUpItem(herolike = hero, weaponlike){
    herolike.inventory.push(weaponlike)
    hero = herolike
    console.log(hero.inventory)
    return hero
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

function displayStats(){
    const displayHero = document.getElementById('displayHero')

    const labelName = document.createElement('p')
    const labelHealth = document.createElement('p')
    const labelWeapon = document.createElement('p')
    const labelDamage = document.createElement('p')

    labelName.textContent = 'Name: ' + hero.name
    labelHealth.textContent = 'Health: ' + hero.health
    labelWeapon.textContent = 'Weapon type: ' + hero.weapon.type
    labelDamage.textContent = 'Damage: ' + hero.weapon.damage

    displayHero.appendChild(labelName)
    displayHero.appendChild(labelHealth)
    displayHero.appendChild(labelWeapon)
    displayHero.appendChild(labelDamage)
}

displayStats()