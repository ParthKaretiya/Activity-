let a = 12345345;
let count = 0;
let arr = [];
while(a!= 0){
    let temp = a%10;
    arr.push(temp);
    a = Math.floor(a/10);
}
console.log(arr);
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==1){
        count++
    }
}

console.log(count)
