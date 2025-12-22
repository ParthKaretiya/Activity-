// 45.
// let str = "Year 2025";
// let count = 0;

// for(let i=0;i<str.length;i++){
//     if(str[i]<="9" && str[i]>="0"){
//         count++;
//     }

// }
// console.log(count);



// 46.
// let str = "YeaR 2025";
// let count = 0;

// for(let i=0;i<str.length;i++){
//     if(str[i]<="Z" && str[i]>="A"){
//         count++;
//     }

// }
// console.log(count);



// 47.
// let str = "YeaR 2025";
// let count = 0;

// for(let i=0;i<str.length;i++){
//     if(str[i]<="z" && str[i]>="a"){
//         count++;
//     }

// }
// console.log(count);



// 48.

// let str = "Hello baba";
// let newStr = "";

// for (let i = 0; i < str.length; i++) {
//     if (
//         str[i] != "A" && str[i] != "E" && str[i] != "I" && str[i] != "O" && str[i] != "U" &&
//         str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u"
//     ) {
//         newStr = newStr + str[i];
//     }
// }

// console.log(newStr);



// 49.
// let str = "Hello 1234baba";
// let newStr = "";

// for (let i = 0; i < str.length; i++) {
//     if (
//         str[i] != "0" && str[i] != "1" && str[i] != "2" && str[i] != "3" &&
//         str[i] != "4" && str[i] != "5" && str[i] != "6" && str[i] != "7" &&
//         str[i] != "8" && str[i] != "9"
//     ) {
//         newStr = newStr + str[i];
//     }
// }



// 50.
// let str = "HeLLo";
// let newStr = "";

// for (let i = 0; i < str.length; i++) {
//     let ch = str[i];

//     if (ch >= "a" && ch <= "z") {

//         newStr += ch.toUpperCase();
//     }
//     else if (ch >= "A" && ch <= "Z") {

//         newStr += ch.toLowerCase();
//     }
//     else {

//         newStr += ch;
//     }
// }

// console.log(newStr);









// 51.
// let arr = [1,2,3];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }




// 52.
// let arr = [1,2,3,4];
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum = sum + arr[i];
// }
// console.log(sum);





// 53.
// let arr = [1,23,4,53,5,6,4,63,2];
// let max= 0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// console.log(max);

// Second method 
// let arr = [1, 23, 4, 53, 5, 6, 4, 63, 2];
// let max = Math.max(...arr);
// console.log(max);





// 54.
// let arr = [-3,1,23,4,53,5,6,4,63,2];
// let min= 0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<min){
//         min = arr[i];
//     }
// }
// console.log(min);





// second method

// let arr = [-3,1,23,4,53,5,6,4,63,2];
// let min = Math.min(...arr);
// console.log(min);




// 55.
// let arr =[1,2,3,4,5,6,7,89,0,8,6,7,76,7,8,86,6]
// let count = 0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         count++
//     }
// }
// console.log(count);




// 56.
// let arr =[1,2,3,4,5,6,7,89,0,8,6,7,76,7,8,86,6]
// let count = 0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2!=0){
//         count++
//     }
// }
// console.log(count);




// 57.
// let arr = [-1,-2,-3,4,5,6,-7,8]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>=0){
//         console.log(arr[i])
//     }
// }



// 58.
// let arr = [-1,-2,-3,4,5,6,-7,8]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<0){
//         console.log(arr[i])
//     }
// }




// 59.
// let arr = [-1,-2,-3,4,5,6,-7,8,45,23,5,32,55,5,322,4,32,4,23]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>10){
//         console.log(arr[i])
//     }
// }



// 60.
// let arr =[1,2,3,4,5,6,7,89,0,8,6,7,76,7,8,86,6]
// let sum = 0;
// let avg ;

// for(let i=0;i<arr.length;i++){
//     sum = sum+arr[i];
// }
// avg = sum / arr.length

// console.log("average is ",avg)




// 61.
// let arr =[1,2,3,4,5,6,7]
// let sum;
// for(let i=0;i<arr.length;i++){
//     sum = arr[i]*2;
//     console.log(sum)
// }




// 62.
// let arr =[1,2,3,4,5,6,7]
// let sum;
// for(let i=0;i<arr.length;i++){
//     sum = arr[i]*arr[i];
//     console.log(sum)
// }





// 63.
// let arr = [1, 2, 3];
// let newArr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
// }

// console.log(newArr); 




// 64.
// let arr = [1, 2, 3];
// let newArr = [];

// for (let i = 0; i<arr.length; i++) {
//     newArr.push(arr[i]);
// }

// console.log(newArr); 



// 65.
// let arr = [1,2,3,4,5,6];
// let value = 2;
// for(let i=0; i<arr.length ; i++){
//     if(arr[i]==value){
//         console.log("True")
//     }
// }
// if(arr.includes(value)){
//     console.log("True")
// }




// 66.
// let arr = [10, 20, 30];
// let value = 20;

// let index = -1;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//         index = i;
//         break;   
//     }
// }

// console.log(index);


// 67.
// let arr = [1, 2, 2, 3, 2];
// let value = 2;

// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//         count++;
//     }
// }

// console.log(count);

// let obj = {};
// for(let i=0;i<arr.length;i++){
//     if(obj[arr[i]]==undefined){
//         obj[arr[i]]= 1;
//     }
//     else{
//         obj[arr[i]]++
//     }
// }
// console.log(obj)




// 68.
// let arr = [1, 2, 2, 3,9,6];
// let isSorted = true;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//         isSorted = false;
//         break;
//     }
// }

// console.log(isSorted);




// 69.
// let arr = [456,67,90,9,10, 5, 8, 20];

// let largest = -10000000000;
// let second = -10000000000;

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] > largest) {

//         second = largest;
//         largest = arr[i];
//     }
//     else if (arr[i] > second && arr[i] != largest) {
//         second = arr[i];
//     }
// }

// console.log(second);



// 70.
// let arr = [456,67,90,9,10, 5, 8, 20];

// let largest = 10000000000;
// let second = 10000000000;

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] < largest) {

//         second = largest;
//         largest = arr[i];
//     }
//     else if (arr[i] < second && arr[i] != largest) {
//         second = arr[i];
//     }
// }

// console.log(second);





// 71.
// let arr = [1,2,3,4,5,6,7,8,9];
// let odd = [];
// for (let i=0;i<arr.length;i++){
//     if(arr[i]%2==1){
//        odd.push(arr[i])
//     }
// }
// console.log("Odd Numbers :",odd)

// let odd = arr.filter(num => num%2==1)
// console.log(odd)32



// 72.
let arr = [1, 2, 2, 3, 3, 3];

let obj = {};
let unique = [];

for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {       
        obj[arr[i]] = true;   
        unique.push(arr[i]);  
    }
}

console.log(unique);



// 73.
// let a = [1,2]
// let b = [3,4]
// let c = []
// for(let i=0;i<a.length;i++){
//     c.push(a[i]);
// }
// console.log(c)
// for(let j=0;j<b.length;j++){
//     c.push(b[j])
// }
// console.log(c)



