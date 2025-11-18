// let image = document.getElementById("image");
// image.addEventListener("mouseover", function () {
//     image.style.border = "25px solid red";
// });
// image.addEventListener("mouseout", function () {
//     image.style.border = "none";

   
// });




// let image2 = document.getElementById("image2");
// image2.addEventListener("mousemove", function () {
//     image2.style.border = "25px solid blue";
//     image2.style.boxShadow = "2px 2px 10px grey"; // Correct way to add box-shadow
// });

// image2.addEventListener("mouseleave", function () {
//     image2.style.border = "none";
//     image2.style.boxShadow = "none";
// });

let messages = document.getElementById("messages");
let textbox = document.getElementById("textbox");
let button = document.getElementById("button");

button.addEventListener("click",function(){
    let newMassage = document.createElement("li");
    newMassage.innerHTML = textbox.value ;
    messages.appendChild(newMassage);
    textbox.value = "" ;
});