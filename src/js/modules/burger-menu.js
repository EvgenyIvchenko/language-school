const burgerButtonElement = document.querySelector('.nav__menu');
const toggleIconElement = document.querySelector('.nav__wrapper-menu');
const menuNavigationElement = document.querySelector('.nav');

export const burgerMenu = () => burgerButtonElement.addEventListener('click', (e) => {
	e.preventDefault();
	toggleIconElement.classList.toggle('active');
	menuNavigationElement.classList.toggle('nav--open');
});
