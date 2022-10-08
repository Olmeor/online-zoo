import '../../assets/styles/fonts.css'
import '../../assets/styles/normalize.css'
import './donate_header.css'
import './donate_donate.css'
import './donate_media.css'
import './donate_footer.css'
import '../../assets/styles/burger.css'

import { burgerOpen, openBurger, closeBurger } from '../../assets/js/burger'

burgerOpen.onclick = openBurger;
document.onclick = closeBurger;

const amountArr = document.querySelectorAll('.donate__radio');
const amountField = document.querySelector('.donate__input');

const initDonate = () => {
  amountArr[5].checked = true;
  amountField.value = "100"
}

initDonate();

const addAmount = (e) => {
  for (let item of amountArr) {
    if (item !== e.target) {
      item.checked = false;
    }
  }
  e.target.checked = true;
  amountField.value = e.target.value;
}

amountArr.forEach(e => e.onclick = addAmount);

const recheckAmount = () => {
  for (let item of amountArr) {
    if (item.value == amountField.value) {
      item.checked = true;
    } else {
      item.checked = false;
    }
  }
}

amountField.oninput = recheckAmount;
