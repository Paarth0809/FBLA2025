import { startAirChapter10 } from './airChapter10.js';
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { playVideo } from '../cutscenes.js';
import { gameState } from '../gameState.js';
import { updateHealth, updateEnergy, updateReputation, randomInt, updateSkill, addAlly } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';
import { characters } from '../characters.js';

// Air code start
export function startOpt1AirChapter9() {
    gameState.currentChapter = 9;
    displayOpt1AirChapter9();
}

export function startOpt2AirChapter9() {
    gameState.currentChapter = 9;
    displayOpt2AirChapter9();
}

function displayOpt1AirChapter9() {
    const chapter9Text = `
        <h2>Chapter 9: The Journey to the Earth Kingdom</h2>
        <p>With the wisdom gained from Koh the Face Stealer, you helped Princess Yue sacrifice herself to restore the Moon Spirit. The Northern Water Tribe was saved, but at a great cost. As the tribe rebuilds, Master Pakku provides you with a fleet to escort you to the Earth Kingdom, where you must find an earthbending teacher.</p>
        <p>Your spiritual connection has deepened significantly, giving you new insights into your role as the Avatar. But the weight of Yue's sacrifice reminds you of the heavy responsibility you bear.</p>
    `;
    updateStoryText(chapter9Text);
    updateChoices([
        { text: "Seek out King Bumi in Omashu", action: () => handleOpt1AirChapter9Choice(1) },
        { text: "Follow a vision from the Spirit World about a hidden master", action: () => handleOpt1AirChapter9Choice(2) },
        { text: "Consult with Avatar Roku's spirit for guidance", action: () => handleOpt1AirChapter9Choice(3) },
        { text: "Search the Earth Kingdom villages for rumors of earthbending masters", action: () => handleOpt1AirChapter9Choice(4) }
    ]);
}

function displayOpt2AirChapter9() {
    const chapter9Text = `
        <h2>Chapter 9: The Journey to the Earth Kingdom</h2>
        <p>The aftermath of your merge with the Ocean Spirit left a profound impact on both you and the world. The Northern Water Tribe has fallen, and your display of raw power has unsettled many, including yourself. Stories of the Avatar's fearsome water form spread far and wide, reaching even the Earth Kingdom.</p>
        <p>As you prepare to leave, Master Pakku provides water tribe escorts for your journey south. The time has come to find an earthbending teacher, but the memory of losing control haunts your meditation sessions.</p>
    `;
    updateStoryText(chapter9Text);
    updateChoices([
        { text: "Seek out King Bumi in Omashu", action: () => handleOpt2AirChapter9Choice(1) },
        { text: "Focus on mastering the Avatar State before learning earthbending", action: () => handleOpt2AirChapter9Choice(2) },
        { text: "Travel to Ba Sing Se to seek wisdom from Earth Kingdom scholars", action: () => handleOpt2AirChapter9Choice(3) },
        { text: "Investigate rumors of Earth Rumble tournaments for potential teachers", action: () => handleOpt2AirChapter9Choice(4) }
    ]);
}


function handleOpt1AirChapter9Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to seek out your old friend King Bumi, believing his eccentric wisdom will guide your earthbending training. The journey to Omashu is long, but your spiritual strength helps you navigate challenges along the way.");
            uupdateSkill('wisdom', 2);
            
            if (skillCheck('diplomacy', 10)) {
                updateStoryText("Along the way, you befriend an Earth Kingdom merchant who offers to guide you through Fire Nation blockades. His knowledge of secret mountain passes proves invaluable, and you reach the outskirts of Omashu safely, only to discover the city has fallen to the Fire Nation.");
            } else {
                updateHealth(-10);
                updateStoryText("Your journey to Omashu is fraught with danger. Fire Nation patrols force you to take treacherous mountain routes, and you arrive exhausted to discover the terrible truth: Omashu has fallen to the Fire Nation, and King Bumi has surrendered the city.");
            }
            break;
            
        case 2:
            updateStoryText("The spiritual connection you forged in the Spirit World guides your decision. Meditation reveals visions of a secluded valley where earthbending takes a form you've never seen before. You decide to trust this mysterious call.");
            updateSkill('spirituality', 2);
            
            if (skillCheck('spirituality', 12)) {
                updateStoryText("Your spiritual sensitivity allows you to interpret your vision with remarkable clarity. You sketch a map leading to a town called Gaoling, where you sense your earthbending master awaits. The spirits have blessed your path forward.");
            } else {
                updateEnergy(-10);
                updateStoryText("The visions are cryptic and fragmented, leaving you to piece together their meaning through exhausting meditation sessions. You determine that your path leads somewhere in the southern Earth Kingdom, though the exact location remains unclear.");
            }
            break;
            
        case 3:
            updateStoryText("You decide to seek guidance directly from Avatar Roku. Finding a quiet meditation spot, you focus on connecting with your past life, hoping his centuries of wisdom will guide your search.");
            updateSkill('diplomacy', 2)
            
            if (skillCheck('wisdom', 15)) {
                updateEnergy(10);
                updateStoryText("Roku appears before you with unexpected clarity. 'To master earth, you must understand its opposing element,' he advises. 'Find a teacher who has learned to wait and listen before striking.' His guidance reinvigorates your spirit and gives you a clear direction.");
            } else {
                updateHealth(-5);
                updateStoryText("Your connection with Roku is tenuous. Brief glimpses and fragmented wisdom are all you receive, taxing your energy. From what you gather, your earthbending master will be found in unexpected circumstances, someone who has overcome great obstacles.");
            }
            break;
            
        case 4:
            updateStoryText("You decide that a systematic approach is best. Landing at the Earth Kingdom coast, you begin visiting villages and towns, listening for rumors of exceptional earthbenders who might teach the Avatar.");
            updateSkill('leadership', 2);
            
            if (skillCheck('leadership', 12)) {
                updateStoryText("Your persistent questioning leads to valuable information. Several sources mention an underground earthbending tournament called 'Earth Rumble' in a town called Gaoling. The best earthbenders supposedly compete there, making it an ideal place to find a master.");
            } else {
                updateReputation(-5);
                updateStoryText("Your questions attract unwanted attention. Fire Nation spies catch wind of the Avatar's search, forcing you to move quickly between villages. The scattered information you gather points vaguely toward the southern Earth Kingdom, but you'll need to be more discreet going forward.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([{ text: "Continue", action: () => { startAirChapter10(); playVideo('airCutscene10.mp4'); } }]); // Option to continue after reading
    }, 300);
}

