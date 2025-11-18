let heading = document.querySelector('h1');
heading.style.cursor = "pointer";
heading.style.transition = "all 0.3s ease"; // smooth animation

heading.addEventListener('click', function() {
    if (heading.textContent === "Hello Good Afternoon") {
        heading.textContent = "Good Evening Bro";
        heading.style.backgroundColor = "red";
        heading.style.color = "white";
    } else {
        heading.textContent = "Hello Good Afternoon";
        heading.style.backgroundColor = "blue";
        heading.style.color = "white";
    }
});


