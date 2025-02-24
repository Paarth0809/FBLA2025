import { updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { gameState } from './gameState.js';
import { displayWaterPrologue, displayEarthPrologue, displayAirPrologue, displayFirePrologue} from './prologue.js';

function displayChooseElement() {
    const chapter1Text = `
        <h2>Choose your element!</h2>
    `;
    updateStoryText(chapter1Text);
    updateChoices([
        { text: "Water", action: () => handleElementChoice(1) },
        { text: "Earth", action: () =>  handleElementChoice(2) },
        { text: "Fire", action: () =>  handleElementChoice(3) },
        { text: "Air", action: () =>  handleElementChoice(4) }
    ]);
}

function  handleElementChoice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You chose Water!");
            displayWaterPrologue();
            break;
        case 2:
            updateStoryText("You chose Earth!");
            displayEarthPrologue();
            break;
        case 3:
            updateStoryText("You chose Fire!");
            displayFirePrologue();
            break;
        case 4:
            updateStoryText("You chose Air!");
            displayAirPrologue();
            break;
    }
}

export function startChooseElement() {
    gameState.currentChapter = 0;
    displayChooseElement();
}

export function chooseElement() {
    const elementText = `
        <h2>Choose your element!</h2>
        
    `;
    updateStoryText(elementText);
    updateChoices([
        { text: "Fire", action: displayFirePrologue }
    ]);
}




