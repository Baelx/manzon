import $ from 'jquery';

const seeMoreHover = (selector) => {
  $(selector).hover(
    function() {
      $(this).addClass('bg-zoom');
      $(this).children().children().addClass('overline--extend');
    }, function() {
      $(this).removeClass('bg-zoom');
      $(this).children().children().removeClass('overline--extend');
    }
  )
}

export default seeMoreHover;
