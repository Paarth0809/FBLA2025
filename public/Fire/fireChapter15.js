import { updateStoryText, updateChoices  } from '../gameFunctions/uiUpdateFunctions.js';

import { skillCheck } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';
import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { startFireFinalChapter } from './fireFinalChapter.js';

//Fire code start
export function startFireChapter15() {
    gameState.currentChapter = 15;
    displayFireChapter15();
}

function displayFireChapter15() {
    const chapter15Text = `
        <h2>Chapter 15: The Comet</h2>
        <p>Sozin's Comet is here, enhancing the firebending of all who wield it. As Zuko, you face Azula in a decisive 
        battle for the future of the Fire Nation. The stakes have never been higher, not just for the throne, but for 
        the soul of your nation. It's a battle that will determine the course of the Fire Nation and your own destiny as its leader.</p>
    `;
    updateStoryText(chapter15Text);
    updateChoices([
        { text: "Confront Azula, focusing on your firebending", action: () => handleFireChapter15Choice(1) },
        { text: "Use the environment to your advantage", action: () => handleFireChapter15Choice(2) },
        { text: "Rely on your inner calm and tactics over raw power", action: () => handleFireChapter15Choice(3) },
        { text: "Call upon the support of your friends if needed", action: () => handleFireChapter15Choice(4) }
    ]);
}

function handleFireChapter15Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You engage Azula directly, your firebending enhanced by the comet...");
            if (skillCheck('combat', 22)) {
                updateStoryText("Your mastery of firebending prevails, overcoming Azula's aggression with precision and power.");
                updateEnergyWithDifficulty(30);
                updateReputationWithDifficulty('fireNation', 5);
               
            } else {
                updateStoryText("Azula's ferocity is daunting, pushing you to the edge. The battle is fierce, testing every bit of your skill and resolve.");
                updateHealthWithDifficulty(-20);
            }
            break;
        case 2:
            updateStoryText("You cleverly use the environment to level the playing field against Azula...");
            if (skillCheck('combat', 18)) {
                updateStoryText("Your strategic use of the surroundings catches Azula off guard, tipping the scales in your favor.");
                updateEnergyWithDifficulty(20);
                updateReputationWithDifficulty('fireNation', 3);
             
            } else {
                updateStoryText("Azula anticipates your moves, countering your strategies. The battle remains evenly matched.");
                updateHealthWithDifficulty(-15);
            }
            break;
        case 3:
            updateStoryText("You focus on maintaining your inner calm, using tactics over brute strength...");
            if (skillCheck('wisdom', 20) && skillCheck('combat', 20)) {
                updateStoryText("This approach disorients Azula, allowing you to subdue her with superior tactics and control.");
                updateEnergyWithDifficulty(25);
                updateReputationWithDifficulty('fireNation', 4);
              
            } else {
                updateStoryText("While you manage to maintain your calm, Azula's relentless assault puts you on the defensive.");
                updateHealthWithDifficulty(-25);
            }
            break;
        case 4:
            updateStoryText("Feeling the weight of the battle, you signal for the support of your friends...");
            if (gameState.allies.includes('teamAvatar')) {
                updateStoryText("With the timely intervention of your friends, the tide turns. Together, you overpower Azula.");
                updateEnergyWithDifficulty(20);
                updateReputationWithDifficulty('fireNation', 2);
             
            } else {
                updateStoryText("Your call for help goes unanswered in the heat of the battle, leaving you to face Azula alone.");
                updateHealthWithDifficulty(-30);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
                                    { text: "Continue", action: () => { startFireFinalChapter(); playVideo('fireCutsceneFinal.mp4'); } }
            
        ]);
    }, 300);
}
//Fire code end