import { updateStoryText, updateChoices, updateCharacterInfo } from './uiUpdateFunctions.js';
import { gameState } from './gameState.js';
import { displayWaterPrologue, displayEarthPrologue, displayAirPrologue, displayFirePrologue} from './prologue.js';
import { characters } from './characters.js';


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
// we still have to make the prologues for other elements. Its will be almost the same code, but different scenerios. For Now each element goes to Fire Prolouge.
function handleElementChoice(choice) {
    let selectedCharacter;
    switch (choice) {
        case 1:
            updateStoryText("You chose Water!");
            displayWaterPrologue();
            selectedCharacter = characters.katara;
            break;
        case 2:
            updateStoryText("You chose Earth!");
            displayEarthPrologue();
            selectedCharacter = characters.toph;
            break;
        case 3:
            updateStoryText("You chose Fire!");
            displayFirePrologue();
            selectedCharacter = characters.zuko;
            break;
        case 4:
            updateStoryText("You chose Air!");
            displayAirPrologue();
            selectedCharacter = characters.aang;
            break;
    }
    
    // Assuming gameState.skills should reflect the selected character's skills
    gameState.skills = selectedCharacter.skills;
    // Optionally, store the whole character object or just the name, for reference
    gameState.currentCharacter = selectedCharacter.name;

    updateCharacterInfo(); // Make sure this function is designed to read from gameState correctly
}

export function startChooseElement() {
    gameState.currentChapter = 0;
    displayChooseElement();
}





