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
import { testsCards, openTest, closeWindows } from './main_tests_popup'
import { testsInput, changeTest } from './main_tests_slider'

burgerOpen.onclick = openBurger;
document.onclick = closeBurger;

arrowLeft.onclick = moveLeft;
arrowRight.onclick = moveRight;

testsCards.forEach(e => e.onclick = openTest);

document.onclick = closeWindows;

testsInput.oninput = changeTest;

const testsArrowUp = document.querySelector('.testimonial__arrow_up');
const testsArrowDown = document.querySelector('.testimonial__arrow_down');
let step = 0;

const testUp = () => {
  if (step < -990) return;
  testsArrowUp.onclick = null;
  const testsSlider = document.querySelector('.testimonial__slider');
  const translateY = val => `translateY(${val})`;
  step -= 124;
  testsSlider.style.transform = translateY(step + 'px');

  const waitUp = () => {testsArrowUp.onclick = testUp};
  setTimeout(waitUp, 1000);
}

const testDown = () => {
  if (step > -1) return;
  testsArrowDown.onclick .onclick = null;
  const testsSlider = document.querySelector('.testimonial__slider');
  const translateY = val => `translateY(${val})`;
  step += 124;
  testsSlider.style.transform = translateY(step + 'px');

  const waitUp = () => {testsArrowDown.onclick = testDown};
  setTimeout(waitUp, 1000);
}

testsArrowUp.onclick = testUp;
testsArrowDown.onclick = testDown;