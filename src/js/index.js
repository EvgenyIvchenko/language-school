import 'wicg-inert';
import 'what-input';
import { testSupportWebp } from './modules/test-support-webp.js';
import { defocusButton } from './modules/defocus-button.js';
import { initLinkScroll } from './modules/init-link-scroll.js';
import { initPhoneMask } from './modules/init-phone-mask.js';
import { initPhoneHref } from './modules/init-phone-href.js';
import { initMenu } from './modules/init-menu.js';
import { initSwiper } from './modules/init-swiper.js';
import { initQuestionsDropdown } from './modules/questions-drop-down.js';

testSupportWebp();
defocusButton();
initPhoneHref();
initLinkScroll();
initPhoneMask();
initMenu();
initSwiper();
initQuestionsDropdown();
