import { startWaterChapter13 } from './waterChapter13.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateSkill, updateEnergy, updateReputation } from '../gameFunctions/utilityFunctions.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js';
import { gameState } from '../gameFunctions/gameState.js';

export function startWaterChapter12() {
    gameState.currentChapter = 12;
    displayChapter12();
}

function displayChapter12() {
    const chapter12Text = `
        <h2>Chapter 12: The Ice Veil Festival</h2>
        <p>Two weeks after the Siege of the North, you and your companions arrive at a small Water Tribe settlement along the northern coast. 
        The village is preparing for the Ice Veil Festival—a time of healing, reflection, and honoring those lost in battle. 
        Your role in defending the Northern Water Tribe has traveled ahead of you, and the villagers welcome you as heroes.
        
        As the festival begins, you notice a storyteller gathering a crowd. To your surprise, the elder recounts not only tales of 
        Avatar Aang, but also of "Master Katara," detailing your confrontation with your past and your bravery during the siege. 
        These stories force you to reflect on your journey thus far and the path that still lies ahead.</p>
    `;
    updateStoryText(chapter12Text);
    updateChoices([
        { text: "Reflect on how the stories portray your leadership", action: () => handleWaterChapter12Choice(1) },
        { text: "Contemplate the weight of your decisions during the siege", action: () => handleWaterChapter12Choice(2) },
        { text: "Discuss the meaning behind the stories with your companions", action: () => handleWaterChapter12Choice(3) },
        { text: "Use the festival's traditions to deepen your connection to water", action: () => handleWaterChapter12Choice(4) }
    ]);
}

function handleWaterChapter12Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You listen intently as the storyteller describes how you guided others during the battle. The weight of being seen as a leader—not just Aang's waterbending teacher—settles on your shoulders...");
            updateSkill('leadership', 2); // Leadership reflection
            if (skillCheck('wisdom', 16)) { // Changed from introspection
                updateStoryText("In quiet meditation by the festival lanterns, you come to terms with your growing role. Your journey has transformed you from a girl seeking a teacher to a master others look to for guidance. This realization brings both clarity and resolve.");
                updateReputation('waterTribe', 1);
                updateSkill('diplomacy', 1); // Earned trust
            } else {
                updateStoryText("The portrayal stirs conflicted feelings. Are you truly the leader they describe? The burden of others' expectations weighs heavily, and you wonder if you're ready to bear it.");
                updateSkill('empathy', -1); // Self-doubt
            }
            break;
        case 2:
            updateStoryText("As the festival progresses, your mind returns to the critical moments during the siege—the lives you saved, and those you couldn't. The choices you made when facing both your personal demons and Admiral Zhao's forces...");
            updateSkill('empathy', 3); // Emotional processing
            if (skillCheck('wisdom', 15)) {
                updateStoryText("Through ceremonial water meditation, you find peace with your decisions. You understand now that protecting the Moon Spirit wasn't just about preserving waterbending, but about maintaining balance for all people—even those in the Fire Nation.");
                updateReputation('earthKingdom', 1);
                updateReputation('waterTribe', 1);
                updateSkill('diplomacy', 2); // Balanced perspective
            } else {
                updateStoryText("The weight of your choices remains heavy. Could you have saved Princess Yue? Could you have stopped Zhao sooner? Though unsettling, these questions strengthen your determination to face the challenges ahead with greater wisdom.");
                updateSkill('combat', 1); // Resolve hardening
            }
            break;
        case 3:
            updateStoryText("After the storytelling, you gather with Aang, Sokka, and the others around a blue-flamed festival fire. You share your thoughts on how the tales portrayed your journey...");
            updateSkill('diplomacy', 2); // Team communication
            if (skillCheck('leadership', 17)) { // Changed from communication
                updateStoryText("The conversation becomes a healing experience. Sokka adds humor to balance the serious moments, while Aang shares his perspective on bearing the weight of others' expectations. By the fire's end, your bond as Team Avatar feels stronger than ever.");
                updateReputation('teamAvatar', 2);
                updateSkill('empathy', 1); // Strengthened bonds
            } else {
                updateStoryText("Sokka's joking about the 'dramatic embellishments' in your portrayal leads to a tense moment when you snap back about his role. The conversation reveals lingering stress from the siege and the emotional toll it took on all of you.");
                updateSkill('leadership', -1); // Team tension
            }
            break;
        case 4:
            updateStoryText("You participate in the Ice Flow Ritual, where participants channel their regrets and hopes into small ice sculptures that are set adrift under the moon's light...");
            updateSkill('wisdom', 3); // Spiritual connection
            if (skillCheck('empathy', 18)) { // Changed from wisdom
                updateStoryText("As you bend a small sculpture representing both your mother and Princess Yue, you feel a profound connection to water's dual nature—both destroyer and healer, both memory and renewal. This understanding deepens your bending in ways no combat training could provide.");
                updateReputation('waterTribe', 1);
                updateReputation('teamAvatar', 1);
                updateSkill('combat', 1); // Enhanced control
            } else {
                updateStoryText("Your ice sculpture repeatedly cracks as conflicting emotions—grief for your mother, concern for Aang's future, pride in your growing abilities—make it difficult to focus. Though frustrated, you recognize that mastering your inner tides is as important as mastering the water around you.");
                updateSkill('wisdom', -1); // Inner conflict
            }
            break;
    }
    setTimeout(() => {
        const continuationText = `
            <p>As the Ice Veil Festival draws to a close, you find yourself gazing northward, toward where the great battle took place. 
            The lessons of the past—both personal and shared—have shaped you into someone stronger than the girl who once left the Southern Water Tribe.
            Tomorrow, you will continue your journey with Aang, carrying these reflections with you like the water in your bending pouch—ready to flow, 
            adapt, and face whatever challenges await.</p>
        `;
        updateStoryText(document.getElementById('story-text').innerHTML + continuationText);
        
        updateChoices([
            { text: "Continue", action: startWaterChapter13 }
        ]);
    }, 300);
}