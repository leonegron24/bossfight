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

const bossList = [
    {
    name: 'Morde',
    type: 'Demon',
    damage: 5,
    health: 100,
    maxHealth: 100,
    level: 1
}
]

function drawHero(){
   const elmRaceHero =document.getElementById('race')
   const elmNameHero =document.getElementById('heroName')
   const elmDpsHero =document.getElementById('dpsHero')
   const elmHeroHp =document.getElementById('heroHp')
   const elmHeroLvl =document.getElementById('heroLvl')
   heroes.forEach(hero => {
    let raceHero = hero.race
    let nameHero = hero.name
    let dpsHero = hero.damage
    let heroHp = hero.health
    let heroLvl = hero.level
    elmRaceHero.innerHTML = "🗺️ : " + raceHero
    elmNameHero.innerHTML = nameHero
    elmDpsHero.innerHTML = "⚔️ : " + dpsHero
    elmHeroHp.innerHTML = "❤️ : " + heroHp
    elmHeroLvl.innerHTML = "🎚️ : " + heroLvl
});
}

function drawBoss(){
    const elmBossName =document.getElementById('bossName')
    const elmBossType =document.getElementById('bossType')
    const elmDpsBoss =document.getElementById('dpsBoss')
    const elmBossHp =document.getElementById('bossHp')
    const elmBossMaxHp =document.getElementById('bossMaxHp')
    const elmBossLvl =document.getElementById('bossLvl')
    bossList.forEach(boss => {
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
    });
}

 drawHero()
 drawBoss()