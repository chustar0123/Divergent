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

document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector("#navbarSupportedContent");

    if (navbarToggler) {
        navbarToggler.addEventListener("click", function() {
            setTimeout(() => {
                navbarCollapse.classList.add("show"); // Ensures the navbar stays open
            }, 10);
        });
    }
});


// Listen for the scroll event
window.addEventListener('scroll', handleScroll);

// Trigger on page load to ensure elements in the viewport are animated
handleScroll();


