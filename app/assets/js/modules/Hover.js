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

const phoneHover = (selector) => {
  console.log("test1");
  
  $(selector).hover(
    function() {
      $('.site-header__btn__phone').addClass('phone-shake');
      console.log('hover');

    }, function() {
      $('.site-header__btn__phone').removeClass('phone-shake');
      console.log("unhover");
    }
  )
}


export {seeMoreHover, phoneHover};
