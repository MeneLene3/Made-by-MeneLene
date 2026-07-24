// Favoriten speichern
const favorites = document.querySelectorAll(".favorite");

favorites.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "♡") {
            button.textContent = "♥";
        } else {
            button.textContent = "♡";
        }
    });
});


// Bilder groß anzeigen
const images = document.querySelectorAll(".gallery img");

images.forEach(image => {
    image.addEventListener("click", () => {
        window.open(image.src, "_blank");
    });
});
