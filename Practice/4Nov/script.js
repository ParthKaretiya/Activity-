let button = document.querySelector("button");
let btn = document.querySelector(".btn");
let body = document.querySelector("body");

let backgroundColor = "white";

button.addEventListener("click", () => {
  if (backgroundColor === "white") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    backgroundColor = "black";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    backgroundColor = "white";
  }
});
