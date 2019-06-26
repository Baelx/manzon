import $ from 'jquery';

// Import local modules
import WPHelper from './modules/Waypoints';
import Slider from './modules/Slider';
import seeMoreHover from './modules/Hover';

// Instantiate new waypoints
let ctaUnderline = new WPHelper($(".underline"), "70%");
let featureUnderline = new WPHelper($(".underline--feature"), "80%");

// Gallery slider
let residentialSlider = new Slider($('.gallery__residential'), $('.gallery__residential--nav'));

// Hover effect
seeMoreHover($(".see-more__industry--residential"));
seeMoreHover($(".see-more__industry--commercial"));
// const hover = new Hover();
