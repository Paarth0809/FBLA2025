import { updateStoryText, updateChoices } from './uiUpdateFunctions.js';
import { startFireChapter1 } from '../Fire/fireChapter1.js';
//import { startEarthChapter1 } from './Earth/earthChapter1.js';
import { startAirChapter1 } from '../Air/airChapter1.js';
//import { startWaterChapter1 } from './Water/waterChapter1.js';
import { startWaterChapter1 } from '../Water/waterChapter1.js';
import { playVideo } from './cutscenes.js';
import { startEarthChapter1 } from '../Earth/earthChapter1.js';

// Displays the Earth Prologue
export function displayEarthPrologue() {
    const prologueText = ` <h2>Prologue: Earth</h2>
        <p>You are Toph Beifong, born blind into the wealthy and overprotective Beifong family, where your parents sheltered you and treated you as fragile. You discovered your earthbending abilities and learned to "see" through vibrations in the ground, secretly training with the badgermoles to become a master. Breaking free from your parents' control, you joined Team Avatar to prove yourself as the greatest earthbender in the world, forging your own path and embracing your independence.</p>
    `;
    updateStoryText(prologueText);
    updateChoices([
        { text: "Continue", action: startEarthChapter1 }
    ]);
}

// Displays the Air Prologue
export function displayAirPrologue() {
    const prologueText = ` <h2>Prologue: Air</h2>
        <p>You are Aang, the last Airbender and the Avatar, destined to maintain balance in the world. After discovering your true identity as the Avatar, you flee from the pressure of your responsibilities, only to be caught in a storm and frozen in an iceberg for 100 years. When you awaken, the world has changed—the Air Nomads are gone, and the Fire Nation has plunged the world into war. Guided by your new friends, Katara and Sokka, you embark on a journey to master the elements, confront the Fire Nation, and restore peace, all while grappling with the weight of being the last hope for a broken world.</p>
    `;
    updateStoryText(prologueText);
    updateChoices([
        { text: "Continue", action: () => { startAirChapter1(); playVideo('airCutscene1.mp4'); } }
    ]);

}

// Displays the Fire Prologue
export function displayFirePrologue() {
    const prologueText = ` <h2>Prologue: A Kingdom in Flames</h2>
        <p>You are Zuko the banished prince of the Fire Nation. Son of Ozai. One day you are very eager to prove yourself, attend a war council meeting with your uncle, Iroh, where you speak out against a general's plan to sacrifice young soldiers, seeing it as dishonorable. This act of defiance enrages Ozai, who demands an Agni Kai duel. When you refuse to fight your father, Ozai brands you with fire and banishes you, stripping you of your title and honor. You are told you can only return if you capture the Avatar, a task believed impossible. Accompanied by your uncle - Iroh, you embark on a quest that will lead you to question your father's ideals and your own destiny, setting the stage for a profound transformation from a bitter, exiled prince to a key ally in the fight to restore balance to the world.</p>
    `;
    updateStoryText(prologueText);
    updateChoices([
        { text: "Continue", action: startFireChapter1 }
    ]);
}

// Displays the Water Prologue
export function displayWaterPrologue() {
    const prologueText = ` <h2>Prologue: Water</h2>
        <p>You are Katara. Born and raised in the frigid lands of the Southern Water Tribe, you have always known struggle. The Fire Nation's raids have left your village in ruins, taking away all the waterbenders except for you. With your mother gone and your father away at war, you and your brother, Sokka, bear the weight of protecting what little remains of your people. One fateful day, while out hunting on the ice, you sense something beneath the surface—a presence unlike any you've encountered before. As the frozen world cracks open, a brilliant glow emerges, and with it, a discovery that will change the fate of the world forever.</p>
    `;
    updateStoryText(prologueText);
    updateChoices([
        { text: "Continue", action: startWaterChapter1 }
    ]);
}