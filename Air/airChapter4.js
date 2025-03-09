import { startOpt1AirChapter5, startOpt2AirChapter5 } from './airChapter5.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateSkill, updateReputation, addToInventory, addAlly } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';
import { items } from '../items.js';
import { gameState } from '../gameState.js';
import { characters } from '../characters.js';

// Air code start
export function startAirChapter4() {
    gameState.currentChapter = 4;
    displayAirChapter4();
}

function displayAirChapter4() {
    const chapter4Text = `
        <h2>Chapter 4: Kyoshi Island</h2>
        <p>You and your friends arrive at Kyoshi Island, a peaceful village with skilled warriors led by Suki. 
        The villagers are initially wary of you, but they soon recognize you as the Avatar. 
        However, your presence draws unwanted attention from the Fire Nation.</p>
    `;
    updateStoryText(chapter4Text);
    updateChoices([
        { text: "Train with the Kyoshi Warriors", action: () => handleAirChapter4Choice(1) },
        { text: "Lay low and avoid drawing attention", action: () => handleAirChapter4Choice(2) }
    ]);
}

function handleAirChapter4Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You train with the Kyoshi Warriors, learning valuable combat techniques from Suki.");
            updateSkill('combat', 1);
            addAlly(characters.suki);
            if (skillCheck('combat', 12)) {
                updateStoryText("Your skills improve rapidly, impressing Suki and earning the respect of the Kyoshi Warriors.");
                updateReputation('kyoshiWarriors', 2);
            }
            updateChoices([{ text: "Continue", action: startOpt1AirChapter5 }]);
            break;
        case 2:
            updateStoryText("You decide to stay hidden, avoiding unnecessary attention from both the villagers and potential threats.");
            updateSkill('stealth', 1);
            if (skillCheck('stealth', 12)) {
                updateStoryText("Your caution pays off, allowing you to observe the island's defenses and gather useful information.");
                updateSkill('wisdom', 1);
            }
            updateChoices([{ text: "Continue", action: startOpt2AirChapter5 }]);
            break;
    }
}
// Air code end
