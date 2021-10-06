require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import Swiper, { Autoplay} from 'swiper';
Swiper.use([Autoplay]);
import Inputmask from "inputmask";
import { justvalidate } from "just-validate/dist/js/just-validate";
import slider from './modules/slider'
import map from './modules/map'
import burger from './modules/burger'
import scroll from './modules/scroll'
import mail from './modules/mail'
import filterMenu from './modules/filterMenu'
window.addEventListener('DOMContentLoaded', () => {
    slider()
    map()
    burger()
    scroll()
    mail()
    filterMenu()
    const date = document.querySelector('.footer__text span')
    date.textContent = new Date().getFullYear()
})