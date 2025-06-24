import { startOpt1WaterChapter6, startOpt2WaterChapter6 } from './waterChapter6.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateHealth, updateEnergy, updateSkill, updateReputation, addToInventory, addAlly,  } from '../gameFunctions/utilityFunctions.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js';
import { characters } from '../gameFunctions/characters.js';
import { gameState } from '../gameFunctions/gameState.js';
import { playVideo } from '../gameFunctions/cutscenes.js';

// Water code start
export function startOpt1WaterChapter5() {
   
    gameState.currentChapter = 5;
    displayOpt1WaterChapter5();
}

export function startOpt2WaterChapter5() {
  
    gameState.currentChapter = 5;
    displayOpt2WaterChapter5();
}

function displayOpt1WaterChapter5() {
 
    const chapter5Text = `
        <h2>Chapter 5: Wisdom of the Ancestors</h2>
        <p>With the discovery of the ancient waterbending artifacts, a renewed sense of hope fills our village. As I study the scrolls by moonlight, I can feel a connection to the waterbenders who came before me. The elders gather around, sharing stories of our tribe's glory days when waterbending masters protected our people.</p>
        <p>But my brother Sokka remains wary. "The Fire Nation won't stop with one failed raid," he warns. "They'll be back, and in greater numbers."</p>
        <p>Gran Gran places a weathered hand on my shoulder. "The knowledge of our ancestors must guide us forward, Katara. You carry their legacy now."</p>
    `;
    updateStoryText(chapter5Text);
    updateChoices([
        { text: "Seek guidance from the Moon Spirit at the sacred pool", action: () => handleOpt1WaterChapter5Choice(1) },
        { text: "Train with the ancient techniques to strengthen our defenses", action: () => handleOpt1WaterChapter5Choice(2) },
        { text: "Consult elders about cryptic scroll passages", action: () => handleOpt1WaterChapter5Choice(3) },
        { text: "Attempt to restore damaged artifacts", action: () => handleOpt1WaterChapter5Choice(4) }
    ]);
}

function displayOpt2WaterChapter5() {
   
    const chapter5Text = `
        <h2>Chapter 5: Shadows on the Ice</h2>
        <p>As I watch the village sleep, my waterbending training continues, but without the ancient knowledge, I feel like I'm fumbling in the dark. My brother Sokka has doubled the night watch, convinced that the Fire Nation scouts were only the beginning.</p>
        <p>I'm startled awake by the sound of crackling fire. Black snow begins to fall—ash mixed with our pure white landscape. The Fire Nation has returned under the cover of darkness, their ships silhouetted against the horizon. This is no mere scouting party—it's a full invasion force.</p>
        <p>"Katara!" Sokka shouts, rushing into our igloo. "They're targeting the elders' council! We need to move now!"</p>
    `;
    updateStoryText(chapter5Text);
    updateChoices([
        { text: "Rally the tribe and organize an evacuation", action: () => handleOpt2WaterChapter5Choice(1) },
        { text: "Create a waterbending diversion to cover our escape", action: () => handleOpt2WaterChapter5Choice(2) },
        { text: "Stand with the warriors to defend our home", action: () => handleOpt2WaterChapter5Choice(3) },
        { text: "Seek Gran Gran's guidance on our ancestors' escape routes", action: () => handleOpt2WaterChapter5Choice(4) }
    ]);
}

