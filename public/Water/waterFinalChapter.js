import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { endGame } from '../gameFunctions/game.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js';


// Water code start
export function startWaterFinalChapter() {
    gameState.currentChapter = 17;
    displayWaterFinalChapter();
}

function displayWaterFinalChapter() {
    const finalChapterText = `
        <h2>Final Chapter: The Healing Tides</h2>
        <p>Under the glow of the full moon, the battle for the Northern Water Tribe has ended. 
        The Fire Nation's forces have been pushed back, and the tides of war have shifted in favor of balance and peace.</p>
        
        <p>As the ocean calms, you stand among your people, reflecting on the trials that brought you here. 
        The spirits of water have guided you through adversity, teaching you that true strength lies not only in power, 
        but in adaptability, unity, and wisdom.</p>
        
        <p>Now, the world turns to the Water Tribe—not just as warriors, but as healers. 
        The time has come to rebuild, to mend what was broken, and to guide all nations toward a future of peace.</p>
    `;
    updateStoryText(finalChapterText);
    updateChoices([
        { text: "Begin the journey of healing and restoration", action: () => handleWaterFinalChapterChoice(1) }
    ]);
}

function handleWaterFinalChapterChoice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("With the war behind you, you dedicate yourself to restoring balance across the world. " +
            "Waterbenders use their gifts to heal both land and people, bridges are built between nations, and " +
            "the wisdom of the Water Tribe becomes a beacon of hope for all. The journey ahead is long, but with " +
            "your leadership and compassion, the world begins to heal.");
            
            // Skill updates for the final choice using updateSkillWithDifficulty
            updateSkillWithDifficulty('wisdom', 5); // Wisdom increases as the player reflects on their journey
            updateSkillWithDifficulty('empathy', 4); // Empathy increases as the player focuses on healing
            updateSkillWithDifficulty('leadership', 3); // Leadership increases as the player guides others
            updateSkillWithDifficulty('diplomacy', 3); // Diplomacy increases as the player builds bridges between nations
            updateSkillWithDifficulty('combat', -2); // Combat decreases as the focus shifts from war to peace
            updateSkillWithDifficulty('stealth', -1); // Stealth decreases as the player embraces openness and unity

            // End the game
            setTimeout(() => {
                endGame();
            }, 3000); // Delay the end of the game to allow the player to read the final text
            break;
    }
}
// Water code end