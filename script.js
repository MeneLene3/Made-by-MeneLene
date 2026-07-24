// Sanfte Begrüßung in der Konsole
console.log("Willkommen auf Made by MeneLene! 🎨");

// Karten leicht vergrößern beim Anklicken
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(1.03)";
        setTimeout(() => {
            card.style.transform = "";
        }, 200);
    });
});
