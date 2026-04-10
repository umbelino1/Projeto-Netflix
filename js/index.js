document.addEventListener("DOMContentLoaded", () => {

    const video = document.getElementById("video");
    const intro = document.getElementById("intro");
    const site = document.getElementById("site");

    console.log(video, intro, site);

    if (!video || !intro || !site) {
        console.log("ERRO: elemento não encontrado");
        return;
    }

    video.addEventListener("ended", () => {
        console.log("VIDEO TERMINOU");

        intro.style.display = "none";
        site.style.display = "block";
    });

});

video.volume = 0;

document.body.addEventListener("click", () => {
    video.muted = false;

    let volume = 0;
    const fade = setInterval(() => {
        volume = Math.min(volume +   0.1, 1);
        video.volume = volume;

        if (volume === 1) clearInterval(fade);
    }, 100);

}, { once: true });
 


