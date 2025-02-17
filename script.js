function logGameState(message) {
    console.log(message, {
        chapter: gameState.currentChapter,
        health: gameState.health,
        energy: gameState.energy,
        inventory: gameState.inventory.map(item => item.name)
    });
}


// Game State
let gameState = {
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

// Characters
const characters = {
    ren: {
        name: "Ren",
        description: "Son of the banished warrior General Kaidan",
        skills: {
            combat: 5,
            stealth: 3,
            diplomacy: 2,
            bending: {
                fire: 4
            }
        },
        backstory: "Ren grew up hearing stories of his father's bravery and honor. He struggles with his loyalty to the Fire Nation and his desire to uncover the truth about his father's banishment."
    },
    aang: {
        name: "Aang",
        description: "The last Airbender and the Avatar",
        skills: {
            combat: 3,
            stealth: 4,
            diplomacy: 5,
            bending: {
                air: 5,
                water: 0,
                earth: 0,
                fire: 0
            }
        },
        backstory: "Aang was frozen in an iceberg for 100 years. Upon awakening, he must master all four elements and defeat the Fire Lord to restore balance to the world."
    },
    katara: {
        name: "Katara",
        description: "Waterbender from the Southern Water Tribe",
        skills: {
            combat: 3,
            stealth: 2,
            diplomacy: 4,
            bending: {
                water: 4
            }
        },
        backstory: "Katara is the last waterbender of the Southern Water Tribe. She dreams of mastering her abilities and helping to end the war."
    },
    sokka: {
        name: "Sokka",
        description: "Warrior from the Southern Water Tribe",
        skills: {
            combat: 4,
            stealth: 3,
            diplomacy: 3
        },
        backstory: "Sokka is a skilled warrior and strategist. Though he can't bend, he makes up for it with his quick wit and boomerang skills."
    },
    toph: {
        name: "Toph",
        description: "Blind Earthbender prodigy",
        skills: {
            combat: 5,
            stealth: 2,
            diplomacy: 1,
            bending: {
                earth: 5
            }
        },
        backstory: "Toph was born blind but learned to 'see' through earthbending. She ran away from her overprotective parents to teach Aang earthbending."
    },
    zuko: {
        name: "Zuko",
        description: "Exiled prince of the Fire Nation",
        skills: {
            combat: 4,
            stealth: 3,
            diplomacy: 2,
            bending: {
                fire: 4
            }
        },
        backstory: "Zuko was banished by his father, Fire Lord Ozai, and seeks to capture the Avatar to restore his honor."
    },
    azula: {
        name: "Azula",
        description: "Princess of the Fire Nation",
        skills: {
            combat: 5,
            stealth: 4,
            diplomacy: 3,
            bending: {
                fire: 5
            }
        },
        backstory: "Azula is a firebending prodigy and the younger sister of Zuko. She is cunning, manipulative, and fiercely loyal to her father."
    },
    iroh: {
        name: "Iroh",
        description: "Former general of the Fire Nation, Zuko's uncle",
        skills: {
            combat: 5,
            stealth: 2,
            diplomacy: 5,
            bending: {
                fire: 5
            }
        },
        backstory: "Once known as the Dragon of the West, Iroh has turned his back on the war and now seeks to guide his nephew Zuko down a better path."
    }
};

// Items
const items = {
    waterPouch: {
        name: "Water Pouch",
        description: "A pouch filled with water for bending",
        effect: "Increases water bending effectiveness by 10%",
        value: 20
    },
    earthGloves: {
        name: "Earth Gloves",
        description: "Special gloves that enhance earthbending",
        effect: "Improves precision in earthbending by 15%",
        value: 30
    },
    fireWhip: {
        name: "Fire Whip",
        description: "A whip imbued with fire-bending properties",
        effect: "Extends the range of fire attacks by 20%",
        value: 35
    },
    airStaff: {
        name: "Air Staff",
        description: "A staff used by airbenders to enhance their abilities",
        effect: "Improves air bending and allows limited flight",
        value: 40
    },
    boomerang: {
        name: "Boomerang",
        description: "Sokka's trusty boomerang",
        effect: "Can be used for ranged attacks and returns to the user",
        value: 25
    },
    healingPotion: {
        name: "Healing Potion",
        description: "A mystical potion that restores health",
        effect: "Restores 50 health points",
        value: 30
    },
    energyElixir: {
        name: "Energy Elixir",
        description: "A potent elixir that replenishes energy",
        effect: "Restores 50 energy points",
        value: 30
    },
    scrollOfWisdom: {
        name: "Scroll of Wisdom",
        description: "An ancient scroll containing powerful knowledge",
        effect: "Increases all skills by 1",
        value: 100
    },
    spiritAmulet: {
        name: "Spirit Amulet",
        description: "An amulet blessed by the spirits",
        effect: "Increases spiritual connection, aiding in certain quests",
        value: 75
    },
    meteorSword: {
        name: "Meteor Sword",
        description: "A sword forged from a fallen star",
        effect: "Increases combat effectiveness by 25%",
        value: 150
    }
};

// Locations
const locations = {
    southernWaterTribe: {
        name: "Southern Water Tribe",
        description: "A small village at the South Pole, home to waterbenders",
        availableQuests: ["Defend the Village", "Master Waterbending"],
        shops: ["Water Tribe Outfitter", "Igloo Inn"]
    },
    northernWaterTribe: {
        name: "Northern Water Tribe",
        description: "A grand city of ice and snow, stronghold of waterbenders",
        availableQuests: ["Siege Defense", "Spirit Oasis Mystery"],
        shops: ["Northern Armory", "Glacier Hotel"]
    },
    omashu: {
        name: "Omashu",
        description: "An Earth Kingdom city known for its complex mail delivery system",
        availableQuests: ["Reclaim Omashu", "Secret Tunnel Adventure"],
        shops: ["Earthen Marketplace", "Sliding Inn"]
    },
    baSingSe: {
        name: "Ba Sing Se",
        description: "The impenetrable city, capital of the Earth Kingdom",
        availableQuests: ["Uncover Conspiracy", "Tea Shop Troubles"],
        shops: ["Pao Family Tea House", "Fancy Lady Day Spa"]
    },
    airTemple: {
        name: "Southern Air Temple",
        description: "One of the four temples of the Air Nomads, now abandoned",
        availableQuests: ["Restore the Temple", "Airbender Relics"],
        shops: ["Sky Bison Stable", "Meditation Retreat"]
    },
    fireNationCapital: {
        name: "Fire Nation Capital",
        description: "The heart of the Fire Nation, seat of the Fire Lord",
        availableQuests: ["Infiltrate the Palace", "Dragon Catacombs"],
        shops: ["Royal Armory", "Caldera City Market"]
    }
};

// Quests
const quests = {
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

// Utility Functions
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateSkill(skill, amount) {
    if (skill.includes('.')) {
        const [category, subSkill] = skill.split('.');
        gameState.skills[category][subSkill] += amount;
        if (gameState.skills[category][subSkill] < 0) gameState.skills[category][subSkill] = 0;
        if (gameState.skills[category][subSkill] > 10) gameState.skills[category][subSkill] = 10;
    } else {
        gameState.skills[skill] += amount;
        if (gameState.skills[skill] < 0) gameState.skills[skill] = 0;
        if (gameState.skills[skill] > 10) gameState.skills[skill] = 10;
    }
    updateCharacterInfo();
}

function updateReputation(faction, amount) {
    gameState.reputation[faction] += amount;
    if (gameState.reputation[faction] < -10) gameState.reputation[faction] = -10;
    if (gameState.reputation[faction] > 10) gameState.reputation[faction] = 10;
    updateCharacterInfo();
}

function addToInventory(item) {
    gameState.inventory.push(item);
    updateInventoryDisplay();
}

function removeFromInventory(item) {
    const index = gameState.inventory.findIndex(i => i.name === item.name);
    if (index > -1) {
        gameState.inventory.splice(index, 1);
        updateInventoryDisplay();
    }
}

function addAlly(character) {
    gameState.allies.push(character);
    updateCharacterInfo();
}

function removeAlly(character) {
    const index = gameState.allies.findIndex(a => a.name === character.name);
    if (index > -1) {
        gameState.allies.splice(index, 1);
        updateCharacterInfo();
    }
}

function updateGold(amount) {
    gameState.gold += amount;
    if (gameState.gold < 0) gameState.gold = 0;
    updateCharacterInfo();
}

function updateHealth(amount) {
    gameState.health += amount;
    if (gameState.health < 0) gameState.health = 0;
    if (gameState.health > 100) gameState.health = 100;
    updateCharacterInfo();
}

function updateEnergy(amount) {
    gameState.energy += amount;
    if (gameState.energy < 0) gameState.energy = 0;
    if (gameState.energy > 100) gameState.energy = 100;
    updateCharacterInfo();
}

function addQuest(quest) {
    gameState.questLog.push(quest);
    updateQuestLog();
}

function completeQuest(quest) {
    const index = gameState.questLog.findIndex(q => q.name === quest.name);
    if (index > -1) {
        gameState.questLog.splice(index, 1);
        gameState.completedQuests.push(quest);
        updateQuestLog();
    }
}

function changeLocation(newLocation) {
    gameState.currentLocation = newLocation;
    updateCharacterInfo();
}

function advanceDay(days = 1) {
    gameState.daysPassed += days;
    updateCharacterInfo();
}

// Game Mechanics
function skillCheck(skill, difficulty) {
    const skillValue = skill.includes('.') ? 
        gameState.skills[skill.split('.')[0]][skill.split('.')[1]] : 
        gameState.skills[skill];
    const roll = randomInt(1, 20);
    return (roll + skillValue) >= difficulty;
}

function combat(enemy) {
    let playerHealth = gameState.health;
    let enemyHealth = enemy.health;
    let roundCount = 0;

    while (playerHealth > 0 && enemyHealth > 0) {
        roundCount++;
        // Player's turn
        if (skillCheck('combat', enemy.difficulty)) {
            const damage = randomInt(5, 15);
            enemyHealth -= damage;
            console.log(`You deal ${damage} damage to ${enemy.name}`);
        } else {
            console.log(`You miss ${enemy.name}`);
        }

        // Enemy's turn
        if (enemyHealth > 0) {
            if (randomInt(1, 20) + enemy.attackBonus > 10) {
                const damage = randomInt(3, 12);
                playerHealth -= damage;
                console.log(`${enemy.name} deals ${damage} damage to you`);
            } else {
                console.log(`${enemy.name} misses you`);
            }
        }

        console.log(`Round ${roundCount}: Your Health: ${playerHealth}, ${enemy.name}'s Health: ${enemyHealth}`);
    }

    if (playerHealth > 0) {
        console.log(`You defeated ${enemy.name}!`);
        updateHealth(playerHealth - gameState.health);
        return true;
    } else {
        console.log(`You were defeated by ${enemy.name}.`);
        updateHealth(5 - gameState.health); // Restore some health after defeat
        return false;
    }
}

function useItem(item) {
    switch (item.name) {
        case "Healing Potion":
            updateHealth(50);
            break;
        case "Energy Elixir":
            updateEnergy(50);
            break;
        case "Scroll of Wisdom":
            Object.keys(gameState.skills).forEach(skill => {
                if (typeof gameState.skills[skill] === 'object') {
                    Object.keys(gameState.skills[skill]).forEach(subSkill => {
                        updateSkill(`${skill}.${subSkill}`, 1);
                    });
                } else {
                    updateSkill(skill, 1);
                }
            });
            break;
        // Add more item effects here
    }
    removeFromInventory(item);
}

// UI Update Functions
function updateStoryText(text) {
    document.getElementById('story-text').innerHTML = text;
}

function updateChoices(choices) {
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => choice.action();
        choicesContainer.appendChild(button);
    });
}

