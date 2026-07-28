/* =========================
   TELEGRAM CONFIG
========================= */
const telegramUsername = "GetYourFoldersHere10_14";

/* =========================
   BUY NOW BUTTONS
========================= */
const buyButtons = document.querySelectorAll(".cta-button");

buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const title = button.getAttribute("data-title");

        const message = `Hi, how much for ${title} folder?`;

        const url = `https://telegram.me/${telegramUsername}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    });
});

/* =========================
   FULL MENU BUTTON
========================= */
const fullMenuBtn = document.getElementById("fullMenuBtn");

if (fullMenuBtn) {
    fullMenuBtn.addEventListener("click", () => {
        const message = "Hi, I'd like to see your full menu.";

        const url = `https://telegram.me/${telegramUsername}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    });
}

document.querySelectorAll(".video-card").forEach(card => {
    const wrapper = card.querySelector(".thumbnail-wrapper");
    const video = card.querySelector("video");

    wrapper.addEventListener("click", () => {
        wrapper.style.display = "none";
        video.style.display = "block";
        video.load();
        video.play();
    });
});