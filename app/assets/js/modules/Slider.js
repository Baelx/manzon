// import $ from 'jquery';
import slick from 'slick-carousel';

class Slider {
  constructor(sliderClass, options) {
    this.sliderClass = sliderClass;
    this.options = options;
    this.initSlider();
  }

  initSlider() {
    this.sliderClass.slick(this.options);
  }
}

class GallerySlider extends Slider {
  constructor(sliderClass, sliderNavClass){
    super(sliderClass);
    this.sliderNavClass = sliderNavClass;
    this.initSlider();
    this.initNav();
  }

  initSlider() {
    return super.initSlider();
  }

  initNav() {
    this.sliderNavClass.slick({
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    });
  }

}

export { Slider, GallerySlider };
