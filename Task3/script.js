class CarouselController {
  constructor(selector) {
    this.selector = selector;
    this.swiperInstance = null;
    this.init();
  }

  init() {
    if (!this.swiperInstance) {
      this.swiperInstance = new Swiper(this.selector, {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        spaceBetween: 8,
      });

      this.swiperInstance.on("slideChange", (slider) => {
        console.log("Active slide", slider.activeIndex);
      });
      console.log("Swiper initialized.");
    }
  }

  destroy() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
      console.log("Swiper destroyed.");
    }
  }

  toggle() {
    if (this.swiperInstance) {
      this.destroy();
    } else {
      this.init();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const carouselController = new CarouselController(".swiper");

  const toggleButton = document.querySelector(".swiper-button");
  toggleButton.addEventListener("click", () => {
    carouselController.toggle();
  });
});
