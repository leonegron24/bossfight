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

// SECTION Const List
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

function attackBoss() {
    if (boss.health ===0){
        boss.health=0
        let gold = 0
        boss.level += 1
        boss.maxHealth *= boss.level
        boss.damage *=boss.level
        boss.health = boss.maxHealth
        gold = 100*boss.level
        elmGold.innerHTML = gold
    }

    let totalDamage = 0
    heroes.forEach(hero => {
        console.log(hero.damage)
        totalDamage += hero.damage
    })
    console.log("Boss HP Before AttackL: " + boss.health)
    boss.health -= totalDamage
    console.log(boss.health)
    elmBossHp.InnerHTML = boss.health
    if (boss.health<0){
        boss.health =0
    }
    drawBoss()
    // instead of adding a new function to level the boss up, just added the functionality here. If your final blows kill the boss it levels up. Also adding the income function here for defeating the boss
}

function bossAttack() {
    heroes.forEach(hero => {
        hero.health -= boss.damage*boss.level
        if (hero.health <0){
            hero.health = 0
        }
    })
    elmHero0Hp.innerHTML = "❤️:  " + heroes[0].health
    elmHero1Hp.innerHTML = "❤️:  " + heroes[1].health

}

function healthPack(){
    let gold = elmGold.innerHTML
    if (gold < 100){
        return alert('not enough gold, need 100')
    }
    heroes.forEach(hero => {
        let gold = elmGold.innerHTML
        hero.health += 10
    })
    gold -= 50
    elmGold.innerHTML = gold

    elmHero0Hp.innerHTML = "❤️ : " + heroes[0].health
    elmHero1Hp.innerHTML = "❤️ : " + heroes[1].health
    
}

function levelUp(){
    let gold = elmGold.innerHTML
    console.log(gold)
    if (gold < 200){
        return alert('not enough gold, need 200')
    }
    heroes.forEach(hero => {
        hero.level += 1
        hero.damage += 5
        hero.health += 20
        elmGold.innerHTML = gold
    })
    gold -= 100
    elmGold.innerHTML = gold
    elmHero0Hp.innerHTML = "❤️ : " + heroes[0].health
    elmHero0Lvl.innerHTML = "🎚️ : " + heroes[0].level
    elmDps0Hero.innerHTML = "⚔️ : " + heroes[0].damage

    elmHero1Hp.innerHTML = "❤️ : " + heroes[1].health
    elmHero1Lvl.innerHTML ="🎚️ : " + heroes[1].level
    elmDps1Hero.innerHTML = "⚔️ : " + heroes[1].damage

}

setInterval(bossAttack, 5000)

drawBoss()