import { initializeHeader } from './src/components/header.js';
import { initializeFooter } from './src/components/footer.js';
import { renderMainContent } from './app.js';
import { TestimonialSlider } from './src/components/slider.js';
import { Accordion } from './src/components/accordion.js';
import { hideElementIfSmallScreen } from './src/helper/index.js';


document.addEventListener('DOMContentLoaded', () => {
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      new TestimonialSlider('#testimonial-slider');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const sliderElement = document.querySelector('#testimonial-slider');
observer.observe(sliderElement);

new Accordion('#accordion');
new TestimonialSlider('#my-slider');

hideElementIfSmallScreen('.inito-lab-text',720);
});
