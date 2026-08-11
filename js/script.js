// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// ================= CLOSE MENU =================

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});


// ================= NAVBAR SCROLL =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ================= CONSOLE =================

console.log("🚀 Ibrohim Portfolio loaded successfully!");