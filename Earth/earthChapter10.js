//Get imports

import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateSkill, updateReputation } from '../utilityFunctions.js';
import { gameState } from '../gameState.js';
import { startEarthChapter11 } from './earthChapter11.js';

export function startEarthChapter10() {
    gameState.currentChapter = 10;
    displayEarthChapter10();
}

function displayEarthChapter10() {
    const chapter10Text = `
        <h2>Chapter 10: The Calm Before the Storm</h2>
        <p>After intense training and preparation, the group gathers to discuss the next steps. The Fire Nation is on the move, and the final battle is approaching. The team must decide how to proceed.</p>
        <p>You must decide: what is the next course of action?</p>
    `;
    updateStoryText(chapter10Text);
    updateChoices([
        { text: "Plan a direct assault on the Fire Nation", action: () => handleEarthChapter10Choice(1) },
        { text: "Seek allies from other nations", action: () => handleEarthChapter10Choice(2) },
        { text: "Focus on gathering resources and supplies", action: () => handleEarthChapter10Choice(3) },
        { text: "Train the team further", action: () => handleEarthChapter10Choice(4) }
    ]);
}

function handleEarthChapter10Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`
                <p>You decide to plan a direct assault on the Fire Nation. The team prepares for a risky but potentially decisive battle.</p>
            `);
            updateSkill('leadership', 2);
            updateReputation('Team Avatar', 1);
            break;

        case 2:
            updateStoryText(`
                <p>You decide to seek allies from other nations. The team embarks on a diplomatic mission to gather support.</p>
            `);
            updateSkill('diplomacy', 2);
            updateReputation('Team Avatar', 1);
            break;

        case 3:
            updateStoryText(`
                <p>You focus on gathering resources and supplies. The team ensures they are well-prepared for the upcoming battle.</p>
            `);
            updateSkill('leadership', 2);
            updateReputation('Team Avatar', 1);
            break;

        case 4:
            updateStoryText(`
                <p>You decide to train the team further in earthbending. The group hones their skills, preparing for the final confrontation.</p>
            `);
            updateSkill('wisdom', 2);
            updateSkill('combat', 2);
            updateReputation('Team Avatar', 1);
            break;
    }

    // Proceed to the next chapter after a short delay
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startEarthChapter11 }
        ]);
    }, 300);
}