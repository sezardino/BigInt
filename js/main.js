import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Differences from './modules/differences';
import Form from './modules/form';


document.addEventListener('DOMContentLoaded', () => {
  const mainPageSlider = new MainSlider({
    container: '.page',
    btn: '.next'
  });
  mainPageSlider.render();

  const modulePageSlider = new MainSlider({
    container: '.moduleapp',
    btn: '.next'
  });
  modulePageSlider.render();

  const showUpSlider = new MiniSlider({
    container:'.showup__content-slider',
    next:'.showup__next',
    prev:'.showup__prev',
    activeClass:'card-active'
  });
  showUpSlider.init();

  const modulesSlider = new MiniSlider({
    container:'.modules__content-slider',
    next:'.modules__info-btns .slick-next',
    prev:'.modules__info-btns .slick-prev',
    activeClass:'card-active',
    autoplay: true
  });
  modulesSlider.init();

  const feedSlider = new MiniSlider({
    container:'.feed__slider',
    next:'.feed__slider .slick-next',
    prev:'.feed__slider .slick-prev',
    activeClass:'feed__item-active'
  });
  feedSlider.init();

  const joinForm = new Form('.join');
  joinForm.init();

  const scheduleForm = new Form('.schedule');
  scheduleForm.init();

  const differences = new Differences('.officerold', '.officernew', '.officer__card-item');
  differences.init();

  new VideoPlayer('.showup .play', '.overlay', '.close').initPlayer();
  new VideoPlayer('.module__video-item .play', '.overlay', '.close').initPlayer();
});
