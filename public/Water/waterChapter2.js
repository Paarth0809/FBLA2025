import { startWaterChapter3 } from './waterChapter3.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateHealth, updateSkill, updateReputation, addAlly } from '../gameFunctions/utilityFunctions.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js';
import { characters } from '../gameFunctions/characters.js';
import { gameState } from '../gameFunctions/gameState.js';
export function startWaterChapter2() {
    gameState.currentChapter = 2;
    displayWaterChapter2();
}

function displayWaterChapter2() {
    const chapter2Text = `
        <h2>Chapter 2: The Awakening</h2>
        <p>After freeing the mysterious figure from the ice, you are stunned to learn that he is no ordinary traveler—he is the Avatar, Aang. 
        The boy you've just freed is the last of the Air Nomads and holds the key to saving the world. His return has not only surprised you, but it could also change the fate of the Southern Water Tribe. 
        However, revealing his identity could bring danger from the Fire Nation. Now you must carefully decide what to do next.</p>
    `;
    updateStoryText(chapter2Text);
    updateChoices([
        { text: "Introduce Aang to the village and let them meet the Avatar", action: () => handleWaterChapter2Choice(1) },
        { text: "Keep Aang's identity a secret and protect him for now.", action: () => handleWaterChapter2Choice(2) },
        { text: "Ask Aang to show his powers and prove he's the Avatar", action: () => handleWaterChapter2Choice(3) },
        { text: "Consult Gran Gran for advice about the Avatar's return", action: () => handleWaterChapter2Choice(4) }
    ]);
}

function handleWaterChapter2Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to bring Aang to the village. The villagers are intrigued, some welcoming him warmly, while others are concerned about what his presence might bring.");
            updateSkill('leadership', 3); // Public decision-making
            updateSkill('diplomacy', 2); // Managing community response
            addAlly(characters.aang);
            break;
        case 2:
            updateStoryText("You choose to keep Aang's identity a secret, fearing that revealing him would put everyone in danger. Aang agrees to keep a low profile for now.");
            updateSkill('stealth', 3); // Active concealment
            updateSkill('empathy', 2); // Protecting others' safety
            if (skillCheck('wisdom', 16)) {
                updateStoryText("Your careful precautions seem to work, and Aang remains unnoticed. But how long can you keep him hidden?");
            } else {
                updateStoryText("Despite your best efforts, rumors begin to spread throughout the village, and suspicion starts to build.");
                updateSkill('leadership', -2); // Loss of control
            }
            break;
        case 3:
            updateStoryText("Curious to test Aang's abilities, you ask him to demonstrate his skills. He enthusiastically shows you his airbending abilities, but the display catches the attention of some villagers.");
            updateSkill('combat', 2); // Testing abilities
            updateSkill('wisdom', 1); // Assessing truth
            if (skillCheck('empathy', 12)) {
                updateStoryText("You watch closely as Aang bends the air with ease, confirming that he is indeed the Avatar. There's no mistaking it.");
            } else {
                updateStoryText("Sokka, ever the skeptic, insists that Aang might just be another bender, not the real Avatar. His doubts shake your confidence, but deep down inside you know he is the Avatar.");
                updateSkill('leadership', -1); // Undermining authority
            }
            break;
        case 4:
            updateStoryText("Uncertain about what to do next, you seek advice from Gran Gran, who recalls the ancient legends of the Avatar's return.");
            updateSkill('wisdom', 3); // Seeking guidance
            updateSkill('empathy', 2); // Understanding legacy
            if (skillCheck('diplomacy', 14)) {
                updateStoryText("Gran Gran tells you that Aang's arrival marks the beginning of an age of change. What happens next will depend on the choices you make.");
            } else {
                updateStoryText("Gran Gran warns that if Aang truly is the Avatar, the Fire Nation will soon seek him out. Danger is inevitable.");
            }
            break;
    }

    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startWaterChapter3 }
        ]);
    }, 300);
}