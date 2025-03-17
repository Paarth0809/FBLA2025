import { startOpt1AirChapter7, startOpt2AirChapter7 } from './airChapter7.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateHealth, updateEnergy, updateSkill, updateReputation,  } from '../utilityFunctions.js';
import { playVideo } from '../cutscenes.js';
import { gameState } from '../gameState.js';
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
            updateSkill('wisdom', 2);
            if (skillCheck('wisdom', 10)) {
                updateEnergy(5);
                updateStoryText("Roku imparts wisdom that strengthens Aang's resolve and spiritual connection.");
                updateSkill('spirituality', 2);
            } else {
                updateEnergy(-5);
                updateStoryText("Though the meeting is enlightening, Aang struggles to grasp the full depth of Roku's teachings.");
                updateSkill('spirituality', 1);
            }
            break;
        case 2:
            updateStoryText("Aang reaches out to the spirits of nature, seeking allies in the coming battle.");
            updateSkill('diplomacy', 2);
            if (skillCheck('wisdom', 12)) {
                updateReputation(5);
                updateStoryText("His genuine plea earns him the favor of powerful spirits.");
                updateSkill('spirituality', 2);
            } else {
                updateReputation(-5);
                updateStoryText("The spirits remain distant, wary of Aang's unsettled spirit.");
                updateSkill('spirituality', 1);
            }
            break;
            case 3:
                updateStoryText("Understanding the importance of his mission, Aang focuses on mastering his spiritual presence.");
                updateSkill('spirituality', 2); // Emphasizing spirituality for its direct relevance
                if (skillCheck('spirituality', 11)) {
                    updateEnergy(5);
                    updateStoryText("His efforts deepen his connection to the Spirit World, granting him insights that were previously beyond his reach.");
                } else {
                    updateEnergy(-5);
                    updateStoryText("The path to mastering spirituality is fraught with challenges, and Aang finds it difficult to progress as hoped.");
                }
                break;
            case 4:
                updateStoryText("Feeling the urgency of his mission, Aang seeks a pathway back to his friends and the physical world.");
                updateSkill('wisdom', 2); // Using wisdom to reflect Aang's understanding and decision-making
                if (skillCheck('wisdom', 10)) {
                    updateEnergy(5);
                    updateStoryText("His wisdom guides him to a hidden path back to the physical world, ready to face the challenges ahead with new strength.");
                } else {
                    updateEnergy(-5);
                    updateStoryText("Despite his best efforts, the way back remains elusive, testing his resolve.");
                }
                break;
    }
    setTimeout(() => {
        updateChoices([{ text: "Continue", action: () => { startOpt1AirChapter7(); playVideo('airCutscene7.mp4'); } }]);
    }, 300);
}

function handleOpt2AirChapter6Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("Aang bravely confronts Koh, hoping to understand the imbalance affecting the world.");
            updateSkill('leadership', 2);
            if (skillCheck('leadership', 12)) {
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
            if (skillCheck('wisdom', 11) || skillCheck('spirtuality', 7)) {
                updateReputation(5);
                updateStoryText("The spirits grant Aang their blessing, enhancing his waterbending for the coming conflict.");
                updateSkill('spirituality', 2);
            } else {
                updateReputation(-5);
                updateStoryText("Though they offer wisdom, Aang finds the answers more cryptic than helpful.");
                updateSkill('spirituality', 1);
            }
            break;
        case 3:
            updateStoryText("Curious and eager, Aang explores the Spirit World, uncovering secrets hidden from the physical realm.");
            updateSkill('spirituality', 1);
            if (skillCheck('spirituality', 10)) {
                (items.spiritualInsight);
                updateStoryText("His exploration rewards him with ancient knowledge that could turn the tide of battle.");
                updateSkill('spirituality', 1);
            } else {
                updateEnergy(-5);
                updateStoryText("Though fascinating, his journey is exhausting and yields few practical results.");
            }
            break;
        case 4:
            updateStoryText("Aang negotiates with the spirit of an ancient guardian, seeking its aid in protecting the Northern Water Tribe.");
            
            if (skillCheck('spirituality', 10)) {
                updateReputation(5);
                updateStoryText("The guardian agrees to help, offering Aang a powerful ally in the physical world.");
                updateSkill('spirituality', 1);
            } else {
                updateReputation(-10);
                updateStoryText("The guardian refuses, warning Aang of the consequences of disturbing the spirits.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([{ text: "Continue", action: () => { startOpt2AirChapter7(); playVideo('airCutscene7.mp4'); } }]);
    }, 300);
}