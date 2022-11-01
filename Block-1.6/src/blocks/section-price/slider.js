import Swiper, { Pagination } from 'swiper'

export const sliderPrice = document.querySelector('.swiper-price')
export let mySwiperPrice

export function mobileSliderPrice() {
  if (window.innerWidth < 768 && sliderPrice.dataset.mobile === 'false') {
    mySwiperPrice = new Swiper(sliderPrice, {
      modules: [Pagination],
      loop: true,
      spaceBetween: 16,
      slidesClass: 'swiper-slide',
      pagination: {
        el: '.swiper-pagination',
        tupe: 'bullets',
        clickable: true
      },
      slidesPerView: 'auto'
    })

    sliderPrice.dataset.mobile = 'true'
  } else if (window.innerWidth >= 768 && sliderPrice.dataset.mobile == 'true') {
    sliderPrice.dataset.mobile = 'false'
    mySwiperPrice.destroy()
  }
}

mobileSliderPrice()

window.addEventListener('resize', () => {
  mobileSliderPrice()
})
