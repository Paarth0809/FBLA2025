import { updateStoryText, updateChoices} from '../uiUpdateFunctions.js';
import { updateSkill, updateReputation, addAlly } from '../utilityFunctions.js';
import { skillCheck } from '../gameMechanics.js';
import { characters } from '../characters.js';
import { gameState } from '../gameState.js';
import { startAirChapter15 } from './airChapter15.js';


// Chapter 14: The Choice to Accept Zuko
export function startAirChapter14() {
    gameState.currentChapter = 14;
    displayAirChapter14();
}


function displayAirChapter14() {
    const chapter14Text = `
        <h2>Chapter 14: The Choice to Accept Zuko</h2>
        <p>As you regroup after the failed invasion, Zuko appears at your camp, offering his allegiance. The tension is palpable as the team debates whether to trust him.</p>
        <p>Zuko explains that he's left the Fire Nation and wants to help defeat his father, Fire Lord Ozai. However, the scars of his past actions weigh heavily on everyone's minds.</p>
        <p>Each member of your group has their own perspective on whether to accept Zuko. You must navigate this delicate moment and make a decision that could shape your journey.</p>
    `;
    updateStoryText(chapter14Text);
    updateChoices([
        { text: "Listen to Zuko's story and assess his sincerity", action: () => handleAirChapter14Choice(1) },
        { text: "Consult your team and let them vote", action: () => handleAirChapter14Choice(2) },
        { text: "Test Zuko's loyalty with a difficult task", action: () => handleAirChapter14Choice(3) },
        { text: "Reject Zuko outright and send him away", action: () => handleAirChapter14Choice(4) }
    ]);
}



function handleAirChapter14Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You decide to listen to Zuko's story, watching carefully for signs of sincerity or deceit.");
            updateSkill('empathy', 3);
            if (skillCheck('empathy', 14)) {
                addAlly(characters.zuko);
                updateStoryText("Zuko's story is heartfelt, and his regret for his actions feels genuine. You decide to give him a chance, hoping he can prove himself.");
            } else {
                updateReputation(-5);
                updateStoryText("Though Zuko's words are moving, doubt lingers in your group. Accepting him will not be easy for everyone.");
            }
            break;
        case 2:
            updateStoryText("You gather your team to discuss Zuko's offer and let them vote on whether to accept him.");
            updateSkill('leadership', 3);
            if (skillCheck('leadership', 15)) {
                addAlly(characters.zuko);
                updateStoryText("Your team's trust in your leadership prevails. The group agrees to accept Zuko, though some remain wary.");
            } else {
                updateReputation(-10);
                updateStoryText("The discussion becomes heated, and the group is divided. Accepting Zuko risks further tension among your allies.");
            }
            break;
        case 3:
            updateStoryText("You decide to test Zuko's loyalty by assigning him a task to prove his intentions.");
            updateSkill('wisdom', 2);
            if (skillCheck('wisdom', 14)) {
                addAlly(characters.zuko);
                updateStoryText("Zuko completes the task with unwavering resolve, earning your trust and that of some team members.");
            } else {
                updateReputation(-5);
                updateStoryText("Zuko struggles to complete the task, leaving your group skeptical about his true intentions.");
            }
            break;
        case 4:
            updateStoryText("You cannot overlook Zuko's past actions and decide to send him away, rejecting his offer.");
            updateReputation(-5);
            updateStoryText("Zuko leaves, defeated and disheartened. Your team feels safer for now, but questions linger about whether rejecting him was the right choice.");
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Continue on your journey", action: startAirChapter15 }
        ]);
    }, 300);
}

