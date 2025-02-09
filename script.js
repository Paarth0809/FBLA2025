document.addEventListener("DOMContentLoaded", () => {
    const storyText = document.getElementById("story-text");
    const choicesDiv = document.getElementById("choices");
    const pointsDisplay = document.getElementById("points-display");
    const settingsBtn = document.getElementById("settings-btn");
    const settingsMenu = document.getElementById("settings-menu");
    const resetBtn = document.getElementById("reset-btn");
    const pauseBtn = document.getElementById("pause-btn");

    const elementColors = {
        fire: "red",
        water: "blue",
        earth: "green",
        air: "lightblue"
    };

    let currentStep = "choose-element";
    let element = "";
    let food = "";
    let points = 0;
    let isPaused = false;

    function updateStory(text) {
        storyText.innerHTML = text;
    }

    function updatePoints(newPoints) {
        points = newPoints;
        pointsDisplay.textContent = `Points: ${points}`;
        saveProgress();
    }

    function saveProgress() {
        const progress = {
            currentStep,
            element,
            food,
            points,
        };
        localStorage.setItem("gameProgress", JSON.stringify(progress));
    }

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

    function showElementSelection() {
        updateStory("You wake up in a small village nestled in the heart of the Four Nations. The village elder approaches you and says, 'The world is out of balance. The Avatar has disappeared, and the elements are in chaos. You have been chosen to begin a journey to restore harmony. But first, you must choose your element.'");
        choicesDiv.innerHTML = `
            <button class="choice-btn" id="F-choice-btn" data-element="fire" style="background-color: ${elementColors.fire};">Fire</button>
            <button class="choice-btn" id="W-choice-btn" data-element="water" style="background-color: ${elementColors.water};">Water</button>
            <button class="choice-btn" id="E-choice-btn" data-element="earth" style="background-color: ${elementColors.earth};">Earth</button>
            <button class="choice-btn" id="A-choice-btn" data-element="air" style="background-color: ${elementColors.air};">Air</button>
        `;
        document.querySelectorAll(".choice-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                element = btn.dataset.element;
                currentStep = "intro-quest";
                showIntroQuest();
            });
        });
    }

    function showIntroQuest() {
        if (element === "fire") {
            food = "Fire Flakes";
        } else if (element === "water") {
            food = "Seaweed";
        } else if (element === "earth") {
            food = "Rock Candy";
        } else if (element === "air") {
            food = "Custard Tarts";
        }
        updateStory(`You have chosen the path of ${element}. The elder smiles and hands you a small bag. You receive ${food}!`);
        updatePoints(points + 10); // Award points
        updateStory(`The elder says, 'This food will help you on your journey. Use it wisely.'`);
        currentStep = "tame-pet";
        showTamePet();
    }

    function showTamePet() {
        if (element === "fire") {
            updateStory(`A small dragon appears! It looks hungry. Offer it ${food} to tame it.`);
        } else if (element === "water") {
            updateStory(`A water lion turtle emerges from the lake! It seems curious. Offer it ${food} to tame it.`);
        } else if (element === "earth") {
            updateStory(`A badgermole digs its way out of the ground! It sniffs the air. Offer it ${food} to tame it.`);
        } else if (element === "air") {
            updateStory(`A flying bison lands nearby! It looks at you expectantly. Offer it ${food} to tame it.`);
        }
        choicesDiv.innerHTML = `<button class="choice-btn" data-action="offer" style="background-color: ${elementColors[element]};">Offer ${food}</button>`;
        const offerButton = document.querySelector(".choice-btn");
        if (offerButton) {
            offerButton.addEventListener("click", handleOffer);
        }
    }

    function handleOffer() {
        updateStory(`You offer ${food} to the creature. It happily accepts and becomes your loyal companion!`);
        updatePoints(points + 20); // Award points for taming the pet
        choicesDiv.innerHTML = ""; // Clear choices
        currentStep = "gameplay";
        startGameplay();
    }

    function startGameplay() {
        updateStory(`As an Air Monk diplomat, you are tasked with restoring peace between the warring factions. While heading to the Earth-Water base, you encounter a group of Air Rebels. They seem hostile, and something feels off.`);
        choicesDiv.innerHTML = `
            <button class="choice-btn" data-action="show-pass" style="background-color: ${elementColors[element]};">Show Diplomatic Pass</button>
            <button class="choice-btn" data-action="fight" style="background-color: ${elementColors[element]};">Fight Them</button>
        `;
        document.querySelectorAll(".choice-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const action = btn.dataset.action;
                if (action === "show-pass") {
                    showPassOutcome();
                } else if (action === "fight") {
                    fightOutcome();
                }
            });
        });
    }

    settingsBtn.addEventListener("click", () => {
        settingsMenu.style.display = settingsMenu.style.display === "none" ? "block" : "none";
    });

    resetBtn.addEventListener("click", () => {
        localStorage.removeItem("gameProgress");
        points = 0;
        pointsDisplay.textContent = `Points: ${points}`;
        showElementSelection();
    });

    pauseBtn.addEventListener("click", () => {
        isPaused = !isPaused;
        pauseBtn.textContent = isPaused ? "Resume Game" : "Pause Game";
    });

    loadProgress();
});

