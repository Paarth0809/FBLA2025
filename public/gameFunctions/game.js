import { updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { gameState } from './gameState.js'; 
import { updateCharacterInfo } from './uiUpdateFunctions.js';
import { startChooseElement } from './chooseElement.js';




// Game Logic
export function startGame() {
    
    updateCharacterInfo();
    startChooseElement();
}


export function generateReport() {
   
    const includeHealth = document.getElementById('includeHealth').checked;
    const includeEnergy = document.getElementById('includeEnergy').checked;
    const includeSkills = document.getElementById('includeSkills').checked;
    const includeReputation = document.getElementById('includeReputation').checked;

    let reportText = ` <button id="reportButton">Generate Report</button>

            <label><input type="checkbox" id="includeHealth" > Include Health</label>
            <label><input type="checkbox" id="includeEnergy" > Include Energy</label>
            <label><input type="checkbox" id="includeSkills" > Include Skills</label>
            <label><input type="checkbox" id="includeReputation" > Include Reputation</label>`;
   
     reportText += `<p>Final Stats:<br>`;

    if (includeHealth) {
        reportText += `Health: ${gameState.health}<br>`;
    }
    if (includeEnergy) {
        reportText += `Energy: ${gameState.energy}<br>`;
    }
    if (includeSkills) {
        reportText += `Wisdom: ${gameState.skills.wisdom}<br>
                       Spirituality: ${gameState.skills.spirituality}<br>
                       Combat: ${gameState.skills.combat}<br>
                       Stealth: ${gameState.skills.stealth}<br>
                       Diplomacy: ${gameState.skills.diplomacy}<br>
                       Leadership: ${gameState.skills.leadership}<br>
                       Empathy: ${gameState.skills.empathy}<br>`;
    }
    if (includeReputation) {
        reportText += `Reputation:<br>
                       - Fire Nation: ${gameState.reputation.fireNation}<br>
                       - Earth Kingdom: ${gameState.reputation.earthKingdom}<br>
                       - Water Tribe: ${gameState.reputation.waterTribe}<br>
                       - Air Nomads: ${gameState.reputation.airNomads}</p>`;
    }

    reportText += "<p>Thank you for playing Avatar: The Last Airbender - Journey of Destiny!</p>";

    return reportText;
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
    
    //Sets choices to none (end of game)
    document.getElementById('choices').style.display = 'none';
 
    const reportContainer = document.getElementById('reportContainer');
reportContainer.style.display = 'block';  // Make the report container visible.
const reportButton = document.getElementById('reportButton');
reportButton.style.display = 'block';  // Make the reportButton visible.

updateStoryText(endingText);
   
   
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