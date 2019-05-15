import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class AnimateOnScroll {

  //This will run as soon as a new instance of the object is created. Thus, hideInitially will be run right away
  constructor() {
    this.itemToAnimate = $('.call-now::before');
    this.hideInitially();
    this.createWaypoints();
  }


  hideInitially() {
    this.itemToAnimate.addClass('hide-underline');
  }

  createWaypoints() {
    this.itemToAnimate.each(function() {
      let currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass('underline-item');
        }
      })
    });
  }
}

export default AnimateOnScroll;
