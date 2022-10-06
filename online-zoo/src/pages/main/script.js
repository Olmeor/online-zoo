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

import { burgerOpen, openBurger, closeBurger } from '../../assets/js/burger'
import { arrowLeft, arrowRight, moveLeft, moveRight } from './main_pets_slider'

burgerOpen.onclick = openBurger;
document.onclick = closeBurger;

arrowLeft.onclick = moveLeft;
arrowRight.onclick = moveRight;
