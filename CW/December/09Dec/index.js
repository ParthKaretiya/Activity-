// for(var i=0;i<=3;i++){
//     console.log(i);
// }
// console.log(i);

// function a1() {
//     var n1 = 10;   // n1 = 10
//     console.log(n1);

//     function a2() {
//         var n2 = 20;
//         console.log(n2);

//         function a3() {
//             var n3 = 30;
//             console.log(n3);
//         }

//         a3();
//     }

//     a2();
// }

// a1();

function a1() {
    var n1 = 10;
    console.log(n1);

    function a2() {
        var n2 = 20;
        console.log(n2);

        function a3() {
            var n3 = 30;
            console.log(n3);
        }

        return a3;
    }

    return a2;
}

var c1 = a1();

console.log(c1);

var c2 = c1();

console.log(c2);
