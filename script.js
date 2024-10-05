const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const volume = player.querySelector('[name="volume"]');
const playbackSpeed = player.querySelector('[name="playbackSpeed"]');
const rewindBtn = player.querySelector('.rewind');
const fastForwardBtn = player.querySelector('.fast-forward');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

// Toggle play/pause
function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function updateButton() {
    toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Handle volume and playback speed controls
function handleVolumeChange() {
    video.volume = volume.value;
}

function handleSpeedChange() {
    video.playbackRate = playbackSpeed.value;
}

// Rewind and fast-forward functionality
function rewind() {
    video.currentTime -= 10;
}

function fastForward() {
    video.currentTime += 25;
}

// Progress bar updates
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
}

// Scrubbing functionality for the progress bar
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
volume.addEventListener('input', handleVolumeChange);
playbackSpeed.addEventListener('input', handleSpeedChange);

rewindBtn.addEventListener('click', rewind);
fastForwardBtn.addEventListener('click', fastForward);

progress.addEventListener('click', scrub);
