export class TestimonialSlider {
    constructor(selector) {
      this.slider = document.querySelector(selector);
      this.slides = this.slider.querySelectorAll('.slide');
      this.dots = this.slider.querySelectorAll('.dot');
      this.slideIndex = 0;
      this.slideInterval = null;
      this.init();
    }
  
    init() {
      this.showSlides();
      this.startAutoSlide();
  
      this.dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
          clearInterval(this.slideInterval);
          this.slideIndex = parseInt(event.target.getAttribute('data-slide')) - 1;
          this.showSlides();
          this.startAutoSlide();
        });
      });
    }
  
    showSlides() {
      this.slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-100 * this.slideIndex}%)`;
      });
  
      this.dots.forEach(dot => dot.classList.remove('active'));
      this.dots[this.slideIndex].classList.add('active');
    }
  
    nextSlide() {
      this.slideIndex = (this.slideIndex + 1) % this.slides.length;
      this.showSlides();
    }
  
    startAutoSlide() {
      this.slideInterval = setInterval(() => this.nextSlide(), 2000);
    }
  }