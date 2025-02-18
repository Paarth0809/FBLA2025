import { gameState } from './gameState.js';


// UI Update Functions
export function updateStoryText(text) {
    document.getElementById('story-text').innerHTML = text;
}

export function updateChoices(choices) {
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => choice.action();
        choicesContainer.appendChild(button);
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
    const characterStats = document.getElementById('character-stats');
    characterStats.innerHTML = `
        <p>Name: ${gameState.playerName}</p>
        <p>Health: ${gameState.health}</p>
        <p>Energy: ${gameState.energy}</p>
        <p>Gold: ${gameState.gold}</p>
        <p>Location: ${gameState.currentLocation}</p>
        <p>Days Passed: ${gameState.daysPassed}</p>
        <h3>Skills:</h3>
        <ul>
            ${Object.entries(gameState.skills).map(([skill, value]) =>
        typeof value === 'object' ?
            `<li>${skill}: ${Object.entries(value).map(([subSkill, subValue]) =>
                `${subSkill}: ${subValue}`).join(', ')}</li>` :
            `<li>${skill}: ${value}</li>`
    ).join('')}
        </ul>
        <h3>Reputation:</h3>
        <ul>
            ${Object.entries(gameState.reputation).map(([faction, value]) =>
        `<li>${faction}: ${value}</li>`
    ).join('')}
        </ul>
        <h3>Allies:</h3>
        <ul>
            ${gameState.allies.map(ally => ally && ally.name ? `<li>${ally.name}</li>` : '').join('')}
        </ul>
    `;
}

export function updateQuestLog() {
    // Implement quest log display
}
