import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

//Waypoints helper class
class WPHelper {
  constructor(elms, offset) {
    this.itemsToAnimate = elms;
    this.offsetPercent = offset;
    this.hideInitially();
    this.createWaypoint();
  }

  hideInitially() {
    this.itemsToAnimate.addClass("hide-underline");
  }


  createWaypoint() {
    var that = this;
    this.itemsToAnimate.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("show-underline");
        },
        offset: that.offsetPercent
      });
    });
  }


}



export default WPHelper;
