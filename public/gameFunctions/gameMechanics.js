import { randomInt } from './utilityFunctions.js';
import { gameState } from './gameState.js';
import { updateSkill, updateReputation, updateHealth, updateEnergy } from './utilityFunctions.js';


// Game Mechanics
//checks if the skill is greater than or equal to the amount defined in the paramneter
export function skillCheck(skill, amount) {
    const skillValue = gameState.skills[skill];
    return skillValue >= amount;
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
        updateHealthWithDifficulty(playerHealth - gameState.health);
        return true;
    } else {
        console.log(`You were defeated by ${enemy.name}.`);
        updateHealthWithDifficulty(5 - gameState.health); // Restore some health after defeat
        return false;
    }
}

export function useItem(item) {
    switch (item.name) {
        case "Healing Potion":
            updateHealthWithDifficulty(50);
            break;
        case "Energy Elixir":
            updateEnergyWithDifficulty(50);
            break;
        case "Scroll of Wisdom":
            Object.keys(gameState.skills).forEach(skill => {
                if (typeof gameState.skills[skill] === 'object') {
                    Object.keys(gameState.skills[skill]).forEach(subSkill => {
                        updateSkillWithDifficulty(`${skill}.${subSkill}`, 1);
                    });
                } else {
                    updateSkillWithDifficulty(skill, 1);
                }
            });
            break;
        // Add more item effects here
    }
    removeFromInventory(item);
}


// ========== NEW FUNCTIONS FOR DIFFICULTY ==========


// Changes the amount depending on difficulty
// Hard mode makes you lose more and gain less
// Easy mode does the opposite
export function adjustAmountByDifficulty(amount) {
   if (gameState.difficulty === "hard") {
       // Lose 50% more or gain 50% less
     
           return Math.floor(amount * 0.5);
    
   } else if (gameState.difficulty === "easy") {
       // Lose 50% less or gain 50% more
      
           return Math.floor(amount * 2);
      
   }
   // Normal difficulty: no change
   return amount;
}


//  updateHealthWithDifficulty w/ difficulty 
export function updateHealthWithDifficulty(amount) {
   const adjustedAmount = adjustAmountByDifficulty(amount);
   updateHealth(adjustedAmount);
}


//  energy w/ difficulty
export function updateEnergyWithDifficulty(amount) {
   const adjustedAmount = adjustAmountByDifficulty(amount);
   updateEnergy(adjustedAmount);
}


// skills w/ difficulty
export function updateSkillWithDifficulty(skill, amount) {
   const adjustedAmount = adjustAmountByDifficulty(amount);
   updateSkill(skill, adjustedAmount);
}


// reputation w/ difficulty
export function updateReputationWithDifficulty(faction, amount) {
   const adjustedAmount = adjustAmountByDifficulty(amount);
   updateReputation(faction, adjustedAmount);
}
