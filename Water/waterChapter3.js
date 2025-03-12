import { startWaterChapter4 } from './waterChapter4.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateHealth, updateSkill, updateReputation, addAlly } from '../utilityFunctions.js';
import { characters } from '../characters.js';
import { gameState } from '../gameState.js';
import { skillCheck } from '../gameMechanics.js';

export function startWaterChapter3() {
    gameState.currentChapter = 3;
    displayWaterChapter3();
}

function displayWaterChapter3() {
    const chapter3Text = `
        <h2>Chapter 3: The Icebound Test</h2>
        <p>Following Aang's arrival in the Southern Water Tribe, excitement and worry fill the air. Though Aang's presence is a blessing, it also brings danger. 
        A Fire Nation scouting ship is seen approaching the village. The elders debate the best course of action—should they hide Aang to protect him, prepare for battle, or try to avoid conflict altogether? 
        With Sokka eager to fight and Gran Gran urging caution, the fate of the village rests in your hands. What will you choose?</p>
    `;
    updateStoryText(chapter3Text);
    updateChoices([
        { text: "Hide Aang and avoid confrontation", action: () => handleWaterChapter3Choice(1) },
        { text: "Prepare the village for battle", action: () => handleWaterChapter3Choice(2) },
        { text: "Create an illusion to mislead the enemy", action: () => handleWaterChapter3Choice(3) },
        { text: "Consult Aang and the elders for guidance", action: () => handleWaterChapter3Choice(4) }
    ]);
}

function handleWaterChapter3Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to hide Aang and take measures to ensure the village appears abandoned. The Fire Nation scouts search the area but find no signs of life. After a tense period, they leave.");
            updateSkill('stealth', 3); // Major stealth effort
            updateSkill('leadership', -1); // Avoiding responsibility
            updateSkill('empathy', 2); // Protecting Aang's safety
            if (skillCheck('diplomacy', 14)) { // Changed from stealth
                updateHealth(5);
                updateStoryText("Your careful planning keeps tensions low among villagers.");
            } else {
                updateHealth(-5);
                updateStoryText("Some villagers grow restless during the lockdown.");
            }
            break;
            
        case 2:
            updateStoryText("You take a stand and rally the villagers. Everyone prepares for battle, setting traps and fortifying their positions. When the Fire Nation scouts arrive, they are met with unexpected resistance and are forced to retreat.");
            updateSkill('combat', 3); // Direct conflict
            updateSkill('leadership', 2); // Rallying people
            updateSkill('diplomacy', -1); // Aggressive approach
            if (skillCheck('combat', 15)) {
                updateHealth(-5); // Minimal losses
                updateReputation('southernWaterTribe', 2);
            } else {
                updateHealth(-15); // Heavy losses
                updateSkill('empathy', -1); // Guilt over casualties
            }
            break;
            
        case 3:
            updateStoryText("Using your waterbending, you create a series of ice illusions, making it appear as if the village had already been destroyed. The Fire Nation scouts, fooled by the deception, turn back, sparing your people from conflict.");
            updateSkill('wisdom', 3); // Strategic thinking
            updateSkill('stealth', 2); // Indirect approach
            if (skillCheck('wisdom', 16)) {
                updateHealth(10); // Perfect execution
                updateSkill('diplomacy', 1); // Unified effort
            } else {
                updateHealth(-5); // Partial success
                updateStoryText("The illusions flicker momentarily, raising suspicions.");
            }
            break;
            
        case 4:
            updateStoryText("You seek counsel from Aang and the elders. Gran Gran advises a cautious approach, while Aang suggests trying to speak with the Fire Nation scouts peacefully. The village ultimately decides to let Aang take the lead, but doubts still linger.");
            updateSkill('diplomacy', 2); // Collaborative decision
            updateSkill('wisdom', 2); // Seeking guidance
            if (skillCheck('empathy', 12)) {
                updateHealth(5); // Harmonious outcome
                updateSkill('leadership', 1); // Earned trust
            } else {
                updateHealth(-5); // Internal conflict
                updateSkill('leadership', -1); // Lost authority
            }
            break;
    }
    
    setTimeout(() => {
        updateChoices([{ text: "Continue", action: startWaterChapter4 }]);
    }, 300);
}