function updateInventoryDisplay() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = '';
    gameState.inventory.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.description}`;
        const useButton = document.createElement('button');
        useButton.textContent = 'Use';
        useButton.onclick = () => useItem(item);
        li.appendChild(useButton);
        inventoryList.appendChild(li);
    });
}

function updateCharacterInfo() {
    const characterStats = document.getElementById('character-stats');
    characterStats.innerHTML = `
        <p>Name: ${gameState.playerName}</p>
        <p>Health: ${gameState.health}</p>
        <p>Energy: ${gameState.energy}</p>
        <p>Gold: ${gameState.gold}</p>
        <p>Location: ${gameState.currentLocation}</p>
        <p>Days Passed: ${gameState.daysPassed}</p>
        <h3>Skills:</h3>
        <ul>
            ${Object.entries(gameState.skills).map(([skill, value]) => 
                typeof value === 'object' ?
                    `<li>${skill}: ${Object.entries(value).map(([subSkill, subValue]) => 
                        `${subSkill}: ${subValue}`).join(', ')}</li>` :
                    `<li>${skill}: ${value}</li>`
            ).join('')}
        </ul>
        <h3>Reputation:</h3>
        <ul>
            ${Object.entries(gameState.reputation).map(([faction, value]) => 
                `<li>${faction}: ${value}</li>`
            ).join('')}
        </ul>
        <h3>Allies:</h3>
        <ul>
            ${gameState.allies.map(ally => `<li>${ally.name}</li>`).join('')}
        </ul>
    `;
}

function updateQuestLog() {
    // Implement quest log display
}

// Game Logic
function startGame() {
    gameState.playerName = prompt("Enter your name:");
    updateCharacterInfo();
    displayPrologue();
}

function displayPrologue() {
    const prologueText = `
        <h2>Prologue: A Kingdom in Flames</h2>
        <p>Fire Lord Azulon is nearing the end of his reign, and uncertainty grips the Fire Nation. 
        He believes his son, Ozai, is not yet ready to lead. In his will, he names his strongest 
        warrior, General Kaidan, as his successor. But Ozai, ruthless and ambitious, orchestrates 
        a sinister plot. He falsely accuses Kaidan of treason, leading to his banishment.</p>
        <p>With Azulon's death under mysterious circumstances, Ozai seizes power. Kaidan, now an 
        outcast, retreats to a quiet life as a farmer with his son, Ren. As war erupts, the Avatar, 
        a young airbender named Aang, is told of his destiny early. The Fire Nation's conquest 
        spreads rapidly, and the world's fate teeters on the edge of destruction.</p>
    `;
    updateStoryText(prologueText);
    updateChoices([
        { text: "Continue", action: startChapter1 }
    ]);
}

function startChapter1() {
    gameState.currentChapter = 1;
    displayChapter1();
}

function displayChapter1() {
    const chapter1Text = `
        <h2>Chapter 1: Shadows of the Past</h2>
        <p>Ren, the son of the banished warrior, embarks on a journey that will determine his destiny. 
        One fateful day, while Ren is on a mission for the Fire Nation, he encounters a young dragon, 
        wounded and defenseless.</p>
    `;
    updateStoryText(chapter1Text);
    updateChoices([
        { text: "Help the dragon, nursing it back to health", action: () => handleChapter1Choice(1) },
        { text: "Ignore the dragon and continue your mission", action: () => handleChapter1Choice(2) },
        { text: "Report the dragon's location to the Fire Nation", action: () => handleChapter1Choice(3) },
        { text: "Attempt to communicate with the dragon", action: () => handleChapter1Choice(4) }
    ]);
}

function handleChapter1Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to help the dragon...");
            updateSkill('diplomacy', 1);
            updateReputation('fireNation', -1);
            addToInventory(items.fireWhip);
            break;
        case 2:
            updateStoryText("You ignore the dragon and continue your mission...");
            updateSkill('stealth', 1);
            break;
        case 3:
            updateStoryText("You report the dragon's location to the Fire Nation...");
            updateReputation('fireNation', 2);
            updateSkill('diplomacy', -1);
            break;
        case 4:
            updateStoryText("You attempt to communicate with the dragon...");
            if (skillCheck('diplomacy', 12)) {
                updateStoryText("The dragon seems to understand you and calms down. It allows you to approach and tend to its wounds.");
                updateSkill('diplomacy', 2);
                addToInventory(items.dragonScale);
            } else {
                updateStoryText("The dragon doesn't understand your intentions and becomes agitated. You decide to back away slowly.");
                updateSkill('stealth', 1);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter2 }
        ]);
    }, 3000);
}

function startChapter2() {
    gameState.currentChapter = 2;
    displayChapter2();
}

function displayChapter2() {
    const chapter2Text = `
        <h2>Chapter 2: The Avatar's Awakening</h2>
        <p>Aang, the last Airbender, is training in secret. At 16, he realizes the weight of his responsibility. 
        The Fire Nation's grip tightens, and the Water Tribes are the next target. War Chief Hakoda leads 
        his warriors into battle, leaving behind his children, Katara and Sokka. As the invasion intensifies, 
        Katara and Sokka decide their next move.</p>
    `;
    updateStoryText(chapter2Text);
    updateChoices([
        { text: "Stay and defend the village, risking capture", action: () => handleChapter2Choice(1) },
        { text: "Flee to the Earth Kingdom to seek allies", action: () => handleChapter2Choice(2) },
        { text: "Attempt a rescue mission for captured warriors", action: () => handleChapter2Choice(3) },
        { text: "Search for the Avatar", action: () => handleChapter2Choice(4) }
    ]);
}

function handleChapter2Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to stay and defend the village...");
            updateSkill('combat', 2);
            updateReputation('waterTribe', 2);
            if (skillCheck('combat', 14)) {
                updateStoryText("Your bravery inspires the villagers. Together, you manage to repel the Fire Nation attack.");
                addToInventory(items.waterPouch);
            } else {
                updateStoryText("Despite your efforts, the Fire Nation overwhelms the village. You barely escape capture.");
                updateHealth(-20);
            }
            break;
        case 2:
            updateStoryText("You flee to the Earth Kingdom to seek allies...");
            updateSkill('diplomacy', 2);
            addAlly(characters.toph);
            updateStoryText("During your journey, you encounter Toph, a blind Earthbender who agrees to join your cause.");
            break;
        case 3:
            updateStoryText("You attempt a rescue mission for captured warriors...");
            updateSkill('stealth', 2);
            updateReputation('waterTribe', 3);
            if (skillCheck('stealth', 15)) {
                updateStoryText("Your daring rescue is successful. You free several captured warriors, boosting morale.");
                addAlly(characters.bato);
            } else {
                updateStoryText("The rescue attempt fails. You narrowly escape, but some warriors remain captive.");
                updateHealth(-15);
            }
            break;
        case 4:
            updateStoryText("You decide to search for the Avatar...");
            updateSkill('diplomacy', 1);
            updateSkill('stealth', 1);
            if (randomInt(1, 10) > 7) {
                updateStoryText("Your search leads you to an ancient Air Temple where you find clues about the Avatar's whereabouts.");
                addToInventory(items.airNomadRelic);
            } else {
                updateStoryText("Your search proves fruitless, but you gain valuable experience navigating different cultures.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter3 }
        ]);
    }, 3000);
}

function startChapter3() {
    gameState.currentChapter = 3;
    displayChapter3();
}

function displayChapter3() {
    const chapter3Text = `
        <h2>Chapter 3: The Earth Kingdom's Secret Weapon</h2>
        <p>In Ba Sing Se, Toph, a blind girl from a noble family, hones her skills as an earthbender. 
        Despite her disability, she has unmatched perception and strength. When she overhears a secret 
        about Fire Lord Ozai's plans, she must decide her course of action.</p>
    `;
    updateStoryText(chapter3Text);
    updateChoices([
        { text: "Inform the Earth Kingdom generals", action: () => handleChapter3Choice(1) },
        { text: "Find the underground resistance and join them", action: () => handleChapter3Choice(2) },
        { text: "Travel alone, seeking the Avatar's aid", action: () => handleChapter3Choice(3) },
        { text: "Confront the Dai Li about their corruption", action: () => handleChapter3Choice(4) }
    ]);
}

function handleChapter3Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to inform the Earth Kingdom generals...");
            updateSkill('diplomacy', 2);
            if (skillCheck('diplomacy', 16)) {
                updateStoryText("The generals listen to your information and begin preparing defenses against the Fire Nation's plans.");
                updateReputation('earthKingdom', 3);
            } else {
                updateStoryText("The generals dismiss your claims, believing them to be unfounded rumors.");
                updateReputation('earthKingdom', -1);
            }
            break;
        case 2:
            updateStoryText("You seek out the underground resistance...");
            updateSkill('stealth', 2);
            if (skillCheck('stealth', 14)) {
                updateStoryText("You successfully make contact with the resistance and join their ranks.");
                addAlly(characters.jet);
                addToInventory(items.earthGloves);
            } else {
                updateStoryText("Your attempts to find the resistance attract unwanted attention. You must lay low for a while.");
                updateEnergy(-20);
            }
            break;
        case 3:
            updateStoryText("You set out alone to find the Avatar...");
            updateSkill('combat', 1);
            updateSkill('stealth', 1);
            if (randomInt(1, 10) > 6) {
                updateStoryText("Your journey is perilous, but you eventually cross paths with Aang and his friends.");
                addAlly(characters.aang);
            } else {
                updateStoryText("Your search for the Avatar is unsuccessful, but you gain valuable survival skills.");
                addToInventory(items.survivalKit);
            }
            break;
        case 4:
            updateStoryText("You decide to confront the Dai Li about their corruption...");
            updateSkill('combat', 2);
            if (skillCheck('combat', 17)) {
                updateStoryText("Your confrontation exposes some of the Dai Li's secrets, causing a stir in Ba Sing Se.");
                updateReputation('earthKingdom', 4);
                updateReputation('fireNation', -2);
            } else {
                updateStoryText("The Dai Li overpower you and throw you in prison. You must plan your escape.");
                updateHealth(-30);
                addQuest(quests.escapePrison);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter4 }
        ]);
    }, 3000);

    logGameState("End of Chapter 3");
    setTimeout(() => {
        logGameState("Starting Chapter 4");
        startChapter4();
    }, 3000);
}

function startChapter4() {
    logGameState("Inside startChapter4");
    gameState.currentChapter = 4;
    displayChapter4();
}

function displayChapter4() {
    logGameState("Displaying Chapter 4");
    const chapter4Text = `
        <h2>Chapter 4: The Fire Nation Prison Escape</h2>
        <p>Ren, Katara, Sokka, and Toph cross paths in a high-security Fire Nation prison. 
        The Avatar, now fully aware of his mission, infiltrates the prison to free them. 
        The escape plan is risky and requires careful coordination.</p>
    `;
    updateStoryText(chapter4Text);
    updateChoices([
        { text: "Attempt a full-scale breakout, rallying all prisoners", action: () => handleChapter4Choice(1) },
        { text: "Execute a stealth operation, sneaking out unnoticed", action: () => handleChapter4Choice(2) },
        { text: "Try to deceive the guards into letting you go", action: () => handleChapter4Choice(3) },
        { text: "Create a diversion to split the guards' attention", action: () => handleChapter4Choice(4) }
    ]);
}


function handleChapter4Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to attempt a full-scale breakout...");
            updateSkill('combat', 3);
            updateSkill('diplomacy', 1);
            if (skillCheck('combat', 18)) {
                updateStoryText("The prison erupts into chaos. Amidst the confusion, you and many others manage to escape.");
                updateReputation('fireNation', -4);
                addAlly(characters.suki);
            } else {
                updateStoryText("The breakout attempt fails. Guards quickly suppress the uprising, and security tightens.");
                updateHealth(-40);
                updateReputation('fireNation', -2);
            }
            break;
        case 2:
            updateStoryText("You opt for a stealth operation...");
            updateSkill('stealth', 3);
            if (skillCheck('stealth', 16)) {
                updateStoryText("Under the cover of night, you and your allies slip past the guards undetected.");
                addToInventory(items.prisonMap);
            } else {
                updateStoryText("Your stealth attempt is discovered. You manage to escape, but not without injury.");
                updateHealth(-20);
                updateReputation('fireNation', -1);
            }
            break;
        case 3:
            updateStoryText("You try to deceive the guards...");
            updateSkill('diplomacy', 3);
            if (skillCheck('diplomacy', 17)) {
                updateStoryText("Your clever ruse works. The guards unwittingly allow you and your allies to walk free.");
                addToInventory(items.guardUniform);
            } else {
                updateStoryText("The guards see through your deception. Your punishment is severe, but you're alive.");
                updateHealth(-30);
                updateEnergy(-30);
            }
            break;
        case 4:
            updateStoryText("You create a diversion to split the guards' attention...");
            updateSkill('stealth', 2);
            updateSkill('combat', 1);
            if (skillCheck('stealth', 15) && skillCheck('combat', 14)) {
                updateStoryText("Your diversion works perfectly. In the chaos, you and your allies make your escape.");
                addToInventory(items.smokeGrenade);
            } else {
                updateStoryText("The diversion partially succeeds. You escape, but not all of your allies make it out.");
                updateHealth(-15);
                updateReputation('fireNation', -2);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter5 }
        ]);
    }, 3000);
}

function startChapter5() {
    gameState.currentChapter = 5;
    displayChapter5();
}

function displayChapter5() {
    const chapter5Text = `
        <h2>Chapter 5: The Eclipse Plan</h2>
        <p>Having escaped the Fire Nation prison, your group learns of an upcoming solar eclipse, 
        a rare moment when firebending is rendered useless. This presents a unique opportunity 
        to strike at the heart of the Fire Nation. You must devise a plan to take advantage of 
        this momentous event.</p>
    `;
    updateStoryText(chapter5Text);
    updateChoices([
        { text: "Lead a direct assault on the Fire Nation capital", action: () => handleChapter5Choice(1) },
        { text: "Sabotage the Fire Nation's supply lines first", action: () => handleChapter5Choice(2) },
        { text: "Attempt diplomacy with Fire Nation defectors", action: () => handleChapter5Choice(3) },
        { text: "Infiltrate the Fire Nation to gather intelligence", action: () => handleChapter5Choice(4) }
    ]);
}

function handleChapter5Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to lead a direct assault on the Fire Nation capital...");
            updateSkill('combat', 3);
            updateReputation('fireNation', -5);
            if (skillCheck('combat', 19)) {
                updateStoryText("Your bold strategy catches the Fire Nation off guard. You make significant progress towards the palace.");
                addToInventory(items.royalArmor);
            } else {
                updateStoryText("The assault is met with fierce resistance. You suffer heavy losses but manage to establish a foothold.");
                updateHealth(-50);
                updateReputation('earthKingdom', 2);
            }
            break;
        case 2:
            updateStoryText("You opt to sabotage the Fire Nation's supply lines...");
            updateSkill('stealth', 3);
            updateSkill('strategy', 2);
            if (skillCheck('stealth', 17)) {
                updateStoryText("Your sabotage is successful, severely hampering the Fire Nation's ability to defend against the upcoming assault.");
                addToInventory(items.fireNationIntelligence);
            } else {
                updateStoryText("Your sabotage attempt is partially successful, but you're discovered and must flee quickly.");
                updateHealth(-20);
                updateReputation('fireNation', -2);
            }
            break;
        case 3:
            updateStoryText("You attempt diplomacy with Fire Nation defectors...");
            updateSkill('diplomacy', 3);
            if (skillCheck('diplomacy', 18)) {
                updateStoryText("Your diplomatic efforts pay off. A significant number of Fire Nation soldiers agree to stand down during the eclipse.");
                addAlly(characters.jeongJeong);
                updateReputation('fireNation', -1);
                updateReputation('earthKingdom', 3);
            } else {
                updateStoryText("Your diplomatic overtures are met with suspicion. While some defectors join you, others alert the Fire Nation to your plans.");
                updateReputation('fireNation', -3);
            }
            break;
        case 4:
            updateStoryText("You decide to infiltrate the Fire Nation to gather intelligence...");
            updateSkill('stealth', 2);
            updateSkill('strategy', 2);
            if (skillCheck('stealth', 16) && skillCheck('strategy', 15)) {
                updateStoryText("Your infiltration is a success. You uncover crucial information about the Fire Nation's defenses and escape undetected.");
                addToInventory(items.fireNationBattlePlans);
            } else {
                updateStoryText("Your cover is blown during the infiltration. You manage to escape, but not before sustaining injuries.");
                updateHealth(-30);
                updateReputation('fireNation', -2);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter6 }
        ]);
    }, 3000);
}

function startChapter6() {
    gameState.currentChapter = 6;
    displayChapter6();
}

function displayChapter6() {
    const chapter6Text = `
        <h2>Chapter 6: The Day of Black Sun</h2>
        <p>The day of the solar eclipse has arrived. Your forces are in position, ready to launch 
        the assault on the Fire Nation capital. As the moon begins to cover the sun, you must 
        make crucial decisions that will determine the outcome of this daring attack.</p>
    `;
    updateStoryText(chapter6Text);
    updateChoices([
        { text: "Lead the frontal assault on the palace", action: () => handleChapter6Choice(1) },
        { text: "Guide a small team to capture Fire Lord Ozai", action: () => handleChapter6Choice(2) },
        { text: "Defend the invasion force from counter-attacks", action: () => handleChapter6Choice(3) },
        { text: "Search for Princess Azula to prevent her interference", action: () => handleChapter6Choice(4) }
    ]);
}

function handleChapter6Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You lead the frontal assault on the palace...");
            updateSkill('combat', 3);
            updateSkill('leadership', 2);
            if (skillCheck('combat', 20) && skillCheck('leadership', 18)) {
                updateStoryText("Your leadership inspires the troops. You break through the palace defenses and secure key positions.");
                addToInventory(items.royalScepter);
                updateReputation('earthKingdom', 5);
            } else {
                updateStoryText("The assault meets heavy resistance. You're forced to retreat as the eclipse ends, but not before dealing significant damage.");
                updateHealth(-40);
                updateReputation('fireNation', -4);
            }
            break;
        case 2:
            updateStoryText("You guide a small team to capture Fire Lord Ozai...");
            updateSkill('stealth', 3);
            updateSkill('strategy', 2);
            if (skillCheck('stealth', 19) && randomInt(1, 10) > 7) {
                updateStoryText("Against all odds, you locate Ozai's bunker. However, you find it empty - he anticipated the attack and fled.");
                addToInventory(items.ozaisBattlePlans);
            } else {
                updateStoryText("Your team is ambushed by the royal guards. You fight valiantly but must retreat as the eclipse ends.");
                updateHealth(-30);
                updateEnergy(-40);
            }
            break;
        case 3:
            updateStoryText("You focus on defending the invasion force from counter-attacks...");
            updateSkill('combat', 2);
            updateSkill('strategy', 3);
            if (skillCheck('combat', 17) && skillCheck('strategy', 18)) {
                updateStoryText("Your defensive strategies prove effective. You successfully repel several counter-attacks, allowing the invasion to progress.");
                updateReputation('earthKingdom', 3);
                updateReputation('waterTribe', 3);
            } else {
                updateStoryText("The Fire Nation's counter-attacks are fiercer than anticipated. You prevent a total rout, but the invasion force suffers heavy losses.");
                updateHealth(-20);
                updateReputation('earthKingdom', -1);
            }
            break;
        case 4:
            updateStoryText("You search for Princess Azula to prevent her interference...");
            updateSkill('combat', 2);
            updateSkill('stealth', 2);
            if (skillCheck('stealth', 18) && skillCheck('combat', 19)) {
                updateStoryText("You manage to track down Azula and engage her in combat. Though she escapes, you've significantly disrupted her plans.");
                addToInventory(items.azulasBlueFire);
                updateReputation('fireNation', -3);
            } else {
                updateStoryText("Azula outmaneuvers you, leading you into a trap. You barely escape with your life as the eclipse ends.");
                updateHealth(-50);
                updateEnergy(-50);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter7 }
        ]);
    }, 3000);
}

function startChapter7() {
    gameState.currentChapter = 7;
    displayChapter7();
}

function displayChapter7() {
    const chapter7Text = `
        <h2>Chapter 7: Aftermath and Revelations</h2>
        <p>The eclipse has ended, and with it, your chance at a decisive victory. As you regroup 
        with your allies, you must come to terms with the outcome of the invasion and plan your 
        next move. Unexpected revelations await, potentially changing the course of your journey.</p>
    `;
    updateStoryText(chapter7Text);
    updateChoices([
        { text: "Analyze the outcome of the invasion with your allies", action: () => handleChapter7Choice(1) },
        { text: "Seek out a mysterious spiritual guide mentioned in ancient texts", action: () => handleChapter7Choice(2) },
        { text: "Investigate rumors of a secret Fire Nation superweapon", action: () => handleChapter7Choice(3) },
        { text: "Attempt to make contact with the Order of the White Lotus", action: () => handleChapter7Choice(4) }
    ]);
}

function handleChapter7Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You gather your allies to analyze the outcome of the invasion...");
            updateSkill('strategy', 3);
            updateSkill('leadership', 2);
            if (skillCheck('strategy', 16)) {
                updateStoryText("Your analysis reveals crucial weaknesses in the Fire Nation's defenses. You formulate a new strategy that gives you hope.");
                addToInventory(items.strategicMap);
                updateReputation('earthKingdom', 2);
                updateReputation('waterTribe', 2);
            } else {
                updateStoryText("The meeting is fraught with disagreements. Morale dips as the full extent of your losses becomes clear.");
                updateEnergy(-20);
                updateReputation('earthKingdom', -1);
            }
            break;
        case 2:
            updateStoryText("You decide to seek out the mysterious spiritual guide...");
            updateSkill('spirituality', 3);
            if (skillCheck('spirituality', 17) && randomInt(1, 10) > 6) {
                updateStoryText("After a perilous journey, you encounter the guide. They impart ancient wisdom that grants you new spiritual abilities.");
                addToInventory(items.spiritCharm);
                updateSkill('bending.spirit', 2);
            } else {
                updateStoryText("Your search leads you through treacherous terrain. While you don't find the guide, the journey strengthens your resolve.");
                updateHealth(-10);
                updateEnergy(-30);
                updateSkill('survival', 2);
            }
            break;
        case 3:
            updateStoryText("You investigate rumors of a secret Fire Nation superweapon...");
            updateSkill('stealth', 2);
            updateSkill('intelligence', 3);
            if (skillCheck('stealth', 18) && skillCheck('intelligence', 17)) {
                updateStoryText("Your investigation uncovers plans for a fleet of airships. This information could be crucial in preventing the Fire Nation's next attack.");
                addToInventory(items.airshipBlueprints);
                updateReputation('fireNation', -2);
            } else {
                updateStoryText("The investigation proves dangerous. You're discovered by Fire Nation patrols and barely escape with your life.");
                updateHealth(-40);
                updateReputation('fireNation', -1);
            }
            break;
        case 4:
            updateStoryText("You attempt to make contact with the Order of the White Lotus...");
            updateSkill('diplomacy', 3);
            if (skillCheck('diplomacy', 19)) {
                updateStoryText("Your efforts pay off. You establish contact with the Order, gaining powerful allies in your fight against the Fire Nation.");
                addAlly(characters.iroh);
                updateReputation('whiteLotusSociety', 5);
            } else {
                updateStoryText("Your attempts to contact the Order attract unwanted attention. You're forced to lay low, delaying your plans.");
                updateEnergy(-40);
                updateReputation('fireNation', -1);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter8 }
        ]);
    }, 3000);
}

function startChapter8() {
    gameState.currentChapter = 8;
    displayChapter8();
}

function displayChapter8() {
    const chapter8Text = `
        <h2>Chapter 8: The Western Air Temple</h2>
        <p>Following the failed invasion, you and your allies seek refuge in the Western Air Temple. 
        This ancient sanctuary of the Air Nomads provides a moment of respite, but new challenges 
        and unexpected visitors await.</p>
    `;
    updateStoryText(chapter8Text);
    updateChoices([
        { text: "Explore the temple's hidden chambers", action: () => handleChapter8Choice(1) },
        { text: "Train and prepare for the next confrontation", action: () => handleChapter8Choice(2) },
        { text: "Deal with Zuko, who has arrived seeking redemption", action: () => handleChapter8Choice(3) },
        { text: "Investigate strange noises echoing through the temple", action: () => handleChapter8Choice(4) }
    ]);
}

function handleChapter8Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to explore the temple's hidden chambers...");
            updateSkill('exploration', 2);
            if (skillCheck('exploration', 16)) {
                updateStoryText("You discover an ancient airbending scroll, revealing forgotten techniques.");
                addToInventory(items.ancientAirbendingScroll);
                updateSkill('bending.air', 2);
            } else {
                updateStoryText("The chambers are more treacherous than expected. You narrowly escape a collapsing passageway.");
                updateHealth(-15);
            }
            break;
        case 2:
            updateStoryText("You focus on training and preparing for the next confrontation...");
            updateSkill('combat', 2);
            updateSkill('strategy', 2);
            updateStoryText("The intense training session improves your skills and boosts the group's morale.");
            updateEnergy(-20);
            break;
        case 3:
            updateStoryText("You confront Zuko about his desire for redemption...");
            updateSkill('diplomacy', 2);
            if (skillCheck('diplomacy', 18)) {
                updateStoryText("After a tense discussion, you cautiously accept Zuko into the group. His inside knowledge could be valuable.");
                addAlly(characters.zuko);
                updateReputation('fireNation', 1);
            } else {
                updateStoryText("The confrontation with Zuko turns hostile. He leaves, but you worry he might return as an enemy.");
                updateReputation('fireNation', -2);
            }
            break;
        case 4:
            updateStoryText("You investigate the strange noises echoing through the temple...");
            updateSkill('stealth', 2);
            if (skillCheck('stealth', 17)) {
                updateStoryText("You discover a group of friendly air bison hiding in the temple. They could provide valuable transportation.");
                addToInventory(items.bisonWhistle);
            } else {
                updateStoryText("The source of the noise turns out to be unstable parts of the temple. Your investigation triggers a minor collapse.");
                updateHealth(-10);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter9 }
        ]);
    }, 3000);
}

function startChapter9() {
    gameState.currentChapter = 9;
    displayChapter9();
}

function displayChapter9() {
    const chapter9Text = `
        <h2>Chapter 9: The Firebending Masters</h2>
        <p>With Zuko now part of your group, he reveals that his firebending has weakened. 
        To regain his power and teach the Avatar, you must seek out the original firebending 
        masters: the ancient dragons.</p>
    `;
    updateStoryText(chapter9Text);
    updateChoices([
        { text: "Undertake the journey to the ancient Sun Warrior ruins", action: () => handleChapter9Choice(1) },
        { text: "Attempt to find an alternative method to restore Zuko's firebending", action: () => handleChapter9Choice(2) },
        { text: "Focus on other aspects of preparation, delaying the firebending training", action: () => handleChapter9Choice(3) },
        { text: "Split the group to pursue multiple objectives simultaneously", action: () => handleChapter9Choice(4) }
    ]);
}

function handleChapter9Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You journey to the ancient Sun Warrior ruins...");
            updateSkill('exploration', 3);
            if (skillCheck('exploration', 18) && randomInt(1, 10) > 5) {
                updateStoryText("You successfully complete the trials and meet the firebending masters. They teach you the true essence of firebending.");
                updateSkill('bending.fire', 3);
                addToInventory(items.eternalFlame);
            } else {
                updateStoryText("The journey is perilous and the trials challenging. You learn valuable lessons but at a great cost.");
                updateHealth(-30);
                updateEnergy(-40);
            }
            break;
        case 2:
            updateStoryText("You search for an alternative method to restore Zuko's firebending...");
            updateSkill('research', 2);
            if (skillCheck('research', 17)) {
                updateStoryText("Through ancient texts, you discover a meditation technique that helps restore Zuko's inner fire.");
                updateSkill('bending.fire', 1);
                addToInventory(items.meditationCandle);
            } else {
                updateStoryText("Your research proves frustrating and time-consuming, yielding little results.");
                updateEnergy(-30);
            }
            break;
        case 3:
            updateStoryText("You decide to focus on other aspects of preparation...");
            updateSkill('strategy', 2);
            updateSkill('combat', 1);
            updateStoryText("While you make progress in other areas, the lack of firebending training becomes a concern.");
            updateReputation('fireNation', -1);
            break;
        case 4:
            updateStoryText("You split the group to pursue multiple objectives...");
            updateSkill('leadership', 2);
            if (skillCheck('leadership', 16) && randomInt(1, 10) > 6) {
                updateStoryText("The split strategy works well. You make progress on multiple fronts, including some firebending insights.");
                updateSkill('bending.fire', 1);
                addToInventory(items.tacticalMap);
            } else {
                updateStoryText("The split group encounters various difficulties. You regroup, having lost valuable time and resources.");
                updateEnergy(-40);
                updateReputation('earthKingdom', -1);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter10 }
        ]);
    }, 3000);
}

function startChapter10() {
    gameState.currentChapter = 10;
    displayChapter10();
}

function displayChapter10() {
    const chapter10Text = `
        <h2>Chapter 10: The Southern Raiders</h2>
        <p>Katara's unresolved feelings about her mother's death come to the surface. She seeks 
        closure and justice, leading to a dangerous mission to confront the man responsible. 
        You must decide how to handle this delicate situation.</p>
    `;
    updateStoryText(chapter10Text);
    updateChoices([
        { text: "Support Katara's mission for revenge", action: () => handleChapter10Choice(1) },
        { text: "Try to dissuade Katara from her vengeful path", action: () => handleChapter10Choice(2) },
        { text: "Offer to accompany Katara but advocate for mercy", action: () => handleChapter10Choice(3) },
        { text: "Focus the group on preparing for the comet instead", action: () => handleChapter10Choice(4) }
    ]);
}

function handleChapter10Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to support Katara's mission for revenge...");
            updateSkill('combat', 2);
            if (skillCheck('combat', 18)) {
                updateStoryText("The mission is successful, but the emotional toll on Katara is heavy. She chooses not to take revenge in the end.");
                updateReputation('waterTribe', 2);
                updateReputation('fireNation', -2);
            } else {
                updateStoryText("The mission goes awry, putting you both in danger. You escape, but without the closure Katara sought.");
                updateHealth(-25);
                updateEnergy(-30);
            }
            break;
        case 2:
            updateStoryText("You try to dissuade Katara from her vengeful path...");
            updateSkill('diplomacy', 3);
            if (skillCheck('diplomacy', 19)) {
                updateStoryText("Your words reach Katara. She realizes revenge won't bring peace and chooses a path of healing instead.");
                updateReputation('waterTribe', 1);
                addToInventory(items.spiritWater);
            } else {
                updateStoryText("Katara rejects your advice, straining your relationship. She embarks on the mission alone, worrying the entire group.");
                updateReputation('waterTribe', -2);
            }
            break;
        case 3:
            updateStoryText("You offer to accompany Katara but advocate for mercy...");
            updateSkill('diplomacy', 2);
            updateSkill('stealth', 1);
            if (skillCheck('diplomacy', 17) && skillCheck('stealth', 16)) {
                updateStoryText("You successfully track down the man and confront him. Katara chooses mercy, finding strength in forgiveness.");
                updateReputation('waterTribe', 3);
                addToInventory(items.redemptionAmulet);
            } else {
                updateStoryText("The mission is partially successful, but the outcome leaves Katara conflicted and unsatisfied.");
                updateEnergy(-20);
            }
            break;
        case 4:
            updateStoryText("You focus the group on preparing for the comet instead...");
            updateSkill('strategy', 3);
            updateStoryText("While Katara is initially upset, the group's focus on the larger threat helps put things in perspective.");
            updateReputation('waterTribe', -1);
            updateSkill('bending.fire', 1);
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter11 }
        ]);
    }, 3000);
}

function startChapter11() {
    gameState.currentChapter = 11;
    displayChapter11();
}

function displayChapter11() {
    const chapter11Text = `
        <h2>Chapter 11: The Boiling Rock</h2>
        <p>Sokka learns that his father might be imprisoned at the Boiling Rock, the Fire Nation's 
        most secure prison. Despite the risks, he's determined to mount a rescue mission. You must 
        decide how to approach this dangerous endeavor.</p>
    `;
    updateStoryText(chapter11Text);
    updateChoices([
        { text: "Infiltrate the prison disguised as guards", action: () => handleChapter11Choice(1) },
        { text: "Attempt a stealth mission to break in and out quickly", action: () => handleChapter11Choice(2) },
        { text: "Create a diversion to draw away the prison's forces", action: () => handleChapter11Choice(3) },
        { text: "Negotiate with sympathetic prison staff for inside help", action: () => handleChapter11Choice(4) }
    ]);
}

function handleChapter11Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You infiltrate the prison disguised as guards...");
            updateSkill('stealth', 2);
            updateSkill('deception', 2);
            if (skillCheck('stealth', 18) && skillCheck('deception', 17)) {
                updateStoryText("Your disguises work perfectly. You locate Sokka's father and orchestrate a daring escape.");
                addAlly(characters.hakoda);
                addToInventory(items.prisonMasterKey);
            } else {
                updateStoryText("Your cover is blown midway through the mission. You manage to escape, but without freeing the prisoners.");
                updateHealth(-30);
                updateReputation('fireNation', -2);
            }
            break;
        case 2:
            updateStoryText("You attempt a stealth mission to break in and out quickly...");
            updateSkill('stealth', 3);
            if (skillCheck('stealth', 19)) {
                updateStoryText("Your stealth skills are impeccable. You free Sokka's father and several other prisoners without raising the alarm.");
                addAlly(characters.suki);
                updateReputation('earthKingdom', 2);
            } else {
                updateStoryText("The prison's security is tighter than expected. You're forced to abort the mission and narrowly escape capture.");
                updateEnergy(-40);
            }
            break;
        case 3:
            updateStoryText("You create a diversion to draw away the prison's forces...");
            updateSkill('strategy', 2);
            updateSkill('bending.fire', 1);
            if (skillCheck('strategy', 17) && randomInt(1, 10) > 6) {
                updateStoryText("Your diversion works brilliantly, allowing a small team to free the prisoners during the chaos.");
                addAlly(characters.hakoda);
                updateReputation('fireNation', -3);
            } else {
                updateStoryText("The diversion spirals out of control, putting everyone in danger. You manage to escape, but without the prisoners.");
                updateHealth(-20);
                updateEnergy(-30);
            }
            break;
        case 4:
            updateStoryText("You attempt to negotiate with sympathetic prison staff...");
            updateSkill('diplomacy', 3);
            if (skillCheck('diplomacy', 18)) {
                updateStoryText("You successfully convince some staff members to help. Their inside knowledge proves crucial to the escape plan.");
                addAlly(characters.hakoda);
                addToInventory(items.guardSchedule);
            } else {
                updateStoryText("Your negotiations fail, and the staff alert the warden. You're forced to flee, mission unaccomplished.");
                updateReputation('fireNation', -2);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter12 }
        ]);
    }, 3000);
}

function startChapter12() {
    gameState.currentChapter = 12;
    displayChapter12();
}

function displayChapter12() {
    const chapter12Text = `
        <h2>Chapter 12: The Southern Air Temple Revisited</h2>
        <p>As Sozin's Comet approaches, Aang is plagued by doubts about facing the Fire Lord. 
        He suggests revisiting the Southern Air Temple to connect with his past and seek guidance. 
        Time is short, but this spiritual journey could be crucial.</p>
    `;
    updateStoryText(chapter12Text);
    updateChoices([
        { text: "Support Aang's journey to the temple", action: () => handleChapter12Choice(1) },
        { text: "Urge the group to continue practical preparations instead", action: () => handleChapter12Choice(2) },
        { text: "Split the group: some go to the temple, others prepare", action: () => handleChapter12Choice(3) },
        { text: "Suggest an alternative spiritual location for quicker guidance", action: () => handleChapter12Choice(4) }
    ]);
}

function handleChapter12Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You support Aang's journey to the Southern Air Temple...");
            updateSkill('spirituality', 3);
            if (skillCheck('spirituality', 18)) {
                updateStoryText("At the temple, Aang connects with the spirits of past Avatars, gaining crucial wisdom and resolve.");
                updateSkill('bending.air', 2);
                addToInventory(items.avatarRelicStaff);
            } else {
                updateStoryText("The journey provides some comfort to Aang, but no breakthrough insights. Valuable time has been used.");
                updateEnergy(-30);
            }
            break;
        case 2:
            updateStoryText("You urge the group to continue practical preparations...");
            updateSkill('strategy', 2);
            updateSkill('combat', 2);
            updateStoryText("The group's combat skills and strategies improve, but Aang's spiritual uncertainty remains a concern.");
            updateReputation('earthKingdom', 1);
            updateEnergy(-20);
            break;
        case 3:
            updateStoryText("You decide to split the group...");
            updateSkill('leadership', 2);
            if (skillCheck('leadership', 17) && randomInt(1, 10) > 5) {
                updateStoryText("The split approach works well. Aang finds spiritual guidance while the rest of the group makes solid preparations.");
                updateSkill('bending.air', 1);
                addToInventory(items.enhancedBattlePlans);
            } else {
                updateStoryText("The split group struggles with their respective tasks. You regroup, having made little progress on either front.");
                updateEnergy(-40);
            }
            break;
        case 4:
            updateStoryText("You suggest an alternative spiritual location...");
            updateSkill('knowledge', 2);
            if (skillCheck('knowledge', 16)) {
                updateStoryText("Your suggestion leads the group to a nearby ancient meditation site. Aang receives valuable guidance in a shorter time.");
                updateSkill('spirituality', 2);
                addToInventory(items.spiritMedallion);
            } else {
                updateStoryText("The alternative location doesn't provide the connection Aang needs. The detour costs time without much benefit.");
                updateEnergy(-25);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter13 }
        ]);
    }, 3000);
}

function startChapter13() {
    gameState.currentChapter = 13;
    displayChapter13();
}

function displayChapter13() {
    const chapter13Text = `
        <h2>Chapter 13: The Order of the White Lotus</h2>
        <p>As the day of Sozin's Comet draws near, you receive a message from Iroh. The Order 
        of the White Lotus is gathering to liberate Ba Sing Se. Their aid could be crucial, but 
        joining them might delay your confrontation with the Fire Lord.</p>
    `;
    updateStoryText(chapter13Text);
    updateChoices([
        { text: "Join forces with the Order of the White Lotus", action: () => handleChapter13Choice(1) },
        { text: "Decline their offer and focus on confronting the Fire Lord", action: () => handleChapter13Choice(2) },
        { text: "Send part of your group to aid the Order while others prepare", action: () => handleChapter13Choice(3) },
        { text: "Request the Order's assistance in your plan instead", action: () => handleChapter13Choice(4) }
    ]);
}

function handleChapter13Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to join forces with the Order of the White Lotus...");
            updateSkill('strategy', 3);
            updateReputation('earthKingdom', 3);
            if (skillCheck('strategy', 18)) {
                updateStoryText("The combined forces successfully liberate Ba Sing Se. This victory significantly weakens the Fire Nation's hold.");
                addAlly(characters.iroh);
                updateReputation('fireNation', -3);
            } else {
                updateStoryText("The battle for Ba Sing Se is hard-fought. You succeed, but at a great cost of time and resources.");
                updateHealth(-30);
                updateEnergy(-40);
            }
            break;
        case 2:
            updateStoryText("You decline their offer and focus on confronting the Fire Lord...");
            updateSkill('determination', 2);
            updateStoryText("Your group remains focused on the primary mission, but you wonder about the fate of Ba Sing Se.");
            updateReputation('whiteLotusSociety', -2);
            break;
        case 3:
            updateStoryText("You send part of your group to aid the Order...");
            updateSkill('leadership', 2);
            if (skillCheck('leadership', 17) && randomInt(1, 10) > 6) {
                updateStoryText("The split strategy works well. Ba Sing Se is liberated, and your main group makes good preparations.");
                addAlly(characters.pakku);
                updateReputation('earthKingdom', 2);
            } else {
                updateStoryText("The split forces struggle. Ba Sing Se's liberation is partial, and your main group's preparation suffers.");
                updateEnergy(-35);
                updateReputation('earthKingdom', 1);
            }
            break;
        case 4:
            updateStoryText("You request the Order's assistance in your plan...");
            updateSkill('diplomacy', 3);
            if (skillCheck('diplomacy', 19)) {
                updateStoryText("The Order agrees to alter their plans. Their support significantly strengthens your position against the Fire Lord.");
                addAlly(characters.jeongJeong);
                addToInventory(items.whiteLotusTalisman);
            } else {
                updateStoryText("The Order is reluctant to change their plans. You receive minimal support, straining relations.");
                updateReputation('whiteLotusSociety', -1);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter14 }
        ]);
    }, 3000);
}

function startChapter14() {
    gameState.currentChapter = 14;
    displayChapter14();
}

function displayChapter14() {
    const chapter14Text = `
        <h2>Chapter 14: The Ember Island Players</h2>
        <p>With tensions high and Sozin's Comet approaching, your group stumbles upon a theater 
        troupe performing a play about your adventures. This unexpected encounter forces you 
        to reflect on your journey and the challenges ahead.</p>
    `;
    updateStoryText(chapter14Text);
    updateChoices([
        { text: "Attend the play to gather intelligence on public perception", action: () => handleChapter14Choice(1) },
        { text: "Use this time for last-minute training instead", action: () => handleChapter14Choice(2) },
        { text: "Attempt to influence the play's narrative for propaganda purposes", action: () => handleChapter14Choice(3) },
        { text: "Reflect privately on the journey and meditate on the coming battle", action: () => handleChapter14Choice(4) }
    ]);
}

function handleChapter14Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to attend the play...");
            updateSkill('intelligence', 2);
            if (skillCheck('intelligence', 16)) {
                updateStoryText("The play provides valuable insights into public perception and Fire Nation propaganda tactics.");
                addToInventory(items.propagandaPamphlet);
                updateReputation('fireNation', -1);
            } else {
                updateStoryText("The play is wildly inaccurate and somewhat demoralizing. It provides little useful information.");
                updateEnergy(-20);
            }
            break;
        case 2:
            updateStoryText("You opt for last-minute training...");
            updateSkill('combat', 2);
            updateSkill('bending.fire', 1);
            updateStoryText("The intense training session hones your skills, but leaves little time for mental preparation.");
            updateEnergy(-30);
            break;
        case 3:
            updateStoryText("You attempt to influence the play's narrative...");
            updateSkill('diplomacy', 2);
            if (skillCheck('diplomacy', 18)) {
                updateStoryText("Your subtle influence shifts the play's tone, inspiring hope in the audience and boosting morale.");
                updateReputation('earthKingdom', 2);
                updateReputation('fireNation', -2);
            } else {
                updateStoryText("Your attempts to influence the play backfire, drawing unwanted attention to your group.");
                updateReputation('fireNation', -1);
            }
            break;
        case 4:
            updateStoryText("You choose to reflect privately and meditate...");
            updateSkill('spirituality', 3);
            if (skillCheck('spirituality', 17)) {
                updateStoryText("Your meditation provides clarity and inner peace, strengthening your resolve for the coming battle.");
                updateSkill('bending.spirit', 2);
                addToInventory(items.spiritualFocus);
            } else {
                updateStoryText("Your attempts at meditation are interrupted by anxious thoughts about the future.");
                updateEnergy(-15);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter15 }
        ]);
    }, 3000);
}

function startChapter15() {
    gameState.currentChapter = 15;
    displayChapter15();
}

function displayChapter15() {
    const chapter15Text = `
        <h2>Chapter 15: The Phoenix King</h2>
        <p>Sozin's Comet is mere hours away. You've learned that Fire Lord Ozai plans to harness 
        its power to deal a final, devastating blow to the Earth Kingdom. Time is running out, 
        and you must make crucial last-minute decisions.</p>
    `;
    updateStoryText(chapter15Text);
    updateChoices([
        { text: "Launch a preemptive strike on the Fire Nation capital", action: () => handleChapter15Choice(1) },
        { text: "Set up defensive positions to protect key Earth Kingdom locations", action: () => handleChapter15Choice(2) },
        { text: "Attempt to intercept Ozai's airship fleet before they take off", action: () => handleChapter15Choice(3) },
        { text: "Seek out a spiritual solution to negate the comet's power", action: () => handleChapter15Choice(4) }
    ]);
}

function handleChapter15Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You launch a preemptive strike on the Fire Nation capital...");
            updateSkill('strategy', 3);
            updateSkill('combat', 2);
            if (skillCheck('strategy', 19) && skillCheck('combat', 18)) {
                updateStoryText("Your bold strike catches the Fire Nation off guard, significantly disrupting their plans.");
                updateReputation('fireNation', -4);
                addToInventory(items.royalWarPlans);
            } else {
                updateStoryText("The Fire Nation's defenses prove too strong. You're forced to retreat, having lost valuable time and resources.");
                updateHealth(-40);
                updateEnergy(-50);
            }
            break;
        case 2:
            updateStoryText("You set up defensive positions in the Earth Kingdom...");
            updateSkill('defense', 3);
            if (skillCheck('defense', 18)) {
                updateStoryText("Your defensive strategy is solid. Key locations are fortified, giving hope to Earth Kingdom citizens.");
                updateReputation('earthKingdom', 4);
                addToInventory(items.earthKingdomShield);
            } else {
                updateStoryText("Your defenses are spread too thin. Some locations remain vulnerable to attack.");
                updateEnergy(-30);
                updateReputation('earthKingdom', -1);
            }
            break;
        case 3:
            updateStoryText("You attempt to intercept Ozai's airship fleet...");
            updateSkill('stealth', 2);
            updateSkill('sabotage', 2);
            if (skillCheck('stealth', 17) && skillCheck('sabotage', 18)) {
                updateStoryText("Your team successfully infiltrates and sabotages several key airships, crippling Ozai's fleet.");
                addToInventory(items.airshipSchematics);
                updateReputation('fireNation', -3);
            } else {
                updateStoryText("The airship base is too well-guarded. Your sabotage attempt fails, and you barely escape capture.");
                updateHealth(-25);
                updateEnergy(-40);
            }
            break;
        case 4:
            updateStoryText("You seek a spiritual solution to negate the comet's power...");
            updateSkill('spirituality', 3);
            if (skillCheck('spirituality', 20)) {
                updateStoryText("Through deep meditation, you discover an ancient technique to temporarily dampen the comet's effect on firebending.");
                updateSkill('bending.spirit', 3);
                addToInventory(items.spiritWaterVial);
            } else {
                updateStoryText("Despite your best efforts, you're unable to find a way to counteract the comet's power through spiritual means.");
                updateEnergy(-45);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter16 }
        ]);
    }, 3000);
}

function startChapter16() {
    gameState.currentChapter = 16;
    displayChapter16();
}

function displayChapter16() {
    const chapter16Text = `
        <h2>Chapter 16: Sozin's Comet</h2>
        <p>The day of reckoning has arrived. Sozin's Comet blazes across the sky, empowering all 
        firebenders to unprecedented levels. Fire Lord Ozai, now styling himself the Phoenix King, 
        leads his assault. The final battle for the fate of the world begins.</p>
    `;
    updateStoryText(chapter16Text);
    updateChoices([
        { text: "Confront Ozai directly in an epic duel", action: () => handleChapter16Choice(1) },
        { text: "Focus on taking down the airship fleet to prevent widespread destruction", action: () => handleChapter16Choice(2) },
        { text: "Attempt to turn Ozai's own forces against him", action: () => handleChapter16Choice(3) },
        { text: "Use the spirit technique to try and sever Ozai's connection to the comet", action: () => handleChapter16Choice(4) }
    ]);
}

function handleChapter16Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You confront Ozai directly in an epic duel...");
            updateSkill('combat', 3);
            updateSkill('bending.fire', 3);
            if (skillCheck('combat', 22) && skillCheck('bending.fire', 20)) {
                updateStoryText("In a battle of legendary proportions, you manage to defeat Ozai, ending his reign of terror.");
                updateReputation('fireNation', -5);
                updateReputation('earthKingdom', 5);
                addToInventory(items.phoenixCrown);
            } else {
                updateStoryText("Ozai's power, enhanced by the comet, proves too much. You're forced to retreat, badly wounded.");
                updateHealth(-60);
                updateEnergy(-70);
            }
            break;
        case 2:
            updateStoryText("You focus on taking down the airship fleet...");
            updateSkill('strategy', 3);
            updateSkill('sabotage', 2);
            if (skillCheck('strategy', 20) && skillCheck('sabotage', 19)) {
                updateStoryText("Through ingenious tactics, you manage to bring down the entire fleet, saving countless lives.");
                updateReputation('earthKingdom', 5);
                addToInventory(items.airshipWreckage);
            } else {
                updateStoryText("You take down several airships, but others break through, causing significant damage.");
                updateEnergy(-50);
                updateReputation('earthKingdom', -2);
            }
            break;
        case 3:
            updateStoryText("You attempt to turn Ozai's forces against him...");
            updateSkill('diplomacy', 3);
            updateSkill('leadership', 2);
            if (skillCheck('diplomacy', 21) && skillCheck('leadership', 20)) {
                updateStoryText("Your impassioned speech sways many of Ozai's soldiers. His forces are thrown into disarray.");
                updateReputation('fireNation', 3);
                addAlly(characters.fireNationDefectors);
            } else {
                updateStoryText("Ozai's hold over his troops is too strong. Your attempts at persuasion largely fail.");
                updateEnergy(-40);
                updateReputation('fireNation', -1);
            }
            break;
        case 4:
            updateStoryText("You use the spirit technique to try and sever Ozai's connection to the comet...");
            updateSkill('spirituality', 3);
            updateSkill('bending.spirit', 3);
            if (skillCheck('spirituality', 22) && skillCheck('bending.spirit', 21)) {
                updateStoryText("In a display of incredible spiritual power, you manage to disrupt Ozai's connection to the comet, leaving him vulnerable.");
                updateSkill('bending.spirit', 5);
                addToInventory(items.spiritualNexus);
            } else {
                updateStoryText("The technique only partially works. Ozai's power is diminished, but he remains a formidable threat.");
                updateEnergy(-60);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue to the Final Confrontation", action: startFinalChapter }
        ]);
    }, 3000);
}

function startFinalChapter() {
    gameState.currentChapter = 17;
    displayFinalChapter();
}

function displayFinalChapter() {
    const finalChapterText = `
        <h2>Final Chapter: The World's Fate</h2>
        <p>The final moments of the conflict are upon you. The choices you've made and the allies 
        you've gathered have led to this crucial point. The fate of the entire world hangs in the 
        balance. How will you bring an end to this century-long war?</p>
    `;
    updateStoryText(finalChapterText);
    updateChoices([
        { text: "Defeat Ozai through combat, ending his threat once and for all", action: () => handleFinalChoice(1) },
        { text: "Use energybending to remove Ozai's bending abilities permanently", action: () => handleFinalChoice(2) },
        { text: "Attempt to redeem Ozai, appealing to his humanity", action: () => handleFinalChoice(3) },
        { text: "Sacrifice your own bending to create a world without bending powers", action: () => handleFinalChoice(4) }
    ]);
}

function handleFinalChoice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You choose to defeat Ozai through combat...");
            if (skillCheck('combat', 25) && gameState.reputation.earthKingdom > 5) {
                updateStoryText("In an epic final battle, you overcome Ozai, bringing an end to his reign of terror. The world celebrates its hard-won peace.");
                endGame("Victory through Strength");
            } else {
                updateStoryText("Despite your valiant efforts, Ozai proves too powerful. The world falls under the dominion of the Fire Nation.");
                endGame("A World in Flames");
            }
            break;
        case 2:
            updateStoryText("You attempt to use energybending on Ozai...");
            if (skillCheck('spirituality', 24) && gameState.skills.bending.spirit > 8) {
                updateStoryText("In a breathtaking display of spiritual power, you strip Ozai of his bending. The war ends, ushering in a new era of balance.");
                endGame("A New Harmony");
            } else {
                updateStoryText("The energybending technique backfires, leaving you vulnerable. Ozai seizes the opportunity, and the world falls to darkness.");
                endGame("Spirit Broken");
            }
            break;
        case 3:
            updateStoryText("You try to redeem Ozai by appealing to his humanity...");
            if (skillCheck('diplomacy', 26) && gameState.reputation.fireNation > 0) {
                updateStoryText("Against all odds, your words reach Ozai's heart. He renounces his destructive path, marking the beginning of a peaceful transition.");
                endGame("Redemption's Light");
            } else {
                updateStoryText("Ozai is unmoved by your appeal. His ambition consumes him, and the world suffers the consequences of your misplaced mercy.");
                endGame("Mercy's Folly");
            }
            break;
            case 4:
                updateStoryText("You decide to sacrifice all bending to create a world without these powers...");
                if (skillCheck('spirituality', 27) && gameState.skills.bending.spirit > 9) {
                    updateStoryText("In a monumental act of sacrifice, you reshape the very fabric of the world. Bending ceases to exist, ushering in an era of true equality.");
                    endGame("A World Reborn");
                } else {
                    updateStoryText("The enormity of your task overwhelms you. The attempt fails, leaving you powerless as Ozai's reign of terror continues.");
                    endGame("A Dream Shattered");
                }
                break;
        }
    }
    
    function endGame(ending) {
        let endingText = "<h2>The End</h2>";
        switch (ending) {
            case "Victory through Strength":
                endingText += "<p>Through sheer power and determination, you've defeated Fire Lord Ozai and ended the Hundred Year War. The world begins the long process of healing and rebuilding. Your legend will be remembered for generations to come.</p>";
                break;
            case "A World in Flames":
                endingText += "<p>Despite your best efforts, Ozai's power proved too great. The world has fallen under the dominion of the Fire Nation. Hope remains that one day, a new hero will rise to challenge the Phoenix King's rule.</p>";
                break;
            case "A New Harmony":
                endingText += "<p>By removing Ozai's bending, you've ended the war without further bloodshed. The world enters a new age of peace and balance. Your wisdom and mercy become the foundation for a brighter future.</p>";
                break;
            case "Spirit Broken":
                endingText += "<p>The energybending technique backfired, leaving you vulnerable. Ozai seized this opportunity to claim victory. The world has fallen into darkness, with the hope of the Avatar extinguished.</p>";
                break;
            case "Redemption's Light":
                endingText += "<p>Against all odds, you've redeemed Ozai. This unexpected turn of events leads to a peaceful transition of power. The world marvels at the power of compassion and the possibility of change.</p>";
                break;
            case "Mercy's Folly":
                endingText += "<p>Your attempt at redemption failed, and Ozai's ambition has consumed the world. The consequences of your mercy will be felt for generations to come.</p>";
                break;
            case "A World Reborn":
                endingText += "<p>Your sacrifice has reshaped the world. Without bending, a new era of true equality begins. The challenges ahead are many, but for the first time, all people face them on equal footing.</p>";
                break;
            case "A Dream Shattered":
                endingText += "<p>Your ambitious attempt to reshape the world has failed, leaving you powerless. Ozai's reign continues unchallenged, and the dream of a world without bending fades into legend.</p>";
                break;
        }
        endingText += `<p>Final Stats:<br>
                       Health: ${gameState.health}<br>
                       Energy: ${gameState.energy}<br>
                       Reputation:<br>
                       - Fire Nation: ${gameState.reputation.fireNation}<br>
                       - Earth Kingdom: ${gameState.reputation.earthKingdom}<br>
                       - Water Tribe: ${gameState.reputation.waterTribe}<br>
                       - Air Nomads: ${gameState.reputation.airNomads}</p>`;
        endingText += "<p>Thank you for playing Avatar: The Last Airbender - Journey of Destiny!</p>";
        endingText += "<button onclick='restartGame()'>Play Again</button>";
    
        updateStoryText(endingText);
        // Hide choices as the game has ended
        document.getElementById('choices').style.display = 'none';
    }
    
    function restartGame() {
        // Reset game state
        gameState = {
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
                    air: 0,
                    spirit: 0
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
    
        // Show choices again
        document.getElementById('choices').style.display = 'block';
    
        // Start the game from the beginning
        startGame();
    }
    
    // Make sure to call startGame() when the page loads to begin the adventure
    window.onload = startGame;
    

// Start the game
startGame();
