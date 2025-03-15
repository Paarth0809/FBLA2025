import { startOpt1WaterChapter9, startOpt2WaterChapter9 } from './waterChapter9.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateHealth, updateEnergy, updateSkill, updateReputation, addAlly, } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';

import { characters } from '../characters.js';
import { gameState } from '../gameState.js';

export function startWaterChapter8() {
    logGameState("Inside startWaterChapter8");
    gameState.currentChapter = 8;
    displayWaterChapter8();
}

function displayWaterChapter8() {
    const chapter8Text = `
        <h2>Chapter 8: Ripples of Change</h2>
        <p>Suddenly, news spread that the Fire Nation attacked again, and in the aftermath of the Fire Nation's siege, now the Northern Water Tribe is left to rebuild. You start heading to the Northern Tribe to help, but the scars of battle run deep, but so does the will to persevere. With Chief Arnook overseeing the recovery, a debate brews among the people—should the tribe return to isolation, or forge a new path of unity with the world?</p>
    `;
    updateStoryText(chapter8Text);
    updateChoices([
        { text: "Support Chief Arnook in preserving tradition", action: () => handleWaterChapter8Choice(1) },
        { text: "Advocate for change and unity with other nations", action: () => handleWaterChapter8Choice(2) },
    ]);
}

function handleWaterChapter8Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You stand with Chief Arnook and the elders, emphasizing the importance of cultural heritage and self-reliance. The past has shown the dangers of outside interference, and you argue that the Water Tribe's strength lies in its traditions.");
            updateSkill('wisdom', 3); // Cultural preservation
            updateSkill('leadership', 2); // Supporting authority
            if (skillCheck('diplomacy', 14)) { // Changed from wisdom
                updateHealth(5);
                updateStoryText("Your words resonate, reinforcing a sense of unity among the people. The tribe commits to preserving its ways while cautiously rebuilding.");
                updateSkill('empathy', 1); // Unified people
            } else {
                updateHealth(-5);
                updateStoryText("Despite your efforts, some remain unconvinced. The younger generation, inspired by the Avatar's journey, questions whether isolation is the right path.");
                updateSkill('leadership', -1); // Lost influence
            }
            setTimeout(() => {
                updateChoices([
                    { text: "Continue", action: startOpt1WaterChapter9 }
                ]);
            }, 300);
            break;
     
        case 2:
            updateStoryText("You argue that the world is changing, and the Water Tribe must change with it. The Avatar's presence has proven that unity between nations is not only possible but necessary for survival.");
            updateSkill('diplomacy', 3); // International relations
            updateSkill('leadership', 2); // Driving progress
            if (skillCheck('wisdom', 16)) { // Changed from persuasion
                updateReputation(5);
                updateStoryText("Your words inspire a movement among the people. Many agree that the time for isolation is over, and plans begin to form for alliances beyond the ice walls.");
                updateSkill('combat', 1); // Strategic alliances
            } else {
                updateHealth(-10);
                updateStoryText("The elders resist, fearing the loss of tradition. Though some support your vision, the road ahead will be difficult.");
                updateSkill('diplomacy', -2); // Resistance faced
            }
            setTimeout(() => {
                updateChoices([
                    { text: "Continue", action: startOpt2WaterChapter9 }
                ]);
            }, 300);
            break;
    }
} 
// Water Code end