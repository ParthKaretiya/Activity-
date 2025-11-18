// // function New (i){
// //     console.log (i);
// // };
// // New("my name is parth karetiya");

// function sum (x ,y){
//     console.log(x+y);
// }

// sum(3,7);

// // Arrow Function 

// let arrowSum = (a , b) => {

//     console.log( a+b);
// }
// arrowSum(5,7);


// let arroeMul = (x,y)=>{
//     console.log(x*y);
// }

// arroeMul(4,5);

// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" | char === "e" | char == "i" | char === "o" | char === "u") {
//             count++;
//         }

//     }
//     console.log(count);
// }

// countVowels("Parth Karetiya");




// same thing using arrow finction 


// let countVowels = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" | char === "e" | char == "i" | char === "o" | char === "u") {
//             count++;
//         }

//     }
//     console.log(count);
// }

// countVowels("Parth Karetiya");

// arr.foreach 
// Call Back function


// let arr = [1, 3, 5, 7, 9, 4, 5, 6,];
// arr.forEach(function val(x){
//     console.log(x);
// });

// let arr = [1,3,5,7,9,4,5,6,];
// arr.forEach((x)=>{
//     console.log(x);
// })

// same things for strings 

// let arr = ["steve" , "nancy", "ahemdabad" , "mike"];
// arr.forEach((x)=>{
//     console.log(x);
//     console.log(x.toLocaleUpperCase());
// });


// let arr2 = ["steve" , "nancy", "ahemdabad" , "mike"];
// arr.forEach((x)=>{
//     console.log(x.toLocaleUpperCase());
// })

// que = to print squares of every number using for each 

// let num = [1,2,3,4,5]
// num.forEach((num)=>{
//     console.log(num*num);
// });

// let newBtn = document.createElement("button");
// newBtn.textContent = "click Me"

// Object.assign(newBtn.style,{
//     backgroundColor : "red" ,
//     color : "white"
// }

// );

// let body = document.querySelector("body")

// body.append(newBtn);
let para = document.querySelector("p"); // selects the <p> element

// Option 1 — directly set a class
para.setAttribute("class", "content");
