import { startOpt1EarthChapter9, startOpt2EarthChapter9 } from './earthChapter9.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkill } from '../gameFunctions/utilityFunctions.js';
import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';

export function startOpt1EarthChapter8() {
    gameState.currentChapter = 8;
    displayOpt1EarthChapter8();
}

export function startOpt2EarthChapter8() {
    gameState.currentChapter = 8;
    displayOpt2EarthChapter8();
}

function displayOpt1EarthChapter8() {
    const chapter8Text = `
        <h2>Chapter 8: The Runaway</h2>
        <p>You and Katara get into a huge fight after your earthbending scams land the group in trouble. "You're just jealous I'm better at making money than you!" you shout.</p>
        <p>Now you've been captured by Xin Fu and Master Yu, trapped in a metal cage. Time to prove metalbending wasn't a fluke.</p>
    `;
    updateStoryText(chapter8Text);
    updateChoices([
        { text: "Break out dramatically (\"How'd you like that?!\")", action: () => handleOpt1EarthChapterChoice(1) },
        { text: "Wait for Katara to apologize first", action: () => handleOpt1EarthChapterChoice(2) },
        { text: "Teach Sokka metalbending through cage", action: () => handleOpt1EarthChapterChoice(3) },
        { text: "Insult their terrible cage design", action: () => handleOpt1EarthChapterChoice(4) }
    ]);
}

function displayOpt2EarthChapter8() {
    const chapter8Text = `
        <h2>Chapter 8: Lake Laogai</h2>
        <p>You've discovered Appa is being held under Lake Laogai. The Dai Li swarms the tunnels as you lead the charge.</p>
        <p>"Finally!" you grin, cracking your knuckles. "I've been waiting to earthbend somewhere that isn't sand!"</p>
    `;
    updateStoryText(chapter8Text);
    updateChoices([
        { text: "Smash through walls to find Appa faster", action: () => handleOpt2EarthChapter8Choice(1) },
        { text: "Protect Aang from Dai Li agents", action: () => handleOpt2EarthChapter8Choice(2) },
        { text: "Create underground tremors to confuse enemies", action: () => handleOpt2EarthChapter8Choice(3) },
        { text: "Rescue Jet from brainwashing", action: () => handleOpt2EarthChapter8Choice(4) }
    ]);
}

function handleOpt1EarthChapterChoice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`You rip the metal cage apart. "HOW DO YOU LIKE THAT?!" Xin Fu's jaw drops as you escape.`);
            updateSkillWithDifficulty('combat', 2);
            break;
        case 2:
            updateStoryText(`"Well? Aren't you gonna say sorry?" Katara rolls her eyes before waterbending the lock open. You still metalbend free for style.`);
            updateSkillWithDifficulty('diplomacy', 1);
            break;
        case 3:
            updateStoryText(`"Feel the impurities, Snoozles!" Sokka fails miserably but appreciates the lesson. You break free anyway.`);
            updateSkillWithDifficulty('leadership', 2);
            break;
        case 4:
            updateStoryText(`"Who builds a cage this weak?" Your taunts make Xin Fu furious as you easily bend your way out.`);
            updateSkillWithDifficulty('combat', 1);
            break;
    }
    setTimeout(() => {
        updateStoryText(`<p>The group reunites, with Katara begrudgingly respecting your metalbending skills.</p>`);
        updateChoices([{ text: "Continue", action: startOpt1EarthChapter9 }]);
    }, 300);
}

function handleOpt2EarthChapter8Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`You earthbend through walls like paper. "APPAAAA!" The bison moans happily when you find him.`);
            updateSkillWithDifficulty('combat', 2);
            break;
        case 2:
            updateStoryText(`You shield Aang from falling rocks. "Focus on finding Appa, Twinkle Toes! I got this!"`);
            updateSkillWithDifficulty('empathy', 2);
            break;
        case 3:
            updateStoryText(`Your seismic attacks make Dai Li agents stumble blindly. "Can't earthbend if you can't stand!"`);
            updateSkillWithDifficulty('wisdom', 2);
            break;
        case 4:
            updateStoryText(`You free Jet from his restraints. "Snap out of it!" He remains confused but no longer brainwashed.`);
            updateSkillWithDifficulty('empathy', 1);
            break;
    }
    setTimeout(() => {
        updateStoryText(`<p>Appa is finally reunited with Aang as the Dai Li base collapses around you.</p>`);
         updateChoices([
                                   { text: "Continue", action: () => { startOpt1EarthChapter9(); playVideo('earthCutscene9.mp4'); } }
                               ]);
                           }, 300);
                       }
            
        