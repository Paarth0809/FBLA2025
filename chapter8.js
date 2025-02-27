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
        <h2>Chapter 8: An Unlikely Alliance</h2>
        <p>After much introspection and a series of transformative encounters, you come to a decision that once seemed unthinkable. You will seek out the Avatar, not as an enemy, but as a teacher of Firebending. This choice leads you to the Western Air Temple, where you find Aang and his companions. Convincing them of your sincerity and overcoming their understandable skepticism presents perhaps the greatest challenge you have ever faced.</p>
    `;
    updateStoryText(chapter8Text);
    updateChoices([
        { text: "Approach the group openly, showing vulnerability", action: () => handleChapter8Choice(1) },
        { text: "Demonstrate your Firebending skills as a peace offering", action: () => handleChapter8Choice(2) },
        { text: "Share valuable information about the Fire Nation", action: () => handleChapter8Choice(3) },
        { text: "Protect the group from a hidden threat", action: () => handleChapter8Choice(4) }
    ]);
}

function handleChapter8Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You choose to approach the group with honesty, laying bare your past actions and your desire to change. It's a risk, exposing your vulnerabilities, but you hope it will show your sincerity.");
            updateSkill('diplomacy', 2);
            if (skillCheck('diplomacy', 12)) {
                updateHealth(5);
                updateStoryText("Your honesty earns you a cautious hearing. The seeds of trust begin to sprout as they decide to give you a chance.");
            } else {
                updateHealth(-5);
                updateStoryText("The group is wary of your past deeds, struggling to see your current intentions. Convincing them will require more than just words.");
            }
            break;
        case 2:
            updateStoryText("To demonstrate your commitment and the depth of your change, you offer a display of your Firebending, not as a weapon, but as a gift.");
            updateSkill('firebending', 2);
            if (skillCheck('firebending', 14)) {
                updateHealth(10);
                updateStoryText("Your Firebending, controlled and beautiful, fascinates them, opening a door to dialogue and, possibly, acceptance.");
            } else {
                updateHealth(-10);
                updateStoryText("The display unintentionally reignites old fears, reminding them of past conflicts. You realize it will take more to earn their trust.");
            }
            break;
        case 3:
            updateStoryText("You decide to share intelligence about the Fire Nation, offering strategic insights they could not have obtained elsewhere.");
            updateSkill('strategy', 2);
            if (skillCheck('strategy', 13)) {
                updateHealth(5);
                updateStoryText("This valuable information serves as a tangible offering of your allegiance, helping to lower their defenses.");
            } else {
                updateHealth(-5);
                updateStoryText("While your intentions are good, the information is met with skepticism. Trust, you learn, is hard-earned.");
            }
            break;
        case 4:
            updateStoryText("When an unexpected threat endangers the group, you leap into action to defend them, hoping your actions will speak louder than any words could.");
            updateSkill('combat', 2);
            if (skillCheck('combat', 15)) {
                updateHealth(5);
                updateStoryText("Your swift intervention saves one of their own, offering the most compelling evidence yet of your changed heart.");
            } else {
                updateHealth(-20);
                updateStoryText("Despite your efforts, the threat overwhelms you, and while your intentions are clear, your failure makes a poor first impression.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter9 }
        ]);
    }, 300);
}
