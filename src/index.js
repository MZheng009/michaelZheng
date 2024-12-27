document.addEventListener('DOMContentLoaded', () => {
    // Initialize the webpage
    console.log('Personal webpage loaded successfully.');

    // Link to the main JavaScript file for interactivity
    const script = document.createElement('script');
    script.src = './scripts/main.js';
    document.body.appendChild(script);
});