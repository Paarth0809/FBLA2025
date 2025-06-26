import { updateStoryText, updateChoices, } from '../gameFunctions/uiUpdateFunctions.js';
import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { endGame } from '../gameFunctions/game.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js'; 

//Fire code start
export function startFireFinalChapter() {
    gameState.currentChapter = 17;
    displayFireFinalChapter();
}

function displayFireFinalChapter() {
    const finalChapterText = `
        <h2>Final Chapter: The Last Battle</h2>
        <p>With Sozin's Comet granting unprecedented power, the final battle against Fire Lord Ozai looms. As Zuko, you stand ready with your allies, 
        prepared to end the tyranny that has plagued your nation and the world. It's a moment that will define the future of the Fire Nation and the world at large.</p>
        <p>As the battle unfolds, your thoughts drift to the journey that brought you here—the struggles, the lessons learned, and the bonds formed. 
        Victory today means not just the end of a war, but the beginning of a new chapter for the Fire Nation, one of peace and healing.</p>
        <p>In the aftermath, as you ascend to the throne as Fire Lord, you vow to lead with compassion and to work tirelessly to rebuild what was lost, 
        to mend the wounds of the world, and to forge a path of peace and prosperity for all nations.</p>
    `;
    updateStoryText(finalChapterText);
    updateChoices([
        { text: "Begin the work of rebuilding", action: () => handleFireFinalChapterChoice(1) }
    ]);
}

function handleFireFinalChapterChoice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("As the new Fire Lord, you initiate efforts to repair the damages of war, negotiate peace treaties, and foster unity among nations. " +
            "Your actions lay the foundation for a lasting peace and a brighter future for the next generation.");
            updateChoices([
                { text: "See Results!", action: () => { gameState.currentChapter = 0; endGame(); } }, // Restarts the game from the beginning action: startFinalChapter }
            ]);
            
            break;
    }
   
}
//Fire code end