import { startEarthChapter3 } from './earthChapter3.js'; 
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkill, addToInventory } from '../gameFunctions/utilityFunctions.js'; 
import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';

export function startEarthChapter2() {
    gameState.currentChapter = 2;
    displayEarthChapter2();
}

function displayEarthChapter2() {
    const chapter2Text = `
        <h2>Chapter 2: Earth Rumble VI</h2>
        <p>The Earth Rumble Tournament's reigning champion Hippo is busy finishing off everyone one by one. Suddenly someone called the Boulder defeats Hippo in a shocking victory! As the crowd roars you emerge. The announcer shouts: "A NEW CHALLENGER APPROACHES!"</p>
        <p>Suddenly, some airbender kid jumps into the ring uninvited.</p>
    `;
    updateStoryText(chapter2Text);
    updateChoices([
        { text: "Crush the twerp immediately", action: () => handleEarthChapter2Choice(1) },
        { text: "Let him embarrass himself first", action: () => handleEarthChapter2Choice(2) },
        { text: "Challenge him to a REAL earthbending duel", action: () => handleEarthChapter2Choice(3)}
    ]);
}

function handleEarthChapter2Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You earthbend a pillar under Aang, sending him flying. The crowd goes wild!");
            updateSkillWithDifficulty('combat', 2); 
           
            break;

        case 2:
            updateStoryText("Aang does a silly dance instead of fighting. The crowd boos until you finally knock him out.");
            updateSkillWithDifficulty('wisdom', 1); 
            break;

        case 3:
            updateStoryText(`"You want earthbending? I'll show you earthbending!" You demolish Aang in seconds, impressing Katara and Sokka.`);
            updateSkillWithDifficulty('leadership', 1);
            break;
    }
 setTimeout(() => {
        updateChoices([
            { text: "Continue", action: () => { startEarthChapter3(); playVideo('earthCutscene3.mp4'); } }
        ]);
    }, 300);
}
