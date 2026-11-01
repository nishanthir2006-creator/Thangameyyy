// ==========================================
// BIRTHDAY WEBSITE
// Made with love by Thanga kuttyyyy ♡
// For my Thangameyyy
// ==========================================


// PERSONAL DETAILS

const CONFIG = {

    birthdayName: "Thangameyyy",

    yourName: "Thanga kuttyyyy",

    // CHANGE THIS TO HIS ACTUAL BIRTHDAY
    // Format: YYYY-MM-DDTHH:MM:SS

    birthdayDate: "2026-11-05T00:00:00"

};


// ==========================================
// 1. BACKGROUND MUSIC
// ==========================================

const music = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", async function () {

    if (music.paused) {

        try {

            await music.play();

            musicButton.innerHTML = "♫ Our Song Is Playing 💗";

        } catch (error) {

            alert("Please add your song inside assets/music/Kaadhal.mpeg");

        }

    } else {

        music.pause();

        musicButton.innerHTML = "♪ Play Our Song ♡";

    }

});


// ==========================================
// 2. FALLING HEARTS ANIMATION
// ==========================================

const heartsContainer = document.getElementById("heartsContainer");

const heartSymbols = ["💗", "💕", "♡", "💖", "♥", "🌸"];

function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("falling-heart");

    heart.innerHTML = heartSymbols[
        Math.floor(Math.random() * heartSymbols.length)
    ];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    heart.style.fontSize =
        (12 + Math.random() * 18) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 500);


// ==========================================
// 3. EXTRA HEART BURST
// ==========================================

function heartBurst(amount = 20) {

    for (let i = 0; i < amount; i++) {

        setTimeout(createHeart, i * 70);

    }

}


// ==========================================
// 4. WELCOME ENVELOPE & LETTER POPUP
// ==========================================

const envelope = document.getElementById("envelope");
const openEnvelope = document.getElementById("openEnvelope");

const welcomeLetterPopup = document.getElementById("welcomeLetterPopup");
const closeWelcomeLetter = document.getElementById("closeWelcomeLetter");

function openLetterPopup() {
    if (!welcomeLetterPopup) return;

    // Open the envelope
    envelope.classList.add("open");

    // Show the complete letter popup
    welcomeLetterPopup.classList.add("show");
    welcomeLetterPopup.setAttribute("aria-hidden", "false");

    // Prevent background scrolling
    document.body.classList.add("letter-popup-open");

    // Heart animation
    heartBurst(25);

    // Focus the close button
    closeWelcomeLetter.focus();
}

function closeLetterPopup() {
    if (!welcomeLetterPopup) return;

    welcomeLetterPopup.classList.remove("show");
    welcomeLetterPopup.setAttribute("aria-hidden", "true");

    // Restore background scrolling
    document.body.classList.remove("letter-popup-open");
}

// Open popup when clicking the envelope heart
if (openEnvelope) {
    openEnvelope.addEventListener("click", openLetterPopup);
}

// Close using the close button
if (closeWelcomeLetter) {
    closeWelcomeLetter.addEventListener("click", closeLetterPopup);
}

// Close when clicking outside the letter
if (welcomeLetterPopup) {
    const backdrop = welcomeLetterPopup.querySelector("[data-close-letter]");

    if (backdrop) {
        backdrop.addEventListener("click", closeLetterPopup);
    }
}

// Close using Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && welcomeLetterPopup?.classList.contains("show")) {
        closeLetterPopup();
    }
});

// ==========================================
// 5. BIRTHDAY MAGIC BUTTON
// ==========================================

const magicButton = document.getElementById("magicButton");

const magicMessage = document.getElementById("magicMessage");

magicButton.addEventListener("click", function () {

    magicMessage.classList.add("show");

    magicMessage.innerHTML =
        "You deserve all the happiness in this universe, " +
        CONFIG.birthdayName +
        "! 💗✨";

    heartBurst(35);

});


// ==========================================
// 6. BIRTHDAY COUNTDOWN
// ==========================================

