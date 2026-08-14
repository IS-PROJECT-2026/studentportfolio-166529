console.log("Student portfolio loaded successfully.");

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active state from all buttons
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Add active state to clicked button
        button.classList.add("active");

        const selectedFilter = button.dataset.filter;

        projectCards.forEach(function(card) {

            const projectCategory = card.dataset.category;

            if (
                selectedFilter === "all" ||
                selectedFilter === projectCategory
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});