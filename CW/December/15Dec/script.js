var checkbox = document.querySelector(".box");

checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {

        document.cookie = "username=parth; expires=thu , 18 Dec 2025 12:00:00 UTC Path=/";
        document.cookie = "emailId=parthkaretiya@gmail.com; Path=/";

        console.log("Cookies Stored:");
        console.log(document.cookie);

    } else {
        console.log("Nothing to store in the cookies section");
    }
});
