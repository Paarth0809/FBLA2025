import { startAirChapter4 } from './airChapter4.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateSkill, updateReputation, addAlly } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';
import { playVideo } from '../cutscenes.js';
import { gameState } from '../gameState.js';
import { characters } from '../characters.js';

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
            updateSkill('stamina', 1);
            if (skillCheck('stamina', 3)) {
                updateStoryText("You push through the harsh conditions, making excellent time to your destination.");
                updateSkill('stamina', 2);
            }
            break;
        case 2:
            updateStoryText("You stop at Kyoshi Island, where the warriors of Kyoshi welcome you.");
            updateReputation('kyoshiWarriors', 2);
            addAlly(characters.suki);
            if (skillCheck('diplomacy', 2)) {
                updateStoryText("You gain the trust of the Kyoshi Warriors, learning valuable combat techniques.");
                updateSkill('combat', 2);
                updateSkill('leadership', 1);
            }
            break;
        case 3:
            updateStoryText("You stay hidden, taking a slower but safer route to avoid Fire Nation patrols.");
            updateSkill('stealth', 1);
            updateSkill('diplomacy', 1);
            if (skillCheck('stealth', 3)) {
                updateSkill('diplomacy', 1);
                updateStoryText("Your careful planning allows you to completely avoid detection, ensuring a safe journey.");
                updateSkill('wisdom', 1);
                updateSkill('stealth', 2);
            }
            break;
        case 4:
            updateStoryText("You stop at an abandoned Air Temple, uncovering relics of your past and lost Air Nomad culture.");
            updateSkill('wisdom', 1);
            updateSkill('spirituality', 1);
            if (skillCheck('wisdom', 4)) {
                updateStoryText("You meditate at the temple, unlocking deeper connections to your past and the Avatar Spirit.");
                updateSkill('wisdom', 2);
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
