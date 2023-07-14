import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
    console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});

const STORAGE_KEY = 'videoplayer-current-time';
let savedTime = localStorage.getItem(STORAGE_KEY);

if (savedTime) {
    player.setCurrentTime(savedTime);
}

player.on('timeupdate', throttle(function (event) {
    const currentTime = event.seconds;
    localStorage.setItem(STORAGE_KEY, currentTime);
}, 1000));
