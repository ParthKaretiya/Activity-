const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const ageInput = document.getElementById("ageInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");

submitBtn.addEventListener("click", () => {
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const ageValue = ageInput.value;


    if (nameValue === "") {
        nameInput.style.backgroundColor = "red";
        message.textContent = "Please enter all the information!";
        message.style.color = "red";
        return;
    }


    if (emailValue === "") {
        emailInput.style.backgroundColor = "red";
        message.textContent = "Please enter all the information!";
        message.style.color = "red";
        return;
    }

    if (ageValue === "") {
        ageInput.style.backgroundColor = "red";
        message.textContent = "Please enter all the information!";
        message.style.color = "red";
        return;
    }


    submitBtn.style.backgroundColor = "green";
    message.textContent = "Data saved successfully!";
    message.style.color = "green";
    ageInput.style.backgroundColor = "white";
    emailInput.style.backgroundColor = "white";
    nameInput.style.backgroundColor = "white";

    // Save data
    localStorage.setItem("name", nameValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("age", ageValue);

    console.log("Saved:", {
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        age: localStorage.getItem("age")
    });
});
