export let readBtn = document.querySelector('.read-more')
export let sectionText = document.querySelector('.text-section__wrapper')

export function readMore() {
  let readBtnImg = document.querySelector('.read-more__img')
  let readBtnName = document.querySelector('.read-more__name')

  readBtnImg.classList.toggle('read-more__img--hide')

  readBtnName.innerHTML =
    readBtnName.innerHTML === 'Скрыть'
      ? (readBtnName.innerHTML = 'Читать далее')
      : (readBtnName.innerHTML = 'Скрыть')

  sectionText.classList.toggle('text-section__wrapper--show')
  sectionText.classList.toggle('text-section__wrapper')
}

readBtn.addEventListener('click', readMore)
