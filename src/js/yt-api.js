const wrapperElement = document.querySelector('.home-preview__player-wrapper');
const containerElement = document.querySelector('.home-preview__player-container');
const buttonElement = document.querySelector('.home-preview__play-promo');

let player;

function onEscPress(e) {
	if (e.keyCode === 27) {
		player.stopVideo();
		wrapperElement.classList.remove('home-preview__player-wrapper--active');
		wrapperElement.removeEventListener('click', onLayoutClick);
		document.removeEventListener('keydown', onEscPress);
	}
}

function onLayoutClick(e) {
	if (!containerElement.contains(e.target)) {
		player.stopVideo();
		wrapperElement.classList.remove('home-preview__player-wrapper--active');
		wrapperElement.removeEventListener('click', onLayoutClick);
		document.removeEventListener('keydown', onEscPress);
	}
}

function onYouTubePlayerAPIReady() {
	player = new YT.Player('video', {
		events: {
			'onReady': onPlayerReady
		}
	});
}

function onPlayerReady() {
	buttonElement.addEventListener('click', (e) => {
		e.preventDefault();
		wrapperElement.classList.add('home-preview__player-wrapper--active');
		wrapperElement.addEventListener('click', onLayoutClick);
		document.addEventListener('keydown', onEscPress);
	});
}

const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
