import { startOpt1AirChapter6, startOpt2AirChapter6 } from './airChapter6.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateHealth, updateEnergy, updateSkill, updateReputation, addAlly,  } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';
import { playVideo } from '../cutscenes.js';
import { characters } from '../characters.js';
import { gameState } from '../gameState.js';

// Air code start
export function startOpt1AirChapter5() {
    ("Inside startOpt1AirChapter5");
    gameState.currentChapter = 5;
    displayOpt1AirChapter5();
}

export function startOpt2AirChapter5() {
    ("Inside startOpt2AirChapter5");
    gameState.currentChapter = 5;
    displayOpt2AirChapter5();
}

function displayOpt1AirChapter5() {
    ("displayOpt1AirChapter5");
    const chapter5Text = `
        <h2>Chapter 5: Omashu and King Bumi</h2>
        <p>After your experiences on Kyoshi Island, you lead your friends to the great Earth Kingdom city of Omashu. You're excited to reunite with your old friend King Bumi, who - to your surprise - is still alive after 100 years! However, you soon discover that Bumi has changed, and he insists that you must face his challenging trials before he'll help you on your journey.</p>
    `;
    updateStoryText(chapter5Text);
    updateChoices([
        { text: "Accept Bumi's trials with enthusiasm", action: () => handleOpt1AirChapter5Choice(1) },
        { text: "Try to convince Bumi to help you without the trials", action: () => handleOpt1AirChapter5Choice(2) },
        { text: "Observe Bumi carefully to understand his motives", action: () => handleOpt1AirChapter5Choice(3) },
        { text: "Show off your improved combat skills to impress Bumi", action: () => handleOpt1AirChapter5Choice(4) }
    ]);
}

function displayOpt2AirChapter5() {
    ("displayOpt2AirChapter5");
    const chapter5Text = `
        <h2>Chapter 5: Omashu and King Bumi</h2>
        <p>After escaping Kyoshi Island, you and your friends arrive at the Earth Kingdom city of Omashu. The city's design amazes you, reminding you of your visits here 100 years ago. You remember your old friend Bumi and wonder if there's any chance he might still be alive. To your astonishment, not only is Bumi alive, but he's now the king of Omashu! However, he seems eccentric and unpredictable, insisting that you prove yourself through a series of trials.</p>
    `;
    updateStoryText(chapter5Text);
    updateChoices([
        { text: "Use your stealth skills to navigate Bumi's trials", action: () => handleOpt2AirChapter5Choice(1) },
        { text: "Approach the trials with caution and careful planning", action: () => handleOpt2AirChapter5Choice(2) },
        { text: "Attempt to understand the deeper meaning behind Bumi's trials", action: () => handleOpt2AirChapter5Choice(3) },
        { text: "Try to bypass the trials altogether by sneaking around", action: () => handleOpt2AirChapter5Choice(4) }
    ]);
}

function handleOpt1AirChapter5Choice(choice) {
    switch (choice) {
        case 1: // Accept trials with enthusiasm
            updateStoryText("You enthusiastically accept Bumi's challenges, ready to prove yourself to your old friend.");
            if (skillCheck('combat', 6)) {
                updateSkill('combat', 1);
                updateStoryText("Your enthusiasm serves you well! You navigate through Bumi's trials with creative airbending, solving each puzzle with a mixture of skill and ingenuity. Bumi watches with an approving smile, though he doesn't make it easy for you.");
                addAlly(characters.bumi);
                (items.earthKingdomToken);
            } else {
                updateHealth(-5);
                updateStoryText("Despite your enthusiasm, Bumi's trials prove more difficult than anticipated. You struggle through several challenges, sustaining minor injuries but learning valuable lessons about patience and adaptability.");
            }
            break;
        case 2: // Try to convince Bumi
            updateStoryText("You attempt to convince Bumi that there's no time for trials - the world needs the Avatar now.");
            updateSkill('diplomacy', 1);
            if (skillCheck('diplomacy', 8)) {  // Very difficult check
                updateReputation('earthKingdom', 1);
                updateStoryText("With passionate words, you remind Bumi of the threat the Fire Nation poses. 'The Fire Nation won't wait, and neither should we,' you argue. Impressed by your conviction, Bumi agrees to skip the trials but insists on teaching you an important lesson about neutral jing - waiting and listening before striking.");
                updateSkill('wisdom', 2);
                updateSkill('spirituality', 1);
            } else {
                updateStoryText("Bumi cackles at your attempt to skip his trials. 'The world has waited 100 years for the Avatar,' he snorts. 'It can wait another day while you learn what you need to learn.' You reluctantly agree to face his challenges.");
            }
            break;
        case 3: // Observe Bumi
            updateStoryText("You carefully observe Bumi, trying to understand the method behind his apparent madness.");
            if (skillCheck('wisdom', 8)) {
                updateSkill('wisdom', 2);
                updateStoryText("Your patient observation reveals the truth - Bumi isn't just testing your abilities, he's testing your thinking! 'The key is to think like a mad genius,' you realize. With this insight, you approach the trials differently, looking for the unexpected solution to each problem.");
                addAlly(characters.bumi);
            } else {
                updateEnergy(-10);
                updateStoryText("Bumi's erratic behavior confuses you. You spend hours trying to understand his motives but can't quite grasp the pattern. Eventually, you decide to simply tackle the trials head-on, though the mental effort has left you somewhat drained.");
            }
            break;
        case 4: // Show off combat skills
            updateStoryText("You decide to demonstrate your improved combat skills, hoping to impress Bumi with how much you've grown.");
            if (skillCheck('combat', 7)) {
                updateSkill('combat', 1);
                updateReputation('earthKingdom', 2);
                updateStoryText("Your display of combat prowess is impressive, combining airbending with the techniques you learned from the Kyoshi Warriors. Bumi watches with interest, then suddenly attacks with a barrage of rocks! You deflect them masterfully, earning a crooked smile from the old king. 'Not bad,' he admits. 'But there's more to being the Avatar than fighting.'");
            } else {
                updateHealth(-10);
                updateStoryText("Your attempt to show off backfires when Bumi unexpectedly joins the demonstration, launching several boulders your way! You're not fully prepared for his earthbending power and take a few hits before getting your guard up. 'First lesson,' Bumi cackles, 'expect the unexpected!'");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([{ text: "Continue", action: () => { startOpt1AirChapter6(); playVideo('airCutscene6.mp4'); } }]);
    }, 300);
}