function updateCountdown() {

    const targetDate = new Date(
        CONFIG.birthdayDate
    ).getTime();

    const now = new Date().getTime();

    const difference = targetDate - now;

    if (Number.isNaN(targetDate)) {

        return;

    }

    if (difference <= 0) {

        document.getElementById("days").innerHTML = "00";

        document.getElementById("hours").innerHTML = "00";

        document.getElementById("minutes").innerHTML = "00";

        document.getElementById("seconds").innerHTML = "00";

        return;

    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown, 1000);


// ==========================================
// 7. TEDDY HUG INTERACTION
// ==========================================

const teddy = document.getElementById("teddyCharacter");

const hugButton = document.getElementById("hugButton");

const hugMessage = document.getElementById("hugMessage");

hugButton.addEventListener("click", function () {

    teddy.classList.remove("hugging");

    void teddy.offsetWidth;

    teddy.classList.add("hugging");

    hugMessage.innerHTML =
        "A HUGE BEAR HUG FOR YOU, " +
        CONFIG.birthdayName +
        "! 🧸🤗💗";

    heartBurst(30);

});

teddy.addEventListener("click", function () {

    teddy.classList.remove("hugging");

    void teddy.offsetWidth;

    teddy.classList.add("hugging");

    hugMessage.innerHTML =
        "Your teddy says: I LOVE YOU! 🧸💕";

    heartBurst(20);

});


// ==========================================
// 8. INTERACTIVE GIFT BOXES
// ==========================================

const giftCards = document.querySelectorAll(".gift-card");

const giftMessage = document.getElementById("giftMessage");

giftCards.forEach(function (gift) {

    gift.addEventListener("click", function () {

        const message = gift.getAttribute("data-message");

        giftMessage.innerHTML = message;

        giftMessage.style.animation = "none";

        void giftMessage.offsetWidth;

        giftMessage.style.animation = "fadeUp 0.7s";

        heartBurst(18);

    });

});


// ==========================================
// 9. SECRET LOVE MESSAGE
// ==========================================

const secretButton = document.getElementById("secretButton");

const secretMessage = document.getElementById("secretMessage");

secretButton.addEventListener("click", function () {

    secretMessage.classList.toggle("show");

    if (secretMessage.classList.contains("show")) {

        secretMessage.innerHTML =
            "No matter how many stars are in the sky, " +
            "you will always be my brightest one. 🌙💗";

        secretButton.innerHTML = "MY HEART IS YOURS ♡";

        heartBurst(25);

    } else {

        secretButton.innerHTML = "Open a secret message ✦";

    }

});


// ==========================================
// 10. BIRTHDAY CAKE
// ==========================================

const blowButton = document.getElementById("blowButton");

const cakeMessage = document.getElementById("cakeMessage");

const cakeSection = document.querySelector(".cake-section");

blowButton.addEventListener("click", function () {

    cakeSection.classList.add("blown");

    cakeMessage.innerHTML =
        "Your wish has been sent to the universe! ✨ " +
        "May every beautiful thing find you. 💗";

    blowButton.innerHTML = "WISH SENT! ♡";

    blowButton.disabled = true;

    heartBurst(40);

});


// ==========================================
// 11. FINAL SURPRISE LOVE LETTER
// ==========================================

const finalEnvelope = document.getElementById("finalEnvelope");

const finalLetter = document.getElementById("finalLetter");

finalEnvelope.addEventListener("click", function () {

    finalLetter.classList.add("show");

    finalEnvelope.style.display = "none";

    heartBurst(60);

    setTimeout(function () {

        finalLetter.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }, 300);

});


// ==========================================
// 12. PERSONAL GREETING
// ==========================================

console.log(
    "A little birthday universe for " +
    CONFIG.birthdayName +
    " 💗"
);

console.log(
    "Made with love by " +
    CONFIG.yourName
);


// ==========================================
// END OF BIRTHDAY WEBSITE
// ==========================================
// ==========================================
// 13. FULL-SIZE PHOTO VIEWER
// ==========================================

const photoViewer = document.getElementById("photoViewer");
const fullSizePhoto = document.getElementById("fullSizePhoto");
const closePhotoViewer = document.getElementById("closePhotoViewer");

// Select every image inside the website
document.querySelectorAll("img").forEach(function (photo) {

    // Ignore images inside the popup itself
    if (photo.id === "fullSizePhoto") return;

    photo.style.cursor = "zoom-in";

    photo.addEventListener("click", function () {

        if (!photoViewer || !fullSizePhoto) return;

        fullSizePhoto.src = photo.src;
        fullSizePhoto.alt = photo.alt || "Birthday memory";

        photoViewer.classList.add("show");
        document.body.classList.add("photo-viewer-open");

    });

});

// Close function
function closeFullSizePhoto() {

    if (!photoViewer) return;

    photoViewer.classList.remove("show");
    document.body.classList.remove("photo-viewer-open");

    fullSizePhoto.src = "";

}

// Close button
if (closePhotoViewer) {
    closePhotoViewer.addEventListener("click", closeFullSizePhoto);
}

// Click outside
if (photoViewer) {
    photoViewer.addEventListener("click", function (event) {
        if (event.target === photoViewer) {
            closeFullSizePhoto();
        }
    });
}

// Escape key
document.addEventListener("keydown", function (event) {
    if (
        event.key === "Escape" &&
        photoViewer &&
        photoViewer.classList.contains("show")
    ) {
        closeFullSizePhoto();
    }
});