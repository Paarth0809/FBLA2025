import { startChapter10 } from './chapter10.js';
import { updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { items } from './items.js';
import { gameState } from './gameState.js';
import { updateHealth, updateEnergy, updateReputation, randomInt, addToInventory, updateSkill } from './utilityFunctions.js';
import { skillCheck } from './gameMechanics.js';


export function startChapter9() {
    gameState.currentChapter = 9;
    displayChapter9();
}

function displayChapter9() {
    const chapter9Text = `
        <h2>Chapter 9: The Firebending Masters</h2>
        <p>With Zuko now part of your group, he reveals that his firebending has weakened. 
        To regain his power and teach the Avatar, you must seek out the original firebending 
        masters: the ancient dragons.</p>
    `;
    updateStoryText(chapter9Text);
    updateChoices([
        { text: "Undertake the journey to the ancient Sun Warrior ruins", action: () => handleChapter9Choice(1) },
        { text: "Attempt to find an alternative method to restore Zuko's firebending", action: () => handleChapter9Choice(2) },
        { text: "Focus on other aspects of preparation, delaying the firebending training", action: () => handleChapter9Choice(3) },
        { text: "Split the group to pursue multiple objectives simultaneously", action: () => handleChapter9Choice(4) }
    ]);
}

function handleChapter9Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You journey to the ancient Sun Warrior ruins...");
            updateSkill('exploration', 3);
            if (skillCheck('exploration', 18) && randomInt(1, 10) > 5) {
                updateStoryText("You successfully complete the trials and meet the firebending masters. They teach you the true essence of firebending.");
                updateSkill('bending.fire', 3);
                addToInventory(items.eternalFlame);
            } else {
                updateStoryText("The journey is perilous and the trials challenging. You learn valuable lessons but at a great cost.");
                updateHealth(-30);
                updateEnergy(-40);
            }
            break;
        case 2:
            updateStoryText("You search for an alternative method to restore Zuko's firebending...");
            updateSkill('research', 2);
            if (skillCheck('research', 17)) {
                updateStoryText("Through ancient texts, you discover a meditation technique that helps restore Zuko's inner fire.");
                updateSkill('bending.fire', 1);
                addToInventory(items.meditationCandle);
            } else {
                updateStoryText("Your research proves frustrating and time-consuming, yielding little results.");
                updateEnergy(-30);
            }
            break;
        case 3:
            updateStoryText("You decide to focus on other aspects of preparation...");
            updateSkill('strategy', 2);
            updateSkill('combat', 1);
            updateStoryText("While you make progress in other areas, the lack of firebending training becomes a concern.");
            updateReputation('fireNation', -1);
            break;
        case 4:
            updateStoryText("You split the group to pursue multiple objectives...");
            updateSkill('leadership', 2);
            if (skillCheck('leadership', 16) && randomInt(1, 10) > 6) {
                updateStoryText("The split strategy works well. You make progress on multiple fronts, including some firebending insights.");
                updateSkill('bending.fire', 1);
                addToInventory(items.tacticalMap);
            } else {
                updateStoryText("The split group encounters various difficulties. You regroup, having lost valuable time and resources.");
                updateEnergy(-40);
                updateReputation('earthKingdom', -1);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter10 }
        ]);
    }, 300);
}