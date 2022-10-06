import '../../assets/styles/fonts.css'
import '../../assets/styles/normalize.css'
import './main_header.css'
import './main_watch.css'
import './main_backstage.css'
import './main_pets.css'
import './main_feed.css'
import './main_testimonial.css'
import './main_footer.css'
import '../../assets/styles/burger.css'
// import './main_pets_slider.css'

import { openBurger, closeBurger } from '../../assets/js/burger'

const burgerOpen = document.querySelector('.header__burger_open');
burgerOpen.onclick = openBurger;
document.onclick = closeBurger;

// Pets slider

