import { startGame } from './game.js';
import { generateReport } from './game.js';
import {gameState} from './gameState.js';
import { updateCharacterInfo } from './uiUpdateFunctions.js'; 
import { startAirFinalChapter } from '../Air/airFinalChapter.js';
import { playVideo } from './cutscenes.js';
import { startAirChapter8 } from '../Air/airChapter8.js';
import { startAirChapter15 } from '../Air/airChapter15.js';


// Stop or pause function.
document.getElementById('storyInput').addEventListener('input', function (e) {
  var inputValue = e.target.value.toLowerCase();
  if (inputValue === 'stop') {
    showPauseMenu();
    e.target.value = ''; // Clear the input field
  }
  else if (inputValue === 'skip16') {
    // Implement skip logic here
   startAirFinalChapter();
  playVideo('airCutscene16.mp4');
  }
  else if (inputValue === 'skip15') {
    // Implement skip logic here
   startAirChapter15();
  playVideo('airCutscene15.mp4');
  }

  else if (inputValue === 'skip8') {
    // Implement skip logic here
   startAirChapter8();
  playVideo('airCutscene8.mp4');
  }
});

document.getElementById('reportButton').addEventListener('click', () => {
  const reportText = generateReport();
  // Assuming you have a specific element to display the report
  document.getElementById('reportContainer').innerHTML = reportText;
});

function showPauseMenu() {
  document.getElementById('pauseMenu').style.display = 'block'; // Show the pause menu
}



document.getElementById('resumeBtn').addEventListener('click', function () {
  resumeGame();
});

export function resumeGame() {
  document.getElementById('pauseMenu').style.display = 'none'; // Hide the pause menu

}

document.getElementById('saveGameBtn').addEventListener('click', function () {
  saveGame();
});



export function saveGame() {
  // Assuming you have a gameState object that keeps track of all relevant game information
  if (typeof gameState !== 'undefined') {
    fetch('/save-progress', {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify({
        gameState: gameState
      })
    });
    // log ganmeState to console for debugging
    console.log("Game state saved:", gameState);
    alert('Game saved successfully.');
  } else {
    alert('Error: No game state found to save.');
  }
}

document.getElementById('restartGameBtn').addEventListener('click', function () {
  restartGame();
});

export function restartGame() {
  // Implement logic to restart the game here
  gameState.currentCharacter = '';
    gameState.currentChapter = 0;
    gameState.currentChapterOption = 0;
    gameState.health = 100;
    gameState.energy = 100;
    gameState.skills = {
        wisdom: 0,
        spirituality: 0,
        combat: 0,
        stealth: 0,
        diplomacy: 0,
        leadership: 0,
        empathy: 0
    };
    gameState.reputation = {
        fireNation: 0,
        earthKingdom: 0,
        waterTribe: 0,
        airNomads: 0
    };
    gameState.allies = []; // Reset allies

    // Add any other properties you use in gameState here

    // Optionally, update UI to show the start screen
     localStorage.removeItem('gameState');
     

    startGame();

    updateCharacterInfo(); // Update character info display
    saveGame(); // Save the initial game state
    

    const cutscene = document.getElementById('videoContainer');
    if (cutscene) {
        cutscene.pause && cutscene.pause(); // If it's a video
        cutscene.currentTime && (cutscene.currentTime = 0);
        cutscene.style.display = 'none';   // Or use cutscene.remove();
    }
       
}


export function quitToMainMenu() {
  // Implement logic to quit to the main menu here
  alert('Quitting to main menu (implement quit logic)');
  document.getElementById('pauseMenu').style.display = 'none'; // Optionally hide the pause menu
}

// Make sure to call startGame() when the page loads to begin the adventure
window.onload = startGame;


document.addEventListener("DOMContentLoaded", () => {
  // Initialize the game state and character info
  Object.assign(gameState, JSON.parse(localStorage.getItem('gameState')));
  
  updateCharacterInfo();
  console.log("Character info updated");

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});

