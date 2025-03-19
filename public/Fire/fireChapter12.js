import { startFireChapter13 } from './fireChapter13.js';
import { updateStoryText, updateChoices  } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkill, updateEnergy, updateReputation, randomInt } from '../gameFunctions/utilityFunctions.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js';

import { gameState } from '../gameFunctions/gameState.js';
  
//Fire code start
export function startOpt1FireChapter12() {
    gameState.currentChapter = 12;
    displayOpt1Chapter12();
}

export function startOpt2FireChapter12() {
    gameState.currentChapter = 12;
    displayOpt2Chapter12();
}


function displayOpt1Chapter12() {
    const chapter12Text = `
        <h2>Chapter 12: The Ember Island Players</h2>
        <p>Seeking a brief respite from the intensity of your quest, you and your friends discover that a popular theater troupe is performing a play 
        based on your adventures. As Zuko, you watch your past actions portrayed on stage, offering a unique perspective on your journey. The experience 
        forces you to confront your past decisions, the perceptions of those around you, and perhaps even question your future path.</p>
    `;
    updateStoryText(chapter12Text);
    updateChoices([
        { text: "Reflect on how the play portrays your quest for honor", action: () => handleFireChapter12Choice(1) },
        { text: "Confront the reality of your actions and their impact on others", action: () => handleFireChapter12Choice(2) },
        { text: "Discuss the play's portrayal with Aang and the others", action: () => handleFireChapter12Choice(3) },
        { text: "Use the play's inaccuracies as a learning tool for personal growth", action: () => handleFireChapter12Choice(4) }
    ]);
}



function handleFireChapter12Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("Watching the dramatized version of your quest for honor, you ponder the depth of your transformation...");
            updateSkill('wisdom', 2);
            if (skillCheck('wisdom', 16)) {
                updateStoryText("This reflection deepens your understanding of your journey, acknowledging the mistakes and growth along the way.");
                updateReputation('fireNation', 1);
            } else {
                updateStoryText("The portrayal stirs mixed feelings, leaving you to grapple with parts of your past you're still coming to terms with.");
            }
            break;
        case 2:
            updateStoryText("The play's depiction of your actions and their repercussions on others prompts a stark self-examination...");
            updateSkill('empathy', 2);
            if (skillCheck('empathy', 15)) {
                updateStoryText("You gain a new appreciation for the perspectives of those you've affected, strengthening your resolve to make amends.");
                updateReputation('waterTribe', 1);
                updateReputation('earthKingdom', 1);
            } else {
                updateStoryText("The realization is uncomfortable, highlighting the long road ahead in your quest for redemption.");
            }
            break;
        case 3:
            updateStoryText("You engage in discussions with Aang and the others about their thoughts on the play's portrayal...");
            updateSkill('diplomacy', 2);
            if (skillCheck('diplomacy', 17)) {
                updateStoryText("These conversations bring laughter, shared memories, and a stronger bond among you all.");
                updateReputation('teamAvatar', 2);
            } else {
                updateStoryText("Some discussions turn tense, revealing unresolved issues that still need addressing.");
            }
            break;
        case 4:
            updateStoryText("You decide to use the play's inaccuracies not just to critique but to reflect on your personal growth...");
            updateSkill('wisdom', 2);
            if (skillCheck('wisdom', 18)) {
                updateStoryText("This approach yields insights into how you've changed and how you wish to grow, reinforcing your commitment to your new path.");
                updateReputation('fireNation', 1);
            } else {
                updateStoryText("While the attempt is noble, finding actionable insights in the play's exaggerated fiction proves challenging.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startFireChapter13 }
        ]);
    }, 300);
}
//Fire code end