function showPassOutcome() {
    updateStory(`The rebels sneer and say, “Diplomacy is dead. You were too weak to seek justice for our fallen monks. You will pay for your betrayal!” They attack, forcing you to flee. You get lost in the woods but remember your teacher’s wise words: “When lost, sometimes the best thing to do is nothing.” You meditate, and a spirit guides you to a nearby Fire village, where you learn the Fire army commander is planning an attack on the Earth base.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="sneak" style="background-color: ${elementColors[element]};">Sneak into the Tavern</button>
        <button class="choice-btn" data-action="listen" style="background-color: ${elementColors[element]};">Listen from the Window</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "sneak") {
                sneakOutcome();
            } else if (action === "listen") {
                listenOutcome();
            }
        });
    });
}

function fightOutcome() {
    updateStory(`You use a powerful gust of wind to strike a rebel into a tree. However, outnumbered, you are captured and brought to a Fire General.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="persuade" style="background-color: ${elementColors[element]};">Persuade the General</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "persuade") {
                persuadeOutcome();
            }
        });
    });
}

function sneakOutcome() {
    updateStory(`You sneak into the tavern and overhear the Fire commander discussing a betrayal with an Earth informant. Before you can learn more, a guard spots you. You flee but now know the Earth army is preparing for battle.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="warn-earth" style="background-color: ${elementColors[element]};">Warn the Earth Base</button>
        <button class="choice-btn" data-action="confront-commander" style="background-color: ${elementColors[element]};">Confront the Fire Commander</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "warn-earth") {
                warnEarthOutcome();
            } else if (action === "confront-commander") {
                confrontCommanderOutcome();
            }
        });
    });
}

function listenOutcome() {
    updateStory(`You listen from the window but only catch fragments of the conversation. A guard spots you, and you must flee. You now know the Fire army is planning an attack.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="warn-earth" style="background-color: ${elementColors[element]};">Warn the Earth Base</button>
        <button class="choice-btn" data-action="confront-commander" style="background-color: ${elementColors[element]};">Confront the Fire Commander</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "warn-earth") {
                warnEarthOutcome();
            } else if (action === "confront-commander") {
                confrontCommanderOutcome();
            }
        });
    });
}

function warnEarthOutcome() {
    updateStory(`You warn the Earth base, but the Earth General is skeptical. Just as you try to explain, a scout rushes in—Fire troops are advancing. You must now decide: help Earth prepare for battle or attempt last-minute peace talks.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="prepare-battle" style="background-color: ${elementColors[element]};">Prepare for Battle</button>
        <button class="choice-btn" data-action="peace-talks" style="background-color: ${elementColors[element]};">Attempt Peace Talks</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "prepare-battle") {
                prepareBattleOutcome();
            } else if (action === "peace-talks") {
                peaceTalksOutcome();
            }
        });
    });
}

function confrontCommanderOutcome() {
    updateStory(`You confront the Fire commander, pleading for diplomacy. The commander hesitates, but a messenger arrives—the Earth base is already preparing for battle. The commander turns to you and says, “Looks like they’ve made their decision. What’s it going to be, monk? Stand aside, or get in the way?”`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="stand-aside" style="background-color: ${elementColors[element]};">Stand Aside</button>
        <button class="choice-btn" data-action="get-in-way" style="background-color: ${elementColors[element]};">Get in the Way</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "stand-aside") {
                standAsideOutcome();
            } else if (action === "get-in-way") {
                getInWayOutcome();
            }
        });
    });
}

function prepareBattleOutcome() {
    updateStory(`You help the Earth army prepare for battle. The Fire army attacks, but the Earth army is ready. The battle is fierce, but the Earth army holds their ground. The war continues, but you have proven your worth as a diplomat.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="retrieve-artifact" style="background-color: ${elementColors[element]};">Retrieve the Artifact</button>
        <button class="choice-btn" data-action="negotiate-ceasefire" style="background-color: ${elementColors[element]};">Negotiate a Ceasefire</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "retrieve-artifact") {
                retrieveArtifact();
            } else if (action === "negotiate-ceasefire") {
                negotiateCeasefire();
            }
        });
    });
}

