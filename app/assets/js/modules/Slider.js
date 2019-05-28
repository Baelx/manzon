import $ from 'jquery';

class Slider {
  constructor() {
    this.els = $(".gallery__residential");
    this.initSlider();
  }

  initSlider() {
    this.els.slick({
      arrows: false,
      infinite: true
    });
  }
}

export default Slider;
