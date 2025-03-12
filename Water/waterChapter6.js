import { startOpt1WaterChapter7, startOpt2WaterChapter7 } from './waterChapter7.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateHealth, updateEnergy, updateSkill, updateReputation, addAlly,  } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';

import { characters } from '../characters.js';
import { gameState } from '../gameState.js';

// Water code start
export function startOpt1WaterChapter6() {
    logGameState("Inside startWaterChapter6");
    gameState.currentChapter = 6;
    displayOpt1WaterChapter6();
}

export function startOpt2WaterChapter6() {
    logGameState("Inside startWaterChapter6");
    gameState.currentChapter = 6;
    displayOpt2WaterChapter6();
}

function displayOpt1WaterChapter6() {
    logGameState("displayWaterChapter6");
    const chapter6Text = `
        <h2>Chapter 6: The Spirit's Test</h2>
        <p>As your small vessel glides over the moonlit waves, the glow of the Northern Lights flickers above. The spirits have been restless, and you feel their presence guiding you forward. The pull of an unseen force tugs at your very soul, urging you toward an island veiled in mist. What lies ahead is more than just a test of strength—it is a test of your very essence.</p>
    `;
    updateStoryText(chapter6Text);
    updateChoices([
        { text: "Step onto the island and embrace the spirits' challenge", action: () => handleOpt1WaterChapter6Choice(1) },
        { text: "Turn back, fearing the unknown forces at play", action: () => handleOpt1WaterChapter6Choice(2) },
    ]);
}

function displayOpt2WaterChapter6() {
    logGameState("displayWaterChapter6");
    const chapter6Text = `
        <h2>Chapter 6: The Fire Nation's Shadow</h2>
        <p>The night is unnervingly quiet as you awaken to the scent of smoke carried by the wind. The Fire Nation has left its mark nearby, and the embers of destruction glow ominously in the distance. There is no time to hesitate—their forces may still be lurking in the shadows, waiting to strike again.</p>
    `;
    updateStoryText(chapter6Text);
    updateChoices([
        { text: "Investigate the ruins for survivors", action: () => handleOpt2WaterChapter6Choice(1) },
        { text: "Set up defenses and prepare for another attack", action: () => handleOpt2WaterChapter6Choice(2) },
        { text: "Follow the Fire Nation's trail and track them down", action: () => handleOpt2WaterChapter6Choice(3) },
        { text: "Seek wisdom from the elders about the Fire Nation's plans", action: () => handleOpt2WaterChapter6Choice(4) }
    ]);
}

function handleOpt2WaterChapter6Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You carefully search the charred remains, looking for any signs of life.");
            if (skillCheck('wisdom', 12)) {
                updateHealth(5);
                updateStoryText("Among the wreckage, you find a wounded villager who reveals vital information about the Fire Nation's movements.");
            } else {
                updateHealth(-5);
                updateStoryText("The search yields little but ashes and despair, deepening the weight on your heart.");
            }
            break;
        case 2:
            updateStoryText("You rally your allies and reinforce your position, determined to stand your ground.");
            if (skillCheck('combat', 14)) {
                updateReputation('waterTribe', 3);
                updateStoryText("Your preparations pay off, and when the Fire Nation strikes, you repel their forces with strategic precision.");
            } else {
                updateHealth(-10);
                updateStoryText("Despite your efforts, the Fire Nation's attack is overwhelming, forcing you into a desperate retreat.");
            }
            break;
        case 3:
            updateStoryText("Fueled by determination, you follow the Fire Nation's tracks, preparing for a confrontation.");
            if (skillCheck('stealth', 10)) {
                updateSkill('stealth', 1);
                updateStoryText("You remain undetected as you observe their camp, gathering valuable intelligence.");
            } else {
                updateHealth(-5);
                updateStoryText("A misstep gives away your position, and you barely escape with your life.");
            }
            break;
        case 4:
            updateStoryText("You seek counsel from the village elders, hoping to gain insight on the Fire Nation's plans.");
            if (skillCheck('wisdom', 14)) {
                updateHealth(10);
                updateStoryText("Their words offer you knowledge of an ancient prophecy, warning of greater dangers ahead.");
            } else {
                updateHealth(-5);
                updateStoryText("Their stories are cryptic, leaving you with more questions than answers.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startOpt2WaterChapter7 }
        ]);
    }, 300);
}

function handleOpt1WaterChapter6Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You step onto the misty island, feeling the spirits' energy surge through you.");
            if (skillCheck('bending', 12)) {
                updateHealth(5);
                updateStoryText("A spirit guide emerges, bestowing you with knowledge of an ancient waterbending technique.");
            } else {
                updateHealth(-5);
                updateStoryText("The spirits remain silent, their test proving more difficult than expected.");
            }
            break;
        case 2:
            updateStoryText("Fear grips your heart as you turn back, unwilling to face the unknown.");
            if (skillCheck('leadership', 10)) {
                updateReputation('waterTribe', 2);
                updateStoryText("Your choice reassures your allies, who trust your judgment in seeking a safer route.");
            } else {
                updateHealth(-5);
                updateStoryText("Doubt festers among your group, as some believe you are running from your destiny.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startOpt1WaterChapter7 }
        ]);
    }, 300);
}
// Water code end