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
        <h2>Chapter 3: The Earth Kingdom's Secret Weapon</h2>
        <p>In Ba Sing Se, Toph, a blind girl from a noble family, hones her skills as an earthbender. 
        Despite her disability, she has unmatched perception and strength. When she overhears a secret 
        about Fire Lord Ozai's plans, she must decide her course of action.</p>
    `;
    updateStoryText(chapter3Text);
    updateChoices([
        { text: "Inform the Earth Kingdom generals", action: () => handleChapter3Choice(1) },
        { text: "Find the underground resistance and join them", action: () => handleChapter3Choice(2) },
        { text: "Travel alone, seeking the Avatar's aid", action: () => handleChapter3Choice(3) },
        { text: "Confront the Dai Li about their corruption", action: () => handleChapter3Choice(4) }
    ]);
}

function handleChapter3Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to inform the Earth Kingdom generals...");
            updateSkill('diplomacy', 2);
            if (skillCheck('diplomacy', 16)) {
                updateStoryText("The generals listen to your information and begin preparing defenses against the Fire Nation's plans.");
                updateReputation('earthKingdom', 3);
            } else {
                updateStoryText("The generals dismiss your claims, believing them to be unfounded rumors.");
                updateReputation('earthKingdom', -1);
            }
            break;
        case 2:
            updateStoryText("You seek out the underground resistance...");
            updateSkill('stealth', 2);
            if (skillCheck('stealth', 14)) {
                updateStoryText("You successfully make contact with the resistance and join their ranks.");
                addAlly(characters.jet);
                addToInventory(items.earthGloves);
            } else {
                updateStoryText("Your attempts to find the resistance attract unwanted attention. You must lay low for a while.");
                updateEnergy(-20);
            }
            break;
        case 3:
            updateStoryText("You set out alone to find the Avatar...");
            updateSkill('combat', 1);
            updateSkill('stealth', 1);
            if (randomInt(1, 10) > 6) {
                updateStoryText("Your journey is perilous, but you eventually cross paths with Aang and his friends.");
                addAlly(characters.aang);
            } else {
                updateStoryText("Your search for the Avatar is unsuccessful, but you gain valuable survival skills.");
                addToInventory(items.survivalKit);
            }
            break;
        case 4:
            updateStoryText("You decide to confront the Dai Li about their corruption...");
            updateSkill('combat', 2);
            if (skillCheck('combat', 17)) {
                updateStoryText("Your confrontation exposes some of the Dai Li's secrets, causing a stir in Ba Sing Se.");
                updateReputation('earthKingdom', 4);
                updateReputation('fireNation', -2);
            } else {
                updateStoryText("The Dai Li overpower you and throw you in prison. You must plan your escape.");
                updateHealth(-30);
                addQuest(quests.escapePrison);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter4 }
        ]);
    }, 300);

    logGameState("End of Chapter 3");
    setTimeout(() => {
        logGameState("Starting Chapter 4");
        startChapter4();
    }, 300);
}