import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkill } from '../gameFunctions/utilityFunctions.js';
import { gameState } from '../gameFunctions/gameState.js';
import { startEarthChapter11 } from './earthChapter11.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';

export function startEarthChapter10() {
 gameState.currentChapter = 10;
 displayEarthChapter10();
}

function displayEarthChapter10() {
 const chapter10Text = `
 <h2>Chapter 10: The Crossroads of Destiny</h2>
 <p>Ba Sing Se is in chaos. Azula has taken control of the Dai Li, and Zuko stands at a crossroads. Aang is preparing to face the Fire Nation, but something feels off.</p>
 <p>Katara pulls you aside. "I don't trust Zuko. We need to get Aang out of here." You feel tremors beneath your feet - the Dai Li are moving.</p>
 `;
 updateStoryText(chapter10Text);
 updateChoices([
 { text: "\"We fight!\" (Defend the Earth King)", action: () => handleEarthChapter10Choice(1) },
 { text: "Evacuate Aang immediately", action: () => handleEarthChapter10Choice(2) },
 { text: "Confront Azula head-on", action: () => handleEarthChapter10Choice(3) },
 { text: "Protect Katara at all costs", action: () => handleEarthChapter10Choice(4) }
 ]);
}

function handleEarthChapter10Choice(choice) {
 switch (choice) {
 case 1:
 updateStoryText(`
 <p>"The Earth King needs us!" You earthbend a fortress around the palace throne. Dai Li agents swarm like ants, but your defenses hold... for now.</p>
 `);
 updateSkillWithDifficulty('leadership', 2);
 break;

 case 2:
 updateStoryText(`
 <p>"Twinkle Toes, we're leaving!" You create an underground tunnel while Katara covers your retreat. Aang hesitates, looking back at the chaos.</p>
 `);
 updateSkillWithDifficulty('wisdom', 2);
 break;

 case 3:
 updateStoryText(`
 <p>"Time to knock that smirk off Azula's face!" You charge forward, but the princess dances around your attacks with terrifying precision.</p>
 `);
 updateSkillWithDifficulty('combat', 2);
 break;

 case 4:
 updateStoryText(`
 <p>You stick to Katara like glue. "No fireballs getting through me!" She manages to heal a wounded Earth Kingdom soldier thanks to your protection.</p>
 `);
 updateSkillWithDifficulty('empathy', 2);
 break;
 }

 setTimeout(() => {
 updateStoryText(`
 <p>The battle leads you to the crystal catacombs beneath the city. Aang and Zuko face off while Azula prepares to strike. Katara's healing water glows in the dim light...</p>
 `);
  updateChoices([
                            { text: "Continue", action: () => { startEarthChapter11(); playVideo('earthCutscene11.mp4'); } }
                        ]);
                    }, 300);
                }
     
 