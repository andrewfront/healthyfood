require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import Swiper, { Autoplay} from 'swiper';
Swiper.use([Autoplay]);
import slider from './modules/slider'
import map from './modules/map'
import burger from './modules/burger'
window.addEventListener('DOMContentLoaded', () => {
    slider()
    map()
    burger()
    const date = document.querySelector('.footer__text span')
    date.textContent = new Date().getFullYear()
})