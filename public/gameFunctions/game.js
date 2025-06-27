import { updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { gameState } from './gameState.js';
import { updateCharacterInfo } from './uiUpdateFunctions.js';
import { startChooseElement } from './chooseElement.js';
import { characters } from './characters.js';
import { startAirChapter1 } from '../Air/airChapter1.js';
import { startAirChapter2 } from '../Air/airChapter2.js';
import { startAirChapter3 } from '../Air/airChapter3.js';
import { startAirChapter4 } from '../Air/airChapter4.js';
import { startOpt1AirChapter5, startOpt2AirChapter5 } from '../Air/airChapter5.js';
import { startOpt1AirChapter6, startOpt2AirChapter6 } from '../Air/airChapter6.js';
import { startOpt1AirChapter7, startOpt2AirChapter7 } from '../Air/airChapter7.js';
import { startAirChapter8 } from '../Air/airChapter8.js';
import { startOpt1AirChapter9, startOpt2AirChapter9 } from '../Air/airChapter9.js';
import { startAirChapter10 } from '../Air/airChapter10.js';
import { startOpt1AirChapter11, startOpt2AirChapter11 } from '../Air/airChapter11.js';
import { startAirChapter12 } from '../Air/airChapter12.js';
import { startOpt1AirChapter13, startOpt2AirChapter13 } from '../Air/airChapter13.js';
import { startAirChapter14 } from '../Air/airChapter14.js';
import { startAirChapter15 } from '../Air/airChapter15.js';
import { startAirFinalChapter } from '../Air/airFinalChapter.js';

import { startEarthChapter1 } from '../Earth/earthChapter1.js';
import { startEarthChapter2 } from '../Earth/earthChapter2.js';
import { startEarthChapter3 } from '../Earth/earthChapter3.js';
import { startEarthChapter4 } from '../Earth/earthChapter4.js';
import { startEarthChapter5 } from '../Earth/earthChapter5.js';
import { startOpt1EarthChapter6, startOpt2EarthChapter6 } from '../Earth/earthChapter6.js';
import { startOpt1EarthChapter7, startOpt2EarthChapter7 } from '../Earth/earthChapter7.js';
import { startOpt1EarthChapter8, startOpt2EarthChapter8 } from '../Earth/earthChapter8.js';
import { startOpt1EarthChapter9, startOpt2EarthChapter9 } from '../Earth/earthChapter9.js';
import { startEarthChapter10 } from '../Earth/earthChapter10.js';
import { startEarthChapter11 } from '../Earth/earthChapter11.js';
import { startOpt1EarthChapter12, startOpt2EarthChapter12 } from '../Earth/earthChapter12.js';
import { startOpt1EarthChapter13, startOpt2EarthChapter13 } from '../Earth/earthChapter13.js';
import { startOpt1EarthChapter14, startOpt2EarthChapter14 } from '../Earth/earthChapter14.js';
import { startEarthChapter15 } from '../Earth/earthChapter15.js';
import { startChapter16 } from '../Earth/earthFinalChapter.js';

import { startFireChapter1 } from '../Fire/fireChapter1.js';
import { startFireChapter2 } from '../Fire/fireChapter2.js';
import { startFireChapter3 } from '../Fire/fireChapter3.js';
import { startFireChapter4 } from '../Fire/fireChapter4.js';
import { startOpt1FireChapter5, startOpt2FireChapter5 } from '../Fire/fireChapter5.js';
import { startOpt1FireChapter6, startOpt2FireChapter6 } from '../Fire/fireChapter6.js';
import { startOpt1FireChapter7, startOpt2FireChapter7 } from '../Fire/fireChapter7.js';
import { startFireChapter8 } from '../Fire/fireChapter8.js';
import { startOpt1FireChapter9, startOpt2FireChapter9 } from '../Fire/fireChapter9.js';
import { startOpt1FireChapter10, startOpt2FireChapter10 } from '../Fire/fireChapter10.js';
import { startFireChapter11 } from '../Fire/fireChapter11.js';
import { startOpt1FireChapter12, startOpt2FireChapter12 } from '../Fire/fireChapter12.js';
import { startFireChapter13 } from '../Fire/fireChapter13.js';
import { startFireChapter14 } from '../Fire/fireChapter14.js';
import { startFireChapter15 } from '../Fire/fireChapter15.js';
import { startFireFinalChapter } from '../Fire/fireFinalChapter.js';

import { startWaterChapter1 } from '../Water/waterChapter1.js';
import { startWaterChapter2 } from '../Water/waterChapter2.js';
import { startWaterChapter3 } from '../Water/waterChapter3.js';
import { startWaterChapter4 } from '../Water/waterChapter4.js';
import { startOpt1WaterChapter5, startOpt2WaterChapter5 } from '../Water/waterChapter5.js';
import { startOpt1WaterChapter6, startOpt2WaterChapter6 } from '../Water/waterChapter6.js';
import { startOpt1WaterChapter7, startOpt2WaterChapter7 } from '../Water/waterChapter7.js';
import { startWaterChapter8 } from '../Water/waterChapter8.js';
import { startOpt1WaterChapter9, startOpt2WaterChapter9 } from '../Water/waterChapter9.js';
import { startOpt1WaterChapter10, startOpt2WaterChapter10 } from '../Water/waterChapter10.js';
import { startWaterChapter11 } from '../Water/waterChapter11.js';
import { startWaterChapter12 } from '../Water/waterChapter12.js';
import { startWaterChapter13 } from '../Water/waterChapter13.js';
import { startWaterChapter14 } from '../Water/waterChapter14.js';
import { startWaterChapter15 } from '../Water/waterChapter15.js';
import { startWaterChapter16 } from '../Water/waterChapter16.js';
import { startWaterFinalChapter } from '../Water/waterFinalChapter.js';
import { playVideo } from './cutscenes.js';




// Game Logic
export function startGame() {

    // depending on the currentChapter of gameState and currentCharacter of gameState, we can
    // display the appropriate prologue or starting point of the game.
    // If the game is starting for the first time, we display the element choice screen.
    if (!gameState.currentCharacter) {
        startChooseElement();
        return;
    }

    updateStoryText(`Welcome back, ${gameState.currentCharacter}!`);

    if (gameState.currentChapter === 1) {
        // If the game has been started before, we can display the prologue of the character.
        updateStoryText(`Welcome back, ${gameState.currentCharacter}!`);

        if (gameState.currentCharacter === characters.aang.name) {
            startAirChapter1();
            playVideo('airCutscene1.mp4');
        } else if (gameState.currentCharacter === characters.katara.name) {
            startWaterChapter1();
        } else if (gameState.currentCharacter === characters.zuko.name) {
            startFireChapter1();
        } else if (gameState.currentCharacter === characters.toph.name) {
            startEarthChapter1();

        }

    } else if (gameState.currentChapter === 2) {

        if (gameState.currentCharacter === characters.katara.name) {
            startWaterChapter2();
        } else if (gameState.currentCharacter === characters.zuko.name) {
            startFireChapter2();
        } else if (gameState.currentCharacter === characters.toph.name) {
            startEarthChapter2();
        } else if (gameState.currentCharacter === characters.aang.name) {
            startAirChapter2();
            playVideo('airCutscene2.mp4');
        }

    } else if (gameState.currentChapter === 3) {
        if (gameState.currentCharacter === characters.katara.name) {
            startWaterChapter3();
        } else if (gameState.currentCharacter === characters.zuko.name) {
            startFireChapter3();
        } else if (gameState.currentCharacter === characters.toph.name) {
            startEarthChapter3();
        } else if (gameState.currentCharacter === characters.aang.name) {
            startAirChapter3();
            playVideo('airCutscene3.mp4');
        }

    } else if (gameState.currentChapter === 4) {
        if (gameState.currentCharacter === characters.katara.name) {
            startWaterChapter4();
        } else if (gameState.currentCharacter === characters.zuko.name) {
            startFireChapter4();
        } else if (gameState.currentCharacter === characters.toph.name) {
            startEarthChapter4();
        } else if (gameState.currentCharacter === characters.aang.name) {
            startAirChapter4();
            playVideo('airCutscene4.mp4');
        }

    } else if (gameState.currentChapter === 5) {
        if (gameState.currentCharacter === characters.katara.name) {
            startWaterChapter5();
        } else if (gameState.currentCharacter === characters.zuko.name) {
            startFireChapter5();
        } else if (gameState.currentCharacter === characters.toph.name) {
            startEarthChapter5();
        } else if (gameState.currentCharacter === characters.aang.name) {
            
            if (gameState.currentChapterOption === 1) {
                startOpt1AirChapter5();
                playVideo('airCutscene5.mp4');
            }
            else if (gameState.currentChapterOption === 2) {
                startOpt2AirChapter5();
                playVideo('airCutscene5.mp4');
            }
        }

    }
    else if (gameState.currentChapter === 6) {
        if (gameState.currentCharacter === characters.katara.name) {
            startWaterChapter6();
        } else if (gameState.currentCharacter === characters.zuko.name) {
            startFireChapter6();
        } else if (gameState.currentCharacter === characters.toph.name) {
            startEarthChapter6();
        } else if (gameState.currentCharacter === characters.aang.name) {
            
            if (gameState.currentChapterOption === 1) {
                startOpt1AirChapter6();
                playVideo('airCutscene6.mp4');
            }
            else if (gameState.currentChapterOption === 2) {
                startOpt2AirChapter6();
                playVideo('airCutscene6.mp4');
            }
        }

    }
    else if (gameState.currentChapter === 7) {
        if (gameState.currentCharacter === characters.katara.name) {
            startWaterChapter7();
        } else if (gameState.currentCharacter === characters.zuko.name) {
            startFireChapter7();
        } else if (gameState.currentCharacter === characters.toph.name) {
            startEarthChapter7();
        } else if (gameState.currentCharacter === characters.aang.name) {
            if (gameState.currentChapterOption === 1) {
                startOpt1AirChapter7();
                playVideo('airCutscene7.mp4');
            }
            else if (gameState.currentChapterOption === 2) {
                startOpt2AirChapter7();
                playVideo('airCutscene7.mp4');
            }
        }

    }
    else if (gameState.currentChapter === 8) {
        if (gameState.currentCharacter === characters.katara.name) {
            startWaterChapter8();
        } else if (gameState.currentCharacter === characters.zuko.name) {
            startFireChapter8();
        } else if (gameState.currentCharacter === characters.toph.name) {
            startEarthChapter8();
        } else if (gameState.currentCharacter === characters.aang.name) {
            startAirChapter8();
            playVideo('airCutscene8.mp4');
        }
        
    }
    else if (gameState.currentChapter === 9) {
        if (gameState.currentCharacter === characters.katara.name) {
            startWaterChapter9();
        } else if (gameState.currentCharacter === characters.zuko.name) {
            startFireChapter9();
        } else if (gameState.currentCharacter === characters.toph.name) {
            startEarthChapter9();
        } else if (gameState.currentCharacter === characters.aang.name) {
            if (gameState.currentChapterOption === 1) {
                startOpt1AirChapter9();
                playVideo('airCutscene9.mp4');
            }
            else if (gameState.currentChapterOption === 2) {
                startOpt2AirChapter9();
                playVideo('airCutscene9.mp4');
            }
        }
    }
    else if (gameState.currentChapter === 10) {
        if (gameState.currentCharacter === characters.katara.name) {
            startWaterChapter10();
        } else if (gameState.currentCharacter === characters.zuko.name) {
            startFireChapter10();
        } else if (gameState.currentCharacter === characters.toph.name) {
            startEarthChapter10();
        } else if (gameState.currentCharacter === characters.aang.name) {
            startAirChapter10();
        }
    } else if (gameState.currentChapter === 11) {
        if (gameState.currentCharacter === characters.katara.name) {
            startWaterChapter11();
        } else if (gameState.currentCharacter === characters.zuko.name) {
            startFireChapter11();
        } else if (gameState.currentCharacter === characters.toph.name) {
            startEarthChapter11();
        } else if (gameState.currentCharacter === characters.aang.name) {
           
            if (gameState.currentChapterOption === 1) {
                startOpt1AirChapter11();
                playVideo('airCutscene11.mp4');
            }
            else if (gameState.currentChapterOption === 2) {
                startOpt2AirChapter11();
                playVideo('airCutscene11.mp4');
            }
        }
    }
    else if (gameState.currentChapter === 12) {
        if (gameState.currentCharacter === characters.katara.name) {
            startWaterChapter12();
        } else if (gameState.currentCharacter === characters.zuko.name) {
            startFireChapter12();
        } else if (gameState.currentCharacter === characters.toph.name) {
            startEarthChapter12();
        } else if (gameState.currentCharacter === characters.aang.name) {
            startAirChapter12();
        }
    }
    else if (gameState.currentChapter === 13) {
        if (gameState.currentCharacter === characters.katara.name) {
            startWaterChapter13();
        } else if (gameState.currentCharacter === characters.zuko.name) {
            startFireChapter13();
        } else if (gameState.currentCharacter === characters.toph.name) {
            startEarthChapter13();
        } else if (gameState.currentCharacter === characters.aang.name) {
            if (gameState.currentChapterOption === 1) {
                startOpt1AirChapter13();
                playVideo('airCutscene13.mp4');
            }
            else if (gameState.currentChapterOption === 2) {
                startOpt2AirChapter13();
                playVideo('airCutscene13.mp4');
            }
        }
    }
    else if (gameState.currentChapter === 14) {
        if (gameState.currentCharacter === characters.katara.name) {
            startWaterChapter14();
        } else if (gameState.currentCharacter === characters.zuko.name) {
            startFireChapter14();
        } else if (gameState.currentCharacter === characters.toph.name) {
            startEarthChapter14();
        } else if (gameState.currentCharacter === characters.aang.name) {
            startAirChapter14();
        }
    }
    else if (gameState.currentChapter === 15) {
        if (gameState.currentCharacter === characters.katara.name) {
            startWaterChapter15();
        } else if (gameState.currentCharacter === characters.zuko.name) {
            startFireChapter15();
        } else if (gameState.currentCharacter === characters.toph.name) {
            startEarthChapter15();
        } else if (gameState.currentCharacter === characters.aang.name) {
            startAirChapter15();
        }
    }
    else if (gameState.currentChapter === 16) {
        if (gameState.currentCharacter === characters.katara.name) {
            startWaterChapter16();
        } else if (gameState.currentCharacter === characters.zuko.name) {
            startFireFinalChapter();
        } else if (gameState.currentCharacter === characters.toph.name) {
            startEarthChapter16();
        } else if (gameState.currentCharacter === characters.aang.name) {
            startAirFinalChapter();
            playVideo('airCutscene16.mp4');
        }
    }
    else {
        updateStoryText("You have completed all chapters! Thank you for playing!");
        // Optionally, you can reset the game or provide options to restart or view the report.
        document.getElementById('choices').style.display = 'none'; // Hide choices at the end of the game
        const reportContainer = document.getElementById('reportContainer');
        reportContainer.style.display = 'block';  // Make the report container visible.
        const reportButton = document.getElementById('reportButton');
        reportButton.style.display = 'block';  // Make the reportButton visible.
    }


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