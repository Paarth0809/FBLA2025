import { startOpt1FireChapter6, startOpt2FireChapter6 } from './fireChapter6.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateHealth, updateEnergy, updateSkill, updateReputation, addAlly,  } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';

import { characters } from '../characters.js';
import { gameState } from '../gameState.js';

//Fire code start
export function startOpt1FireChapter5() {
    ("Inside startFireChapter5");
    gameState.currentChapter = 5;
    displayOpt1FireChapter5();
}

export function startOpt2FireChapter5() {
    ("Inside startFireChapter5");
    gameState.currentChapter = 5;
    displayOpt2FireChapter5();
}

function displayOpt1FireChapter5() {
    ("displayFireChapter5");
    const chapter5Text = `
        <h2>Chapter 5: The Storm</h2>
        <p>As a fierce storm approaches, you find yourself reflecting on the events that led to your banishment. The confrontation at the war meeting, your refusal to participate in a plan that would sacrifice innocent lives, and the Agni Kai that followed... all culminating in your father's decree of banishment until you capture the Avatar. This storm stirs within you a turmoil as powerful as the one raging in the skies.</p>
    `;
    updateStoryText(chapter5Text);
    updateChoices([
        { text: "Reflect on your past mistakes", action: () => handleOpt1FireChapter5Choice(1) },
        { text: "Reaffirm your vow to capture the Avatar", action: () => handleOpt1FireChapter5Choice(2) },
    ]);
}

function displayOpt2FireChapter5() {
    ("displayFireChapter5");
    const chapter5Text = `
        <h2>Chapter 5: Aftermath and Reflection</h2>
        <p> One night you here some noises while you were sleeping in your ship. You get up to investigate and you see a parrot. In th e past you had a banter with pirates. You see the bomb and realize the pirates has planted it. You only figure oout later that Zhao had ordered them to. The bomb explodes and you barley survive. Your ship in ruins and your health has tazem a serious toll.</p>
    `;
    updateStoryText(chapter5Text);
    updateChoices([
        { text: "Salvage what remains of the ship", action: () => handleOpt2FireChapter5Choice(1) },
        { text: "Rally your crew and seek shelter", action: () => handleOpt2FireChapter5Choice(2) },
        { text: "Pursue the pirates in retaliation", action: () => handleOpt2FireChapter5Choice(3) },
        { text: "Reflect on seeking the Avatar’s help", action: () => handleOpt2FireChapter5Choice(4) }
    ]);
}

function handleOpt2FireChapter5Choice(choice) {
    switch (choice) {
        case 1: // Salvage the ship
            updateStoryText("You and your crew work tirelessly to salvage what remains, hoping to make the ship seaworthy again.");
            if (skillCheck('leadership', 10)) {
                updateHealth(5);  // Successful leadership boosts morale and health.
                updateStoryText("Your leadership inspires the crew, and together, you manage to make significant repairs. The ship isn't as it was, but it will sail again.");
            } else {
                updateHealth(-5);  // Failure leads to further morale and health loss.
                updateStoryText("Despite your efforts, the damage is too extensive. The ship remains adrift, and morale sinks further.");
            }
            break;
        case 2: // Rally crew and seek shelter
            updateStoryText("Understanding the need for safety, you lead your crew to a nearby island for refuge.");
            if (skillCheck('survival', 8)) {
                updateSkill('leadership', 1);  // Successful survival and leadership.
                updateStoryText("On the island, you find resources to sustain you and begin planning your next move. The crew's spirits are lifted slightly by your effective leadership.");
            } else {
                updateHealth(-5);  // Failure to find adequate shelter or resources.
                updateStoryText("The island offers little respite, and the struggle to find shelter and food takes a toll on everyone.");
            }
            break;
        case 3: // Pursue the pirates
            updateStoryText("Driven by vengeance, you lead a contingent to track down the pirates.");
            updateSkill('combat', 3);
            if (skillCheck('combat', 12)) {
                updateReputation('fireNation', 2);  // Success in retaliation enhances reputation.
                updateStoryText("Your pursuit is successful. You catch the pirates off guard, reclaiming some of your stolen goods and restoring a portion of your crew's morale.");
            } else {
                updateHealth(-10);  // Failed retaliation worsens the situation.
                updateStoryText("The pirates are better prepared than anticipated. Your forces are repelled, and you suffer further losses.");
            }
            break;
        case 4: // Reflect on seeking the Avatar’s help
            updateStoryText("Realizing that the pursuit under Zhao's influence has only led to ruin, you decide it's time for a strategic shift. You need to reclaim your honor and power, but on your own terms. The path forward is uncertain, but the resolve to forge a new path is clear.");
            if (skillCheck('wisdom', 14)) {
                updateReputation('fireNation', -1);  // A controversial decision within your ranks.
                updateHealth(10);  // Emotional and physical rejuvenation from a newfound purpose.
                updateStoryText("Your decision to seek new allies and knowledge feels right. It's a first step towards not just reclaiming what was lost, but discovering a strength you hadn't realized was possible.");
            } else {
                updateHealth(-5);  // The idea is met with internal conflict and doubt.
                updateStoryText("Though the thought of allying with the Avatar lingers in your mind, you struggle with the implications and the potential backlash from your father and the Fire Nation.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startOpt2FireChapter6 } 
        ]);
    }, 300);
}

