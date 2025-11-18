 let heading = document.querySelector('h1') ;
heading.textContent = "Good Afternoon parth " ;

let container = document.querySelector('.container') ;
container.textContent = "TMKBFJG"
container.style.border = "2px solid red"


let main = document.querySelector('.main') ;
main.textContent = "TMKBjG"
main.style.backgroundColor = "grey"
main.style.color = "orange"
main.style.height = "50px"
main.style.borderRadius= "50px"


let mm = document.querySelector('.mm') ;
mm.style.display= "flex"
mm.style.justifiyContent = "center"
mm.style.padding = "20px"
mm.style.margin = "20px"

 function add(){ 
    var a = prompt("enter aa number");
    var b = prompt("enter second number");
    console.log(a + b);
}
setInterval(add, 10000);