const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const navIcon = navToggle.querySelector("ion-icon");

navToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("is-open");

    navToggle.setAttribute("aria-expanded", isOpen); 

    if (isOpen) {
        navToggle.setAttribute("aria-label", "Close navigation menu");
        navIcon.setAttribute("name", "close-outline");
    } else {
        navToggle.setAttribute("aria-label", "Open navigation menu");
        navIcon.setAttribute("name", "menu-outline");
    }
});

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function() {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation menu");
        navIcon.setAttribute("name", "menu-outline");
    });
}