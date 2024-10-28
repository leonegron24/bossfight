const heroes = [
    {
        name: 'Slate Slabrock',
        race: 'dwarf',
        damage: 5,
        health: 100,
        level: 1,
    },
    {
        name: 'Swift Ironstag',
        race: 'elf',
        damage: 10,
        health: 50,
        level: 1,
    }
]

const boss =
    {
    name: 'Morde',
    type: 'Demon',
    damage: 5,
    health: 100,
    maxHealth: 100,
    level: 1
}

// SECTION Const List --- I imagine I need to look into optimizing, possibly use the query selector? I wasn't sure how much better that would be...
// Hero
const elmDps0Hero =document.getElementById('dps0Hero')
const elmDps1Hero =document.getElementById('dps1Hero')

const elmHero0Hp =document.getElementById('hero0Hp')
const elmHero1Hp =document.getElementById('hero1Hp')

const elmHero0Lvl =document.getElementById('hero0Lvl')
const elmHero1Lvl =document.getElementById('hero1Lvl')
// Boss
const elmBossName =document.getElementById('bossName')
const elmBossType =document.getElementById('bossType')
const elmDpsBoss =document.getElementById('dpsBoss')
const elmBossHp =document.getElementById('bossHp')
const elmBossMaxHp =document.getElementById('bossMaxHp')
const elmBossLvl =document.getElementById('bossLvl')

// Gold
const elmGold = document.getElementById('gold')

// Number of Bosses Killed
const elmNumBoss = document.getElementById('numBoss')
let intBoss = elmNumBoss.innerHTML
let numBoss = parseInt(intBoss)

// SECTION Draw Hero possibility, review with Jake. Tried making Hero cards, but didnt want to waste too much time diving into this feature. 

// function drawHero(){
//    heroes.forEach(hero => {
//     let raceHero = hero.race
//     let nameHero = hero.name
//     let dpsHero = hero.damage
//     let heroHp = hero.health
//     let heroLvl = hero.level
//     elmRaceHero.innerHTML = "🗺️ : " + raceHero
//     elmNameHero.innerHTML = nameHero
//     elmDpsHero.innerHTML = "⚔️ : " + dpsHero
//     elmHeroHp.innerHTML = "❤️ : " + heroHp
//     elmHeroLvl.innerHTML = "🎚️ : " + heroLvl
// });
// }

function drawBoss(){
     let bossName = boss.name
     let bossType = boss.type
     let dpsBoss = boss.damage
     let bossHp = boss.health
     let bossMaxHp = boss.maxHealth
     let bossLvl = boss.level
     elmBossName.innerHTML = bossName
     elmBossType.innerHTML = "🗺️ : " + bossType
     elmDpsBoss.innerHTML = "⚔️ : " + dpsBoss
     elmBossHp.innerHTML = "❤️ : " + bossHp
     elmBossMaxHp.innerHTML = "🫀 : " + bossMaxHp
     elmBossLvl.innerHTML = "🎚️ : " + bossLvl

}
// SECTION Hero attacks Boss
function attackBoss() {
    // Level Up Boss if Killed, show # of bosses killed...
    if (boss.health ===0){
        boss.health=0
        let gold = 0
        boss.level += 1
        boss.maxHealth *= boss.level
        boss.damage *=boss.level
        boss.health = boss.maxHealth
        gold = 100*boss.level
        elmGold.innerHTML = gold
        // Number of Bosses Killed increments here
        numBoss += 1
        console.log(numBoss)
        elmNumBoss.innerHTML = numBoss
    }
    // Damage Per Hit
    let totalDamage = 0
    heroes.forEach(hero => {
        console.log(hero.damage)
        totalDamage += hero.damage
    })
    // Boss HP after HIt
    boss.health -= totalDamage
    elmBossHp.InnerHTML = boss.health
    if (boss.health<0){
        boss.health =0
    }
    // Draw Boss
    drawBoss()
}

// SECTION Boss Attacks Hero
function bossAttack() {
    // Boss Damages Hero / damage scales off level
    heroes.forEach(hero => {
        hero.health -= boss.damage*boss.level
        if (hero.health <0){
            hero.health = 0
        }
    })
    // *** Redraw both Hero health, could optimize this im sure ****
    elmHero0Hp.innerHTML = "❤️:  " + heroes[0].health
    elmHero1Hp.innerHTML = "❤️:  " + heroes[1].health

}

// SECTION Level up Hero
function healthPack(whatHero){
    // Checks if player has enough Gold
    let gold = elmGold.innerHTML
    if (gold < 50){
        return alert('not enough gold, need 50')
    }
    // Heal Hero based off argument passed
    heroes.forEach(hero => {
        if (hero.name == whatHero){
            let gold = elmGold.innerHTML
            hero.health += 10
        }
    })
    // Dock gold and redraw
    gold -= 50
    elmGold.innerHTML = gold

    // *** Redraw both Hero health, could optimize as well ***
    elmHero0Hp.innerHTML = "❤️ : " + heroes[0].health
    elmHero1Hp.innerHTML = "❤️ : " + heroes[1].health
    
}

// SECTION Level up Hero
function levelUp(whatHero){
    // Checks if player has enough Gold
    let gold = elmGold.innerHTML
    console.log(gold)
    if (gold < 100){
        return alert('not enough gold, need 200')
    }
    // Levels up hero based off argument passed
    heroes.forEach(hero => {
        if (hero.name == whatHero){
            hero.level += 1
            hero.damage *= 2
            hero.health += 20
            elmGold.innerHTML = gold
        }
    })
    // ***Dock Gold and redraw both heros, again could be optimized ***
    gold -= 100
    elmGold.innerHTML = gold
    elmHero0Hp.innerHTML = "❤️ : " + heroes[0].health
    elmHero0Lvl.innerHTML = "🎚️ : " + heroes[0].level
    elmDps0Hero.innerHTML = "⚔️ : " + heroes[0].damage

    elmHero1Hp.innerHTML = "❤️ : " + heroes[1].health
    elmHero1Lvl.innerHTML ="🎚️ : " + heroes[1].level
    elmDps1Hero.innerHTML = "⚔️ : " + heroes[1].damage

}

// Interval Boss Attack
setInterval(bossAttack, 5000)

// Initial Drawing
drawBoss()