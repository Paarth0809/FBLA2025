import { startChapter8 } from './chapter8.js';
import { updateHealth, updateSkill, updateReputation, addToInventory, addAlly, randomInt, updateEnergy} from './utilityFunctions.js';
import { items } from './items.js';
import { gameState } from './gameState.js';
import { characters } from './characters.js';
import { skillCheck } from './gameMechanics.js';
import { updateStoryText, updateChoices } from './uiUpdateFunctions.js'; 

export function startChapter7() {
    gameState.currentChapter = 7;
    displayChapter7();
}

function displayChapter7() {
    const chapter7Text = `
        <h2>Chapter 7: Aftermath and Revelations</h2>
        <p>The eclipse has ended, and with it, your chance at a decisive victory. As you regroup 
        with your allies, you must come to terms with the outcome of the invasion and plan your 
        next move. Unexpected revelations await, potentially changing the course of your journey.</p>
    `;
    updateStoryText(chapter7Text);
    updateChoices([
        { text: "Analyze the outcome of the invasion with your allies", action: () => handleChapter7Choice(1) },
        { text: "Seek out a mysterious spiritual guide mentioned in ancient texts", action: () => handleChapter7Choice(2) },
        { text: "Investigate rumors of a secret Fire Nation superweapon", action: () => handleChapter7Choice(3) },
        { text: "Attempt to make contact with the Order of the White Lotus", action: () => handleChapter7Choice(4) }
    ]);
}

function handleChapter7Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You gather your allies to analyze the outcome of the invasion...");
            updateSkill('strategy', 3);
            updateSkill('leadership', 2);
            if (skillCheck('strategy', 16)) {
                updateStoryText("Your analysis reveals crucial weaknesses in the Fire Nation's defenses. You formulate a new strategy that gives you hope.");
                addToInventory(items.strategicMap);
                updateReputation('earthKingdom', 2);
                updateReputation('waterTribe', 2);
            } else {
                updateStoryText("The meeting is fraught with disagreements. Morale dips as the full extent of your losses becomes clear.");
                updateEnergy(-20);
                updateReputation('earthKingdom', -1);
            }
            break;
        case 2:
            updateStoryText("You decide to seek out the mysterious spiritual guide...");
            updateSkill('spirituality', 3);
            if (skillCheck('spirituality', 17) && randomInt(1, 10) > 6) {
                updateStoryText("After a perilous journey, you encounter the guide. They impart ancient wisdom that grants you new spiritual abilities.");
                addToInventory(items.spiritCharm);
                updateSkill('bending.spirit', 2);
            } else {
                updateStoryText("Your search leads you through treacherous terrain. While you don't find the guide, the journey strengthens your resolve.");
                updateHealth(-10);
                updateEnergy(-30);
                updateSkill('survival', 2);
            }
            break;
        case 3:
            updateStoryText("You investigate rumors of a secret Fire Nation superweapon...");
            updateSkill('stealth', 2);
            updateSkill('intelligence', 3);
            if (skillCheck('stealth', 18) && skillCheck('intelligence', 17)) {
                updateStoryText("Your investigation uncovers plans for a fleet of airships. This information could be crucial in preventing the Fire Nation's next attack.");
                addToInventory(items.airshipBlueprints);
                updateReputation('fireNation', -2);
            } else {
                updateStoryText("The investigation proves dangerous. You're discovered by Fire Nation patrols and barely escape with your life.");
                updateHealth(-40);
                updateReputation('fireNation', -1);
            }
            break;
        case 4:
            updateStoryText("You attempt to make contact with the Order of the White Lotus...");
            updateSkill('diplomacy', 3);
            if (skillCheck('diplomacy', 19)) {
                updateStoryText("Your efforts pay off. You establish contact with the Order, gaining powerful allies in your fight against the Fire Nation.");
                addAlly(characters.iroh);
                updateReputation('whiteLotusSociety', 5);
            } else {
                updateStoryText("Your attempts to contact the Order attract unwanted attention. You're forced to lay low, delaying your plans.");
                updateEnergy(-40);
                updateReputation('fireNation', -1);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter8 }
        ]);
    }, 300);
}
