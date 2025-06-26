import { startWaterChapter12 } from './waterChapter12.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';

import { skillCheck } from '../gameFunctions/gameMechanics.js';
import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';
export function startWaterChapter11() {
    gameState.currentChapter = 11;
    displayWaterChapter11();
}

function displayWaterChapter11() {
    const chapter11Text = `
        <h2>Chapter 11: The Siege of the North</h2>
        <p>Black snow begins to fall over the Northern Water Tribe—a grim herald of approaching Fire Nation ships. 
        Admiral Zhao leads a massive invasion fleet, determined to capture the Avatar and destroy the Moon Spirit.
        As you stand on the ice walls beside Master Pakku and the other waterbenders, you feel both fear and 
        a newfound resolve. Your recent confrontation with your past has transformed you, but now an even greater 
        challenge looms. The tribe looks to both you and Aang for protection, and difficult choices lie ahead.</p>
    `;
    updateStoryText(chapter11Text);
    updateChoices([
        { text: "Join the front lines of defense with the other waterbenders", action: () => handleWaterChapter11Choice(1) },
        { text: "Help Aang connect with the Ocean and Moon spirits for guidance", action: () => handleWaterChapter11Choice(2) },
        { text: "Protect the Spirit Oasis from Fire Nation infiltrators", action: () => handleWaterChapter11Choice(3) },
        { text: "Focus on evacuating the vulnerable citizens to safety", action: () => handleWaterChapter11Choice(4) }
    ]);
}

function handleWaterChapter11Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You take your place among the waterbending masters, raising massive waves to repel the invading ships...");
            updateSkillWithDifficulty('combat', 3); // Battle prowess
            updateSkillWithDifficulty('leadership', 2); // Coordination
            if (skillCheck('wisdom', 18)) {
                updateStoryText("Your training with Master Pakku proves its worth as you coordinate with the other benders, creating a devastating counterattack that sinks several Fire Nation vessels.");
                updateReputationWithDifficulty('waterTribe', 3);
                updateEnergyWithDifficulty(-15);
                updateSkillWithDifficulty('diplomacy', 1); // Unified effort
            } else {
                updateStoryText("The sheer scale of the battle is overwhelming. Though you fight bravely, a fire blast knocks you from your position. You're injured but manage to rejoin the defense.");
                updateHealthWithDifficulty(-20);
                updateSkillWithDifficulty('empathy', -1); // Battle trauma
            }
            break;
        case 2:
            updateStoryText("You escort Aang to the Spirit Oasis, helping him enter the spirit world to seek guidance from the Ocean and Moon spirits...");
            updateSkillWithDifficulty('wisdom', 3); // Spiritual insight
            updateSkillWithDifficulty('empathy', 2); // Emotional connection
            if (skillCheck('wisdom', 19)) {
                updateStoryText("While guarding Aang's physical form, you perceive a faint echo of his spiritual journey. This connection grants you deeper insight into the balance of elemental forces, enhancing your waterbending.");
                updateSkillWithDifficulty('combat', 2); // Enhanced bending
            } else {
                updateStoryText("As Aang journeys to the spirit world, Prince Zuko appears. Despite your best efforts, you're overwhelmed, and Zuko escapes with Aang's physical body.");
                updateReputationWithDifficulty('waterTribe', -2);
                updateSkillWithDifficulty('stealth', 1); // Failed interception
            }
            break;
        case 3:
            updateStoryText("Sensing the sacred importance of the Spirit Oasis, you position yourself as its guardian, ready to defend it against any threats...");
            updateSkillWithDifficulty('combat', 2); // Defensive bending
            updateSkillWithDifficulty('leadership', 3); // Strategic defense
            if (skillCheck('wisdom', 16) && skillCheck('combat', 16)) {
                updateStoryText("When Admiral Zhao and his elite firebenders infiltrate the oasis, your strategic defense and powerful waterbending hold them at bay long enough for reinforcements to arrive. Princess Yue acknowledges your critical role in protecting the Moon Spirit.");
                updateReputationWithDifficulty('waterTribe', 4);
                updateSkillWithDifficulty('diplomacy', 2); // Cultural preservation
            } else {
                updateStoryText("Zhao manages to reach the Moon Spirit. Though you fight valiantly, you're unable to prevent him from harming it. The moon turns red, and your bending weakens dramatically.");
                updateSkillWithDifficulty('combat', -2); // Weakened bending
                updateEnergyWithDifficulty(-25);
            }
            break;
        case 4:
            updateStoryText("You organize an evacuation of the young, elderly, and injured to the secure ice caverns deep within the city...");
            updateSkillWithDifficulty('leadership', 3); // Crisis management
            updateSkillWithDifficulty('empathy', 3); // Compassionate care
            if (skillCheck('diplomacy', 17)) {
                updateStoryText("Your compassion and leadership shine as you guide the frightened citizens to safety. You establish a healing center in the caverns, tending to the wounded and boosting morale through the darkest hours of the siege.");
                updateReputationWithDifficulty('waterTribe', 3);
                updateSkillWithDifficulty('wisdom', 1); // Healing insight
            } else {
                updateStoryText("The evacuation becomes chaotic as Fire Nation troops penetrate deeper into the city. You're forced to use your bending defensively, saving many lives but at great personal cost.");
                updateHealthWithDifficulty(-15);
                updateEnergyWithDifficulty(-20);
                updateSkillWithDifficulty('leadership', -1); // Chaotic execution
            }
            break;
    }
    
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: () => { startWaterChapter12(); playVideo('waterCutscene12.mp4'); } }
        ]);
    }, 300);
}