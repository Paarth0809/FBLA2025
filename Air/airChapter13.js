import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateHealth, updateEnergy, updateSkill, updateReputation, addAlly } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';
import { gameState } from '../gameState.js';

import { characters } from '../characters.js';
import { startAirChapter14  } from './airChapter14.js';


// Chapter 13: The Invasion and the Betrayal
export function startOpt1AirChapter13() {
    gameState.currentChapter = 13;
    displayOpt1AirChapter13();
}

export function startOpt2AirChapter13() {
    gameState.currentChapter = 13;
    displayOpt2AirChapter13();
}

function displayOpt1AirChapter13() {
    const chapter13Text = `
        <h2>Chapter 13: The Invasion and the Betrayal</h2>
        <p>With the avatar state mastered and the eclipse beginning, you prepare for the invasion of the Fire Nation. You leading a daring invasion into the Fire Nation capital. Your group fights valiantly, using the eclipse to neutralize firebending temporarily.</p>
        <p>However, upon infiltrating the palace, you discover that Fire Lord Ozai has evacuated ahead of time, having learned of your plans. Instead, Azula awaits, orchestrating a counterattack.</p>
        <p>You now face a critical decision!</p>
    `;
    updateStoryText(chapter13Text);
    updateChoices([
        { text: "Confront Azula and buy time for your group", action: () => handleOpt1AirChapter13Choice(1) },
        { text: "Regroup with your allies to strategize a safe retreat", action: () => handleOpt1AirChapter13Choice(2) },
        { text: "Focus on ensuring the safety of civilians in your group", action: () => handleOpt1AirChapter13Choice(3) },
        { text: "Set a trap to delay Azula's forces during the retreat", action: () => handleOpt1AirChapter13Choice(4) }
    ]);
}

function displayOpt2AirChapter13() {
    const chapter13Text = `
        <h2>Chapter 13: The Invasion and the Betrayal</h2>
        <p>The invasion begins as planned, but the moment you step into the Fire Nation's palace, you realize you should have mastered the Avatar state. Theres still a way to flee safely.</p>
        <p>With the eclipse ending soon, every second counts. You must make choices that balance bravery, strategy, and survival.</p>
    `;
    updateStoryText(chapter13Text);
    updateChoices([
        { text: "Talk to the generals and the army about plans for just you and the team to flee on Appa leaving the rest for imprisonment", action: () => handleOpt2AirChapter13Choice(1) },
        { text: "Regroup with your allies to strategize a safe retreat through seizing the Fire Nation submarines", action: () => handleOpt2AirChapter13Choice(2) },
        { text: "Hide the army underground to keep the Fire Nation forces at bay", action: () => handleOpt2AirChapter13Choice(3) },
        { text: "Set a trap to delay the Fire Nation forces during the retreat", action: () => handleOpt2AirChapter13Choice(4) }
    ]);
}

function handleOpt1AirChapter13Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to confront Azula, creating a diversion to buy time for your allies to regroup.");
            updateSkill('combat', 3);
            if (skillCheck('combat', 16)) {
                updateReputation(10);
                updateStoryText("You successfully hold off Azula, matching her cunning with your own skill. This allows your allies valuable time to retreat safely.");
            } else {
                updateHealth(-15);
                updateStoryText("Azula's speed and precision prove overwhelming. Though you delay her, you sustain injuries and are forced to retreat hastily.");
            }
            break;
        case 2:
            updateStoryText("You regroup with your allies to reassess the situation and plan a coordinated retreat.");
            updateSkill('leadership', 3);
            if (skillCheck('leadership', 15)) {
                updateStoryText("Your leadership rallies the group, and together you execute a well-coordinated retreat, minimizing casualties.");
            } else {
                updateReputation(-5);
                updateStoryText("Despite your efforts, panic spreads among the group, making the retreat chaotic and costly.");
            }
            break;
        case 3:
            updateStoryText("You focus on protecting the civilians and ensuring their safety during the retreat.");
            updateSkill('diplomacy', 2);
            if (skillCheck('diplomacy', 14)) {

                updateStoryText("Your efforts save countless lives, as you lead the civilians to safety while keeping the Fire Nation forces at bay.");
            } else {
                updateEnergy(-10);
                updateStoryText("The task proves overwhelming, and while you save many, some civilians are caught in the chaos of the retreat.");
            }
            break;
        case 4:
            updateStoryText("You set a trap to slow down Azula's forces, using your surroundings to your advantage.");
            updateSkill('strategy', 3);
            if (skillCheck('strategy', 15)) {
                updateStoryText("The trap works perfectly, buying your group valuable time to retreat safely while Azula's forces struggle to recover.");
            } else {
                updateHealth(-10);
                updateStoryText("The trap delays Azula only briefly, and you sustain injuries while setting it up under pressure.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startAirChapter14 }
        ]);
    }, 300);
}

