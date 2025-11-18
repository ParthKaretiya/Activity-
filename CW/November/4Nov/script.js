const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');

// Select all 6 color box divs
const colorBoxes = document.querySelectorAll('.color-box'); 
const newRoundBtn = document.querySelector('#newRoundBtn');

const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const resetStreakBtn = document.querySelector('#resetStreakBtn');


// varaiables...
var currentStreak = 0;
var bestStreak = 0;
var pickCorrectColor = ''; // Changed to empty string to store the RGB string
var colors = []; // Renamed 'color' to 'colors' for clarity
var num = 6; // Default to Hard mode (6 colors)

// ===============================================
// CORE GAME LOGIC
// ===============================================

// 1. Corrected function to generate a single valid RGB color string
function colorGenerate() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    // CRITICAL FIX: Must return the string in the 'rgb(r, g, b)' format
    return rgb(`${red}, ${green}, ${blue}`); 
}

// 2. Generates an array of RGB color strings
function generateColors(count) {
    const arr = [];
    for(var i = 0; i < count; i++){
        arr.push(colorGenerate());
    }
    return arr;
}

// 3. Selects one of the generated colors as the correct answer
function pickGenerator(){
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

// 4. Sets up the game board for a new round
function setGame() { 
    // 4.1 Generate colors and pick the correct one
    colors = generateColors(num);
    pickCorrectColor = pickGenerator();
    
    // 4.2 Update the header display
    colorDisplay.textContent = pickCorrectColor.toUpperCase();
    messageDisplay.textContent = "Pick a Color !!";
    
    // 4.3 Set colors on the box divs and control visibility
    for(let i = 0; i < colorBoxes.length; i++) {
        if (i < num) {
            // Apply color to visible boxes
            colorBoxes[i].style.backgroundColor = colors[i];
            colorBoxes[i].style.display = 'block'; // Ensure it's visible
            colorBoxes[i].classList.remove('fade'); // Remove fade class
        } else {
            // Hide boxes not needed for the current mode
            colorBoxes[i].style.display = 'none'; 
        }
    }
}

// 5. Handles the user's guess
function winGuess(event) {
    // Get the computed background color of the clicked box
    // Note: event.target.style.backgroundColor can sometimes be inconsistent 
    // without normalizing the string, but we'll stick to your logic for now.
    var clickedColor = event.target.style.backgroundColor; 

    if (pickCorrectColor === clickedColor) {
        // WINNING LOGIC
        messageDisplay.textContent = "You Won!";
        
        // Change all visible boxes to the winning color
        colorBoxes.forEach((box) => {
            if (box.style.display !== 'none') {
                box.style.backgroundColor = pickCorrectColor;
                box.classList.remove('fade'); // Make sure no boxes are faded
            }
        });

        // Update streak
        currentStreak++;
        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            localStorage.setItem('highBestStreak', bestStreak);
        }
        displayContent();
        
        // Change New Round button text for feedback
        newRoundBtn.textContent = 'Play Again?';
    } else {
        // LOSING LOGIC
        messageDisplay.textContent = "Try Again";
        // Fade out the wrong box
        event.target.classList.add('fade');
        
        // Reset current streak
        currentStreak = 0;
        displayContent();
    }
}


// ===============================================
// BUTTON ACTIVATION FUNCTIONS
// ===============================================

// New Round Button
function startNewRound() {
    newRoundBtn.textContent = 'New Round'; // Reset button text
    setGame(); // Call setGame to re-initiate the round
}

// Easy Mode Button (3 colors)
function setEasyMode() {
    if (num !== 3) {
        num = 3; // Set color count to 3
        easyBtn.classList.add('selected');
        hardBtn.classList.remove('selected');
        currentStreak = 0; // Reset streak on mode change
        displayContent();
        startNewRound();
    }
}

// Hard Mode Button (6 colors)
function setHardMode() {
    if (num !== 6) {
        num = 6; // Set color count to 6
        hardBtn.classList.add('selected');
        easyBtn.classList.remove('selected');
        currentStreak = 0; // Reset streak on mode change
        displayContent();
        startNewRound();
    }
}

// Reset Streak Button
function resetStreaks() {
    if (confirm("Are you sure you want to reset your Best Streak?")) {
        currentStreak = 0;
        bestStreak = 0;
        localStorage.setItem('highBestStreak', 0); // Clear from local storage
        displayContent();
        messageDisplay.textContent = "Streaks Reset!";
    }
}


// ===============================================
// INITIALIZATION AND EVENT LISTENERS
// ===============================================

function displayContent() {
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;
}

function onload() {
    var temp = localStorage.getItem('highBestStreak');
    if (temp != null) {
        bestStreak = parseInt(temp);
    }
    // No 'else' needed as 'bestStreak' is initialized to 0
}


// Attach click listeners to the 6 color box divs
colorBoxes.forEach((box) => {
    box.addEventListener('click', winGuess); 
});

// Attach click listeners to the 4 control buttons
newRoundBtn.addEventListener('click', startNewRound);
easyBtn.addEventListener('click', setEasyMode);
hardBtn.addEventListener('click', setHardMode);
resetStreakBtn.addEventListener('click', resetStreaks);


// Start the game when the script loads
onload();
webLoad(); // Calls onload, colorGenerate, setGame, displayContent

// You can remove this function as its contents are integrated into onload and setGame
// function webLoad() {
//     onload();
//     // colorGenerate() is now called inside generateColors()
//     setGame(); 
//     displayContent();
// }