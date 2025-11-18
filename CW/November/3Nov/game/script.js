// DOM Elements
const currentScoreDisplay = document.querySelector('#currentScore');
const highScoreDisplay = document.querySelector('#highScore');
const timerDisplay = document.querySelector('#timer');
const clickButton = document.querySelector('#clickButton');
const startButton = document.querySelector('#startButton');
const resetButton = document.querySelector('#resetButton');
const statusMessage = document.querySelector('#statusMessage');
const endVideo = document.querySelector('#endVideo');

// Game variables
let clickCount = 0;
let highScore = 0;
let timeRemaining = 10;
let timer;

// Load saved high score
function loadHighScore() {
  const saved = localStorage.getItem('clickGameHighScore');
  if (saved) {
    highScore = parseInt(saved);
  } else {
    highScore = 0;
  }

  highScoreDisplay.textContent = highScore;
}
loadHighScore();

// Start Game
startButton.addEventListener("click", () => {
  clickButton.disabled = false;
  clickCount = 0;
  timeRemaining = 10;
  resetButton.disabled = true;

  currentScoreDisplay.textContent = clickCount;
  statusMessage.textContent = "Game started! Click fast!";
  timerDisplay.textContent = timeRemaining;

  // Hide and reset background video
  endVideo.pause();
  endVideo.currentTime = 0;
  endVideo.style.opacity = "0";
  endVideo.hidden = true;

  clearInterval(timer);
  timer = setInterval(() => {
    timeRemaining--;
    timerDisplay.textContent = timeRemaining;

    if (timeRemaining <= 0) {
      clearInterval(timer);
      clickButton.disabled = true;
      statusMessage.textContent = "⏰ Time up!";
      resetButton.disabled = false;

      // Show video
      endVideo.hidden = false;
      endVideo.style.opacity = "1";
      endVideo.play();
    }
  }, 1000);
});

// Click logic
clickButton.addEventListener("click", () => {
  clickCount++;
  currentScoreDisplay.textContent = clickCount;

  if (clickCount > highScore) {
    highScore = clickCount;
    highScoreDisplay.textContent = highScore;
    localStorage.setItem('clickGameHighScore', highScore);
  }
});

// Reset High Score
resetButton.addEventListener("click", () => {
  highScore = 0;
  highScoreDisplay.textContent = 0;
  localStorage.removeItem('clickGameHighScore');
});
