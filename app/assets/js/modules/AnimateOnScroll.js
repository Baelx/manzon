import {$} from 'jquery';

class AnimateOnScroll {

  //This will run as soon as a new instance of the object is created. Thus, hideInitially will be run right away
  constructor() {
    this.itemsToAnimate = $('.feature--check');
    this.hideInitially();
  }


  hideInitially() {
    this.itemsToAnimate.addClass('hideCheck');

  }
}

export default AnimateOnScroll;
