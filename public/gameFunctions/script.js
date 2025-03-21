import { startGame } from './game.js';
import {generateReport } from './game.js';

// Stop or pause function.
document.getElementById('storyInput').addEventListener('input', function(e) {
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
  

 
  document.getElementById('resumeBtn').addEventListener('click', function() {
    resumeGame();
});

  function resumeGame() {
    document.getElementById('pauseMenu').style.display = 'none'; // Hide the pause menu
    
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


document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
      item.addEventListener("click", () => {
          item.classList.toggle("active");
      });
  });
});

