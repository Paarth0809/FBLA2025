//Get imports

import { startEarthChapter5 } from './earthChapter5.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateSkill, updateReputation, addToInventory } from '../utilityFunctions.js';
import { gameState } from '../gameState.js';

export function startEarthChapter4() {
    gameState.currentChapter = 4;
    displayEarthChapter4();
}

function displayEarthChapter4() {
    const chapter4Text = `
        <h2>Chapter 4: </h2>
        <p>As you are leaving the village, you're approached by a young airbender named Aang and his friends, Katara and Sokka.
        They explain to you how Aang is the avatar and they are searching for an Earthbender to teach him, so he can master all 4 elements and defeat the Fire Nation.</p>
        <p>Skeptical at first, you finally agree seeing Aang's enthusiasm and determination.</p>
        <p>You must now decide wether to join Team Avatar or continue on down your own path. </p>
       
    `;
    updateStoryText(chapter4Text);
    updateChoices([
        { text: "Join Team Avatar and teach Aang earthbending. ", action: () => handleEarthChapter4Choice(1) },
        {text: "Refuse and continue on your own", action: () => handleEarthChapter4Choice(2)}
    ]);
}

function handleEarthChapter4Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`
                <p>You decide to join Team Avatar and become Aang's Earthbending teacher. Together, you set out on a journey to help Aang master the elements and bring balance to the world.</p>
                <p>As you travel, you quickly bond with the group, especially Sokka, whose sarcasm matches your own. You also begin to teach Aang the fundamentals of Earthbending, starting with the importance of standing your ground and facing challenges head-on.</p>
            `);
            updateSkill('leadership', 5);
            updateReputation('Team Avatar', 2)
            setTimeout(() => {
                updateChoices([
                    { text: "Continue", action: startEarthChapter5 }
                ]);
            }, 300);
            break;
        case 2:
            updateStoryText(`
                <p>You decide to continue on your own, unwilling to tie yourself down to a group. However, as you travel, you begin to realize that the Fire Nation's threat is too great to face alone.</p>
                <p>After a few days, you change your mind and catch up with Team Avatar, agreeing to join them and teach Aang Earthbending.</p>
            `);
            updateSkill('stealth', 1); // Improves stealth for traveling alone
            updateReputation('Team Avatar', 1); // Increases reputation with Team Avatar
            setTimeout(() => {
                updateChoices([
                    { text: "Continue", action: startEarthChapter5 }
                ]);
            }, 300);
            break;
         
    }
}