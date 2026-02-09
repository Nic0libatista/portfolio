// Configuração base do ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    delay: 200,
    reset: false // Muda para true se quiser que a animação repita ao subir a página
});

// Animações por Seção
sr.reveal('.banner .col-lg-6', { interval: 200 });
sr.reveal('.sobre .foto', { origin: 'left' });
sr.reveal('.sobre .textosobre', { origin: 'right', delay: 400 });

sr.reveal('.servicos h2', {});
sr.reveal('.servicos .foto img', { interval: 100, origin: 'bottom' });
sr.reveal('.servicos .card', { delay: 500 });

sr.reveal('.portifolio .row', { interval: 300 });

// Efeito de rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const icon = darkModeToggle.querySelector('i');

darkModeToggle.addEventListener('click', () => {
    // Alterna a classe dark-mode
    body.classList.toggle('dark-mode');
    
    // Altera o ícone entre lua e sol
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
        localStorage.setItem('theme', 'dark'); // Salva a preferência
    } else {
        icon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
        localStorage.setItem('theme', 'light');
    }
});

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
}

