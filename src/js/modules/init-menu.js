const menuOpenElement = document.querySelector('.header__menu-open');
const navigation = document.querySelector('.navigation');

const onMenuOpenClick = (e) => {
	e.preventDefault();

	if (menuOpenElement.getAttribute('aria-expanded') === 'false') {
		menuOpenElement.setAttribute('aria-expanded', 'true');
		navigation.classList.add('opened');
	} else {
		menuOpenElement.setAttribute('aria-expanded', 'false');
		navigation.classList.remove('opened');
	}
};

export const initMenu = () => {
	menuOpenElement.addEventListener('click', onMenuOpenClick);
};
