const form = document.getElementById("userForm");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
let h2 = document.getElementById("h2");

console.log(fname);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  h2.innerText = fname.value + lname.value;
});

