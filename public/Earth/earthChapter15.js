import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { gameState } from '../gameFunctions/gameState.js';
import { endGame } from '../gameFunctions/game.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';

export function startEarthChapter15() {
 gameState.currentChapter = 15;
 displayEarthFinalChapter()}

// Final Chapter - Toph's Legacy
export function startEarthFinalChapter() {
 gameState.currentChapter = 15;
 displayEarthFinalChapter();
}

function displayEarthFinalChapter() {
 const finalText = `
 <h2>Chapter 16: Legacy of the Blind Bandit</h2>
 <p>The war is over. As the world rebuilds, you face your toughest choice yet - what will define your legacy?</p>
 `;
 updateStoryText(finalText);
 updateChoices([
 { text: "Found Metalbending Academy (Canon Path)", action: () => handleFinalChoice('ACADEMY') },
 { text: "Reform Earth Kingdom government", action: () => handleFinalChoice('REFORMER') },
 { text: "Travel with Team Avatar forever", action: () => handleFinalChoice('GUARDIAN') }
 ]);
}

function handleFinalChoice(choice) {
 switch(choice) {
 case 'ACADEMY':
 updateStoryText(`
 <h3>Ending: The Greatest Earthbender</h3>
 <p>Your Metalbending Academy becomes Republic City's pride. Students worldwide master your art, and your statue stands beside Aang's.</p>
 <p>"Not bad for a blind kid," you smirk, hearing visitors marvel at your achievements.</p>
 `);
 endGame("Master Innovator");
 break;

 case 'REFORMER':
 updateStoryText(`
 <h3>Ending: The Iron Governor</h3>
 <p>You tear down Ba Sing Se's walls - literally. As the Earth Kingdom's youngest leader, you replace monarchy with democracy.</p>
 <p>Historians call it "The Beifong Revolution." You prefer the street kids' term: "The Toph Era."</p>
 `);
 endGame("World Changer");
 break;

 case 'GUARDIAN':
 updateStoryText(`
 <h3>Ending: The Eternal Guardian</h3>
 <p>You never settle down, instead becoming Team Avatar's roaming protector. "Wherever there's trouble, that's my home," you tell Aang.</p>
 <p>Decades later, legends speak of a blind earthbender who appears in crises... then vanishes like the wind.</p>
 `);
 endGame("Unbreakable Bond");
 break;
 }
}