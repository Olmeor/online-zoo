// Pets slider

export const arrowLeft = document.querySelector('.pets__arrow_left');
export const arrowRight = document.querySelector('.pets__arrow_right');
const slider = document.querySelector('.pets__slider');
const item0 = document.querySelector('.pets__wrapper_left');
const item1 = document.querySelector('.pets__wrapper');
const item2 = document.querySelector('.pets__wrapper_right');

const initPetsArray = () => {
  const pet_1 =
  `
<div id="pet_1" class="pets__cards">
  <div class="pets__border">
  	<div class="pets__frame">
  		<div class="pets__image pandas"></div>
  	</div>
  	<div class="pets__title-wrapper">
  		<div class="pets__title-shadow">
  			<div class="pets__title">
  				<div class="pets__name">giant Pandas</div>
  				<div class="pets__place">Native to Southwest China</div>
  			</div>
  			<div class="banana"></div>
  		</div>
  	</div>
  </div>
</div>
  `;

  const pet_2 =
  `
<div id="pet_2"class="pets__cards">
  <div class="pets__border">
  	<div class="pets__frame">
  		<div class="pets__image eagles"></div>
  	</div>
  	<div class="pets__title-wrapper">
  		<div class="pets__title-shadow">
  			<div class="pets__title">
  				<div class="pets__name">Eagles</div>
  				<div class="pets__place">Native to South America</div>
  			</div>
  			<div class="meat"></div>
  		</div>
  	</div>
  </div>
</div>
  `;

  const pet_3 =
  `
<div id="pet_3" class="pets__cards">
  <div class="pets__border">
  	<div class="pets__frame">
  		<div class="pets__image gorillas"></div>
  	</div>
  	<div class="pets__title-wrapper">
  		<div class="pets__title-shadow">
  			<div class="pets__title">
  				<div class="pets__name">Gorillas</div>
  				<div class="pets__place">Native to Congo</div>
  			</div>
  			<div class="banana"></div>
  		</div>
  	</div>
  </div>
</div>
  `;

  const pet_4 =
  `
<div id="pet_4" class="pets__cards">
  <div class="pets__border">
  	<div class="pets__frame">
  		<div class="pets__image alligator"></div>
  	</div>
  	<div class="pets__title-wrapper">
  		<div class="pets__title-shadow">
  			<div class="pets__title">
  				<div class="pets__name">Alligators</div>
  				<div class="pets__place pets__place_alig_1">Native to Southeastern U. S.</div>
  				<div class="pets__place pets__place_alig_2">Native to Southeastern United State</div>
  			</div>
  			<div class="meat"></div>
  		</div>
  	</div>
  </div>
</div>
  `;

  const pet_5 =
  `
<div id="pet_5" class="pets__cards">
  <div class="pets__border">
  	<div class="pets__frame">
  		<div class="pets__image sloth"></div>
  	</div>
  	<div class="pets__title-wrapper">
  		<div class="pets__title-shadow">
  			<div class="pets__title">
  				<div class="pets__name">Two-toed Sloth</div>
  				<div class="pets__place">Mesoamerica, South America</div>
  			</div>
  			<div class="banana"></div>
  		</div>
  	</div>
  </div>
</div>
  `;

  const pet_6 =
  `
<div id="pet_6" class="pets__cards">
  <div class="pets__border">
  	<div class="pets__frame">
  		<div class="pets__image cheetahs"></div>
  	</div>
  	<div class="pets__title-wrapper">
  		<div class="pets__title-shadow">
  			<div class="pets__title">
  				<div class="pets__name">cheetahs</div>
  				<div class="pets__place">Native to Africa</div>
  			</div>
  			<div class="meat"></div>
  		</div>
  	</div>
  </div>
</div>
  `;

  const pet_7 =
  `
<div id="pet_7" class="pets__cards">
  <div class="pets__border">
  	<div class="pets__frame">
  		<div class="pets__image penguins"></div>
  	</div>
  	<div class="pets__title-wrapper">
  		<div class="pets__title-shadow">
  			<div class="pets__title">
  				<div class="pets__name">Penguins</div>
  				<div class="pets__place">Native to Antarctica</div>
  			</div>
  			<div class="meat"></div>
  		</div>
  	</div>
  </div>
</div>
  `;

  const pet_8 =
  `
<div id="pet_8" class="pets__cards">
  <div class="pets__border">
  	<div class="pets__frame">
  		<div class="pets__image yeties"></div>
  	</div>
  	<div class="pets__title-wrapper">
  		<div class="pets__title-shadow">
  			<div class="pets__title">
  				<div class="pets__name">Yeties</div>
  				<div class="pets__place">Siberian tayga</div>
  			</div>
  			<div class="meat"></div>
  		</div>
  	</div>
  </div>
</div>
  `;
  return [pet_1, pet_2, pet_3, pet_4, pet_5, pet_6, pet_7, pet_8];
}

let arrPets = initPetsArray();

let countSlide;

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