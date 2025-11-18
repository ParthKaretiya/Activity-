let messages = document.getElementById("messages");
let textbox = document.getElementById("textbox");
let button = document.getElementById("button");

button.addEventListener("click",function(){
    let newMassage = document.createElement("li");
    newMassage.innerHTML = textbox.value ;
    messages.appendChild(newMassage);
    
    // this will take value from textbox and put it into list of massages

    textbox.value = "" ;
});