// do later
function handleOpt1FireChapter5Choice(choice) {
    switch (choice) {
        case 1: // Salvage the ship
            updateStoryText("You and your crew work tirelessly to salvage what remains, hoping to make the ship seaworthy again.");
            if (skillCheck('leadership', 10)) {
                updateHealth(5);  // Successful leadership boosts morale and health.
                updateStoryText("Your leadership inspires the crew, and together, you manage to make significant repairs. The ship isn't as it was, but it will sail again.");
            } else {
                updateHealth(-5);  // Failure leads to further morale and health loss.
                updateStoryText("Despite your efforts, the damage is too extensive. The ship remains adrift, and morale sinks further.");
            }
            break;
        case 2: // Rally crew and seek shelter
            updateStoryText("Understanding the need for safety, you lead your crew to a nearby island for refuge.");
            if (skillCheck('survival', 8)) {
                updateSkill('leadership', 1);  // Successful survival and leadership.
                updateStoryText("On the island, you find resources to sustain you and begin planning your next move. The crew's spirits are lifted slightly by your effective leadership.");
            } else {
                updateHealth(-5);  // Failure to find adequate shelter or resources.
                updateStoryText("The island offers little respite, and the struggle to find shelter and food takes a toll on everyone.");
            }
            break;
        case 3: // Pursue the pirates
            updateStoryText("Driven by vengeance, you lead a contingent to track down the pirates.");
            updateSkill('combat', 3);
            if (skillCheck('combat', 12)) {
                updateReputation('fireNation', 2);  // Success in retaliation enhances reputation.
                updateStoryText("Your pursuit is successful. You catch the pirates off guard, reclaiming some of your stolen goods and restoring a portion of your crew's morale.");
            } else {
                updateHealth(-10);  // Failed retaliation worsens the situation.
                updateStoryText("The pirates are better prepared than anticipated. Your forces are repelled, and you suffer further losses.");
            }
            break;
        case 4: // Reflect on seeking the Avatar’s help
            updateStoryText("Realizing that the pursuit under Zhao's influence has only led to ruin, you decide it's time for a strategic shift. You need to reclaim your honor and power, but on your own terms. The path forward is uncertain, but the resolve to forge a new path is clear.");
            if (skillCheck('wisdom', 14)) {
                updateReputation('fireNation', -1);  // A controversial decision within your ranks.
                updateHealth(10);  // Emotional and physical rejuvenation from a newfound purpose.
                updateStoryText("Your decision to seek new allies and knowledge feels right. It's a first step towards not just reclaiming what was lost, but discovering a strength you hadn't realized was possible.");
            } else {
                updateHealth(-5);  // The idea is met with internal conflict and doubt.
                updateStoryText("Though the thought of allying with the Avatar lingers in your mind, you struggle with the implications and the potential backlash from your father and the Fire Nation.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startOpt1FireChapter6 } 
        ]);
    }, 300);
}
//Fire code end