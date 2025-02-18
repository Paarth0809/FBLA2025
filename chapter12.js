import { startChapter13 } from './chapter13.js';
import { updateStoryText, updateChoices  } from './uiUpdateFunctions.js';
import { updateSkill, addToInventory, updateEnergy, updateReputation, randomInt } from './utilityFunctions.js';
import { skillCheck } from './gameMechanics.js';
import { items } from './items.js';
import { gameState } from './gameState.js';
  

export function startChapter12() {
    gameState.currentChapter = 12;
    displayChapter12();
}

function displayChapter12() {
    const chapter12Text = `
        <h2>Chapter 12: The Southern Air Temple Revisited</h2>
        <p>As Sozin's Comet approaches, Aang is plagued by doubts about facing the Fire Lord. 
        He suggests revisiting the Southern Air Temple to connect with his past and seek guidance. 
        Time is short, but this spiritual journey could be crucial.</p>
    `;
    updateStoryText(chapter12Text);
    updateChoices([
        { text: "Support Aang's journey to the temple", action: () => handleChapter12Choice(1) },
        { text: "Urge the group to continue practical preparations instead", action: () => handleChapter12Choice(2) },
        { text: "Split the group: some go to the temple, others prepare", action: () => handleChapter12Choice(3) },
        { text: "Suggest an alternative spiritual location for quicker guidance", action: () => handleChapter12Choice(4) }
    ]);
}

function handleChapter12Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You support Aang's journey to the Southern Air Temple...");
            updateSkill('spirituality', 3);
            if (skillCheck('spirituality', 18)) {
                updateStoryText("At the temple, Aang connects with the spirits of past Avatars, gaining crucial wisdom and resolve.");
                updateSkill('bending.air', 2);
                addToInventory(items.avatarRelicStaff);
            } else {
                updateStoryText("The journey provides some comfort to Aang, but no breakthrough insights. Valuable time has been used.");
                updateEnergy(-30);
            }
            break;
        case 2:
            updateStoryText("You urge the group to continue practical preparations...");
            updateSkill('strategy', 2);
            updateSkill('combat', 2);
            updateStoryText("The group's combat skills and strategies improve, but Aang's spiritual uncertainty remains a concern.");
            updateReputation('earthKingdom', 1);
            updateEnergy(-20);
            break;
        case 3:
            updateStoryText("You decide to split the group...");
            updateSkill('leadership', 2);
            if (skillCheck('leadership', 17) && randomInt(1, 10) > 5) {
                updateStoryText("The split approach works well. Aang finds spiritual guidance while the rest of the group makes solid preparations.");
                updateSkill('bending.air', 1);
                addToInventory(items.enhancedBattlePlans);
            } else {
                updateStoryText("The split group struggles with their respective tasks. You regroup, having made little progress on either front.");
                updateEnergy(-40);
            }
            break;
        case 4:
            updateStoryText("You suggest an alternative spiritual location...");
            updateSkill('knowledge', 2);
            if (skillCheck('knowledge', 16)) {
                updateStoryText("Your suggestion leads the group to a nearby ancient meditation site. Aang receives valuable guidance in a shorter time.");
                updateSkill('spirituality', 2);
                addToInventory(items.spiritMedallion);
            } else {
                updateStoryText("The alternative location doesn't provide the connection Aang needs. The detour costs time without much benefit.");
                updateEnergy(-25);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter13 }
        ]);
    }, 300);
}
