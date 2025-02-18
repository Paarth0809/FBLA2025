import { startChapter14 } from './chapter14.js';
import { updateStoryText, updateChoices  } from './uiUpdateFunctions.js';
import { updateSkill, addToInventory, addAlly, updateHealth, updateEnergy, updateReputation, randomInt } from './utilityFunctions.js';
import { skillCheck } from './gameMechanics.js';
import { items } from './items.js';
import { gameState } from './gameState.js';
import { characters } from './characters.js';

export function startChapter13() {
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
    }, 300);
}