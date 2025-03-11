// Game State
export let gameState = {
    currentCharacter: "",
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
        wisdom: 0,
        sprituality: 0,
        diplomacy: 0,
        leadership: 0,
        empathy: 0
    },
    health: 100,
    energy: 100,
    gold: 50,
    questLog: [],
    completedQuests: [],
    currentLocation: "Southern Water Tribe",
    daysPassed: 0
};