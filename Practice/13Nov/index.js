// ========================================
// DOM ELEMENTS
// ========================================

const currentScoreDisplay = document.querySelector('#currentScore');
const highScoreDisplay = document.querySelector('#highScore');
const timerDisplay = document.querySelector('#timer');
const clickButton = document.querySelector('#clickButton');
const startButton = document.querySelector('#startButton');
const resetButton = document.querySelector('#resetButton');
const statusMessage = document.querySelector('#statusMessage');
const clickPerSecond = document.querySelector('#cps');

// ========================================
// GAME VARIABLES
// ========================================

let currentScore = 0;
let highScore = 0;
let timeRemaining = 10;
let gameTimerId = null;
let isGameActive = false;
let cps = 0;

// ========================================
// INITIALIZE GAME
// ========================================

function initializeGame() {
    loadHighScore();
    updateDisplay();
}

// ========================================
// LOCAL STORAGE
// ========================================

function loadHighScore() {
    const savedHighScore = localStorage.getItem('clickGameHighScore');
    highScore = savedHighScore ? parseInt(savedHighScore) : 0;
}

function saveHighScore() {
    localStorage.setItem('clickGameHighScore', highScore);
}

// ========================================
// DISPLAY UPDATE
// ========================================

function updateDisplay() {
    currentScoreDisplay.innerText = currentScore;
    highScoreDisplay.innerText = highScore;
    timerDisplay.innerText = timeRemaining;
}

function updateStatus(message) {
    statusMessage.innerText = message;
}

// ========================================
// GAME LOGIC
// ========================================

function startGame() {
    // Reset state
    currentScore = 0;
    timeRemaining = 10;
    isGameActive = true;

    clickButton.disabled = false;
    startButton.disabled = true;

    // Reset visuals
    currentScoreDisplay.style.color = "black";
    clickButton.style.transform = 'scale(1)';

    updateDisplay();

    // ✅ Show "Click Me!" for 1 second
    statusMessage.innerText = "Click Me!";
    setTimeout(() => {
        updateStatus('Game in progress... Click fast!');
    }, 1000);

    // Timer countdown
    gameTimerId = setInterval(() => {
        timeRemaining--;
        updateDisplay();

        if (timeRemaining <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    // Stop timer
    clearInterval(gameTimerId);
    gameTimerId = null;
    isGameActive = false;

    // Disable buttons
    clickButton.disabled = true;
    startButton.disabled = false;
    clickButton.style.transform = 'scale(1)';
    startButton.textContent = "Play Again" ;

    // Calculate Clicks Per Second (CPS)
    const cps = (currentScore / 10).toFixed(1); // 1 decimal place

    // Check for new high score
    if (currentScore > highScore) {
        highScore = currentScore;
        saveHighScore();
        updateStatus(`🎉 New High Score: ${currentScore}! Amazing!`);
    } else {
        updateStatus(`Game Over! Your score: ${currentScore}`);
    }

    // ✅ Show CPS message
    const cpsMessage = `You clicked ${cps} times per second!`;
    clickPerSecond.textContent = cpsMessage;

    // Update display
    updateDisplay();
}


function handleClick() {
    if (isGameActive) {
        currentScore++;
        updateDisplay();

        // Button animation
        clickButton.style.transform = 'scale(1.1)';
        setTimeout(() => (clickButton.style.transform = 'scale(1)'), 100);

        // Score turns red if > 20
        if (currentScore > 20) {
            currentScoreDisplay.style.color = "red";
        }
    }
}

function resetHighScore() {
    const confirmed = confirm('Are you sure you want to reset your high score?');
    if (confirmed) {
        localStorage.removeItem('clickGameHighScore');
        highScore = 0;
        updateDisplay();
        updateStatus('High score has been reset!');
    }
}

// ========================================
// EVENT LISTENERS
// ========================================

clickButton.addEventListener('click', handleClick);
startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetHighScore);

// ========================================
// INITIALIZE
// ========================================

initializeGame();
