import WPHelper from './modules/Waypoints';
import $ from 'jquery';
import Slider from './modules/Slider';
// import slick from 'slick-carousel';

let ctaUnderline = new WPHelper($(".underline"), "70%");
let featureUnderline = new WPHelper($(".underline--feature"), "80%");

// Gallery slider
let residentialSlider = new Slider($('.gallery__residential'), $('.gallery__residential--nav'));
