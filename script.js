// Initialize AOS for animations
window.addEventListener('load', () => {
    console.log("Portfolio fully loaded!");
    
    // Initialize AOS with custom options
    AOS.init({
        duration: 1000,  // Duration of animation
        easing: 'ease-in-out',  // Easing function
        once: true  // Animation happens only once
    });
});
