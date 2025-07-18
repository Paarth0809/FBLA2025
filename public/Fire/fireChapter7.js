import { startFireChapter8 } from './fireChapter8.js';
import { playVideo } from '../gameFunctions/cutscenes.js';

import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { characters } from '../gameFunctions/characters.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js'; 

//Fire code start
export function startOpt1FireChapter7() {
    gameState.currentChapter = 7;
    displayOpt1FireChapter7();
}

function displayOpt1FireChapter7() {
    const chapter7Text = `
        <h2>Chapter 7: Banishment and Redemption</h2>
        <p>After the confrontation at the Northern Water Tribe, you find yourself at a crossroads. Betrayed by your sister Azula and disillusioned by your father's unyielding demands, you begin to question the true meaning of honor. Is it something that can be granted by another, or must it be found within oneself? As you ponder these questions, you start to see your mission to capture the Avatar in a new light. Perhaps there is another path to redemption.</p>
    `;
    updateStoryText(chapter7Text);
    updateChoices([
        { text: "Reflect on your actions and their consequences", action: () => handleOpt1FireChapter7Choice(1) },
        { text: "Seek guidance from Uncle Iroh", action: () => handleOpt1FireChapter7Choice(2) },
        { text: "Abandon the quest and begin a new journey", action: () => handleOpt1FireChapter7Choice(3) },
        { text: "Confront Azula and seek answers", action: () => handleOpt1FireChapter7Choice(4) }
    ]);
}

function handleOpt1FireChapter7Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("In solitude, you take a long, hard look at the path you've walked. The pain you've caused, the relentless pursuit of an ideal that seems ever out of reach. Perhaps the honor you seek lies not in the approval of others, but in the integrity of your actions.");
            updateSkillWithDifficulty('introspection', 2);
            if (skillCheck('introspection', 12)) {
                updateHealthWithDifficulty(5);
                updateStoryText("This period of reflection strengthens your resolve and heals old wounds, both physical and emotional.");
            } else {
                updateHealthWithDifficulty(-5);
                updateStoryText("While you strive for clarity, the answers remain just beyond your grasp, leading to frustration.");
            }
            break;
        case 2:
            updateStoryText("Uncle Iroh has always been a source of wisdom and guidance. You turn to him now, seeking advice on how to proceed. His words, simple yet profound, encourage you to look inward for the honor you seek.");
            updateSkillWithDifficulty('wisdom', 2);
            if (skillCheck('wisdom', 14)) {
                updateHealthWithDifficulty(10);
                updateStoryText("Iroh's guidance illuminates a path forward, one that promises true redemption and peace.");
            } else {
                updateHealthWithDifficulty(-10);
                updateStoryText("The lessons are difficult to accept, and you struggle to apply them, causing further turmoil.");
            }
            break;
        case 3:
            updateStoryText("The weight of your past actions and the realization that your quest may have been misguided compel you to consider a new path. One that leads away from the shadows of your father's expectations and towards a light of your own making.");
            updateSkillWithDifficulty('determination', 2);
            if (skillCheck('determination', 13)) {
                updateHealthWithDifficulty(5);
                updateStoryText("With a newfound resolve, you begin to carve out a new destiny, one step at a time.");
            } else {
                updateHealthWithDifficulty(-5);
                updateStoryText("Doubt plagues your decision, making the first steps of this new journey the hardest you've ever taken.");
            }
            break;
        case 4:
            updateStoryText("Determined to confront the source of your turmoil, you seek out Azula. You demand answers, hoping to understand her betrayals and perhaps find closure.");
            updateSkillWithDifficulty('combat', 2);
            if (skillCheck('combat', 15)) {
                updateHealthWithDifficulty(-10);
                updateStoryText("The confrontation is intense, and while it sheds light on Azula's ambitions, it leaves you with more questions about your own path.");
            } else {
                updateHealthWithDifficulty(-20);
                updateStoryText("Azula's prowess overpowers you, deepening your wounds and forcing you to retreat, your questions unanswered.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: () => { startFireChapter8(); playVideo('fireCutscene8.mp4'); } }
        ]);
    }, 300);
}

