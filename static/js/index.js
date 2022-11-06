const $video = document.querySelector('#video');
const $play = document.querySelector('#btnPlay');
const $pause = document.querySelector('#btnPause');
const $backward = document.querySelector('#btnRetroceder');
const $forward = document.querySelector('#btnAvanzar');
const $progress = document.querySelector('#progress')

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

function handlePlay() {
    $video.play()
    $play.hidden = true;
    $pause.hidden = false;
}

function handlePause() {
    $video.pause()
    $pause.hidden = true;
    $play.hidden = false;
}

function handleBackward() {
    console.log($video.currentTime -= 5);
}

function handleForward() {
    console.log($video.currentTime += 5);
}

$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);

function handleLoaded() {
    $progress.max = $video.duration;
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime;
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value;
}