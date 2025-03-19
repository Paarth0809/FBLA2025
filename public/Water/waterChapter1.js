import { startWaterChapter2 } from './waterChapter2.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateHealth, updateSkill, updateReputation } from '../gameFunctions/utilityFunctions.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js';
import { characters } from '../gameFunctions/characters.js';
import { gameState } from '../gameFunctions/gameState.js';

export function startWaterChapter1() {
    gameState.currentChapter = 1;
    displayWaterChapter1();
}

function displayWaterChapter1() {
    const chapter1Text = `
        <h2>Chapter 1: The Frozen Discovery</h2>
        <p>You are Katara, the last known waterbender of the Southern Water Tribe. 
        Your village has been in constant struggle since the Fire Nations attack, leaving your people with few resources. 
        One day, while out fishing with your brother Sokka, you notice something unusual trapped beneath the ice—an object that seems to glow with strange energy. 
        It could be a simple relic, or it could change the course of your life forever.</p>
    `;
    updateStoryText(chapter1Text);
    updateChoices([
        { text: "Use your waterbending to break the ice and see what's inside", action: () => handleWaterChapter1Choice(1) },
        { text: "Examine the glowing object cautiously, unsure of what it is", action: () => handleWaterChapter1Choice(2) },
        { text: "Mark the location and return to the village to get equipment", action: () => handleWaterChapter1Choice(3) },
        { text: "Call Sokka over to help you crack the ice", action: () => handleWaterChapter1Choice(4) }
    ]);
    }
    
    function handleWaterChapter1Choice(choice) {
        switch (choice) {
            case 1:
                updateStoryText("You concentrate, using your waterbending skills to break the thick ice. The moment the ice cracks, the object bursts open with an intense light, revealing a young boy frozen inside. You've never seen anyone like him before...");
                updateSkill('combat', 2); // Waterbending effort
                updateSkill('leadership', 1); // Taking initiative
                updateReputation('southernWaterTribe', 1);
                break;
            case 2:
                updateStoryText("You approach cautiously and notice strange markings on the object. It seems ancient, possibly from a long-forgotten time. Its purpose is unclear, but there's something undeniably important about it.");
                updateSkill('wisdom', 2); // Cautious analysis
                updateSkill('empathy', 1); // Respect for unknown dangers
                break;
            case 3:
                updateStoryText("You decide to mark the location and return to the village, getting some proper mining equipment to break the ice.");
                updateSkill('leadership', 2); // Responsible decision-making
             updateReputation('southernWaterTribe', 1); // Gaining trust
                break;
            case 4:
                updateStoryText("You call for Sokka, who comes rushing over. With a swift tap of his boomerang, the ice begins to crack open on its own! As the ice breaks, an explosion of energy releases from the sphere, revealing a boy trapped inside.");
                if (skillCheck('wisdom', 14)) {
                    updateStoryText("You realize that this boy might be the key to something much bigger. You both decide to free him, despite the dangers.");
                    updateSkill('leadership', 3); // Effective collaboration
                    updateSkill('diplomacy', 2); // Working with Sokka
                } else {
                    updateStoryText("Sokka shrugs, Maybe we should just leave it alone? But something inside you knows this discovery is too significant to ignore.");
                    updateSkill('stealth', 2); // Alternative approach
                    updateSkill('empathy', 1); // Understanding risks
                }
                break;
        }
    
        setTimeout(() => {
            updateChoices([
                { text: "Continue", action: startWaterChapter2 }
            ]);
        }, 300);
    }