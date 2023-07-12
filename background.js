function createNotification(id, type, title, message, buttons, iconUrl) {
    if (buttons === null) {
        var opt = {
            type: type,
            title: title,
            message: message,
            iconUrl: iconUrl,
        };
    } else {
        var opt = {
            type: type,
            title: title,
            message: message,
            buttons: buttons,
            iconUrl: iconUrl,
        };
    }
    chrome.notifications.create(id, opt, function () {});
}

chrome.notifications.onButtonClicked.addListener(function (e, b) {
    if (e === "notifLive") {
        chrome.tabs.create({
            url: "https://www.twitch.tv/jamel_le_chomeur",
        });
    }

    chrome.notifications.clear(e);
});

const preview_url =
    "https://static-cdn.jtvnw.net/previews-ttv/live_user_jamel_le_chomeur-350x200.jpg";

//var redirected = false;
var notificated = false;

const checkStatus = () => {
    fetch(preview_url).then((response) => {
        if (response.redirected != true) {
            /*if (redirected != true) {
                redirected = true;
                chrome.tabs.create({
                    url: "https://www.twitch.tv/jamel_le_chomeur",
                });
            }*/
            if (notificated != true) {
                createNotification(
                    "notifLive",
                    "basic",
                    "Jamel est en ligne !",
                    "Dépêchez-vous de le rejoindre !",
                    [
                        {
                            title: "Cliquez ici pour le rejoindre !",
                        },
                    ],
                    "image/happy-jamel.png"
                );
                notificated = true;
            }
        }
    });
};

chrome.runtime.onInstalled.addListener(() => {
    createNotification(
        "notifInstall",
        "basic",
        "Extension Jamel",
        "Merci d'avoir installé l'extension 💖 !",
        null,
        "image/happy-jamel.png"
    );
});

setInterval(checkStatus, 30 * 1000);
