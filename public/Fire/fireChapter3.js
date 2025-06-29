


import { startFireChapter4 } from './fireChapter4.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { playVideo } from '../gameFunctions/cutscenes.js';

import { characters } from '../gameFunctions/characters.js';
import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js';

//Fire code start
export function startFireChapter3() {
    gameState.currentChapter = 3;
    displayFireChapter3();
}

function displayFireChapter3() {
    const chapter3Text = `
        <h2>Chapter 3: The Blue Spirit</h2>
        <p>News reaches you that the Avatar has been captured and is being held in a heavily fortified Fire Nation outpost. Recognizing this as both a threat and an opportunity, you don the mask of the Blue Spirit. This dual identity allows you to move with anonymity, striking against your own nation to achieve your goals. The mission is clear: rescue the Avatar to ensure that your quest for honor remains yours alone to fulfill.</p>
    `;
    updateStoryText(chapter3Text);
    updateChoices([
        { text: "Sneak into the fortress undetected", action: () => handleFireChapter3Choice(1) },
        { text: "Confront the guards head-on as the Blue Spirit", action: () => handleFireChapter3Choice(2) },
        { text: "Create a diversion to draw the guards away", action: () => handleFireChapter3Choice(3) },
        { text: "Use the environment to your advantage", action: () => handleFireChapter3Choice(4) }
    ]);
}


function handleFireChapter3Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("Using the shadows to your advantage, you infiltrate the fortress, avoiding detection with your agility and stealth. You reach the Avatar's cell undetected, freeing him and escaping without alerting the entire fortress to your presence.");
            updateSkillWithDifficulty('stealth', 3);
            updateReputationWithDifficulty('fireNation', -2);
            if (skillCheck('stealth', 10)) {
                updateHealthWithDifficulty(10);  // Success in stealth increases health.
            } else {
                updateHealthWithDifficulty(-5);  // Failure or partial success results in minor health loss.
            }
            break;
        case 2:
            updateStoryText("Embracing the persona of the Blue Spirit, you engage the guards directly, using your superior combat skills to overcome them. Though the approach is risky, you manage to defeat the guards and free the Avatar, proving your prowess as a warrior.");
            updateSkillWithDifficulty('combat', 3);
            updateReputationWithDifficulty('fireNation', -5);
            if (skillCheck('combat', 12)) {
                updateHealthWithDifficulty(-10);  // Successful combat reduces health due to the fight.
            } else {
                updateHealthWithDifficulty(-20);  // Less successful attempt costs more health.
            }
            break;
        case 3:
            updateStoryText("You craft a clever diversion, setting off a series of explosions that draw the guards away from the Avatar's cell. With the guards distracted, you swiftly move to free the Avatar, showcasing your tactical acumen.");
            updateSkillWithDifficulty('stealth', 2);
            updateReputationWithDifficulty('fireNation', -3);
            if (skillCheck('stealth', 11)) {
                updateHealthWithDifficulty(5);  // Successful strategy improves situation with minimal risk.
            } else {
                updateHealthWithDifficulty(-5);  // Less effective strategy leads to minor setbacks.
            }
            break;
        case 4:
            updateStoryText("Observing the fortress's layout and natural features, you use the environment to create obstacles and barriers, confusing and slowing down the guards. This approach allows you to reach the Avatar with minimal confrontation, highlighting your ability to adapt and use resources creatively.");
            updateSkillWithDifficulty('strategy', 2);
            updateReputationWithDifficulty('fireNation', -1);
            if (skillCheck('spirituality', 10)) {
                updateHealthWithDifficulty(5);  // Successfully using the environment to advantage.
            } else {
                updateHealthWithDifficulty(-5);  // Failing to effectively use the environment.
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: () => { startFireChapter4(); playVideo('fireCutscene4.mp4'); } }
        ]);
    }, 300);
}
//Fire code end