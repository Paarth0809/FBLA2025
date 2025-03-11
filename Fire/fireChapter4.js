import { startOpt1FireChapter5, startOpt2FireChapter5 } from './fireChapter5.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateHealth, updateSkill, updateReputation, addToInventory, addAlly, randomInt,  addQuest } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';

import { characters } from '../characters.js';
import { gameState } from '../gameState.js';
import { quests } from '../quests.js';

//Fire code start
export function startFireChapter4() {
    gameState.currentChapter = 4;
    displayFireChapter4();
}

function displayFireChapter4() {
    const chapter4Text = `
        <h2>Chapter 4: The Sword's Tale</h2>
        <p>Commander Zhao's interest peaks as he notices a familiar sword among your belongings. "Isn't this the weapon of the Blue Spirit?" he asks, the pieces coming together in his mind. With Zhao's newly acquired authority and his desire to use your crew for the North Pole mission, how you handle this discovery could drastically affect your journey.</p>
    `;
    updateStoryText(chapter4Text);
    updateChoices([
        { text: "Confess and bargain for your crew's autonomy", action: () => handleFireChapter4Choice(1) },
        { text: "Deny the connection and redirect Zhao's focus", action: () => handleFireChapter4Choice(2) }
    ]);
}

function handleFireChapter4Choice(choice) {
    switch (choice) {
        case 1: // Confess and bargain
            updateStoryText("You admit your connection to the Blue Spirit, hoping to use this revelation as leverage to maintain control over your crew.");
            if (skillCheck('wisdom', 12)) {
                updateStoryText("Zhao, seeing value in your skills and daring, agrees to your terms but insists on your cooperation for the mission to the North Pole. Your crew remains under your command, for now.");
                updateReputation('fireNation', 2);
                updateChoices([{ text: "Continue", action: startOpt1FireChapter5 }]); // Option to continue after reading
            } else {
                updateStoryText("Zhao is unimpressed by your attempt to negotiate. He takes a significant portion of your crew, leaving you understaffed for your mission. Zhao has other plans for you...");
                updateHealth(-10);
                updateReputation('fireNation', -2);
                updateChoices([{ text: "Continue", action: startOpt2FireChapter5 }]); // Option to continue after reading
            }
            break;
        case 2: // Deny the connection
            updateStoryText("You deny any connection to the Blue Spirit, dismissing the sword as a mere collector's item.");
            if (skillCheck('stealth', 12)) {
                updateStoryText("Zhao, though suspicious, cannot prove your lie. He decides to leave your crew be but warns you of the consequences of deception.");
                updateReputation('fireNation', 1);
                updateChoices([{ text: "Continue", action: startOpt1FireChapter5 }]); // Option to continue after reading
            } else {
                updateStoryText("Zhao sees through your lies. Disappointed in your deceit, he commandeers part of your crew for his mission as a penalty.");
                updateHealth(-5);
                updateReputation('fireNation', -1);
                updateChoices([{ text: "Continue", action: startOpt2FireChapter5 }]); // Option to continue after reading
            }
            break;
    }
    
}
//Fire code end   