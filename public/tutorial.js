// Tutorial steps configuration
const steps = [
    {
        element: '.navbar',
        text: 'This is the navigation bar. It is used for various things like creating an account, logging in, going to the home page, and viewing the tutorial which you\'re doing now!'
    },
    {
        element: '#videoContainer',
        text: 'This is where you\'ll see important cutscenes from the Avatar story. These moments help immerse you in the world!'
    },
    {
        element: '#tutorialChoices',
        text: 'Here you will make important decisions that affect your journey through the Avatar world. Choose wisely!'
    },
    {
        element: '#character-info',
        text: 'This is the character info panel. It shows your current status, including your character\'s health, energy, skills, reputation, and allies. Your choices throughout the game will affect these values.'
    },
    {
        element: '#story-text',
        text: 'This area displays the current story text and narrative. Read carefully as it sets up the context for your choices!'
    },
    {
        element: '#storyInput',
        text: 'You can use this input field to type commands or interact with the story. Try typing "stop" to pause the story at any time!'
    }
];

let currentStep = 0;

// Get DOM elements
const overlay = document.getElementById('overlay');
const tooltip = document.getElementById('tooltip');
const tooltipText = document.getElementById('tooltipText');
const nextBtn = document.getElementById('nxt-btn');

// Function to show a tutorial step
function showStep(step) {
    const targetElement = document.querySelector(step.element);
    if (!targetElement) {
        console.warn(`Element not found: ${step.element}`);
        return;
    }

    // Get element position
    const rect = targetElement.getBoundingClientRect();
    
    // Position tooltip
    tooltip.style.position = 'absolute';
    tooltip.style.top = `${rect.bottom + window.scrollY + 10}px`;
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    
    // Adjust tooltip position if it goes off screen
    const tooltipRect = tooltip.getBoundingClientRect();
    if (tooltipRect.right > window.innerWidth) {
        tooltip.style.left = `${window.innerWidth - tooltipRect.width - 20}px`;
    }
    if (tooltipRect.left < 0) {
        tooltip.style.left = '20px';
    }
    
    // Add highlight to target element
    targetElement.classList.add('highlight');
    
    // Set tooltip text and show elements
    tooltipText.textContent = step.text;
    overlay.style.display = 'block';
    tooltip.style.display = 'block';
    
    // Scroll element into view if needed
    targetElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center',
        inline: 'nearest'
    });
}

// Function to hide current tutorial step
function hideStep(step) {
    const targetElement = document.querySelector(step.element);
    if (targetElement) {
        targetElement.classList.remove('highlight');
    }
}

// Function to go to next tutorial step
function nextStep() {
    // Hide current step
    if (currentStep < steps.length) {
        hideStep(steps[currentStep]);
    }
    
    // Move to next step
    currentStep++;
    
    if (currentStep < steps.length) {
        // Show next step
        showStep(steps[currentStep]);
    } else {
        // Tutorial completed
        endTutorial();
    }
}

// Function to end tutorial
function endTutorial() {
    overlay.style.display = 'none';
    tooltip.style.display = 'none';
    currentStep = 0;
    
    // Show completion message
    
}

// Function to start tutorial
function startTutorial() {
    currentStep = 0;
    if (steps.length > 0) {
        showStep(steps[currentStep]);
    }
}

// Event listeners
if (nextBtn) {
    nextBtn.addEventListener('click', nextStep);
}

// Handle overlay click to close tutorial
if (overlay) {
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            endTutorial();
        }
    });
}

// Handle escape key to close tutorial
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        endTutorial();
    }
});

// Auto-start tutorial when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure all elements are rendered
    setTimeout(startTutorial, 500);
});

// Export functions for potential external use
window.tutorialFunctions = {
    startTutorial,
    nextStep,
    endTutorial
};