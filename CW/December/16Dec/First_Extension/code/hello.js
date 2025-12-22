let btn = document.querySelector('.btn01 button');
let txt = document.querySelector('.para p');
let stop = document.querySelector('.btn02 button');
let intervalId = null;

btn.addEventListener("click", () => {

    if (intervalId !== null) return;

    intervalId = setInterval(() => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        txt.style.color = `rgb(${r}, ${g}, ${b})`;
    }, 400);
});

stop.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    txt.style.color = "black";
});
