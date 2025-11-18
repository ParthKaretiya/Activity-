var currentScore = document.querySelector('#currentScore');
var highScore = document.querySelector('#highScore');
var timer = document.querySelector('#timer');
var clickButton = document.querySelector('#clickButton');
var startButton = document.querySelector('#startButton');
var statusMessage = document.querySelector('#statusMessage');
var resetButton = document.querySelector('#resetButton'); // ✅ correct name

// Extra variable required -> total: 5
var current = 0;
var high = 0;
var timer1 = 10;
var flag = false;
var timeId = null;

function onWebsite() {
    loadData();
    displayContent();
}

function loadData() {
    var temp = localStorage.getItem('highScore');
    if (temp != null) {
        high = parseInt(temp);
    } else {
        high = 0;
    }
}

function displayContent() {
    currentScore.textContent = current;
    highScore.textContent = high;
    timer.textContent = timer1;
}

function statusMsg(msg) {
    statusMessage.textContent = msg;
}

function endGame() {
    clearInterval(timeId);
    flag = false;
    clickButton.disabled = true;
    startButton.disabled = false;
    if (current > high) {
        localStorage.setItem('highScore', current);
        high = current;
        statusMsg(`🎉 New High Score: ${current}!`);
    } else {
        statusMsg(`Game Over! Your current score is ${current}`);
    }

    displayContent();
}

function startGame() {
    clickButton.disabled = false;
    startButton.disabled = true;
    flag = true;
    current = 0;
    timer1 = 10;

    statusMsg("The game has started! Click fast!");

    timeId = setInterval(function () {
        timer1--;
        displayContent();

        if (timer1 <= 0) {
            endGame();
        }
    }, 1000);
}

// ✅ FIXED reset button function
function resetHighScore() {
    const confirmReset = confirm("Are you sure you want to reset your high score?");
    if (confirmReset) {
        localStorage.removeItem('highScore');
        high = 0;
        displayContent();
        statusMsg("High score has been reset!");
    }
}

function userClick() {
    if (flag) {
        current++;
        displayContent();
    }
}

onWebsite();

startButton.addEventListener('click', startGame);
clickButton.addEventListener('click', userClick);
resetButton.addEventListener('click', resetHighScore); // ✅ correct event listener
