//Get imports

import { startOpt1EarthChapter8, startOpt2EarthChapter8 } from './earthChapter8.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkill, updateReputation, addToInventory } from '../gameFunctions/utilityFunctions.js';
import { gameState } from '../gameFunctions/gameState.js';

export function startOpt1EarthChapter7() {
    gameState.currentChapter = 7;
    displayOpt1EarthChapter7();
}

export function startOpt2EarthChapter7() {
    gameState.currentChapter = 7;
    displayOpt2EarthChapter7();
}

function displayOpt1EarthChapter7() {
    const chapter7AText = `
        <h2>Chapter 7A: The Invention of Metalbending</h2>
        <p>After the mission, you begin experimenting with ways to improve your Earthbending. While trapped in a metal box by Fire Nation soldiers, you discover that you can sense the impurities in the metal and bend it to your will.</p>
        <p>You've invented Metalbending—a technique no one has ever mastered before. The group is amazed by your discovery, and you begin teaching Aang and the others how to use it.</p>
        <p>You must decide: how will you use your newfound Metalbending skills?</p>
    `;
    updateStoryText(chapter7AText);
    updateChoices([
        { text: "Perfect Metalbending through intense training", action: () => handleOpt1EarthChapter7Choice(1) },
        { text: "Use Metalbending to sabotage Fire Nation machinery", action: () => handleOpt1EarthChapter7Choice(2) },
        { text: "Teach Metalbending to Aang and the others", action: () => handleOpt1EarthChapter7Choice(3) },
        { text: "Experiment with Metalbending to create new techniques", action: () => handleOpt1EarthChapter7Choice(4) }
    ]);
}



function displayOpt2EarthChapter7() {
    const chapter7BText = `
        <h2>Chapter 7B: The Earth King's Court</h2>
<p>In Ba Sing Se, you navigate the city's complex politics to gain an audience with the Earth King. However, the Dai Li, led by Long Feng, are determined to keep the truth about the war hidden.</p>
<p>You must decide: how will you expose the Dai Li's deception and convince the Earth King to join the fight?</p>
    `;
    updateChoices([
        { text: "Gather evidence of the Dai Li's deception", action: () => handleOpt2EarthChapter7Choice(1) },
        { text: "Confront Long Feng directly", action: () => handleOpt2EarthChapter7Choice(2) },
        { text: "Seek help from the city's underground resistance", action: () => handleOpt2EarthChapter7Choice(3) },
        { text: "Use your Earthbending to expose the truth", action: () => handleOpt2EarthChapter7Choice(4) }
    ]);
}
function handleOpt1EarthChapter7Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`
                <p>You spend weeks perfecting Metalbending, developing new techniques and training Aang and the others. Your skills grow exponentially, and you become a master of this new art.</p>
                <p>When the time comes to face the Fire Nation, you're ready to unleash your full power.</p>
            `);
            updateSkill('wisdom', 3); 
            updateReputation('Team Avatar', 1); 
            break;

        case 2:
            updateStoryText(`
                <p>You immediately use Metalbending to strike back at the Fire Nation, sabotaging their machinery and weapons. The Fire Nation is caught off guard, and your attacks cause significant damage.</p>
                <p>However, your lack of mastery limits your effectiveness, and the Fire Nation begins developing countermeasures.</p>
            `);
            updateSkill('combat', 1); 
            updateReputation('Team Avatar', 1); 
            break;

        case 3:
            updateStoryText(`
                <p>You teach Metalbending to Aang and the others, sharing your knowledge and helping them master the technique. The group becomes stronger and more versatile in battle.</p>
            `);
            updateSkill('leadership', 1); 
            updateReputation('Team Avatar', 1); 
            break;

        case 4:
            updateStoryText(`
                <p>You experiment with Metalbending, creating new techniques like metal armor and weaponry. Your innovations give the group a significant advantage in battle.</p>
            `);
            updateSkill('wisdom', 1); 
            updateReputation('Team Avatar', 1); 
            break;
           
            
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startOpt1EarthChapter8 }
        ]);
    }, 300);
    }
    function handleOpt2EarthChapter7Choice(choice) {
        switch (choice) {
            case 1:
                updateStoryText(`
                     <p>You gather evidence of the Dai Li's deception, uncovering documents and testimonies that prove their involvement in hiding the war from the Earth King. When presented with the evidence, the Earth King is shocked and agrees to join the fight.</p>
                `);
                updateSkill('wisdom', 3); // Improves Metalbending skills
                updateReputation('Team Avatar', 1); // Increases reputation with Team Avatar
                break;
    
            case 2:
                updateStoryText(`
                     <p>You confront Long Feng directly, challenging his authority and demanding that he reveal the truth to the Earth King. Long Feng tries to silence you, but your determination forces him to back down.</p>
                `);
                updateSkill('combat', 1); 
                updateReputation('Team Avatar', 1); 
                break;
    
            case 3:
                updateStoryText(`
                     <p>You seek help from the city's underground resistance, a group of citizens who have been fighting against the Dai Li's oppression. Together, you expose the truth to the Earth King and gain his support.</p>
                `);
                updateSkill('leadership', 1); 
                updateReputation('Team Avatar', 1); 
                break;
    
            case 4:
                updateStoryText(`
                   <p>You use your diplomatic skills to sway the Earth King, presenting a compelling argument about the importance of joining the fight. The Earth King is convinced and agrees to support your cause.</p>
                `);
                updateSkill('diplomacy', 1); 
                updateReputation('Team Avatar', 1); 
                break;
              
        }
    
        setTimeout(() => {
            updateChoices([
                { text: "Continue", action: startOpt2EarthChapter8 }
            ]);
        }, 300);
}