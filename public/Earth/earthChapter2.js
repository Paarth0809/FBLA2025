//Get imports

import { startEarthChapter3 } from './earthChapter3.js'; 
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkill, addToInventory } from '../gameFunctions/utilityFunctions.js'; 
import { gameState } from '../gameFunctions/gameState.js';





export function startEarthChapter2() {
    gameState.currentChapter = 2;
    displayEarthChapter2();
}

function displayEarthChapter2() {
    const chapter2Text = `
        <h2>Chapter 2: The Challenge</h2>
        <p>It's the next day, and you learn about an underground Earthbending competition. The prize is a rare artifact that will increase your Earthbending strength. You enter the competition and make it to the final stage! However, you must now fight a strong opponent named Xin Fu.</p>
    `;
    updateStoryText(chapter2Text);
    updateChoices([
        { text: "Fight Xin Fu", action: () => handleEarthChapter2Choice(1) },
        { text: "Forfeit the competition", action: () => handleEarthChapter2Choice(2) },
        { text: "Taunt Xin Fu to throw him off his game", action: () => handleEarthChapter2Choice(3)},
        { text: "Go back", action: () => handleEarthChapter2Choice}
    ]);
}

function handleEarthChapter2Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("The crowd cheers! After a tough fight that lasted a while, you emerge victorious!");
            updateSkill('combat', 2); 
            addToInventory('earthArtifact'); 
            break;

        case 2:
            updateStoryText("The crowd laughs as you leave, and taunts fly all around you. Discouraged, you run out quickly.");
            updateSkill('diplomacy', -1); 
            break;

        case 3:
            updateStoryText("The plan backfires! Xin Fu gets angry, and his muscles flex. You quickly realize taunting him wasn't the best idea and lose.");
            updateSkill('diplomacy', -1); 
            break;
       

    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startEarthChapter3 }
        ]);
    }, 300);
    
}