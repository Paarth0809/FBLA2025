import { startAirChapter8 } from './airChapter8.js';
import { updateHealth, updateSkill, updateReputation, addAlly, randomInt, updateEnergy } from '../utilityFunctions.js';
import { playVideo } from '../cutscenes.js';
import { gameState } from '../gameState.js';
import { characters } from '../characters.js';
import { skillCheck } from '../gameMechanics.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';

// Air code start for Option 1
export function startOpt1AirChapter7() {
    gameState.currentChapter = 7;
    displayOpt1AirChapter7();
}

export function startOpt2AirChapter7() {
    gameState.currentChapter = 7;
    displayOpt2AirChapter7();
}


function displayOpt1AirChapter7() {
    const chapter7Text = `
        <h2>Chapter 7: Jet and the Freedom Fighters</h2>
        <p>You and your friends encounter Jet, who proposes a daring plan to strike at a Fire Nation encampment. While you appreciate Jet's fervor for freedom, you worry about the safety of innocents. The choice you make here could define your approach to the challenges ahead.</p>
    `;
    updateStoryText(chapter7Text);
    updateChoices([
        { text: "Agree to Jet's plan with caution", action: () => handleOpt1AirChapter7Choice(1) },
        { text: "Argue for a non-violent approach", action: () => handleOpt1AirChapter7Choice(2) },
        { text: "Decide to scout the encampment first", action: () => handleOpt1AirChapter7Choice(3) },
        { text: "Walk away from Jet's plan entirely", action: () => handleOpt1AirChapter7Choice(4) }
    ]);
}

function displayOpt2AirChapter7() {
    const chapter7Text = `
        <h2>Chapter 7: Jet and the Freedom Fighters</h2>
        <p>Seeing the potential for needless violence in Jet's aggressive strategies, Aang decides to take a more assertive role. He aims to redirect Jet's fervor towards a path that aligns more closely with the Air Nomad's principles of non-violence and protection of the innocent. This delicate negotiation tests Aang's diplomatic skills and his ability to inspire change in others.</p>
    `;
    updateStoryText(chapter7Text);
    updateChoices([
        { text: "Organize a peaceful demonstration", action: () => handleOpt2AirChapter7Choice(1) },
        { text: "Sabotage Fire Nation supplies non-violently", action: () => handleOpt2AirChapter7Choice(2) },
        { text: "Create a diversion to free captured villagers", action: () => handleOpt2AirChapter7Choice(3) },
        { text: "Use bending skills to intimidate without harm", action: () => handleOpt2AirChapter7Choice(4) }
    ]);
}


function handleOpt1AirChapter7Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("Aang agrees to help Jet, but remains vigilant to avoid unnecessary harm. Their careful approach minimizes casualties, but the moral dilemma weighs heavily on Aang.");
            updateSkill('wisdom', 2);
            break;
        case 2:
            updateStoryText("Aang persuades Jet to consider the consequences of his actions, advocating for a solution that doesn't harm innocents. Jet is reluctantly convinced, showing a new respect for Aang.");
            updateReputation(5);
            break;
        case 3:
            updateStoryText("Choosing to be cautious, Aang and his friends scout the encampment, discovering that civilians are present. They manage to thwart Jet's plan, saving innocent lives.");
            updateSkill('stealth', 2);
            break;
        case 4:
            updateStoryText("Aang decides Jet's aggressive tactics are too risky and chooses to leave, focusing on their mission to master the elements. Jet is disappointed, but Aang knows it's the right decision.");
            updateReputation(-5);
            break;
    }
    setTimeout(() => {
        updateChoices([{ text: "Continue", action: () => { startAirChapter8(); playVideo('airCutscene8.mp4'); } }]);
    }, 300);
}

function handleOpt2AirChapter7Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("Aang organizes a peaceful demonstration, showing the strength of non-violent resistance and the power of united voices.");
            updateSkill('diplomacy', 2);
            if (skillCheck('diplomacy', 12)) {
                updateHealth(5);
                updateStoryText("The demonstration inspires change, earning respect and support from both allies and some within the Fire Nation.");
            } else {
                updateHealth(-5);
                updateStoryText("The peaceful protest faces resistance, but Aang's commitment to non-violence prevents escalation.");
            }
            break;
        case 2:
            updateStoryText("Aang decides to sabotage Fire Nation supplies using stealth, ensuring no harm comes to anyone.");
            updateSkill('stealth', 2);
            if (skillCheck('stealth', 14)) {
                updateHealth(5);
                updateStoryText("The plan is executed perfectly, causing confusion among the Fire Nation ranks without casualties.");
            } else {
                updateHealth(-5);
                updateStoryText("The sabotage attracts unwanted attention, yet Aang's quick thinking prevents any harm.");
            }
            break;
        case 3:
            updateStoryText("Aang leads a strategic diversion to free captured villagers, showcasing his leadership and tactical acumen.");
            updateSkill('leadership', 2);
            if (skillCheck('leadership', 13)) {
                updateHealth(5);
                updateStoryText("The operation is a success, demonstrating Aang's ability to lead and inspire courage in others.");
            } else {
                updateHealth(-5);
                updateStoryText("The diversion almost fails, but Aang's resolve strengthens his team, preventing disaster.");
            }
            break;
        case 4:
            updateStoryText("Aang uses a display of airbending to intimidate the Fire Nation soldiers, proving that power can be used to protect without causing harm.");
            updateSkill('wisdom', 2);
            if (skillCheck('wisdom', 15)) {
                updateHealth(5);
                updateStoryText("The soldiers retreat, awed by Aang's power and his choice to use it for peace rather than violence.");
            } else {
                updateHealth(-5);
                updateStoryText("While the attempt does not go as planned, Aang's wisdom ensures no lives are lost.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([{ text: "Continue", action: () => { startOAirChapter8(); playVideo('airCutscene8.mp4'); } }]);
    }, 300);
}