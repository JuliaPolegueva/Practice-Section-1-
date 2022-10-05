let showBtn = document.querySelector(".show-btn");
let showBtnImg = document.querySelector(".show-btn__img");
let showBtnName = document.querySelector(".show-btn__name");
let sectionBody = document.querySelector(".section__body");

showBtn.onclick = function () {
  showBtnImg.classList.toggle("show-btn__img--hide");

  showBtnName.innerHTML =
    showBtnName.innerHTML === "Скрыть"
      ? (showBtnName.innerHTML = "Показать все")
      : (showBtnName.innerHTML = "Скрыть");

  sectionBody.classList.toggle("section__body--show");
  sectionBody.classList.toggle("section__body");
};
