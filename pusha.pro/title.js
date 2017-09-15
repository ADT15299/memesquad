if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 202);

}

var x = 0;

var titleText = [ "m", "me", "mem", "meme", "meme t", "meme te", "meme tea", "meme team", "meme team 6", "ADT", "Blaze", "BM", "6", "66", "666", "†", ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}