// Pets slider

export const arrowLeft = document.querySelector('.pets__arrow_left');
export const arrowRight = document.querySelector('.pets__arrow_right');
const slider = document.querySelector('.pets__slider');
const item0 = document.querySelector('.pets__wrapper_left');
const item1 = document.querySelector('.pets__wrapper');
const item2 = document.querySelector('.pets__wrapper_right');

const initPetsArray = (countSlide) => {
	const objPets = [{
		image: "pandas",
		name: "giant Pandas",
		place: "Native to Southwest China",
		food: "banana",
	}, {
		image: "eagles",
		name: "eagles",
		place: "Native to South America",
		food: "meat",
	}, {
		image: "gorillas",
		name: "gorillas",
		place: "Native to Congo",
		food: "banana",
	}, {
		image: "alligators",
		name: "alligators",
		place: "Native to Southeastern U. S.",
		food: "meat",
	}, {
		image: "sloths",
		name: "Two-toed Sloth",
		place: "Mesoamerica, South America",
		food: "banana",
	}, {
		image: "cheetahs",
		name: "cheetahs",
		place: "Native to Africa",
		food: "meat",
	}, {
		image: "penguins",
		name: "Penguins",
		place: "Native to Antarctica",
		food: "meat",
	}, {
		image: "yeties",
		name: "Yeties",
		place: "Siberian tayga",
		food: "meat",
	}];

	let arr = [];

	for (let i = 0; i < objPets.length; i++) {
		arr[i] =
		`
		<div id="pet_${i}" class="pets__cards">
			<div class="pets__border">
				<div class="pets__frame">
					<div class="pets__image ${objPets[i].image}"></div>
				</div>
				<div class="pets__title-wrapper">
					<div class="pets__title-shadow">
						<div class="pets__title">
							<div class="pets__name">${objPets[i].name}</div>
							<div class="pets__place">${objPets[i].place}</div>
						</div>
						<div class="${objPets[i].food}"></div>
					</div>
				</div>
			</div>
		</div>
		`;
	}
	return arr;
}

let countSlide;
let arrPets = initPetsArray();

// let countSlide;

const switchSize = () => {
	let size = document.documentElement.clientWidth;
	if (size > 999) countSlide = 6;
	else if (size > 639) countSlide = 4;
	else countSlide = 1;
	item0.innerHTML = generatePetCard(arrPets, countSlide, item0).innerHTML;
  item1.innerHTML = generatePetCard(arrPets, countSlide, item1).innerHTML;
  item2.innerHTML = generatePetCard(arrPets, countSlide, item2).innerHTML;
}
switchSize();
window.onresize = switchSize;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
	return array;
}

function generatePetCard (array, count, item) {
	item.innerHTML = '';
	let arr = array;
	shuffle(arr);
	for (let i = 0; i < count; i++) {
		item.innerHTML += arr[i];
	}
	return item;
}

// (function () {
//   item0.innerHTML = generatePetCard(arrPets, countSlide, item0).innerHTML;
//   item1.innerHTML = generatePetCard(arrPets, countSlide, item1).innerHTML;
//   item2.innerHTML = generatePetCard(arrPets, countSlide, item2).innerHTML;
// }());

export const moveLeft = () => {
	slider.classList.add('transition-left');
  arrowLeft.onclick = null;
  arrowRight.onclick = null;
}

export const moveRight = () => {
	slider.classList.add('transition-right');
  arrowLeft.onclick = null;
  arrowRight.onclick = null;
}

// arrowLeft.onclick = moveLeft;
// arrowRight.onclick = moveRight;

slider.onanimationend = (animation) => {
	if (animation.animationName === 'move-left') {;
		slider.classList.remove('transition-left');
		item2.innerHTML = item1.innerHTML;
		item1.innerHTML = item0.innerHTML;
		item0.innerHTML = generatePetCard(arrPets, countSlide, item0).innerHTML;
	} else {
		slider.classList.remove('transition-right');
		item0.innerHTML = item1.innerHTML;
		item1.innerHTML = item2.innerHTML;
		item2.innerHTML = generatePetCard(arrPets, countSlide, item2).innerHTML;
	}
  arrowLeft.onclick = moveLeft;
  arrowRight.onclick = moveRight;
}