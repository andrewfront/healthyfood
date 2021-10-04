require ('es6-promise-polyfill');
import 'nodelist-foreach-polyfill';
import Swiper, { Autoplay} from 'swiper';
Swiper.use([Autoplay]);
import slider from './modules/slider'
import map from './modules/map'
import burger from './modules/burger'
import scroll from './modules/scroll'
window.addEventListener('DOMContentLoaded', () => {
    slider()
    map()
    burger()
    scroll()
    const date = document.querySelector('.footer__text span')
    date.textContent = new Date().getFullYear()
})