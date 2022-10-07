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
  image: "gorilla",
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

let layoutPets = ``;
let countSlide = 2;
for (i = 0; i < countSlide; i++) {
  layoutPets +=
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
console.log(layoutPets);