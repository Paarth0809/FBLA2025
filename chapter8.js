import { startOpt1Chapter9, startOpt2Chapter9 } from './chapter9.js';
import { updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { updateHealth, updateEnergy, updateSkill, updateReputation, addToInventory, addAlly, logGameState } from './utilityFunctions.js';
import { skillCheck } from './gameMechanics.js';
import { items } from './items.js';
import { characters } from './characters.js';
import { gameState } from './gameState.js';


export function startChapter8() {
    logGameState("Inside startChapter8");
    gameState.currentChapter = 8;
    displayChapter8();
}
 
function displayChapter8() {
    logGameState("displayChapter8");
    const chapter4Text = `
        <h2>Chapter 8: The Storm</h2>
        <p>As a fierce storm approaches, you find yourself reflecting on the events that led to your banishment. The confrontation at the war meeting, your refusal to participate in a plan that would sacrifice innocent lives, and the Agni Kai that followed... all culminating in your father's decree of banishment until you capture the Avatar. This storm stirs within you a turmoil as powerful as the one raging in the skies.</p>
    `;
    updateStoryText(chapter4Text);
    updateChoices([
        { text: "Reflect on your past mistakes and understand uncle Iroh's advice", action: () => handleChapter8Choice(1) },
        { text: "Reaffirm your vow to capture the Avatar", action: () => handleChapter8Choice(2) },
    ]);
}


function handleChapter8Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(" One night, you reflect on the events that led you to your banishment. Suddenly you have a vison of restoring balance with the avatar, and realize, that you can choose your own destiny");
            updateSkill('introspection', 2);
            if (skillCheck('introspection', 10)) {
                updateHealth(5);  // Successful introspection improves mental resilience.
                updateStoryText("This moment of introspection not only changes your perspective but also decide to restore balance with the avatars team, slightly healing your emotional wounds.");
            } else {
                updateHealth(-5);  // Unsuccessful introspection leads to frustration and stress.
                updateStoryText("One night you fall very sick. The reflection brings more turmoil than clarity. This has a toll on your health, but a few weeks later after your recovery you decide to restore balance with the avatars team.");
            }
            setTimeout(() => {
                updateChoices([
                    { text: "Continue", action: startOpt1Chapter9 }
                ]);
            }, 300);
            break;
     
        case 2:
            updateStoryText("Amidst the storm, you reaffirm your vow to capture the Avatar, believing that it is the only way to regain your honor and return home.");
            updateSkill('determination', 2);
            if (skillCheck('determination', 15)) {
                updateEnergy(+5);  // Reaffirming your vow strengthens your resolve and sparks motivation.
                updateStoryText("Your determination is unwavering, and you continue to persevere, determined to capture the Avatar and restore balance.");
            } else {
                updateHealth(-10);  // Doubt creeps in, weakening your resolve and causing distress.
                updateStoryText("As you attempt to reaffirm your vow, doubts cloud your mind, sapping your strength and resolve. Regardless you continue.");
            }
            setTimeout(() => {
                updateChoices([
                    { text: "Continue", action: startOpt2Chapter9 }
                ]);
            }, 300);
            break;
            
    }
    
}