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
// let str = "hello"; 
// let freq = {}; 

// for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (freq[char]) {
//         freq[char] += 1;
//     } else {
//         freq[char] = 1;
//     }
// }

// console.log(freq); 


// 94.

// let arr = [{name: "A", marks: 50}, 
//              {name: "B", marks: 80},
//              {name: "C", marks: 70}]

//              let maxMarks =0;

// for (let i=0; i<arr.length;i++){
//     if(arr[i].marks>max){
//         maxMarks = arr[i].marks
//     }
// }
// console.log(maxMarks)



// for(let max of arr){
//     if(max.marks>maxMarks){
//         maxMarks = max.marks
//     }
// }
// console.log(maxMarks)




// 95.
// let obj = { apple: 50, banana: 20, mango: 30 };
// let sum = 0;

// for (let price in obj) {
//     sum = sum + obj[price]
// }

// console.log(sum); 




// 96.
// let obj = {math: 80, science: 90, english: 70}
// let sum = 0;
// let avg ;
// let count = 0;
// for(let marks in obj){
//     sum = sum + obj[marks]
//     count ++
// }
// avg = sum/count
// console.log(avg)



// 97.
// let obj = {a: 1, b: 2, c: 3}
// let n = []
// for(let char in obj){
//     n.push(char)
// }
// console.log(n)



// 98.

// let obj = {a: 1, b: 2, c: 3}
// let n = []
// for(let char in obj){
//     n.push(obj[char])
// }
// console.log(n)



// 99.
// let obj = {a: 1, b: 2, c: 3}
// let n = 0
// for(let char in obj){
//     n++
// }
// console.log(n)



// 100.
// let arr = [
//   { name: "A", age: 17 },
//   { name: "B", age: 20 },
//   { name: "C", age: 18 }
// ];

// for (let maxAge of arr) {
//   if (maxAge.age > 18) {
//     console.log(maxAge);
//   }
// }


// --------- FUNVTIONS ----------

// 101.
// function squar(x) {
//   let sum = x * x;
//   console.log(sum);
// }

// squar(5); 
// squar(112); 



// 102.
// function sum (a,b){
//     let c = a+b;
//     console.log(c)
// }
// sum(2,3)


// 103.
// function n(x) {
//   console.log("Hello", x);
// }

// n("parth"); 



// 104.

// function isEven(n) {
//   if (n % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEven(4)); // true
// console.log(isEven(7)); // false
// console.log(isEven(0)); // true




// 105.
// function isOdd(n) {
//   return n % 2 !== 0;
// }
// console.log(isOdd(5));   // true
// console.log(isOdd(8));   // false
// console.log(isOdd(0));   // false
// console.log(isOdd(-3));  // true


// 106.
// function isBetween1And100(n) {
//   if (n >= 1 && n <= 100) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isBetween1And100(50));  // true
// console.log(isBetween1And100(1));   // true
// console.log(isBetween1And100(150)); // false



// 107.
// function isFirstGreater(a, b) {
//   if (a > b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isFirstGreater(10, 5)); // true
// console.log(isFirstGreater(3, 9));  // false
// console.log(isFirstGreater(7, 7));  // false



// 108.
// function check(s) {
//   return s.length > 5;
// }

// console.log(check("hello"));
// console.log(check("javascript"));
// console.log(check(""));


// 109.
// function first(s) {
//   return s[0];
// }

// console.log(first("hello"));
// console.log(first("A"));
// console.log(first("js"));



// 110.
// function last(s) {
//   return s[s.length - 1];
// }

// console.log(last("hello"));
// console.log(last("A"));
// console.log(last("js"));



// 111.
// function longer(a, b) {
//   return a.length >= b.length ? a : b;
// }

// console.log(longer("hi", "hello"));
// console.log(longer("javascript", "js"));
// console.log(longer("abc", "xyz"));



// 112.
// function avg(a, b, c) {
//   return (a + b + c) / 3;
// }

// console.log(avg(3, 6, 9));
// console.log(avg(0, 0, 0));
// console.log(avg(10, 20, 25));




// Q113
// function sign(n) {
//   return n > 0 ? "positive" : n < 0 ? "negative" : "zero";
// }
// console.log(sign(5));
// console.log(sign(-3));
// console.log(sign(0));



// Q114
// function canVote(age) {
//   return age >= 18;
// }
// console.log(canVote(17));
// console.log(canVote(18));
// console.log(canVote(25));



// Q115
// function hoursToMinutes(hours) {
//   return hours * 60;
// }
// console.log(hoursToMinutes(1));
// console.log(hoursToMinutes(2.5));
// console.log(hoursToMinutes(0));




// Q116
// function minutesToSeconds(minutes) {
//   return minutes * 60;
// }
// console.log(minutesToSeconds(1));
// console.log(minutesToSeconds(5));
// console.log(minutesToSeconds(0));



// Q117 Celsius to Fahrenheit
// function cToF(c) {
//   return (c * 9/5) + 32;
// }
// console.log(cToF(0));
// console.log(cToF(25));
// console.log(cToF(100));





// Q118 Fahrenheit to Celsius
// function fToC(f) {
//   return (f - 32) * 5/9;
// }
// console.log(fToC(32));
// console.log(fToC(212));
// console.log(fToC(98.6));




// Q119 Area of a Triangle
// function triangleArea(base, height) {
//   return 0.5 * base * height;
// }
// console.log(triangleArea(10, 5));
// console.log(triangleArea(3, 4));
// console.log(triangleArea(0, 10));





// Q120 Area of a Circle
// function circleArea(r) {
//   return Math.PI * r * r;
// }
// console.log(circleArea(1));
// console.log(circleArea(3));
// console.log(circleArea(0));



// 121.

// function isMultipleOf10(n) {
//   return n % 10 === 0;
// }

// console.log(isMultipleOf10(20));
// console.log(isMultipleOf10(15));
// console.log(isMultipleOf10(0));



// Q122 Minimum of Two Numbers
// function min2(a, b) {
//   return a < b ? a : b;
// }
// console.log(min2(5, 9));
// console.log(min2(-3, 4));
// console.log(min2(7, 7));




// Q123 Minimum of Three Numbers
// function min3(a, b, c) {
//   return Math.min(a, b, c);
// }
// console.log(min3(3, 7, 5));
// console.log(min3(-1, -5, -3));
// console.log(min3(10, 10, 5));




// Q124 Print from n down to 1
// function printDown(n) {
//   for (let i = n; i >= 1; i--) {
//     process.stdout.write(i + " ");
//   }
//   console.log();
// }
// printDown(5);
// printDown(1);
// printDown(3);





// Q125 Sum of all even numbers from 1 to n
// function sumEven(n) {
//   let sum = 0;
//   for (let i = 2; i <= n; i += 2) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumEven(6));
// console.log(sumEven(5));
// console.log(sumEven(1));



// 126.
// function sumOdd(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i += 2) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumOdd(5));
// console.log(sumOdd(6));
// console.log(sumOdd(1));




// 127.
// function countDiv2or3(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0 || i % 3 === 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDiv2or3(6));
// console.log(countDiv2or3(10));
// console.log(countDiv2or3(1));



// 128.
// function c(n) {
//   return Math.floor(n / 10);
// }

// console.log(c(20));
// console.log(c(9));
// console.log(c(10));




// 129.
// function perfect(n) {
//   let sum = 0;
//   for (let i = 1; i < n; i++) {
//     if (n % i === 0) sum += i;
//   }
//   return sum === n;
// }

// console.log(perfect(6));
// console.log(perfect(28));
// console.log(perfect(10));







