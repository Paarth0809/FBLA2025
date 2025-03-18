import { updateCharacterInfo, updateInventoryDisplay, } from "./uiUpdateFunctions.js";
import { gameState } from "./gameState.js";

// Utility Functions
export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function updateSkill(skill, amount) {
    gameState.skills[skill] = gameState.skills[skill] + amount;
    if (gameState.skills[skill] < 0)
            gameState.skills[skill] = 0;
    
    updateCharacterInfo();
}

export function updateReputation(faction, amount) {
    // Adjust the reputation of a given faction by the specified amount
    gameState.reputation[faction] += amount;

    // Ensure reputation does not go below the minimum limit of -10
    if (gameState.reputation[faction] < -10) gameState.reputation[faction] = -10;

    // Ensure reputation does not exceed the maximum limit of 10
    if (gameState.reputation[faction] > 10) gameState.reputation[faction] = 10;

    // Update the character info UI after modifying reputation
    updateCharacterInfo();
}

export function addAlly(character) {
    // Add a new ally to the player's allies list
    gameState.allies.push(character);

    // Update the character info UI after adding an ally
    updateCharacterInfo();
}

export function updateHealth(amount) {
    // Modify the player's health by the specified amount
    gameState.health += amount;

    // Ensure health does not drop below 0
    if (gameState.health < 0) gameState.health = 0;

    // Ensure health does not exceed the maximum limit of 100
    if (gameState.health > 100) gameState.health = 100;

    // Update the character info UI after modifying health
    updateCharacterInfo();
}


//Not Used
export function addToInventory (item) {
    gameState.inventory.push(item);
    updateInventoryDisplay();
}

export function removeFromInventory(item) {
    const index = gameState.inventory.findIndex(i => i.name === item.name);
    if (index > -1) {
        gameState.inventory.splice(index, 1);
        updateInventoryDisplay();
    }
}



export function removeAlly(character) {
    const index = gameState.allies.findIndex(a => a.name === character.name);
    if (index > -1) {
        gameState.allies.splice(index, 1);
        updateCharacterInfo();
    }
}

export function updateGold(amount) {
    gameState.gold += amount;
    if (gameState.gold < 0) gameState.gold = 0;
    updateCharacterInfo();
}



export function updateEnergy(amount) {
    gameState.energy += amount;
    if (gameState.energy < 0) gameState.energy = 0;
    if (gameState.energy > 100) gameState.energy = 100;
    updateCharacterInfo();
}

export function addQuest(quest) {
    gameState.questLog.push(quest);
    updateQuestLog();
}

export function completeQuest(quest) {
    const index = gameState.questLog.findIndex(q => q.name === quest.name);
    if (index > -1) {
        gameState.questLog.splice(index, 1);
        gameState.completedQuests.push(quest);
        updateQuestLog();
    }
}

export function changeLocation(newLocation) {
    gameState.currentLocation = newLocation;
    updateCharacterInfo();
}

export function advanceDay(days = 1) {
    gameState.daysPassed += days;
    updateCharacterInfo();
}
