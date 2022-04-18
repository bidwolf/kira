//Faz o download da api do YouTube
function loadYt_API() {

    let tag = document.createElement("script");
    tag.src = "https://www.youtube.com/player_api";

    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


}
loadYt_API();
/*
function generateYtPlayer(videoId) {
    let yt_players = document.querySelector('#YoutubePlayer');
    let tag = document.createElement("div");
    tag.id = videoId;
    let div_tag = document.createElement("div");
    div_tag.className = "col my-2 py-3 d-flex justify-content-center";
    yt_players.children[1].insertAdjacentElement(div_tag);
    yt_players.children[1].children[0].insertAdjacentElement(tag);
    let player = new YT.Player(videoId, {

        height: '360',
        width: '640',
        videoId: '394mc6PV8t8',
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });

}*/
let player;

//generateYtPlayer('transa');

function onYouTubePlayerAPIReady() {
    player = new YT.Player('video', {
        height: '360',
        width: '640',
        videoId: '394mc6PV8t8',
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}
//Cria Um Player do YouTube substituindo a tag passada como parâmetro por um iframe com as configurações definidas


function onPlayerReady(event) {
    event.target.playVideo();
    console.log(window.localStorage.getItem("isVisualized"));
}
let done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(pauseVideo, 10000);
        done = true;
    }
}

function pauseVideo() {
    player.pauseVideo();
    setIsVisualized(false);
}

function stopVideo() {
    player.stopVideo();

}