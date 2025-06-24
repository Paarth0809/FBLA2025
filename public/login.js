import { gameState } from './gameFunctions/gameState.js';

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('loginEmail').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    // Get the message div to display login messages
    const messageDiv = document.getElementById('message');

    if (response.ok) {
        const message = await response.text();
        if (message === "Login successful") {

            // get/load the game state
            const gameStateResponse = await fetch('/get-progress')
                .then(res => res.json())
                .then(data => {
                    if (data.success && data.gameState) {
                        Object.assign(gameState, data.gameState);
                        console.log("Game state loaded successfully:", gameState);
                    }
                });
            window.location.href = 'index.html';

            console.log("Redirecting to index.html");
        } else {
            messageDiv.innerText = message;
        }
    } else {
        const errorMessage = await response.text();
        messageDiv.innerText = errorMessage;
    }
});
