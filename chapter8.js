import { startChapter9 } from './chapter9.js';
import {  updateHealth, updateEnergy, updateReputation,updateSkill, addToInventory, addAlly } from './utilityFunctions.js';
import { items } from './items.js';
import { gameState } from './gameState.js';
import {  updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { characters } from './characters.js';
import { skillCheck } from './gameMechanics.js';



export function startChapter8() {
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
    }, 300);
}
