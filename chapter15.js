import { startChapter16 } from './chapter16.js';
import { updateStoryText, updateChoices  } from './uiUpdateFunctions.js';
import { updateSkill, addToInventory, updateHealth, updateEnergy, updateReputation } from './utilityFunctions.js';
import { skillCheck } from './gameMechanics.js';
import { items } from './items.js';
import { gameState } from './gameState.js';


export function startChapter15() {
    gameState.currentChapter = 15;
    displayChapter15();
}

function displayChapter15() {
    const chapter15Text = `
        <h2>Chapter 15: The Phoenix King</h2>
        <p>Sozin's Comet is mere hours away. You've learned that Fire Lord Ozai plans to harness 
        its power to deal a final, devastating blow to the Earth Kingdom. Time is running out, 
        and you must make crucial last-minute decisions.</p>
    `;
    updateStoryText(chapter15Text);
    updateChoices([
        { text: "Launch a preemptive strike on the Fire Nation capital", action: () => handleChapter15Choice(1) },
        { text: "Set up defensive positions to protect key Earth Kingdom locations", action: () => handleChapter15Choice(2) },
        { text: "Attempt to intercept Ozai's airship fleet before they take off", action: () => handleChapter15Choice(3) },
        { text: "Seek out a spiritual solution to negate the comet's power", action: () => handleChapter15Choice(4) }
    ]);
}

function handleChapter15Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You launch a preemptive strike on the Fire Nation capital...");
            updateSkill('strategy', 3);
            updateSkill('combat', 2);
            if (skillCheck('strategy', 19) && skillCheck('combat', 18)) {
                updateStoryText("Your bold strike catches the Fire Nation off guard, significantly disrupting their plans.");
                updateReputation('fireNation', -4);
                addToInventory(items.royalWarPlans);
            } else {
                updateStoryText("The Fire Nation's defenses prove too strong. You're forced to retreat, having lost valuable time and resources.");
                updateHealth(-40);
                updateEnergy(-50);
            }
            break;
        case 2:
            updateStoryText("You set up defensive positions in the Earth Kingdom...");
            updateSkill('defense', 3);
            if (skillCheck('defense', 18)) {
                updateStoryText("Your defensive strategy is solid. Key locations are fortified, giving hope to Earth Kingdom citizens.");
                updateReputation('earthKingdom', 4);
                addToInventory(items.earthKingdomShield);
            } else {
                updateStoryText("Your defenses are spread too thin. Some locations remain vulnerable to attack.");
                updateEnergy(-30);
                updateReputation('earthKingdom', -1);
            }
            break;
        case 3:
            updateStoryText("You attempt to intercept Ozai's airship fleet...");
            updateSkill('stealth', 2);
            updateSkill('sabotage', 2);
            if (skillCheck('stealth', 17) && skillCheck('sabotage', 18)) {
                updateStoryText("Your team successfully infiltrates and sabotages several key airships, crippling Ozai's fleet.");
                addToInventory(items.airshipSchematics);
                updateReputation('fireNation', -3);
            } else {
                updateStoryText("The airship base is too well-guarded. Your sabotage attempt fails, and you barely escape capture.");
                updateHealth(-25);
                updateEnergy(-40);
            }
            break;
        case 4:
            updateStoryText("You seek a spiritual solution to negate the comet's power...");
            updateSkill('spirituality', 3);
            if (skillCheck('spirituality', 20)) {
                updateStoryText("Through deep meditation, you discover an ancient technique to temporarily dampen the comet's effect on firebending.");
                updateSkill('bending.spirit', 3);
                addToInventory(items.spiritWaterVial);
            } else {
                updateStoryText("Despite your best efforts, you're unable to find a way to counteract the comet's power through spiritual means.");
                updateEnergy(-45);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter16 }
        ]);
    }, 300);
}