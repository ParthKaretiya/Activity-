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
// let arr = [1, 2,4,4,5,6, 2, 3, 3, 3];

// let obj = {};
// let unique = [];

// for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {       
//         obj[arr[i]] = true;   
//         unique.push(arr[i]);  
//     }
// }

// console.log(unique);







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


// let res = [...a,...b];
// console.log(res)



// 74.
// let  a = [1,2,2,3,3,4,5]
// let b =[2,2,3,7,8]
// let c =[]
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<b.length;j++){

//     if(a[i] == b[j] && !c.includes(a[i]) ) {
//         c.push(a[i])
//     }
// } 
//     }
// console.log(c)



// let a = [1,2,3,4,3,2,1]
// let b = [1,2,2,1,4,34,5,2,3,2];
// let c=[];

// for(let i=0;i<a.length;i++){
//     if(b.includes(a[i]) && !c.includes(a[i])){
//         c.push(a[i])
//     }
// }
// console.log(c)


// 75.
// let a = [1, 2, 3, 4];

// let last = a.pop();  
// console.log(a) 
// a.unshift(last);    

// console.log(a); 
// let res = [a[a.length-1]]

// for (let i=0; i<=a.length-2;i++){
//     res.push(a[i])
// }
// console.log(res)


// 76.
// let a = [1, 2, 3, 4];

// // let last = a.shift();  
// // console.log(a) 
// // a.push(last);    

// // console.log(a); 



// let res = []

// for (let i=1; i<=a.length-1;i++){
//     res.push(a[i])
// }
// res.push(a[a.length-4])
// console.log(res);


// let arr = [1,2,3,4,5,6,7,8,8,2,34,54,67];
// let sum = 0;
// let count = 0;

// // calculate sum
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }

// let avg = sum / arr.length;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > avg) {
//         count++;
//     }
// }

// console.log(count);


// let res = arr.reduce((val) =>{
//     if(val>avg){
//         console.log(val)

//     }
// })




// let arr = [-1,-2,-3,-4,5,4,2,4,5,3,2,2,4,1]
// console.log(Math.max(...arr))
// console.log(Math.min(...arr))

// let max = arr.reduce((a, b) => a > b ? a : b);
// console.log(max);

// let min = arr.reduce((a, b) => a < b ? a : b);
// console.log(min);


// let max = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);

// let min = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log(min);




// let arr = [1,0,0,0,0,1,1,1];

// let count1 = 0; 
// let count2 = 0; 

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//         count1++;
//     } else if (arr[i] == 1) {
//         count2++;
//     }
// }

// console.log("0 Count =", count1);
// console.log("1 Count =", count2);





// let arr = [1,2,3,4,5,6,7,8,9,0];

// let even = []; 
// let odd = []; 

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2==0) {
//         even.push(arr[i])
//     }  else{
//          odd.push(arr[i])
//     }

//     }


// console.log("Odd=", odd);
// console.log("Even =",even);



// 81.
// let n = 3;

// for (let i = 0; i < n; i++) {
//     let row = '';
//     for (let j = 0; j < n; j++) {
//         row += '* ';
//     }
//     console.log(row);
// }



// 82.
// let n = 4;

// for (let i = 0; i < n; i++) {
//     let row = '';
//     for (let j = 0; j <=i; j++) {
//         row += '* ';
//     }
//     console.log(row);
// }


// 83.
// let n = 4;


// for (let i = 0; i < n; i++) {
//     let row = '';
//     let count = 1
//     for (let j = 0; j <=i; j++) {

//         row += count++;
//     }
//     console.log(row);
// }



// 84.
// let n = 4;
//  let count = 0

// for (let i = 0; i < n; i++) {
//     let row = '';
//     count++
//     for (let j = 0; j <=i; j++) {

//         row += count;
//     }
//     console.log(row);
// }


// 85.
// let n = 4;


// for (let i = 0; i < n; i++) {
//     let row = '';

//     for (let j = 0; j <=i; j++) {

//         row =row+i+" "
//     }
//     console.log(row);
// }



// 86.

// let arr = [[1,2,3],[4,5,6]];
// let rowSums = [];

// for(let i = 0; i < arr.length; i++){
//     let sum = 0;
//     for(let j = 0; j < arr[i].length; j++){
//         sum += arr[i][j];
//     }
//     rowSums.push(sum);
// }

// console.log(rowSums);



// 87.
// let n=16;
// for(i=1;i<16;i++){
//     if(i*i == n ){
//         console.log(i)
//     }
// }


// let root =Math.floor(Math.sqrt(n))
// console.log(root)


// 88.

// let n = 153;
// let sum = 0;
// let temp = n;

// while (temp > 0) {
//     let digit = temp % 10;
//     sum = sum + digit * digit * digit;
//     temp = Math.floor(temp / 10);
// }

// console.log(sum === n);


// 89.

// let arr = ["hi", "hello", "a"];

// let result = arr.map(str => str.length);

// console.log(result); // [2, 5, 1]




// let arr = ["JS", "is", "cool"];
// let res = [];

// for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i].length);
// }

// console.log(res); // [2, 2, 4]


// let arr = ["hi", "hello", "a"];
// let res = [];

// for (let str of arr) {
//     res.push(str.length);
// }

// console.log(res); // [2, 5, 1]


// function length(str) {
//     let count = 0;
//     while (str[count] !== undefined) {
//         count++;
//     }
//     return count;
// }

// function main(arr) {
//     let res = [];
//     let i = 0;

//     // loop without using arr.length
//     while (arr[i] !== undefined) {
//         res.push(length(arr[i]));
//         i++;
//     }

//     console.log(res);
// }

// main(["Hello", "he", "the"]);


// 90.
// let arr = ["hi", "hello", "a"];

// let result = arr.map(str => str.length);
// console.log(result)
// let max = Math.max(...result);
// console.log(max);



// 91.
// let arr = [1, 2, 3, 2, 3, 4, 2, 1, 3, 4, 5, 5, 6, 7, 5];
// let res = {}; 

// for (let i = 0; i < arr.length; i++) {
//     if (res[arr[i]]) {
//         res[arr[i]] += 1;
//     } else {
//         res[arr[i]] = 1;  
//     }
// }

// console.log(res);



// 93.
let str = "hello"; 
let freq = {}; 

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (freq[char]) {
        freq[char] += 1;
    } else {
        freq[char] = 1;
    }
}

console.log(freq); 