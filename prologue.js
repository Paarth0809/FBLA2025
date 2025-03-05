import { updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { startFireChapter1 } from './fireChapter1.js';

// Displays the Earth Prologue
export function displayEarthPrologue() {
    const prologueText = ` <h2>Prologue: Earth</h2>
        <p>Add later</p>
    `;
    updateStoryText(prologueText);
    updateChoices([
        { text: "Continue", action: startFireChapter1 }
    ]);
}

// Displays the Air Prologue
export function displayAirPrologue() {
    const prologueText = ` <h2>Prologue: Air</h2>
        <p> Add later </p>
    `;
    updateStoryText(prologueText);
    updateChoices([
        { text: "Continue", action: startFireChapter1 }
    ]);
}

// Displays the Fire Prologue
export function displayFirePrologue() {
    const prologueText = ` <h2>Prologue: A Kingdom in Flames</h2>
        <p> You are Zuko the banished prince of the Fire Nation. Son of Ozai. One day you are very eager to prove yourself, attend a war council meeting with your uncle, Iroh, where you speaks out against a general's plan to sacrifice young soldiers, seeing it as dishonorable. This act of defiance enrages Ozai, who demands an Agni Kai duel. When you refuses to fight his father, Ozai brands you with fire and banishes you, stripping you of his title and honor. You are told you can only return if you capture the Avatar, a task believed impossible. Accompanied by Iroh, you embark on a quest that will lead you to question your father's ideals and your own destiny, setting the stage for a profound transformation from a bitter, exiled prince to a key ally in the fight to restore balance to the world..</p>
    `;
    updateStoryText(prologueText);
    updateChoices([
        { text: "Continue", action: startFireChapter1 }
    ]);
}

// Displays the Water Prologue
export function displayWaterPrologue() {
    const prologueText = ` <h2>Prologue: Water</h2>
        <p>Add later </p>
    `;
    updateStoryText(prologueText);
    updateChoices([
        { text: "Continue", action: startFireChapter1 }
    ]);
}