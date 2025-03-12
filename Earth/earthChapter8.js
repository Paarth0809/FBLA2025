//Get imports

import { startOpt1EarthChapter9, startOpt2EarthChapter9 } from './earthChapter9.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateSkill, updateReputation, addToInventory } from '../utilityFunctions.js';
import { gameState } from '../gameState.js';

export function startOpt1EarthChapter8() {
    gameState.currentChapter = 8;
    displayOpt1EarthChapter8();
}

export function startOpt2EarthChapter8() {
    gameState.currentChapter = 9;
    displayOpt2EarthChapter8();
}


function displayOpt1EarthChapter8() {
    const chapter8Text = `
        <h2>Chapter 8: Infiltrating the Fire Nation Factory</h2>
        <p>Team Avatar learns of a Fire Nation factory producing advanced war machines. Sokka suggests infiltrating the factory to gather intel and sabotage their operations.</p>
        <p>You must decide: how will you approach the infiltration?</p>
    `;
    updateStoryText(chapter8Text);
    updateChoices([
        { text: "Lead the infiltration with stealth", action: () => handleOpt1EarthChapterChoice(1) },
        { text: "Create a distraction to cover the group's entry", action: () => handleOpt1EarthChapterChoice(2) },
        { text: "Use Metalbending to disable the factory's defenses", action: () => handleOpt1EarthChapterChoice(3) },
        { text: "Scout the factory for weaknesses before attacking", action: () => handleOpt1EarthChapterChoice(4) }
    ]);
}
function displayOpt2EarthChapter8() {
    const chapter8BText = `
        <h2>Chapter 8: The United Front</h2>
<p>With the Earth King's support, Team Avatar begins organizing a united front against the Fire Nation. You must decide how to allocate resources and prepare for the upcoming battle.</p>
<p>You must decide: how will you prepare for the invasion?</p>
    `;
    updateStoryText(chapter8BText);
    updateChoices([

            { text: "Train the Earth Kingdom's soldiers", action: () => handleOpt2EarthChapter8Choice(1) },
            { text: "Fortify the city's defenses", action: () => handleOpt2EarthChapter8BChoice(2) },
            { text: "Gather supplies and weapons", action: () => handleOpt2EarthChapter8BChoice(3) },
            { text: "Plan a surprise attack on the Fire Nation", action: () => handleOpt2EarthChapter8BChoice(4) }
        ]);
    
}



function handleOpt1EarthChapterChoice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`
                <p>You lead the infiltration with stealth, using your Earthbending to remain hidden. The group gathers valuable intel and sabotages the production line, delaying the Fire Nation's war efforts.</p>
                <p>However, the mission is risky, and you barely escape with your lives.</p>
            `);
            updateSkill('stealth', 2); 
            updateReputation('Team Avatar', 1);
            if (skillCheck('stealth', 12)) {
                updateStoryText("Despite having a physical ddisability you prove to be sneaky and quick! This will come in handy later during combat!");
                        updateSkill('combat', 2); 
             } break;

        case 2:
            updateStoryText(`
                <p>You create a distraction by causing a small earthquake near the factory. While the Fire Nation investigates, the group sneaks in and sabotages the machinery.</p>
                <p>The mission is a success, but the Fire Nation tightens security at their facilities.</p>
            `);
            updateSkill('combat', 2); 
            updateReputation('Team Avatar', 1); 
            break;

        case 3:
            updateStoryText(`
                <p>You use Metalbending to disable the factory's defenses, allowing the group to infiltrate without resistance. The mission is a success, and the Fire Nation's production is severely delayed.</p>
            `);
            updateSkill('combat', 2); 
            updateReputation('Team Avatar', 1); 
            break;

        case 4:
            updateStoryText(`
                <p>You scout the factory for weaknesses, using your Earthbending to remain hidden. You discover that the factory's power source is vulnerable to sabotage.</p>
                <p>With this knowledge, the group plans a more effective attack.</p>
            `);
            updateSkill('wisdom', 2); // Improves perception for scouting
            updateReputation('Team Avatar', 1); // Increases reputation with Team Avatar
            break;
    }

    // Proceed to the next chapter after a short delay
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startOpt1EarthChapter9 }
        ]);
    }, 300);
}


function handleOpt2EarthChapter8Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`
                <p>You train the Earth Kingdom's soldiers, teaching them advanced Earthbending techniques and combat strategies. The soldiers become a formidable force, ready to face the Fire Nation.</p>
            `);
            updateSkill('leadership', 1); // Improves stealth for infiltration
            updateReputation('Team Avatar', 1); // Increases reputation with Team Avatar
            break;

        case 2:
            updateStoryText(`
                <p>You fortify the city's defenses, using your Earthbending to create massive walls and barriers. The city becomes nearly impregnable, giving the Earth Kingdom a stronghold against the Fire Nation.</p>
            `);
            updateSkill('combat', 2); // Improves strategy for creating diversions
            updateReputation('Team Avatar', 1); // Increases reputation with Team Avatar
            break;

        case 3:
            updateStoryText(`
                <p>You gather supplies and weapons, ensuring that the Earth Kingdom's forces are well-equipped for the upcoming battle. The soldiers are grateful for your efforts and morale is high.</p>
            `);
            updateSkill('combat', 2); // Improves Metalbending skills
            updateReputation('Team Avatar', 1); // Increases reputation with Team Avatar
            break;

        case 4:
            updateStoryText(`
                <p>You plan a surprise attack on the Fire Nation, using your knowledge of their weaknesses to strike a decisive blow. The attack is successful, and the Fire Nation is forced to retreat.</p>
            `);
            updateSkill('wisdom', 2); // Improves perception for scouting
            updateReputation('Team Avatar', 1); // Increases reputation with Team Avatar
            break;
    }

    
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startOpt2EarthChapter9 }
        ]);
    }, 300);
}