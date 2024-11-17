// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting'); // Select the greeting element
    const now = new Date(); // Get the current date and time
    const hours = now.getHours(); // Extract the current hour
  
    // Determine the greeting and class based on the time of day
    if (hours < 12) {
      greetingElement.textContent = "Good morning!";
      greetingElement.classList.add('morning'); // Apply morning styles
    } else if (hours >= 12 && hours <= 17) {
      greetingElement.textContent = "Good afternoon!";
      greetingElement.classList.add('afternoon'); // Apply afternoon styles
    } else {
      greetingElement.textContent = "Good evening!";
      greetingElement.classList.add('evening'); // Apply evening styles
    }
  });
  