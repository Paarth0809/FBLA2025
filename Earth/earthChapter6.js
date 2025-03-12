//Get imports

import { startOpt1EarthChapter7,startOpt2EarthChapter7 } from './earthChapter7.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateSkill, updateReputation, addToInventory } from '../utilityFunctions.js';
import { gameState } from '../gameState.js';

export function startOpt1EarthChapter6() {
    gameState.currentChapter = 6;
    displayOpt1EarthChapter6();
}

export function startOpt2EarthChapter6() {
    gameState.currentChapter = 6;
    displayOpt2EarthChapter6();
}

function displayOpt1EarthChapter6() {
    const chapter6AText = `
        <h2>Chapter 6: The Airship Fleet Plan</h2>
        <p>With the map of the Fire Nation's airship fleet in hand, Team Avatar begins planning an attack. Sokka is determined to use the information to strike a decisive blow against the Fire Nation, but the group knows the mission will be dangerous.</p>
        <p>You suggest using your Earthbending skills to sabotage the airships from the ground, but Sokka argues that infiltrating the fleet directly would be more effective. The group looks to you for the final decision.</p>
        <p>You must decide: how will you approach the attack on the airship fleet?</p>
    `;
    updateStoryText(chapter6AText);
    updateChoices([
        { text: "Sabotage the airships from the ground", action: () => handleOpt1EarthChapter6Choice(1) },
        { text: "Infiltrate the fleet with Sokka", action: () => handleOpt1EarthChapter6Choice(2) },
        { text: "Create a diversion to draw the fleet away", action: () => handleOpt1EarthChapter6Choice(3) },
        { text: "Scout the fleet for weaknesses", action: () => handleOpt1EarthChapter6Choice(4) }
    ]);
}

function displayOpt2EarthChapter6() {
    const chapter6AText = `
        <h2>Chapter 6: The Airship Fleet Plan</h2>
        <p>With the map of the Fire Nation's airship fleet in hand, Team Avatar begins planning an attack. Sokka is determined to use the information to strike a decisive blow against the Fire Nation, but the group knows the mission will be dangerous.</p>
        <p>You suggest using your Earthbending skills to sabotage the airships from the ground, but Sokka argues that infiltrating the fleet directly would be more effective. The group looks to you for the final decision.</p>
        <p>You must decide: how will you approach the attack on the airship fleet?</p>
    `;
    updateStoryText(chapter6AText);
    updateChoices([
        { text: "Sabotage the airships from the ground", action: () => handleOpt2EarthChapter6Choice(1) },
        { text: "Infiltrate the fleet with Sokka", action: () => handleOpt2EarthChapter6Choice(2) },
        { text: "Create a diversion to draw the fleet away", action: () => handleOpt2EarthChapter6Choice(3) },
        { text: "Scout the fleet for weaknesses", action: () => handleOpt2EarthChapter6Choice(4) }
    ]);
}

function handleOpt1EarthChapter6Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`
                <p>You use your Earthbending skills to create massive sinkholes beneath the airship landing sites, crippling the fleet before it can take off. The Fire Nation is caught off guard, and the group celebrates your quick thinking.</p>
                <p>However, the Fire Nation quickly repairs the damage, and the fleet is back in action within days.</p>
            `);
            updateSkill('combat', 2); // Improves Earthbending skills
            updateReputation('Team Avatar', 1); // Increases reputation with Team Avatar
            break;

        case 2:
            updateStoryText(`
                <p>You agree to support Sokka's plan to infiltrate the fleet. Together, you sneak aboard one of the airships and sabotage its engines, causing it to crash into the ocean.</p>
                <p>The mission is a success, but the Fire Nation tightens security, making future attacks more difficult.</p>
            `);
            updateSkill('stealth', 2); // Improves stealth for infiltration
            updateReputation('Team Avatar', 1); // Increases reputation with Team Avatar
            break;

        case 3:
            updateStoryText(`
                <p>You create a diversion by causing a massive landslide near the fleet's base. The Fire Nation sends troops to investigate, leaving the airships vulnerable.</p>
                <p>While the diversion works, the Fire Nation quickly realizes it's a trick and reinforces their defenses.</p>
            `);
            updateReputation('Team Avatar', 1); // Increases reputation with Team Avatar
            break;

        case 4:
            updateStoryText(`
                <p>You scout the fleet for weaknesses, using your Earthbending to remain hidden. You discover that the airships are vulnerable to attacks on their fuel lines.</p>
                <p>With this knowledge, the group plans a more effective attack.</p>
            `);
            updateSkill('wisdom', 2); // Improves perception for scouting
            updateReputation('Team Avatar', 1); // Increases reputation with Team Avatar
            break;
    }

    // Proceed to the next chapter after a short delay
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startOpt1EarthChapter7 }
        ]);
    }, 300);
}

function handleOpt2EarthChapter6Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(`
                 <p>You travel to Ba Sing Se to meet the Earth King. However, you quickly realize that the city is under the control of the Dai Li, who are hiding the truth about the war from the Earth King.</p>
                <p>You must navigate the city's politics to gain an audience with the Earth King.</p>
            `);
            updateSkill('diplomacy', 2); 
            updateReputation('earth.kingdom', 1); 
            break;

        case 2:
            updateStoryText(`
                 <p>You rally the scattered Earth Kingdom forces, traveling from village to village to unite them under a common cause. The people are inspired by your leadership and join the fight against the Fire Nation.</p>
            `);
            updateSkill('leadership', 2); // Improves stealth for infiltration
            updateReputation('earth.kingdom', 1); // Increases reputation with Team Avatar
            break;

        case 3:
            updateStoryText(`
               <p>You seek out the Kyoshi Warriors, a group of skilled fighters who have defended their island for generations. They agree to join your cause, bringing their unique combat skills to the fight.</p>
            `);
            updateSkill('combat', 2 ); // Increases reputation with Team Avatar
            updateReputation('earth.kingdom', 1)
            break;

        case 4:
            updateStoryText(`
                <p>You train local villagers to defend themselves, teaching them basic Earthbending techniques and self-defense. While they are not as skilled as you, their confidence grows, and they are better prepared to protect their homes.</p>
            `);
            updateSkill('leadership', 2); // Improves perception for scouting
            updateReputation('earth.kingdom', 1); // Increases reputation with Team Avatar
            break;
    }

    // Proceed to the next chapter after a short delay
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startOpt2EarthChapter7 }
        ]);
    }, 300);
}