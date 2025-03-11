import { startAirChapter12 } from './airChapter12.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';

import { gameState } from '../gameState.js';
import { updateHealth, updateEnergy, updateReputation, randomInt, addToInventory, updateSkill, addAlly } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';
import { characters } from '../characters.js';

// Air code start
export function startOpt1AirChapter11() {
    gameState.currentChapter = 11;
    displayOpt1AirChapter11();
}

export function startOpt2AirChapter11() {
    gameState.currentChapter = 11;
    displayOpt2AirChapter11();
}

function displayOpt1AirChapter11() {
    const chapter11Text = `
        <h2>Chapter 11: The Library and the Desert</h2>
        <p>With Toph by your side, you continue your journey to find a way to defeat the Fire Nation. You hear rumors of a ancient library hidden in the desert, which contains knowledge about the Fire Nation's weaknesses.</p>
        <p>Your group sets out to find the library, facing numerous challenges along the way. The harsh desert environment and treacherous sand worms make every step a struggle.</p>
    `;
    updateStoryText(chapter11Text);
    updateChoices([
        { text: "Search for the library", action: () => handleOpt1AirChapter11Choice(1) },
        { text: "Follow a vision from the Spirit World about a hidden oasis", action: () => handleOpt1AirChapter11Choice(2) },
        { text: "Consult with Avatar Roku's spirit for guidance", action: () => handleOpt1AirChapter11Choice(3) },
        { text: "Split up to cover more ground", action: () => handleOpt1AirChapter11Choice(4) }
    ]);
}

function displayOpt2AirChapter11() {
    const chapter11Text = `
        <h2>Chapter 11: The Library and the Desert</h2>
        <p>After the failed attempts to learn earth bending, you continue your journey to find a way to defeat the Fire Nation. You hear rumors of a ancient library hidden in the desert, which contains knowledge about the Fire Nation's weaknesses.</p>
        <p>Your group sets out to find the library, facing numerous challenges along the way. The harsh desert environment and treacherous sand worms make every step a struggle.</p>
    `;
    updateStoryText(chapter11Text);
    updateChoices([
        { text: "Search for the library", action: () => handleOpt2AirChapter11Choice(1) },
        { text: "Follow a vision from the Spirit World about a hidden oasis", action: () => handleOpt2AirChapter11Choice(2) },
        { text: "Consult with Avatar Roku's spirit for guidance", action: () => handleOpt2AirChapter11Choice(3) },
        { text: "Split up to cover more ground", action: () => handleOpt2AirChapter11Choice(4) }
    ]);
}

function handleOpt1AirChapter11Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to search for the library, using your knowledge of the desert and Toph's earthbending skills to navigate the treacherous terrain.");
            updateSkill('survival', 2);
            
            if (skillCheck('survival', 12)) {
                updateStoryText("After days of searching, you finally find the library, hidden behind a secret entrance. The ancient texts within hold the secrets of the Fire Nation's weaknesses, including their vulnerability to solar eclipses.");
            } else {
                updateHealth(-10);
                updateStoryText("The desert proves to be a formidable foe, and you become lost in the endless dunes. Sand worms attack, and you must fight to survive. Eventually, you stumble upon the library, but not without scars.");
            }
            break;
            
        case 2:
            updateStoryText("The spiritual connection you forged in the Spirit World guides your decision. Meditation reveals visions of a hidden oasis, where the library might be located.");
            updateSkill('spirituality', 2);
            
            if (skillCheck('spirituality', 14)) {
                updateStoryText("Your spiritual sensitivity allows you to interpret your vision with remarkable clarity. You lead your group to the oasis, where you find the library hidden behind a secret entrance. The ancient texts within hold the secrets of the Fire Nation's weaknesses.");
            } else {
                updateEnergy(-10);
                updateStoryText("The visions are cryptic and fragmented, leaving you to piece together their meaning through exhausting meditation sessions. You determine that the oasis is located somewhere in the desert, but the exact location remains unclear.");
            }
            break;
            
        case 3:
            updateStoryText("You decide to seek guidance directly from Avatar Roku. Finding a quiet meditation spot, you focus on connecting with your past life, hoping his centuries of wisdom will guide your search.");
            updateSkill('avatarCommunion', 3);
            
            if (skillCheck('avatarCommunion', 16)) {
                updateEnergy(10);
                updateStoryText("Roku appears before you with unexpected clarity. 'The library you seek is hidden behind a secret entrance,' he advises. 'Find the entrance, and you will find the knowledge you need to defeat the Fire Nation.' His guidance reinvigorates your spirit and gives you a clear direction.");
            } else {
                updateHealth(-5);
                updateStoryText("Your connection with Roku is tenuous. Brief glimpses and fragmented wisdom are all you receive, taxing your energy. From what you gather, the library is located somewhere in the desert, but the exact location remains unclear.");
            }
            break;
            
        case 4:
            updateStoryText("You decide to split up to cover more ground, hoping to find the library more quickly.");
            updateSkill('leadership', 2);
            
            if (skillCheck('leadership', 12)) {
                addAlly(characters.desertGuide);
                updateStoryText("Your group splits up, and you each search for the library. After days of searching, one of your group members returns with a map leading to the library. The ancient texts within hold the secrets of the Fire Nation's weaknesses.");
            } else {
                updateReputation(-5);
                updateStoryText("Your group becomes lost in the desert, and you must search for each other. Eventually, you reunite, but not without scars. You continue your search for the library, but the experience has left you shaken.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startAirChapter12 }
        ]);
    }, 300);
}

