import { startWaterChapter16 } from './waterChapter16.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js'; // Fixed import path
 // Fixed import path
import { skillCheck } from '../gameFunctions/gameMechanics.js'; // Fixed import path
import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty} from '../gameFunctions/gameMechanics.js'; // Fixed import path
import { playVideo } from '../gameFunctions/cutscenes.js';

// Water code start
export function startWaterChapter15() {
    gameState.currentChapter = 15;
    displayWaterChapter15();
}

function displayWaterChapter15() {
    const chapter15Text = `
        <h2>Chapter 15: The Full Moon's Judgment</h2>
        <p>After weeks of intense training and preparation under Master Pakku and the Northern Water Tribe elders, the moment of reckoning has arrived. 
        The Fire Nation's fleet looms on the horizon, its torches burning defiantly against the icy waters. 
        The lessons you've learned—the wisdom of the elders, the discipline of your training, and the bonds you've strengthened—must now be put to the ultimate test.
        
        As the full moon rises, its glow enhances your bending, filling you with both power and responsibility. Tonight, the Northern Water Tribe will make its stand. 
        The tides of battle shift with each decision you make, and the fate of the tribe—and perhaps the world—rests in your hands.</p>
    `;
    updateStoryText(chapter15Text);
    updateChoices([
        { text: "Use the full moon's power to overwhelm the Fire Nation forces", action: () => handleWaterChapter15Choice(1) },
        { text: "Utilize advanced waterbending techniques to neutralize the enemy", action: () => handleWaterChapter15Choice(2) },
        { text: "Lead the Water Tribe warriors in a tactical counterattack", action: () => handleWaterChapter15Choice(3) },
        { text: "Seek a spiritual connection to the Moon Spirit for guidance", action: () => handleWaterChapter15Choice(4) }
    ]);
}

function handleWaterChapter15Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You channel the power of the full moon, unleashing a massive tidal wave against the Fire Nation fleet...");
            if (skillCheck('combat', 22)) {
                updateStoryText("The sheer force of your attack devastates the enemy fleet, scattering their warships and turning the tide of battle.");
                updateReputationWithDifficulty('waterTribe', 5);
                updateEnergyWithDifficulty(30);
                updateSkillWithDifficulty('combat', 3); // Combat increases due to aggressive action
                updateSkillWithDifficulty('leadership', -2); // Leadership decreases as you act alone
            } else {
                updateStoryText("Despite your efforts, the Fire Nation's war machines hold firm, resisting the ocean's fury.");
                updateHealthWithDifficulty(-20);
                updateSkillWithDifficulty('combat', 1); // Combat still increases slightly
                updateSkillWithDifficulty('wisdom', -1); // Wisdom decreases as the plan fails
            }
            break;
            
        case 2:
            updateStoryText("You execute precise waterbending techniques, freezing and disrupting enemy formations with strategic strikes...");
            if (skillCheck('combat', 20) ) {
                updateStoryText("Your mastery of waterbending allows you to immobilize entire sections of the enemy fleet, shifting the battle in your favor.");
                updateEnergyWithDifficulty(25);
                updateReputationWithDifficulty('waterTribe', 4);
                updateSkillWithDifficulty('combat', 2); // Combat increases
                updateSkillWithDifficulty('wisdom', 2); // Wisdom increases due to strategic thinking
            } else {
                updateStoryText("Your attacks slow the enemy advance, but their overwhelming numbers continue to press forward.");
                updateHealthWithDifficulty(-25);
                updateSkillWithDifficulty('combat', 1); // Combat increases slightly
                updateSkillWithDifficulty('wisdom', -1); // Wisdom decreases as the plan fails
            }
            break;

        case 3:
            updateStoryText("You rally the warriors of the Water Tribe, organizing them for a coordinated counterattack...");
            if (skillCheck('leadership', 18)) {
                updateStoryText("Your leadership inspires the warriors, and together, you mount a fierce defense, pushing back the Fire Nation's assault.");
                updateReputationWithDifficulty('waterTribe', 5);
                updateSkillWithDifficulty('leadership', 5); // Leadership increases significantly
                updateSkillWithDifficulty('diplomacy', 2); // Diplomacy increases as you unite the tribe
            } else {
                updateStoryText("The Water Tribe fights bravely, but the Fire Nation's overwhelming force begins to take its toll.");
                updateHealthWithDifficulty(-30);
                updateSkillWithDifficulty('leadership', -2); // Leadership decreases as the plan fails
                updateSkillWithDifficulty('wisdom', -1); // Wisdom decreases
            }
            break;

        case 4:
            updateStoryText("You kneel in meditation, seeking guidance from the Moon Spirit as battle rages around you...");
            if (skillCheck('spirituality', 23)) {
                updateStoryText("The Moon Spirit answers your call, filling you with a sacred power that enhances your waterbending beyond its natural limits.");
                updateSkillWithDifficulty('bending.spirit', 3);
                updateSkillWithDifficulty('wisdom', 4); // Wisdom increases due to spiritual insight
                updateSkillWithDifficulty('empathy', 3); // Empathy increases as you connect with the spirit
            } else {
                updateStoryText("The connection remains just out of reach, and while the moon enhances your bending, no divine intervention comes to aid the battle.");
                updateEnergyWithDifficulty(-15);
                updateSkillWithDifficulty('wisdom', -1); // Wisdom decreases as the plan fails
            }
            break;
    }
    
    setTimeout(() => {
        updateChoices([
            { text: "Start the Final Battle!", action: () => { startWaterChapter16(); playVideo('waterCutscene16.mp4'); } }
        ]);
    }, 300);
}
// Water code end