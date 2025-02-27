import { startChapter15 } from './chapter15.js';
import { updateStoryText, updateChoices  } from './uiUpdateFunctions.js';
import { updateSkill, addToInventory, updateEnergy, updateReputation, } from './utilityFunctions.js';
import { skillCheck } from './gameMechanics.js';
import { items } from './items.js';
import { gameState } from './gameState.js';

export function startChapter14() {
    gameState.currentChapter = 14;
    displayChapter14();
}

function displayChapter14() {
    const chapter14Text = `
        <h2>Chapter 14: The Old Masters</h2>
        <p>After years of struggle and growth, you, as Zuko, finally reunite with Uncle Iroh. The moment is fraught with emotion as you seek forgiveness 
        for your past actions. Iroh's acceptance and unwavering love symbolize your full redemption. Together with the Order of the White Lotus, you 
        begin preparations for the final battle to liberate Ba Sing Se and restore balance to the world.</p>
    `;
    updateStoryText(chapter14Text);
    updateChoices([
        { text: "Seek forgiveness from Uncle Iroh", action: () => handleChapter14Choice(1) },
        { text: "Strategize with the Order of the White Lotus", action: () => handleChapter14Choice(2) },
        { text: "Reflect on your journey and the lessons learned", action: () => handleChapter14Choice(3) },
        { text: "Prepare yourself for the final battle", action: () => handleChapter14Choice(4) }
    ]);
}

function handleChapter14Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You approach Uncle Iroh, heavy with the weight of your past, seeking his forgiveness...");
            if (skillCheck('empathy', 18)) {
                updateStoryText("Iroh embraces you, his forgiveness immediate and unconditional, reinforcing the bond between you.");
                updateSkill('wisdom', 2);
                updateEnergy(20);
                addToInventory(items.teaSet);
            } else {
                updateStoryText("Iroh's forgiveness is given freely, but you still struggle internally to fully accept it.");
                updateEnergy(10);
            }
            break;
        case 2:
            updateStoryText("Together with the Order of the White Lotus, you strategize for the upcoming liberation of Ba Sing Se...");
            if (skillCheck('strategy', 20)) {
                updateStoryText("Your strategic insights prove invaluable, shaping the plan of attack.");
                updateReputation('earthKingdom', 2);
                addToInventory(items.warMap);
            } else {
                updateStoryText("While your contributions are earnest, the complexities of the battle plan are daunting.");
                updateEnergy(-10);
            }
            break;
        case 3:
            updateStoryText("You take a moment to reflect on the long path that has led you here...");
            if (skillCheck('wisdom', 18)) {
                updateStoryText("Your reflections fill you with a sense of peace and purpose.");
                updateSkill('wisdom', 3);
                updateEnergy(20);
            } else {
                updateStoryText("The reflection is bittersweet, filled with regrets but also a determination to make the future better.");
                updateEnergy(5);
            }
            break;
        case 4:
            updateStoryText("You focus on preparing yourself mentally and physically for the final battle...");
            if (skillCheck('bending.fire', 20) && skillCheck('discipline', 18)) {
                updateStoryText("You feel a surge of confidence in your firebending skills and your ability to lead.");
                updateSkill('bending.fire', 3);
                updateEnergy(30);
            } else {
                updateStoryText("Despite your best efforts, nerves and doubt creep in.");
                updateEnergy(-20);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter15 }
        ]);
    }, 300);
}