
function checkPasscode() {
    const correctPasscode = "1234"; 
    const userInput = document.getElementById("passcode-input").value.trim();

    if (userInput === correctPasscode) {
        window.location.href = "quote.html"; 
    } else {
        alert("❌ Incorrect passcode! Try again.");
    }
}


const quotes = [
    "Believe in yourself and all that you are.",
    "The only way to do great work is to love what you do.",
    "Difficult roads often lead to beautiful destinations.",
    "Do what you can, with what you have, where you are.",
    "Happiness depends upon ourselves.",
    "Dream big and dare to fail.",
    "You are never too old to set another goal or to dream a new dream.",
    "Everything you can imagine is real.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "It always seems impossible until it's done.",
    "A person who never made a mistake never tried anything new.",
    "Act as if what you do makes a difference. It does.",
    "The way to get started is to quit talking and begin doing.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "Opportunities don't happen. You create them.",
    "Don't watch the clock; do what it does. Keep going.",
    "You are enough just as you are.",
    "Small steps in the right direction can turn out to be the biggest step of your life.",
    "You are loved more than you know.",
    "Happiness looks good on you—never stop smiling!",
    "Love is not about how long, but how deep.",
    "You light up the world just by being you.",
    "The best thing to hold onto in life is each other.",
    "Every moment with you is a memory in the making.",
    "You are the reason someone smiles today.",
    "Your heart is the most beautiful thing about you.",
    "Love is like the wind—you can’t see it, but you can feel it.",
    "Your kindness makes the world a better place.",
    "You must be a magician because whenever I look at you, everyone else disappears.",
    "You're like a cloud... because you make my days brighter!",
    "Life is better when we’re laughing together.",
    "You are my favorite kind of distraction.",
    "If hugs were snowflakes, I’d send you a blizzard.",
    "You + Me = A Love Story with no ending.",
    "Your laugh is my favorite sound in the universe.",
    "If I had a flower for every time I thought of you, I could walk through my garden forever.",
    "You are my happy place.",
    "Just in case no one told you today—you’re amazing!"
];


function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quoteElement = document.getElementById("quote");


    quoteElement.style.opacity = 0;

    setTimeout(() => {
        quoteElement.textContent = quotes[randomIndex];
        quoteElement.style.opacity = 1;
    }, 500);
}
document.addEventListener("DOMContentLoaded", function () {
    let music = document.getElementById("bg-music");

    // Try to play automatically
    music.play().then(() => {
        console.log("Autoplay started!");
    }).catch(() => {
        console.log("Autoplay blocked! Trying workaround...");
        music.muted = true; // Mute first to bypass autoplay restrictions
        music.play().then(() => {
            music.muted = false; // Unmute after it starts
        });
    });

    music.volume = 0.5; // Set volume to 50%
});