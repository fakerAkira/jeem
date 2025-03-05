onload = () =>{
        document.body.classList.remove("container");
};


document.addEventListener("DOMContentLoaded", function () {
    let music = document.getElementById("bg-music");
    music.volume = 0.5; // Adjust volume (0.0 - 1.0)

    // Try playing after user interaction
    function playMusic() {
        music.play().catch(() => console.log("Autoplay blocked"));
        document.removeEventListener("click", playMusic);
    }

    // Some browsers need a click event to enable autoplay
    document.addEventListener("click", playMusic);
});