import { startOpt1EarthChapter8, startOpt2EarthChapter8 } from './earthChapter8.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkill, updateReputation, addToInventory } from '../gameFunctions/utilityFunctions.js';
import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';

// Path 1: Metalbending Discovery (from "The Runaway")

export function startOpt1EarthChapter7() {
    gameState.currentChapter = 7;
    displayOpt1EarthChapter7()}

    export function startOpt2EarthChapter7() {
        gameState.currentChapter = 7;
        displayOpt2EarthChapter7();
    }


function displayOpt1EarthChapter7() {
    const chapter7Text = `
        <h2>Chapter 7: The Metalbending Breakthrough</h2>
        <p>Trapped in a metal cage by Xin Fu and Master Yu, you feel the earth particles within the metal. "Wait a minute..." You grit your teeth and force the cage to bend.</p>
        
    `;
    updateStoryText(chapter7Text);
    updateChoices([
        { text: "\"This changes everything!\" (Experiment further)", action: () => handleOpt1EarthChapter7Choice(1) },
        { text: "\"Suck on this, Xin Fu!\" (Escape dramatically)", action: () => handleOpt1EarthChapter7Choice(2) },
        { text: "Teach Katara the basics immediately", action: () => handleOpt1EarthChapter7Choice(3) },
        { text: "Keep it secret as a trump card", action: () => handleOpt1EarthChapter7Choice(4) }
    ]);
}

// Path 2: Ba Sing Se Conspiracy (from "City of Walls and Secrets")
function displayOpt2EarthChapter7() {
    const chapter7Text = `
        <h2>Chapter 7: The Earth King's Secret</h2>
        <p>In Ba Sing Se, you sense the entire city is built on lies. "There's something wrong here," you tell the group. "The earth itself feels... off."</p>
        <p>Jet approaches with wild eyes. "The Dai Li are brainwashing people!" Before you can react, the Dai Li drag him away.</p>
    `;
    updateStoryText(chapter7Text);
    updateChoices([
        { text: "Investigate Lake Laogai", action: () => handleOpt2EarthChapter7Choice(1) },
        { text: "Confront Long Feng directly", action: () => handleOpt2EarthChapter7Choice(2) },
        { text: "Protect Appa from Dai Li agents", action: () => handleOpt2EarthChapter7Choice(3) },
        { text: "Demand audience with Earth King", action: () => handleOpt2EarthChapter7Choice(4) }
    ]);
}

function handleOpt1EarthChapter7Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`You spend hours bending every metal object in sight. "This could revolutionize earthbending!" Sokka starts taking notes for inventions.`);
            break;
        case 2:
            updateStoryText(`You rip the metal cage apart dramatically. "HOW DO YOU LIKE THAT?" Xin Fu flees in terror.`);
            break;
        case 3:
            updateStoryText(`"Here, Sugar Queen - feel the impurities." Katara struggles but appreciates the lesson. "It's... different from waterbending."`);
            break;
        case 4:
            updateStoryText(`You keep your new skill hidden. "Let them underestimate me. More fun that way."`);
            break;
    }
    setTimeout(() => {
        updateStoryText(`<p>The group regathers, now with your groundbreaking discovery changing everything.</p>`);
        updateChoices([{ text: "Continue", action: startOpt1EarthChapter8 }]);
    }, 1500);
}

function handleOpt2EarthChapter7Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`You detect underground tunnels. "Lake Laogai's a front! There's a whole base down there!" The group prepares to infiltrate.`);
            updateSkillWithDifficulty('wisdom', 2);
            break;
        case 2:
            updateStoryText(`"We know what you're doing, Long Feng!" you shout. He smirks. "The Earth King has invited you to Lake Laogai..." Dai Li agents surround you.`);
            updateReputationWithDifficulty('EarthKingdoom', -1)
            break;
        case 3:
            updateStoryText(`You sense Dai Li approaching Appa. "Oh no you don't!" Your earth wall protects him just in time.`);
            break;
        case 4:
            updateStoryText(`You earthbend a path through the palace walls. "Enough sneaking around! We're seeing the king NOW!"`);
            break;
    }
    setTimeout(() => {
        updateStoryText(`<p>The Dai Li's conspiracy begins unraveling as you discover Appa's location.</p>`);
        updateChoices([
                                  { text: "Continue", action: () => { startOpt1EarthChapter8(); playVideo('earthCutscene8.mp4'); } }
                              ]);
                          }, 300);
                      }
           
       