import { updateStoryText, updateChoices, } from '../uiUpdateFunctions.js';
import { gameState } from '../gameState.js';
import { endGame } from '../game.js';
import { skillCheck } from '../gameMechanics.js'; 



export function startAirFinalChapter() {
    gameState.currentChapter = 17;
    displayAirFinalChapter();
}

function displayAirFinalChapter() {
    const finalAirChapterText = `
        <h2>Final Chapter: The World's Fate</h2>
        <p>The final moments of the conflict are upon you. The choices you've made and the allies 
        you've gathered have led to this crucial point. The fate of the entire world hangs in the 
        balance. How will you bring an end to this century-long war?</p>
    `;
    updateStoryText(finalAirChapterText);
    updateChoices([
        { text: "Defeat Ozai through combat, ending his threat once and for all", action: () => handleFinalAirChoice(1) },
        { text: "Use energybending to remove Ozai's bending abilities permanently", action: () => handleFinalAirChoice(2) },
        { text: "Attempt to redeem Ozai, appealing to his humanity", action: () => handleFinalAirChoice(3) },
        { text: "Sacrifice your own bending to create a world without bending powers", action: () => handleFinalAirChoice(4) }
    ]);
}

function handleFinalAirChoice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You choose to defeat Ozai through combat...");
            if (skillCheck('combat', 25) && gameState.reputation.earthKingdom > 5) {
                updateStoryText("In an epic final battle, you overcome Ozai, bringing an end to his reign of terror. The world celebrates its hard-won peace.");
                endGame("Victory through Strength");
            } else {
                updateStoryText("Despite your valiant efforts, Ozai proves too powerful. The world falls under the dominion of the Fire Nation.");
                endGame("A World in Flames");
            }
            break;
        case 2:
            updateStoryText("You attempt to use energybending on Ozai...");
            if (skillCheck('spirituality', 24)) {
                updateStoryText("In a breathtaking display of spiritual power, you strip Ozai of his bending. The war ends, ushering in a new era of balance.");
                endGame("A New Harmony");
            } else {
                updateStoryText("The energybending technique backfires, leaving you vulnerable. Ozai seizes the opportunity, and the world falls to darkness.");
                endGame("Spirit Broken");
            }
            break;
        case 3:
            updateStoryText("You try to redeem Ozai by appealing to his humanity...");
            if (skillCheck('diplomacy', 26) && gameState.reputation.fireNation > 0) {
                updateStoryText("Against all odds, your words reach Ozai's heart. He renounces his destructive path, marking the beginning of a peaceful transition.");
                endGame("Redemption's Light");
            } else {
                updateStoryText("Ozai is unmoved by your appeal. His ambition consumes him, and the world suffers the consequences of your misplaced mercy.");
                endGame("Mercy's Folly");
            }
            break;
        case 4:
            updateStoryText("You decide to sacrifice all bending to create a world without these powers...");
            if (skillCheck('spirituality', 27)) {
                updateStoryText("In a monumental act of sacrifice, you reshape the very fabric of the world. Bending ceases to exist, ushering in an era of true equality.");
                endGame("A World Reborn");
            } else {
                updateStoryText("The enormity of your task overwhelms you. The attempt fails, leaving you powerless as Ozai's reign of terror continues.");
                endGame("A Dream Shattered");
            }
            break;
    }
}

