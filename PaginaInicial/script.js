const navLinks = document.querySelectorAll('.nav-link');

const paginas = [
    document.getElementById('inicio'),
    document.getElementById('regioes'),
    document.getElementById('monstros'),
    document.getElementById('sobre')
];

const observador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector(
                `a[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, {
    threshold: 0.2
});

paginas.forEach(pagina => {
    observador.observe(pagina);
});