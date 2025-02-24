import { updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { startChapter1 } from './chapter1.js';

// Displays the Earth Prologue
export function displayEarthPrologue() {
    const prologueText = ` <h2>Prologue: Earth</h2>
        <p>Add later</p>
    `;
    updateStoryText(prologueText);
    updateChoices([
        { text: "Continue", action: startChapter1 }
    ]);
}

// Displays the Air Prologue
export function displayAirPrologue() {
    const prologueText = ` <h2>Prologue: Air</h2>
        <p> Add later </p>
    `;
    updateStoryText(prologueText);
    updateChoices([
        { text: "Continue", action: startChapter1 }
    ]);
}

// Displays the Fire Prologue
export function displayFirePrologue() {
    const prologueText = ` <h2>Prologue: A Kingdom in Flames</h2>
        <p>Fire Lord Azulon is nearing the end of his reign, and uncertainty grips the Fire Nation. 
        He believes his son, Ozai, is not yet ready to lead. In his will, he names his strongest 
        warrior, General Kaidan, as his successor. But Ozai, ruthless and ambitious, orchestrates 
        a sinister plot. He falsely accuses Kaidan of treason, leading to his banishment.</p>
        <p>With Azulon's death under mysterious circumstances, Ozai seizes power. Kaidan, now an 
        outcast, retreats to a quiet life as a farmer with his son, Ren. As war erupts, the Avatar, 
        a young airbender named Aang, is told of his destiny early. The Fire Nation's conquest 
        spreads rapidly, and the world's fate teeters on the edge of destruction.</p>
    `;
    updateStoryText(prologueText);
    updateChoices([
        { text: "Continue", action: startChapter1 }
    ]);
}

// Displays the Water Prologue
export function displayWaterPrologue() {
    const prologueText = ` <h2>Prologue: Water</h2>
        <p>Add later </p>
    `;
    updateStoryText(prologueText);
    updateChoices([
        { text: "Continue", action: startChapter1 }
    ]);
}