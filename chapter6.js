import { startChapter7 } from './chapter7.js';
import { updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { updateHealth, updateEnergy, updateSkill, updateReputation, addToInventory } from './utilityFunctions.js';
import { items } from './items.js';
import { gameState } from './gameState.js';
import { randomInt } from './utilityFunctions.js';
import { skillCheck } from './gameMechanics.js';

export function startChapter6() {
    gameState.currentChapter = 6;
    displayChapter6();
}

function displayChapter6() {
    const chapter6Text = `
        <h2>Chapter 6: The Day of Black Sun</h2>
        <p>The day of the solar eclipse has arrived. Your forces are in position, ready to launch 
        the assault on the Fire Nation capital. As the moon begins to cover the sun, you must 
        make crucial decisions that will determine the outcome of this daring attack.</p>
    `;
    updateStoryText(chapter6Text);
    updateChoices([
        { text: "Lead the frontal assault on the palace", action: () => handleChapter6Choice(1) },
        { text: "Guide a small team to capture Fire Lord Ozai", action: () => handleChapter6Choice(2) },
        { text: "Defend the invasion force from counter-attacks", action: () => handleChapter6Choice(3) },
        { text: "Search for Princess Azula to prevent her interference", action: () => handleChapter6Choice(4) }
    ]);
}

function handleChapter6Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You lead the frontal assault on the palace...");
            updateSkill('combat', 3);
            updateSkill('leadership', 2);
            if (skillCheck('combat', 20) && skillCheck('leadership', 18)) {
                updateStoryText("Your leadership inspires the troops. You break through the palace defenses and secure key positions.");
                addToInventory(items.royalScepter);
                updateReputation('earthKingdom', 5);
            } else {
                updateStoryText("The assault meets heavy resistance. You're forced to retreat as the eclipse ends, but not before dealing significant damage.");
                updateHealth(-40);
                updateReputation('fireNation', -4);
            }
            break;
        case 2:
            updateStoryText("You guide a small team to capture Fire Lord Ozai...");
            updateSkill('stealth', 3);
            updateSkill('strategy', 2);
            if (skillCheck('stealth', 19) && randomInt(1, 10) > 7) {
                updateStoryText("Against all odds, you locate Ozai's bunker. However, you find it empty - he anticipated the attack and fled.");
                addToInventory(items.ozaisBattlePlans);
            } else {
                updateStoryText("Your team is ambushed by the royal guards. You fight valiantly but must retreat as the eclipse ends.");
                updateHealth(-30);
                updateEnergy(-40);
            }
            break;
        case 3:
            updateStoryText("You focus on defending the invasion force from counter-attacks...");
            updateSkill('combat', 2);
            updateSkill('strategy', 3);
            if (skillCheck('combat', 17) && skillCheck('strategy', 18)) {
                updateStoryText("Your defensive strategies prove effective. You successfully repel several counter-attacks, allowing the invasion to progress.");
                updateReputation('earthKingdom', 3);
                updateReputation('waterTribe', 3);
            } else {
                updateStoryText("The Fire Nation's counter-attacks are fiercer than anticipated. You prevent a total rout, but the invasion force suffers heavy losses.");
                updateHealth(-20);
                updateReputation('earthKingdom', -1);
            }
            break;
        case 4:
            updateStoryText("You search for Princess Azula to prevent her interference...");
            updateSkill('combat', 2);
            updateSkill('stealth', 2);
            if (skillCheck('stealth', 18) && skillCheck('combat', 19)) {
                updateStoryText("You manage to track down Azula and engage her in combat. Though she escapes, you've significantly disrupted her plans.");
                addToInventory(items.azulasBlueFire);
                updateReputation('fireNation', -3);
            } else {
                updateStoryText("Azula outmaneuvers you, leading you into a trap. You barely escape with your life as the eclipse ends.");
                updateHealth(-50);
                updateEnergy(-50);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter7 }
        ]);
    }, 300);
}