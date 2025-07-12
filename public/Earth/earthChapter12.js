import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkill } from '../gameFunctions/utilityFunctions.js';
import { gameState } from '../gameFunctions/gameState.js';
import { startEarthChapter13} from './earthChapter13.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';

export function startEarthChapter12() {
 gameState.currentChapter = 12;
 displayEarthChapter12();
}

function displayEarthChapter12() {
 const chapter12Text = `
 <h2>Chapter 11: The Fall of Ba Sing Se</h2>
 <p>The crystal catacombs shake as Azula's lightning illuminates the cavern. Aang lies motionless in Katara's arms while Zuko makes his choice.</p>
 <p>"I can't see in these stupid crystals!" you shout, sensing the chaos through vibrations. The Dai Li are everywhere.</p>
 `;
 updateStoryText(chapter12Text);
 updateChoices([
 { text: "\"Get Aang out!\" (Protect the retreat)", action: () => handleEarthChapter12Choice(1) },
 { text: "\"I'm ending this!\" (Charge Azula)", action: () => handleEarthChapter12Choice(2) }
 ]);
}

function handleEarthChapter12Choice(choice) {
 switch (choice) {
 case 1:
 updateStoryText(`
 <p>You earthbend a tunnel through the crystals. "GO!" Katara escapes with Aang while you hold off the Dai Li. Their rock gloves shatter against your defenses.</p>
 `);
 updateSkillWithDifficulty('leadership', 2);
 setTimeout(() => {
 updateChoices([
 { text: "Continue to Path 1: The Escape", action: startEarthChapter13}
 ]);
 }, 300);
 break;
 
 case 2:
 updateStoryText(`
 <p>"You're going down, princess!" You launch crystal shards at Azula, but she backflips away laughing. Zuko firebends between you, forcing you back.</p>
 <p>By the time you recover, Katara and Aang are gone - captured by the Dai Li.</p>
 `);
 updateSkillWithDifficulty('combat', 2);
 setTimeout(() => {
  updateChoices([
                            { text: "Continue", action: () => { startEarthChapter13(); playVideo('earthCutscene13.mp4'); } }
                        ]);
                    }, 300);
                }
     }
 