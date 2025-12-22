// let arr = [10,20,30,40];
// arr.forEach((data,index) => {
//     console.log(index+ "  this  " + data)
// });

// let result = arr.map((data)=>data*2);
// console.log(arr)
// console.log(result);

// let result1 = arr.map((data)=>data/2);
// console.log(arr)
// console.log(result1);


// var arr2 = [
//     { user: "aniket", age: 30 },
//     { user: "mohil", age: 27 },
//     { user: "saurabh", age: 11 }
// ];

// var b = arr2.filter((data) => data.age > 18)  .map(data => data.user);

// console.log(arr2);
// console.log(b);

// let result = arr.reduce((curr,next)=>curr+next,0);
// console.log(result);


// for (var x of arr){
//     console.log(x)
// }

// for (var x in arr){
//     console.log(x)
// }



var obj1 = {
    user : "Parth",
    age : "18",
    num : "67489",
};


// for (var key in obj1){
//     // console.log(key);
//     // console.log(typeof(key));
//     console.log(key + "-> " + obj1[key])
// }

// var key1 = []
// for(var key in obj1){
//     key1.push(key)
    
// }
// console.log(key1.length)


// console.log(Object.keys(obj1))

// var key1 = Object.keys(obj1)
// for (var key of key1){
//     console.log(key ,"--",obj1[key])
// }

console.log(Object.values(obj1));
