import { startEarthChapter4} from './earthChapter4.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkill, updateReputation, addToInventory } from '../gameFunctions/utilityFunctions.js';
import { gameState } from '../gameFunctions/gameState.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js'
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';
;

export function startEarthChapter3() {
    gameState.currentChapter = 3;
    displayEarthChapter3();
}

function displayEarthChapter3() {
    const chapter3Text = `
        <h2>Chapter 3: The Chase</h2>
        <p>You decide to join team avatar, one the one condition you don't teach but rather fight. After joining, you're all exhausted from being relentlessly pursued by the fire princess Azula and her team. The group stops near a ruined Earth Kingdom village to rest.</p>
        <p>Katara wants to keep moving, Sokka wants to sleep, and Aang is too distracted by Appa's exhaustion. You sense tremors approaching...</p>
    `;
    updateStoryText(chapter3Text);
    updateChoices([
        { text: "Demand everyone keeps moving (like Katara)", action: () => handleEarthChapter3Choice(1) },
        { text: "Mock their weakness and take first watch", action: () => handleEarthChapter3Choice(2) },
        { text: "Pretend to sleep but stay alert", action: () => handleEarthChapter3Choice(3) }
    ]);
}

function handleEarthChapter3Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`
                <p>"We stop when I say we stop!" You earthbend a path forward.</p>
                <p>Katara appreciates your leadership, but Sokka groans about his aching feet.</p>
            `);
            updateSkillWithDifficulty('leadership', 1);
            break;

        case 2:
            updateStoryText(`
                <p>"Ugh, you're all pathetic." You stomp the ground to create a perimeter wall.</p>
                <p>Your sharp senses detect Azula's approach first.</p>
            `);
            updateSkillWithDifficulty('wisdom', 2);
            break;

        case 3:
            const stealthSuccess = skillCheck('stealth', 8);
            if (stealthSuccess) {
                updateStoryText(`
                    <p>You fake snoring while tracking Azula's movements through vibrations.</p>
                    <p>When she attacks, you're ready.</p>
                `);
                updateSkillWithDifficulty('combat', 1);
            } else {
                updateStoryText(`
                    <p>Azula spots your ruse immediately. "The blind one isn't fooling anyone."</p>
                    <p>The group scrambles to escape.</p>
                `);
                updateSkillWithDifficulty('empathy', -1);
            }
            break;
    }

    setTimeout(() => {
        updateStoryText(`
            <p>Azula's fire blast lights up the night! The entire group fights together in the dark.</p>
            <p>Iroh appears and helps you escape, but the tension between everyone is palpable...</p>
        `);

        updateChoices([
            { text: "Continue", action: () => { startEarthChapter4(); playVideo('earthCutscene4.mp4'); } }
        ]);
    }, 300);
}