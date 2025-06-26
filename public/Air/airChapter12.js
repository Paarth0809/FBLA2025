import { startOpt1AirChapter13, startOpt2AirChapter13 } from './airChapter13.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import {  addAlly  } from '../gameFunctions/utilityFunctions.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';
import { characters } from '../gameFunctions/characters.js';
import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';

// Air code start
export function startAirChapter12() {
  ("Inside startAirChapter12");
  gameState.currentChapter = 12;
  gameState.currentChapterOption = 0; // Reset current chapter option
  displayAirChapter12();
}

function displayAirChapter12() {
  ("displayAirChapter12");
  const chapter12Text = `
    <h2>Chapter 12: The Guru and the Crossroads of Destiny</h2>
    <p>Aang trains with Guru Pathik but struggles to let go of his attachment to Katara. The Guru teaches Aang that he must let go of his attachments in order to master the Avatar State.</p>
    <p>Aang is torn between his duty as the Avatar and his love for Katara. He must decide whether to let go of his attachment to Katara or to choose her over mastering the Avatar State.</p>
  `;
  updateStoryText(chapter12Text);
  updateChoices([
    { text: "Let go of attachment to Katara", action: () => handleAirChapter12Choice(1) },
    { text: "Choose Katara over mastering the Avatar State", action: () => handleAirChapter12Choice(2) },
  ]);
}

function handleAirChapter12Choice(choice) {
    switch (choice) {
      case 1:
        updateStoryText("You decide to let go of your attachment to Katara, focusing on your duty as the Avatar. You continue your training with Guru Pathik, learning to master the Avatar State.");
        updateSkillWithDifficulty('spirituality', 3);
        if (skillCheck('spirituality', 16)) {
          updateEnergyWithDifficulty(10);  // Successful mastery of the Avatar State provides inner strength
          // Check if Toph is not an ally
          if (!gameState.allies.includes('toph')) {
            updateStoryText("With a clear mind and a strong connection to the Avatar State, you are able to master the four elements, even mastering earthbending through the Avatar State's abilities without Toph's assistance, and bring balance to the world.");
          } else {
            updateStoryText("With a clear mind and a strong connection to the Avatar State, you are able to master the four elements and bring balance to the world.");
          }
          updateChoices([{ text: "Continue", action: () => { startOpt1AirChapter13(); playVideo('airCutscene13.mp4'); } }]);
        } else {
            updateHealthWithDifficulty(-5);  // Unsuccessful mastery of the Avatar State is draining
            if (!gameState.allies.includes('toph')) {
                
                updateStoryText("You struggle to master the Avatar State, but with Guru Pathik's guidance, you eventually succeed. However, the experience leaves you exhausted.");
              } else {
                updateStoryText("You struggle to master the Avatar State, but with Guru Pathik's guidance, you eventually succeed. However, the experience leaves you exhausted, as you struggled to learn earthbending through the Avatar State's abilities without Toph's assistance..");
              }
          
          updateChoices([{ text: "Continue", action: () => { startOpt1AirChapter13(); playVideo('airCutscene13.mp4'); } }]);
        }
        break;
     
      case 2:
        updateStoryText("You decide to choose Katara over mastering the Avatar State. You leave your training with Guru Pathik and return to Katara, prioritizing your love for her over your duty as the Avatar.");
        updateSkillWithDifficulty('wisdom', 3);
        if (skillCheck('wisdom', 12)) {
          updateReputationWithDifficulty('airNomads', 10);  // Choosing Katara increases standing with her
          updateStoryText("Katara is overjoyed to see you, and you spend many happy moments together. However, your decision to prioritize your love for her over your duty as the Avatar has consequences, and the world suffers as a result.");
          updateChoices([{ text: "Continue", action: () => { startOpt2AirChapter13(); playVideo('airCutscene13.mp4'); } }]);
        } else {
          updateReputationWithDifficulty('airNomads', -5);  // Choosing Katara decreases standing with others
          updateStoryText("Your decision to prioritize your love for Katara over your duty as the Avatar is met with disappointment and anger from others. You must face the consequences of your choice.");
          updateChoices([{ text: "Continue", action: () => { startOpt2AirChapter13(); playVideo('airCutscene13.mp4'); } }]);
        }
        break;
    }
  }
// Air code end