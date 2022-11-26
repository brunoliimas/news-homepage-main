// Show Menu

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');
const navOverlay = document.getElementById('overlay')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        navOverlay.style.display = 'block';
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navOverlay.style.display = 'none';
    })
}

// Remove menu mobile when clicked link

function linkAction() {
    navMenu.classList.remove('show-menu');
    navOverlay.style.display = 'none';
}
navLink.forEach(n => n.addEventListener('click', linkAction))