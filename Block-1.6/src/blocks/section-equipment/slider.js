import Swiper, { Pagination } from 'swiper'

export const sliderEquip = document.querySelector('.swiper-equipment')
export let mySwiperEquip

export function mobileSliderEquip() {
  if (window.innerWidth < 768 && sliderEquip.dataset.mobile === 'false') {
    mySwiperEquip = new Swiper(sliderEquip, {
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

    sliderEquip.dataset.mobile = 'true'
  } else if (window.innerWidth >= 768 && sliderEquip.dataset.mobile == 'true') {
    sliderEquip.dataset.mobile = 'false'
    mySwiperEquip.destroy()
  }
}

mobileSliderEquip()

window.addEventListener('resize', () => {
  mobileSliderEquip()
})
