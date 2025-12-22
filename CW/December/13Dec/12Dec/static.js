// class students {
//     constructor(name,age){
//         this.name = name;
//         this.age = age
//     }
//     hey(){
//         console.log("First Time")
//     }
//     get_name(){
//         console.log(`My Name is  ${this.name}`)
//     }
// }
// let s1 = new students("Parth" , "18")
// let s2 = new students("Het" , "18")
// let s3 = new students("Zeel" , "18")

// console.log(s1)
// s1.hey()
// s1.get_name()
// console.log(s2)
// console.log(s3)


// Parent Class
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class EngineeringStudent extends Student {
    constructor(name, age, branch) {
        super(name, age);  
        this.branch = branch;
    }
}

let s1 = new EngineeringStudent("Parth", 18, "CSE");
console.log(s1)




