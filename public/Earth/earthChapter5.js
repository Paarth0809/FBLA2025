import { startOpt1EarthChapter6, startOpt2EarthChapter6 } from './earthChapter6.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkill, addToInventory } from '../gameFunctions/utilityFunctions.js';
import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';

export function startEarthChapter5() {
    gameState.currentChapter = 5;
    displayEarthChapter5();
}

function displayEarthChapter5() {
    const chapter5Text = `
        <h2>Chapter 5: The Library</h2>
        <p>The group arrives at Wan Shi Tong's library, sinking into the desert sands. "Finally!" Sokka cheers. "We can find a Fire Nation weakness!"</p>
        <p>Professor Zei warns: "The Spirit values knowledge, not war." Toph cracks her knuckles. "So we lie. Easy."</p>
    `;
    updateStoryText(chapter5Text);
    updateChoices([
        { text: "Use seismic sense to find war scrolls secretly", action: () => handleEarthChapter5Choice(1) },
        { text: "Wait outside (desert heat bothers your feet)", action: () => handleEarthChapter5Choice(2) }
    ]);
}

function handleEarthChapter5Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`
                <p>You detect hidden chambers below. "Psst, Snoozles! War stuff's underground!"</p>
                <p>Wan Shi Tong's wings erupt from darkness. "THIEVES!" The library begins collapsing as you grab the solar eclipse scroll.</p>
            `);
            updateSkillWithDifficulty('wisdom', -1);
         
            setTimeout(() => {
                updateChoices([
                    { text: "Escape to Chapter 6: The Desert", action: startOpt1EarthChapter6 }
                ]);
            }, 300);
            break;

        case 2:
            updateStoryText(`
                <p>"I'll guard Appa," you declare, planting your feet in cool sand. When the library starts sinking, you yank everyone out with rock pillars.</p>
                <p>Katara nods approvingly. "That was actually smart."</p>
            `);
            updateSkillWithDifficulty('leadership', 2);
            updateReputationWithDifficulty('Team Avatar', 1);
            setTimeout(() => {
               updateChoices([
                           { text: "Continue", action: () => { startOpt1EarthChapter6(); playVideo('earthCutscene6.mp4'); } }
                       ]);
                   }, 300);
               }
    }
