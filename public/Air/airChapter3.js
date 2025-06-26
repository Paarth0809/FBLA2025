import { startAirChapter4 } from './airChapter4.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { addAlly } from '../gameFunctions/utilityFunctions.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';
import { gameState } from '../gameFunctions/gameState.js';

import { characters } from '../gameFunctions/characters.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';

// Air code start
export function startAirChapter3() {
    gameState.currentChapter = 3;
    displayAirChapter3();
}

function displayAirChapter3() {
    const chapter3Text = `
        <h2>Chapter 3: The Journey Begins</h2>
        <p>With the Southern Raiders repelled, you, Katara, and Sokka decide to leave the Southern Water Tribe. 
        Your destination: The Northern Water Tribe, where Katara hopes to find a waterbending master. 
        But the journey is dangerous, and you must decide how to proceed.</p>
    `;
    updateStoryText(chapter3Text);
    updateChoices([
        { text: "Fly directly to the Northern Water Tribe on Appa", action: () => handleAirChapter3Choice(1) },
        { text: "Stop at Kyoshi Island to rest and gather supplies", action: () => handleAirChapter3Choice(2) },
        { text: "Stay hidden and travel cautiously to avoid Fire Nation patrols", action: () => handleAirChapter3Choice(3) },
        { text: "Explore an abandoned Air Temple along the way", action: () => handleAirChapter3Choice(4) }
    ]);
}

function handleAirChapter3Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to fly straight to the Northern Water Tribe, but strong winds and exhaustion slow you down.");
            updateSkillWithDifficulty('combat', 1);
            if (skillCheck('combat', 3)) {
                updateStoryText("You push through the harsh conditions, making excellent time to your destination.");
                updateSkillWithDifficulty('combat', 2);
            }
            break;
        case 2:
            updateStoryText("You stop at Kyoshi Island, where the warriors of Kyoshi welcome you.");
            
            addAlly(characters.suki);
            if (skillCheck('diplomacy', 2)) {
                updateStoryText("You gain the trust of the Kyoshi Warriors, learning valuable combat techniques.");
                updateSkillWithDifficulty('combat', 2);
                updateSkillWithDifficulty('leadership', 1);
            }
            break;
        case 3:
            updateStoryText("You stay hidden, taking a slower but safer route to avoid Fire Nation patrols.");
            updateSkillWithDifficulty('stealth', 1);
            updateSkillWithDifficulty('diplomacy', 1);
            if (skillCheck('stealth', 3)) {
                updateSkillWithDifficulty('diplomacy', 1);
                updateStoryText("Your careful planning allows you to completely avoid detection, ensuring a safe journey.");
                updateSkillWithDifficulty('wisdom', 1);
                updateSkillWithDifficulty('stealth', 2);
            }
            break;
        case 4:
            updateStoryText("You stop at an abandoned Air Temple, uncovering relics of your past and lost Air Nomad culture.");
            updateSkillWithDifficulty('wisdom', 1);
            updateSkillWithDifficulty('spirituality', 1);
            if (skillCheck('wisdom', 4)) {
                updateStoryText("You meditate at the temple, unlocking deeper connections to your past and the Avatar Spirit.");
                updateSkillWithDifficulty('wisdom', 2);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: () => { startAirChapter4(); playVideo('airCutscene4.mp4'); } }
        ]);
    }, 300);
}
// Air code end