function handleOpt2AirChapter9Choice(choice) {
    // Handle different choices for Chapter 9 based on the player's decision
    switch (choice) {
        case 1:
            // Update the story text based on the decision to focus on finding King Bumi in Omashu
            updateStoryText("Despite your concerns about the Avatar State, you decide to focus on the original plan of seeking King Bumi in Omashu. His unconventional wisdom might help with both earthbending and controlling your power.");
            
            // Increase the leadership skill as a result of the choice
            updateSkill('leadership', 2);
            
            // If the player succeeds in the stealth skill check
            if (skillCheck('stealth', 11)) {
                // Update the story text for a successful stealth approach
                updateStoryText("Your group skillfully navigates Fire Nation patrols, reaching Omashu's outskirts undetected. However, what you discover is shocking - the entire city is under Fire Nation occupation, red banners hanging from its walls. Bumi must be found, but infiltration will be dangerous.");
            } else {
                // If stealth fails, update health and reputation, and display the story for a failed approach
                updateHealth(-15);
                updateReputation(-5);
                updateStoryText("Your approach to Omashu is spotted by Fire Nation scouts. After a harrowing chase that leaves everyone exhausted, you finally reach a vantage point overlooking the city - only to find it conquered, renamed 'New Ozai,' with King Bumi nowhere to be seen.");
            }
            break;
            
        case 2:
            updateStoryText("The power and loss of control you experienced with the Ocean Spirit has left you shaken. You decide that learning to master the Avatar State must take priority before you continue your bending training.");
            updateSkill('spirituality', 3);
            
            if (skillCheck('spirituality', 14)) {
                updateStoryText("During deep meditation, you experience a vision of a guru meditating atop a mountain. You sketch his features and the location, which Sokka identifies as the Eastern Air Temple. This guru may hold the key to controlling the Avatar State.");
            } else {
                updateEnergy(-20);
                updateStoryText("Your attempts to understand the Avatar State through meditation lead to frustrating dead ends. The raw power remains beyond your comprehension, and nightmares of losing control plague your sleep. You need a teacher, but where to find one?");
            }
            break;
            
        case 3:
            updateStoryText("You decide that the vast libraries and scholars of Ba Sing Se might hold ancient knowledge about the Avatar State and earthbending masters. The Earth Kingdom capital becomes your destination.");
            updateSkill('wisdom', 2);
            
            if (skillCheck('diplomacy', 12)) {
                addAlly(characters.earthKingdomOfficial);
                updateStoryText("Your diplomatic approach secures you safe passage with an Earth Kingdom convoy headed to Ba Sing Se. The captain shares rumors of a great library in the Si Wong Desert that contains all knowledge in the world - including, perhaps, secrets of the Avatar State.");
            } else {
                updateEnergy(-10);
                updateReputation(-5);
                updateStoryText("Your attempts to arrange passage to Ba Sing Se are complicated by rumors of the 'water monster' at the North Pole. Some Earth Kingdom officials seem wary of the Avatar's power, forcing you to take a longer, less direct route toward the capital.");
            }
            break;
            
        case 4:
            updateStoryText("You recall hearing about underground earthbending tournaments where the best fighters compete. Such a tournament could be the perfect place to find a skilled and unconventional teacher who could help you with your unique challenges.");
            updateSkill('diplomacy', 2);
            
            if (skillCheck('diplomacy', 10)) {
                updateStoryText("Your inquiries in portside taverns yield results. You obtain a poster for 'Earth Rumble VI' in Gaoling, featuring the reigning champion, a mysterious figure called 'The Blind Bandit.' Something about this fighter intrigues you - perhaps this is the teacher you seek.");
            } else {
                updateHealth(-5);
                updateStoryText("Your questions about underground fighting competitions raise suspicions. A group of local toughs, thinking you're from a rival tournament, confront your group. After a brief scuffle, you learn about Earth Rumble in Gaoling, but must leave town quickly before authorities arrive.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices
            updateChoices([{ text: "Continue", action: () => { startAirChapter10(); playVideo('airCutscene10.mp4'); } }]); // Option to continue after reading
        
    }, 300);
}
// Air code end