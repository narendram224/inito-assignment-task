export class Accordion {
    constructor(selector) {
      this.accordion = document.querySelector(selector);
      this.items = this.accordion.querySelectorAll('.accordion-item');
      this.headers = this.accordion.querySelectorAll('.accordion-header');
      
      this.init();
    }
  
    init() {
      this.headers.forEach(header => {
        header.addEventListener('click', () => {
          const item = header.parentElement;
          if (item.classList.contains('active')) {
            this.closeItem(item);
          } else {
            this.openItem(item);
          }
        });
      });
    }
  
    openItem(item) {
      this.items.forEach(i => this.closeItem(i));
      item.classList.add('active');
      const content = item.querySelector('.accordion-content');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  
    closeItem(item) {
      item.classList.remove('active');
      const content = item.querySelector('.accordion-content');
      content.style.maxHeight = null;
    }
  }
  