document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".button_toggle");
  const additionalText = document.querySelector(".div_text_additional");

  toggleButton.addEventListener("click", function () {
    toggleButton.style.display = "none";
    additionalText.classList.toggle("active");
  });
});

class RevealSection extends HTMLElement {
  constructor() {
    super();
    this.observer = null;
  }

  connectedCallback() {
    this.initIntersectionObserver();
  }

  initIntersectionObserver() {
    const section = this.querySelector(".section_image_text");

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("visible");
          } else {
            section.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    this.observer.observe(this);
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

customElements.define("reveal-section", RevealSection);
