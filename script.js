// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').style.backgroundColor = 'rgba(0, 0, 0, 0.9) !important';
    } else {
        document.querySelector('.navbar').style.backgroundColor = 'rgba(0, 0, 0, 0.8) !important';
    }
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Add loading animation for map images
document.querySelectorAll('.map-card img').forEach(img => {
    img.addEventListener('load', function() {
        this.classList.add('loaded');
    });
});


//scrollbutton on home page
const scrollButton = document.getElementById('scrollButton');

scrollButton.addEventListener('click', function() {
    document.getElementById('machine-learning').scrollIntoView({ 
        behavior: 'smooth' 
    });
    // Add fade-out class instead of display: none
    this.classList.add('fade-out');
});

// Show/hide button based on scroll position
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        scrollButton.classList.add('fade-out');
    } else {
        scrollButton.classList.remove('fade-out');
    }
});