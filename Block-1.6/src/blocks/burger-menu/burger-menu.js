export let openMenuBtn = document.querySelector('.menu__btn')
export let closeBtn = document.querySelectorAll('.close__btn')
export let overlay = document.querySelector('.overlay')

export function menuOpen() {
  let menuBlock = document.querySelector('.burger-menu')
  let modalBlock = document.querySelector('.modal')

  menuBlock.classList.add('burger-menu--active')

  if (menuBlock.classList.contains('burger-menu--active')) {
    modalBlock.style.display = 'none'
  }
  modalBlock.style.display = 'flex'

  overlay.classList.add('overlay--active')

  document.body.classList.add('--lock')
}

export function menuClose() {
  let menuBlock = document.querySelector('.burger-menu')
  let modalCallBlock = document.querySelector('.modal-call')
  let modalFeedBlock = document.querySelector('.modal-feedback')

  if (menuBlock.classList.contains('burger-menu--active')) {
    menuBlock.classList.remove('burger-menu--active')
  }
  modalCallBlock.classList.remove('modal-call--active')
  modalFeedBlock.classList.remove('modal-feedback--active')

  overlay.classList.remove('overlay--active')

  document.body.classList.remove('--lock')
}

openMenuBtn.addEventListener('click', menuOpen)
overlay.addEventListener('click', menuClose)

for (var i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener('click', menuClose)
}
