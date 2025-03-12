//Get imports

import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateSkill, updateReputation } from '../utilityFunctions.js';
import { gameState } from '../gameState.js';
import { startOpt1EarthChapter12, startOpt2EarthChapter12 } from './earthChapter12.js';

export function startEarthChapter11() {
    gameState.currentChapter = 11;
    displayEarthChapter11();
}

function displayEarthChapter11() {
    const chapter11Text = `
        <h2>Chapter 11: The Crossroads</h2>
        <p>The team stands at a crossroads. The Fire Nation's forces are advancing, and you must decide the best course of action to prepare for the final battle.</p>
        <p>You must decide: what is the next step?</p>
    `;
    updateStoryText(chapter11Text);
    updateChoices([
        { text: "Prepare for a direct confrontation with the Fire Nation", action: () => handleEarthChapter11Choice(1) },
        { text: "Focus on gathering allies and resources", action: () => handleEarthChapter11Choice(2) }
    ]);
}

function handleEarthChapter11Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`
                <p>You decide to prepare for a direct confrontation with the Fire Nation. The team begins training for the upcoming battle, focusing on combat strategies and strengthening their bending skills.</p>
            `);
            updateSkill('leadership', 2);
            updateReputation('Team Avatar', 1);
           
            setTimeout(() => {
                updateChoices([
                    { text: "Continue", action: startOpt1EarthChapter12 }
                ]);
            }, 300);
            break;

        case 2:
            updateStoryText(`
                <p>You decide to focus on gathering allies and resources. The team embarks on a mission to secure support from other nations and stockpile supplies for the final battle.</p>
            `);
            updateSkill('diplomacy', 2);
            updateReputation('Team Avatar', 1);
           
            setTimeout(() => {
                updateChoices([
                    { text: "Continue", action: startOpt2EarthChapter12 }
                ]);
            }, 300);
            break;
    }
}