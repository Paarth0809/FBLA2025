import { startChapter10 } from './chapter10.js';
import { updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { items } from './items.js';
import { gameState } from './gameState.js';
import { updateHealth, updateEnergy, updateReputation, randomInt, addToInventory, updateSkill } from './utilityFunctions.js';
import { skillCheck } from './gameMechanics.js';


export function startOpt1Chapter9() {
    gameState.currentChapter = 9;
    displayOpt1Chapter9();
}


export function startOpt2Chapter9() {
    gameState.currentChapter = 9; 
    displayOpt2Chapter9();
}

function displayOpt1Chapter9() {
    const chapter9Text = `
        <h2>Chapter 9: The Sun Warriors</h2>
        <p> Now that you have joined the avatars team, You and Aang embark on a quest to seek the wisdom of the Sun Warriors, the original firebenders, 
        to learn the true essence of firebending. This journey is not just about mastering an element; it's about understanding 
        its life-giving warmth and its potential for destruction.</p>
    `;
    updateStoryText(chapter9Text);
    updateChoices([
        { text: "Explore the ancient ruins of the Sun Warriors", action: () => handleChapter9Choice(1) },
        { text: "Participate in the Sun Warriors' firebending ritual", action: () => handleChapter9Choice(2) },
        { text: "Uncover the history of firebending with Aang", action: () => handleChapter9Choice(3) },
        { text: "Meet the ancient dragons guarded by the Sun Warriors", action: () => handleChapter9Choice(4) }
    ]);
}

function displayChapter9() {
    const chapter9Text = `
        <h2>Chapter 9: The Sun Warriors</h2>
        <p> Now that you have joined the avatars team, You and Aang embark on a quest to seek the wisdom of the Sun Warriors, the original firebenders, 
        to learn the true essence of firebending. This journey is not just about mastering an element; it's about understanding 
        its life-giving warmth and its potential for destruction.</p>
    `;
    updateStoryText(chapter9Text);
    updateChoices([
        { text: "Explore the ancient ruins of the Sun Warriors", action: () => handleChapter9Choice(1) },
        { text: "Participate in the Sun Warriors' firebending ritual", action: () => handleChapter9Choice(2) },
        { text: "Uncover the history of firebending with Aang", action: () => handleChapter9Choice(3) },
        { text: "Meet the ancient dragons guarded by the Sun Warriors", action: () => handleChapter9Choice(4) }
    ]);
}



function handleChapter9Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You explore the ruins, marveling at the architecture and the remnants of a once-great civilization...");
            updateSkill('exploration', 2);
            if (skillCheck('exploration', 15)) {
                updateStoryText("Your keen eye reveals a hidden path, leading you to a forgotten chamber filled with ancient wisdom.");
                addToInventory(items.ancientTome);
            } else {
                updateStoryText("Despite your efforts, the ruins offer no further secrets, leaving you to wonder what might have been missed.");
            }
            break;
        case 2:
            updateStoryText("Participating in the ritual, you and Aang demonstrate your current understanding of firebending, ready to learn more...");
            updateSkill('bending.fire', 1);
            if (skillCheck('bending.fire', 12)) {
                updateStoryText("The ritual is a success, and the Sun Warriors reveal deeper knowledge of firebending to you.");
                addToInventory(items.firebendingScroll);
            } else {
                updateStoryText("The ritual reveals gaps in your understanding, but the experience provides valuable lessons.");
            }
            break;
        case 3:
            updateStoryText("Together, you delve into the lore and history, gaining insights into the philosophical underpinnings of firebending...");
            updateSkill('wisdom', 2);
            if (skillCheck('wisdom', 14)) {
                updateStoryText("Your study uncovers profound insights, strengthening your connection to firebending.");
                addToInventory(items.philosophicalScroll);
            } else {
                updateStoryText("The lore is dense and cryptic, challenging to fully grasp but still offering glimpses of wisdom.");
            }
            break;
        case 4:
            updateStoryText("The meeting with the ancient dragons is transformative, revealing the true essence of firebending through their dance...");
            updateSkill('bending.fire', 3);
            if (skillCheck('bending.fire', 18)) {
                updateStoryText("The dragons bestow upon you a rare gift: a deeper understanding of fire that ignites within you a powerful new firebending technique.");
                addToInventory(items.dragonScroll); 
                updateSkill('bending.fire', 5); 
            } else {
                updateStoryText("While awe-inspiring, the dance of the dragons is a level beyond your current mastery, leaving you with much to ponder.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter10 }
        ]);
    }, 300);
}