import Swiper, { Pagination } from 'swiper'

export const sliderBrands = document.querySelector('.swiper-brands')
export let mySwiperBrands

export function mobileSliderBrands() {
  if (window.innerWidth < 768 && sliderBrands.dataset.mobile === 'false') {
    mySwiperBrands = new Swiper(sliderBrands, {
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

    sliderBrands.dataset.mobile = 'true'
  } else if (
    window.innerWidth >= 768 &&
    sliderBrands.dataset.mobile == 'true'
  ) {
    sliderBrands.dataset.mobile = 'false'
    mySwiperBrands.destroy()
  }
}

mobileSliderBrands()

window.addEventListener('resize', () => {
  mobileSliderBrands()
})
