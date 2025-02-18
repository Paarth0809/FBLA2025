import { startChapter3 } from './chapter3.js';
import { updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { updateHealth, updateSkill, updateReputation, addToInventory, addAlly } from './utilityFunctions.js';
import { skillCheck } from './gameMechanics.js';
import { items } from './items.js';
import { characters } from './characters.js';
import { gameState } from './gameState.js';
import { randomInt } from './utilityFunctions.js';

export function startChapter2() {
    gameState.currentChapter = 2;
    displayChapter2();
}

function displayChapter2() {
    const chapter2Text = `
        <h2>Chapter 2: The Avatar's Awakening</h2>
        <p>Aang, the last Airbender, is training in secret. At 16, he realizes the weight of his responsibility. 
        The Fire Nation's grip tightens, and the Water Tribes are the next target. War Chief Hakoda leads 
        his warriors into battle, leaving behind his children, Katara and Sokka. As the invasion intensifies, 
        Katara and Sokka decide their next move.</p>
    `;
    updateStoryText(chapter2Text);
    updateChoices([
        { text: "Stay and defend the village, risking capture", action: () => handleChapter2Choice(1) },
        { text: "Flee to the Earth Kingdom to seek allies", action: () => handleChapter2Choice(2) },
        { text: "Attempt a rescue mission for captured warriors", action: () => handleChapter2Choice(3) },
        { text: "Search for the Avatar", action: () => handleChapter2Choice(4) }
    ]);
}

function handleChapter2Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to stay and defend the village...");
            updateSkill('combat', 2);
            updateReputation('waterTribe', 2);
            if (skillCheck('combat', 14)) {
                updateStoryText("Your bravery inspires the villagers. Together, you manage to repel the Fire Nation attack.");
                addToInventory(items.waterPouch);
            } else {
                updateStoryText("Despite your efforts, the Fire Nation overwhelms the village. You barely escape capture.");
                updateHealth(-20);
            }
            break;
        case 2:
            updateStoryText("You flee to the Earth Kingdom to seek allies...");
            updateSkill('diplomacy', 2);
            addAlly(characters.toph);
            updateStoryText("During your journey, you encounter Toph, a blind Earthbender who agrees to join your cause.");
            break;
        case 3:
            updateStoryText("You attempt a rescue mission for captured warriors...");
            updateSkill('stealth', 2);
            updateReputation('waterTribe', 3);
            if (skillCheck('stealth', 15)) {
                updateStoryText("Your daring rescue is successful. You free several captured warriors, boosting morale.");
                addAlly(characters.bato);
            } else {
                updateStoryText("The rescue attempt fails. You narrowly escape, but some warriors remain captive.");
                updateHealth(-15);
            }
            break;
        case 4:
            updateStoryText("You decide to search for the Avatar...");
            updateSkill('diplomacy', 1);
            updateSkill('stealth', 1);
            if (randomInt(1, 10) > 7) {
                updateStoryText("Your search leads you to an ancient Air Temple where you find clues about the Avatar's whereabouts.");
                addToInventory(items.airNomadRelic);
            } else {
                updateStoryText("Your search proves fruitless, but you gain valuable experience navigating different cultures.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter3 }
        ]);
    }, 300);
}
