export let gameState = {
    // The name of the current character
    currentCharacter: "",

    // The current chapter of the game the character is in
    currentChapter: 0,

    // List of allies the character has, stored as an array of ally objects
    allies: [],

    // The reputation the character has with different factions
    reputation: {
        // Reputation with the Fire Nation (default value is 0)
        fireNation: 0,
        // Reputation with the Earth Kingdom (default value is 0)
        earthKingdom: 0,
        // Reputation with the Water Tribe (default value is 0)
        waterTribe: 0,
        // Reputation with the Air Nomads (default value is 0)
        airNomads: 0
    },

    // The skills the character possesses, with their current values
    skills: {
        // Combat skill level (default value is 0)
        combat: 0,
        // Stealth skill level (default value is 0)
        stealth: 0,
        // Wisdom skill level (default value is 0)
        wisdom: 0,
        // Spirituality skill level (default value is 0)
        spirituality: 0,
        // Diplomacy skill level (default value is 0)
        diplomacy: 0,
        // Leadership skill level (default value is 0)
        leadership: 0,
        // Empathy skill level (default value is 0)
        empathy: 0
    },

    // The current health of the character (default value is 100)
    health: 100,

    // The current energy of the character (default value is 100)
    energy: 100,
};