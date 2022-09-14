
const swiper2 = new Swiper('.main-slider-cont', {
    spaceBetween: 30,
    slidesPerView: 4,
})

const swiper = new Swiper('.main-slider', {
    spaceBetween: 0,
    thumbs: {swiper:swiper2}
})




const instaSlider = new Swiper('.insta-slider', {
    spaceBetween: 30,
    slidesPerView: 4,
    loop: true,
    pagination: {
        el:".swiper-pagination"
    }
})

