import { startChapter12} from './chapter12.js';
import { updateStoryText, updateChoices  } from './uiUpdateFunctions.js';
import { updateSkill, addToInventory, addAlly, updateHealth, updateEnergy, updateReputation, randomInt } from './utilityFunctions.js';
import { skillCheck } from './gameMechanics.js';
import { characters } from './characters.js';
import { items } from './items.js';
import { gameState } from './gameState.js';

export function startChapter11() {
    gameState.currentChapter = 11;
    displayChapter11();
}

function displayChapter11() {
    const chapter11Text = `
        <h2>Chapter 11: The Boiling Rock</h2>
        <p>Sokka learns that his father might be imprisoned at the Boiling Rock, the Fire Nation's 
        most secure prison. Despite the risks, he's determined to mount a rescue mission. You must 
        decide how to approach this dangerous endeavor.</p>
    `;
    updateStoryText(chapter11Text);
    updateChoices([
        { text: "Infiltrate the prison disguised as guards", action: () => handleChapter11Choice(1) },
        { text: "Attempt a stealth mission to break in and out quickly", action: () => handleChapter11Choice(2) },
        { text: "Create a diversion to draw away the prison's forces", action: () => handleChapter11Choice(3) },
        { text: "Negotiate with sympathetic prison staff for inside help", action: () => handleChapter11Choice(4) }
    ]);
}

function handleChapter11Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You infiltrate the prison disguised as guards...");
            updateSkill('stealth', 2);
            updateSkill('deception', 2);
            if (skillCheck('stealth', 18) && skillCheck('deception', 17)) {
                updateStoryText("Your disguises work perfectly. You locate Sokka's father and orchestrate a daring escape.");
                addAlly(characters.hakoda);
                addToInventory(items.prisonMasterKey);
            } else {
                updateStoryText("Your cover is blown midway through the mission. You manage to escape, but without freeing the prisoners.");
                updateHealth(-30);
                updateReputation('fireNation', -2);
            }
            break;
        case 2:
            updateStoryText("You attempt a stealth mission to break in and out quickly...");
            updateSkill('stealth', 3);
            if (skillCheck('stealth', 19)) {
                updateStoryText("Your stealth skills are impeccable. You free Sokka's father and several other prisoners without raising the alarm.");
                addAlly(characters.suki);
                updateReputation('earthKingdom', 2);
            } else {
                updateStoryText("The prison's security is tighter than expected. You're forced to abort the mission and narrowly escape capture.");
                updateEnergy(-40);
            }
            break;
        case 3:
            updateStoryText("You create a diversion to draw away the prison's forces...");
            updateSkill('strategy', 2);
            updateSkill('bending.fire', 1);
            if (skillCheck('strategy', 17) && randomInt(1, 10) > 6) {
                updateStoryText("Your diversion works brilliantly, allowing a small team to free the prisoners during the chaos.");
                addAlly(characters.hakoda);
                updateReputation('fireNation', -3);
            } else {
                updateStoryText("The diversion spirals out of control, putting everyone in danger. You manage to escape, but without the prisoners.");
                updateHealth(-20);
                updateEnergy(-30);
            }
            break;
        case 4:
            updateStoryText("You attempt to negotiate with sympathetic prison staff...");
            updateSkill('diplomacy', 3);
            if (skillCheck('diplomacy', 18)) {
                updateStoryText("You successfully convince some staff members to help. Their inside knowledge proves crucial to the escape plan.");
                addAlly(characters.hakoda);
                addToInventory(items.guardSchedule);
            } else {
                updateStoryText("Your negotiations fail, and the staff alert the warden. You're forced to flee, mission unaccomplished.");
                updateReputation('fireNation', -2);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter12 }
        ]);
    }, 300);
}
