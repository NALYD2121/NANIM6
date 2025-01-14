// Fonction pour faire défiler les cartes à gauche ou à droite
document.querySelectorAll('.scroll-button').forEach(button => {
    button.addEventListener('click', () => {
        const direction = button.classList.contains('left') ? -1 : 1;
        const scrollContainer = button.closest('.horizontal-scroll-container').querySelector('.horizontal-scroll');
        scrollContainer.scrollBy({
            left: direction * 300,  // Défilement de 300px à chaque clic
            behavior: 'smooth'      // Défilement fluide
        });
    });
});
