const playerEl = document.querySelector('.player');
const playerPlayBtnEl = playerEl.querySelector('.player__play-btn');
const playerPauseBtnEl = playerEl.querySelector('.player__pause-btn');
const playerVideoEl = playerEl.querySelector('.player__video');

const playVideo = () => {
  playerVideoEl.play();
  playerEl.classList.add('playing');
};
const pauseVideo = () => playerVideoEl.pause();

playerVideoEl.addEventListener('click', () => {
  if (playerEl.classList.contains('paused')) {
    playerVideoEl.play();
    playerEl.classList.remove('paused');
    return;
  }

  if (playerEl.classList.contains('playing')) {
    playerVideoEl.pause();
    playerEl.classList.add('paused');
    return;
  }

  playerVideoEl.play();
  playerEl.classList.add('playing');
});
