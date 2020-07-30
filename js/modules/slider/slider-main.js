import Slider from './slider';

export default class MainSlider extends Slider {
  constructor(btn) {
    super(btn);
  }

  showSlide(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    try {
      this.timeBlock.style.opacity = '0';

      if(n === 3) {
        this.timeBlock.classList.add('animated');
        setTimeout(() => {
          this.timeBlock.classList.add('slideInUp');
          this.timeBlock.style.opacity = '1';
        }, 3000);
      } else {
        this.timeBlock.classList.remove('slideInUp');
      }
    } catch(e) {}

    this.slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    this.slides[this.slideIndex - 1].style.display = 'block';
  }

  plusSlide(n) {
    this.slideIndex +=n;
    this.showSlide(this.slideIndex);
  }

  bindTriggers() {
    this.btns.forEach((btn) => {
      if (btn.classList.contains('next')) {
        btn.addEventListener('click', () => {
          this.plusSlide(1);
        });
      }

      btn.parentElement.previousElementSibling.addEventListener('click', () => {
        this.slideIndex = 1;
        this.showSlide(this.slideIndex);
      });
    });

    document.querySelectorAll('.nextmodule').forEach((btn) => {
      btn.addEventListener('click', (evt) => {
        evt.stopPropagation();
        this.plusSlide(1);
      });
    });

    document.querySelectorAll('.prevmodule').forEach((btn) => {
      btn.addEventListener('click', (evt) => {
        evt.stopPropagation();
        this.plusSlide(-1);
      });
    });
  }

  render() {
    if (this.container) {
      try {
        this.timeBlock = document.querySelector('.hanson');
      } catch(e) {}
      this.bindTriggers();

      this.showSlide(this.slideIndex);
    }
  }

}