function peaceTalksOutcome() {
    updateStory(`You attempt peace talks, but the Fire army attacks before you can make progress. The Earth army is caught off guard, and the battle is lost. The war continues, but you have learned the importance of preparation.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="retrieve-artifact" style="background-color: ${elementColors[element]};">Retrieve the Artifact</button>
        <button class="choice-btn" data-action="negotiate-ceasefire" style="background-color: ${elementColors[element]};">Negotiate a Ceasefire</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "retrieve-artifact") {
                retrieveArtifact();
            } else if (action === "negotiate-ceasefire") {
                negotiateCeasefire();
            }
        });
    });
}

function standAsideOutcome() {
    updateStory(`You stand aside, and the Fire army attacks the Earth base. The Earth army is defeated, and the Fire army gains control of the region. The war continues, but you have lost the trust of the Earth army.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="retrieve-artifact" style="background-color: ${elementColors[element]};">Retrieve the Artifact</button>
        <button class="choice-btn" data-action="negotiate-ceasefire" style="background-color: ${elementColors[element]};">Negotiate a Ceasefire</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "retrieve-artifact") {
                retrieveArtifact();
            } else if (action === "negotiate-ceasefire") {
                negotiateCeasefire();
            }
        });
    });
}

function getInWayOutcome() {
    updateStory(`You get in the way, using your airbending to disrupt the Fire army’s attack. The Earth army is able to hold their ground, and the Fire army retreats. The war continues, but you have proven your worth as a diplomat.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="retrieve-artifact" style="background-color: ${elementColors[element]};">Retrieve the Artifact</button>
        <button class="choice-btn" data-action="negotiate-ceasefire" style="background-color: ${elementColors[element]};">Negotiate a Ceasefire</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "retrieve-artifact") {
                retrieveArtifact();
            } else if (action === "negotiate-ceasefire") {
                negotiateCeasefire();
            }
        });
    });
}

function retrieveArtifact() {
    updateStory(`You decide to retrieve the fragment of the stolen Book of Knowledge before it can be used to escalate the war. Under the cover of night, you infiltrate the Fire camp.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="stealth" style="background-color: ${elementColors[element]};">Use Stealth</button>
        <button class="choice-btn" data-action="distraction" style="background-color: ${elementColors[element]};">Create a Distraction</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "stealth") {
                useStealth();
            } else if (action === "distraction") {
                createDistraction();
            }
        });
    });
}

function useStealth() {
    updateStory(`You use your airbending to silently glide past the guards and reach the command tent. Inside, you find the artifact. As you grab it, the Fire General enters.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="fight-general" style="background-color: ${elementColors[element]};">Fight the General</button>
        <button class="choice-btn" data-action="escape" style="background-color: ${elementColors[element]};">Escape with the Artifact</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "fight-general") {
                fightGeneral();
            } else if (action === "escape") {
                escapeWithArtifact();
            }
        });
    });
}

function createDistraction() {
    updateStory(`You create a distraction by setting a small fire in the camp. While the guards are busy, you sneak into the command tent and grab the artifact. However, the Fire General notices you and gives chase.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="fight-general" style="background-color: ${elementColors[element]};">Fight the General</button>
        <button class="choice-btn" data-action="escape" style="background-color: ${elementColors[element]};">Escape with the Artifact</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "fight-general") {
                fightGeneral();
            } else if (action === "escape") {
                escapeWithArtifact();
            }
        });
    });
}

function fightGeneral() {
    updateStory(`The Fire General is a master of firebending. Flames erupt as you engage in a fierce battle. Your airbending counters his attacks, but the tent begins to collapse.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="finish-fight" style="background-color: ${elementColors[element]};">Finish the Fight</button>
        <button class="choice-btn" data-action="retreat" style="background-color: ${elementColors[element]};">Retreat</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "finish-fight") {
                finishFight();
            } else if (action === "retreat") {
                retreat();
            }
        });
    });
}

function finishFight() {
    updateStory(`You summon a powerful gust of wind, extinguishing the flames and knocking the general unconscious. You grab the artifact and escape. However, the Fire army is now on high alert.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="return-to-temple" style="background-color: ${elementColors[element]};">Return to the Air Temple</button>
        <button class="choice-btn" data-action="hide-artifact" style="background-color: ${elementColors[element]};">Hide the Artifact</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "return-to-temple") {
                returnToTemple();
            } else if (action === "hide-artifact") {
                hideArtifact();
            }
        });
    });
}

