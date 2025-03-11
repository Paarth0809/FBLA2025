import { startAirChapter3 } from './airChapter3.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateSkill, updateReputation, addToInventory, addAlly } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';

import { gameState } from '../gameState.js';
import { characters } from '../characters.js';

// Air code start
export function startAirChapter2() {
    gameState.currentChapter = 2;
    displayAirChapter2();
}

function displayAirChapter2() {
    const chapter2Text = `
        <h2>Chapter 2: Southern Raiders' Return</h2>
        <p>After settling in with Katara and Sokka, a Fire Nation ship appears on the horizon. 
        The Southern Raiders are returning, and the Water Tribe is in danger. 
        You must decide how to react.</p>
    `;
    updateStoryText(chapter2Text);
    updateChoices([
        { text: "Confront the Raiders head-on with Airbending", action: () => handleAirChapter2Choice(1) },
        { text: "Help the villagers evacuate to safety", action: () => handleAirChapter2Choice(2) },
        { text: "Try to hide your presence and avoid conflict", action: () => handleAirChapter2Choice(3) },
        { text: "Assist Katara and Sokka in defending their home strategically", action: () => handleAirChapter2Choice(4) }
    ]);
}

function handleAirChapter2Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You charge forward with Airbending, pushing back the raiders but revealing your Avatar identity.");
            updateSkill('combat', 2);
            updateReputation('fireNation', -2);
            updateSkill('stamina', 1);
            if (skillCheck('combat', 3)) {
                updateStoryText("Your Airbending mastery overwhelms the raiders, forcing them to retreat!");
                updateReputation('waterTribe', 2);
            }
            break;
        case 2:
            updateStoryText("You prioritize the villagers' safety, guiding them away from danger while the battle rages on.");
            updateSkill('leadership', 1);
            updateSkill('wisdom', 1);
            updateSkill('empathy', 1);
            updateReputation('waterTribe', 2);
            if (skillCheck('leadership', 10)) {
                updateStoryText("Your leadership keeps everyone calm and orderly, ensuring a smooth evacuation.");
                updateSkill('leadership', 2);
                updateSkill('empathy', 1);
            }
            break;
        case 3:
            updateStoryText("You decide to stay hidden, avoiding direct conflict but missing an opportunity to help.");
            updateSkill('stealth', 2);
            updateSkill('leadership', -1);
            updateSkill('diplomacy', 1);
            if (skillCheck('stealth', 1)) {
                updateStoryText("You remain completely undetected, gathering valuable intel about the raiders' plans.");
                updateSkill('wisdom', 1);
            }
            break;
        case 4:
            updateStoryText("You work alongside Katara and Sokka, setting up defenses and fighting back strategically.");
            updateSkill('tactics', 1);
            updateSkill('combat', 2);
            updateSkill('stamina', 1);
            addAlly(characters.katara);
            addAlly(characters.sokka);
            if (skillCheck('tactics', 2)) {
                updateStoryText("Your strategic planning gives the tribe an advantage, repelling the raiders with minimal losses.");
                updateReputation('waterTribe', 2);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startAirChapter3 }
        ]);
    }, 300);
}
// Air code end
