function loadpage(url){
	window.location.assign(url);
}

function newGame (url) {
    sessionStorage.score = 0;
    loadpage (url);
}