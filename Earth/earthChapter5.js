//Get imports

import { startOpt1EarthChapter6, startOpt2EarthChapter6 } from './earthChapter6.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateSkill, updateReputation, addToInventory } from '../utilityFunctions.js';
import { gameState } from '../gameState.js';

export function startEarthChapter5() {
    gameState.currentChapter = 5;
    displayEarthChapter5();
}

function displayEarthChapter5() {
    const chapter5Text = `
        <h2>Chapter 5: The Library</h2>
        <p> Team Avatar travels to the Si Wong Desert in search of the legendary Wan Shi Tong's library, a place that's said to contain knowledge about the Fire Nation's weaknesses. Sokka is very eager in getting the information neccessary in order to win the war. 
        </p>
        <p>Once you arrive, you meet professor Zei, who warns you about the guardian of the library, an owl spirit by the name of Wan Shi Tong. The owl is fiercly protective of the knowledge and doesn't allow for it to be used for violence. 
        </p>
        <p>You must decide: will you help Sokka find the information he needs, or will you respect Wan Shi Tong's rules and avoid provoking him?</p>
       
    `;
    updateStoryText(chapter5Text);
    updateChoices([
        { text: "Help Sokka find the information. ", action: () => handleEarthChapter5Choice(1) },
        {text: "Respect Wan Shi Tong's rules. ", action: () => handleEarthChapter5Choice(2)}
        
    ]);
}

function handleEarthChapter5Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`
                <p>You help Sokka search the library for information about the Fire Nation. 
                Together, you discover a map that reveals the location of the Fire Nation's airship fleet. 
                However, Wan Shi Tong catches you and becomes enraged, sinking the library into the desert.</p>
                 <p>You barely escape with the map, but the knowledge comes at a cost: the library is lost forever.</p>
            `);
            updateSkill('stealth', -1);
            addToInventory('airshipMap')
            setTimeout(() => {
                updateChoices([
                    { text: "Continue", action: startOpt1EarthChapter6 }
                ]);
            }, 300);
            break;
        case 2:
            updateStoryText(`
                <p>You decide to respect Wan Shi Tong's rules and avoid provoking him. While Sokka is disappointed, you remind him that some knowledge comes with too high a price.</p>
                <p>You leave the library empty-handed but with your integrity intact.</p>
            
            `);
            updateSkill('diplomacy', 2); 
            updateReputation('Team Avatar', 1); 
            setTimeout(() => {
                updateChoices([
                    { text: "Continue", action: startOpt2EarthChapter6 }
                ]);
            }, 300);
            break;
         
    }
}