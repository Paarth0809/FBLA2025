import { startOpt1AirChapter11, startOpt2AirChapter11 } from './airChapter11.js';
import { updateStoryText, updateChoices } from '../gameFunctions/uiUpdateFunctions.js';
import { updateHealth, updateEnergy, updateSkill, updateReputation, addAlly,  } from '../gameFunctions/utilityFunctions.js';
import { skillCheck } from '../gameFunctions/gameMechanics.js';
import { playVideo } from '../gameFunctions/cutscenes.js';
import { characters } from '../gameFunctions/characters.js';
import { gameState } from '../gameFunctions/gameState.js';

// Air code start
export function startAirChapter10() {
  ("Inside startAirChapter10");
  gameState.currentChapter = 10;
  gameState.currentChapterOption = 0; // Set the current chapter option to 1
  displayAirChapter10();
}

function displayAirChapter10() {
  ("displayAirChapter10");
  const chapter10Text = `
    <h2>Chapter 10: The Blind Bandit</h2>
    <p>After arriving in Gaoling, you find yourself at an underground earthbending tournament called Earth Rumble VI. The crowd roars as champion after champion is defeated by a small, unassuming girl who calls herself "The Blind Bandit." Despite her blindness, she moves with incredible precision, sensing vibrations through the earth.</p>
    <p>You immediately recognize that this girl—Toph Beifong—is the earthbending teacher you've been searching for. Her unique style of "seeing" with earthbending and her tremendous skill make her perfect. However, when you approach her after the tournament, she dismisses you entirely.</p>
    <p>After discovering she's the sheltered daughter of the wealthy Beifong family, you realize convincing her to join your group won't be easy. Her parents have no idea about her secret earthbending prowess and treat her as helpless because of her blindness.</p>
  `;
  updateStoryText(chapter10Text);
  updateChoices([
    { text: "Challenge Toph to an earthbending duel to earn her respect", action: () => handleAirChapter10Choice(1) },
    { text: "Appeal to her desire for freedom and adventure", action: () => handleAirChapter10Choice(2) },
  ]);
}

function handleAirChapter10Choice(choice) {
  switch (choice) {
    case 1:
      updateStoryText("You decide to challenge Toph directly, believing that actions speak louder than words. You return to the Earth Rumble arena and publicly challenge the Blind Bandit, drawing her back for a rematch.");
      updateSkill('combat', 2);
      if (skillCheck('combat', 12)) {
        updateReputation('airNomads', 5);  // Successfully impressing Toph increases your standing
        updateStoryText("Using your airbending creatively, you manage to lift yourself off the ground—rendering Toph's earth-sensing abilities useless. Your victory isn't about dominating her but showing that you have something valuable to teach her too. Impressed by your skills and humbled by the experience, Toph agrees to become your earthbending teacher, though not without setting some ground rules.");
        addAlly(characters.toph);
        updateSkill('earthbending', 1);  // Beginning to learn earthbending
        updateChoices([{ text: "Continue", action: startOpt1AirChapter11 }]);
      } else {
        updateHealth(-10);  // Toph doesn't hold back in combat
        updateStoryText("Toph proves why she's the champion, reading your movements through the earth and countering your every move. You're quickly defeated, but your persistence impresses her. After the match, you're confronted by her parents who forbid her from any further contact with you. Now you'll have to find another way to convince her—and deal with her increasingly strict parents.");
        updateChoices([{ text: "Continue", action: startOpt2AirChapter11 }]);
      }
      break;
   
    case 2:
      updateStoryText("Rather than challenging Toph's prowess, you decide to speak to what she truly wants: freedom from her overprotective parents and the chance to see the world beyond Gaoling. You sneak into the Beifong estate to speak with her privately.");
      updateSkill('empathy', 2);
      if (skillCheck('empathy', 11)) {
        updateEnergy(-5);  // The emotional appeal is draining
        updateStoryText("Your words resonate deeply with Toph. You describe the open skies, distant lands, and the independence of traveling with your group. When her parents discover you, a confrontation ensues where Toph finally stands up to them, revealing her true skills and desires. Though it breaks her heart to leave against their wishes, Toph packs her bags and joins your group, ready to teach you earthbending and experience the freedom she's always craved.");
        addAlly(characters.toph);
        updateSkill('combat', 1);  // Beginning to learn earthbending
        updateChoices([{ text: "Continue", action: startOpt1AirChapter11 }]);
      } else {
        updateReputation('airNomads', -5);  // Failure to convince Toph or her parents damages your standing
        updateStoryText("Your appeal falls flat as Toph's parents discover you on their property. They call the guards, forcing you to flee. Toph is placed under even stricter supervision, with guards watching her every move. You'll need to find another earthbending teacher or develop a more elaborate plan to free Toph from her gilded cage.");
        updateChoices([{ text: "Continue", action: startOpt2AirChapter11 }]);
      }
      break;
  }
}
// Air code end