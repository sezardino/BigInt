export default class VideoPlayer {
  constructor(openTrigger, overlay, closeTrigger) {
    this.openBtn = document.querySelectorAll(openTrigger);
    this.overlay = document.querySelector(overlay);
    this.closeTrigger = this.overlay.querySelector('.close');
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  openBtnClick() {
    this.openBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        if(document.querySelector('iframe#frame')) {
          this.overlay.style.display = 'flex';
          if(this.path !== btn.getAttribute('data-url')) {
            this.path = btn.getAttribute('data-url');
            this.player.loadVideoById({videoId: this.path});
          }
        } else {
          this.path = btn.getAttribute('data-url');
          this.createPlayer(this.path);
        }
      });
    });
  }

  closeBtnClick() {
    this.closeTrigger.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
    });
  }

  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
      events: {
        'onStateChange': this.onPlayerStateChange
      }
    });
    this.overlay.style.display = 'flex';
  }

  onPlayerStateChange() {

  }

  initPlayer() {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    this.openBtnClick();
    this.closeBtnClick();
  }
}
