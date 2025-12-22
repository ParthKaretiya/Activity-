let btn = document.querySelector(".btn button"); 
let para = document.querySelector(".result");

function webLoad() {
    fetch("https://facebook-scraper3.p.rapidapi.com/profile/photos?profile_id=100057864828042&rapidapi-key=5c764910f0msh9280d7af4347d4fp1e9bf0jsnf67589120912")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        para.textContent = JSON.stringify(data); 
    })
   
}

btn.addEventListener("click", webLoad);