function retreat() {
    updateStory(`You decide to retreat, leaving the artifact behind. The Fire General vows revenge, and the war intensifies.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="regroup" style="background-color: ${elementColors[element]};">Regroup with Allies</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "regroup") {
                regroupWithAllies();
            }
        });
    });
}

function escapeWithArtifact() {
    updateStory(`You use your airbending to create a whirlwind, distracting the general long enough to escape with the artifact. You return to the Air Temple, where the monks debate its fate.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="destroy-artifact" style="background-color: ${elementColors[element]};">Destroy the Artifact</button>
        <button class="choice-btn" data-action="study-artifact" style="background-color: ${elementColors[element]};">Study the Artifact</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "destroy-artifact") {
                destroyArtifact();
            } else if (action === "study-artifact") {
                studyArtifact();
            }
        });
    });
}

function destroyArtifact() {
    updateStory(`You destroy the artifact, ensuring its dangerous knowledge is lost forever. The war continues, but the threat of ultimate power is gone.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="end-game" style="background-color: ${elementColors[element]};">End Game</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "end-game") {
                endGame();
            }
        });
    });
}

function studyArtifact() {
    updateStory(`You study the artifact, unlocking new bending techniques. However, the knowledge is dangerous, and the other nations grow suspicious.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="share-knowledge" style="background-color: ${elementColors[element]};">Share the Knowledge</button>
        <button class="choice-btn" data-action="keep-secret" style="background-color: ${elementColors[element]};">Keep It a Secret</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "share-knowledge") {
                shareKnowledge();
            } else if (action === "keep-secret") {
                keepSecret();
            }
        });
    });
}

function shareKnowledge() {
    updateStory(`You share the knowledge with all nations, hoping to create balance. However, some misuse the power, leading to new conflicts.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="end-game" style="background-color: ${elementColors[element]};">End Game</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "end-game") {
                endGame();
            }
        });
    });
}

function keepSecret() {
    updateStory(`You keep the knowledge a secret, but rumors spread. The other nations demand answers, and tensions rise.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="end-game" style="background-color: ${elementColors[element]};">End Game</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "end-game") {
                endGame();
            }
        });
    });
}

function endGame() {
    updateStory(`The war continues, and the fate of the world remains uncertain. Your choices have shaped the course of history, but the journey is far from over.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="restart" style="background-color: ${elementColors[element]};">Restart Game</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "restart") {
                restartGame();
            }
        });
    });
}

function restartGame() {
    localStorage.removeItem("gameProgress");
    points = 0;
    pointsDisplay.textContent = `Points: ${points}`;
    showElementSelection();
}

function regroupWithAllies() {
    updateStory(`You regroup with your allies, who are disappointed by your failure to retrieve the artifact. However, they agree to continue the fight.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="plan-attack" style="background-color: ${elementColors[element]};">Plan an Attack</button>
        <button class="choice-btn" data-action="seek-allies" style="background-color: ${elementColors[element]};">Seek New Allies</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "plan-attack") {
                planAttack();
            } else if (action === "seek-allies") {
                seekAllies();
            }
        });
    });
}

function planAttack() {
    updateStory(`You plan a coordinated attack on the Fire army. The battle is fierce, but your allies fight bravely.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="lead-charge" style="background-color: ${elementColors[element]};">Lead the Charge</button>
        <button class="choice-btn" data-action="support-from-rear" style="background-color: ${elementColors[element]};">Support from the Rear</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "lead-charge") {
                leadCharge();
            } else if (action === "support-from-rear") {
                supportFromRear();
            }
        });
    });
}

function leadCharge() {
    updateStory(`You lead the charge, inspiring your allies with your bravery. The Fire army is caught off guard, and your forces gain the upper hand.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="pursue-retreating-enemy" style="background-color: ${elementColors[element]};">Pursue the Retreating Enemy</button>
        <button class="choice-btn" data-action="hold-position" style="background-color: ${elementColors[element]};">Hold Your Position</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "pursue-retreating-enemy") {
                pursueRetreatingEnemy();
            } else if (action === "hold-position") {
                holdPosition();
            }
        });
    });
}

