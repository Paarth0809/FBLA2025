//Get imports

import { startEarthChapter4 } from './earthChapter4.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateSkill, updateReputation, addToInventory } from '../utilityFunctions.js';
import { skillCheck, combat } from '../gameMechanics.js';
import { gameState } from '../gameState.js';



export function startEarthChapter3() {
    gameState.currentChapter = 3;
    displayEarthChapter3();
}

function displayEarthChapter3() {
    const chapter3Text = `
        <h2>Chapter 3: The Hidden Village</h2>
        <p>After your encounter with Xin Fu, you decide to leave the competition behind and continue your journey through the Earth Kingdom.
         As you travel, you stumble upon a small, secluded village hidden deep within a forest. 
        The villagers seem wary of outsiders, but they welcome you after learning of your Earthbending skills.</p>
        <p>The village elder, an old and wise woman named Mei Ling, approaches you. She explains that the village is under threat 
        from a group of bandits who have been stealing their supplies and terrorizing the villagers. 
        The bandits are led by a ruthless Earthbender named Kang, who has been using his bending to intimidate and control the region.</p>
    `;
    updateStoryText(chapter3Text);
    updateChoices([
        { text: "You offer to train the villagers on how to defend themselves.", action: () => handleEarthChapter3Choice(1) },
        { text: "Fight Kang to help out the villagers.", action: () => handleEarthChapter3Choice(2) },
        { text: "Negotiate with Kang to stop raiding the village", action: () => handleEarthChapter3Choice(3) }
    ]);
}

function handleEarthChapter3Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You spend a couple days at the village teaching them basic Earthbending moves. Thankful for your kindness, Mei Ling gifts you a healing herb!");
            updateSkill('diplomacy', 1);
            addToInventory('healingHerb');
            break;

        case 2:
            const Kang = {
                name: "Kang",
                health: 50,
                difficulty: 12,
                attackBonus: 4
            };

            const combatResult = combat(Kang);
            if (combatResult === "win") {
                updateStoryText(`
                    <p>You defeat Kang and his bandits! The village celebrates and crowns you their hero!</p>
                    <p>Your win against Kang sounds throughout the kingdom! Your reputation grows!</p>
                `);
                updateSkill('combat', 2);
                updateReputation('Earth Kingdom', 2);
            } else {
                updateStoryText("Despite your loss, the villagers are proud of your incredible bravery and are grateful you tried to stand up for them.");
                updateSkill('combat', -1);
                updateReputation('Earth Kingdom', -1); // Losing should decrease reputation
            }
            break;

        case 3:
            const negotiationSuccess = skillCheck('diplomacy', 10); // Add a skill check for negotiation
            if (negotiationSuccess) {
                updateStoryText("After a tense negotiation, Kang agrees to leave the village alone if they promise to pay a yearly tax.");
                updateSkill('diplomacy', 2);
            } else {
                updateStoryText("Your attempt to negotiate with Kang fails. He sees your diplomacy as a sign of weakness and attacks the village.");
                updateSkill('diplomacy', -1);
            }
            break;
    }

    // Proceed to the next chapter after a short delay
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startEarthChapter4 }
        ]);
    }, 300);
}