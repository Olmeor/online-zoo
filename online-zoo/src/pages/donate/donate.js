import '../../assets/styles/fonts.css'
import '../../assets/styles/normalize.css'
import './donate_header.css'
import './donate_donate.css'
import './donate_media.css'
import './donate_footer.css'
import '../../assets/styles/burger.css'

import { openBurger, closeBurger } from '../../assets/js/burger'

const burgerOpen = document.querySelector('.header__burger_open');
burgerOpen.onclick = openBurger;
document.onclick = closeBurger;