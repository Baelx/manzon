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
      // arrows: false,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: this.sliderNavClass,
      dots: true,
      focusOnSelect: true
    });
  }

  initNav() {
    this.sliderNavClass.slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      autoplay: true,
      fade: true,
      arrows: false,
      asNavFor: this.sliderClass
    });
  }
}

export default Slider;
