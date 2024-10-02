// Select the hamburger and mobile menu elements
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

// Toggle the mobile menu on hamburger click
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});
