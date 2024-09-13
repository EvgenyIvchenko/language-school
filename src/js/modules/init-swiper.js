import Swiper from '../../../node_modules/swiper/swiper-bundle.min.mjs';

const initSwiperCourses = () => {
	new Swiper('.courses__card-slider', {
		// pagination: {
		// 	el: '.swiper-pagination',
		// },
		scrollbar: {
			el: '.card-slider__scrollbar',
			draggable: true,
		},
		grabCursor: true,
		watchOverflow: true,
		spaceBetween: 16,
		slidesPerView: 1,
		centeredSlides: false,
		initialSlide: 0,
		freeMode: true,
		breakpoints: {
			768: {
				spaceBetween: 40,
			},
			1280: {},
		}
	});
};

export const initSwiper = () => {
	initSwiperCourses();
};
