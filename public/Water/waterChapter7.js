import { startWaterChapter8 } from './waterChapter8.js';
import { updateHealth, updateSkill, updateReputation,addAlly, randomInt, updateEnergy} from '../gameFunctions/utilityFunctions.js';
import { gameState } from '../gameFunctions/gameState.js';
import { characters } from '../gameFunctions/characters.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js'; 
import { playVideo } from '../gameFunctions/cutscenes.js';

// Water code start
export function startOpt1WaterChapter7() {
    gameState.currentChapter = 7;
    displayOpt1WaterChapter7();
}

function displayOpt1WaterChapter7() {
    const chapter7Text = `
        <h2>Chapter 7: The Tides of Destiny</h2>
        <p>After aiding the Avatar in their mission at the Northern Water Tribe, you find yourself at a crossroads. The world is changing rapidly, and with the Fire Nation's aggression escalating, you must decide how to shape your own path. Will you uphold the traditions of your people, seek wisdom from those before you, or challenge the very foundations of Water Tribe culture?</p>
    `;
    updateStoryText(chapter7Text);
    updateChoices([
        { text: "Meditate on the wisdom of the Moon and Ocean Spirits", action: () => handleOpt1WaterChapter7Choice(1) },
        { text: "Seek guidance from Master Pakku and the elders", action: () => handleOpt1WaterChapter7Choice(2) },
        { text: "Follow your own instincts and break away from tradition", action: () => handleOpt1WaterChapter7Choice(3) },
        { text: "Challenge the Water Tribe's outdated customs and push for reform", action: () => handleOpt1WaterChapter7Choice(4) }
    ]);
}

function handleOpt1WaterChapter7Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You close your eyes, reaching out to the spirits of the Moon and Ocean. The rhythmic crash of the waves soothes your mind, and you feel a deep connection to the balance they represent.");
            updateSkill('spirituality', 2);
            if (skillCheck('spirituality', 12)) {
                updateHealth(5);
                updateStoryText("A vision of Princess Yue appears before you, her voice a whisper on the wind, guiding you toward inner peace and understanding.");
            } else {
                updateHealth(-5);
                updateStoryText("The spirits remain silent, and doubt lingers in your heart as you struggle to find clarity.");
            }
            break;
        case 2:
            updateStoryText("You seek out Master Pakku, hoping his wisdom will illuminate the right path. The elders gather as you present your concerns about the future of the Water Tribe.");
            updateSkill('wisdom', 2);
            if (skillCheck('wisdom', 14)) {
                updateHealth(10);
                updateStoryText("Pakku nods approvingly, sharing tales of past wars and victories, helping you see the bigger picture.");
            } else {
                updateHealth(-10);
                updateStoryText("Though the elders offer advice, their rigid adherence to tradition leaves you feeling constrained and unsure.");
            }
            break;
        case 3:
            updateStoryText("You decide to break free from tradition, forging your own path. The Water Tribe has rules, but the world demands change.");
            updateSkill('determination', 2);
            if (skillCheck('determination', 13)) {
                updateHealth(5);
                updateStoryText("With firm resolve, you step beyond the expectations placed upon you, ready to carve out your own future.");
            } else {
                updateHealth(-5);
                updateStoryText("Doubt creeps in as the weight of your decisions begins to take its toll.");
            }
            break;
        case 4:
            updateStoryText("Before the Water Tribe's leaders, you make a stand—tradition has its place, but change is necessary for survival.");
            updateSkill('persuasion', 2);
            if (skillCheck('persuasion', 15)) {
                updateReputation('waterTribe', 10);
                updateStoryText("Your words spark discussions of reform, inspiring hope for a future where the Water Tribe can thrive alongside the other nations.");
            } else {
                updateReputation('waterTribe', -10);
                updateStoryText("Many elders dismiss your ideas, unwilling to break from centuries-old customs.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: () => { startWaterChapter8(); playVideo('waterCutscene8.mp4'); } }
        ]);
    }, 300);
}

export function startOpt2WaterChapter7() {
    gameState.currentChapter = 7;
    displayOpt2WaterChapter7();
}

function displayOpt2WaterChapter7() {
    const chapter7Text = `
        <h2>Chapter 7: The Rising Tide</h2>
        <p>The Fire Nation's assault on the South has left scars, but also opportunities for change. The world is shifting, and with your growing influence, you must decide how to use it. Will you strengthen your people, seek new knowledge, or prepare for the inevitable battles ahead?</p>
    `;
    updateStoryText(chapter7Text);
    updateChoices([
        { text: "Advocate for alliances with the Earth Kingdom and Air Nomads", action: () => handleOpt2WaterChapter7Choice(1) },
        { text: "Focus on fortifying the Water Tribe's defenses", action: () => handleOpt2WaterChapter7Choice(2) },
        { text: "Seek out lost waterbending techniques from ancient scrolls", action: () => handleOpt2WaterChapter7Choice(3) },
        { text: "Train the next generation of waterbenders to prepare for war", action: () => handleOpt2WaterChapter7Choice(4) }
    ]);
}

function handleOpt2WaterChapter7Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You argue for unity between the nations, knowing the Fire Nation's strength can only be matched if the world stands together.");
            updateSkill('diplomacy', 2);
            if (skillCheck('diplomacy', 14)) {
                updateReputation('waterTribe', 15);
                updateStoryText("Your efforts lead to envoys being sent to the Earth Kingdom and surviving Air Nomads, forging the first steps of a united resistance.");
            } else {
                updateReputation('waterTribe', -5);
                updateStoryText("Despite your pleas, skepticism remains, and few are willing to commit to an alliance.");
            }
            break;
        case 2:
            updateStoryText("You push for increased defenses, recognizing that the Water Tribe must be prepared for the Fire Nation's return.");
            updateSkill('strategy', 2);
            if (skillCheck('strategy', 13)) {
                updateEnergy(10);
                updateStoryText("New training programs and defenses are implemented, ensuring the tribe's survival.");
            } else {
                updateEnergy(-5);
                updateStoryText("Resources are stretched thin, and opposition from traditionalists slows your plans.");
            }
            break;
        case 3:
            updateStoryText("You search for ancient waterbending knowledge, hoping to uncover lost techniques.");
            updateSkill('waterbending', 3);
            if (skillCheck('waterbending', 15)) {
                updateStoryText("You uncover forgotten scrolls detailing powerful techniques once lost to time.");
            } else {
                updateHealth(-10);
                updateStoryText("Your search proves dangerous, leaving you empty-handed and wounded.");
            }
            break;
        case 4:
            updateStoryText("You train young waterbenders, ensuring they are ready for the battles ahead.");
            updateSkill('teaching', 2);
            if (skillCheck('teaching', 12)) {
                updateStoryText("Your students flourish, and a particularly gifted student shows immense potential.");
            } else {
                updateHealth(-5);
                updateStoryText("Training proves more difficult than expected, testing your patience.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: () => { startWaterChapter8(); playVideo('waterCutscene8.mp4'); } }
        ]);
    }, 300);
}
// End water code