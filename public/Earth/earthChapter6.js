import { startOpt1EarthChapter7, startOpt2EarthChapter7 } from './earthChapter7.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkill } from '../gameFunctions/utilityFunctions.js';
import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';

export function startOpt1EarthChapter6() {
    gameState.currentChapter = 6;
    displayOpt1EarthChapter6();
}

export function startOpt2EarthChapter6() {
    gameState.currentChapter = 6;
    displayOpt2EarthChapter6();
}

function displayOpt1EarthChapter6() {
    const chapter6Text = `
        <h2>Chapter 6: The Desert</h2>
        <p>The scorching sun beats down as you trudge through the Si Wong Desert. Aang is furious about losing Appa, and Sokka's high on cactus juice.</p>
        <p>"I hate sand," you grumble. "Can't see jack squat out here!" Katara snaps at everyone to keep moving.</p>
    `;
    updateStoryText(chapter6Text);
    updateChoices([
        { text: "\"Twinkle Toes, chill out!\" (Calm Aang)", action: () => handleOpt1EarthChapter6Choice(1) },
        { text: "Stomp ground searching for water", action: () => handleOpt1EarthChapter6Choice(2) },
        { text: "Launch rocks at buzzard-wasps", action: () => handleOpt1EarthChapter6Choice(3) },
        { text: "\"Quit bossing us, Sugar Queen!\"", action: () => handleOpt1EarthChapter6Choice(4) }
    ]);
}

function displayOpt2EarthChapter6() {
    const chapter6Text = `
        <h2>Chapter 6: Appa's Lost Days</h2>
        <p>While searching for Appa, you feel distant tremors - a sky bison fighting! "He's northeast!" you shout.</p>
        <p>Sokka squints. "Are you sure?" You punch a boulder into dust. "MY FEET DON'T LIE!"</p>
    `;
    updateStoryText(chapter6Text);
    updateChoices([
        { text: "Track Appa's chains through vibrations", action: () => handleOpt2EarthChapter6Choice(1) },
        { text: "Threaten sandbenders for information", action: () => handleOpt2EarthChapter6Choice(2) },
        { text: "\"We'll find him, Aang\"", action: () => handleOpt2EarthChapter6Choice(3) },
        { text: "Search for Dai Li clues", action: () => handleOpt2EarthChapter6Choice(4) }
    ]);
}

function handleOpt1EarthChapter6Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`"Getting mad won't bring Appa back!" You earthbend a badgermole statue. Aang sighs, his rage cooling slightly.`);
            updateSkillWithDifficulty('empathy', 2);
            break;
        case 2:
            updateStoryText(`Your feet detect faint vibrations. "Water's... that way?" Katara finds it first using bending. "Close enough," she admits.`);
            updateSkillWithDifficulty('wisdom', 1);
            break;
        case 3:
            updateStoryText(`"Back off, feather-face!" Your rocks scare the buzzard-wasps away from Momo. The lemur chitters gratefully.`);
            updateSkillWithDifficulty('combat', 2);
            break;
        case 4:
            updateStoryText(`"Quit being such a mom, Sugar Queen!" Katara glares but Sokka laughs. The tension eases just a little.`);
            updateSkillWithDifficulty('leadership', 1);
            break;
    }
    setTimeout(() => {
        updateStoryText(`<p>Aang violently airbends a buzzard-wasp away from Momo, his eyes glowing momentarily.</p>`);
        updateChoices([{ text: "Continue", action: startOpt1EarthChapter7 }]);
    }, 1500);
}

function handleOpt2EarthChapter6Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`"They took him to Ba Sing Se!" you announce, sensing Appa's chain vibrations. Sokka nods. "Then that's where we're going."`);
            updateSkillWithDifficulty('wisdom', 2);
            break;
        case 2:
            updateStoryText(`You trap a sandbender in rock. "TELL ME WHERE APPA IS!" He confesses they sold him to a Ba Sing Se merchant.`);
            updateSkillWithDifficulty('combat', 1);
            break;
        case 3:
            updateStoryText(`You awkwardly pat Aang's shoulder. "We'll find him." Aang gives you a grateful look, his anger fading slightly.`);
            updateSkillWithDifficulty('empathy', 2);
            updateReputationWithDifficulty('teamAvatar', 1);
            break;
        case 4:
            updateStoryText(`You find distinctive grooves in the sand. "Dai Li earthbenders were here." The trail leads northeast toward Ba Sing Se.`);
            updateSkillWithDifficulty('wisdom', 1);
            break;
    }
    setTimeout(() => {
        updateStoryText(`<p>The group prepares to infiltrate Ba Sing Se, where Appa's being held by the Dai Li.</p>`);
        updateChoices([
                           { text: "Continue", action: () => { startOpt1EarthChapter7(); playVideo('earthCutscene7.mp4'); } }
                       ]);
                   }, 300);
               }
    
