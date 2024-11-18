// Get the toggle switch and label elements
const themeToggleCheckbox = document.getElementById("theme-toggle");

// Function to apply the dark mode based on saved state
function applyTheme(isDarkMode) {
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        themeToggleCheckbox.checked = true; // Keep the checkbox checked
    } else {
        document.body.classList.remove("dark-mode");
        themeToggleCheckbox.checked = false; // Uncheck the checkbox
    }
}

// On page load, retrieve the state from localStorage
const savedTheme = localStorage.getItem("darkMode");
applyTheme(savedTheme === "true"); // Apply theme based on saved state

// Add event listener to toggle switch
themeToggleCheckbox.addEventListener("change", () => {
    const isDarkMode = themeToggleCheckbox.checked; // Get the current state
    document.body.classList.toggle("dark-mode", isDarkMode); // Apply dark mode
    localStorage.setItem("darkMode", isDarkMode); // Save the state to localStorage
});
