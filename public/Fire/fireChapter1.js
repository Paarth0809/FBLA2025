import { startFireChapter2 } from './fireChapter2.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { addAlly } from '../gameFunctions/utilityFunctions.js';
import {skillCheck} from '../gameFunctions/gameMechanics.js';

import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { characters } from '../gameFunctions/characters.js';


//Fire code start
export function startFireChapter1() {
    gameState.currentChapter = 1;
    displayFireChapter1();
}

function displayFireChapter1() {
    const chapter1Text = `
        <h2>Chapter 1: Shadows of the Past</h2>
        <p>You are Zuko, the son of the banished warrior, who embarks on a journey that will determine your destiny. 
        One fateful day, while you're on a mission for the Fire Nation, you encounter a young dragon, 
        wounded and defenseless.</p>
    `;
    updateStoryText(chapter1Text);
    updateChoices([
        { text: "Help the dragon, nursing it back to health, and befriend it!", action: () => handleFireChapter1Choice(1) },
        { text: "Ignore the dragon and continue your mission", action: () => handleFireChapter1Choice(2) },
        { text: "Report the dragon's location to the Fire Nation", action: () => handleFireChapter1Choice(3) },
        { text: "Attempt to communicate with the dragon", action: () => handleFireChapter1Choice(4) }
    ]);
}

function handleFireChapter1Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to help the dragon...You wait...It seems eager to be your companion!");
            updateSkillWithDifficulty('diplomacy', 1);
            updateReputationWithDifficulty('fireNation', -1);
            addAlly(characters.dragon);
            break;
        case 2:
            updateStoryText("You ignore the dragon and continue your mission...");
            updateSkillWithDifficulty('stealth', 1);
            break;
        case 3:
            updateStoryText("You report the dragon's location to the Fire Nation...");
            updateReputationWithDifficulty('fireNation', 2);
            updateSkillWithDifficulty('diplomacy', -1);
            break;
        case 4:
            updateStoryText("You attempt to communicate with the dragon...");
            if (skillCheck('diplomacy', 12)) {
                updateStoryText("The dragon seems to understand you and calms down. It allows you to approach and tend to its wounds.");
                updateSkillWithDifficulty('diplomacy', 2);
            } else {
                updateStoryText("The dragon doesn't understand your intentions and becomes agitated. You decide to back away slowly.");
                updateSkillWithDifficulty('stealth', 1);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startFireChapter2 }
        ]);
    }, 300);
}
//Fire code end

//Water code start

//Water code end


