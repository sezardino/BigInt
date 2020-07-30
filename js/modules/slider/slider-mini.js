import Slider from './slider';

export default class MiniSlider extends Slider {
  constructor(container, next, prev) {
    super(container, next, prev);
  }

  decorize() {
    this.slides.forEach((slide) => {
      slide.classList.remove(this.activeClass);
    });
    if (!this.slides[0].closest('button')) {
      this.slides[0].classList.add(this.activeClass);
    }

  }

  nextSlide() {
    if (this.slides[1].tagName == 'BUTTON') {
      this.container.appendChild(this.slides[0]);
      this.container.appendChild(this.slides[0]);
      this.container.appendChild(this.slides[0]);
    }  else {
      this.container.appendChild(this.slides[0]);
    }

    this.decorize();
  }

  prevSlide() {
    for (let i = this.slides.length - 1 ; i > 0; i--) {
      if (this.slides[i].tagName !== 'BUTTON') {
        const lastSlide = this.slides[i];
        this.container.insertBefore(lastSlide, this.slides[0]);
        this.decorize();
        break;
      }
    }
  }

  bindTriggers() {
    this.next.addEventListener('click', () => this.nextSlide());

    this.prev.addEventListener('click', () => this.prevSlide());
  }

  autoplaySlider() {
    if (this.autoplay) {
      let interval;

      const play = () => {
        interval = setInterval(() => {
          this.nextSlide();
        }, 5000);
      };
      play();

      this.container.addEventListener('mouseenter', function() {
        clearInterval(interval);
      });

      this.container.addEventListener('mouseleave', function() {
        play();
      });
    }
  }

  init() {
    try {
      this.container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
    `;
    this.bindTriggers();
    this.decorize();
    this.autoplaySlider();
    } catch(e) {}
  }
}
