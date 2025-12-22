74.
let  a = [1,2,2,3,4,5]
let b =[2,3,7,8]
let c =[]
for(let i=0;i<a.length;i++){
    for(let j=0;j<b.length;j++){


    if(a[i] == b[j]){
        c.push(a[i])
    }
} 
    }
console.log(c)