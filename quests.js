import { items } from "./items.js";

// Quests
export const quests = {
    defendVillage: {
        name: "Defend the Village",
        description: "Protect the Southern Water Tribe from a Fire Nation raid",
        reward: {
            gold: 100,
            reputation: { waterTribe: 3 },
            item: items.waterPouch
        },
        difficulty: "Medium"
    },
    masterWaterbending: {
        name: "Master Waterbending",
        description: "Train with Master Pakku to improve your waterbending skills",
        reward: {
            gold: 50,
            skills: { bending: { water: 2 } },
            reputation: { waterTribe: 2 }
        },
        difficulty: "Hard"
    },
    siegeDefense: {
        name: "Siege Defense",
        description: "Help defend the Northern Water Tribe against the Fire Nation invasion",
        reward: {
            gold: 200,
            reputation: { waterTribe: 5, fireNation: -3 },
            item: items.scrollOfWisdom
        },
        difficulty: "Very Hard"
    },
    spiritOasisMystery: {
        name: "Spirit Oasis Mystery",
        description: "Investigate strange occurrences at the Spirit Oasis",
        reward: {
            gold: 75,
            skills: { diplomacy: 1 },
            item: items.spiritAmulet
        },
        difficulty: "Medium"
    },
    reclaimOmashu: {
        name: "Reclaim Omashu",
        description: "Help King Bumi reclaim Omashu from the Fire Nation",
        reward: {
            gold: 150,
            reputation: { earthKingdom: 4, fireNation: -2 },
            skills: { combat: 1 }
        },
        difficulty: "Hard"
    },
    secretTunnelAdventure: {
        name: "Secret Tunnel Adventure",
        description: "Navigate the treacherous Cave of Two Lovers",
        reward: {
            gold: 50,
            skills: { stealth: 1 },
            item: items.earthGloves
        },
        difficulty: "Medium"
    },
    uncoverConspiracy: {
        name: "Uncover Conspiracy",
        description: "Investigate the mysterious Dai Li and their secrets",
        reward: {
            gold: 100,
            reputation: { earthKingdom: 3 },
            skills: { diplomacy: 1, stealth: 1 }
        },
        difficulty: "Hard"
    },
    teaShopTroubles: {
        name: "Tea Shop Troubles",
        description: "Help Iroh manage his new tea shop in Ba Sing Se",
        reward: {
            gold: 50,
            reputation: { earthKingdom: 1 },
            skills: { diplomacy: 1 }
        },
        difficulty: "Easy"
    },
    restoreTemple: {
        name: "Restore the Temple",
        description: "Help restore the Southern Air Temple to its former glory",
        reward: {
            gold: 75,
            reputation: { airNomads: 4 },
            item: items.airStaff
        },
        difficulty: "Medium"
    },
    airbenderRelics: {
        name: "Airbender Relics",
        description: "Recover lost Air Nomad artifacts from around the world",
        reward: {
            gold: 100,
            skills: { stealth: 1, diplomacy: 1 },
            item: items.scrollOfWisdom
        },
        difficulty: "Hard"
    },
    infiltratePalace: {
        name: "Infiltrate the Palace",
        description: "Sneak into the Fire Nation Royal Palace to gather intelligence",
        reward: {
            gold: 200,
            reputation: { fireNation: -3 },
            skills: { stealth: 2 }
        },
        difficulty: "Very Hard"
    },
    dragonCatacombs: {
        name: "Dragon Catacombs",
        description: "Explore the ancient Dragon Catacombs beneath the Fire Nation Capital",
        reward: {
            gold: 150,
            skills: { bending: { fire: 1 } },
            item: items.fireWhip
        },
        difficulty: "Hard"
    }
};