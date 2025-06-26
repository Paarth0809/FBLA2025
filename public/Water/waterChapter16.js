import { startWaterFinalChapter } from './waterFinalChapter.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';

import { skillCheck } from '../gameFunctions/gameMechanics.js';
import { characters } from '../gameFunctions/characters.js';
import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';

// Water code start
export function startWaterChapter16() {
    gameState.currentChapter = 16;
    displayWaterChapter16();
}

function displayWaterChapter16() {
    const chapter16Text = `
        <h2>Chapter 16: The Moon's Wrath</h2>
        <p>The battle rages on as the full moon reaches its peak, flooding you with power unlike anything you've felt before. 
        The Northern Water Tribe fights desperately, but the Fire Nation's forces push forward, their war machines breaking through the ice. 
        Amidst the chaos, you remember Master Pakku's teachings and the wisdom of your journey—everything has led to this moment. 
        
        But then, a chilling sight stops you in your tracks—Admiral Zhao has infiltrated the Spirit Oasis. The Moon Spirit, the very source of your power, is in danger. 
        If it falls, so too does the Water Tribe's greatest advantage. The time to act is now.</p>
    `;
    updateStoryText(chapter16Text);
    updateChoices([
        { text: "Engage the Fire Nation's fleet head-on, using waterbending to sink their ships", action: () => handleWaterChapter16Choice(1) },
        { text: "Defend the Spirit Oasis to ensure the Moon Spirit remains safe", action: () => handleWaterChapter16Choice(2) },
        { text: "Use the power of the tides to cut off enemy reinforcements", action: () => handleWaterChapter16Choice(3) },
        { text: "Attempt to turn Fire Nation soldiers against their own leaders", action: () => handleWaterChapter16Choice(4) }
    ]);
}

function handleWaterChapter16Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You lead the charge against the Fire Nation fleet, summoning towering waves to crush their warships...");
            updateSkillWithDifficulty('bending.water', 3);
            updateSkillWithDifficulty('combat', 2);
            if (skillCheck('bending.water', 22) && skillCheck('combat', 20)) {
                updateStoryText("Your powerful bending engulfs the Fire Nation's ships, leaving only wreckage in the icy waters. However, a feeling of unease lingers—something is happening at the Spirit Oasis.");
                updateReputationWithDifficulty('waterTribe', 5);
                updateSkillWithDifficulty('combat', 4); // Combat increases
                updateSkillWithDifficulty('leadership', 2); // Leadership increases
            } else {
                updateStoryText("The Fire Nation forces withstand your assault, continuing their siege despite heavy losses. In the distance, you see Admiral Zhao moving toward the Spirit Oasis.");
                updateHealthWithDifficulty(-50);
                updateEnergyWithDifficulty(-60);
                updateSkillWithDifficulty('combat', 1); // Combat increases slightly
                updateSkillWithDifficulty('wisdom', -2); // Wisdom decreases as the plan fails
            }
            break;
            
        case 2:
            updateStoryText("You rush to the Spirit Oasis, standing guard against an incoming Fire Nation strike team...");
            updateSkillWithDifficulty('spirituality', 3);
            updateSkillWithDifficulty('bending.water', 2);
            if (skillCheck('spirituality', 22) && skillCheck('bending.water', 21)) {
                updateStoryText("You arrive in time to stop Zhao's forces, ensuring the Moon Spirit remains unharmed. With its power intact, the Water Tribe regains its strength, pushing back against the Fire Nation assault.");
                updateSkillWithDifficulty('bending.spirit', 4);
                updateReputationWithDifficulty('waterTribe', 5);
                updateSkillWithDifficulty('wisdom', 3); // Wisdom increases
                updateSkillWithDifficulty('empathy', 2); // Empathy increases
            } else {
                updateStoryText("You fend off attackers, but Zhao slips past your defenses, grabbing the Moon Spirit in his hands. The water around you trembles as the balance begins to shift.");
                updateEnergyWithDifficulty(-40);
                updateSkillWithDifficulty('wisdom', -2); // Wisdom decreases
            }
            break;

        case 3:
            updateStoryText("You channel the power of the tides, aiming to disrupt Fire Nation reinforcements...");
            updateSkillWithDifficulty('wisdom', 3);
            updateSkillWithDifficulty('bending.water', 2);
            if (skillCheck('wisdom', 20) ) {
                updateStoryText("Your tidal control prevents more Fire Nation forces from reaching the battlefield, weakening their attack. But then you hear desperate cries—something is wrong at the Spirit Oasis.");
                updateReputationWithDifficulty('waterTribe', 4);
                updateSkillWithDifficulty('wisdom', 2); // Wisdom increases
                updateSkillWithDifficulty('leadership', 1); // Leadership increases
            } else {
                updateStoryText("Your attempt slows the enemy, but some ships break through, intensifying the battle. In the distance, Zhao makes his move against the Moon Spirit.");
                updateHealthWithDifficulty(-30);
                updateEnergyWithDifficulty(-50);
                updateSkillWithDifficulty('wisdom', -1); // Wisdom decreases
            }
            break;

        case 4:
            updateStoryText("You attempt to turn Fire Nation soldiers against their leaders...");
            updateSkillWithDifficulty('diplomacy', 3);
            updateSkillWithDifficulty('leadership', 2);
            if (skillCheck('diplomacy', 21) && skillCheck('leadership', 19)) {
                updateStoryText("Your words plant doubt in the hearts of the Fire Nation soldiers. Some hesitate, and a few even turn against their own. But before you can rally more, Zhao takes hold of the Moon Spirit, shifting the tides in his favor.");
                updateReputationWithDifficulty('fireNation', 3);
                updateSkillWithDifficulty('diplomacy', 4); // Diplomacy increases
                updateSkillWithDifficulty('empathy', 2); // Empathy increases
            } else {
                updateStoryText("The Fire Nation remains loyal to their leaders, dismissing your attempts to persuade them. As the battle rages on, Zhao's forces close in on the Spirit Oasis.");
                updateEnergyWithDifficulty(-40);
                updateReputationWithDifficulty('fireNation', -2);
                updateSkillWithDifficulty('diplomacy', -1); // Diplomacy decreases
            }
            break;
    }
    
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: () => { startWaterFinalChapter(); playVideo('waterCutscene17.mp4'); } }
        ]);
    }, 300);
}
// Water code end