import { startGame } from './game.js';

// Stop or pause function.
document.getElementById('storyInput').addEventListener('input', function(e) {
    var inputValue = e.target.value.toLowerCase();
    if (inputValue === 'stop') {
      showPauseMenu();
      e.target.value = ''; // Clear the input field
    }
  });
  
  function showPauseMenu() {
    document.getElementById('pauseMenu').style.display = 'block'; // Show the pause menu
  }
  
  function resumeGame() {
    document.getElementById('pauseMenu').style.display = 'none'; // Hide the pause menu
    // Add any additional logic needed to resume the game
  }
  
  function saveGame() {
    // Assuming you have a gameState object that keeps track of all relevant game information
    if (typeof gameState !== 'undefined') {
      localStorage.setItem('gameState', JSON.stringify(gameState));
      alert('Game saved successfully.');
    } else {
      alert('Error: No game state found to save.');
    }
  }
  
  function quitToMainMenu() {
    // Implement logic to quit to the main menu here
    alert('Quitting to main menu (implement quit logic)');
    document.getElementById('pauseMenu').style.display = 'none'; // Optionally hide the pause menu
  }

// Make sure to call startGame() when the page loads to begin the adventure
window.onload = startGame;

