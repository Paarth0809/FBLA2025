//Get imports

import { startEarthChapter2 } from './earthChapter2.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateSkill } from '../utilityFunctions.js';
import { gameState } from '../gameState.js';


export function startEarthChapter1() {
    gameState.currentChapter = 1;
    displayEarthChapter1()

    function displayEarthChapter1(){
    const chapter1Text = `
    <h2>Chapter 1: The Earth Bender's Secret</h2>
    <p> While exploring 
    the Earth Kingdom, you come across an abandoned cave that's filled with ancient Earthbending moves on the walls.</p>
    `;

    updateStoryText(chapter1Text);
    updateChoices([
        { text: "Trace the moves on the wall with your hands, and try them out", action: () => handleEarthChapter1Choice(1) },
        { text: "Ignore the inscriptions on the wall", action: () => handleEarthChapter1Choice(2) },
        { text: "Report the inscriptions on the wall to the Earth Guards", action: () => handleEarthChapter1Choice(3)}
    ]);}
}

function handleEarthChapter1Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You learn new Earthbending skills!");
            updateSkill('wisdom', 2);
            break;

        case 2:
            updateStoryText("You ignore the inscriptions and continue exploring.");
            break;

        case 3:
            updateStoryText("You tell the Earth Guards, and they praise you for your loyalty to the Kingdom!");
            updateSkill('diplomacy', 1);
            break;
    }

  
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startEarthChapter2}
        ]);
    }, 300);
}