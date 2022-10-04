import '../../assets/styles/fonts.css'
import '../../assets/styles/normalize.css'
import './main_header.css'
import './main_watch.css'
import './main_backstage.css'
import './main_pets.css'
import './main_feed.css'
import './main_testimonial.css'
import './main_footer.css'
import './main_burger.css'



const burgerOpen = document.querySelector('.header__burger_open'); // кнопка бургер
const bodyShadow = document.querySelector('.body__shadow'); // тень
const nav = document.querySelector('.header__nav'); // меню бургер
const design = document.querySelector('.header__designed');
const title = document.querySelector('.header__title-burger');
const navItems = document.querySelectorAll('.header__item'); // строка меню
const burgerClose = document.querySelector('.header__burger_close'); // кнопка закрыть

burgerOpen.addEventListener('click', e => { // слушаем кнопку
	e.stopPropagation(); // останавливаем всплытие
	nav.classList.add('header__nav-active'); // открываем бургер
  design.classList.add('_active');
	title.classList.add('_active');
	// bodyShadow.classList.add('_active');
	burgerClose.classList.add('_active');
  document.body.style = "overflow: hidden";
});

document.addEventListener('click', e => { // слушаем все
	let element = e.target; // принимаем клик
	let burgerCheck = element == nav; // проверка клика по меню ли
	//если бургер открыт и клик не по нему
	if (nav.classList.contains('header__nav-active') && !burgerCheck) {
		nav.classList.remove('header__nav-active'); // прячем бургер
    design.classList.remove('_active');
		title.classList.remove('_active');
		// bodyShadow.classList.remove('_active');
		burgerClose.classList.remove('_active');
    document.body.style = "overflow: none";
	}
})






// const settingsButton = document.querySelector('.settings-button');
// function toggleSettingsMenu() {
//   settingsForm.classList.toggle('settings-open');
//   settingsForm.classList.toggle('hidden-block');
//   settingsMenu.classList.toggle('settings-menu-shadow');
// }

// .settings-open{
//   left: 30px;
// }

// .hidden-block {
// 	opacity: 0;
// 	visibility: hidden;
// 	overflow: hidden;
//   min-height: 0;
//   padding: 0;
// 	margin: 0;
//   font-size: 0;
// 	transform: scale(0, 0);
//   transition: .3s;
// }

// .settings-menu-shadow {
//   position: fixed;
//   z-index: 3;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, .3);
//   left: 0;
//   bottom: 0;
// }