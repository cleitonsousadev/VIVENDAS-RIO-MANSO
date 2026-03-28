// MENU MOBILE
const menuIcon = document.querySelector('.mobile-menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ANIMAÇÃO AO SCROLL
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// BOTÕES PERSONALIZADOS WHATSAPP
const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

whatsappLinks.forEach(link => {
    link.addEventListener('click', () => {
        const message = encodeURIComponent(
            "Olá! Tenho interesse nos lotes do Vivendas Rio Manso. Pode me passar mais informações?"
        );

        link.href = `https://wa.me/5531999999999?text=${message}`;
    });
});

// BOTÃO INSTAGRAM (opcional interação)
const instaLinks = document.querySelectorAll('a[href*="instagram"]');

instaLinks.forEach(link => {
    link.addEventListener('click', () => {
        alert("Abrindo Instagram do Vivendas Rio Manso 📸");
    });
});