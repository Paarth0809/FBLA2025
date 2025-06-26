import { startFireChapter15 } from './fireChapter15.js';
import { updateStoryText, updateChoices  } from '../gameFunctions/uiUpdateFunctions.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js';

import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';

//Fire code start
export function startFireChapter14() {
    gameState.currentChapter = 14;
    displayFireChapter14();
}

function displayFireChapter14() {
    const chapter14Text = `
        <h2>Chapter 14: The Old Masters</h2>
        <p>After months of struggle and growth, you, as Zuko, finally reunite with Uncle Iroh. The moment is fraught with emotion as you seek forgiveness 
        for your past actions. Iroh's acceptance and unwavering love symbolize your full redemption. Together with the Order of the White Lotus, you 
        begin preparations for the final battle to liberate Ba Sing Se and restore balance to the world.</p>
    `;
    updateStoryText(chapter14Text);
    updateChoices([
        { text: "Seek forgiveness from Uncle Iroh", action: () => handleFireChapter14Choice(1) },
        { text: "Strategize with the Order of the White Lotus", action: () => handleFireChapter14Choice(2) },
        { text: "Reflect on your journey and the lessons learned", action: () => handleFireChapter14Choice(3) },
        { text: "Prepare yourself for the final battle", action: () => handleFireChapter14Choice(4) }
    ]);
}

function handleFireChapter14Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You approach Uncle Iroh, heavy with the weight of your past, seeking his forgiveness...");
            if (skillCheck('empathy', 18)) {
                updateStoryText("Iroh embraces you, his forgiveness immediate and unconditional, reinforcing the bond between you.");
                updateSkillWithDifficulty('wisdom', 2);
                updateEnergyWithDifficulty(20);
                (items.teaSet);
            } else {
                updateStoryText("Iroh's forgiveness is given freely, but you still struggle internally to fully accept it.");
                updateEnergyWithDifficulty(10);
            }
            break;
        case 2:
            updateStoryText("Together with the Order of the White Lotus, you strategize for the upcoming liberation of Ba Sing Se...");
            if (skillCheck('combat', 20)) {
                updateStoryText("Your strategic insights prove invaluable, shaping the plan of attack.");
                updateReputationWithDifficulty('earthKingdom', 2);
            } else {
                updateStoryText("While your contributions are earnest, the complexities of the battle plan are daunting.");
                updateEnergyWithDifficulty(-10);
            }
            break;
        case 3:
            updateStoryText("You take a moment to reflect on the long path that has led you here...");
            if (skillCheck('wisdom', 18)) {
                updateStoryText("Your reflections fill you with a sense of peace and purpose.");
                updateSkillWithDifficulty('wisdom', 3);
                updateEnergyWithDifficulty(20);
            } else {
                updateStoryText("The reflection is bittersweet, filled with regrets but also a determination to make the future better.");
                updateEnergyWithDifficulty(5);
            }
            break;
        case 4:
            updateStoryText("You focus on preparing yourself mentally and physically for the final battle...");
            if (skillCheck('combat', 20) && skillCheck('discipline', 18)) {
                updateStoryText("You feel a surge of confidence in your firebending skills and your ability to lead.");
                updateSkillWithDifficulty('combat', 3);
                updateEnergyWithDifficulty(30);
            } else {
                updateStoryText("Despite your best efforts, nerves and doubt creep in.");
                updateEnergyWithDifficulty(-20);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startFireChapter15 }
        ]);
    }, 300);
}
//Fire code end