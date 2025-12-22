// 1. SELECT ELEMENTS
const input = document.querySelector('#msgInput');
const chatLog = document.querySelector('#chatLog');

// 2. LISTEN FOR KEYBOARD ACTIVITY
// We pass the 'event' (or 'e') variable into the function to get details about the key press
input.addEventListener("keydown", (event) => {

    // 3. CHECK: Was the key pressed "Enter"?
    if (event.key === "Enter") {
        
        let message = input.value;

        // Safety Check: Don't send empty messages
        if (message !== "") {
            
            // A. Create the Bubble
            const bubble = document.createElement('div');
            bubble.classList.add('msg'); // Add the CSS class for styling
            bubble.textContent = message;

            // B. Add to Chat Log
            chatLog.appendChild(bubble);

            // C. Clear the Input
            input.value = "";
            
            // Optional: Auto-scroll to the bottom so you see new messages
            chatLog.scrollTop = chatLog.scrollHeight; 
        }
    }
});