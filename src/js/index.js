import 'wicg-inert';
import 'what-input';
import { defocusButton } from './modules/defocus-button.js';
import { initPhoneMask } from './modules/init-phone-mask.js';
import { initPhoneHref } from './modules/init-phone-href.js';
import { initMenu } from './modules/init-menu.js';
import { initSwiper } from './modules/init-swiper.js';
import { initQuestionsDropdown } from './modules/questions-drop-down.js';

defocusButton();
initPhoneHref();
initPhoneMask();
initMenu();
initSwiper();
initQuestionsDropdown();
