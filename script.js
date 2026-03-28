// MENU MOBILE
const menu = document.querySelector('.menu');
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');

mobileMenuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// SCROLL REVEAL SIMPLES
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;

        if(revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
