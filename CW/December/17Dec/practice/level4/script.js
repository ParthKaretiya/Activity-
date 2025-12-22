const input = document.querySelector('#taskInput');
const btn = document.querySelector('#btnAdd');
const list = document.querySelector('#taskList'); // You named this 'list'

btn.addEventListener("click", () => {
    
    // 1. Get value from the INPUT (not the list)
    let name = input.value; 

    // Safety Check: Don't add empty tasks
    
        // 2. Create the new <li>
        const newItem = document.createElement('li');
        newItem.textContent = name;

        // 3. The Magic Command: Append (Add to bottom)
        list.appendChild(newItem);

        // Optional: Clear the input box so it's ready for next task
        input.value = "";
    
});