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
      console.log('test2');
      $('.site-header__btn__phone').addClass('phone-shake');
    }, function() {
      console.log("unhover")
    }
  )
}

const sus = 56;

export {seeMoreHover, phoneHover, sus};
