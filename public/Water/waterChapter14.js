import { startWaterChapter15 } from './waterChapter15.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkill, updateEnergy, updateReputation } from '../gameFunctions/utilityFunctions.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js';
import { gameState } from '../gameFunctions/gameState.js';
import { playVideo } from '../gameFunctions/cutscenes.js';

export function startWaterChapter14() {
    gameState.currentChapter = 14;
    displayWaterChapter14();
}

function displayWaterChapter14() {
    const chapter14Text = `
        <h2>Chapter 14: The Wisdom of the Tides</h2>
        <p>Following your time at the Ice Veil Festival and the insights gained from the village, you journey back to the Northern Water Tribe. 
        The lessons of the past still fresh in your mind, you seek further growth and preparation for the conflicts ahead.
        Upon your return, Master Pakku and the Northern Water Tribe elders welcome you, recognizing the change within you. 
        Their guidance will be crucial in refining your abilities, strengthening your spirit, and ensuring the Water Tribe stands strong in the coming war.</p>
    `;
    updateStoryText(chapter14Text);
    updateChoices([
        { text: "Seek guidance from Master Pakku", action: () => handleWaterChapter14Choice(1) },
        { text: "Train rigorously to master advanced waterbending", action: () => handleWaterChapter14Choice(2) },
        { text: "Reflect on your growth and the journey so far", action: () => handleWaterChapter14Choice(3) },
        { text: "Prepare strategies with the Northern Water Tribe", action: () => handleWaterChapter14Choice(4) }
    ]);
}

function handleWaterChapter14Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You approach Master Pakku, eager to learn from his wisdom and solidify your place as a master waterbender...");
            updateSkill('wisdom', 2); // Seeking guidance
            updateSkill('leadership', 1); // Discipline
            if (skillCheck('diplomacy', 18)) { // Changed from wisdom
                updateStoryText("Pakku acknowledges your growth and imparts invaluable teachings, reinforcing the balance between discipline and intuition in bending.");
                updateSkill('combat', 1); // Enhanced bending
                updateEnergy(20);
            } else {
                updateStoryText("Though Pakku's teachings are profound, fully grasping them requires deeper self-reflection.");
                updateEnergy(10);
                updateSkill('wisdom', -1); // Missed insight
            }
            break;
        case 2:
            updateStoryText("Determined to push past your limits, you commit to rigorous training under the frozen waterfalls and shifting ice flows...");
            updateSkill('combat', 3); // Waterbending mastery
            updateSkill('leadership', 2); // Discipline
            if (skillCheck('wisdom', 18)) { // Changed from bending.water
                updateStoryText("Through relentless practice, your movements become more fluid, and your connection to waterbending reaches new heights.");
                updateEnergy(30);
                updateSkill('wisdom', 1); // Insightful growth
            } else {
                updateStoryText("Despite your dedication, the harsh training takes its toll, reminding you that true mastery comes with time.");
                updateEnergy(-20);
                updateSkill('empathy', -1); // Frustration
            }
            break;
        case 3:
            updateStoryText("As the cold wind sweeps through the village, you find a quiet place to reflect on how far you've come...");
            updateSkill('wisdom', 3); // Self-reflection
            updateSkill('empathy', 2); // Emotional understanding
            if (skillCheck('diplomacy', 18)) { // Changed from wisdom
                updateStoryText("With each memory—every challenge, every victory—you feel a newfound clarity, solidifying your purpose moving forward.");
                updateEnergy(20);
                updateSkill('leadership', 1); // Earned trust
            } else {
                updateStoryText("Though you seek peace, your thoughts remain tangled in the uncertainty of what lies ahead.");
                updateEnergy(5);
                updateSkill('wisdom', -1); // Uncertainty
            }
            break;
        case 4:
            updateStoryText("Gathering with the Northern Water Tribe's leaders, you engage in discussions on how best to defend the tribe and support the war effort...");
            updateSkill('leadership', 3); // Strategic planning
            updateSkill('diplomacy', 2); // Collaborative effort
            if (skillCheck('wisdom', 20)) { // Changed from strategy
                updateStoryText("Your insights help craft a decisive plan, ensuring the Water Tribe is prepared for whatever challenges may come.");
                updateReputation('waterTribe', 2);
            } else {
                updateStoryText("Though your contributions are valued, the weight of these decisions lingers, a reminder of the stakes at hand.");
                updateEnergy(-10);
                updateSkill('leadership', -1); // Missed opportunity
            }
            break;
    }
    setTimeout(() => {
        updateChoices([{ text: "Continue", action: () => { startWaterChapter15(); playVideo('waterCutscene15.mp4'); } }]);
    }, 300);
}