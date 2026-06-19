// ==========================
// LOGIN BUTTON
// ==========================

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function (e) {

    e.preventDefault();

    alert("Login feature coming soon!");

});


// ==========================
// SEARCH BAR
// ==========================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        alert("Searching for: " + searchInput.value);

    }

});


// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 100) {

        navbar.style.background = "#e23744";
        navbar.style.position = "fixed";
        navbar.style.width = "100%";

    } else {

        navbar.style.background = "transparent";

    }

});


// ==========================
// CUISINE CLICK EFFECT
// ==========================

const cuisines = document.querySelectorAll(".cuisine");

cuisines.forEach(cuisine => {

    cuisine.addEventListener("click", function () {

        alert("Showing " + cuisine.innerText + " restaurants");

    });

});


// ==========================
// RESTAURANT CARD HOVER LOG
// ==========================

const cards = document.querySelectorAll(".restaurant-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        console.log("Viewing:", card.querySelector("h3").innerText);

    });

});


// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

const sections = document.querySelectorAll(
    ".cuisines, .restaurants, .why-us"
);

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});


// ==========================
// PAGE LOADED MESSAGE
// ==========================

window.addEventListener("load", function () {

    console.log("Zomato Clone Loaded Successfully!");

});