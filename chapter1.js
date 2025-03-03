import { startChapter2 } from './chapter2.js';
import { updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { updateSkill, updateReputation, addToInventory, addAlly } from './utilityFunctions.js';
import {skillCheck} from './gameMechanics.js';
import { items } from './items.js';
import { gameState } from './gameState.js';
import { characters } from './characters.js';

export function startChapter1() {
    gameState.currentChapter = 1;
    displayChapter1();
}

function displayChapter1() {
    const chapter1Text = `
        <h2>Chapter 1: Shadows of the Past</h2>
        <p>You are Zuko, the son of the banished warrior, who embarks on a journey that will determine your destiny. 
        One fateful day, while you're on a mission for the Fire Nation, you encounter a young dragon, 
        wounded and defenseless.</p>
    `;
    updateStoryText(chapter1Text);
    updateChoices([
        { text: "Help the dragon, nursing it back to health, and befriend it!", action: () => handleChapter1Choice(1) },
        { text: "Ignore the dragon and continue your mission", action: () => handleChapter1Choice(2) },
        { text: "Report the dragon's location to the Fire Nation", action: () => handleChapter1Choice(3) },
        { text: "Attempt to communicate with the dragon", action: () => handleChapter1Choice(4) }
    ]);
}

function handleChapter1Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to help the dragon...You wait...It seems eager to be your companion!");
            updateSkill('diplomacy', 1);
            updateReputation('fireNation', -1);
            addToInventory(items.fireWhip);
            addAlly(characters.dragon);
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
    }, 300);
}