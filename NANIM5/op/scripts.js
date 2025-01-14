// Fonction de recherche (simulée)
document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    if (searchTerm) {
        // Ajouter une gestion plus générique
        const searchResults = {
            "index": "../index.html",
            "Accueil": "../Accueil.html",
            "Films": "../Films.html",
            "Film": "../Films.html",
            "Séries": "../Séries.html",
            "Série": "../Séries.html",
            "Series": "../Séries.html",
            "Series": "../Séries.html",
            "Animés": "../Animés.html",
            "animés": "../Animés.html",
            "animé": "../Animés.html",
            "anime": "../Animés.html",
            "onepeice": "../op/onepeice.html",
            "onepiece": "../op/onepeice.html",
            "one piece": "../op/onepeice.html",
            "one peice": "../op/onepeice.html",
            "404": "../404/404.html",
        };

        if (searchResults[searchTerm]) {
            window.location.href = searchResults[searchTerm]; // Redirection
        } else {
            window.location.href = '../404/404.html'; // Redirection vers une page d'erreur
        }
    }
});

// Recherche avec la touche "Entrée"
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const searchTerm = e.target.value.trim().toLowerCase();
        const searchResults = {
            "index": "../index.html",
            "Accueil": "../Accueil.html",
            "Films": "../Films.html",
            "Film": "../Films.html",
            "Séries": "../Séries.html",
            "Série": "../Séries.html",
            "Series": "../Séries.html",
            "Series": "../Séries.html",
            "Animés": "../Animés.html",
            "animés": "../Animés.html",
            "animé": "../Animés.html",
            "anime": "../Animés.html",
            "onepeice": "../op/onepeice.html",
            "onepiece": "../op/onepeice.html",
            "one piece": "../op/onepeice.html",
            "one peice": "../op/onepeice.html",
            "404": "../404/404.html",
        };

        if (searchResults[searchTerm]) {
            window.location.href = searchResults[searchTerm]; // Redirection
        } else {
            window.location.href = '../404/404.html'; // Redirection vers une page d'erreur
        }
    }
});

// Mode sombre
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Vérification si le mode sombre a déjà été activé
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true; // Cocher le bouton au rechargement
}

// Basculer entre le mode sombre et clair
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled'); // Mémoriser la préférence
    } else {
        body.classList.remove('dark-mode');
        localStorage.removeItem('darkMode'); // Supprimer la préférence
    }
});

// Fonction de mouvement des boules
const balls = document.querySelectorAll('.ball');

function randomPosition() {
    return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
    };
}

if (balls.length > 0) {
    balls.forEach(ball => {
        const position = randomPosition();
        ball.style.top = `${position.y}px`;
        ball.style.left = `${position.x}px`;

        // Animation de mouvement supplémentaire
        setInterval(() => {
            const newPosition = randomPosition();
            ball.style.transition = 'all 0.5s ease';
            ball.style.top = `${newPosition.y}px`;
            ball.style.left = `${newPosition.x}px`;
        }, 2000); // 2 secondes
    });
}
// Attendez que le DOM soit complètement chargé avant d'initialiser Swiper
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Permet le défilement infini
        slidesPerView: 'auto', // Définit la vue à "auto" pour ajuster le nombre de slides visibles
        spaceBetween: 20, // Espacement entre les éléments
        navigation: {
            nextEl: '.swiper-button-next', // Bouton suivant
            prevEl: '.swiper-button-prev', // Bouton précédent
        },
    });
});
