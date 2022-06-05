function showSpeedLines() {
    var speedlines = document.getElementsByClassName ("speedline");
    for (let i = 0; i < speedlines.length; ++i) {
        speedlines [i].style.display = "inline";
    }
}

function hideSpeedLines() {
    var speedlines = document.getElementsByClassName ("speedline");
    for (let i = 0; i < speedlines.length; ++i) {
        speedlines [i].style.display = "none";
    };
}