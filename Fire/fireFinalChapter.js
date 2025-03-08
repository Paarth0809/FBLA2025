import { updateStoryText, updateChoices, } from '../uiUpdateFunctions.js';
import { gameState } from '../gameState.js';
import { endGame } from '../game.js';
import { skillCheck } from '../gameMechanics.js'; 

//Fire code start
export function startFinalChapter() {
    gameState.currentChapter = 17;
    displayFinalChapter();
}

function displayFinalChapter() {
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
        { text: "Begin the work of rebuilding", action: () => handleFinalChapterChoice(1) }
    ]);
}

function handleFinalChapterChoice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("As the new Fire Lord, you initiate efforts to repair the damages of war, negotiate peace treaties, and foster unity among nations. " +
            "Your actions lay the foundation for a lasting peace and a brighter future for the next generation.");
            updateChoices([
                { text: "See Results!", action: () => { gameState.currentChapter = 0; endGame(); } }, // Restarts the game from the beginning action: startFinalChapter }
            ]);
            // Concluding the game, no further choices are provided here.
            // Ideally, this would lead to an epilogue or a closing ceremony in the game.
            break;
    }
    // This could trigger the end of the game sequence or an epilogue.
}
//Fire code end