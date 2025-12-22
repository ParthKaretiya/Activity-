
var container = document.querySelector(".dataContain");
var box = document.querySelector(".box");

console.log(box);

function createCard(element){

    var img = document.createElement('img');
    img.setAttribute("src", element.review_author_avatar);
    
    var p1 = document.createElement('p');
    p1.textContent = "id -> " + element.review_id;

    var p2 = document.createElement("p");
    p2.textContent = element.review_title;

    var p3 = document.createElement('p');
    p3.textContent = element.review_star_rating;

    var card = document.createElement('div');

    card.appendChild(img);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);

    console.log(card);

    container.appendChild(card);
}

box.addEventListener("change", (event) => {
    if (event.target.checked) {
        console.log("checkbox is in checked status");
        fetch("https://real-time-amazon-data.p.rapidapi.com/top-product-reviews?asin=B07ZPKN6YR&country=US&rapidapi-key=0e21a599b2mshbf0013281d25382p11e101jsnab8a18423bff")
            .then((response) => response.json())
            .then((data1) => {
           
                data1.data.reviews.forEach(element => {
                  
                    createCard(element);
                });
            })
    }
    else {
        console.log("checkbox is in unchecked status");
    }
})

