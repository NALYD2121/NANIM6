document.addEventListener("DOMContentLoaded", () => {
    const totalEpisodes = 1122;  // Nombre total d'épisodes
    const episodeSelect = document.getElementById("episodeSelect");
    const episodeTitle = document.getElementById("episodeTitle");
    
    // Remplir le menu déroulant avec les options d'épisodes
    for (let i = 1; i <= totalEpisodes; i++) {
        const option = document.createElement("option");
        option.value = i;  // Enregistrer l'index de l'épisode
        option.textContent = `Épisode ${i}`;
        episodeSelect.appendChild(option);
    }

    let currentEpisode = 1;
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const videoContainer = document.querySelector('.video-container');
    const iframe = videoContainer.querySelector('iframe');

    // Fonction pour changer la vidéo
    function changeVideo(episodeIndex) {
        const videoUrl = videoUrls[episodeIndex - 1];  // Récupère l'URL de l'épisode
        iframe.src = videoUrl;
    }

    // Change d'épisode
    function changeEpisode(episode) {
        currentEpisode = episode;
        episodeSelect.value = currentEpisode;
        updateEpisodeTitle(currentEpisode);
        changeVideo(currentEpisode);  // Change la vidéo en fonction de l'épisode
    }

    // Met à jour le titre de l'épisode
    function updateEpisodeTitle(episode) {
        episodeTitle.textContent = `Épisode ${episode}`;
    }

    // Navigation Précédent/Suivant
    prevButton.addEventListener("click", () => {
        if (currentEpisode > 1) {
            changeEpisode(currentEpisode - 1);
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentEpisode < totalEpisodes) {
            changeEpisode(currentEpisode + 1);
        }
    });

    // Sélectionner un épisode via le menu déroulant
    episodeSelect.addEventListener("change", () => {
        changeEpisode(Number(episodeSelect.value));
    });

    // Initialisation
    changeEpisode(1);
});
