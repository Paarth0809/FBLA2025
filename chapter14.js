import { startChapter15 } from './chapter15.js';
import { updateStoryText, updateChoices  } from './uiUpdateFunctions.js';
import { updateSkill, addToInventory, updateEnergy, updateReputation, } from './utilityFunctions.js';
import { skillCheck } from './gameMechanics.js';
import { items } from './items.js';
import { gameState } from './gameState.js';

export function startChapter14() {
    gameState.currentChapter = 14;
    displayChapter14();
}

function displayChapter14() {
    const chapter14Text = `
        <h2>Chapter 14: The Ember Island Players</h2>
        <p>With tensions high and Sozin's Comet approaching, your group stumbles upon a theater 
        troupe performing a play about your adventures. This unexpected encounter forces you 
        to reflect on your journey and the challenges ahead.</p>
    `;
    updateStoryText(chapter14Text);
    updateChoices([
        { text: "Attend the play to gather intelligence on public perception", action: () => handleChapter14Choice(1) },
        { text: "Use this time for last-minute training instead", action: () => handleChapter14Choice(2) },
        { text: "Attempt to influence the play's narrative for propaganda purposes", action: () => handleChapter14Choice(3) },
        { text: "Reflect privately on the journey and meditate on the coming battle", action: () => handleChapter14Choice(4) }
    ]);
}

function handleChapter14Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to attend the play...");
            updateSkill('intelligence', 2);
            if (skillCheck('intelligence', 16)) {
                updateStoryText("The play provides valuable insights into public perception and Fire Nation propaganda tactics.");
                addToInventory(items.propagandaPamphlet);
                updateReputation('fireNation', -1);
            } else {
                updateStoryText("The play is wildly inaccurate and somewhat demoralizing. It provides little useful information.");
                updateEnergy(-20);
            }
            break;
        case 2:
            updateStoryText("You opt for last-minute training...");
            updateSkill('combat', 2);
            updateSkill('bending.fire', 1);
            updateStoryText("The intense training session hones your skills, but leaves little time for mental preparation.");
            updateEnergy(-30);
            break;
        case 3:
            updateStoryText("You attempt to influence the play's narrative...");
            updateSkill('diplomacy', 2);
            if (skillCheck('diplomacy', 18)) {
                updateStoryText("Your subtle influence shifts the play's tone, inspiring hope in the audience and boosting morale.");
                updateReputation('earthKingdom', 2);
                updateReputation('fireNation', -2);
            } else {
                updateStoryText("Your attempts to influence the play backfire, drawing unwanted attention to your group.");
                updateReputation('fireNation', -1);
            }
            break;
        case 4:
            updateStoryText("You choose to reflect privately and meditate...");
            updateSkill('spirituality', 3);
            if (skillCheck('spirituality', 17)) {
                updateStoryText("Your meditation provides clarity and inner peace, strengthening your resolve for the coming battle.");
                updateSkill('bending.spirit', 2);
                addToInventory(items.spiritualFocus);
            } else {
                updateStoryText("Your attempts at meditation are interrupted by anxious thoughts about the future.");
                updateEnergy(-15);
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startChapter15 }
        ]);
    }, 300);
}
