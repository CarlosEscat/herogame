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
let enemyBowser ={
    "name" : 'bowser',
    'health' : 15
}

let enemyGhost = {
    'name' : 'Ghosts',
    'health' : 20
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

function equipWeapon(herolike = hero){
    if (herolike.inventory == 0){
        return undefined
    }else {
        herolike.weapon= herolike.inventory[0]
        hero = herolike
    }
    return hero
}

function dagger(){
    const picture = document.getElementById('dagger')
    picture.style.visibility= 'hidden'
    let newDagger = {'type':'dagger','damage':2}
    pickUpItem(hero, newDagger)
}

function displayStats(){
    const displayHero = document.getElementById('displayHero')

    const labelName = document.createElement('p')
    const labelHealth = document.createElement('p')
    const labelWeapon = document.createElement('p')
    const labelDamage = document.createElement('p')

    displayHero.style.backgroundColor = 'white'
    labelName.textContent = 'Name: ' + hero.name
    labelHealth.textContent = 'Health: ' + hero.health
    labelWeapon.textContent = 'Weapon type: ' + hero.weapon.type
    labelDamage.textContent = 'Damage: ' + hero.weapon.damage

    displayHero.appendChild(labelName)
    displayHero.appendChild(labelHealth)
    displayHero.appendChild(labelWeapon)
    displayHero.appendChild(labelDamage)
}

function RenamingHero(){
    const inputField = document.getElementById('newName')
    const nameGiven = inputField.value

    hero.name = nameGiven
    console.log(hero.name)
    displayStats()

}

function slingshot(){
    const picture = document.getElementById('slingshot')
    picture.style.visibility= 'hidden'
    let newSlingshot = {'type':'slingshot','damage':1}
    pickUpItem(hero, newSlingshot)
}

function lightsaber(){
    const picture = document.getElementById('lightsaber')
    picture.style.visibility= 'hidden'
    let newLight = {'type':'lightsaber','damage':4}
    pickUpItem(hero, newLight)
}

function fightBowser(){

    const displayFight = document.getElementById('fight')
    const picture = document.getElementById('ghost')
    const enemy = document.createElement('p')
    const enemyHealth = document.createElement('p')
    const you = document.createElement('p')
    const youHealth = document.createElement('p')
    const hitEnemy = document.createElement('button')

    picture.style.visibility= 'hidden'
    displayFight.style.backgroundColor = 'white'
    enemy.textContent = 'Bowser'
    enemyHealth.textContent ='Health ' + enemyBowser.health
    enemy.style.color = 'red'
    enemyHealth.style.color = 'red'
    you.textContent = hero.name
    youHealth.textContent = 'Health ' + hero.health
    you.style.color = 'blue'
    youHealth.style.color = 'blue'
    hitEnemy.textContent = 'Strike'

    displayFight.appendChild(enemy)
    displayFight.appendChild(enemyHealth)
    displayFight.appendChild(you)
    displayFight.appendChild(youHealth)
    displayFight.appendChild(hitEnemy)

}

function fightGhost(){

    const displayFight = document.getElementById('fight')
    const picture = document.getElementById('bowser')
    const enemy = document.createElement('p')
    const enemyHealth = document.createElement('p')
    const you = document.createElement('p')
    const youHealth = document.createElement('p')
    const hitEnemy = document.createElement('button')

    picture.style.visibility= 'hidden'
    displayFight.style.backgroundColor = 'white'
    enemy.textContent = 'Ghosts'
    enemyHealth.textContent ='Health ' + enemyGhost.health
    enemy.style.color = 'red'
    enemyHealth.style.color = 'red'
    you.textContent = hero.name
    youHealth.textContent = 'Health ' + hero.health
    you.style.color = 'blue'
    youHealth.style.color = 'blue'
    hitEnemy.textContent = 'Strike'

    displayFight.appendChild(enemy)
    displayFight.appendChild(enemyHealth)
    displayFight.appendChild(you)
    displayFight.appendChild(youHealth)
    displayFight.appendChild(hitEnemy)
    hitEnemy.onclick(strike())
}

function strike(){
    enemyGhost.health = enemyGhost.health - hero.weapon.damage
    console.log(enemyGhost.health)
}

displayStats()