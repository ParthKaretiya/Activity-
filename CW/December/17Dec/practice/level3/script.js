const input = document.querySelector('#nameInput');
const btn = document.querySelector('#btnSubmit');
const para = document.querySelector('#output')

btn.addEventListener("click",()=>{
    let name = input.value;
    para.textContent = "Hello ," + name + "!!"
})