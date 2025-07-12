import { startEarthChapter2 } from './earthChapter2.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { gameState } from '../gameFunctions/gameState.js';
import { playVideo } from '../gameFunctions/cutscenes.js';
// Updated strings for Toph's version (keeping same functions/variables)

export function startEarthChapter1() {
    gameState.currentChapter = 1;
    displayEarthChapter1()

    function displayEarthChapter1(){
    const chapter1Text = `
    <h2>Chapter 1: The Blind Bandit</h2>
    <p>You're sneaking out to Earth Rumble VI when you overhear two merchants talking about a "mysterious earthbender" who keeps humiliating Fire Nation troops near Gaoling.</p>
    `;

    updateStoryText(chapter1Text);
    updateChoices([
        { text: "Track down this earthbender (might be competition)", action: () => handleEarthChapter1Choice(1) },
        { text: "Ignore it and head straight to the arena", action: () => handleEarthChapter1Choice(2) },
        { text: "Tell your parents (ugh, but they'd want to know)", action: () => handleEarthChapter1Choice(3) }
    ]);}
}

function handleEarthChapter1Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You find the earthbender... it's just some old man. Disappointing.");
            updateSkillWithDifficulty('stealth', 1);
            break;

        case 2:
            updateStoryText("You arrive at Earth Rumble VI just in time to see some airbender kid challenge the champion.");
            // This leads directly to her canon introduction
            break;

        case 3:
            updateStoryText("Your parents panic and lock you in your room. You earthbend out silently.");
            updateSkillWithDifficulty('stealth', 1);
            break;
    }

    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: () => { startEarthChapter2(); playVideo('earthCutscene2.mp4'); } }
        ]);
    }, 300);
}
