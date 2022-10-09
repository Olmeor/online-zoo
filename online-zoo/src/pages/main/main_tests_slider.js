export const testsInput = document.querySelector('.testimonial__input');
export const testsArrowUp = document.querySelector('.testimonial__arrow_up');
export const testsArrowDown = document.querySelector('.testimonial__arrow_down');
let step = 0;

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

const checkArrowState = (step) => {
  if (step < -1 && step > -990) {
    testsArrowDown.style.opacity = "1";
    testsArrowUp.style.opacity = "1";
  } else if (step < -990) {
    testsArrowUp.style.opacity = "0.5";
    return;
  } else if (step > -1) {
    testsArrowDown.style.opacity = "0.5";
    return;
  }
}

checkArrowState(step);

export const testUp = () => {
  if (step < -990) return;
  testsArrowUp.onclick = null;
  const testsSlider = document.querySelector('.testimonial__slider');
  const translateY = val => `translateY(${val})`;
  step -= 124;
  testsSlider.style.transform = translateY(step + 'px');

  const waitUp = () => {testsArrowUp.onclick = testUp};
  setTimeout(waitUp, 1000);
  checkArrowState(step);
}

export const testDown = () => {
  if (step > -1) return;
  testsArrowDown.onclick .onclick = null;
  const testsSlider = document.querySelector('.testimonial__slider');
  const translateY = val => `translateY(${val})`;
  step += 124;
  testsSlider.style.transform = translateY(step + 'px');

  const waitUp = () => {testsArrowDown.onclick = testDown};
  setTimeout(waitUp, 1000);
  checkArrowState(step);
}