function handleOpt2AirChapter5Choice(choice) {
    switch (choice) {
        case 1: // Use stealth
            updateStoryText("You apply your recently honed stealth skills to Bumi's trials, looking for creative ways to overcome the challenges.");
            if (skillCheck('stealth', 6)) {
                updateSkill('stealth', 1);
                updateStoryText("Your stealth approach proves surprisingly effective. You move quietly through the trials, finding hidden passages and shortcuts that others might miss. Bumi seems amused by your tactics, though he occasionally changes the rules just to keep you on your toes.");
            } else {
                updateHealth(-5);
                updateStoryText("Stealth isn't as helpful as you'd hoped in Bumi's trials. Many of the challenges require direct confrontation or problem-solving that can't be bypassed with sneaky approaches. You adapt, but not without some frustration and minor setbacks.");
            }
            break;
        case 2: // Caution and planning
            updateStoryText("You approach each of Bumi's trials with careful planning and consideration, taking time to assess before acting.");
            if (skillCheck('wisdom', 5)) {
                updateSkill('wisdom', 2);
                updateEnergy(-5);
                updateStoryText("Your methodical approach serves you well. Before each trial, you carefully analyze the situation, looking for traps and considering multiple solutions. Bumi watches approvingly as you overcome each challenge with minimal risk, though the mental effort is somewhat taxing.");
                addAlly(characters.bumi);
            } else {
                updateHealth(-10);
                updateStoryText("Despite your cautious planning, Bumi's trials are designed to be unpredictable. Several times, your careful plans fall apart when Bumi changes the conditions mid-challenge, forcing you to adapt on the fly with mixed results.");
            }
            break;
        case 3: // Understand deeper meaning
            updateStoryText("You sense that Bumi's trials have a deeper purpose beyond simple challenges, and you try to understand the lesson behind each one.");
            if (skillCheck('wisdom', 5)) {
                updateStoryText("You begin to see the pattern in Bumi's seemingly random trials - they're teaching you about different types of 'jing,' or ways of approaching conflict. As this realization dawns, you feel a momentary connection to the Avatar wisdom within you. Bumi notices the brief glow in your eyes and nods with satisfaction.");
                addAlly(characters.bumi);
                updateReputation('earthKingdom', 2);
            } else {
                updateEnergy(-10);
                updateStoryText("You strain to find meaning in Bumi's eccentric challenges, but the lessons remain elusive. 'Don't overthink it, Aang!' Bumi cackles as you struggle. The mental effort leaves you somewhat drained, though you still manage to complete most of the trials.");
            }
            break;
        case 4: // Bypass trials
            updateStoryText("You attempt to bypass Bumi's trials altogether, using your stealth and airbending to find alternative routes.");
            if (skillCheck('stealth', 4) && skillCheck('combat', 6)) {  // Very difficult check
                updateSkill('creativity', 2);
                updateStoryText("With exceptional stealth and clever use of airbending, you manage to bypass several of Bumi's trials in unconventional ways. Just as you think you've outsmarted the old king, you find him waiting at what should have been your secret exit. Instead of being angry, he roars with laughter. 'That's exactly what I wanted to see! Creative thinking!'");
                addAlly(characters.bumi);
            } else {
                updateHealth(-15);
                updateReputation('earthKingdom', -1);
                updateStoryText("Your attempt to circumvent the trials fails spectacularly when you trigger a series of traps Bumi set specifically for 'clever' participants. You end up covered in purple pentapus slime and hanging upside down in the throne room. 'Nice try,' Bumi snorts, 'but no shortcuts on the path to wisdom!'");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([{ text: "Continue", action: () => { startOpt2AirChapter6(); playVideo('airCutscene6.mp4'); } }]);
    }, 300);
}
// Air code end