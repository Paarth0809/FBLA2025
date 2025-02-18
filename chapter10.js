import { startChapter11 } from './chapter11.js';
import { updateStoryText, updateChoices  } from './uiUpdateFunctions.js';
import { updateSkill, addToInventory, updateHealth, updateEnergy, updateReputation } from './utilityFunctions.js';
import { skillCheck } from './gameMechanics.js';
import { items } from './items.js';
import { gameState } from './gameState.js';


export function startChapter10() {
    gameState.currentChapter = 10;
    displayChapter10();
}

function displayChapter10() {
    const chapter10Text = `
        <h2>Chapter 10: The Southern Raiders</h2>
        <p>Katara's unresolved feelings about her mother's death come to the surface. She seeks 
        closure and justice, leading to a dangerous mission to confront the man responsible. 
        You must decide how to handle this delicate situation.</p>
    `;
    updateStoryText(chapter10Text);
    updateChoices([
        { text: "Support Katara's mission for revenge", action: () => handleChapter10Choice(1) },
        { text: "Try to dissuade Katara from her vengeful path", action: () => handleChapter10Choice(2) },
        { text: "Offer to accompany Katara but advocate for mercy", action: () => handleChapter10Choice(3) },
        { text: "Focus the group on preparing for the comet instead", action: () => handleChapter10Choice(4) }
    ]);
}

function handleChapter10Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to support Katara's mission for revenge...");
            updateSkill('combat', 2);
            if (skillCheck('combat', 18)) {
                updateStoryText("The mission is successful, but the emotional toll on Katara is heavy. She chooses not to take revenge in the end.");
                updateReputation('waterTribe', 2);
                updateReputation('fireNation', -2);
            } else {
                updateStoryText("The mission goes awry, putting you both in danger. You escape, but without the closure Katara sought.");
                updateHealth(-25);
                updateEnergy(-30);
            }
            break;
        case 2:
            updateStoryText("You try to dissuade Katara from her vengeful path...");
            updateSkill('diplomacy', 3);
            if (skillCheck('diplomacy', 19)) {
                updateStoryText("Your words reach Katara. She realizes revenge won't bring peace and chooses a path of healing instead.");
                updateReputation('waterTribe', 1);
                addToInventory(items.spiritWater);
            } else {
                updateStoryText("Katara rejects your advice, straining your relationship. She embarks on the mission alone, worrying the entire group.");
                updateReputation('waterTribe', -2);
            }
            break;
        case 3:
            updateStoryText("You offer to accompany Katara but advocate for mercy...");
            updateSkill('diplomacy', 2);
            updateSkill('stealth', 1);
            if (skillCheck('diplomacy', 17) && skillCheck('stealth', 16)) {
                updateStoryText("You successfully track down the man and confront him. Katara chooses mercy, finding strength in forgiveness.");
                updateReputation('waterTribe', 3);
                addToInventory(items.redemptionAmulet);
            } else {
                updateStoryText("The mission is partially successful, but the outcome leaves Katara conflicted and unsatisfied.");
                updateEnergy(-20);
            }
            break;
        case 4:
            updateStoryText("You focus the group on preparing for the comet instead...");
            updateSkill('strategy', 3);
            updateStoryText("While Katara is initially upset, the group's focus on the larger threat helps put things in perspective.");
            updateReputation('waterTribe', -1);
            updateSkill('bending.fire', 1);
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter11 }
        ]);
    }, 300);
}
