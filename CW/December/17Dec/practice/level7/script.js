// 1. SELECT ELEMENTS
const themeBtn = document.querySelector('#themeBtn');
const body = document.body; // Shortcut: document.body always selects <body>

// 2. ADD LISTENER
themeBtn.addEventListener("click", () => {
    
    // A. The Magic Switch (Toggle the class)
    body.classList.toggle('dark-mode');

    // B. BONUS: Change Button Text
    // We check: Does the body HAVE the class right now?
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = "Switch to Light";
    } else {
        themeBtn.textContent = "Switch to Dark";
    }
});