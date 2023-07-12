const preview_url =
    "https://static-cdn.jtvnw.net/previews-ttv/live_user_jamel_le_chomeur-350x200.jpg";

fetch(preview_url).then((response) => {
    if (response.redirected === true) {
        document.querySelector("#statusText").innerText = "HORS LIGNE";
        document.querySelector(".status").src = "image/sleep-jamel.png";
        document.querySelector(".preview").src = "./image/screen-finish.png";
        document.querySelector("#redirect").removeAttribute("href");
        document.querySelector("#redirect").style = "cursor: default;";
    } else {
        document.querySelector("#statusText").innerText = "EN LIGNE";
        document.querySelector(".status").src = "image/happy-jamel.png";
        document.querySelector(".preview").src = preview_url;
        document.querySelector("#redirect").href =
            "https://www.twitch.tv/jamel_le_chomeur";
        document.querySelector("#redirect").style = "cursor: pointer;";
    }
});
