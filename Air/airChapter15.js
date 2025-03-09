// Chapter 15: The Sun Warriors and Firebending Mastery
export function startOpt1AirChapter15() {
    gameState.currentChapter = 15;
    displayOpt1AirChapter15();
}

export function startOpt2AirChapter15() {
    gameState.currentChapter = 15;
    displayOpt2AirChapter15();
}

function displayOpt1AirChapter15() {
    const chapter15Text = `
        <h2>Chapter 15: The Sun Warriors and Firebending Mastery</h2>
        <p>Zuko suggests visiting the ancient Sun Warrior ruins to rediscover the true essence of firebending. After much hesitation, you agree, understanding that learning firebending is critical to fulfilling your role as the Avatar.</p>
        <p>The Sun Warriors’ teachings challenge everything you thought about firebending. It’s not simply a tool of destruction—it’s a source of life, warmth, and energy. Through the trials of the ruins and the wisdom of the last dragons, you must overcome your fear and embrace firebending.</p>
    `;
    updateStoryText(chapter15Text);
    updateChoices([
        { text: "Approach the dragons and observe their fire", action: () => handleOpt1AirChapter15Choice(1) },
        { text: "Perform the Sun Warrior fire-honoring ritual", action: () => handleOpt1AirChapter15Choice(2) },
        { text: "Train with Zuko to ignite your first flame", action: () => handleOpt1AirChapter15Choice(3) },
        { text: "Meditate on your fear of firebending to overcome it", action: () => handleOpt1AirChapter15Choice(4) }
    ]);
}

function displayOpt2AirChapter15() {
    const chapter15Text = `
        <h2>Chapter 15: The Sun Warriors and Firebending Mastery</h2>
        <p>Zuko takes you to the ruins of the Sun Warriors, where the origins of firebending are preserved. Here, you face trials meant to humble and enlighten firebenders, forcing you to shed your fear of the element.</p>
        <p>Your ultimate challenge is to meet Ran and Shaw, the last dragons, and learn the true nature of firebending. It is no longer about rage or destruction—it is about the balance of life and power. Will you succeed?</p>
    `;
    updateStoryText(chapter15Text);
    updateChoices([
        { text: "Approach the dragons and observe their fire", action: () => handleOpt2AirChapter15Choice(1) },
        { text: "Perform the Sun Warrior fire-honoring ritual", action: () => handleOpt2AirChapter15Choice(2) },
        { text: "Train with Zuko to master your first flame", action: () => handleOpt2AirChapter15Choice(3) },
        { text: "Meditate on the lessons of firebending to understand its balance", action: () => handleOpt2AirChapter15Choice(4) }
    ]);
}

function handleOpt1AirChapter15Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("You and Zuko approach the dragons, Ran and Shaw, with reverence, observing the vibrant, dancing flames they produce.");
            updateSkill('spirituality', 3);
            if (skillCheck('spirituality', 15)) {
                addSkill('firebending', 1);
                updateStoryText("The dragons' fire illuminates the truth about firebending—it is not anger, but energy and life. Their display inspires you, and you ignite your first flame with confidence.");
            } else {
                updateReputation(-5);
                updateStoryText("You struggle to connect with the dragons’ message, leaving you with uncertainty about your firebending ability.");
            }
            break;
        case 2:
            updateStoryText("Together with Zuko, you perform the ancient Sun Warrior fire-honoring ritual, showing respect to the dragons and firebending itself.");
            updateSkill('ritual', 2);
            if (skillCheck('ritual', 14)) {
                addSkill('firebending', 1);
                updateStoryText("The ritual deepens your understanding of firebending’s sacred origins. You feel its power flow through you, allowing you to create and control fire for the first time.");
            } else {
                updateEnergy(-10);
                updateStoryText("The ritual is difficult to perform perfectly, but you gain a newfound respect for firebending and its origins.");
            }
            break;
        case 3:
            updateStoryText("Zuko guides you through firebending techniques, focusing on balance and control rather than power or rage.");
            updateSkill('firebending', 2);
            if (skillCheck('firebending', 15)) {
                addSkill('firebending', 1);
                updateStoryText("With Zuko’s help, you ignite your first flame, feeling its warmth and energy. It’s a transformative moment as you overcome your fear of firebending.");
            } else {
                updateHealth(-10);
                updateStoryText("Despite Zuko’s guidance, your fear of firebending makes it difficult to ignite a flame. Progress is slow and challenging.");
            }
            break;
        case 4:
            updateStoryText("You meditate on your fear of firebending, reflecting on how it has held you back and what it means to embrace it as the Avatar.");
            updateSkill('insight', 3);
            if (skillCheck('insight', 15)) {
                addSkill('firebending', 1);
                updateStoryText("Through meditation, you come to terms with your fear and realize that firebending is as much about creation as destruction. This understanding allows you to ignite your first flame.");
            } else {
                updateEnergy(-10);
                updateStoryText("The meditation is difficult, and you struggle to overcome your fear. Firebending remains elusive for now.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Return to the group with your newfound skill", action: startOpt1AirChapter16 }
        ]);
    }, 300);
}

function handleOpt2AirChapter15Choice(choice) {
    switch (choice) {
        case 1:
            updateStoryText("Standing before the dragons, you observe the vibrant, radiant fire they produce. It is unlike anything you’ve seen before.");
            updateSkill('perception', 3);
            if (skillCheck('perception', 15)) {
                addSkill('firebending', 1);
                updateStoryText("The dragons' fire teaches you about balance, energy, and respect. Inspired, you successfully ignite your first flame with grace and purpose.");
            } else {
                updateReputation(-5);
                updateStoryText("The dragons’ display is overwhelming, and you struggle to grasp the deeper meaning behind their firebending.");
            }
            break;
        case 2:
            updateStoryText("You and Zuko perform the Sun Warrior ritual, honoring the dragons and firebending as an art form.");
            updateSkill('discipline', 2);
            if (skillCheck('discipline', 14)) {
                addSkill('firebending', 1);
                updateStoryText("The ritual fills you with a sense of connection to firebending’s true nature. You channel this connection to produce your first controlled flame.");
            } else {
                updateEnergy(-10);
                updateStoryText("The ritual is taxing, and while you gain insight into firebending’s roots, you are unable to produce a flame just yet.");
            }
            break;
        case 3:
            updateStoryText("Zuko trains you in firebending basics, helping you overcome your fear and focus on balance and precision.");
            updateSkill('firebending', 3);
            if (skillCheck('firebending', 15)) {
                addSkill('firebending', 1);
                updateStoryText("Through Zuko’s patient instruction, you learn to control fire, igniting your first flame with confidence and mastery.");
            } else {
                updateHealth(-10);
                updateStoryText("Your fear of firebending makes the training challenging, and while you make progress, you’re not yet ready to produce a flame.");
            }
            break;
        case 4:
            updateStoryText("You meditate deeply on firebending’s role in the world, grappling with its dual nature as both creation and destruction.");
            updateSkill('insight', 3);
            if (skillCheck('insight', 15)) {
                addSkill('firebending', 1);
                updateStoryText("Through meditation, you understand firebending’s true purpose and ignite your first flame, feeling its warmth and life-giving energy.");
            } else {
                updateEnergy(-10);
                updateStoryText("The meditation is difficult, and your fear of firebending continues to hold you back for now.");
            }
            break;
    }
    setTimeout(() => {
        updateChoices([
            { text: "Return to the group with a new understanding of firebending", action: startOpt2AirChapter16 }
        ]);
    }, 300);
}
