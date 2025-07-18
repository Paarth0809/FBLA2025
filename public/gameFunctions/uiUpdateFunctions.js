import { gameState } from './gameState.js';


// UI Update Functions
export function updateStoryText(text) {
    document.getElementById('story-text').innerHTML = text;
}

export function updateChoices(choices) {
    const imageChoicesContainer = document.getElementById('imageChoices');
    imageChoicesContainer.innerHTML = '';
    const imageChoicesContainer2 = document.getElementById('imageChoices2');
    imageChoicesContainer2.innerHTML = '';
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    const teamContainer = document.getElementById('teamAvatarContainer');

    choices.forEach((choice, index) => {

        if (choice.image) {

            const img = document.createElement('img');
            img.src = choice.image;
            img.style.width = "30%";
            img.classList.add('individual-image');
            img.onclick = () => {
                choice.action();

            }
            if (index === 0 || index === 1) {
                imageChoicesContainer.appendChild(img);
            }
            else if (index === 2 || index === 3) {
                imageChoicesContainer2.appendChild(img);
            }

            teamContainer.style.visibility = 'visible';
            imageChoicesContainer.style.visibility = 'visible';
            imageChoicesContainer2.style.visibility = 'visible';
        }
        if (choice.text) {
            // Create a button for each choice
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.onclick = () => choice.action();
            choicesContainer.appendChild(button);
            choicesContainer.style.visibility = 'visible';
            teamContainer.style.visibility = 'hidden';
            teamContainer.style.width = '0px';
        }
    });
}

export function updateInventoryDisplay() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = '';
    gameState.inventory.forEach(item => {
        if (item && item.name && item.description) {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.description}`;
            const useButton = document.createElement('button');
            useButton.textContent = 'Use';
            useButton.onclick = () => useItem(item);
            li.appendChild(useButton);
            inventoryList.appendChild(li);
        }
    });
}

export function updateCharacterInfo() {
    // Get the DOM element where the character information will be displayed
    const characterStats = document.getElementById('character-stats');
    console.log("Updating character info with gameState:", gameState);
    if (!characterStats) {
        console.error("Character stats element not found in the DOM.");}

    // Update the inner HTML of the characterStats element with the current gameState values
    characterStats.innerHTML = `
        <!-- Display the character's basic information -->
        <p>Name: ${gameState.currentCharacter}</p>
        <p>Health: ${gameState.health}</p>
        <p>Energy: ${gameState.energy}</p>
       
        

        <!--Display the character's skills-->
        <h3>Skills:</h3>
        <ul>
            ${Object.entries(gameState.skills).map(([skill, value]) =>
            `<li>${skill}: ${value}</li>`
    ).join('')}
        </ul>

        <!-- Display the character's reputation with factions -->
        <h3>Reputation:</h3>
        <ul>
            ${Object.entries(gameState.reputation).map(([faction, value]) =>
        `<li>${faction}: ${value}</li>`
    ).join('')}
        </ul>

        <!--Display the character's allies -->
        <h3>Allies:</h3>
        <ul>
            ${gameState.allies.map(ally =>
        // Check if the ally has a name and display it
        ally && ally.name ? `<li>${ally.name}</li>` : ''
    ).join('')}
        </ul>
    `;
}


export function updateQuestLog() {
    // Implement quest log display
}
