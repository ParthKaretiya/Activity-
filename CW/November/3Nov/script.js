Object.assign(box2.style, {
    backgroundColor: 'orange',
    width: "40px",
    padding: '25px',
    borderRadius: '20%',
});
let Orange = true;

let button = document.querySelector("button")
button.addEventListener("click", () => {
    if (Orange) {
        Object.assign(box2.style, { backgroundColor: 'red' });
    } else {
        Object.assign(box2.style, { backgroundColor: 'orange' });
    }
    Orange = !Orange;
});


// que 1 insert element in empty body of html 

let para = document.createElement("div");
para.textContent = "hello, this is new content";

// select the h1
let heading = document.querySelector('h1');

// insert before h1
heading.before(para);
