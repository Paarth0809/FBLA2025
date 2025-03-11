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
    gameState.reputation[faction] += amount;
    if (gameState.reputation[faction] < -10) gameState.reputation[faction] = -10;
    if (gameState.reputation[faction] > 10) gameState.reputation[faction] = 10;
    updateCharacterInfo();
}

export function addToInventory(item) {
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

export function addAlly(character) {
    gameState.allies.push(character);
    updateCharacterInfo();
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

export function updateHealth(amount) {
    gameState.health += amount;
    if (gameState.health < 0) gameState.health = 0;
    if (gameState.health > 100) gameState.health = 100;
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
