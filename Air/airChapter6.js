import { startOpt1AirChapter7, startOpt2AirChapter7 } from './airChapter7.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateHealth, updateEnergy, updateSkill, updateReputation, addToInventory } from '../utilityFunctions.js';
import { items } from '../items.js';
import { gameState } from '../gameState.js';
import { randomInt } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';

// Aang's story start
export function startOpt1AirChapter6() {
    gameState.currentChapter = 6;
    displayOpt1AirChapter6();
}

export function startOpt2AirChapter6() {
    gameState.currentChapter = 6;
    displayOpt2AirChapter6();
}

function displayOpt1AirChapter6() {
    const chapter6Text = `
        <h2>Chapter 6: The Spirit World</h2>
        <p>Aang finds himself in the mysterious and ethereal Spirit World, seeking the wisdom to save the Northern Water Tribe and to learn more about the Avatar State. In this realm, physical strength means little, and Aang must rely on his spiritual prowess and understanding. His journey here will test him in ways the physical world could not.</p>
    `;
    updateStoryText(chapter6Text);
    updateChoices([
        { text: "Seek the guidance of Avatar Roku", action: () => handleOpt1AirChapter6Choice(1) },
        { text: "Attempt to communicate with the spirits of nature", action: () => handleOpt1AirChapter6Choice(2) },
        { text: "Learn to control your presence in the Spirit World", action: () => handleOpt1AirChapter6Choice(3) },
        { text: "Search for a way back to the physical world", action: () => handleOpt1AirChapter6Choice(4) }
    ]);
}

function displayOpt2AirChapter6() {
    const chapter6Text = `
        <h2>Chapter 6: The Spirit World</h2>
        <p>During a desperate attempt to protect his friends, Aang unintentionally enters the Spirit World, where he faces the dual challenge of aiding the Northern Water Tribe from a realm where he cannot physically interact and learning crucial insights about the Avatar State. This journey requires Aang to navigate the enigmatic Spirit World, seeking help from spirits and past Avatars to influence the physical world and prepare for the impending battle.</p>
    `;
    updateStoryText(chapter6Text);
    updateChoices([
        { text: "Confront the malevolent spirit Koh", action: () => handleOpt2AirChapter6Choice(1) },
        { text: "Seek wisdom from the Moon and Ocean Spirits", action: () => handleOpt2AirChapter6Choice(2) },
        { text: "Explore the Spirit World for hidden knowledge", action: () => handleOpt2AirChapter6Choice(3) },
        { text: "Negotiate with the spirit of an ancient guardian", action: () => handleOpt2AirChapter6Choice(4) }
    ]);
}

function handleOpt1AirChapter6Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("Aang seeks out Roku, hoping for insights into his destiny and the balance between the worlds.");
            updateSkill('spiritual', 2);
            if (skillCheck('spiritual', 10)) {
                updateEnergy(5);
                updateStoryText("Roku imparts wisdom that strengthens Aang's resolve and spiritual connection.");
            } else {
                updateEnergy(-5);
                updateStoryText("Though the meeting is enlightening, Aang struggles to grasp the full depth of Roku's teachings.");
            }
            break;
        case 2:
            updateStoryText("Aang reaches out to the spirits of nature, seeking allies in the coming battle.");
            updateSkill('communication', 2);
            if (skillCheck('communication', 12)) {
                updateReputation(5);
                updateStoryText("His genuine plea earns him the favor of powerful spirits.");
            } else {
                updateReputation(-5);
                updateStoryText("The spirits remain distant, wary of Aang's unsettled spirit.");
            }
            break;
        case 3:
            updateStoryText("Understanding the importance of his mission, Aang focuses on mastering his spiritual presence.");
            updateSkill('focus', 2);
            if (skillCheck('focus', 11)) {
                updateEnergy(5);
                updateStoryText("His efforts pay off, granting him greater control and understanding of the Spirit World.");
            } else {
                updateEnergy(-10);
                updateStoryText("The effort is draining, and Aang finds it difficult to maintain his focus.");
            }
            break;
        case 4:
            updateStoryText("Feeling the urgency of his mission, Aang seeks a pathway back to his friends and the physical world.");
            updateSkill('determination', 2);
            if (skillCheck('determination', 10)) {
                updateEnergy(0);
                updateStoryText("His determination reveals a path back, but the journey has taken its toll.");
            } else {
                updateEnergy(-5);
                updateStoryText("The way remains hidden, and Aang's spirit grows weary from the search.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startOpt1AirChapter7 }
        ]);
    }, 300);
}

function handleOpt2AirChapter6Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("Aang bravely confronts Koh, hoping to understand the imbalance affecting the world.");
            updateSkill('courage', 2);
            if (skillCheck('courage', 12)) {
                updateEnergy(5);
                updateStoryText("Koh reveals valuable secrets, but Aang barely escapes with his face intact.");
            } else {
                updateEnergy(-10);
                updateStoryText("The encounter leaves Aang shaken, his spirit nearly ensnared by Koh's tricks.");
            }
            break;
        case 2:
            updateStoryText("Aang seeks out the Moon and Ocean Spirits for guidance on his path and the balance of the world.");
            updateSkill('wisdom', 2);
            if (skillCheck('wisdom', 11)) {
                updateReputation(5);
                updateStoryText("The spirits grant Aang their blessing, enhancing his waterbending for the coming conflict.");
            } else {
                updateReputation(-5);
                updateStoryText("Though they offer wisdom, Aang finds the answers more cryptic than helpful.");
            }
            break;
        case 3:
            updateStoryText("Curious and eager, Aang explores the Spirit World, uncovering secrets hidden from the physical realm.");
            updateSkill('curiosity', 2);
            if (skillCheck('curiosity', 10)) {
                addToInventory(items.spiritualInsight);
                updateStoryText("His exploration rewards him with ancient knowledge that could turn the tide of battle.");
            } else {
                updateEnergy(-5);
                updateStoryText("Though fascinating, his journey is exhausting and yields few practical results.");
            }
            break;
        case 4:
            updateStoryText("Aang negotiates with the spirit of an ancient guardian, seeking its aid in protecting the Northern Water Tribe.");
            updateSkill('negotiation', 2);
            if (skillCheck('negotiation', 12)) {
                updateReputation(5);
                updateStoryText("The guardian agrees to help, offering Aang a powerful ally in the physical world.");
            } else {
                updateReputation(-10);
                updateStoryText("The guardian refuses, warning Aang of the consequences of disturbing the spirits.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startOpt2AirChapter7 }
        ]);
    }, 300);
}