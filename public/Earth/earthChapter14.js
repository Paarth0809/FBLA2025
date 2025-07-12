import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkill } from '../gameFunctions/utilityFunctions.js';
import { gameState } from '../gameFunctions/gameState.js';
import { startEarthChapter15 } from './earthChapter15.js'; 
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';

export function startOpt1EarthChapter14() {
 gameState.currentChapter = 14;
 displayOpt1EarthChapter14();
}

export function startOpt2EarthChapter14() {
 gameState.currentChapter = 14;
 displayOpt2EarthChapter14();
}

function displayOpt1EarthChapter14() {
 const chapter14Text = `
 <h2>Chapter 14: The Southern Raiders</h2>
 <p>Katara is consumed by rage after learning the Fire Nation captain who killed her mother is still alive. She prepares to leave alone.</p>
 <p>"Sugar Queen, wait up!" You stomp the ground, blocking her path. "You're not doing this solo." Zuko volunteers to help.</p>
 `;
 updateStoryText(chapter14Text);
 updateChoices([
 { text: "\"Let's crush him!\" (Support Katara's revenge)", action: () => handleOpt1EarthChapter14Choice(1) },
 { text: "\"This won't bring her back\" (Counsel restraint)", action: () => handleOpt1EarthChapter14Choice(2) },
 { text: "Stay behind with Aang", action: () => handleOpt1EarthChapter14Choice(3) },
 { text: "Track the captain yourself", action: () => handleOpt1EarthChapter14Choice(4) }
 ]);
}

function displayOpt2EarthChapter14() {
 const chapter14Text = `
 <h2>Chapter 14: The Ember Island Players</h2>
 <p>The team attends a Fire Nation play about their adventures. "They made me a hulking monster!" you complain, feeling the crude earth props.</p>
 <p>Sokka groans. "And I'm just the comic relief!" Aang looks disturbed by his portrayal.</p>
 `;
 updateStoryText(chapter14Text);
 updateChoices([
 { text: "Ruin the play with earthbending", action: () => handleOpt2EarthChapter14Choice(1) },
 { text: "Confront the actors backstage", action: () => handleOpt2EarthChapter14Choice(2) },
 { text: "Laugh along with the audience", action: () => handleOpt2EarthChapter14Choice(3) },
 { text: "Leave quietly with the group", action: () => handleOpt2EarthChapter14Choice(4) }
 ]);
}

function handleOpt1EarthChapter14Choice(choice) {
 switch (choice) {
 case 1:
 updateStoryText(
 `"Let's make him pay!" You join Katara's mission. Your seismic sense helps track the captain's ship through the fog.`
 );
 updateSkillWithDifficulty('combat', 2);
 break;
 case 2:
 updateStoryText(
 `"Violence won't fix this." Katara glares but hesitates. Zuko shares his own story of seeking revenge.`
 );
 updateSkillWithDifficulty('wisdom', 2);
 break;
 case 3:
 updateStoryText(
 `"Someone needs to stay with Twinkle Toes." You remain at camp while Katara and Zuko depart. Aang paces anxiously.`
 );
 updateSkillWithDifficulty('empathy', 2);
 break;
 case 4:
 updateStoryText(
 `"I'll find him first." You earth-surf ahead, but the ocean limits your seismic sense. Katara catches up, unamused.`
 );
 updateSkillWithDifficulty('leadership', 2);
 break;
 }

 setTimeout(() => {
 updateStoryText(`<p>The hunt leads to a confrontation that will test Katara's soul...</p>`);
 updateChoices([
 { text: "Continue to Chapter 15: The Final Confrontation", action: startEarthChapter15 }
 ]);
 }, 300);
}

function handleOpt2EarthChapter14Choice(choice) {
 switch (choice) {
 case 1:
 updateStoryText(
 `You subtly earthbend the stage to collapse during the climax. "Whoops," you smirk as the actors tumble. The audience thinks it's part of the show.`
 );
 updateSkillWithDifficulty('combat', 1);
 break;
 case 2:
 updateStoryText(
 `Backstage, you corner the actor playing you. "I don't sound like that!" He whimpers as you crack your knuckles.`
 );
 updateSkillWithDifficulty('leadership', 2);
 break;
 case 3:
 updateStoryText(
 `"Okay, this is actually funny." You roar with laughter when "Toph" lifts a comically oversized boulder. Sokka pouts at his portrayal.`
 );
 updateSkillWithDifficulty('empathy', 2);
 break;
 case 4:
 updateStoryText(
 `The group slips out quietly. "That was... something," Aang mutters. You feel the vibrations of the audience's applause fading behind you.`
 );
 updateSkillWithDifficulty('wisdom', 2);
 break;
 }

 setTimeout(() => {
 updateStoryText(`<p>The play's distortions force the team to reflect on their true selves...</p>`);
 updateChoices([
                           { text: "Continue", action: () => { startEarthChapter15(); playVideo('earthCutscene15.mp4'); } }
                       ]);
                   }, 300);
               }
    