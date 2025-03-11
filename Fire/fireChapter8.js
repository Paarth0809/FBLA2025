import { startOpt1FireChapter9, startOpt2FireChapter9 } from './fireChapter9.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateHealth, updateEnergy, updateSkill, updateReputation, addToInventory, addAlly, } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';

import { characters } from '../characters.js';
import { gameState } from '../gameState.js';

//Fire code start
export function startFireChapter8() {
    ("Inside startFireChapter8");
    gameState.currentChapter = 8;
    displayFireChapter8();
}
 
function displayFireChapter8() {
    ("displayFireChapter8");
    const chapter4Text = `
        <h2>Chapter 8: The Storm</h2>
        <p>As a fierce storm approaches, you find yourself reflecting on the events that led to your banishment. The confrontation at the war meeting, your refusal to participate in a plan that would sacrifice innocent lives, and the Agni Kai that followed... all culminating in your father's decree of banishment until you capture the Avatar. This storm stirs within you a turmoil as powerful as the one raging in the skies.</p>
    `;
    updateStoryText(chapter4Text);
    updateChoices([
        { text: "Reflect on your past mistakes and understand uncle Iroh's advice", action: () => handleFireChapter8Choice(1) },
        { text: "Reaffirm your vow to capture the Avatar", action: () => handleFireChapter8Choice(2) },
    ]);
}


function handleFireChapter8Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(" One night, you reflect on the events that led you to your banishment. Suddenly you have a vison of restoring balance with the avatar, and realize, that you can choose your own destiny");
            updateSkill('wisdom', 2);
            if (skillCheck('wisdom', 10)) {
                updateHealth(5);  // Successful introspection improves mental resilience.
                updateStoryText("This moment of introspection not only changes your perspective but also decide to restore balance with the avatars team, slightly healing your emotional wounds.");
            } else {
                updateHealth(-5);  // Unsuccessful introspection leads to frustration and stress.
                updateStoryText("One night you fall very sick. The reflection brings more turmoil than clarity. This has a toll on your health, but a few weeks later after your recovery you decide to restore balance with the avatars team.");
            }
            setTimeout(() => {
                updateChoices([
                    { text: "Continue", action: startOpt1FireChapter9 }
                ]);
            }, 300);
            break;
     
        case 2:
            updateStoryText("Amidst the storm, you reaffirm your vow to capture the Avatar, believing that it is the only way to regain your honor and return home.");
            updateSkill('wisdom', 2);
            if (skillCheck('wisdom', 15)) {
                updateEnergy(+5);  // Reaffirming your vow strengthens your resolve and sparks motivation.
                updateStoryText("Your determination is unwavering, and you continue to persevere, determined to capture the Avatar and restore balance.");
            } else {
                updateHealth(-10);  // Doubt creeps in, weakening your resolve and causing distress.
                updateStoryText("As you attempt to reaffirm your vow, doubts cloud your mind, sapping your strength and resolve. Regardless you continue.");
            }
            setTimeout(() => {
                updateChoices([
                    { text: "Continue", action: startOpt2FireChapter9 }
                ]);
            }, 300);
            break;
            
    }
    
}
//Fire code end