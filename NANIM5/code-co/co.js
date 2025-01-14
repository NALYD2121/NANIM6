// Fonction pour vérifier le code
function checkCode() {
    const code = document.getElementById("access-code").value;
    const validCode = "123"; // Remplacez par votre code secret

    if (code === validCode) {
        window.location.href = "../index.html"; // Redirection vers le site
    } else {
        alert("Code incorrect !");
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
