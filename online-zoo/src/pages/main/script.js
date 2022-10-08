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
import { openTest, closeWindows } from './main_testimonial_popup'

burgerOpen.onclick = openBurger;
document.onclick = closeBurger;

arrowLeft.onclick = moveLeft;
arrowRight.onclick = moveRight;

const testsCards = document.querySelectorAll('.testimonial__cards');

testsCards.forEach(e => e.onclick = openTest);

document.onclick = closeWindows;

// test slider

const testsSlider = document.querySelector('.testimonial__slider');