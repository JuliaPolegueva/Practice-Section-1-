export let openModalFeedBtn = document.querySelector('.status-btn')
import { menuClose } from '../burger-menu/burger-menu'

let overlay = document.querySelector('.overlay')
let closeBtn = document.querySelectorAll('.close__btn')

export function modalFeedbackOpen() {
  let menuBlock = document.querySelector('.burger-menu')
  let modalFeedBlock = document.querySelector('.modal-feedback')
  let modalCallBlock = document.querySelector('.modal-call')

  modalFeedBlock.classList.toggle('modal-feedback--active')

  if (modalFeedBlock.classList.contains('modal-feedback--active')) {
    menuBlock.style.display = 'none'
    modalCallBlock.style.display = 'none'
  }
  menuBlock.style.display = 'flex'
  modalCallBlock.style.display = 'flex'

  overlay.classList.toggle('overlay--active')

  document.body.classList.toggle('--lock')
}

openModalFeedBtn.addEventListener('click', modalFeedbackOpen)
overlay.addEventListener('click', menuClose)

for (var i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener('click', menuClose)
}
