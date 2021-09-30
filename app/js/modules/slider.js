import Swiper from 'swiper';
const slider = () => {
    const swiperMain = new Swiper('.features__swiper', {
        loop: false,
        grabCursor: true,
        slidesPerView: 3,
        speed: 1000,
                autoplay: {
            delay: 2000,
        },
        breakpoints: {
            250: {
                slidesPerView: 1
            },
            909: {
                slidesPerView: 2
            },
            1391: {
                slidesPerView: 3

            },


        }
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