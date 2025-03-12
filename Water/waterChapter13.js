import { startWaterChapter14 } from './waterChapter14.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateSkill, addAlly, updateHealth, updateEnergy, updateReputation, randomInt } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';
import { gameState } from '../gameState.js';
import { characters } from '../characters.js';

export function startWaterChapter13() {
    gameState.currentChapter = 13;
    displayWaterChapter13();
}

function displayWaterChapter13() {
    const chapter13Text = `
        <h2>Chapter 13: Echoes of the Festival</h2>
        <p>As the final embers of the Ice Veil Festival fade into the night, you find yourself restless. The celebration honored the past, but the future remains uncertain. 
        The stories shared at the festival weigh on your mind, reminding you of the battles you've fought and the choices that shaped you.
        
        Before dawn, you stand at the edge of the frozen shoreline, the vast northern waters stretching endlessly before you. 
        The lessons of the festival have strengthened your resolve, but the road ahead is still unclear. With the war looming ever closer, you must decide how best to carry these lessons forward.</p>
    `;
    updateStoryText(chapter13Text);
    updateChoices([
        { text: "Train your waterbending to embody what you've learned", action: () => handleWaterChapter13Choice(1) },
        { text: "Seek wisdom from the elders on balancing leadership and personal growth", action: () => handleWaterChapter13Choice(2) },
        { text: "Strengthen your connection with your companions after the emotional festival", action: () => handleWaterChapter13Choice(3) },
        { text: "Consult the spirits to understand how the past shapes the future", action: () => handleWaterChapter13Choice(4) }
    ]);
}

function handleWaterChapter13Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You channel the emotions stirred by the festival into your waterbending, refining your movements with newfound clarity...");
            updateSkill('combat', 3); // Waterbending mastery
            updateSkill('leadership', 1); // Discipline
            if (skillCheck('wisdom', 18)) { // Changed from bending.water
                updateStoryText("Your bending feels more fluid and precise, as if the stories of the past now guide your every motion.");
                updateSkill('wisdom', 1); // Insightful growth
            } else {
                updateStoryText("Despite your efforts, lingering doubts cloud your focus, reminding you that true mastery takes time.");
                updateSkill('empathy', -1); // Frustration
            }
            break;
        case 2:
            updateStoryText("You return to the village elders, hoping their wisdom will help you reconcile the burden of leadership with your personal struggles...");
            updateSkill('wisdom', 3); // Seeking guidance
            updateSkill('empathy', 2); // Emotional understanding
            if (skillCheck('diplomacy', 18)) { // Changed from wisdom
                updateStoryText("Their guidance reminds you that leadership is not about certainty but about carrying responsibility with humility and strength.");
                updateSkill('leadership', 2); // Earned trust
            } else {
                updateStoryText("While their words are insightful, your path remains clouded by unanswered questions.");
                updateSkill('wisdom', -1); // Uncertainty
            }
            break;
        case 3:
            updateStoryText("Sitting by the dimming festival lanterns, you speak with your companions about the emotions stirred by the stories...");
            updateSkill('diplomacy', 3); // Team communication
            updateSkill('empathy', 2); // Emotional bonding
            if (skillCheck('leadership', 17)) { // Changed from communication
                updateStoryText("The night deepens as laughter and heartfelt confessions strengthen the bonds of your group, preparing you for what lies ahead.");
                updateReputation('teamAvatar', 2);
                updateSkill('leadership', 1); // Strengthened bonds
            } else {
                updateStoryText("Though the conversation is meaningful, you sense unresolved tensions lingering beneath the surface.");
                updateSkill('diplomacy', -1); // Team tension
            }
            break;
        case 4:
            updateStoryText("Drawn to the Spirit Oasis, you seek guidance on the path ahead, hoping for a vision that will bring clarity...");
            updateSkill('wisdom', 2); // Spiritual insight
            updateSkill('empathy', 1); // Emotional connection
            if (skillCheck('wisdom', 20)) { // Changed from spirituality
                updateStoryText("The spirits grant you a vision—hazy yet profound—hinting at both dangers and unexpected allies in the battles to come.");
                updateSkill('combat', 1); // Enhanced bending
            } else {
                updateStoryText("The spirits remain silent, leaving you with only your own resolve to shape the future.");
                updateSkill('wisdom', -1); // Missed insight
            }
            break;
    }
    setTimeout(() => {
        updateChoices([{ text: "Continue", action: startWaterChapter14 }]);
    }, 300);
}