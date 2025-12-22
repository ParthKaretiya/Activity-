// class mobiles {
//     constructor(data, members, model, cost) {
//         this.data = data;
//         this.members = members;
//         this.model = model;
//         this.cost = cost;
//     }
// }

// let m1 = new mobiles("12", "5", "2024", "10,000");
// let m2 = new mobiles("10", "12", "2025", "20,000");
// let m3 = new mobiles("117", "7", "2026", "30,000");

// console.log(m1);
// console.log(m2);
// console.log(m3);


class Teacher {
    constructor(name) {
        this.name = name;
    }
}

class Subject {
    constructor(title) {
        this.title = title;
    }
}

class Classroom {
    constructor(roomNo) {
        this.roomNo = roomNo;
    }
}


function main() {
    let t1 = new Teacher("Mr. Rakesh");
    let s1 = new Subject("Mathematics");
    let c1 = new Classroom("Room 105");

    console.log("Teacher Name:", t1.name);
    console.log("Subject Title:", s1.title);
    console.log("Classroom No:", c1.roomNo);
}

main();