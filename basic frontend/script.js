// Select the theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Listen for a click event on the button
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change button icon dynamically
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️"; // Sun icon for Light mode
    } else {
        themeToggle.textContent = "🌙"; // Moon icon for Dark mode
    }
});
// Select the button and paragraph
const button = document.createElement("button");
button.textContent = "Click Me!";
document.body.appendChild(button);

const text = document.createElement("p");
text.textContent = "Original Text";
document.body.appendChild(text);

// Add event listener for button click
button.addEventListener("click", () => {
    text.textContent = "Text Changed!";
});
// Select the heading element
const heading = document.querySelector(".animated-heading");

// Add event listener to trigger animation
heading.addEventListener("mouseover", () => {
    heading.style.animation = "bounce 1.5s infinite";
});

// Remove animation when mouse leaves
heading.addEventListener("mouseleave", () => {
    heading.style.animation = "none";
});
// // Create the button dynamically and add it to the page
// const toggleButton = document.createElement("button");
// toggleButton.textContent = "Show/Hide Elements";
// document.body.appendChild(toggleButton);

// // Select the Hello World heading and the Semantic section
// const helloWorldHeading = document.querySelector(".animated-heading");
// const section = document.querySelector(".semantic");

// // Add event listener to toggle visibility
// toggleButton.addEventListener("click", () => {
//     if (helloWorldHeading.style.display === "none" && section.style.display === "none") {
//         helloWorldHeading.style.display = "block";
//         section.style.display = "block";
//     } else {
//         helloWorldHeading.style.display = "none";
//         section.style.display = "none";
//     }
// });
