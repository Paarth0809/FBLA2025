import { startWaterChapter16 } from './waterChapter16.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js'; // Fixed import path
import { updateSkill, updateHealth, updateEnergy, updateReputation } from '../utilityFunctions.js'; // Fixed import path
import { skillCheck } from '../gameMechanics.js'; // Fixed import path
import { gameState } from '../gameState.js'; // Fixed import path

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
            if (skillCheck('bending.water', 22)) {
                updateStoryText("The sheer force of your attack devastates the enemy fleet, scattering their warships and turning the tide of battle.");
                updateReputation('waterTribe', 5);
                updateEnergy(30);
                updateSkill('combat', 3); // Combat increases due to aggressive action
                updateSkill('leadership', -2); // Leadership decreases as you act alone
            } else {
                updateStoryText("Despite your efforts, the Fire Nation's war machines hold firm, resisting the ocean's fury.");
                updateHealth(-20);
                updateSkill('combat', 1); // Combat still increases slightly
                updateSkill('wisdom', -1); // Wisdom decreases as the plan fails
            }
            break;
            
        case 2:
            updateStoryText("You execute precise waterbending techniques, freezing and disrupting enemy formations with strategic strikes...");
            if (skillCheck('strategy', 20) && skillCheck('bending.water', 20)) {
                updateStoryText("Your mastery of waterbending allows you to immobilize entire sections of the enemy fleet, shifting the battle in your favor.");
                updateEnergy(25);
                updateReputation('waterTribe', 4);
                updateSkill('combat', 2); // Combat increases
                updateSkill('wisdom', 2); // Wisdom increases due to strategic thinking
            } else {
                updateStoryText("Your attacks slow the enemy advance, but their overwhelming numbers continue to press forward.");
                updateHealth(-25);
                updateSkill('combat', 1); // Combat increases slightly
                updateSkill('wisdom', -1); // Wisdom decreases as the plan fails
            }
            break;

        case 3:
            updateStoryText("You rally the warriors of the Water Tribe, organizing them for a coordinated counterattack...");
            if (skillCheck('leadership', 18)) {
                updateStoryText("Your leadership inspires the warriors, and together, you mount a fierce defense, pushing back the Fire Nation's assault.");
                updateReputation('waterTribe', 5);
                updateSkill('leadership', 5); // Leadership increases significantly
                updateSkill('diplomacy', 2); // Diplomacy increases as you unite the tribe
            } else {
                updateStoryText("The Water Tribe fights bravely, but the Fire Nation's overwhelming force begins to take its toll.");
                updateHealth(-30);
                updateSkill('leadership', -2); // Leadership decreases as the plan fails
                updateSkill('wisdom', -1); // Wisdom decreases
            }
            break;

        case 4:
            updateStoryText("You kneel in meditation, seeking guidance from the Moon Spirit as battle rages around you...");
            if (skillCheck('spirituality', 23)) {
                updateStoryText("The Moon Spirit answers your call, filling you with a sacred power that enhances your waterbending beyond its natural limits.");
                updateSkill('bending.spirit', 3);
                updateSkill('wisdom', 4); // Wisdom increases due to spiritual insight
                updateSkill('empathy', 3); // Empathy increases as you connect with the spirit
            } else {
                updateStoryText("The connection remains just out of reach, and while the moon enhances your bending, no divine intervention comes to aid the battle.");
                updateEnergy(-15);
                updateSkill('wisdom', -1); // Wisdom decreases as the plan fails
            }
            break;
    }
    
    setTimeout(() => {
        updateChoices([
            { text: "Continue to the Final Battle", action: startWaterChapter16 }
        ]);
    }, 300);
}
// Water code end