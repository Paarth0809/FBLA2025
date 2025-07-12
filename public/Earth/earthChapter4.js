import { startEarthChapter5 } from './earthChapter5.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkill, updateReputation, addToInventory } from '../gameFunctions/utilityFunctions.js';
import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';

export function startEarthChapter4() {
    gameState.currentChapter = 4;
    displayEarthChapter4()
}

function displayEarthChapter4() {
const chapter4Text = `
        <h2>Chapter 4: The Decision</h2>
        <p>After your Earth Rumble victory, Aang begs you to teach him earthbending. You agree and start with Aang's first lesson: "Moving a Rock." Seeing Aang's airbending overpowering his earthbending, you get angry and decide to leave.</p>
        <p> You walk away saying, "I don't want to be your teacher anymore!" you snap, crossing your arms. "No, please!!!" Aang begs </p>
    `;
    updateStoryText(chapter4Text);
    updateChoices([
        { text: "Accept (but pretend you're doing them a favor)", action: () => handleEarthChapter4Choice(1) },
        { text: "Refuse (but secretly follow them)", action: () => handleEarthChapter4Choice(2) }
    ]);
}

function handleEarthChapter4Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`
                <p>"FINE!" You kick a boulder at Aang's head in subtle frustration.</p>
                <p>Katara gasps! </p>
            `);
            updateSkillWithDifficulty('leadership', 5);
            updateReputationWithDifficulty('Team Avatar', 2);
            break;

        case 2:
            updateStoryText(`
                <p>"As if!" You stomp away... then quietly earth-surf after them. When bandits attack their camp that night, you crush their weapons. Elated you stuck with them, they ask you again and you agree.</p>
                <p>"Okay okay, I'll join!" (+1 Stealth)</p>
            `);
            updateSkillWithDifficulty('stealth', 1);
            updateReputationWithDifficulty('Team Avatar', 1);
            break;
    }

    // Both paths lead to the same canon outcome
    setTimeout(() => {
        updateStoryText(`
            <p>The group sets out with you as Aang's earthbending teacher once again. Your first real test comes when princess Azula attacks...</p>
        `);
      updateChoices([
            { text: "Continue", action: () => { startEarthChapter5(); playVideo('earthCutscene5.mp4'); } }
        ]);
    }, 300);
}