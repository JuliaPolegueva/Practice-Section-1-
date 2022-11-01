export let showBtnEquip = document.querySelector('.show-btn-equipment')
export let sectionBodyEquip = document.querySelector('.section__body-equipment')

export function showMoreEquip() {
  let showBtnImg = document.querySelector('.show-btn__img-equipment')
  let showBtnName = document.querySelector('.show-btn__name-equipment')

  showBtnImg.classList.toggle('show-btn__img--hide')

  showBtnName.innerHTML =
    showBtnName.innerHTML === 'Скрыть'
      ? (showBtnName.innerHTML = 'Показать все')
      : (showBtnName.innerHTML = 'Скрыть')

  sectionBodyEquip.classList.toggle('section__body--show')
  sectionBodyEquip.classList.toggle('section__body')
}

showBtnEquip.addEventListener('click', showMoreEquip)
