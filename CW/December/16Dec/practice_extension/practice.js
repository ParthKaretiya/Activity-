var getJokes = () => {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((data) => data.json())
        .then((result) => {
            var para = document.querySelector(".jokes");
            para.textContent = result.value; // ✅ correct
        })
        .catch((error) => {
            console.log("Error:", error);
        });
};

window.addEventListener("load", () => {
    getJokes();
});
