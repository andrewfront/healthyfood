require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import Inputmask from "inputmask";
import { justvalidate } from "just-validate/dist/js/just-validate";
import AOS from '../../node_modules/aos/dist/aos'
import lazy from './modules/lazy'
import swiper from './modules/swiper'
import slider from './modules/slider'
import map from './modules/map'
import burger from './modules/burger'
import scroll from './modules/scroll'
import mail from './modules/mail'
import filterMenu from './modules/filterMenu'
window.addEventListener('DOMContentLoaded', () => {
    AOS.init()
    lazy()
    swiper()
    slider()
    map()
    burger()
    scroll()
    mail()
    filterMenu()
    const date = document.querySelector('.footer__text span')
    date.textContent = new Date().getFullYear()
})