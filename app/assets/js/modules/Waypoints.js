import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

//Waypoints helper class
class WPHelper {
  constructor(elms, offset, classToApply) {
    this.itemsToAnimate = elms;
    this.offsetPercent = offset;
    this.classToApply = classToApply;
    this.createWaypoint();
  }

  createWaypoint() {
    let that = this;
    this.itemsToAnimate.each(function() {
      let currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass(that.classToApply);
        },
        offset: that.offsetPercent
      });
    });
  }
}



export default WPHelper;
