import { startChapter4 } from './chapter4.js';
import { updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { updateHealth, updateSkill, updateReputation, addToInventory, addAlly, randomInt,  logGameState, addQuest } from './utilityFunctions.js';
import { skillCheck } from './gameMechanics.js';
import { items } from './items.js';
import { characters } from './characters.js';
import { gameState } from './gameState.js';
import { quests } from './quests.js';

export function startChapter3() {
    gameState.currentChapter = 3;
    displayChapter3();
}

function displayChapter3() {
    const chapter3Text = `
        <h2>Chapter 3: The Avatar Escapes</h2>
        <p>Despite your best efforts, the Avatar has eluded your grasp at the Southern Water Tribe. The chase leads you closer to the heart of the Earth Kingdom, where rumors of the Avatar's presence grow stronger. As you navigate the complexities of your mission, you must decide how to proceed, knowing that each choice could bring you closer to your goal or further from your honor.</p>
    `;
    updateStoryText(chapter3Text);
    updateChoices([
        { text: "Intensify the search with your crew", action: () => handleChapter3Choice(1) },
        { text: "Consult Uncle Iroh for advice", action: () => handleChapter3Choice(2) },
        { text: "Set a trap using false information", action: () => handleChapter3Choice(3) },
        { text: "Seek aid from local Earth Kingdom contacts", action: () => handleChapter3Choice(4) }
    ]);
}

function handleChapter3Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("Determined not to fail again, you rally your crew, intensifying the search for the Avatar across the Earth Kingdom.");
            updateSkill('leadership', 2);
            if (skillCheck('leadership', 12)) {
                updateStoryText("Your efforts lead to a crucial sighting of the Avatar. The chase is on, reigniting your hope of capturing him.");
            } else {
                updateStoryText("Despite your determination, the Avatar remains elusive, a reminder of the challenges that lie ahead.");
                updateHealth(-5);
            }
            break;
        case 2:
            updateStoryText("Seeking wisdom, you consult Uncle Iroh, hoping his experience and insight will guide you to a successful strategy.");
            updateSkill('wisdom', 2);
            if (skillCheck('wisdom', 12)) {
                updateStoryText("Iroh's advice enlightens you, offering a new perspective on your quest and how to approach the Avatar's capture strategically.");
            } else {
                updateStoryText("While comforting, Iroh's words don't seem to bring you closer to capturing the Avatar, leaving you to ponder your next move.");
            }
            break;
        case 3:
            updateStoryText("You decide to spread false information about your whereabouts, hoping to lure the Avatar into a trap.");
            updateSkill('cunning', 2);
            if (skillCheck('cunning', 13)) {
                updateStoryText("The ruse works better than expected, leading to an unexpected encounter with the Avatar's allies. Though the Avatar escapes, you gain valuable intelligence.");
            } else {
                updateStoryText("The Avatar does not take the bait, and you're left questioning the effectiveness of your tactics.");
                updateHealth(-10);
            }
            break;
        case 4:
            updateStoryText("Believing in the power of alliances, you seek aid from your contacts within the Earth Kingdom, hoping they can offer leads.");
            updateSkill('diplomacy', 2);
            if (skillCheck('diplomacy', 14)) {
                updateStoryText("Your contacts prove useful, providing information that narrows down the Avatar's possible locations.");
            } else {
                updateStoryText("Your attempts to gather information from the Earth Kingdom contacts yield little, as trust proves difficult to earn.");
                updateReputation('earthKingdom', -1);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter4 }
        ]);
    }, 300);

    logGameState("End of Chapter 3");
   
}