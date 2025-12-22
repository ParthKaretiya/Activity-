const input = document.querySelector("input");
const btn = document.querySelector("button");
const para = document.querySelector(".para");

btn.addEventListener("click", () => {

    try {
        const v = input.value;

        para.textContent = "";
        para.style.color = "red";

       
        if (v.length !== 1) {
            throw "Enter exactly ONE character!";
        }

       
        if (v >= "A" && v <= "Z") {
            throw "Capital letters are not allowed!";
        }

      
        if (v >= "0" && v <= "9") {
            throw "Digits are not allowed!";
        }

       
        para.style.color = "green";
        para.textContent = "✔ Valid input!";

    } catch (error) {
        para.style.color = "red";
        para.textContent = "❌ " + error;

    } finally {
        input.value = ""; 
        input.focus();     
    }
});
