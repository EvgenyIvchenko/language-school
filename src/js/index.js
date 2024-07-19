import 'wicg-inert';
import 'what-input';
import { testSupportWebp } from './modules/test-support-webp.js';
import { defocusButton } from './modules/defocus-button.js';
import { initLinkScroll } from './modules/init-link-scroll.js';
import { initPhoneMask } from './modules/init-phone-mask.js';
import { initPhoneHref } from './modules/init-phone-href.js';

testSupportWebp();
defocusButton();
initPhoneHref();
initLinkScroll();
initPhoneMask();
