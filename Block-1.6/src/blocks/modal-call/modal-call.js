export let openModalCallBtn = document.querySelector('.request-btn')
import { menuClose } from '../burger-menu/burger-menu'

let closeBtn = document.querySelectorAll('.close__btn')
let overlay = document.querySelector('.overlay')

export function modalCallOpen() {
  let menuBlock = document.querySelector('.burger-menu')
  let modalCallBlock = document.querySelector('.modal-call')
  let modalFeedBlock = document.querySelector('.modal-feedback')
  let modalInputFocus = document.querySelector('.modal__input-tel')

  modalInputFocus.focus()

  modalCallBlock.classList.add('modal-call--active')

  if (modalCallBlock.classList.contains('modal-call--active')) {
    menuBlock.style.display = 'none'
    modalFeedBlock.style.display = 'none'
  }
  menuBlock.style.display = 'flex'
  modalFeedBlock.style.display = 'flex'

  overlay.classList.add('overlay--active')

  document.body.classList.add('--lock')
}

openModalCallBtn.addEventListener('click', modalCallOpen)
overlay.addEventListener('click', menuClose)

for (var i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener('click', menuClose)
}
