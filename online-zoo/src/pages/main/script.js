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
import './main_pets_slider.css'

import { openBurger, closeBurger } from '../../assets/js/burger'

const burgerOpen = document.querySelector('.header__burger_open');
burgerOpen.onclick = openBurger;
document.onclick = closeBurger;

// Pets slider

const arrowLeft = document.querySelector('.pets__arrow_left'); // стрелка влево
const arrowRight = document.querySelector('.pets__arrow_right'); // стрелка вправо
const slider = document.querySelector('.pets__slider'); // обвертка слайдера

const item0 = document.querySelector('.pets__wrapper_left');
const item1 = document.querySelector('.pets__wrapper');
const item2 = document.querySelector('.pets__wrapper_right');

item0.innerHTML = item1.innerHTML;
item2.innerHTML = item1.innerHTML;


const moveLeft = () => { // функция анимации влево
	slider.classList.add('transition-left'); // навешиваем анимацию
	arrowLeft.removeEventListener('click', moveLeft); // отключаем прослушку на время анимации
	arrowRight.removeEventListener('click', moveRight); // отключаем прослушку на время анимации
	// itemLeft(); // запуск функции слайдера влево
}

const moveRight = () => { // функция анимации вправо
	slider.classList.add('transition-right'); // навешиваем анимацию
	arrowRight.removeEventListener('click', moveRight); // отключаем прослушку на время анимации
	arrowLeft.removeEventListener('click', moveLeft); // отключаем прослушку на время анимации
	// itemRight(); // запуск функции слайдера вправо
}

arrowLeft.addEventListener('click', moveLeft); // на стрелки в мобильном
arrowRight.addEventListener('click', moveRight);
// item1.addEventListener('click', moveLeft); // на слайды в десктопе
// item3.addEventListener('click', moveRight);
// работа слайдера, перестановка слайдтов после сдвига
slider.addEventListener('animationend', (animation) => { // слушаем куда был сдвиг
	let itemBox = item1.innerHTML // активный слайдер
	if (animation.animationName === 'move-left') { // если была анимация влево
		slider.classList.remove('transition-left') // заканчиваем анимацию
		// item2.innerHTML = item1.innerHTML // перетасовывам слайды
		// item1.innerHTML = item0.innerHTML
		// item3.innerHTML = itemBox
		// item0.innerHTML = itemBox
		// item4.innerHTML = item1.innerHTML
	} else { // иначе была анимация вправо
		slider.classList.remove('transition-right') // заканчиваем анимацию
		// item2.innerHTML = item3.innerHTML // перетасовывам слайды
		// item3.innerHTML = item4.innerHTML
		// item1.innerHTML = itemBox
		// item4.innerHTML = itemBox
		// item0.innerHTML = item3.innerHTML
	}
	arrowLeft.addEventListener('click', moveLeft) // почему-то слетает прослушка стрелок
	arrowRight.addEventListener('click', moveRight)
})