//Get imports


import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateSkill, updateReputation } from '../utilityFunctions.js';
import { gameState } from '../gameState.js';
import { startOpt1EarthChapter14, startOpt2EarthChapter14 } from './earthChapter14.js'; 

export function startOpt1EarthChapter13() {
    gameState.currentChapter = 13;
    displayOpt1EarthChapter13();
}

export function startOpt2EarthChapter13() {
    gameState.currentChapter = 13;
    displayOpt2EarthChapter13();
}



function displayOpt1EarthChapter13() {
    const chapter13Text = `
        <h2>Chapter 13A: The Fire Nation Strikes Back</h2>
        <p>The Fire Nation retaliates with full force after your initial assault. Their armies are advancing, and the team must decide how to respond to this new threat.</p>
        <p>You must decide: how will you counter the Fire Nation's attack?</p>
    `;
    updateStoryText(chapter13Text);
    updateChoices([
        { text: "Fortify your position and prepare for a siege", action: () => handleOpt1EarthChapter13Choice(1) },
        { text: "Launch a counterattack to disrupt their forces", action: () => handleOpt1EarthChapter13Choice(2) },
        { text: "Evacuate the area and regroup elsewhere", action: () => handleOpt1EarthChapter13Choice(3) },
        { text: "Send a small team to sabotage their supply lines", action: () => handleOpt1EarthChapter13Choice(4) }
    ]);
}


function displayOpt2EarthChapter13() {
    const chapter13BText = `
      <h2>Chapter 13B: The Struggle</h2>
    <p>Despite the extra support, the Fire Nation's forces are relentless. The team is struggling to hold their ground, and the situation looks dire.</p>
    <p>You must decide: how will you rally the team and turn the tide?</p>
    `;
    updateStoryText(chapter13BText);
    updateChoices([
        { text: "Fortify your defenses and hold the line", action: () => handleOpt2EarthChapter13Choice(1) },
        { text: "Send a small team to sabotage the Fire Nation's supplies", action: () => handleOpt2EarthChapter13Choice(2) },
        { text: "Focus on healing and regrouping", action: () => handleOpt2EarthChapter13Choice(3) },
        { text: "Evacuate to a safer location", action: ()=> handleOpt2EarthChapter13Choice(4)}
       
    ]);
}
function handleOpt1EarthChapter13Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`
                <p>You decide to fortify your position, using Earthbending to create strong defenses. The team prepares for a long siege, ready to withstand the Fire Nation's assault.</p>
            `);
            updateSkill('wisdom', 3);
            updateReputation('Team Avatar', 2);
            break;

        case 2:
            updateStoryText(`
                <p>You launch a daring counterattack, catching the Fire Nation off guard. The team's bold move disrupts their advance and buys valuable time.</p>
            `);
            updateSkill('leadership', 3);
            updateReputation('Team Avatar', 2);
            break;

        case 3:
            updateStoryText(`
                <p>You decide to evacuate the area, avoiding a direct confrontation. The team regroups in a safer location, ready to plan their next move.</p>
            `);
            updateSkill('leadership', 3);
            updateReputation('Team Avatar', 2);
            break;

        case 4:
            updateStoryText(`
                <p>You send a small team to sabotage the Fire Nation's supply lines. The mission is succesful however some soldiers get caught causing team avatar's reputation to suffer.</p>
            `);
            updateSkill('stealth', 3);
            updateReputation('Team Avatar', 2);
            if (skillCheck('stealth', 5)) {
                            updateStoryText("Just when you thought you couldn't get back the soldier's morale back, some guards catch a batch of fire nation spies! Morale goes shooting through the roof!");
                            updateReputation('Team Avatar', 2);}
                            updateSkill('stealth', 2,);
                            updateSkill('combat', 1)
            break;
            }

    
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startOpt1EarthChapter14}
        ]);
    }, 300);
}

function handleOpt2EarthChapter13Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(" You order the team to fortify their position, using Earthbending to create strong defenses. The team hunkers down, preparing for a long and grueling siege."
            );
            updateSkill('diplomacy', 3);
            updateReputation('Team Avatar', 2);
            break;

        case 2:
            updateStoryText(
                "You send a small team, including Sokka and Katara, to sabotage the Fire Nation's supply lines. The mission is risky, but it buys the team some breathing room as the enemy scrambles to recover."
            );
            updateSkill('stealth', 3);
            updateReputation('Team Avatar', 2);
            break;

        case 3:
            updateStoryText(
                "You prioritize healing the wounded and regrouping. Katara works tirelessly to tend to the injured, while Aang meditates to regain his strength. The team is battered but determined to fight another day."
            );
            updateSkill('wisdom', 3);
            updateReputation('Team Avatar', 2);
            break;

        case 4:
            updateStoryText("You make the difficult decision to evacuate to a safer location. The team retreats under cover of darkness, leaving behind their hard-fought position. It's a blow to morale, but survival comes first")
            updateSkill('leadership', 2)
            break;

    }


    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startOpt2EarthChapter14 }
        ]);
    }, 300);
}