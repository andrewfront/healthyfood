const slider = () => {
    const swiperMain = new Swiper('.features__swiper', {
        // loop: false,
        grabCursor: true,
        slidesPerView: 'auto',
        speed: 1000,
        spaceBetween: 86,
                autoplay: {
            delay: 2000,
        },
        disableOnInteraction: true,
    });
}
export default slider