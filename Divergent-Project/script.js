// Function to detect if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// Function to handle the scroll event
function handleScroll() {
    const triggers = document.querySelectorAll('.animation-trigger');
    triggers.forEach(trigger => {
        if (isInViewport(trigger)) {
            trigger.classList.add('active');
        } else {
            trigger.classList.remove('active');
        }
    });
}

// Listen for the scroll event
window.addEventListener('scroll', handleScroll);

// Trigger on page load to ensure elements in the viewport are animated
handleScroll();


