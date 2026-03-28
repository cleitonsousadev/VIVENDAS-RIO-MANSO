// MENU MOBILE
const menuIcon = document.querySelector('.mobile-menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// FECHAR MENU AO CLICAR EM LINK
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// REVEAL AO SCROLL
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll(){
    const windowHeight = window.innerHeight;
    reveals.forEach(el=>{
        const top = el.getBoundingClientRect().top;
        if(top < windowHeight - 100) el.classList.add('active');
    });
}
window.addEventListener('scroll', revealOnScroll);

// WHATSAPP COM MENSAGEM AUTOMÁTICA
document.querySelectorAll('a[href*="wa.me"]').forEach(link=>{
    link.addEventListener('click',()=>{
        const msg = encodeURIComponent("Olá! Tenho interesse nas glebas do Vivendas Rio Manso. Pode me passar mais informações?");
        link.href = `https://wa.me/5531999509944?text=${msg}`;
    });
});
