import $ from 'jquery';
import slick from 'slick-carousel';
import smoothScroll from 'jquery-smooth-scroll';

// Import local modules
import WPHelper from './modules/Waypoints';
import { Slider, GallerySlider } from './modules/Slider';
import seeMoreHover from './modules/Hover';

// Instantiate new waypoints
const ctaUnderline = new WPHelper($(".underline"), "70%", "show-underline");
const featureUnderline = new WPHelper($(".underline--feature"), "80%", "show-underline");
const checkMarks = new WPHelper($(".check"), "70%", "check--animate");

// Smooth Scrolling
$('.hero__see-more-link').smoothScroll();

// // Gallery sliders
// const residentialSlider = new GallerySlider($('.gallery__residential'), $('.gallery__residential--nav'));
// const commercialSlider = new GallerySlider($('.gallery__commercial'), $('.gallery__commercial--nav'));

// Reviews slider
const reviewsSlider = new Slider($('.reviews--slider'), {
  autoplay: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true
});

// Hover effect
seeMoreHover($(".see-more__industry--residential"));
seeMoreHover($(".see-more__industry--commercial"));



// TESTING
$('.slider-display').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  autoplay: true,
  autoplaySpeed: 4000,
  lazyLoad: 'ondemand',
  pauseOnFocus: true
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-display',
  arrows: false,
  focusOnSelect: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 4000,
  lazyLoad: 'progressive',
  pauseOnFocus: true,
infinite: true
  // nextArrow: '<i class="fa fa-arrow-right"></i>',
  // prevArrow: '<i class="fa fa-arrow-left"></i>'
});
