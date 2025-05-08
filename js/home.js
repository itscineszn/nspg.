const activePage = window.location.pathname.split("/").pop(); // Get the current page name
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === activePage) { // Match the exact href
        link.classList.add('active'); // Add 'active' class to the current page link
        console.log(`Active page: ${activePage}`); // Log the active page for debugging
    }
});

function showNav() {
    const mobileNav = document.querySelector('.mobileNav');
    mobileNav.style.display = 'flex';
}

function hideNav() {
    const mobileNav = document.querySelector('.mobileNav');
    mobileNav.style.display = 'none';
}

// Find all elements with class "carousel" and loop over each one
document.querySelectorAll(".carousel").forEach(carousel => {
    // Inside this carousel, select all carousel items (slides)
    const items = carousel.querySelectorAll(".carousel-item");

    // Create a button (dot) for each item
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel-button"></span>`;
    });

    // Insert the navigation buttons into the carousel
    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel-nav">
        ${buttonsHtml.join("")}
        </div>
    `);

    // Select all the newly created navigation buttons
    const buttons = carousel.querySelectorAll(".carousel-button");

    // Keep track of the currently selected slide index
    let currentIndex = 0;

    // Function to select a specific item (and its button)
    const selectItem = (index) => {
        // Unselect all slides and buttons
        items.forEach(item => item.classList.remove("carousel-item-selected"));
        buttons.forEach(button => button.classList.remove("carousel-button-selected"));

        // Select the targeted slide and its corresponding button
        items[index].classList.add("carousel-item-selected");
        buttons[index].classList.add("carousel-button-selected");
    };

    // Add click event listeners to each button
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            currentIndex = i;  // Update the current index when a button is clicked
            selectItem(i);     // Show the corresponding slide
        });
    });

    // Initialize the first slide as selected
    selectItem(0);

    // Automatically change slides every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length; // Move to the next slide, loop to start
        selectItem(currentIndex); // Update the slide shown
    }, 3000); // 3000 milliseconds = 3 seconds
});