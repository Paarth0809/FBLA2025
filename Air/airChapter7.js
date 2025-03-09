import { startAirChapter8 } from './airChapter8.js';
import { updateHealth, updateSkill, updateReputation, addToInventory, addAlly, randomInt, updateEnergy } from '../utilityFunctions.js';
import { items } from '../items.js';
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
        <p>Aang and his friends encounter Jet, who proposes a daring plan to strike at a Fire Nation encampment. While Aang appreciates Jet's fervor for freedom, he worries about the safety of innocents. The choice Aang makes here could define his approach to the challenges ahead.</p>
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
            updateSkill('tactics', 2);
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
        updateChoices([
            { text: "Continue", action: startAirChapter8 }
        ]);
    }, 300);
}

function handleOpt2AirChapter7Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("In solitude, you take a long, hard look at the path you've walked. The pain you've caused, the relentless pursuit of an ideal that seems ever out of reach. Perhaps the honor you seek lies not in the approval of others, but in the integrity of your actions.");
            updateSkill('introspection', 2);
            if (skillCheck('introspection', 12)) {
                updateHealth(5);
                updateStoryText("This period of reflection strengthens your resolve and heals old wounds, both physical and emotional.");
            } else {
                updateHealth(-5);
                updateStoryText("While you strive for clarity, the answers remain just beyond your grasp, leading to frustration.");
            }
            break;
        case 2:
            updateStoryText("Uncle Iroh has always been a source of wisdom and guidance. You turn to him now, seeking advice on how to proceed. His words, simple yet profound, encourage you to look inward for the honor you seek.");
            updateSkill('wisdom', 2);
            if (skillCheck('wisdom', 14)) {
                updateHealth(10);
                updateStoryText("Iroh's guidance illuminates a path forward, one that promises true redemption and peace.");
            } else {
                updateHealth(-10);
                updateStoryText("The lessons are difficult to accept, and you struggle to apply them, causing further turmoil.");
            }
            break;
        case 3:
            updateStoryText("The weight of your past actions and the realization that your quest may have been misguided compel you to consider a new path. One that leads away from the shadows of your father's expectations and towards a light of your own making.");
            updateSkill('determination', 2);
            if (skillCheck('determination', 13)) {
                updateHealth(5);
                updateStoryText("With a newfound resolve, you begin to carve out a new destiny, one step at a time.");
            } else {
                updateHealth(-5);
                updateStoryText("Doubt plagues your decision, making the first steps of this new journey the hardest you've ever taken.");
            }
            break;
        case 4:
            updateStoryText("Determined to confront the source of your turmoil, you seek out Azula. You demand answers, hoping to understand her betrayals and perhaps find closure.");
            updateSkill('combat', 2);
            if (skillCheck('combat', 15)) {
                updateHealth(-10);
                updateStoryText("The confrontation is intense, and while it sheds light on Azula's ambitions, it leaves you with more questions about your own path.");
            } else {
                updateHealth(-20);
                updateStoryText("Azula's prowess overpowers you, deepening your wounds and forcing you to retreat, your questions unanswered.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startAirChapter8 }
        ]);
    }, 300);
}
//Fire code end