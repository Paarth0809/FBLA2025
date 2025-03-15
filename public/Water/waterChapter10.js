import { startWaterChapter11 } from './waterChapter11.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateSkill, updateHealth, updateEnergy, updateReputation } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';
import { gameState } from '../gameState.js';

// Water code start
export function startOpt1WaterChapter10() {
    gameState.currentChapter = 10;
    displayOpt1WaterChapter10();
}

export function startOpt2WaterChapter10() {
    gameState.currentChapter = 10;
    displayOpt2WaterChapter10();
}

function displayOpt1WaterChapter10() {
    const chapter10Text = `
        <h2>Chapter 10: The Northern Water Tribe's Trials</h2>
        <p>After your experiences, you continue your journey in the Northern Water Tribe. 
        The elders have taken notice of your actions, and the Spirit Oasis seems to call to you more strongly than ever. 
        Master Pakku's training grows more intense, and the choices you make now will determine your path forward.</p>
    `;
    updateStoryText(chapter10Text);
    updateChoices([
        { text: "Seek the wisdom of the elders", action: () => handleOpt1WaterChapter10Choice(1) },
        { text: "Meditate at the Spirit Oasis", action: () => handleOpt1WaterChapter10Choice(2) },
        { text: "Confront Master Pakku about your training", action: () => handleOpt1WaterChapter10Choice(3) },
        { text: "Focus solely on your waterbending training", action: () => handleOpt1WaterChapter10Choice(4) }
    ]);
}

function displayOpt2WaterChapter10() {
    const chapter10Text = `
        <h2>Chapter 10: The Northern Water Tribe's Trials</h2>
        <p>After your experiences you continue your journey in the Northern Water Tribe. 
        The elders have taken notice of your actions, and the Spirit Oasis seems to call to you more strongly than ever. 
        Master Pakku's training grows more intense, and the choices you make now will determine your path forward.</p>
    `;
    updateStoryText(chapter10Text);
    updateChoices([
        { text: "Seek the wisdom of the elders", action: () => handleOpt2WaterChapter10Choice(1) },
        { text: "Meditate at the Spirit Oasis", action: () => handleOpt2WaterChapter10Choice(2) },
        { text: "Confront Master Pakku about your training", action: () => handleOpt2WaterChapter10Choice(3) },
        { text: "Focus solely on your waterbending training", action: () => handleOpt2WaterChapter10Choice(4) }
    ]);
}

// OPTION 1 HANDLER (CONTINUES FROM OPTION 1 IN CHAPTER 9)
function handleOpt1WaterChapter10Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You approach the Northern Water Tribe elders...");
            updateSkill('wisdom', 2);
            updateSkill('leadership', 1);
            if (skillCheck('empathy', 18)) {
                updateReputation('waterTribe', 2);
                updateSkill('diplomacy', 1);
            } else {
                updateReputation('waterTribe', -1);
                updateSkill('stealth', 1); // You try to avoid further conflict
            }
            break;
        case 2:
            updateStoryText("You meditate near the Spirit Oasis...");
            updateSkill('diplomacy', 2);
            updateSkill('empathy', 1);
            if (skillCheck('wisdom', 19)) {
                updateReputation('waterTribe', 1);
                updateSkill('wisdom', 2);
            } else {
                updateReputation('waterTribe', -2);
                updateSkill('combat', -1); // Emotional strain affects your bending
            }
            break;
        case 3:
            updateStoryText("You confront Master Pakku about your training...");
            updateSkill('stealth', 2);
            updateSkill('leadership', 1);
            if (skillCheck('diplomacy', 17) && skillCheck('wisdom', 16)) {
                updateReputation('waterTribe', 3);
                updateSkill('empathy', 3);
            } else {
                updateEnergy(-20); // Exhaustion from the confrontation
                updateSkill('combat', -2); // Frustration affects your bending
            }
            break;
        case 4:
            updateStoryText("You throw yourself into your training...");
            updateSkill('combat', 3); // Intense focus improves your bending
            updateSkill('leadership', -1); // Neglecting teamwork
            updateReputation('waterTribe', -1); // Others see you as distant
            updateSkill('empathy', -2); // Emotional detachment
            break;
    }
    setTimeout(() => {
        updateChoices([{ text: "Continue", action: startWaterChapter11 }]);
    }, 300);
}

// OPTION 2 HANDLER (CONTINUES FROM OPTION 2 IN CHAPTER 9)
function handleOpt2WaterChapter10Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You approach the Northern Water Tribe elders...");
            updateSkill('wisdom', 1); // Less cultural familiarity
            updateSkill('stealth', 2); // Southern Tribe perspective
            if (skillCheck('leadership', 15)) {
                updateReputation('waterTribe', 1);
            } else {
                updateReputation('waterTribe', -2); // Misunderstanding with the elders
            }
            break;
        case 2:
            updateStoryText("You meditate near the Spirit Oasis...");
            updateSkill('combat', 2); // Aggressive release of emotions
            updateSkill('empathy', -1); // Emotional suppression
            if (skillCheck('combat', 20)) {
                updateStoryText("Your rage fuels powerful bending...");
            } else {
                updateHealth(-15); // Physical strain from uncontrolled bending
            }
            break;
        case 3:
            updateStoryText("You confront Master Pakku...");
            updateSkill('combat', 3); // Confrontational approach
            updateSkill('diplomacy', -2); // No mercy
            if (skillCheck('combat', 18)) {
                updateStoryText("You defeat your enemy...");
            } else {
                updateHealth(-30); // Severe injury from the confrontation
            }
            break;
        case 4:
            updateStoryText("You throw yourself into your training...");
            updateSkill('combat', 4); // Extreme focus improves your bending
            updateSkill('empathy', -3); // Complete withdrawal from others
            updateReputation('waterTribe', -3); // Alienating the tribe
            break;
    }
    setTimeout(() => {
        updateChoices([{ text: "Continue", action: startWaterChapter11 }]);
    }, 300);
}