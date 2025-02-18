import { startChapter5 } from './chapter5.js';
import { updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { updateHealth, updateEnergy, updateSkill, updateReputation, addToInventory, addAlly, logGameState } from './utilityFunctions.js';
import { skillCheck } from './gameMechanics.js';
import { items } from './items.js';
import { characters } from './characters.js';
import { gameState } from './gameState.js';


export function startChapter4() {
    logGameState("Inside startChapter4");
    gameState.currentChapter = 4;
    displayChapter4();
}

function displayChapter4() {
    logGameState("Displaying Chapter 4");
    const chapter4Text = `
        <h2>Chapter 4: The Fire Nation Prison Escape</h2>
        <p>Ren, Katara, Sokka, and Toph cross paths in a high-security Fire Nation prison. 
        The Avatar, now fully aware of his mission, infiltrates the prison to free them. 
        The escape plan is risky and requires careful coordination.</p>
    `;
    updateStoryText(chapter4Text);
    updateChoices([
        { text: "Attempt a full-scale breakout, rallying all prisoners", action: () => handleChapter4Choice(1) },
        { text: "Execute a stealth operation, sneaking out unnoticed", action: () => handleChapter4Choice(2) },
        { text: "Try to deceive the guards into letting you go", action: () => handleChapter4Choice(3) },
        { text: "Create a diversion to split the guards' attention", action: () => handleChapter4Choice(4) }
    ]);
}


function handleChapter4Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to attempt a full-scale breakout...");
            updateSkill('combat', 3);
            updateSkill('diplomacy', 1);
            if (skillCheck('combat', 18)) {
                updateStoryText("The prison erupts into chaos. Amidst the confusion, you and many others manage to escape.");
                updateReputation('fireNation', -4);
                addAlly(characters.suki);
            } else {
                updateStoryText("The breakout attempt fails. Guards quickly suppress the uprising, and security tightens.");
                updateHealth(-40);
                updateReputation('fireNation', -2);
            }
            break;
        case 2:
            updateStoryText("You opt for a stealth operation...");
            updateSkill('stealth', 3);
            if (skillCheck('stealth', 16)) {
                updateStoryText("Under the cover of night, you and your allies slip past the guards undetected.");
                addToInventory(items.prisonMap);
            } else {
                updateStoryText("Your stealth attempt is discovered. You manage to escape, but not without injury.");
                updateHealth(-20);
                updateReputation('fireNation', -1);
            }
            break;
        case 3:
            updateStoryText("You try to deceive the guards...");
            updateSkill('diplomacy', 3);
            if (skillCheck('diplomacy', 17)) {
                updateStoryText("Your clever ruse works. The guards unwittingly allow you and your allies to walk free.");
                addToInventory(items.guardUniform);
            } else {
                updateStoryText("The guards see through your deception. Your punishment is severe, but you're alive.");
                updateHealth(-30);
                updateEnergy(-30);
            }
            break;
        case 4:
            updateStoryText("You create a diversion to split the guards' attention...");
            updateSkill('stealth', 2);
            updateSkill('combat', 1);
            if (skillCheck('stealth', 15) && skillCheck('combat', 14)) {
                updateStoryText("Your diversion works perfectly. In the chaos, you and your allies make your escape.");
                addToInventory(items.smokeGrenade);
            } else {
                updateStoryText("The diversion partially succeeds. You escape, but not all of your allies make it out.");
                updateHealth(-15);
                updateReputation('fireNation', -2);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter5 }
        ]);
    }, 300);
}