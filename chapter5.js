import { startChapter6 } from './chapter6.js';
import { updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { updateHealth, updateSkill, updateReputation, addToInventory, addAlly } from './utilityFunctions.js';
import { items } from './items.js';
import { characters } from './characters.js';
import { gameState } from './gameState.js';
import { skillCheck } from './gameMechanics.js';

export function startChapter5() {
    gameState.currentChapter = 5;
    displayChapter5();
}

function displayChapter5() {
    const chapter5Text = `
        <h2>Chapter 5: The Blue Spirit</h2>
        <p>News reaches you that the Avatar has been captured and is being held in a heavily fortified Fire Nation outpost. Recognizing this as both a threat and an opportunity, you don the mask of the Blue Spirit. This dual identity allows you to move with anonymity, striking against your own nation to achieve your goals. The mission is clear: rescue the Avatar to ensure that your quest for honor remains yours alone to fulfill.</p>
    `;
    updateStoryText(chapter5Text);
    updateChoices([
        { text: "Sneak into the fortress undetected", action: () => handleChapter5Choice(1) },
        { text: "Confront the guards head-on as the Blue Spirit", action: () => handleChapter5Choice(2) },
        { text: "Create a diversion to draw the guards away", action: () => handleChapter5Choice(3) },
        { text: "Use the environment to your advantage", action: () => handleChapter5Choice(4) }
    ]);
}

function handleChapter5Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("Using the shadows to your advantage, you infiltrate the fortress, avoiding detection with your agility and stealth. You reach the Avatar's cell undetected, freeing him and escaping without alerting the entire fortress to your presence.");
            updateSkill('stealth', 3);
            updateReputation('fireNation', -2);
            if (skillCheck('stealth', 10)) {
                updateHealth(10);  // Success in stealth increases health.
            } else {
                updateHealth(-5);  // Failure or partial success results in minor health loss.
            }
            break;
        case 2:
            updateStoryText("Embracing the persona of the Blue Spirit, you engage the guards directly, using your superior combat skills to overcome them. Though the approach is risky, you manage to defeat the guards and free the Avatar, proving your prowess as a warrior.");
            updateSkill('combat', 3);
            updateReputation('fireNation', -5);
            if (skillCheck('combat', 12)) {
                updateHealth(-10);  // Successful combat reduces health due to the fight.
            } else {
                updateHealth(-20);  // Less successful attempt costs more health.
            }
            break;
        case 3:
            updateStoryText("You craft a clever diversion, setting off a series of explosions that draw the guards away from the Avatar's cell. With the guards distracted, you swiftly move to free the Avatar, showcasing your tactical acumen.");
            updateSkill('strategy', 2);
            updateReputation('fireNation', -3);
            addToInventory('smoke bombs');
            if (skillCheck('strategy', 11)) {
                updateHealth(5);  // Successful strategy improves situation with minimal risk.
            } else {
                updateHealth(-5);  // Less effective strategy leads to minor setbacks.
            }
            break;
        case 4:
            updateStoryText("Observing the fortress's layout and natural features, you use the environment to create obstacles and barriers, confusing and slowing down the guards. This approach allows you to reach the Avatar with minimal confrontation, highlighting your ability to adapt and use resources creatively.");
            updateSkill('strategy', 2);
            updateReputation('fireNation', -1);
            if (skillCheck('environmental awareness', 10)) {
                updateHealth(5);  // Successfully using the environment to advantage.
            } else {
                updateHealth(-5);  // Failing to effectively use the environment.
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter6 }
        ]);
    }, 300);
}