function handleOpt2AirChapter11Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to search for the library, using your knowledge of the desert and your friends' skills to navigate the treacherous terrain.");
            updateSkill('survival', 2);
            
            if (skillCheck('survival', 12)) {
                updateStoryText("After days of searching, you finally find the library, hidden behind a secret entrance. The ancient texts within hold the secrets of the Fire Nation's weaknesses, including their vulnerability to solar eclipses.");
            } else {
                updateHealth(-10);
                updateStoryText("The desert proves to be a formidable foe, and you become lost in the endless dunes. Sand worms attack, and you must fight to survive. Eventually, you stumble upon the library, but not without scars.");
            }
            break;
            
        case 2:
            updateStoryText("The spiritual connection you forged in the Spirit World guides your decision. Meditation reveals visions of a hidden oasis, where the library might be located.");
            updateSkill('spirituality', 2);
            
            if (skillCheck('spirituality', 14)) {
                updateStoryText("Your spiritual sensitivity allows you to interpret your vision with remarkable clarity. You lead your group to the oasis, where you find the library hidden behind a secret entrance. The ancient texts within hold the secrets of the Fire Nation's weaknesses.");
            } else {
                updateEnergy(-10);
                updateStoryText("The visions are cryptic and fragmented, leaving you to piece together their meaning through exhausting meditation sessions. You determine that the oasis is located somewhere in the desert, but the exact location remains unclear.");
            }
            break;
            
        case 3:
            updateStoryText("You decide to seek guidance directly from Avatar Roku. Finding a quiet meditation spot, you focus on connecting with your past life, hoping his centuries of wisdom will guide your search.");
            updateSkill('avatarCommunion', 3);
            
            if (skillCheck('avatarCommunion', 16)) {
                updateEnergy(10);
                updateStoryText("Roku appears before you with unexpected clarity. 'The library you seek is hidden behind a secret entrance,' he advises. 'Find the entrance, and you will find the knowledge you need to defeat the Fire Nation.' His guidance reinvigorates your spirit and gives you a clear direction.");
            } else {
                updateHealth(-5);
                updateStoryText("Your connection with Roku is tenuous. Brief glimpses and fragmented wisdom are all you receive, taxing your energy. From what you gather, the library is located somewhere in the desert, but the exact location remains unclear.");
            }
            break;
            
        case 4:
            updateStoryText("You decide to split up to cover more ground, hoping to find the library more quickly.");
            updateSkill('leadership', 2);
            
            if (skillCheck('leadership', 12)) {
                addAlly(characters.desertGuide);
                updateStoryText("Your group splits up, and you each search for the library. After days of searching, one of your group members returns with a map leading to the library. The ancient texts within hold the secrets of the Fire Nation's weaknesses.");
            } else {
                updateReputation(-5);
                updateStoryText("Your group becomes lost in the desert, and you must search for each other. Eventually, you reunite, but not without scars. You continue your search for the library, but the experience has left you shaken.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startAirChapter12 }
        ]);
    }, 300);
}
// Air code end
