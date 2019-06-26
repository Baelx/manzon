// import $ from 'jquery';
import slick from 'slick-carousel';

class Slider {
  constructor(sliderClass, sliderNavClass) {
    this.sliderClass = sliderClass;
    this.sliderNavClass = sliderNavClass;
    this.initSlider();
    this.initNav();
  }

  initSlider() {
    this.sliderClass.slick({
      autoplay: true,
      fade: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      // asNavFor: this.sliderNavClass,
      dots: true,
      focusOnSelect: true
    });
  }

  initNav() {
    this.sliderNavClass.slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    });
  }
}

export default Slider;
