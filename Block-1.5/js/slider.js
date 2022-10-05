const slider = document.querySelector(".swiper");
let mySwiper;

function mobileSlider() {
  if (window.innerWidth < 768 && slider.dataset.mobile === "false") {
    mySwiper = new Swiper(slider, {
      loop: true,
      spaceBetween: 16,
      slidesClass: "swiper-slide",
      pagination: {
        el: ".swiper-pagination",
        tupe: "bullets",
        clickable: true,
      },
      slidesPerView: "auto",
    });

    slider.dataset.mobile = "true";
  }

  if (window.innerWidth >= 768) {
    slider.dataset.mobile = "false";
    mySwiper.destroy();
  }
}

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});