export function startOpt2FireChapter7() {
    gameState.currentChapter = 7;
    displayOpt2FireChapter7();
}

function displayOpt2FireChapter7() {
    const chapter7Text = `
        <h2>Chapter 7: Banishment and Redemption</h2>
        <p>After the confrontation at the Northern Water Tribe, you find yourself at a crossroads. Betrayed by your sister Azula and disillusioned by your father's unyielding demands, you begin to question the true meaning of honor. Is it something that can be granted by another, or must it be found within oneself? As you ponder these questions, you start to see your mission to capture the Avatar in a new light. Perhaps there is another path to redemption.</p>
    `;
    updateStoryText(chapter7Text);
    updateChoices([
        { text: "Reflect on your actions and their consequences", action: () => handleOpt2FireChapter7Choice(1) },
        { text: "Seek guidance from Uncle Iroh", action: () => handleOpt2FireChapter7Choice(2) },
        { text: "Abandon the quest and begin a new journey", action: () => handleOpt2FireChapter7Choice(3) },
        { text: "Confront Azula and seek answers", action: () => handleOpt2FireChapter7Choice(4) }
    ]);
}

function handleOpt2FireChapter7Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("In solitude, you take a long, hard look at the path you've walked. The pain you've caused, the relentless pursuit of an ideal that seems ever out of reach. Perhaps the honor you seek lies not in the approval of others, but in the integrity of your actions.");
            updateSkillWithDifficulty('wisdom', 2);
            if (skillCheck('wisdom', 12)) {
                updateHealthWithDifficulty(5);
                updateStoryText("This period of reflection strengthens your resolve and heals old wounds, both physical and emotional.");
            } else {
                updateHealthWithDifficulty(-5);
                updateStoryText("While you strive for clarity, the answers remain just beyond your grasp, leading to frustration.");
            }
            break;
        case 2:
            updateStoryText("Uncle Iroh has always been a source of wisdom and guidance. You turn to him now, seeking advice on how to proceed. His words, simple yet profound, encourage you to look inward for the honor you seek.");
            updateSkillWithDifficulty('wisdom', 2);
            if (skillCheck('wisdom', 14)) {
                updateHealthWithDifficulty(10);
                updateStoryText("Iroh's guidance illuminates a path forward, one that promises true redemption and peace.");
            } else {
                updateHealthWithDifficulty(-10);
                updateStoryText("The lessons are difficult to accept, and you struggle to apply them, causing further turmoil.");
            }
            break;
        case 3:
            updateStoryText("The weight of your past actions and the realization that your quest may have been misguided compel you to consider a new path. One that leads away from the shadows of your father's expectations and towards a light of your own making.");
            updateSkillWithDifficulty('wisdom', 2);
            if (skillCheck('wisdom', 13)) {
                updateHealthWithDifficulty(5);
                updateStoryText("With a newfound resolve, you begin to carve out a new destiny, one step at a time.");
            } else {
                updateHealthWithDifficulty(-5);
                updateStoryText("Doubt plagues your decision, making the first steps of this new journey the hardest you've ever taken.");
            }
            break;
        case 4:
            updateStoryText("Determined to confront the source of your turmoil, you seek out Azula. You demand answers, hoping to understand her betrayals and perhaps find closure.");
            updateSkillWithDifficulty('combat', 2);
            if (skillCheck('combat', 15)) {
                updateHealthWithDifficulty(-10);
                updateStoryText("The confrontation is intense, and while it sheds light on Azula's ambitions, it leaves you with more questions about your own path.");
            } else {
                updateHealthWithDifficulty(-20);
                updateStoryText("Azula's prowess overpowers you, deepening your wounds and forcing you to retreat, your questions unanswered.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: () => { startFireChapter8(); playVideo('fireCutscene8.mp4'); } }
        ]);
    }, 300);
}
//Fire code end