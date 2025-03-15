import { startOpt1AirChapter9, startOpt2AirChapter9 } from './airChapter9.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateHealth, updateEnergy, updateSkill, updateReputation, addAlly,  } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';
import { playVideo } from '../cutscenes.js';
import { characters } from '../characters.js';
import { gameState } from '../gameState.js';

// Air code start
export function startAirChapter8() {
  ("Inside startAirChapter8");
  gameState.currentChapter = 8;
  displayAirChapter8();
}

function displayAirChapter8() {
  ("displayAirChapter8");
  const chapter8Text = `
    <h2>Chapter 8: The Siege of the North</h2>
    <p>The Fire Nation launches a massive assault on the Northern Water Tribe, led by Commander Zhao who seeks to kill the Moon Spirit and destroy waterbending forever. As chaos erupts across the frozen city, Princess Yue reveals the sacred Spirit Oasis where the Moon and Ocean spirits reside in physical form.</p>
    <p>When Zhao captures the Moon Spirit, the world turns blood-red as waterbending fails. Aang realizes he must enter the Spirit World to seek guidance before the Water Tribe is completely destroyed.</p>
  `;
  updateStoryText(chapter8Text);
  updateChoices([
    { text: "Enter the Spirit World alone to find a solution", action: () => handleAirChapter8Choice(1) },
    { text: "Merge with the Ocean Spirit to defend the tribe", action: () => handleAirChapter8Choice(2) },
  ]);
}

function handleAirChapter8Choice(choice) {
  switch (choice) {
    case 1:
      updateStoryText("You meditate at the Spirit Oasis, leaving your physical body behind as your spirit crosses into the other realm. In the Spirit World, you encounter the ancient spirit Koh, the Face Stealer, who holds knowledge that might save the Water Tribe.");
      updateSkill('spirituality', 2);
      if (skillCheck('spirituality', 10)) {
        updateEnergy(5);  // Successful spiritual journey provides inner strength
        updateStoryText("With careful focus, you maintain a perfectly neutral expression while speaking with Koh. The ancient spirit rewards your composure by revealing that only the Moon Spirit's sacrifice can be countered by another sacrifice of equal measure. You return to the physical world with this crucial knowledge.");
         updateChoices([{ text: "Continue", action: startOpt1AirChapter9 }]); // Option to continue after reading
      } else {
        updateHealth(-5);  // Unsuccessful spirit world navigation is draining
        updateStoryText("You struggle to navigate the bewildering paths of the Spirit World, nearly losing your face to Koh before escaping. The journey takes longer than expected, and you return to find the situation has worsened in your absence, but with vital information about restoring balance.");
        updateChoices([{ text: "Continue", action: startOpt2AirChapter9 }]);
      }
     
      break;
   
    case 2:
      updateStoryText("As Zhao kills the Moon Spirit, you feel a powerful pull from the Ocean Spirit. In your desperation to save the tribe, you surrender your consciousness and merge with the Ocean Spirit, becoming a massive, glowing water entity that towers over the battlefield.");
      updateSkill('combat', 3);
      if (skillCheck('combat', 12)) {
        updateReputation(10);  // Successfully defending the tribe increases your standing
        updateStoryText("In your merged form with La, the Ocean Spirit, you maintain enough control to target only the Fire Nation forces while sparing civilians. Your awesome display of power drives back the invasion and establishes you as a formidable Avatar in the eyes of both nations.");
        updateChoices([{ text: "Continue", action: startOpt1AirChapter9 }]);
      } else {
        updateReputation(-5);  // Loss of control damages your reputation
        updateStoryText("The raw power of the Ocean Spirit overwhelms your consciousness. The Northern Water Tribe falls, your lack of control results in widespread destruction that affects even some allies. When you finally separate from the spirit, you're left with troubling questions about the nature of the Avatar State.");
        updateChoices([{ text: "Continue", action: startOpt2AirChapter9 }]);
      }
     
      break;
  }
}
// Air code end