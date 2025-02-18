import { startChapter6 } from './chapter6.js';
import { updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { updateHealth, updateSkill, updateReputation, addToInventory, addAlly } from './utilityFunctions.js';
import { items } from './items.js';
import { characters } from './characters.js';
import { gameState } from './gameState.js';
import { skillCheck } from './gameMechanics.js';

export function startChapter5() {
    gameState.currentChapter = 5;
    displayChapter5();
}

function displayChapter5() {
    const chapter5Text = `
        <h2>Chapter 5: The Eclipse Plan</h2>
        <p>Having escaped the Fire Nation prison, your group learns of an upcoming solar eclipse, 
        a rare moment when firebending is rendered useless. This presents a unique opportunity 
        to strike at the heart of the Fire Nation. You must devise a plan to take advantage of 
        this momentous event.</p>
    `;
    updateStoryText(chapter5Text);
    updateChoices([
        { text: "Lead a direct assault on the Fire Nation capital", action: () => handleChapter5Choice(1) },
        { text: "Sabotage the Fire Nation's supply lines first", action: () => handleChapter5Choice(2) },
        { text: "Attempt diplomacy with Fire Nation defectors", action: () => handleChapter5Choice(3) },
        { text: "Infiltrate the Fire Nation to gather intelligence", action: () => handleChapter5Choice(4) }
    ]);
}

function handleChapter5Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to lead a direct assault on the Fire Nation capital...");
            updateSkill('combat', 3);
            updateReputation('fireNation', -5);
            if (skillCheck('combat', 19)) {
                updateStoryText("Your bold strategy catches the Fire Nation off guard. You make significant progress towards the palace.");
                addToInventory(items.royalArmor);
            } else {
                updateStoryText("The assault is met with fierce resistance. You suffer heavy losses but manage to establish a foothold.");
                updateHealth(-50);
                updateReputation('earthKingdom', 2);
            }
            break;
        case 2:
            updateStoryText("You opt to sabotage the Fire Nation's supply lines...");
            updateSkill('stealth', 3);
            updateSkill('strategy', 2);
            if (skillCheck('stealth', 17)) {
                updateStoryText("Your sabotage is successful, severely hampering the Fire Nation's ability to defend against the upcoming assault.");
                addToInventory(items.fireNationIntelligence);
            } else {
                updateStoryText("Your sabotage attempt is partially successful, but you're discovered and must flee quickly.");
                updateHealth(-20);
                updateReputation('fireNation', -2);
            }
            break;
        case 3:
            updateStoryText("You attempt diplomacy with Fire Nation defectors...");
            updateSkill('diplomacy', 3);
            if (skillCheck('diplomacy', 18)) {
                updateStoryText("Your diplomatic efforts pay off. A significant number of Fire Nation soldiers agree to stand down during the eclipse.");
                addAlly(characters.jeongJeong);
                updateReputation('fireNation', -1);
                updateReputation('earthKingdom', 3);
            } else {
                updateStoryText("Your diplomatic overtures are met with suspicion. While some defectors join you, others alert the Fire Nation to your plans.");
                updateReputation('fireNation', -3);
            }
            break;
        case 4:
            updateStoryText("You decide to infiltrate the Fire Nation to gather intelligence...");
            updateSkill('stealth', 2);
            updateSkill('strategy', 2);
            if (skillCheck('stealth', 16) && skillCheck('strategy', 15)) {
                updateStoryText("Your infiltration is a success. You uncover crucial information about the Fire Nation's defenses and escape undetected.");
                addToInventory(items.fireNationBattlePlans);
            } else {
                updateStoryText("Your cover is blown during the infiltration. You manage to escape, but not before sustaining injuries.");
                updateHealth(-30);
                updateReputation('fireNation', -2);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter6 }
        ]);
    }, 300);
}