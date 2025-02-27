import { updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { gameState } from './gameState.js'; 
import { updateCharacterInfo } from './uiUpdateFunctions.js';
import { startChooseElement } from './chooseElement.js';




// Game Logic
export function startGame() {
    gameState.playerName = prompt("Enter your name:");
    updateCharacterInfo();
    startChooseElement();
}




export function endGame(ending) {
    let endingText = "<h2>The End</h2>";
    switch (ending) {
        case "Victory through Strength":
            endingText += "<p>Through sheer power and determination, you've defeated Fire Lord Ozai and ended the Hundred Year War. The world begins the long process of healing and rebuilding. Your legend will be remembered for generations to come.</p>";
            break;
        case "A World in Flames":
            endingText += "<p>Despite your best efforts, Ozai's power proved too great. The world has fallen under the dominion of the Fire Nation. Hope remains that one day, a new hero will rise to challenge the Phoenix King's rule.</p>";
            break;
        case "A New Harmony":
            endingText += "<p>By removing Ozai's bending, you've ended the war without further bloodshed. The world enters a new age of peace and balance. Your wisdom and mercy become the foundation for a brighter future.</p>";
            break;
        case "Spirit Broken":
            endingText += "<p>The energybending technique backfired, leaving you vulnerable. Ozai seized this opportunity to claim victory. The world has fallen into darkness, with the hope of the Avatar extinguished.</p>";
            break;
        case "Redemption's Light":
            endingText += "<p>Against all odds, you've redeemed Ozai. This unexpected turn of events leads to a peaceful transition of power. The world marvels at the power of compassion and the possibility of change.</p>";
            break;
        case "Mercy's Folly":
            endingText += "<p>Your attempt at redemption failed, and Ozai's ambition has consumed the world. The consequences of your mercy will be felt for generations to come.</p>";
            break;
        case "A World Reborn":
            endingText += "<p>Your sacrifice has reshaped the world. Without bending, a new era of true equality begins. The challenges ahead are many, but for the first time, all people face them on equal footing.</p>";
            break;
        case "A Dream Shattered":
            endingText += "<p>Your ambitious attempt to reshape the world has failed, leaving you powerless. Ozai's reign continues unchallenged, and the dream of a world without bending fades into legend.</p>";
            break;
    }
    endingText += `<p>Final Stats:<br>
                       Health: ${gameState.health}<br>
                       Energy: ${gameState.energy}<br>
                       Reputation:<br>
                       - Fire Nation: ${gameState.reputation.fireNation}<br>
                       - Earth Kingdom: ${gameState.reputation.earthKingdom}<br>
                       - Water Tribe: ${gameState.reputation.waterTribe}<br>
                       - Air Nomads: ${gameState.reputation.airNomads}</p>`;
    endingText += "<p>Thank you for playing Avatar: The Last Airbender - Journey of Destiny!</p>";
    

    updateStoryText(endingText);
    // Hide choices as the game has ended
    document.getElementById('choices').style.display = 'none';
} 



export function restartGame() {
    // Reset game state
    gameState = {
        playerName: "",
        currentChapter: 0,
        inventory: [],
        allies: [],
        reputation: {
            fireNation: 0,
            earthKingdom: 0,
            waterTribe: 0,
            airNomads: 0
        },
        skills: {
            combat: 0,
            stealth: 0,
            diplomacy: 0,
            bending: {
                fire: 0,
                water: 0,
                earth: 0,
                air: 0,
                spirit: 0
            }
        },
        health: 100,
        energy: 100,
        gold: 50,
        questLog: [],
        completedQuests: [],
        currentLocation: "Southern Water Tribe",
        daysPassed: 0
    };

    // Show choices again
    document.getElementById('choices').style.display = 'block';

    // Start the game from the beginning
    startGame();
}