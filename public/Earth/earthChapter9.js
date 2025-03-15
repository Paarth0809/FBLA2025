//Get imports

import { startEarthChapter10 } from './earthChapter10.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateSkill, updateReputation } from '../utilityFunctions.js';
import { gameState } from '../gameState.js';

export function startOpt1EarthChapter9() {
    gameState.currentChapter = 9;
    displayOpt1EarthChapter9();
}

export function startOpt2EarthChapter9() {
    gameState.currentChapter = 9;
    displayOpt2EarthChapter9();
}

function displayOpt1EarthChapter9() {
    const chapter9Text = `
        <h2>Chapter 9: Training Aang</h2>
        <p>With the Fire Nation's forces growing stronger, you focus on training Aang in advanced Earthbending techniques. You teach him how to use Earthbending defensively and how to channel his inner strength.</p>
        <p>You must decide: how will you train Aang?</p>
    `;
    updateStoryText(chapter9Text);
    updateChoices([
        { text: "Focus on defensive techniques", action: () => handleOpt1EarthChapter9Choice(1) },
        { text: "Teach offensive Earthbending moves", action: () => handleOpt1EarthChapter9Choice(2) },
        { text: "Train Aang in Metalbending", action: () => handleOpt1EarthChapter9Choice(3) },
        { text: "Help Aang connect with the spiritual side of Earthbending", action: () => handleOpt1EarthChapter9Choice(4) }
    ]);
}

function displayOpt2EarthChapter9() {
    const chapter9Text = `
        <h2>Chapter 9: Training Aang</h2>
        <p>With the Fire Nation's forces growing stronger, you focus on training Aang in advanced Earthbending techniques. You teach him how to use Earthbending defensively and how to channel his inner strength.</p>
        <p>You must decide: how will you train Aang?</p>
    `;
    updateStoryText(chapter9Text);
    
        updateChoices([
            { text: "Train Aang in advanced Earthbending", action: () => handleOpt2EarthChapter9Choice(1) },
            { text: "Strengthen the city's defenses", action: () => handleOpt2EarthChapter9Choice(2) },
            { text: "Gather intelligence on the Fire Nation's plans", action: () => handleOpt2EarthChapter9Choice(3) },
            { text: "Boost the morale of the Earth Kingdom's forces", action: () => handleOpt2EarthChapter9Choice(4) }
        ]);
}

function handleOpt1EarthChapter9Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`
                <p>You focus on teaching Aang defensive techniques, such as creating barriers and redirecting attacks. Aang becomes a master of defense, able to withstand even the strongest Firebending assaults.</p>
            `);
            updateSkill('wisdom', 2); // Improves Earthbending skills
            updateReputation('Team Avatar', 1); // Increases reputation with Team Avatar
            break;

        case 2:
            updateStoryText(`
                <p>You teach Aang offensive Earthbending moves, such as launching boulders and creating fissures. Aang becomes a formidable Earthbender, capable of taking the fight to the Fire Nation.</p>
            `);
            updateSkill('wisdom', 2); // Improves Earthbending skills
            updateReputation('Team Avatar', 1); // Increases reputation with Team Avatar
            break;

        case 3:
            updateStoryText(`
                <p>You train Aang in Metalbending, teaching him how to sense and manipulate the impurities in metal. Aang becomes a versatile fighter, capable of using Metalbending in battle.</p>
            `);
            updateSkill('wisdom', 2); 
            break;

        case 4:
            updateStoryText(`
                <p>You help Aang connect with the spiritual side of Earthbending, teaching him to listen to the earth and draw strength from it. Aang becomes more in tune with the elements, enhancing his overall bending abilities.</p>
            `);
            updateSkill('wisdom', 2); // Improves spirituality for connecting with the elements
            updateReputation('Team Avatar', 1); // Increases reputation with Team Avatar
            break;
    }

    // Proceed to the next chapter after a short delay
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startEarthChapter10 }
        ]);
    }, 300);
}


function handleOpt2EarthChapter9Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`
                <p>You train Aang in advanced Earthbending techniques, ensuring that he is ready to face Fire Lord Ozai. Aang becomes a master of Earthbending, capable of holding his own in the final battle.</p>
            `);
            updateSkill('wisdom', 2); 
            updateReputation('Team Avatar', 1); 
            break;

        case 2:
            updateStoryText(`
               <p>You strengthen the city's defenses, using your Earthbending to reinforce the walls and create traps for the Fire Nation. The city becomes a fortress, ready to withstand any attack.</p>
            `);
            updateSkill('leadership', 2); 
            updateReputation('earth.kingdom', 1); 
            break;

        case 3:
            updateStoryText(`
                <p>You gather intelligence on the Fire Nation's plans, using your stealth and perception to uncover their strategies. With this knowledge, the group is able to prepare for the final battle.</p>
            `);
            updateSkill('wisdom', 2);
            updateSkill('stealth', 2)
            updateReputation('Team Avatar', 1);
            break;

        case 4:
            updateStoryText(`
                <p>You boost the morale of the Earth Kingdom's forces, inspiring them with your determination and leadership. The soldiers are ready to fight with everything they have.</p>
            `);
            updateSkill('leadership', 3); 
            updateReputation('earth.kingdom', 1);
            break;
    }

    
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startEarthChapter10 }
        ]);
    }, 300);
}