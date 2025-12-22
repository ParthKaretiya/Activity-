// 1. SELECT ELEMENTS
const input = document.querySelector('#taskInput');
const btn = document.querySelector('#btnAdd');
const list = document.querySelector('#taskList');

// 2. LISTEN FOR CLICKS
btn.addEventListener("click", () => {
    
    // Get text from input
    let name = input.value; 

    // Only run if the box is NOT empty
    if (name !== "") {
        
        // A. CREATE ELEMENTS
        const newItem = document.createElement('li');
        const deleteBtn = document.createElement('button');
        
        // B. SETUP CONTENT (The Order Matters!)
        // First, set the text for the item
        newItem.textContent = name;
        
        // Second, set up the button
        deleteBtn.textContent = 'X';
        deleteBtn.className = 'delete-btn'; // Applies the Red CSS style

        // C. ADD DELETE LOGIC (Closure)
        deleteBtn.addEventListener("click", () => {
            newItem.remove(); // Removes this specific LI from the DOM
        });

        // D. ATTACH (The Puzzle Pieces)
        newItem.appendChild(deleteBtn); // Stick button INSIDE the item
        list.appendChild(newItem);      // Stick item INSIDE the list

        // E. CLEANUP
        input.value = ""; // Clear the box
        input.focus();    // Put cursor back in box for next task
    }
});