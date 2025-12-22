const heading = document.querySelector('#greeting')
const input = document.querySelector('#nameInput')
const btn = document.querySelector('#btnSave')
const btn1 = document.querySelector('#btnClear');


const savedName = localStorage.getItem('myUserName');

if (savedName) {

    heading.textContent = "Welcome back, " + savedName;
}

btn.addEventListener("click", () => {
    let name = input.value;
    localStorage.setItem('myUserName', name);
    heading.textContent = "Welcome back, " + name;
});

btn1.addEventListener("click", () => {
    localStorage.removeItem('myUserName');
    heading.textContent = "Hello, Stranger!";
    input.value = "";

})






