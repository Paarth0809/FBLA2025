import { startOpt1WaterChapter10, startOpt2WaterChapter10 } from './waterChapter10.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';

import { skillCheck } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';

// Water code start
export function startOpt1WaterChapter9() {
    gameState.currentChapter = 9;
    displayOpt1WaterChapter9();
}

export function startOpt2WaterChapter9() {
    gameState.currentChapter = 9; 
    displayOpt2WaterChapter9();
}

function displayOpt1WaterChapter9() {
    const chapter9Text = `
        <h2>Chapter 9: Secrets of the Northern Water Tribe</h2>
        <p>While advocating overseas for change, and after a long and arduous journey, you and Aang finally reach the Northern Water Tribe, pretty ruined by the Fire Nation. Towering ice walls protect the city to prevent another attack, and the frozen canals glisten under the moonlight.
        Here, you hope to find a master who can teach you true waterbending mastery. But the tribe has its own customs and expectations. Will you follow their traditions, or seek knowledge by other means?</p>
    `;
    updateStoryText(chapter9Text);
    updateChoices([
        { text: "Train under Master Pakku despite his strict teachings", action: () => handleOpt1WaterChapter9Choice(1) },
        { text: "Practice waterbending on your own", action: () => handleOpt1WaterChapter9Choice(2) }, // Updated option
        { text: "Explore the ancient spirit oasis", action: () => handleOpt1WaterChapter9Choice(3) },
        { text: "Meet with Princess Yue to learn about the Moon Spirit", action: () => handleOpt1WaterChapter9Choice(4) }
    ]);
}

function displayOpt2WaterChapter9() {
    const chapter9Text = `
        <h2>Chapter 9: Secrets of the Northern Water Tribe</h2>
        <p>After a long and arduous journey, you and Aang finally reach the Northern Water Tribe. Towering ice walls protect the city, and the frozen canals glisten under the moonlight.
        Here, you hope to find a master who can teach you true waterbending mastery. But the tribe has its own customs and expectations—will you follow their traditions, or seek knowledge by other means?</p>
    `;
    updateStoryText(chapter9Text);
    updateChoices([
        { text: "Train under Master Pakku despite his strict teachings", action: () => handleOpt2WaterChapter9Choice(1) },
        { text: "Practice waterbending with Aang", action: () => handleOpt2WaterChapter9Choice(2) }, // Updated option
        { text: "Explore the ancient spirit oasis", action: () => handleOpt2WaterChapter9Choice(3) },
        { text: "Meet with Princess Yue to learn about the Moon Spirit", action: () => handleOpt2WaterChapter9Choice(4) }
    ]);
}

// OPTION 1 HANDLER
function handleOpt1WaterChapter9Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You struggle under Master Pakku's rigid training...");
            updateSkillWithDifficulty('combat', 2); // Waterbending skill
            updateSkillWithDifficulty('leadership', 1); // Discipline
            if (skillCheck('wisdom', 15)) {
                updateStoryText("Your hard work pays off...");
                updateSkillWithDifficulty('wisdom', 1);
            } else {
                updateSkillWithDifficulty('empathy', -1); // Frustration
            }
            break;
        case 2:
            updateStoryText("You practice waterbending on your own, pushing yourself to new limits...");
            updateSkillWithDifficulty('stealth', 2); // Independent practice
            updateSkillWithDifficulty('empathy', 1); // Self-reflection
            if (skillCheck('diplomacy', 14)) {
                updateSkillWithDifficulty('combat', 1);
            } else {
                updateSkillWithDifficulty('stealth', -1); // Frustration
            }
            break;
        case 3:
            updateStoryText("You wander into the spirit oasis...");
            updateSkillWithDifficulty('wisdom', 2);
            updateSkillWithDifficulty('empathy', 2);
            if (skillCheck('wisdom', 16)) {
                updateSkillWithDifficulty('diplomacy', 1);
            } else {
                updateSkillWithDifficulty('wisdom', -1);
            }
            break;
        case 4:
            updateStoryText("Princess Yue speaks of the Moon Spirit...");
            updateSkillWithDifficulty('wisdom', 3);
            updateSkillWithDifficulty('empathy', 1);
            if (skillCheck('diplomacy', 15)) {
                updateSkillWithDifficulty('leadership', 1);
            } else {
                updateSkillWithDifficulty('wisdom', -1);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([{ text: "Continue", action: () => { startOpt1WaterChapter10(); playVideo('waterCutscene10.mp4'); } }]);
    }, 300);
}

// OPTION 2 HANDLER
function handleOpt2WaterChapter9Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You struggle under Master Pakku's rigid training...");
            updateSkillWithDifficulty('combat', 1); // Less progress
            updateSkillWithDifficulty('leadership', -1); // Resentment
            if (skillCheck('empathy', 12)) {
                updateStoryText("Pakku reluctantly acknowledges your persistence...");
            } else {
                updateSkillWithDifficulty('stealth', 1); // Sneaking out
            }
            break;
        case 2:
            updateStoryText("You practice waterbending with Aang, learning from each other...");
            updateSkillWithDifficulty('stealth', 3); // Greater risk
            updateSkillWithDifficulty('empathy', 2); // Stronger bond
            if (skillCheck('diplomacy', 16)) {
                updateSkillWithDifficulty('combat', 2);
            } else {
                updateHealthWithDifficulty(-5); // Overexertion
            }
            break;
        case 3:
            updateStoryText("You wander into the spirit oasis...");
            updateSkillWithDifficulty('wisdom', 1);
            updateSkillWithDifficulty('empathy', 3); // Emotional connection
            if (skillCheck('empathy', 18)) {
            } else {
                updateSkillWithDifficulty('stealth', 1); // Avoid detection
            }
            break;
        case 4:
            updateStoryText("Princess Yue speaks of the Moon Spirit...");
            updateSkillWithDifficulty('wisdom', 2);
            updateSkillWithDifficulty('leadership', 2); // Cultural insight
            if (skillCheck('leadership', 14)) {
            } else {
                updateSkillWithDifficulty('diplomacy', -1); // Misunderstanding
            }
            break;
    }
    setTimeout(() => {
        updateChoices([{ text: "Continue", action: () => { startOpt2WaterChapter10(); playVideo('waterCutscene10.mp4'); } }]);
    }, 300);
}