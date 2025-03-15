import { startOpt1WaterChapter5, startOpt2WaterChapter5 } from './waterChapter5.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateHealth, updateSkill, updateReputation, addAlly, addQuest } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';
import { characters } from '../characters.js';
import { gameState } from '../gameState.js';
import { quests } from '../quests.js';

export function startWaterChapter4() {
    gameState.currentChapter = 4;
    displayWaterChapter4();
}

function displayWaterChapter4() {
    const chapter4Text = `
        <h2>Chapter 4: Echoes of the Past</h2>
        <p>After driving away the Fire Nation scouts, the village is left shaken but determined. Among the wreckage of a long-frozen ship buried in the ice, a discovery is made—a sealed chamber containing ancient waterbending artifacts and scrolls.
        The tribe's elders argue over what should be done. Some believe these relics belong to the past and should remain undisturbed, while others see an opportunity to reclaim lost knowledge. 
        With tensions rising and the memory of past Fire Nation raids still fresh, your choice could change the tribe's future.</p>
    `;
    updateStoryText(chapter4Text);
    updateChoices([
        { text: "Check out the artifacts and study their secrets", action: () => handleWaterChapter4Choice(1) },
        { text: "Respect the past and leave them untouched", action: () => handleWaterChapter4Choice(2) }
    ]);
}

function handleWaterChapter4Choice(choice) {
    switch (choice) {
        case 1: // Recover artifacts
            updateStoryText("You step forward, arguing that the knowledge of past waterbenders could be the key to defending the tribe in the future. With care, you and a few others extract the artifacts and scrolls from the ice.");
            updateSkill('leadership', 2); // Taking initiative
            updateSkill('wisdom', 1); // Historical awareness
            if (skillCheck('diplomacy', 16)) { // Changed from wisdom
                updateStoryText("The elders, seeing your respect for tradition and progress, agree to study the artifacts together. The tribe gains valuable insight into lost waterbending techniques.");
                updateSkill('empathy', 2); // Bridging generations
                updateReputation('southernWaterTribe', 2);
                updateChoices([{ text: "Continue", action: startOpt1WaterChapter5 }]);
            } else {
                updateStoryText("Some elders fear that tampering with the past invites danger, they convinced you not to tamper with it. While the artifacts hold great wisdom, unrest stirs within the village.");
                updateSkill('leadership', -1); // Caused division
                updateHealth(-5);
                updateReputation('southernWaterTribe', -2);
                updateChoices([{ text: "Continue", action: startOpt2WaterChapter5 }]);
            }
            break;
            
        case 2: // Leave artifacts
            updateStoryText("You bow your head, honoring the wisdom of the past. With the support of the elders, the chamber is sealed once more, its secrets left to the ice.");
            updateSkill('wisdom', 3); // Respecting tradition
            updateSkill('empathy', 1); // Understanding elders
            if (skillCheck('leadership', 14)) { // Changed from cunning
                updateStoryText("The elders praise your restraint and offer to teach you traditional waterbending forms as a sign of trust.");
                updateReputation('southernWaterTribe', 1);
                updateChoices([{ text: "Continue", action: startOpt1WaterChapter5 }]);
            } else {
                updateStoryText("Some younger villagers question the decision, wondering if their ancestors' wisdom could have helped prepare for future threats. A quiet divide lingers in the tribe.");
                updateSkill('leadership', -2); // Lost credibility
                updateHealth(-5);
                updateReputation('southernWaterTribe', -1);
                updateChoices([{ text: "Continue", action: startOpt2WaterChapter5 }]);
            }
            break;
    }
} 