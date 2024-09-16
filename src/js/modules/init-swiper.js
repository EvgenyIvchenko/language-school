import Swiper from '../../../node_modules/swiper/swiper-bundle.min.mjs';

const initSwiperCourses = () => {
	new Swiper('.card-slider', {
		pagination: {
			el: '.card-slider__pagination',
			clickable: true,
		},
		scrollbar: {
			el: '.card-slider__scrollbar',
			draggable: true,
		},
		grabCursor: true,
		watchOverflow: true,
		spaceBetween: 16,
		slidesPerView: 'auto',
		breakpoints: {
			768: {
				spaceBetween: 40,
				slidesPerGroup: 2,
			},
			1280: {
				spaceBetween: 40,
				slidesPerGroup: 3,
			},
		}
	});
};

export const initSwiper = () => {
	initSwiperCourses();
};
