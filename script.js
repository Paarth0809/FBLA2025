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
            } else if (currentStep === "gameplay") {
                startGameplay();
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
        choicesDiv.innerHTML = ""; // Clear choices
    }

    function peaceTalksOutcome() {
        updateStory(`You attempt peace talks, but the Fire army attacks before you can make progress. The Earth army is caught off guard, and the battle is lost. The war continues, but you have learned the importance of preparation.`);
        choicesDiv.innerHTML = ""; // Clear choices
    }

    function standAsideOutcome() {
        updateStory(`You stand aside, and the Fire army attacks the Earth base. The Earth army is defeated, and the Fire army gains control of the region. The war continues, but you have lost the trust of the Earth army.`);
        choicesDiv.innerHTML = ""; // Clear choices
    }

    function getInWayOutcome() {
        updateStory(`You get in the way, using your airbending to disrupt the Fire army’s attack. The Earth army is able to hold their ground, and the Fire army retreats. The war continues, but you have proven your worth as a diplomat.`);
        choicesDiv.innerHTML = ""; // Clear choices
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
