export default class Slider {
  constructor({container = null, btn = null, next = null, prev = null, activeClass = '', autoplay} = {}) {
    this.container = document.querySelector(container);
    try {this.slides = this.container.children;} catch(e) {}
    this.btns = document.querySelectorAll(btn);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.activeClass = activeClass;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }
}
