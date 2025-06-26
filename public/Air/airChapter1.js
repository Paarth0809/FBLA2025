import { startAirChapter2 } from './airChapter2.js';
import { updateStoryText, updateChoices, updateCharacterInfo } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkill, updateReputation, addAlly } from '../gameFunctions/utilityFunctions.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';
import { gameState } from '../gameFunctions/gameState.js';
import { characters } from '../gameFunctions/characters.js';

// Air code start
export function startAirChapter1() {
    // log the gamestate to console for debugging
    console.log("Starting Air Chapter 1 with gameState:", gameState);
    gameState.currentChapter = 1;
    displayAirChapter1();
    
    
}



//Displays chapter 1
function displayAirChapter1() {
    // Chapter 1 text introducing the scenario
    const chapter1Text = `
        <h2>Chapter 1: The Awakening</h2>
        <p>You are Aang, the last Airbender, 
        awakening from a century-long slumber in an iceberg. 
        You find yourself rescued by Katara and Sokka,
         two Southern Water Tribe siblings. 
        The world you knew is gone, 
        and the Fire Nation's war has left its mark.</p>
    `;
    // Update the story text on the screen
    updateStoryText(chapter1Text);
    // Provide choices for the player with corresponding actions
    updateChoices([
        { text: "Excitedly show off your Airbending skills", action: () => handleAirChapter1Choice(1) },
        { text: "Ask about what has happened in the last 100 years", action: () => handleAirChapter1Choice(2) },
        { text: "Try to hide your identity as the Avatar", action: () => handleAirChapter1Choice(3) },
        { text: "Focus on befriending Appa and regaining your strength", action: () => handleAirChapter1Choice(4) }
    ]);

    // Add Katara as an ally to the game state
    addAlly(characters.katara);

    // Add Sokka as an ally to the game state
    addAlly(characters.sokka);

    // log the gamestate to console for debugging
    console.log("Starting Air Chapter 1 with gameState:", gameState);
}



function handleAirChapter1Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You joyfully show off your Airbending skills, impressing Katara but drawing Sokka's suspicion.");
            updateSkill('combat', 1);
            updateReputation('waterTribe', 1);

            updateSkill('diplomacy', 2);
            //unnecessary and useless currently
            if (skillCheck('agility', 10)) {
                updateStoryText("Your Airbending display amazes the tribe, earning their admiration.");
                updateReputation('waterTribe', 2); 
            }
            break;
        case 2:
            updateStoryText("You ask about the world and the war, realizing the Air Nomads have been wiped out...");
            updateSkill('wisdom', 2);
            updateReputation('waterTribe', 2);
            updateSkill('diplomacy', 2);
            //unnecessary and useless currently
            if (skillCheck('wisdom', 12)) {
                updateStoryText("You connect the pieces of history quickly, realizing the gravity of your situation.");
                updateSkill('wisdom', 2);
            }
            break;
        case 3:
            updateStoryText("You decide to keep your Avatar identity secret for now, avoiding unnecessary attention.");
            updateSkill('stealth', 1);
            updateSkill('wisdom', 1);
            //unnecessary and useless currently
            if (skillCheck('stealth', 10)) {
                updateStoryText("You successfully keep a low profile, but Katara remains curious about you.");
            }
            break;
        case 4:
            updateStoryText("You focus on reconnecting with Appa, calming his nerves and regaining your own composure.");
            updateSkill('wisdom', 1);
            updateSkill('empathy', 3);
            //unnecessary and useless currently
            if (skillCheck('animalHandling', 10)) {
                updateStoryText("Appa fully trusts you, making him more responsive to your commands.");
                updateSkill('animalHandling', 1);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: () => { startAirChapter2(); playVideo('airCutscene2.mp4'); } }
        ]);
    }, 300);
}
// Air code end