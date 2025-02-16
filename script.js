// Wait for the content to load
document.addEventListener("DOMContentLoaded", () => {
    // Get HTML elements by their id
    const storyText = document.getElementById("story-text");
    const choicesDiv = document.getElementById("choices");
    const pointsDisplay = document.getElementById("points-display");
    const settingsBtn = document.getElementById("settings-btn");
    const settingsMenu = document.getElementById("settings-menu");
    const resetBtn = document.getElementById("reset-btn");
    const pauseBtn = document.getElementById("pause-btn");

    // Define object to represent colors for different elements
    const elementColors = {
        fire: "red",
        water: "blue",
        earth: "green",
        air: "lightblue"
    };

    // Define important variables used throughout the code
    let currentStep = "choose-element";
    let element = "";
    let food = "";
    let points = 0;
    let isPaused = false;

    // Function to update the story's HTML text
    function updateStory(text) {
        storyText.innerHTML = text;
    }

    // Function to show the element selection step
    function showElementSelection() {
        // Update the story text
        let storyText = "You wake up in a small village nestled in the heart of the Four Nations. " +
                        "The village elder approaches you and says, 'The world is out of balance. " +
                        "The Avatar has disappeared, and the elements are in chaos. You have been " +
                        "chosen to begin a journey to restore harmony. But first, you must choose your element.'";
        updateStory(storyText);

        // Create the HTML for the buttons
        let choicesHTML = `
            <button class="choice-btn" id="F-choice-btn" data-element="fire" style="background-color: ${elementColors.fire};">Fire</button>
            <button class="choice-btn" id="W-choice-btn" data-element="water" style="background-color: ${elementColors.water};">Water</button>
            <button class="choice-btn" id="E-choice-btn" data-element="earth" style="background-color: ${elementColors.earth};">Earth</button>
            <button class="choice-btn" id="A-choice-btn" data-element="air" style="background-color: ${elementColors.air};">Air</button>
        `;
        
        // Set the inner HTML of the choicesDiv to the buttons HTML
        choicesDiv.innerHTML = choicesHTML;

        // Get all buttons with the class "choice-btn"
        let buttons = document.querySelectorAll(".choice-btn");

        // Add a click event listener to each button
        buttons.forEach(function (btn) {
            btn.addEventListener("click", function () {
                // Get the element from the data-element attribute of the clicked button
                element = btn.getAttribute("data-element");

                // Move to the intro-quest step
                currentStep = "intro-quest";
                showIntroQuest();
            });
        });
    }

    // Function to show the intro quest step
    function showIntroQuest() {
        // Set food based on the chosen element
        if (element === "fire") {
            food = "Fire Flakes";
        } else if (element === "water") {
            food = "Seaweed";
        } else if (element === "earth") {
            food = "Rock Candy";
        } else if (element === "air") {
            food = "Custard Tarts";
        }

        // Update the story and award points
        updateStory(`You have chosen the path of ${element}. The elder smiles and hands you a small bag. You receive ${food}!`);
        points += 10; // Award points
        pointsDisplay.textContent = `Points: ${points}`;
        updateStory(`The elder says, 'This food will help you on your journey. Use it wisely.'`);

        // Move to the tame-pet step
        currentStep = "tame-pet";
        showTamePet();
    }

// Function to handle the offer action
function handleOffer() {
    // Update the story based on the chosen element and food
    updateStory(`You offer the ${food} to the ${element} creature. It seems pleased and decides to join you on your journey.`);
    points += 20; // Award additional points for successfully taming the pet
    pointsDisplay.textContent = `Points: ${points}`;

    // Move to the next step in the game (you can define this step as needed)
    currentStep = "next-step"; 
    showNextStep(); // Replace with the actual function to show the next step
}

// Example function for the next step (replace with actual implementation)
function showNextStep() {
    updateStory(`Having tamed the ${element} creature, you continue your journey with a new companion.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="continue-journey">Continue Your Journey</button>
    `;
    document.querySelector(".choice-btn").addEventListener("click", continueJourney);
}

    // Function to show the tame pet step
    function showTamePet() {
        // Update the story based on the chosen element
        if (element === "fire") {
            updateStory(`A small dragon appears! It looks hungry. Offer it ${food} to tame it.`);
        } else if (element === "water") {
            updateStory(`A water lion turtle emerges from the lake! It seems curious. Offer it ${food} to tame it.`);
        } else if (element === "earth") {
            updateStory(`A badgermole digs its way out of the ground! It sniffs the air. Offer it ${food} to tame it.`);
        } else if (element === "air") {
            updateStory(`A flying bison lands nearby! It looks at you expectantly. Offer it ${food} to tame it.`);
        }

        // Create the HTML for the offer button
        choicesDiv.innerHTML = `<button class="choice-btn" data-action="offer" style="background-color: ${elementColors[element]};">Offer ${food}</button>`;

        // Add a click event listener to the offer button
        const offerButton = document.querySelector(".choice-btn");
        if (offerButton) {
            offerButton.addEventListener("click", handleOffer);
        }
    }

// Placeholder function for continuing the journey (replace with actual implementation)
function continueJourney() {
    updateStory(`You continue your journey with your new companion, ready to face the challenges ahead.`);
    document.querySelector(".choice-btn").addEventListener("click", showPassOutcome);
    // Add more logic for the next part of the journey
}

    // Function to load progress from localStorage  
    function loadProgress() {
        const progress = JSON.parse(localStorage.getItem("gameProgress"));
        if (progress) {
            currentStep = progress.currentStep;
            element = progress.element;
            food = progress.food;
            points = progress.points;
            pointsDisplay.textContent = `Points: ${points}`;
            if (currentStep === "choose-element") {
                showElementSelection();
            } else if (currentStep === "intro-quest") {
                showIntroQuest();
            } else if (currentStep === "tame-pet") {
                showTamePet();
            }
        } else {
            showElementSelection();
        }
    }

    // Function to save progress to localStorage
    function saveProgress() {
        const progress = {  
            food: food,
            points: points,
        };
        localStorage.setItem("gameProgress", JSON.stringify(progress));
    }

    // Settings button click event listener
    settingsBtn.addEventListener("click", () => {
        settingsMenu.style.display = settingsMenu.style.display === "none" ? "block" : "none";
    });

    // Reset button click event listener
    resetBtn.addEventListener("click", () => {
        localStorage.removeItem("gameProgress");
        points = 0;
        pointsDisplay.textContent = `Points: ${points}`;
        showElementSelection();
    });

    // Pause button click event listener
    pauseBtn.addEventListener("click", () => {
        isPaused = !isPaused;
        pauseBtn.textContent = isPaused ? "Resume Game" : "Pause Game";
    });

    // Load progress when the game starts
    loadProgress();
});


