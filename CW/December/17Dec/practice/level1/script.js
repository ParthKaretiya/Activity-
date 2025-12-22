const myBox = document.getElementById('card');
const colorButton = document.getElementById('btnColor');
const textButton = document.getElementById('btnText');
const hideButton = document.getElementById('btnHide');

let color = "red";

colorButton.addEventListener("click", () => {
    if(color == "red"){
         myBox.style.backgroundColor = "grey";
         color = "Grey"
    }
   else{
    myBox.style.backgroundColor = "red";
    color = "red";
   }

});

let text = "old"
textButton.addEventListener("click",()=>{
    if(text == "old"){
         myBox.textContent = "Text Changed"
         myBox.style.borderRadius = "50%"
         text = "new"
    }
    else{
          myBox.textContent = "I am Box"
         myBox.style.borderRadius = "0%"
         text = "old"
    }
})
let box = "show"

hideButton.addEventListener("click",()=>{
    if(box == "show"){
         myBox.style.display = "none"
         box = "hide";
    }
    else{
         myBox.style.display = "flex"
         box = "show";
    }
   
})