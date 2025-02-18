// Game State
export let gameState = {
    playerName: "",
    currentChapter: 0,
    inventory: [],
    allies: [],
    reputation: {
        fireNation: 0,
        earthKingdom: 0,
        waterTribe: 0,
        airNomads: 0
    },
    skills: {
        combat: 0,
        stealth: 0,
        diplomacy: 0,
        bending: {
            fire: 0,
            water: 0,
            earth: 0,
            air: 0
        }
    },
    health: 100,
    energy: 100,
    gold: 50,
    questLog: [],
    completedQuests: [],
    currentLocation: "Southern Water Tribe",
    daysPassed: 0
};