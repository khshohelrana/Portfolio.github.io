// Text to display
const text = "Hi! I'm Kh. Shohel Rana";

// Target the typewriter element
const typewriterElement = document.getElementById("typewriter");

function typeWriterWithAnimation(text, element, delay = 700, pause = 1500) {
  const words = text.split(" ");
  let currentIndex = 0;

  // Function to display words with animation
  function displayWords() {
    if (currentIndex < words.length) {
      // Build the text gradually
      element.innerHTML = words.slice(0, currentIndex + 1).join(" ");
      
      // Apply animation
      element.style.opacity = "1";
      element.style.transform = "translateX(0%)";

      currentIndex++; // Move to the next word

      // Schedule the next word
      setTimeout(displayWords, delay);
    } else {
      // Pause before restarting
      setTimeout(() => {
        // Reset for next loop
        element.style.opacity = "0";
        element.style.transform = "translateX(-100%)";
        currentIndex = 0;

        // Wait for animation to finish before restarting
        setTimeout(displayWords, 800);
      }, pause);
    }
  }

  displayWords(); // Start the animation
}

// Initialize the animation
typeWriterWithAnimation(text, typewriterElement, 700, 1500);






