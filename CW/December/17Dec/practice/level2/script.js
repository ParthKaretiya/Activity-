const counter = document.querySelector('#counterDisplay')
const down = document.querySelector('#btnDown')
const up = document.querySelector('#btnUp')
const reset = document.querySelector('#btnReset');

let count = 0;

// Disable down initially
down.disabled = true;

up.addEventListener("click", () => {
    count++;
    counter.textContent = count;
    if(count > 0){
down.disabled = false;
    } 
    if(count>10) {
        counter.style.color = "green"
    }
    else{
        counter.style.color = "black"
    }
})

down.addEventListener("click", () => {
    count--;
    counter.textContent = count;
    if(count <= 0) down.disabled = true;
     if(count>10) {
        counter.style.color = "green"
    }
    else{
        counter.style.color = "black"
    }
})

reset.addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
    down.disabled = true; 
})
