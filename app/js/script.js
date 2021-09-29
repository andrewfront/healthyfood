require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import Swiper, { Autoplay} from 'swiper';
Swiper.use([Autoplay]);
import slider from './modules/slider'
import map from './modules/map'
window.addEventListener('DOMContentLoaded', () => {
    slider()
    map()
    const date = document.querySelector('.footer__text span')
    date.textContent = new Date().getFullYear()
})