var txt = document.querySelector(".txt");
var btn = document.querySelector(".btn");
var dataContain = document.querySelector(".dataContain");

function loadApiKey() {

    fetch(`https://api.mfapi.in/mf/search?q=${txt.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            dataContain.innerHTML = "";   

            for (let i = 0; i < data.length; i++) {

                var p1 = document.createElement("p");
                p1.textContent = data[i].schemeCode;
                p1.style.color = "green";

                var p2 = document.createElement("p");
                p2.textContent = data[i].schemeName;
                p2.style.color = "brown";

                var div = document.createElement("div");
                div.appendChild(p1);
                div.appendChild(p2);

                dataContain.appendChild(div);
            }
        });
}

btn.addEventListener("click", loadApiKey);
