console.log("Student portfolio loaded successfully.");

// ================================
// PROJECT FILTERING
// ================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedFilter = button.getAttribute("data-filter");

        // Remove active state from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active state to clicked button
        button.classList.add("active");

        // Filter project cards
        projectCards.forEach(card => {

            const projectCategory =
                card.getAttribute("data-category");

            if (
                selectedFilter === "all" ||
                projectCategory === selectedFilter
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

// ================================
// MOBILE NAVIGATION
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("active");

    });

}

// ================================
// CONTACT FORM
// ================================

const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        formMessage.textContent =
            "Thank you for your message! I will get back to you soon.";

        contactForm.reset();

    });

}