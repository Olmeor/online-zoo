import { closeBurger } from '../../assets/js/burger'

const initTestsArray = () => {
  const tests = document.querySelector('.testimonial__slider');
  const objTests = [{
    id: "test-1",
    photo: "photo_0",
    name: "Michael John",
    place: "Local Austria",
    day: "Today",
    text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
  }, {
    id: "test-2",
    photo: "photo_1",
    name: "Oskar Samborsky",
    place: "Local Austria",
    day: "Yesterday",
    text: "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.<br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
  }, {
    id: "test-3",
    photo: "photo_2",
    name: "Oska Samborska",
    place: "Local Austria",
    day: "Yesterday",
    text: "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.<br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.",
  }, {
    id: "test-4",
    photo: "photo_3",
    name: "Fredericka Michelin",
    place: "Local Austria",
    day: "Yesterday",
    text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
  }, {
    id: "test-5",
    photo: "photo_2",
    name: "Mila Riksha",
    place: "Local Austria",
    day: "Yesterday",
    text: "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.<br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
  }, {
    id: "test-6",
    photo: "photo_0",
    name: "Henry Morgan",
    place: "Jamaica",
    day: "Last week",
    text: "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.<br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.",
  }, {
    id: "test-7",
    photo: "photo_1",
    name: "James Cook",
    place: "England",
    day: "Last week",
    text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
  }, {
    id: "test-8",
    photo: "photo_3",
    name: "Florence Arthaud",
    place: "France",
    day: "Today",
    text: "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.<br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
  }, {
    id: "test-9",
    photo: "photo_2",
    name: "Isabelle Autissier",
    place: "France",
    day: "Today",
    text: "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.<br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.",
  }, {
    id: "test-10",
    photo: "photo_0",
    name: "Thor Heyerdahl;",
    place: "Norway",
    day: "Yesterday",
    text: "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
  }, {
    id: "test-11",
    photo: "photo_1",
    name: "Francis Drake",
    place: "England",
    day: "Last month",
    text: "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.<br />The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
  }];


  for (let i = 0; i < objTests.length; i++) {
    tests.innerHTML +=
    `
    <div id="test-${i}" class="testimonial__cards">
      <div class="testimonial__border">
        <div class="testimonial__info">
          <div class="testimonial__photo ${objTests[i].photo}"></div>
          <div class="testimonial__title">
            <p class="testimonial__name">${objTests[i].name}</p>
            <p class="testimonial__local">
              <span>${objTests[i].place}</span><span>${objTests[i].day}</span>
            </p>
          </div>
        </div>
        <p class="testimonial__text">${objTests[i].text}</p>
      </div>
    </div>
    `;
  }
}

initTestsArray();

const testsCards = document.querySelectorAll('.testimonial__cards');

export function openTest(e) {
  const popup = document.querySelector('.testimonial__popup');
  const bodyShadow = document.querySelector('.body__shadow');
  let size = document.documentElement.clientWidth;
  e.stopPropagation();
  if (size < 641) {
    popup.classList.remove('hidden-block');
    bodyShadow.classList.add('_active');
    popup.innerHTML = e.currentTarget.innerHTML;
    popup.innerHTML += '<div class="testimonial__popup_close"></div>';
  }
}

function closeTest(e) {
  const popup = document.querySelector('.testimonial__popup');
  const bodyShadow = document.querySelector('.body__shadow');

  popup.classList.add('hidden-block');
  bodyShadow.classList.remove('_active');
  // document.body.style = "overflow: none";
}

testsCards.forEach(e => e.onclick = openTest);

export function closeWindows(e) {
  const nav = document.querySelector('.header__nav');
  const popup = document.querySelector('.testimonial__popup');

  if (nav.classList.contains('header__nav_open')) closeBurger(e);
  if (!popup.classList.contains('hidden-block')) closeTest(e);
}

document.onclick = closeWindows;