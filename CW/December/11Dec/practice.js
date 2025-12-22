// let arr = [1, 2, 3, 4, 5, 3]
// arr.forEach(value => {
//     console.log("value is :",value);
// })

// let result = arr.map(data => data*2);
// console.log(result)

// var arr1 = [
//     {name :"Parth", age:18},
//     {name :"bhavya", age:14},
//     {name :"harshit", age:20},
// ]

// let adult = arr1.filter(data => data.age>17);
// console.log(adult)

// var arr2 =[12,23,4,5,645,67,43,67,7,54,78,90]
// let x = arr2.filter(y=>y>50)
// console.log(x);


// let sum = arr2.reduce((a,b)=>a+b,0);
// console.log(sum)


// let car = {
//     name: "BMW",
//     color: "Blue",
//     speed: 220,
//     isAutomatic: true
// };

// for (let key in car) {
//     console.log(key + " → " + car[key]);
// }
// console.log(Object.keys(car));
// console.log(Object.entries(car));



class student {
    constructor(name,age,grade){
        this.name = name;
        this.age=age;
        this.grade=grade;
    }


}
let s1 = new student("Parth",18,"A");
let s2 = new student("rachit",18,"A");
let s3 = new student("mohit",18,"A");
let s4 = new student("rohan",18,"A");

console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)