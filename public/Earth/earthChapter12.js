//Get imports


import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkill, updateReputation } from '../gameFunctions/utilityFunctions.js';
import { gameState } from '../gameFunctions/gameState.js';
import { startOpt1EarthChapter13, startOpt2EarthChapter13 } from './earthChapter13.js';

export function startOpt1EarthChapter12() {
    gameState.currentChapter = 12;
    displayOpt1EarthChapter12();
}

export function startOpt2EarthChapter12() {
    gameState.currentChapter = 12;
    displayOpt2EarthChapter12();
}

function displayOpt1EarthChapter12() {
    const chapter12Text = `
        <h2>Chapter 12A: The Assault Begins</h2>
        <p>The team launches a direct assault on the Fire Nation. The battle is intense, and the stakes are high. You must lead the charge and make critical decisions.</p>
        <p>You must decide: how will you lead the assault?</p>
    `;
    updateStoryText(chapter12Text);
    updateChoices([
        { text: "Lead the charge head-on", action: () => handleOpt1EarthChapter12Choice(1) },
        { text: "Use stealth to infiltrate the Fire Nation", action: () => handleOpt1EarthChapter12Choice(2) },
        { text: "Coordinate a strategic retreat", action: () => handleOpt1EarthChapter12Choice(3) },
        { text: "Focus on protecting the team", action: () => handleOpt1EarthChapter12Choice(4) }
    ]);
}

function displayOpt2EarthChapter12() {
    const chapter12Text = `
        <h2>Chapter 12: Gathering Allies</h2>
    <p>The team embarks on a mission to gather allies from other nations. The journey is fraught with challenges, but the potential rewards are great.</p>
    <p>You must decide: how will you approach the diplomatic mission?
    `;
    updateStoryText(chapter12Text);
    updateChoices([
        { text: "Negotiate with the Water Tribe", action: () => handleOpt2EarthChapter12Choice(1) },
        { text: "Secure reinforcements from the Earth Kingdom", action: () => handleOpt2EarthChapter12Choice(2) },
        { text: "Recruit Fire Nation defectors", action: () => handleOpt2EarthChapter12Choice(3) },
       
    ]);
}


function handleOpt1EarthChapter12Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`
                <p>You lead the charge head-on, inspiring the team with your bravery. The Fire Nation forces are caught off guard, and the team gains an early advantage.</p>
            `);
            updateSkill('leadership', 3);
            updateReputation('Team Avatar', 2);
            break;

        case 2:
            updateStoryText(`
                <p>You use stealth to infiltrate the Fire Nation, avoiding direct confrontation. The team successfully sabotages key Fire Nation assets.</p>
            `);
            updateSkill('stealth', 3);
            updateReputation('Team Avatar', 2);
            break;

        case 3:
            updateStoryText(`
                <p>You coordinate a strategic retreat, ensuring the team survives to fight another day. The Fire Nation is left confused and disorganized.</p>
            `);
            updateSkill('wisdom', 3);
            updateReputation('Team Avatar', 2);
            break;

        case 4:
            updateStoryText(`
                <p>You focus on protecting the team, ensuring everyone makes it through the battle safely. The team's morale remains high despite the challenges.</p>
            `);
            updateSkill('wisdom', 3);
            updateReputation('Team Avatar', 2);
            break;
    }


    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startOpt1EarthChapter13 }
        ]);
    }, 300);
}


function handleOpt2EarthChapter12Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`
                <p>You and Sokka negotiate with the Water Tribe, securing their support. The Water Tribe's warriors join the fight against the Fire Nation, bringing their powerful Waterbending skills to the team</p>
            `);
            updateSkill('diplomacy', 3);
            updateReputation('Team Avatar', 2);
            break;

        case 2:
            updateStoryText(`
                <p>You rally additional Earth Kingdom troops, reinforcing your ranks with skilled Earthbenders and soldiers. The Earth Kingdom's commitment to the cause grows stronger.</p>
            `);
            updateSkill('diplomacy', 3);
            updateReputation('Team Avatar', 2);
            break;

        case 3:
            updateStoryText(`
                <p>You reach out to Fire Nation defectors, convincing them to join your cause. Their insider knowledge and combat experience prove invaluable in the fight ahead.</p>
            `);
            updateSkill('diplomacy', 3);
            updateReputation('Team Avatar', 2);
          
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startOpt2EarthChapter13 }
        ]);
    }, 300);


}