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
    logGameState("displayChapter4");
    const chapter4Text = `
        <h2>Chapter 4: The Storm</h2>
        <p>As a fierce storm approaches, you find yourself reflecting on the events that led to your banishment. The confrontation at the war meeting, your refusal to participate in a plan that would sacrifice innocent lives, and the Agni Kai that followed... all culminating in your father's decree of banishment until you capture the Avatar. This storm stirs within you a turmoil as powerful as the one raging in the skies.</p>
    `;
    updateStoryText(chapter4Text);
    updateChoices([
        { text: "Reflect on your past mistakes", action: () => handleChapter4Choice(1) },
        { text: "Focus on the lessons learned from Uncle Iroh", action: () => handleChapter4Choice(2) },
        { text: "Reaffirm your vow to capture the Avatar", action: () => handleChapter4Choice(3) },
        { text: "Contemplate the nature of honor and redemption", action: () => handleChapter4Choice(4) }
    ]);
}


function handleChapter4Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You take a moment to reflect on the mistakes you've made, understanding that acknowledging them is the first step towards not repeating them.");
            updateSkill('introspection', 2);
            if (skillCheck('introspection', 10)) {
                updateHealth(5);  // Successful introspection improves mental resilience.
                updateStoryText("This moment of introspection not only strengthens your resolve but also brings a sense of peace, slightly healing your wounds.");
            } else {
                updateHealth(-5);  // Unsuccessful introspection leads to frustration and stress.
                updateStoryText("Despite your efforts, the reflection brings more turmoil than clarity, slightly exacerbating your existing wounds.");
            }
            break;
        case 2:
            updateStoryText("You recall the lessons Uncle Iroh has taught you about patience, wisdom, and the true meaning of strength.");
            updateSkill('wisdom', 2);
            if (skillCheck('wisdom', 12)) {
                updateHealth(10);  // Wisdom brings not only clarity but also a significant sense of well-being.
                updateStoryText("Iroh's lessons resonate deeply, providing comfort and guidance that bolster your spirit and heal your body.");
            } else {
                updateHealth(-5);  // Struggling to fully grasp Iroh's teachings results in a sense of loss.
                updateStoryText("While you strive to grasp the depth of Iroh's teachings, the full understanding eludes you, causing a momentary lapse in your resolve.");
            }
            break;
        case 3:
            updateStoryText("Amidst the storm, you reaffirm your vow to capture the Avatar, believing that it is the only way to regain your honor and return home.");
            updateSkill('determination', 2);
            if (skillCheck('determination', 15)) {
                updateHealth(-5);  // Reaffirming your vow strengthens your resolve but the path remains perilous.
                updateStoryText("Your determination is unwavering, yet the path you've chosen wears on you, hinting at the challenges ahead.");
            } else {
                updateHealth(-10);  // Doubt creeps in, weakening your resolve and causing distress.
                updateStoryText("As you attempt to reaffirm your vow, doubts cloud your mind, sapping your strength and resolve.");
            }
            break;
        case 4:
            updateStoryText("You ponder the true nature of honor and whether redemption can be found in the path you have chosen.");
            updateSkill('philosophy', 2);
            if (skillCheck('philosophy', 13)) {
                updateHealth(5);  // Philosophical insight brings a sense of enlightenment and peace.
                updateStoryText("Your contemplation leads to a significant realization about your journey, offering a glimmer of hope and a slight healing of your spirit.");
            } else {
                updateHealth(-5);  // The philosophical struggle deepens your turmoil.
                updateStoryText("While you seek answers, the philosophical dilemmas only deepen your inner conflict, reflecting the turmoil in your spirit.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter5 }
        ]);
    }, 300);
}