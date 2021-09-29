import Swiper from 'swiper';
const slider = () => {
    const swiperMain = new Swiper('.features__swiper', {
        loop: true,
        grabCursor: true,
        slidesPerView: 3,
        speed: 1000,
                autoplay: {
            delay: 2000,
        },
    });
        const tipsContainer = document.querySelector('.features__swiper')
    tipsContainer.addEventListener('mouseenter', () => {
        swiperMain.autoplay.stop()
    })
    tipsContainer.addEventListener('mouseleave', () => {
        swiperMain.autoplay.start()
    })
}
export default slider