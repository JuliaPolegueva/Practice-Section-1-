export let showBtnBrands = document.querySelector('.show-btn-brands')
export let sectionBodyBrands = document.querySelector('.section__body-brands')

export function showMoreBrands() {
  let showBtnImg = document.querySelector('.show-btn__img-brands')
  let showBtnName = document.querySelector('.show-btn__name-brands')

  showBtnImg.classList.toggle('show-btn__img--hide')

  showBtnName.innerHTML =
    showBtnName.innerHTML === 'Скрыть'
      ? (showBtnName.innerHTML = 'Показать все')
      : (showBtnName.innerHTML = 'Скрыть')

  sectionBodyBrands.classList.toggle('section__body--show')
  sectionBodyBrands.classList.toggle('section__body')
}

showBtnBrands.addEventListener('click', showMoreBrands)

/*showBtn1.addEventListener('click', function () {
  let showBtnImg = document.querySelectorAll('.show-btn__img')
  let showBtnName = document.querySelectorAll('.show-btn__name')

  for (let i = 0; i < showBtnImg.length; i++) {
    let = showBtnImg[0].classList.toggle('show-btn__img--hide')
    showBtnImg[0].classList.toggle('show-btn__img--hide')
    showBtnImg[0].classList.toggle('show-btn__img')
  }

  for (let i = 0; i < showBtnImg.length; i++) {
    showBtnImg[0].classList.toggle('show-btn__img--hide')
    showBtnImg[0].classList.toggle('show-btn__img')
  }

  for (let i = 0; i < showBtnImg.length; i++) {
    showBtnName[0].innerHTML =
      showBtnName[0].innerHTML === 'Скрыть'
        ? (showBtnName[0].innerHTML = 'Показать все')
        : (showBtnName[0].innerHTML = 'Скрыть')
  }

  for (let i = 0; i < showBtnImg.length; i++) {
    sectionBody[0].classList.toggle('section__body--show')
  }
})

/*showBtn2.addEventListener('click', showMore)*/
