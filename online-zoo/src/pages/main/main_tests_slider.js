export const testsInput = document.querySelector('.testimonial__input');

export const changeTest = () => {
  const testsSlider = document.querySelector('.testimonial__slider');
  let shift = testsInput.value;
  let size;
  const translate = val => `translate(${val})`;
  const px = 'px';
  if ( document.documentElement.clientWidth > 1280) {
    size = 296.5;
    // testsInput.max = 7;
  } else if (document.documentElement.clientWidth > 999) {
    size = 322;
    // testsInput.max = 8;
  }
  testsSlider.style.transform = translate(-size * shift + px);
}

// testsInput.onchange = changeTest;