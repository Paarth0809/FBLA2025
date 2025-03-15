import { startOpt1FireChapter7, startOpt2FireChapter7 } from './fireChapter7.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateHealth, updateEnergy, updateSkill, updateReputation,  } from '../utilityFunctions.js';

import { gameState } from '../gameState.js';
import { randomInt } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';

//Fire code start
export function startOpt2FireChapter6() {
    gameState.currentChapter = 6;
    displayOpt2FireChapter6();
}

function displayOpt2FireChapter6() {
    const chapter6Text = `
        <h2>Chapter 6: The Northern Water Tribe</h2>
        <p>After you recover you decide to get back on track. You finally reach the Northern Water Tribe, where the Avatar seeks to master Waterbending. The tribe's formidable defenses and the natural barriers of ice and snow make your mission more difficult than ever. Yet, your resolve does not waver. As the Fire Nation prepares to lay siege, you plan your own covert operation to capture the Avatar, knowing this might be your last chance to regain your honor.</p>
    `;
    updateStoryText(chapter6Text);
    updateChoices([
        { text: "Infiltrate the city under the cover of night", action: () => handleOpt2FireChapter6Choice(1) },
        { text: "Challenge the Avatar to a duel", action: () => handleOpt2FireChapter6Choice(2) },
        { text: "Use the siege to your advantage", action: () => handleOpt2FireChapter6Choice(3) },
        { text: "Seek out allies within the tribe", action: () => handleOpt2FireChapter6Choice(4) }
    ]);
}

function handleOpt2FireChapter6Choice(choice) {
    switch (choice) {   
        case 1:
            updateStoryText("Using the chaos of the ongoing siege, you slip into the city unnoticed. The icy labyrinth of the Northern Water Tribe's capital challenges you, but your determination guides your steps.");
            updateSkill('stealth', 2);
            if (skillCheck('stealth', 12)) {
                updateHealth(5);
                updateStoryText("Your stealth allows you to navigate closer to the Avatar's known location without confrontation.");
            } else {
                updateHealth(-10);
                updateStoryText("Despite your best efforts, you encounter unexpected guards, leading to a skirmish that weakens you.");
            }
            break;
        case 2:
            updateStoryText("Fueled by desperation, you issue a challenge to the Avatar, hoping to settle the score once and for all in a duel of honor.");
            updateSkill('combat', 2);
            if (skillCheck('combat', 14)) {
                updateHealth(-5);
                updateStoryText("The duel is fierce, and though you fight valiantly, the Avatar escapes, leaving you to ponder the true meaning of honor.");
            } else {
                updateHealth(-20);
                updateStoryText("Overpowered and outmatched, you barely escape with your life, forcing you to retreat and recover.");
            }
            break;
        case 3:
            updateStoryText("As the Fire Nation's forces begin their attack, you find a way to use the siege's chaos to your advantage, aiming to capture the Avatar amidst the confusion.");
            updateSkill('combat', 2);
            if (skillCheck('combat', 13)) {
                updateHealth(0);
                updateStoryText("Your plan is sound, but the Avatar proves elusive once more, slipping away amid the battle's chaos.");
            } else {
                updateHealth(-15);
                updateStoryText("Your plan backfires, and you find yourself caught between Water Tribe defenders and your own nation's soldiers.");
            }
            break;
        case 4:
            updateStoryText("Understanding the value of allies, you seek to turn the tribe's members against the Avatar, using guile to weave a web of deceit.");
            updateSkill('diplomacy', 2);
            if (skillCheck('diplomacy', 12)) {
                updateHealth(5);
                updateStoryText("Though you find no allies, your efforts do not go completely wasted, as you gather valuable intelligence on the Avatar's whereabouts.");
            } else {
                updateHealth(-5);
                updateStoryText("Your attempts to sow discord only alienate you further, leaving you isolated in enemy territory.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startOpt2FireChapter7 }
        ]);
    }, 300);
}



export function startOpt1FireChapter6() {
    gameState.currentChapter = 6;
    displayOpt1FireChapter6();
}

function displayOpt1FireChapter6() {
    const chapter6Text = `
        <h2>Chapter 6: The Northern Water Tribe</h2>
        <p>After you recover you decide to get back on track. You finally reach the Northern Water Tribe, where the Avatar seeks to master Waterbending. The tribe's formidable defenses and the natural barriers of ice and snow make your mission more difficult than ever. Yet, your resolve does not waver. As the Fire Nation prepares to lay siege, you plan your own covert operation to capture the Avatar, knowing this might be your last chance to regain your honor.</p>
    `;
    updateStoryText(chapter6Text);
    updateChoices([
        { text: "Infiltrate the city under the cover of night", action: () => handleOpt1FireChapter6Choice(1) },
        { text: "Challenge the Avatar to a duel", action: () => handleOpt1FireChapter6Choice(2) },
        { text: "Use the siege to your advantage", action: () => handleOpt1FireChapter6Choice(3) },
        { text: "Seek out allies within the tribe", action: () => handleOpt1FireChapter6Choice(4) }
    ]);
}

function handleOpt1FireChapter6Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("Using the chaos of the ongoing siege, you slip into the city unnoticed. The icy labyrinth of the Northern Water Tribe's capital challenges you, but your determination guides your steps.");
            updateSkill('stealth', 2);
            if (skillCheck('stealth', 12)) {
                updateHealth(5);
                updateStoryText("Your stealth allows you to navigate closer to the Avatar's known location without confrontation.");
            } else {
                updateHealth(-10);
                updateStoryText("Despite your best efforts, you encounter unexpected guards, leading to a skirmish that weakens you.");
            }
            break;
        case 2:
            updateStoryText("Fueled by desperation, you issue a challenge to the Avatar, hoping to settle the score once and for all in a duel of honor.");
            updateSkill('combat', 2);
            if (skillCheck('combat', 14)) {
                updateHealth(-5);
                updateStoryText("The duel is fierce, and though you fight valiantly, the Avatar escapes, leaving you to ponder the true meaning of honor.");
            } else {
                updateHealth(-20);
                updateStoryText("Overpowered and outmatched, you barely escape with your life, forcing you to retreat and recover.");
            }
            break;
        case 3:
            updateStoryText("As the Fire Nation's forces begin their attack, you find a way to use the siege's chaos to your advantage, aiming to capture the Avatar amidst the confusion.");
            updateSkill('combat', 2);
            if (skillCheck('commbat', 13)) {
                updateHealth(0);
                updateStoryText("Your plan is sound, but the Avatar proves elusive once more, slipping away amid the battle's chaos.");
            } else {
                updateHealth(-15);
                updateStoryText("Your plan backfires, and you find yourself caught between Water Tribe defenders and your own nation's soldiers.");
            }
            break;
        case 4:
            updateStoryText("Understanding the value of allies, you seek to turn the tribe's members against the Avatar, using guile to weave a web of deceit.");
            updateSkill('diplomacy', 2);
            if (skillCheck('diplomacy', 12)) {
                updateHealth(5);
                updateStoryText("Though you find no allies, your efforts do not go completely wasted, as you gather valuable intelligence on the Avatar's whereabouts.");
            } else {
                updateHealth(-5);
                updateStoryText("Your attempts to sow discord only alienate you further, leaving you isolated in enemy territory.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startOpt1FireChapter7 }
        ]);
    }, 300);
}
//Fire code end