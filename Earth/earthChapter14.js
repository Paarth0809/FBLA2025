// earthChapter14.js

// Get imports
import { updateStoryText, updateChoices } from '../uiUpdateFunctions.js';
import { updateSkill, updateReputation } from '../utilityFunctions.js';
import { gameState } from '../gameState.js';
import { startEarthChapter15 } from './earthChapter15.js'; // Import from the new file

export function startOpt1EarthChapter14() {
    gameState.currentChapter = 14;
    displayOpt1EarthChapter14();
}

export function startOpt2EarthChapter14() {
    gameState.currentChapter = 14;
    displayOpt2EarthChapter14();
}

function displayOpt1EarthChapter14() {
    const chapter14Text = `
       <h2>Chapter 14: The Fire Nation Strikes Back</h2>
        <p>The Fire Nation retaliates with full force after your initial assault. Their armies are advancing, and the team must decide how to respond to this new threat.</p>
        <p>You must decide: how will you counter the Fire Nation's attack?</p>
    `;
    updateStoryText(chapter14Text);
    updateChoices([
        { text: "Hold the line and fight to the last", action: () => handleOpt1EarthChapter14Choice(1) },
        { text: "Attempt to break through the enemy lines", action: () => handleOpt1EarthChapter14Choice(2) },
        { text: "Use diplomacy to negotiate a temporary truce", action: () => handleOpt1EarthChapter14Choice(3) },
        { text: "Send a message for help", action: () => handleOpt1EarthChapter14Choice(4) }
    ]);
}

function displayOpt2EarthChapter14() {
    const chapter14Text = `
      <h2>Chapter 14: Turning the Tide</h2>
    <p>The team's efforts begin to pay off. The Fire Nation's advance is slowing, and cracks are starting to show in their defenses. The tide of the battle is turning in your favor.</p>
    <p>You must decide: how will you press your advantage?</p>
    `;
    updateStoryText(chapter14Text);
    updateChoices([
        { text: "Lead a full-scale assault", action: () => handleOpt2EarthChapter14Choice(1) },
        { text: "Target their supply lines", action: () => handleOpt2EarthChapter14Choice(2) },
        { text: "Use Aang's Avatar State to inspire the troops", action: () => handleOpt2EarthChapter14Choice(3) },
        { text: "Negotiate with Fire Nation commanders", action: () => handleOpt2EarthChapter14Choice(4) }
    ]);
}

function handleOpt1EarthChapter14Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText(
                "You decide to hold the line, inspiring the team with your determination. The Fire Nation's forces are relentless, but the team fights bravely. Your courage turns the tide, and the Fire Nation begins to retreat."
            );
            updateSkill('combat', 3);
            break;

        case 2:
            updateStoryText(
                "You lead a daring charge to break through the enemy lines. The team manages to create an opening, forcing the Fire Nation to fall back. The path to victory is now clear."
            );
            updateSkill('combat', 1);
            updateSkill('leadership', 3);
            break;

        case 3:
            updateStoryText(
                "You negotiate a temporary truce with the Fire Nation, buying the team time to regroup. The ceasefire allows you to plan a decisive counterattack, which catches the enemy off guard."
            );
            updateSkill('diplomacy', 3);
            break;

        case 4:
            updateStoryText(
                "You send a message for help, and reinforcements arrive just in time. With fresh troops, the team pushes back the Fire Nation's forces, securing a hard-fought victory."
            );
            updateSkill('wisdom', 3);
            break;
    }

    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: startEarthChapter15 }
        ]);
    }, 300);
}

function handleOpt2EarthChapter14Choice(choice) {
    switch (choice){
        case 1:
            updateStoryText(
                "You lead a full-scale assault, overwhelming the Fire Nation's forces with the combined strength of your allies. The enemy begins to retreat."
            );
            updateSkill('diplomacy', 3);
            updateReputation('Team Avatar', 2);
            break;

        case 2:
            updateStoryText(
                "You focus on disrupting the Fire Nation's supply lines, cutting off their resources. The enemy is weakened, and their morale begins to falter."
            );
            updateSkill('stealth', 3);
            updateReputation('Team Avatar',)}
            setTimeout(() => {
                updateChoices([
                    { text: "Continue", action: startEarthChapter15 }
                ]);
            }, 300);
        }