function handleOpt2WaterChapter5Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("\"Everyone to the ice caverns!\" I call out, helping the children and elderly. My brother Sokka coordinates the warriors to buy us time. As I guide our people through the snow, I realize this is what it means to be a leader of the Southern Water Tribe.");
            updateSkill('leadership', 2); // Rallying survivors
            updateSkill('empathy', 1);    // Caring for wounded
            if (skillCheck('diplomacy', 14)) { 
                updateHealth(5);
                updateSkill('wisdom', 1); 
            } else {
                updateHealth(-5);
                updateSkill('leadership', -1); 
            }
            break;
        case 2:
            updateStoryText("Drawing upon my limited waterbending skills, I pull moisture from the air and ground, creating a swirling wall of mist between our people and the Fire Nation soldiers. \"This way!\" I whisper urgently to the families huddled behind me. The screams of battle fade as we disappear into the white void.");
            updateSkill('stealth', 3);    // Active concealment
            updateSkill('combat', -1);    // Avoiding confrontation
            if (skillCheck('wisdom', 12)) { 
                updateStoryText("The Fire Nation soldiers are left grasping in the dark as you slip away.");
                updateSkill('diplomacy', 1); 
            } else {
                updateHealth(-5);
                updateSkill('stealth', -2); 
            }
            break;
        case 3:
            updateStoryText("\"I won't run again,\" I declare, planting my feet firmly in the snow. The memory of my mother's sacrifice fuels my determination. I join Sokka and the other warriors, bending what water I can to freeze the feet of approaching soldiers and build ice barriers. The fire of their attacks hisses against my defenses, and then, I blackout and wake up again in the middle of the night.");
            updateSkill('combat', 3);     // Direct conflict
            updateSkill('diplomacy', -2); // Aggressive approach
            if (skillCheck('leadership', 16)) { 
                updateReputation('waterTribe', 2);
                updateSkill('wisdom', 1); 
            } else {
                updateHealth(-10);
                updateSkill('empathy', -1); 
            }
            break;
        case 4:
            updateStoryText("I rush to Gran Gran's side as fireballs light up the night sky. \"The ancient tunnels,\" she says without hesitation, pressing a worn map into my hands. \"Your grandfather and I used them during the last great raid. They lead to the Spirit Oasis where we'll be protected.\" As I study the faded markings, I feel the weight of our tribe's survival on my shoulders.");
            updateSkill('wisdom', 2);     // Seeking guidance
            updateSkill('diplomacy', 1);  // Collaborative approach
            if (skillCheck('empathy', 14)) { 
                updateHealth(10);
                updateSkill('leadership', 2); 
            } else {
                updateHealth(-5);
                updateSkill('wisdom', -1); 
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: () => { startOpt2WaterChapter6(); playVideo('waterCutscene6.mp4'); } }
        ]);
    }, 300);
}

function handleOpt1WaterChapter5Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("Under the full moon, I make my way to the sacred pool hidden deep within an ice cave. The water glows with an ethereal light as I kneel at its edge. \"Guide our tribe's path,\" I whisper, feeling the moon's power surge through me. The water shimmers, revealing visions of a massive serpent coiling beneath polar waters - an ancient guardian awakening.");
            updateSkill('spirituality', 3);
            updateSkill('wisdom', 2);
            if (skillCheck('leadership', 12)) { 
                updateHealth(5);
                updateStoryText("The vision clarifies - the serpent's path leads to long-forgotten ruins that could shelter our people, you pull out your boat and decide to go look for it.");
                addToInventory('spirit_map');
            } else {
                updateHealth(-5);
                updateStoryText("The visions fade too quickly, leaving more questions than answers.");
            }
            break;
        case 2:
            updateStoryText("With the recovered scrolls spread before me, I practice the ancient forms until my muscles burn and my fingers grow numb with cold. Water rises and falls at my command, more responsive than ever before. \"Your mother would be proud,\" Gran Gran says, appearing beside me with a steaming cup of sea prune broth. As I sip the warm liquid, I know that mastering these techniques is our best hope against the Fire Nation's return.");
            updateSkill('combat', 3);
            updateSkill('empathy', -1);
            if (skillCheck('stealth', 14)) { 
                updateReputation('waterTribe', 1);
                updateSkill('leadership', 2); 
            } else {
                updateHealth(-5);
                updateSkill('wisdom', -1); 
            }
            break;
        case 3:
            updateStoryText("The elders gather around the faded scrolls, their wrinkled fingers tracing ancient symbols. \"This speaks of Tui's Covenant,\" one murmurs. \"A pact between our tribe and the ocean spirits - broken when the Fire Nation took our benders.\"");
            updateSkill('wisdom', 2);
            updateSkill('diplomacy', 1);
            if (skillCheck('empathy', 14)) {
                updateHealth(5);
                updateStoryText("Their interpretation reveals hidden tidal patterns that could protect our shores.");
                addToInventory('tidal_charts');
            } else {
                updateHealth(-3);
                updateStoryText("The elders' debate turns contentious, leaving you uncertain who to believe.");
            }
            break;
        case 4:
            updateStoryText("Using waterbending to carefully chip away glacial ice, I work to restore a damaged ceremonial mask. The artifact hums with residual energy, its whalebone framework revealing intricate carvings of forgotten spirits.");
            updateSkill('crafting', 2);
            updateSkill('wisdom', 1);
            if (skillCheck('waterbending', 16)) {
                updateReputation('waterTribe', 3);
                updateStoryText("The mask's restoration temporarily strengthens the village's spiritual defenses.");
                addToInventory('restored_mask');
            } else {
                updateHealth(-7);
                updateStoryText("A misjudged bend cracks the artifact further, drawing disappointed looks from the elders.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: () => { startOpt1WaterChapter6(); playVideo('waterCutscene6.mp4'); } }
        ]);
    }, 300);
}
// Water code end