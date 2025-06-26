import { startGame } from './game.js';
import { generateReport } from './game.js';
import {gameState} from './gameState.js';
import { updateCharacterInfo } from './uiUpdateFunctions.js'; 


// Stop or pause function.
document.getElementById('storyInput').addEventListener('input', function (e) {
  var inputValue = e.target.value.toLowerCase();
  if (inputValue === 'stop') {
    showPauseMenu();
    e.target.value = ''; // Clear the input field
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
     const video = document.getElementById('cutsceneVideo');

    startGame();

        if (video) {
        video.pause();
        video.currentTime = 0;
        video.style.display = 'none'; // or video.remove() to remove from DOM
    }
    updateCharacterInfo(); // Update character info display
    saveGame(); // Save the initial game state
    alert('Game restarted successfully.'); // Notify the user
    
}

document.addEventListener('DOMContentLoaded', function() {
   console.log("Logout button found");
    const logoutBtn = document.getElementById('logoutButton');
    if (logoutBtn) {
      console.log("Logout button found");
        logoutBtn.addEventListener('click', function(event) {
            event.preventDefault();
            resetGameState();
            localStorage.removeItem('gameState');
            startChooseElement();
        });
    }
});

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

document.getElementById('logoutButton').addEventListener('click', function() {
  console.log("Logout button clicked");
  // Perform logout logic here, such as clearing session data and redirecting
  // This is a placeholder function, replace with actual logout logic
  // Clear the game state and redirect to the main menu or login page
  fetch('/logout')
    .then(response => {
      if (response.ok) {
        console.log("Logout successful");
        localStorage.removeItem('gameState');
        window.location.href = '/'; // Redirect to the main page or login page
      } else {
        console.error("Logout failed");
      }
    })
    .catch(error => {
      console.error("Error during logout:", error);
    });
  
  startChooseElement();
});