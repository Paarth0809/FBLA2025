import { randomInt } from './utilityFunctions.js';
import { gameState } from './gameState.js';
import { updateHealth, updateEnergy, updateSkill, removeFromInventory } from './utilityFunctions.js';

// Game Mechanics
export function skillCheck(skill, difficulty) {
    const skillValue = skill.includes('.') ?
        gameState.skills[skill.split('.')[0]][skill.split('.')[1]] :
        gameState.skills[skill];
    const roll = randomInt(1, 20);
    return (roll + skillValue) >= difficulty;
}

export function combat(enemy) {
    let playerHealth = gameState.health;
    let enemyHealth = enemy.health;
    let roundCount = 0;

    while (playerHealth > 0 && enemyHealth > 0) {
        roundCount++;
        // Player's turn
        if (skillCheck('combat', enemy.difficulty)) {
            const damage = randomInt(5, 15);
            enemyHealth -= damage;
            console.log(`You deal ${damage} damage to ${enemy.name}`);
        } else {
            console.log(`You miss ${enemy.name}`);
        }

        // Enemy's turn
        if (enemyHealth > 0) {
            if (randomInt(1, 20) + enemy.attackBonus > 10) {
                const damage = randomInt(3, 12);
                playerHealth -= damage;
                console.log(`${enemy.name} deals ${damage} damage to you`);
            } else {
                console.log(`${enemy.name} misses you`);
            }
        }

        console.log(`Round ${roundCount}: Your Health: ${playerHealth}, ${enemy.name}'s Health: ${enemyHealth}`);
    }

    if (playerHealth > 0) {
        console.log(`You defeated ${enemy.name}!`);
        updateHealth(playerHealth - gameState.health);
        return true;
    } else {
        console.log(`You were defeated by ${enemy.name}.`);
        updateHealth(5 - gameState.health); // Restore some health after defeat
        return false;
    }
}

export function useItem(item) {
    switch (item.name) {
        case "Healing Potion":
            updateHealth(50);
            break;
        case "Energy Elixir":
            updateEnergy(50);
            break;
        case "Scroll of Wisdom":
            Object.keys(gameState.skills).forEach(skill => {
                if (typeof gameState.skills[skill] === 'object') {
                    Object.keys(gameState.skills[skill]).forEach(subSkill => {
                        updateSkill(`${skill}.${subSkill}`, 1);
                    });
                } else {
                    updateSkill(skill, 1);
                }
            });
            break;
        // Add more item effects here
    }
    removeFromInventory(item);
}