document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    console.log('Recherche : ', searchTerm);  // Débogage
    const searchResults = {
        "index": "index.html",
        "accueil": "index.html",
        "films": "Films.html",
        "Film": "Films.html",
        "Séries": "Séries.html",
        "Série": "Séries.html",
        "Series": "Séries.html",
        "Series": "Séries.html",
        "séries": "Séries.html",
        "animés": "Animés.html",
        "animé": "Animés.html",
        "anime": "Animés.html",
        "onepeice": "op/onepeice.html",
        "onepiece": "op/onepeice.html",
        "one piece": "op/onepeice.html",
        "one peice": "op/onepeice.html",
        "404": "404/404.html",
    };

    if (searchResults[searchTerm]) {
        window.location.href = searchResults[searchTerm]; // Redirection
    } else {
        window.location.href = '404/404.html'; // Redirection vers une page d'erreur
    }
});

document.getElementById('searchInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const searchTerm = e.target.value.trim().toLowerCase();
        console.log('Recherche avec Entrée : ', searchTerm);  // Débogage
        const searchResults = {
            "index": "index.html",
            "accueil": "index.html",
            "films": "Films.html",
            "Film": "Films.html",
            "Séries": "Séries.html",
            "Série": "Séries.html",
            "Series": "Séries.html",
            "Series": "Séries.html",
            "séries": "Séries.html",
            "animés": "Animés.html",
            "animé": "Animés.html",
            "anime": "Animés.html",
            "onepeice": "op/onepeice.html",
            "onepiece": "op/onepeice.html",
            "one piece": "op/onepeice.html",
            "one peice": "op/onepeice.html",
            "404": "404/404.html",
        };

        if (searchResults[searchTerm]) {
            window.location.href = searchResults[searchTerm]; // Redirection
        } else {
            window.location.href = '404/404.html'; // Redirection vers une page d'erreur
        }
    }
});

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;  // Mode sombre activé
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.removeItem('darkMode');
    }
});
