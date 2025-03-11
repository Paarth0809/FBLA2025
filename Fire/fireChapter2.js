import { startFireChapter3 } from './fireChapter3.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateHealth, updateSkill, updateReputation, addToInventory, addAlly } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';

import { characters } from '../characters.js';
import { gameState } from '../gameState.js';
import { randomInt } from '../utilityFunctions.js';

//Fire code start
export function startFireChapter2() {
    gameState.currentChapter = 2;
    displayFireChapter2();
}

function displayFireChapter2() {
    const chapter2Text = `
      <h2>Chapter 2: The Southern Water Tribe</h2>
        <p>You are driven by your quest to regain your honor, arrives at the fringes of the Southern Water Tribe. The Avatar, you learn, has been seen in the area. With your loyal uncle and crew by your side, you face a crucial decision on how to approach your search. The choices you makes could change you destiny forever.</p>
    `;
    updateStoryText(chapter2Text);
    updateChoices([
        { text: "Sneak into the Village at Night", action: () => handleFireChapter2Choice(1) },
        { text: "Pose as a Traveler Seeking Shelter", action: () => handleFireChapter2Choice(2) },
        { text: "Direct Attack on the Village", action: () => handleFireChapter2Choice(3) },
        { text: "Seek Guidance from the Spirits", action: () => handleFireChapter2Choice(4) }
    ]);
} 



function handleFireChapter2Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to use the cover of night to your advantage, hoping to learn more about the Avatar's whereabouts without alerting the entire village.");
            updateSkill('stealth', 2);
            if (skillCheck('stealth', 12)) {
                updateStoryText("Your stealth allows you to overhear villagers speaking of the Avatar's recent departure. You leave undetected, with valuable information.");
            } else {
                updateStoryText("You're nearly caught by local warriors, forcing you to flee the village empty-handed. The close call reminds you of the need for caution.");
                updateHealth(-10);
            }
            break;
        case 2:
            updateStoryText("Disguising yourself, you attempt to blend in with the villagers, seeking whispers and rumors about the Avatar.");
            updateSkill('stealth', 2);
            if (skillCheck('stealth', 12)) {
                updateStoryText("Your disguise holds, and you learn the Avatar was here but has since moved on. The stories of the Fire Nation's impact weigh heavily on you.");
            } else {
                updateStoryText("Your disguise fails, and you're forced to retreat as the villagers grow suspicious. The failure is a bitter reminder of your mission's stakes.");
                updateHealth(-5);
            }
            break;
        case 3:
            updateStoryText("Frustrated and desperate, you decide on a direct assault, hoping to intimidate the villagers into revealing the Avatar's location.");
            updateSkill('combat', 2);
            if (skillCheck('combat', 15)) {
                updateStoryText("The assault mirrors your initial approach in the show, leading to a fierce confrontation. You capture the avatar and escape the village on your ship. Despite your efforts, the Avatar escapes, and you're left with the bitter taste of defeat, yet more determined than ever.");
            } else {
                updateStoryText("The attack goes poorly, with unexpected resistance from the villagers. Your retreat is a humbling blow to your pride and mission.");
                updateHealth(-20);
            }
            break;
        case 4:
            updateStoryText("In a moment of introspection, you seek guidance from the spirits, hoping for a sign to lead you to the Avatar.");
            updateSkill('spirituality', 1);
            if (randomInt(1, 10) > 6) {
                updateStoryText("A cryptic vision in your dreams hints at the Avatar's path but leaves you with more questions about your own destiny.");
            } else {
                updateStoryText("The spirits remain silent. Your journey continues, marked by uncertainty and the weight of your unresolved past.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startFireChapter3 }
        ]);
    }, 300);
}
//Fire code end