function handleOpt2AirChapter13Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("After a difficult discussion, you decide that the best chance of continuing the fight against the Fire Nation lies with you and your closest team. You plan to flee on Appa, leaving the rest of the army to face imprisonment.");
            if (skillCheck('leadership', 10)) {
                updateReputation(-10); // A difficult decision that might tarnish your reputation
                updateStoryText("The team escapes, but the decision weighs heavily on your conscience. The army is left behind, captured by the Fire Nation.");
            } else {
                updateReputation(-20); // Failure to lead effectively
                updateStoryText("Your attempt to flee is noticed, leading to chaos among the ranks. The retreat fails, and many are captured.");
            }
            break;
        case 2:
            updateStoryText("You decide to regroup with your allies and strategize a safe retreat through seizing the Fire Nation's submarines. This risky plan could secure a large-scale escape without leaving anyone behind.");
            if (skillCheck('strategy', 14)) {
                updateReputation(10); // Successfully leading a large-scale retreat boosts your reputation
                updateStoryText("Your plan succeeds brilliantly. You manage to seize several submarines, allowing a significant portion of the army to escape undetected.");
            } else {
                updateReputation(-5); // The plan's failure leads to negative consequences
                updateStoryText("The attempt to seize the submarines is thwarted by the Fire Nation's defenses, resulting in a frantic and disorganized retreat.");
            }
            break;
            case 3:
                updateStoryText("To keep the Fire Nation forces at bay, you decide to hide the army underground, utilizing the Earthbenders among your ranks. This defensive stance could provide the cover needed for a stealthy retreat.");
                // Check if Toph is an ally
                if (gameState.allies.includes('Toph') || skillCheck('earthbending', 12)) {
                    updateReputation(5); // Successfully using bending to protect the army enhances your reputation
                    let successText = "With Toph's unparalleled earthbending skills, ";
                    if (!gameState.allies.includes('Toph')) {
                        successText = "The Earthbenders, inspired by your leadership, ";
                    }
                    successText += "create a vast network of tunnels, hiding the army and allowing for a strategic withdrawal. The Fire Nation's forces are effectively kept at bay.";
                    updateStoryText(successText);
                } else {
                    updateReputation(-10); // Failure to effectively use bending skills results in negative outcomes
                    updateStoryText("The attempt to hide underground is partially successful, but Fire Nation troops manage to breach several tunnels, causing panic and casualties.");
                }
                break;
        case 4:
            updateStoryText("In a bid to cover your retreat, you decide to set a trap for the Fire Nation forces. A well-executed trap could slow them down significantly, giving your forces more time to escape.");
            if (skillCheck('tactics', 13)) {
                updateReputation(5); // Successfully delaying enemy forces boosts your reputation
                updateStoryText("Your trap works perfectly, causing confusion and disarray among the Fire Nation ranks. This buys your forces precious time to retreat.");
            } else {
                updateReputation(-5); // A failed trap can lead to dire consequences
                updateStoryText("The trap is discovered and disarmed by the Fire Nation, who then press their attack with renewed vigor, hastening your forces' retreat.");
            }
            break;
    }

    setTimeout(() => {
        updateChoices([
            // Example follow-up action; adjust based on your narrative progression
            { text: "Continue", action: startAirChapter14 }
        ]);
    }, 300);
}