function supportFromRear() {
    updateStory(`You support your allies from the rear, using your airbending to disrupt the enemy's formations. The battle is won, but at a great cost.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="tend-to-wounded" style="background-color: ${elementColors[element]};">Tend to the Wounded</button>
        <button class="choice-btn" data-action="celebrate-victory" style="background-color: ${elementColors[element]};">Celebrate the Victory</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "tend-to-wounded") {
                tendToWounded();
            } else if (action === "celebrate-victory") {
                celebrateVictory();
            }
        });
    });
}

function pursueRetreatingEnemy() {
    updateStory(`You pursue the retreating enemy, but they lead you into an ambush. Your forces suffer heavy losses, and you are forced to retreat.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="regroup" style="background-color: ${elementColors[element]};">Regroup with Allies</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "regroup") {
                regroupWithAllies();
            }
        });
    });
}

function holdPosition() {
    updateStory(`You hold your position, ensuring your forces are not overextended. The Fire army regroups and launches a counterattack, but your defenses hold.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="plan-next-move" style="background-color: ${elementColors[element]};">Plan Your Next Move</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "plan-next-move") {
                planNextMove();
            }
        });
    });
}

function tendToWounded() {
    updateStory(`You tend to the wounded, earning the gratitude of your allies. However, the Fire army uses this time to regroup and prepare for another attack.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="prepare-for-next-battle" style="background-color: ${elementColors[element]};">Prepare for the Next Battle</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "prepare-for-next-battle") {
                prepareForNextBattle();
            }
        });
    });
}

function celebrateVictory() {
    updateStory(`You celebrate the victory with your allies, boosting morale. However, the Fire army uses this time to regroup and prepare for another attack.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="prepare-for-next-battle" style="background-color: ${elementColors[element]};">Prepare for the Next Battle</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "prepare-for-next-battle") {
                prepareForNextBattle();
            }
        });
    });
}

function prepareForNextBattle() {
    updateStory(`You prepare for the next battle, knowing the Fire army will not give up easily.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="plan-next-move" style="background-color: ${elementColors[element]};">Plan Your Next Move</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "plan-next-move") {
                planNextMove();
            }
        });
    });
}

function planNextMove() {
    updateStory(`You plan your next move, considering all options.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="seek-allies" style="background-color: ${elementColors[element]};">Seek New Allies</button>
        <button class="choice-btn" data-action="launch-surprise-attack" style="background-color: ${elementColors[element]};">Launch a Surprise Attack</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "seek-allies") {
                seekAllies();
            } else if (action === "launch-surprise-attack") {
                launchSurpriseAttack();
            }
        });
    });
}

function seekAllies() {
    updateStory(`You seek new allies, hoping to strengthen your forces.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="approach-water-nation" style="background-color: ${elementColors[element]};">Approach the Water Nation</button>
        <button class="choice-btn" data-action="approach-earth-nation" style="background-color: ${elementColors[element]};">Approach the Earth Nation</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "approach-water-nation") {
                approachWaterNation();
            } else if (action === "approach-earth-nation") {
                approachEarthNation();
            }
        });
    });
}

function approachWaterNation() {
    updateStory(`You approach the Water Nation, who are hesitant to join the war. However, they agree to provide supplies and healing support.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="plan-next-move" style="background-color: ${elementColors[element]};">Plan Your Next Move</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "plan-next-move") {
                planNextMove();
            }
        });
    });
}

function approachEarthNation() {
    updateStory(`You approach the Earth Nation, who are eager to join the fight. They provide reinforcements and fortifications.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="plan-next-move" style="background-color: ${elementColors[element]};">Plan Your Next Move</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "plan-next-move") {
                planNextMove();
            }
        });
    });
}

function launchSurpriseAttack() {
    updateStory(`You launch a surprise attack on the Fire army, catching them off guard. The battle is fierce, but your forces gain the upper hand.`);
    choicesDiv.innerHTML = `
        <button class="choice-btn" data-action="pursue-retreating-enemy" style="background-color: ${elementColors[element]};">Pursue the Retreating Enemy</button>
        <button class="choice-btn" data-action="hold-position" style="background-color: ${elementColors[element]};">Hold Your Position</button>
    `;
    document.querySelectorAll(".choice-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const action = btn.dataset.action;
            if (action === "pursue-retreating-enemy") {
                pursueRetreatingEnemy();
            } else if (action === "hold-position") {
                holdPosition();
            }
        });
    });
}