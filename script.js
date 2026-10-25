const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");


hamburger.addEventListener("click", function() {
   
    if (dropdown.classList.contains("open")) {

        dropdown.classList.remove("open");

    } else {

        dropdown.classList.add("open");

    }

});

document.addEventListener("click", function(event) {

    if (
        !hamburger.contains(event.target) &&
        !dropdown.contains(event.target)
    ) {

        dropdown.classList.remove("open");

    }

});