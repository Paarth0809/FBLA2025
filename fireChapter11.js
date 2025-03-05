import { startOpt1FireChapter12, startOpt2FireChapter12} from './fireChapter12.js';
import { updateStoryText, updateChoices  } from './uiUpdateFunctions.js';
import { updateSkill, addToInventory, addAlly, updateHealth, updateEnergy, updateReputation, randomInt } from './utilityFunctions.js';
import { skillCheck } from './gameMechanics.js';
import { characters } from './characters.js';
import { items } from './items.js';
import { gameState } from './gameState.js';

//Fire code start
export function startFireChapter11() {
    gameState.currentChapter = 11;
    displayFireChapter11();
}


function displayFireChapter11() {
    const chapter11Text = `
        <h2>Chapter 11: The Boiling Rock</h2>
        <p>Sokka learns that his father might be imprisoned at the Boiling Rock, the Fire Nation's 
        most secure prison. Despite the risks, he's determined to mount a rescue mission.  
        You must decide how to approach this dangerous endeavor.</p>
    `;
    updateStoryText(chapter11Text);
    updateChoices([
        { text: "Infiltrate the prison disguised as guards with Sokka", action: () => handleFireChapter11Choice(1) },
        { text: "Ask Sokka to continue the mission discretely and confront Azula at the prison", action: () => handleFireChapter11Choice(2) },
    ]);
}

function handleFireChapter11Choice(choice) {
    switch (choice) {
        case 1: // Infiltrate the prison as guards
            updateStoryText("You decide to infiltrate the prison disguised as guards. The disguise provides initial cover...");
            updateSkill('stealth', 2);
            updateSkill('deception', 2);
            if (skillCheck('stealth', 18) && skillCheck('deception', 17)) {
                updateStoryText("Your disguises work perfectly. You move undetected and manage to orchestrate a daring escape for Sokka's father, gaining a crucial ally.");
                addAlly(characters.hakoda);
                addToInventory(items.prisonMasterKey);
                updateReputation('fireNation', -2);
            } else {
                updateStoryText("Despite your preparations, your cover is blown. You're forced into a hasty retreat, narrowly escaping with your lives but failing the mission.");
                updateHealth(-30);
            }
            setTimeout(() => {
                updateChoices([
                    { text: "Continue", action: startOpt1FireChapter12 } 
                ]);
            }, 300);
            break;

        case 2: // Confront Azula at the prison
            updateStoryText("You stood up for the prisoners from the Warden in the past. You hope that will play a key role. Choosing to confront Azula directly, you step forward, drawing her attention and allowing your team to continue with the mission.");
            updateSkill('combat', 3);
            if (skillCheck('combat', 20)) {
                updateStoryText("The battle is fierce, and you end up hiding from your prodigy sister. Your sister can't seem to locate your whereabouts and leaves. You gain control over the prison, a strategic asset. You decide to stay behind to ensure its security, planning to rejoin your team later.");
                updateReputation('fireNation', 5); 
            } else {
                updateStoryText("Azula gets caught between the thousands of prisons in a riot and her ability to battle you is hindered. She can't fight all of them off, so she calls her escorts. You gain control over the prison, a strategic asset. You decide to stay behind to ensure its security, planning to rejoin your team later.");
                updateHealth(-50);
            }
            setTimeout(() => {
                updateChoices([
                    { text: "Continue", action: startOpt2FireChapter12 } 
                ]);
            }, 300);
            break;
    }
   
}
//Fire code end