// aangs final chapter. We did an outline of all the charcters first but realized we should do each individual. We kept this for aand as we thought we already made this and shouldnt go to waste

import { startFinalChapter } from './finalChapter.js';
import { updateStoryText, updateChoices  } from './uiUpdateFunctions.js';
import { updateSkill, addToInventory, addAlly, updateHealth, updateEnergy, updateReputation } from './utilityFunctions.js';
import { skillCheck } from './gameMechanics.js';
import { characters } from './characters.js';
import { items } from './items.js';
import { gameState } from './gameState.js';

export function startAirChapter16() {
    gameState.currentChapter = 16;
    displayAirChapter16();
}

function displayAirChapter16() {
    const chapter16Text = `
        <h2>Chapter 16: Sozin's Comet</h2>
        <p>The day of reckoning has arrived. Sozin's Comet blazes across the sky, empowering all 
        firebenders to unprecedented levels. Fire Lord Ozai, now styling himself the Phoenix King, 
        leads his assault. The final battle for the fate of the world begins.</p>
    `;
    updateStoryText(chapter16Text);
    updateChoices([
        { text: "Confront Ozai directly in an epic duel", action: () => handleAirChapter16Choice(1) },
        { text: "Focus on taking down the airship fleet to prevent widespread destruction", action: () => handleAirChapter16Choice(2) },
        { text: "Attempt to turn Ozai's own forces against him", action: () => handleAirChapter16Choice(3) },
        { text: "Use the spirit technique to try and sever Ozai's connection to the comet", action: () => handleAirChapter16Choice(4) }
    ]);
}

function handleAirChapter16Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You confront Ozai directly in an epic duel...");
            updateSkill('combat', 3);
            updateSkill('bending.fire', 3);
            if (skillCheck('combat', 22) && skillCheck('bending.fire', 20)) {
                updateStoryText("In a battle of legendary proportions, you manage to defeat Ozai, ending his reign of terror.");
                updateReputation('fireNation', -5);
                updateReputation('earthKingdom', 5);
                addToInventory(items.phoenixCrown);
            } else {
                updateStoryText("Ozai's power, enhanced by the comet, proves too much. You're forced to retreat, badly wounded.");
                updateHealth(-60);
                updateEnergy(-70);
            }
            break;
        case 2:
            updateStoryText("You focus on taking down the airship fleet...");
            updateSkill('strategy', 3);
            updateSkill('sabotage', 2);
            if (skillCheck('strategy', 20) && skillCheck('sabotage', 19)) {
                updateStoryText("Through ingenious tactics, you manage to bring down the entire fleet, saving countless lives.");
                updateReputation('earthKingdom', 5);
                addToInventory(items.airshipWreckage);
            } else {
                updateStoryText("You take down several airships, but others break through, causing significant damage.");
                updateEnergy(-50);
                updateReputation('earthKingdom', -2);
            }
            break;
        case 3:
            updateStoryText("You attempt to turn Ozai's forces against him...");
            updateSkill('diplomacy', 3);
            updateSkill('leadership', 2);
            if (skillCheck('diplomacy', 21) && skillCheck('leadership', 20)) {
                updateStoryText("Your impassioned speech sways many of Ozai's soldiers. His forces are thrown into disarray.");
                updateReputation('fireNation', 3);
                addAlly(characters.fireNationDefectors);
            } else {
                updateStoryText("Ozai's hold over his troops is too strong. Your attempts at persuasion largely fail.");
                updateEnergy(-40);
                updateReputation('fireNation', -1);
            }
            break;
        case 4:
            updateStoryText("You use the spirit technique to try and sever Ozai's connection to the comet...");
            updateSkill('spirituality', 3);
            updateSkill('bending.spirit', 3);
            if (skillCheck('spirituality', 22) && skillCheck('bending.spirit', 21)) {
                updateStoryText("In a display of incredible spiritual power, you manage to disrupt Ozai's connection to the comet, leaving him vulnerable.");
                updateSkill('bending.spirit', 5);
                addToInventory(items.spiritualNexus);
            } else {
                updateStoryText("The technique only partially works. Ozai's power is diminished, but he remains a formidable threat.");
                updateEnergy(-60);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue to the Final Confrontation", action: startFinalChapter }
        ]);
    }, 300);
}
