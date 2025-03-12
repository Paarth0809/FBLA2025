import { startOpt1WaterChapter10, startOpt2WaterChapter10 } from './waterChapter10.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { gameState } from '../gameState.js';
import { updateHealth, updateEnergy, updateReputation, randomInt, updateSkill } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';

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
            updateSkill('combat', 2); // Waterbending skill
            updateSkill('leadership', 1); // Discipline
            if (skillCheck('wisdom', 15)) {
                updateStoryText("Your hard work pays off...");
                updateSkill('wisdom', 1);
            } else {
                updateSkill('empathy', -1); // Frustration
            }
            break;
        case 2:
            updateStoryText("You practice waterbending on your own, pushing yourself to new limits...");
            updateSkill('stealth', 2); // Independent practice
            updateSkill('empathy', 1); // Self-reflection
            if (skillCheck('diplomacy', 14)) {
                updateSkill('combat', 1);
            } else {
                updateSkill('stealth', -1); // Frustration
            }
            break;
        case 3:
            updateStoryText("You wander into the spirit oasis...");
            updateSkill('wisdom', 2);
            updateSkill('empathy', 2);
            if (skillCheck('wisdom', 16)) {
                updateSkill('diplomacy', 1);
            } else {
                updateSkill('wisdom', -1);
            }
            break;
        case 4:
            updateStoryText("Princess Yue speaks of the Moon Spirit...");
            updateSkill('wisdom', 3);
            updateSkill('empathy', 1);
            if (skillCheck('diplomacy', 15)) {
                updateSkill('leadership', 1);
            } else {
                updateSkill('wisdom', -1);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([{ text: "Continue", action: startOpt1WaterChapter10 }]);
    }, 300);
}

// OPTION 2 HANDLER
function handleOpt2WaterChapter9Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You struggle under Master Pakku's rigid training...");
            updateSkill('combat', 1); // Less progress
            updateSkill('leadership', -1); // Resentment
            if (skillCheck('empathy', 12)) {
                updateStoryText("Pakku reluctantly acknowledges your persistence...");
            } else {
                updateSkill('stealth', 1); // Sneaking out
            }
            break;
        case 2:
            updateStoryText("You practice waterbending with Aang, learning from each other...");
            updateSkill('stealth', 3); // Greater risk
            updateSkill('empathy', 2); // Stronger bond
            if (skillCheck('diplomacy', 16)) {
                updateSkill('combat', 2);
            } else {
                updateHealth(-5); // Overexertion
            }
            break;
        case 3:
            updateStoryText("You wander into the spirit oasis...");
            updateSkill('wisdom', 1);
            updateSkill('empathy', 3); // Emotional connection
            if (skillCheck('empathy', 18)) {
            } else {
                updateSkill('stealth', 1); // Avoid detection
            }
            break;
        case 4:
            updateStoryText("Princess Yue speaks of the Moon Spirit...");
            updateSkill('wisdom', 2);
            updateSkill('leadership', 2); // Cultural insight
            if (skillCheck('leadership', 14)) {
            } else {
                updateSkill('diplomacy', -1); // Misunderstanding
            }
            break;
    }
    setTimeout(() => {
        updateChoices([{ text: "Continue", action: startOpt2WaterChapter10 }]);
    }, 300);
}