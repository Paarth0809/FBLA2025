import { startOpt1AirChapter13, startOpt2AirChapter13 } from './airChapter13.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateHealth, updateEnergy, updateSkill, updateReputation, addAlly,  } from '../gameFunctions/utilityFunctions.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';
import { characters } from '../gameFunctions/characters.js';
import { gameState } from '../gameFunctions/gameState.js';
import { startAirFinalChapter } from './airFinalChapter.js';

// Chapter 15: The Sun Warriors and Firebending Mastery
export function startAirChapter15() {
    gameState.currentChapter = 15;
    gameState.currentChapterOption = 0; // Reset current chapter option
    displayAirChapter15();
}



function displayAirChapter15() {
    const chapter15Text = `
        <h2>Chapter 15: The Sun Warriors and Firebending Mastery</h2>
        <p>Zuko takes you to the ruins of the Sun Warriors, where the origins of firebending are preserved. Here, you face trials meant to humble and enlighten firebenders, forcing you to shed your fear of the element.</p>
        <p>Your ultimate challenge is to meet Ran and Shaw, the last dragons, and learn the true nature of firebending. It is no longer about rage or destruction—it is about the balance of life and power. Will you succeed?</p>
    `;
    updateStoryText(chapter15Text);
    updateChoices([
        { text: "Approach the dragons and observe their fire", action: () => handleAirChapter15Choice(1) },
        { text: "Perform the Sun Warrior fire-honoring ritual", action: () => handleAirChapter15Choice(2) },
        { text: "Train with Zuko to master your first flame", action: () => handleAirChapter15Choice(3) },
        { text: "Meditate on the lessons of firebending to understand its balance", action: () => handleAirChapter15Choice(4) }
    ]);
}

function handleAirChapter15Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You and Zuko approach the dragons, Ran and Shaw, with reverence, observing the vibrant, dancing flames they produce.");
            updateSkill('spirituality', 3);
            if (skillCheck('spirituality', 15)) {
                addSkill('firebending', 1);
                updateStoryText("The dragons' fire illuminates the truth about firebending—it is not anger, but energy and life. Their display inspires you, and you ignite your first flame with confidence.");
            } else {
                updateReputation(-5);
                updateStoryText("You struggle to connect with the dragons’ message, leaving you with uncertainty about your firebending ability.");
            }
            break;
        case 2:
            updateStoryText("Together with Zuko, you perform the ancient Sun Warrior fire-honoring ritual, showing respect to the dragons and firebending itself.");
            updateSkill('spirituality', 2);
            if (skillCheck('spirituality', 14)) {
                addSkill('firebending', 1);
                updateStoryText("The ritual deepens your understanding of firebending’s sacred origins. You feel its power flow through you, allowing you to create and control fire for the first time.");
            } else {
                updateEnergy(-10);
                updateStoryText("The ritual is difficult to perform perfectly, but you gain a newfound respect for firebending and its origins.");
            }
            break;
        case 3:
            updateStoryText("Zuko guides you through firebending techniques, focusing on balance and control rather than power or rage.");
            updateSkill('firebending', 2);
            if (skillCheck('firebending', 15)) {
                addSkill('firebending', 1);
                updateStoryText("With Zuko’s help, you ignite your first flame, feeling its warmth and energy. It’s a transformative moment as you overcome your fear of firebending.");
            } else {
                updateHealth(-10);
                updateStoryText("Despite Zuko’s guidance, your fear of firebending makes it difficult to ignite a flame. Progress is slow and challenging.");
            }
            break;
        case 4:
            updateStoryText("You meditate on your fear of firebending, reflecting on how it has held you back and what it means to embrace it as the Avatar.");
            updateSkill('insight', 3);
            if (skillCheck('insight', 15)) {
                addSkill('firebending', 1);
                updateStoryText("Through meditation, you come to terms with your fear and realize that firebending is as much about creation as destruction. This understanding allows you to ignite your first flame.");
            } else {
                updateEnergy(-10);
                updateStoryText("The meditation is difficult, and you struggle to overcome your fear. Firebending remains elusive for now.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([{ text: "Continue", action: () => { startAirFinalChapter(); playVideo('airCutscene16.mp4'); } }]); // Option to continue after reading
    }, 300);
}


