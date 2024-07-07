import { initializeHeader } from './src/components/header.js';
import { initializeFooter } from './src/components/footer.js';
import { renderMainContent } from './app.js';
import { TestimonialSlider } from './src/components/slider.js';
import { Accordion } from './src/components/accordion.js';
import { hideElementIfSmallScreen } from './src/helper/index.js';


document.addEventListener('DOMContentLoaded', () => {
  // initializeHeader();
  // renderMainContent();
  // initializeFooter();

//   let lastScrollpos = window.pageYOffset;
// let menuButtonCheck = document.querySelector(".menu-btn");
// window.onscroll = function() {
// 	let currentScrollPos = window.pageYOffset;
// 	if (lastScrollpos > currentScrollPos) {
//     debugger;
// 		document.getElementById("top-nav").style.top = "200px";
// 	} else {
//     debugger
// 		document.getElementById("top-nav").style.top = "200px";
// 	}
// 	lastScrollpos = currentScrollPos;
// 	menuButtonCheck.checked = false;
// } 
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

hideElementIfSmallScreen('.inito-lab-text',720);
});
