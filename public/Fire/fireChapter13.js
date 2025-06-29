import { startFireChapter14 } from './fireChapter14.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';

import { skillCheck } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';
import { gameState } from '../gameFunctions/gameState.js';
import { updateSkillWithDifficulty, updateReputationWithDifficulty, updateHealthWithDifficulty, updateEnergyWithDifficulty } from '../gameFunctions/gameMechanics.js';
import { characters } from '../gameFunctions/characters.js';

//Fire code start
export function startFireChapter13() {
    gameState.currentChapter = 13;
    displayFireChapter13();
}

function displayFireChapter13() {
    const chapter13Text = `
        <h2>Chapter 13: The Phoenix King</h2>
        <p>As the day of Sozin's Comet approaches, tension rises. Zuko, now fully committed to his new path, 
        confronts not only the imminent battle but also the personal challenge of facing his father, Fire Lord Ozai. 
        This confrontation is more than a battle of firebending; it's a clash of ideals, marking the final step in Zuko's 
        journey of redemption and transformation.</p>
    `;
    updateStoryText(chapter13Text);
    updateChoices([
        { text: "Prepare for the confrontation with Ozai", action: () => handleFireChapter13Choice(1) },
        { text: "Reflect on your journey and the choices that led you here", action: () => handleFireChapter13Choice(2) },
        { text: "Rally your friends and allies for the battle ahead", action: () => handleFireChapter13Choice(3) },
        { text: "Seek advice and wisdom from Uncle Iroh", action: () => handleFireChapter13Choice(4) }
    ]);
}

function handleFireChapter13Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You spend your time strategizing and honing your firebending, ensuring you're prepared for the battle against Ozai...");
            updateSkillWithDifficulty('wisdom', 3);
            updateSkillWithDifficulty('.combat', 2);
            if (skillCheck('combat', 20)) {
                updateStoryText("Your intense preparation pays off, leaving you feeling ready and capable to face your father, both in skill and resolve.");
            } else {
                updateStoryText("Despite your efforts, doubts linger. Have you prepared enough? The question haunts you as the confrontation draws near.");
            }
            break;
        case 2:
            updateStoryText("In quiet moments, you reflect on the winding path that led you to this point, recognizing the growth and change within you...");
            updateSkillWithDifficulty('wisdom', 3);
            if (skillCheck('wisdom', 18)) {
                updateStoryText("Your reflections strengthen your resolve and clarity of purpose, reinforcing your commitment to your new path and the battle ahead.");
            } else {
                updateStoryText("Reflection brings up as many questions as answers, but you find solace in knowing you've chosen to stand for what's right.");
            }
            break;
        case 3:
            updateStoryText("Understanding the importance of unity, you rally your friends and allies, emphasizing the strength found in togetherness...");
            updateSkillWithDifficulty('leadership', 3);
            if (skillCheck('leadership', 19)) {
                updateStoryText("Your leadership inspires confidence and unity among your allies, bolstering the group's morale as you prepare for the final showdown.");
                updateReputationWithDifficulty('teamAvatar', 2);
            } else {
                updateStoryText("While your intentions are clear, rallying everyone proves more challenging than expected. Still, you manage to instill a sense of shared purpose.");
            }
            break;
        case 4:
            updateStoryText("Seeking guidance, you turn to Uncle Iroh, whose wisdom has always served as a beacon in your darkest times...");
            updateSkillWithDifficulty('wisdom', 2);
            if (skillCheck('wisdom', 20)) {
                updateStoryText("Iroh's advice resonates deeply, offering clarity and courage as you prepare to face what may be your greatest challenge.");
                updateSkillWithDifficulty('combat', 1); // Reflecting the emotional and mental preparation for the confrontation
            } else {
                updateStoryText("While always comforting, Iroh's words leave you with more questions about your path and the future. You wonder if you're truly ready.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue", action: () => { startFireChapter14(); playVideo('fireCutscene14.mp4'); } }
        ]);
    }, 300);
}
//Fire code end