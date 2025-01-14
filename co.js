// Fonction pour vérifier le code
function checkCode() {
    const code = document.getElementById("access-code").value;
    const validCode = "123"; // Remplacez par votre code secret

    if (code === validCode) {
        window.location.href = "accueil.html"; // Redirection vers le site
    } else {
        // Créer un élément pour afficher le message d'erreur
        let errorMessage = document.createElement("div");
        errorMessage.id = "error-message";
        errorMessage.style.color = "red";
        errorMessage.style.fontSize = "18px";
        errorMessage.style.textAlign = "center";
        errorMessage.style.marginTop = "20px";
        errorMessage.innerText = "Code incorrect. Veuillez réessayer.";

        // Ajouter le message d'erreur au body (ou à un autre élément spécifique)
        document.body.appendChild(errorMessage);
    }
}

// Ajout d'un événement sur le bouton
document.getElementById("enter-button").addEventListener("click", checkCode);

// Ajout d'un événement pour détecter la touche "Entrée"
document.getElementById("access-code").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkCode();
    }
});
